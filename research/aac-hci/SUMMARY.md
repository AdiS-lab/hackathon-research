---
doc: summary
status: v1
decision: "Pivot from 'point at object → word' (already done) to 'Mosaic': multimodal fragment fusion + timing-aware delivery on a ring"
---

# Summary: what to build at MHacks 2026

## 1. The original idea, honestly
- **"Point at an object → AAC word" has been done:** VocalEyes (iPad AR), Microsoft SceneTalk (2017), MIT WatchThis, a US patent (12032807), and Talk For Me (image-recognition suggestions → LLM sentence).
- It also has a **structural flaw**: pointing only gives **nouns (fringe vocabulary)**, while about 200–250 core words (*want, more, not, help, you*) make up about 80% of speech.
- **Lotus Ring** (point + click IR ring for switching wall switches; for mobility disabilities) is still the right *interaction metaphor*: zero learning curve, eyes-free, one deliberate click.

## 2. The problem is valid. The best-supported pain is *timing*, not just speed
- AAC runs at about 10–20 wpm compared with 130–200 wpm for speech (MED).
- CHI '25 (*Why So Serious?*): jokes and comments land too late; users **trade agency for timing** (HIGH).
- 2025 backchanneling paper: AAC needs eyes-on-screen; users lose "mm-hmm" and nonverbal cues (HIGH).
- Tone of voice is "all but absent" from AAC R&D (MED).
- Partner behavior (wait time) is highly effective but untrained (meta-analysis, MED).

## 3. Recommended concept: **Mosaic**
> *A ring that turns your point, your flick and the conversation you're in into one sentence you approve, spoken in your tone at the right moment.*

- **Point + click** → object or person tiles (camera on the wrist).
- **Ring flicks** → core words and intent (want / no / more / question / undo).
- **Partner speech** → context; the LLM produces 3 candidates (one is always the literal minimal sentence).
- **Twist** = choose; **tilt** = tone (warm/urgent/playful → expressive TTS tags).
- **Hold-click = speak at the partner's next pause** (no prior art found for timing AAC *output* to a turn boundary). The ring buzzes when it's your turn.
- **Instant backchannels** (<150 ms, no LLM): mm-hmm, haha, wait, yes, no.
- **Partner display:** tiles forming plus "✋ composing…" (builds in expectant delay; inspired by COMPA, CHI '24).
- Cheap wow add-ons: **point at a lamp → it actually turns on** (Lotus-style control) and **late-reply anchoring** ("Going back to the pizza thing:").

## 4. Tracks
- **Main:** *Beyond the Code (Hardware)* if you build the XIAO ring; otherwise *Actually Intelligent (AI)*. One main track only.
- **Bonus:** *Judged by an LLM*. Make the repo audit-friendly: README with cited stats, Mermaid architecture, **measured latency table**, tests, a claims-to-code map, ethics and limitations.
- Skip *Useless AI* and *Dumbest Idea* for the serious project.

## 5. Do this today (Oct 1–2), because MHacks starts Oct 3
1. **Order hardware now:** 2× Seeed XIAO nRF52840 Sense, a small LiPo, tactile switches, a coin vibration motor + transistor (or DRV2605L), finger straps. **Backup:** a BLE "TikTok remote ring" (next-day). **Zero-hardware fallback:** phone on the wrist (camera + DeviceMotion IMU).
2. **Get API keys:** one fast LLM, one expressive TTS (e.g., ElevenLabs Flash v2.5 / v3).
3. **Pre-hackathon spikes (legal per most rules; check the MHacks rules on pre-written code):** Web Bluetooth ↔ XIAO hello-world; `@ricky0123/vad-web` pause detection; MediaPipe object detector in the browser.
4. **Decide the team split:** HW / Vision / Compose+Speech+Turn / UI+Demo (see 06-build-plan.md).
5. **Confirm on-site:** whether Snap Spectacles or other hardware loaners exist; the final sponsor prizes; bonus-track submission rules.

## 6. Open questions for the human
- Team size and skills (hardware? ML?) → decides Hardware vs. AI track.
- Does anyone have a 3D printer or makerspace access for the ring shell?
- Is any teammate connected to an AAC user or an SLP who could give 10 minutes of feedback before the demo? (Even one quote is very persuasive to judges.)
