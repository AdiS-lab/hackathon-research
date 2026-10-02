---
doc: cue-brief
status: v1
date: 2026-10-02 (night before MHacks 2026, Oct 3–4)
read_time: 5 min
files: "01-evidence-ranked.md (claims + confidence + sources) · 02-judgment.md (score, problems, red-team) · 03-deeper-meaning.md (framing + perspective)"
---

# Cue: the brief to read before tomorrow

## Verdict
**Build Cue. The idea is solid, and stronger than the current CUE.md says.** The research turned the tagline into something you can prove: perception science shows that **a late answer changes what the answer means**. Nothing found in AAC research, products or hackathons times AAC output to the partner's turn end. That's the invention.

**But the refined CUE.md tells the story in the wrong order, and two design assumptions don't fit the core user:**
1. It **opens with the camera ring**, the one part that's been done before (diaLEX, XAAC, and an aphasia-specific version from 2017).
2. **About 68% of people with aphasia have reading trouble**, but the flow asks them to read 2–3 sentences.
3. **Most people with aphasia after a stroke have a weak right side**, but the flow assumes two hands.

Score: **about 70/100 as written → about 84 with the fixes** (details in `02-judgment.md`).

## The idea in one breath (replace the first paragraph of CUE.md with this)
> **Cue is a ring that makes people with aphasia *on time* in conversation.** You compose your reply while your partner is still talking: point the ring at things, tap a core word, hear your options privately in your ear. Then hold the ring, and Cue speaks your words **the moment they finish their turn**, inside the ~700 ms window where a "yes" still sounds like a yes. A single click fires an instant laugh or "mm-hmm". You choose every word; Cue only chooses *when*.

