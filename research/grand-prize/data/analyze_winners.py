"""Compare overall/grand-prize winners against all other prize winners at
in-person collegiate hackathons (spring 2026), using HackWinnerDB.

Usage:
  git clone --depth 1 https://github.com/notsointresting/hackwinnerdb
  HACKWINNERDB=./hackwinnerdb/data python3 analyze_winners.py

Caveats: HackWinnerDB only holds *winners*, so lift = overall winners vs other
winners (not vs all submissions). Records are auto-imported from Devpost and
mostly unverified. n(overall) is small (~34), so treat lifts as directional.
"""
import csv, collections, glob, os, re
import yaml

D = os.environ.get("HACKWINNERDB", "./hackwinnerdb/data")
load = lambda p: yaml.safe_load(open(p))
H = {h["id"]: h for h in map(load, glob.glob(D + "/hackathons/**/*.yaml", recursive=True))}
P = {p["id"]: p for p in map(load, glob.glob(D + "/projects/*.yaml"))}
E = [load(p) for p in glob.glob(D + "/entries/*.yaml")]

# In-person collegiate events comparable to MHacks (hand-picked from the DB).
PEERS = """uc-berkeley-ai-hackathon-2026 la-hacks-2026 hack-canada-2026 hoohacks-2026
hackillinois-2026 bitcamp-2026 yhack-spring-2026 hackdavis-2026 starkhacks
hackprinceton-spring-26 hack-the-6ix-2026 irvinehacks-2026 diamondhacks-2026
datahacks-2026 hackusf-2026 makemit-x-harvard-2026 wildhacks hackku26
hacktech-by-caltech-2026 hacksmu-vii cuhacking7 catapult-2026 hackabull-vii
fullyhacks-2026 deerhacks-v-2026 broncohacks-2026 revolutionuc-2026 cuhackit-2026
genai-genesis-2026 hackupc-2026 unihack-2026-funded-by-the-european-union
hacklondon-2026 cheesehacks maddata26 hacked-2026 wehack-2026 bath-hack-2026
grizzhacks-8 innovation-hacks-2-0-2026 hackudc-2026 anthropic-x-maryland-hackathon""".split()
PE = [e for e in E if e["hackathon_id"] in PEERS]

OVERALL = re.compile(r"grand|overall|main prize|: 1st place$|^1st place$|^first place$|^1st prize$|^winner$|1st place winner|first place prize", re.I)
TRACKY = re.compile(r"track|best use|sponsor|beginner|first.time|by |challenge", re.I)

def is_overall(e):
    for a in e["awards"]:
        t = (a.get("title") or "").strip()
        if a["type"] == "grand-prize":
            return True
        if a["type"] in ("first-place", "winner") and OVERALL.search(t) and (not TRACKY.search(t) or re.search(r"overall|grand", t, re.I)):
            return True
    return False

HW = {"esp32", "arduino", "raspberry-pi", "jetson", "meta-quest", "qnx", "ros", "ros2"}
FLAGS = {
    "HARDWARE": r"esp32|arduino|raspberry|sensor|robot|wearable|glove|servo|\bband\b|device|cane",
    "HEALTH": r"health|patient|rehab|therap|nurs|medic|tremor|anxiety|senior|elder|als\b",
    "ACCESSIBILITY": r"blind|deaf|non-verbal|can.t speak|disab|accessib|tremor|sign language|visually impaired",
    "NATURE": r"plant|farm|crop|soil|irrigat|garden|elephant|animal|wildlife|climate|waste|energy|water|forest|tree",
    "AGENTIC": r"\bagent",
}

def feats(e):
    p = P[e["project_id"]]
    tech, cats = set(p.get("technologies") or []), set(p.get("categories") or [])
    text = f"{p.get('tagline') or ''} {p.get('summary') or ''}".lower()
    f = {"cat:" + c for c in cats} | {"tech:" + t for t in tech}
    for k, rx in FLAGS.items():
        if re.search(rx, text):
            f.add(k)
    if tech & HW:
        f.add("HARDWARE")
    return f

top = [e for e in PE if is_overall(e)]
rest = [e for e in PE if not is_overall(e)]
rate = lambda grp, k: sum(k in feats(e) for e in grp) / max(1, len(grp))

print(f"peer events={len(PEERS)} entries={len(PE)} overall={len(top)} other={len(rest)}")
rows = []
for k, n in collections.Counter(k for e in PE for k in feats(e)).items():
    if n >= 8:
        a, b = rate(top, k), rate(rest, k)
        rows.append((k, round(a, 3), round(b, 3), round(a / b, 2) if b else None, n))
rows.sort(key=lambda r: -(r[3] or 0))
with open("feature_lift.csv", "w", newline="") as f:
    w = csv.writer(f); w.writerow(["feature", "rate_overall", "rate_other_winners", "lift", "n_all"]); w.writerows(rows)
with open("overall_winners_2026.csv", "w", newline="") as f:
    w = csv.writer(f); w.writerow(["hackathon", "participants", "project", "award", "tagline", "technologies", "repo"])
    for e in sorted(top, key=lambda e: e["hackathon_id"]):
        p = P[e["project_id"]]
        aw = "; ".join(a["title"] for a in e["awards"] if a["type"] in ("grand-prize", "first-place", "winner"))
        w.writerow([e["hackathon_id"], H[e["hackathon_id"]].get("participant_count"), p["name"], aw,
                    (p.get("tagline") or "").strip(), " ".join(p.get("technologies") or []), p.get("github_url") or ""])
for r in rows[:15]:
    print(r)
for k in FLAGS:
    print(k, round(rate(top, k), 2), "vs", round(rate(rest, k), 2))
