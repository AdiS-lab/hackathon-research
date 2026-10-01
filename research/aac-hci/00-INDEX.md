---
doc: index
project: MHacks 2026 (Oct 3-4, Ann Arbor) idea research. AAC / novel HCI wearable
research_window: "2026-10-01 00:12-02:30 EDT (2h budget)"
author: "Claude Code research session (autonomous; user asleep)"
audience: "Other agents/harnesses first, humans second"
recommended_concept: "C1 Mosaic (see 04-concepts.md)"
recommended_main_track: "4. Beyond the Code (Hardware) if a custom ring is built; else 2. Actually Intelligent (AI)"
recommended_bonus_track: "7. Judged by an LLM"
machine_readable_index: "index.json"
caveats:
  - "arxiv.org, mhacks.org, live.mhacks.org, fetch.ai, media.mit.edu were blocked by the research egress proxy; paper claims come from search snippets/abstracts."
  - "Sponsor/prize details for 2026 are unverified; official track list comes from the user's screenshots."
  - "No user testing; all user-need claims come from the literature."
---

# AAC × Novel HCI: research pack index

## Read order
| # | File | Purpose | Key output |
|---|---|---|---|
| 0 | `SUMMARY.md` | 1-page human/agent brief | decision + next actions |
| 1 | `01-problem-validation.md` | Is AAC a valid problem? Which pain points? | 6 pain points with confidence; target users table |
| 2 | `02-prior-art.md` | What's been done; differentiation | "point → word" is taken; whitespace = fusion + timing + tone |
| 3 | `03-hci-modalities.md` | 15 input/output channels scored | P0/P1/P2 channel set; latency budget |
| 4 | `04-concepts.md` | 5 ranked concepts with weighted scores | C1 Mosaic recommended (contains C2 Cue) |
| 5 | `05-tracks.md` | MHacks 2026 tracks and how to position | Hardware vs. AI decision rule; LLM-judge checklist |
| 6 | `06-build-plan.md` | Architecture, BLE protocol, LLM schema, BOM, 24h schedule, demo script, judge Q&A | ready to execute |
| 7 | `07-risks-ethics.md` | Risk register + ethics + slide text | mitigations |
| 8 | `08-peripheral-ideas.md` | Adjacent HCI ideas | X6 point-to-control and X2 late-reply anchoring are cheap wins |
| 9 | `09-critique.md` | Devil's advocate: failure modes, sharper "timing" pitch, names | lead the demo with timing, not pointing |
| — | `index.json` | Structured version of all of the above | for programmatic consumption |

## Conventions
- Each file starts with YAML front-matter and usually a fenced `yaml` block summarizing it.
- Confidence: **HIGH** = peer-reviewed/primary snippet; **MED** = secondary or single snippet; **LOW** = inferred.
- `UNVERIFIED` marks facts that need on-site or live confirmation.