## The 10 strongest points, ranked
| # | Point | Strength |
|---|---|---|
| 1 | **A late yes sounds like a reluctant yes.** Listeners rate replies after 600 → 1200 ms of silence as progressively less willing (Roberts et al. 2006). Past 700 ms, "no"-type answers outnumber "yes"-type ones (Kendrick & Torreira 2015). The brain expects "yes" after a fast reply (Bögels et al. 2015, EEG). | ★★★★★ new |
| 2 | **Cue copies how fluent speakers take turns:** they plan during the other's turn and launch on a turn-end "go-signal". It takes >1.5 s to produce a sentence, but gaps are about 200 ms (Levinson; Barthel et al. 2017). Cue does the same thing: compose during their turn, fire on the cue. | ★★★★★ new |
| 3 | **Fast replies are how humans feel connected** (Templeton et al. 2022, *PNAS*). Slowing replies by fractions of a second lowered enjoyment. | ★★★★☆ new |
| 4 | **Timing is the open gap.** Lucid Voice (a Berkeley 2026 grand prize) and Lingraphica Conversations (shipping since July 2026) handle *what* to say. Nobody handles *when*. | ★★★★☆ |
| 5 | **Aphasia: 2M+ Americans, more common than Parkinson's, worse quality of life than cancer, up to 62% depressed a year after stroke.** | ★★★★☆ |
| 6 | **Aphasia hides competence** (Kagan, Aphasia Institute). Lateness hides it further; Cue reveals it. | ★★★★☆ new framing |
| 7 | **The oldest aphasia program in the US (U-M, founded 1937) is in Ann Arbor.** It's a home-field story and a real co-design path. | ★★★★☆ new |
| 8 | **Users will trade control for timing** (CHI '25 "Why So Serious?"). This is the ethics answer: *you own what, Cue owns when.* | ★★★☆☆ (small n) |
| 9 | **AAC users currently need 10–45 s of partner wait time,** 50–200× a normal turn gap. A first-person quote: *"Nobody tells you a conversation has a timer on it…"* | ★★★☆☆ |
| 10 | **Voice AI learned when bots should talk** (end-of-turn models). Cue points that technology at humans who need it. | ★★★☆☆ (framing for the AI track) |

**Stop saying or soften:** the backchannel paper as "strong" (it had 4 users), "$300+ Proloquo2Go" (it's $249.99), "ElevenLabs 75 ms" (that's server inference; irrelevant anyway if audio is pre-rendered), the "OV2640" part (new boards ship an OV3660), and "camera gives the name back" as the invention (it's prior art). See `01-evidence-ranked.md` Tier C.

## Six changes, by priority
| # | Change | Effort | Why |
|---|---|---|---|
| 1 | **Reorder everything to timing-first:** demo, Devpost, README, poster. The camera is introduced third, as "how you compose". | 0 h | Novelty |
| 2 | **Audio-first options:** icons + photo crop + short text, plus a **private earbud preview** before speaking. The literal option is always first. | ~2 h | 68% alexia |
| 3 | **One-handed design:** ring on the left index finger, tablet on a stand, and say so in the pitch. | 15 min | Most users have a weak right side |
| 4 | **End-of-turn model, not only VAD** (Smart Turn v3, about 8M params, about 20–36 ms on a laptop CPU), plus a **"turn ending… → your turn"** meter on the partner screen. | 2–3 h | Interruptions are worse than lateness |
| 5 | **Pre-render TTS at approval time**, so the pause only triggers local playback. Add a **relevance gate**: buzz and hold if the partner changed topic. | ~1 h | Gets reliably under 700 ms; "Cue knows when not to talk" |
| 6 | **The XIAO won't arrive, so build a wired ring from the MLH lab:** Grove button on a finger loop + Arduino over **Web Serial** + Logitech webcam on the back of the hand. See `04-hardware-without-xiao.md`. | ~2 h | Fewer failure modes than Wi-Fi/BLE |

Optional (+1 h): **"cue me" mode**. When you point at an object, Cue plays only the first sound ("wuh…") so your own word can come back, and one more click speaks it. It ties the name to aphasia therapy and answers the authorship worry. See `03-deeper-meaning.md` §3.

Cut from the pitch (keep in the repo if built): Photon private send, the AR upgrade path, and autistic teens as a target group (minors + AI, and the spelling-to-communicate controversy). Lead persona: **one adult with aphasia after a stroke.**

## The 90-second table script (revised)
1. **(0:00)** *Before they sit:* "AAC users don't just talk slowly. They talk *late*. And a late yes sounds like a reluctant yes." Point at the poster curve.
2. **(0:10)** The judge puts the ring on their **left** hand ("most of our users have a weak right side"). A teammate tells a joke → the judge clicks → a laugh plays **instantly**.
3. **(0:25)** The teammate asks a question and **keeps talking**. Meanwhile the judge points at the water bottle, taps *want* and hears two options in an earbud, then **holds the ring**. The teammate pauses mid-sentence and **Cue holds**. The teammate finishes, and **Cue speaks inside 700 ms**. The partner screen shows "turn ending… → your turn" and the measured gap.
4. **(0:55)** *Optional:* the teammate changes topic mid-turn → the ring buzzes twice and Cue **doesn't** speak. "It knows when not to talk."
5. **(1:05)** The lamp (FREE-WiLi IR): point, click, it turns on.
6. **(1:15)** Proof: "Median reply gap: Cue X ms vs tap-board Y s, n = 5 hackers tonight", plotted on the Roberts/Kendrick curve. "Lucid Voice and Lingraphica fixed *what* AAC users say. We fixed *when*. Next step: co-design with U-M's aphasia program, the oldest in the country, here in Ann Arbor."

## Before tomorrow (tonight / Saturday morning)
- [ ] **Email ucll@umich.edu** (U-M Aphasia Program, (734) 764-8440) asking for 10 minutes of SLP feedback on timing in AAC. A reply may be slow, but even one quote is gold. No client data; professional opinion only.
- [ ] Check the **Communication Matters "Conversation Starters"** page and get the author's name for the timer quote, so you can credit them.
- [ ] Download the **Smart Turn v3 ONNX** weights (open-source, public). That's allowed; writing project code in advance isn't.
- [ ] Bring **one earbud** (whisper preview), a **lapel mic** for the partner, a **phone stand** for the tablet, a **travel router**, and a lamp + FREE-WiLi if available.
- [ ] Have the poster plot ready: x = reply gap (0–15 s), y = perceived willingness (Roberts 2006 trend), with **Cue** and **tap-board** markers filled in at hour 18.
- [ ] **Buy a presentation clicker** (Best Buy/Target/Staples, ~$25) Saturday morning as insurance for the ring.
- [ ] At check-in, **go to the MLH hardware lab first**: Grove buttons, an Arduino + base shield, a Grove buzzer and a Logitech webcam go fast.

## Your answers (Oct 2)
- **"Tablet" = a laptop.** Chrome on the laptop handles Web Serial, the camera and audio. Use a second device (teammate laptop or phone browser) as the partner display.
- **XIAO hasn't shipped** → wired ring from the MLH lab (plan in `04-hardware-without-xiao.md`). The timing demo doesn't depend on it.
- **Repo is private.** Good. (It showed up in search results earlier, so it was probably public at some point; nothing to do now.)
- **No AAC/SLP contact yet** → the UMAP email (ucll@umich.edu) is the one outreach worth doing tonight. On-site, ask organizers and the judges' table whether anyone has clinical or AAC experience. Until then say "not yet tested with users", honestly.
