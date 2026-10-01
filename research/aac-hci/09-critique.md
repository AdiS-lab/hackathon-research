---
doc: critique
topic: Devil's-advocate review of the recommendation (C1 Mosaic) and how to sharpen it
status: draft-v1
---

# 09 — Critique: how Mosaic could lose, and the fixes

## Failure modes
```yaml
failure_modes:
  - id: F1
    name: "Feature soup"
    symptom: "Judges remember 9 features and none of them; the pitch sounds like a roadmap"
    severity: HIGH
    fix: "Lead with ONE thesis (timing). Every feature is presented as serving it. Cut anything that doesn't."
  - id: F2
    name: "Looks like diaLEX/XAAC"
    symptom: "The first thing judges see is camera → object label, which they may have seen at other hackathons"
    severity: HIGH
    fix: "Don't open the demo with pointing. Open with the timing moment (queued sentence fires at the partner's pause + an instant laugh backchannel). Introduce pointing second, as 'one of the inputs'."
  - id: F3
    name: "Demo-hall noise breaks VAD/STT"
    symptom: "Speak-at-next-pause never fires or fires early"
    severity: HIGH
    fix: "Lapel/headset mic on the partner; push-to-talk fallback for the partner; a visible 'pause detected' meter so judges see the mechanism even if it's imperfect"
  - id: F4
    name: "AI does too little"
    symptom: "AI-track judges see an LLM call that turns 3 tiles into a sentence"
    severity: MED
    fix: "Show the fusion: partner context changes the candidates live (same tiles, different partner question → different sentences). Show the latency engineering (prefetch, streaming). Or run the Hardware track."
  - id: F5
    name: "Hardware is just a dev board"
    symptom: "Hardware-track judges see a XIAO taped to a finger"
    severity: MED
    fix: "A clean wearable form (strap + shell), haptic feedback they can feel, and the judge wears it. Optional: point-to-control lamp (X6) as a physical-world effect"
  - id: F6
    name: "Ethics hand-wave"
    symptom: "A judge asks about AI speaking for disabled people; the team fumbles"
    severity: MED
    fix: "Memorize the 07-risks-ethics.md slide text; cite 'Why So Serious?' (users choose speed vs. control) and the sidekick paper"
```

## A sharper pitch structure (recommended)
**Thesis (one sentence):** *"AAC users don't just talk slowly, they talk **late**. Mosaic is a ring that makes nonspeaking people **on time** in a conversation."*

Three pillars, all about timing:
1. **Instant:** ring flicks → backchannels in under 150 ms (mm-hmm, haha, wait). *Research: backchanneling in AAC, 2025.*
2. **On cue:** compose while they talk, then hold-click → it speaks at their next pause, and the ring buzzes "your turn". *Research: CHI '25 timing; ASSETS '21 sidekick; COMPA.*
3. **Fast to compose:** point at things plus flick for intent, the AI writes 3 options using what was just said, twist to pick, tilt for tone. *Research: SpeakFaster, core/fringe vocabulary.*

The camera is part of pillar 3, which makes it **one input among several**. That's the honest and defensible position given diaLEX and XAAC.

## Name / tagline candidates (for the downstream pitch agent)
| Name | Tagline | Note |
|---|---|---|
| **Mosaic** | "Every signal is a piece." | Emphasizes fusion |
| **Cue** | "Speak on cue." | Emphasizes timing; short and memorable; **recommended if the pitch leads with timing** |
| **Beat** | "Never miss the beat of a conversation." | Timing plus rhythm |
| **Halo** | — | ⚠️ avoid: Brilliant Labs Halo glasses exist |
| **Lotus**-anything | — | ⚠️ avoid: an existing product/brand (Lotus Ring) |

## If the team wants a *smaller, safer* scope
Build **Cue** (C2) only: ring (click + 5 flicks + haptic) + partner mic/VAD + phrase set + LLM rephrase of partner questions into choices + tone dial + partner display. No camera. That's lower risk and very novel, but less visual. Add pointing back in only if it's working by hour 10.

## If the team wants a *bigger, riskier* swing
Add **C4 silent speech (lip reading)** as the "compose" input instead of the camera, for laryngectomy users. Only do this with a teammate who has run a VSR model before.
