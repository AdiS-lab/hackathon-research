---
doc: concepts
topic: Candidate project concepts after the pivot away from "point at object → word"
status: draft-v1
scoring_scale: "1-5 (5 best). Weights: novelty 0.25, problem_validity 0.20, demo_wow 0.20, buildability_24h 0.20, track_fit 0.15"
recommended: C1
---

# 04 — Concepts (ranked)

## Machine-readable summary
```yaml
concepts:
  - id: C1
    name: "Mosaic"   # working name
    one_liner: "A ring that turns pointing, micro-gestures and the conversation into one sentence you approve, with your tone, spoken at the right moment."
    main_track: "4. Beyond the Code (Hardware)"   # alt: "2. Actually Intelligent (AI)"
    bonus_tracks: ["7. Judged by an LLM"]
    scores: {novelty: 4, problem_validity: 5, demo_wow: 5, buildability_24h: 4, track_fit: 5}
    weighted: 4.55
  - id: C2
    name: "Cue"
    one_liner: "Timing-first AAC: eyes-free backchannels plus 'speak at the next pause' plus a tone dial on a ring."
    main_track: "4. Beyond the Code (Hardware)"
    bonus_tracks: ["7. Judged by an LLM"]
    scores: {novelty: 5, problem_validity: 5, demo_wow: 4, buildability_24h: 5, track_fit: 4}
    weighted: 4.65   # higher on paper, but C1 contains C2 and demos better; see note
  - id: C3
    name: "Two-Way"
    one_liner: "Partner-side AI: coaches the speaking partner (wait, rephrase as choices) while the AAC user answers with one flick."
    main_track: "2. Actually Intelligent (AI)"
    scores: {novelty: 5, problem_validity: 4, demo_wow: 3, buildability_24h: 5, track_fit: 4}
    weighted: 4.25
  - id: C4
    name: "Mouthpiece"
    one_liner: "Silent speech (lip-reading or EMG) plus LLM expansion for people who can mouth but not voice (e.g., laryngectomy)."
    main_track: "4. Beyond the Code (Hardware)"
    scores: {novelty: 4, problem_validity: 4, demo_wow: 5, buildability_24h: 2, track_fit: 4}
    weighted: 3.8
  - id: C5
    name: "Here"
    one_liner: "Spatial AAC: point at places and people; the system learns phrases anchored to where and when you are."
    main_track: "2. Actually Intelligent (AI)"
    scores: {novelty: 4, problem_validity: 3, demo_wow: 3, buildability_24h: 3, track_fit: 3}
    weighted: 3.25
note: "Recommendation: build C1 using C2's timing features as the headline differentiator and one C3 feature (partner display + 'wait, composing' cue). C1 ⊃ C2 ⊃ the ring. The plan degrades gracefully: if vision fails, C2 alone is still a complete, novel project."
```

---

## C1 — "Mosaic" (RECOMMENDED)
**Pitch:** *"Current AAC asks nonspeaking people to ignore their bodies and dig through a grid. Mosaic listens to all the partial signals they already make (a point, a flick, a sound, the conversation they're in) and puts them together into one sentence they approve and deliver in their own tone, at the right moment."*

**Interaction loop (one hand, eyes free):**
1. **Point + click** → camera takes the frame center → object highlighted on screen and added as a noun tile (`water`). Point at a **person** → addressee tile (`Sam`).
2. **Flick gestures** add intent or core tiles: flick up = `want`, flick down = `don't`, double-tap = `more`, circle = `question`, shake = `undo`.
3. Mosaic shows **3 candidate sentences** built from tiles + partner's last utterance + time/place:
   `Sam, could you get me some water?` · `I want water.` · `More water, please.`
4. **Twist the ring** to scroll candidates; **tilt** to set tone (warm / neutral / urgent / playful). The tone shows as a color glow.
5. **Click** → choose:
   - *Speak now*, or
   - **Hold-click = "speak at next pause"**: queued; the ring buzzes and it fires automatically when the partner stops talking.
6. **Any time:** quick flick combos produce **instant backchannels** (`mm-hmm`, `haha`, `wait`, `yes`, `no`), pre-rendered with no LLM and <150 ms.
7. **Partner display** (second screen or phone facing out) shows the tiles forming and "✋ composing…", which builds in the AAC best practice of *expectant delay*.

