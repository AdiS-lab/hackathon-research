---
doc: tracks
topic: MHacks 2026 track strategy for an AAC/HCI wearable
status: draft-v1
source_of_truth: "Track list is from user-provided screenshots of the official MHacks 2026 site (Oct 1 2026). Sponsor/prize details below come from search snippets and may reflect 2025. mhacks.org and live.mhacks.org were blocked by the research proxy, so verify on-site."
---

# 05 — MHacks 2026 tracks and positioning

## Official tracks (from the user's screenshots)
```yaml
rule: "Hackers must build under exactly one main track. Bonus (fun) tracks: optionally submit to as many as apply."
main_tracks:
  - id: 1
    name: Sustainability
    blurb: "Innovate for a greener tomorrow. Build solutions that rethink energy, climate, and resource systems for lasting impact on our planet."
    fit_for_aac: 1
  - id: 2
    name: "Actually Intelligent (AI)"
    blurb: "Smart should mean something. Build AI that actually solves a real problem."
    fit_for_aac: 5
  - id: 3
    name: FinTech
    blurb: "Money, reimagined. Build tools that make finance faster, fairer, and more accessible for everyone."
    fit_for_aac: 1
  - id: 4
    name: "Beyond the Code (Hardware)"
    blurb: "Push past the screen. Build physical, tangible tech — circuits, sensors, wearables, robotics."
    fit_for_aac: 5
bonus_tracks:
  - {id: 5, name: "Useless AI", blurb: "Build the most gloriously pointless AI application you can dream up.", fit: 1}
  - {id: 6, name: "Dumbest Idea", blurb: "Build the dumbest, funniest hack in the room.", fit: 1}
  - {id: 7, name: "Judged by an LLM", blurb: "Build something technically sharp enough to impress an AI judge — no human bias allowed.", fit: 5}
event:
  dates: "Oct 3-4, 2026 (24h)"   # MED confidence, from fetch.ai event listing
  location: "Ann Arbor, MI"
  prize_pool: "$40,000+"          # MED confidence
```

## Main track decision: Hardware (4) vs. AI (2)
| Factor | 2. Actually Intelligent | 4. Beyond the Code |
|---|---|---|
| Fit with "Mosaic" | Strong: multimodal fusion and a real problem ("smart should mean something" is exactly the anti-gimmick framing AAC deserves) | Strong: the track text literally says "wearables, sensors" |
| Expected competition | **Likely the most crowded** (AI is the default in 2026). INFERENCE, not verified | Likely fewer teams (needs hardware). MHacks historically had a separate Best Hardware Hack prize with fewer entrants |
| What judges will poke at | "Is the AI necessary? Is it reliable? Is it more than an API wrapper?" | "Does the hardware work live? Is it more than a dev board on a desk?" |
| Requirement on us | Show a clear AI contribution: fusion of 4 channels, candidate ranking, latency engineering | A real wearable: a ring or finger-mounted board with IMU, button and haptic, worn during the demo |

**Recommendation:**
- **If the team will build a custom ring (XIAO nRF52840 Sense + button + haptic)** → **Track 4, Beyond the Code.** The ring is the hero object, and the AI makes it intelligent. Fewer competitors (inferred), and the "push past the screen" line matches eyes-free AAC exactly.
- **If the "ring" ends up being an off-the-shelf BLE clicker or a phone** → **Track 2, Actually Intelligent.** Hardware judges would see a $12 remote; AI judges will value the fusion.
- **In all cases, also submit to Track 7, Judged by an LLM** (see below).
- **Don't** submit the serious project to Useless AI or Dumbest Idea. Optionally do a tiny separate joke mode only if the rules clearly allow it.

## How to impress an LLM judge (Track 7)
LLM judges (for example Devfolio's "Discerning Machine") read the **submission text and walk the repository**, write a **cited audit**, and turn it into rubric scores. So make the evidence easy to find:
1. **README at repo root**: one-paragraph problem with 2–3 cited stats; architecture diagram (Mermaid); "How it works" per channel; **measured latency table** (actual numbers from your logs); limitations section.
2. **Claims ↔ code links**: each feature in the Devpost text should link to the file or function that does it.
3. **Tests and logs**: a small `tests/` for the fusion and ranking logic plus a `bench/latency.json` produced by a script. LLM judges reward checkable claims.
4. **Typed, structured code**: a clear module layout (`ring/`, `vision/`, `compose/`, `speech/`, `turn/`) and a JSON schema for the fusion prompt input/output.
5. **Ethics section**: authorship (always confirm), privacy (local processing where possible, no recording stored), and the target users named precisely. LLMs check for this.
6. **No inflated claims**: an LLM auditor will notice "works for all disabilities" or "99% accurate" without evidence.

## What human judges at MHacks reward (from PAST-WINNERS.md + STRATEGY.md)
- A live interactive demo (let the judge wear the ring), a physical-plus-digital build, a specific user, and social impact.
- Accessibility wearables have won at MHacks before (WiLi Watch 2024, Gestura 2025, ScreenWave 2025, Dementia Assistant 2025).

## Sponsor prizes worth checking on-site (UNVERIFIED for 2026; from search snippets)
- **Snap AR / Spectacles** prize: historically present. Search snippets mention a Snap pre-hackathon workshop at MHacks ("Building Your First AI-Powered AR Companion on Snapchat Spectacles"), year unclear. If Spectacles loaners exist, a ray-pointing version could compete here too.
- **Fetch.ai** prizes ($1,250 Best Use of Fetch.ai; $750 Agentverse; $500 ASI:One per snippet). You could wrap the composer as an agent, but only if it doesn't distract.
- Snippets also mention a Meta x Oakley glasses prize and an NVIDIA Jetson prize, **likely tied to 2025 track names**. Verify.

## Sources
User screenshots (official tracks) · [fetch.ai MHacks 2026 event](https://www.fetch.ai/events/mhacks-2026-2cjxasveix229y1) · [MHacks Live prizes](https://live.mhacks.org/prizes) · [Devfolio "Discerning Machine"](https://devfolio.co/blog/the-discerning-machine/) · [MHacks Wikipedia](https://en.wikipedia.org/wiki/MHacks) · `../../PAST-WINNERS.md`