**Why it's different from prior art (put this on the slide):**
| Prior art | What they have | What Mosaic adds |
|---|---|---|
| VocalEyes / SceneTalk / patent | point → noun | nouns are only one channel; core words come from gestures and grammar from the LLM |
| Lingraphica Conversations | partner STT → reply suggestions on a tablet | eyes-free ring, combined fragments, tone, timing-aware delivery |
| AllyAAC | wrist IMU gestures → phrases | gesture is one input among several, not the whole vocabulary |
| SpeakFaster | LLM abbreviation expansion for gaze typing | no typing at all; physical-world tokens |
| COMPA (CHI '24) | Google Meet extension: context marking, partner notifications, LLM starters | in-person and physical; the *output* is timed to the partner's pause; tone; eyes-free |

**Track fit:** Beyond the Code (ring, sensors, haptics) *or* Actually Intelligent (multimodal fusion, LLM). See 05-tracks.md.

**Demo (90 s):** see 06-build-plan.md §Demo script.

**Risks:** (a) vision misidentification → show the top 3 and cycle with a twist; (b) LLM over-formalizes or puts words in the user's mouth → always confirm, a "my style" few-shot prompt, and the plain tile sentence is always one of the options; (c) gesture misfires → small gesture set plus per-user calibration.

---

## C2 — "Cue" (timing-first; the fallback core of C1)
- **Thesis:** speed isn't the main problem; **timing** is. Research shows that AAC users lose jokes, backchannels and turns because messages arrive late.
- **Features:** (1) ring-gesture **backchannels** with zero latency; (2) **speak at the next pause**, which queues a message and fires it at a transition-relevance point (VAD silence threshold, optionally prosody); (3) **floor-holding**: one flick plays "hang on, I have something to say" and lights the partner's display; (4) **tone dial**.
- **Why it might score highest:** no product or paper found that queues AAC output to the partner's next pause; it's directly supported by the CHI '25 humor and 2025 backchannel findings; the hardware is very simple.
- **Weakness alone:** the demo is quieter (no "AI sees the world" moment). That's why it sits inside C1.

## C3 — "Two-Way" (partner-side AI)
- **Thesis:** half of AAC success is the **partner**. A meta-analysis (17 single-case studies, 53 participants) found partner interventions **highly effective**, with key skills *expectant delay*, aided modeling and question asking. Partners usually aren't trained.
- **Product:** the partner's phone listens to the partner. When they ask an open question the AAC user would find slow to answer ("What do you want for dinner?"), it **converts it into choices** shown to both people ("pizza / pasta / something else"). The AAC user answers with one flick. It also nudges the partner to wait when the user is composing.
- **Fits** "Actually Intelligent". Novel framing (AI for the *partner*). Weaker hardware story. **Recommended as one feature inside C1** (the partner display).

## C4 — "Mouthpiece" (silent speech)
- Lip reading (webcam VSR) or sEMG (MyoWare/Grove electrodes on jaw/throat) → small vocabulary (~10–20 words) → LLM expands to a sentence → TTS in the user's banked voice (Apple Personal Voice exists for voice banking).
- Users: laryngectomy, vocal cord paralysis, some dysarthria.
- **Pros:** a big wow factor; AlterEgo (MIT spin-out, 2025) shows the field is hot. **Cons:** electrodes and signal noise, per-user training data, and fragile in a 24 h build; sensors must be sourced in 48 h. **Only pick this if a teammate has done EMG or VSR before.**

## C5 — "Here" (spatial and temporal phrase memory)
- Every confirmed sentence is logged with where (camera scene embedding), who and when. Next time you point at the kitchen door at 7 pm, the top suggestion is your own past phrase. A personal, growing vocabulary tied to physical places ("the world becomes your vocabulary", the original thesis made honest).
- Good as a **C1 stretch feature** (personalization), weak as a standalone demo (it needs history).

## Fun-track side ideas (optional; don't dilute the main pitch)
- *Useless AI / Dumbest Idea:* "Mosaic: Dramatic Mode", where every sentence is re-voiced as a movie-trailer narrator. One prompt plus one voice; a 30-second Devpost video. Only if the organizers allow bonus-track entries to be a mode of the same project. Check the rules on-site.

## Sources
See 01-problem-validation.md and 02-prior-art.md, plus: [Partner instruction meta-analysis (UCF STARS)](https://stars.library.ucf.edu/scopus2015/642) · [AssistiveWare on wait time](https://www.assistiveware.com/blog/dos-and-donts-aac-wait-time) · [Partner-assisted scanning (Angelman)](https://angelman.org/wp-content/uploads/2025/05/Communication-training-Series_Partner-Assisted-Scanning.pdf) · [Apple Personal Voice](https://machinelearning.apple.com/research/personal-voice)
