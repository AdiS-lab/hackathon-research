---
doc: cue-judgment
status: v1
judged: 2026-10-02 (night before MHacks 2026)
input: "../../CUE.md (commit 12ec1fb, 'changed md')"
verdict: "BUILD IT. Same hardware, different order. Six fixes, two of them about who the user actually is."
---

# 02: Judging the refined CUE.md

## 1. Score (same rubric as `../grand-prize/03-idea-scorecard.md`)

| Criterion (weight) | CUE.md as written | With the fixes below | Why it moves |
|---|---|---|---|
| Table wow (25) | 18 | **21** | The judge wears the ring, laughs instantly, and watches a "yes" land inside 700 ms on a live meter. The lamp is a bonus |
| Human stakes (20) | 18 | **20** | Lead with **adults with aphasia** (2M+ US, worse QoL than cancer) and the **U-M Aphasia Program here in Ann Arbor** |
| Theme (15) | 6 | **9** | "A voice that grows back into the conversation" + conversation garden + phonemic-cue mode (the word grows back) |
| Depth + receipts (15) | 12 | **14** | End-of-turn model (not just VAD), pre-rendered audio, a measured reply-gap distribution plotted on the Roberts/Kendrick curve |
| Novelty vs prior art (15) | 8 | **12** | Camera-first reads like diaLEX/XAAC/Obiorah 2017. Timing-first is open territory |
| Sponsor stack (10) | 8 | **8** | ElevenLabs + FREE-WiLi (lamp) + LLM judge. Photon is weakly connected; keep it optional |
| **Total** | **70** | **84** | |

The earlier scorecard gave Cue about 75 → 84. **The refined CUE.md slipped back to about 70.** It opens with the camera ring ("A tiny camera on the ring sees what you point at…"), which is exactly failure mode F2 in `../aac-hci/09-critique.md`. The fixes are mostly about **order and framing**, not new engineering.

## 2. What's genuinely strong (keep it)

1. **The tagline.** "They talk late" is now backed by perception science (S1–S3), not just AAC anecdotes. It's the best line you have.
2. **Approve-then-hold-to-queue.** This is the novel mechanism. Nobody else ties AAC output to the partner's turn end.
3. **Instant backchannels with no LLM.** A cheap, sure-fire wow, and robust to Wi-Fi.
4. **Narrowed ICP and an explicit "NOT for" list.** Judges trust teams who say who it isn't for.
5. **Honest Challenges section.** Most of it is right, and it shows engineering maturity.
6. **The ~$20–30 BOM vs $6k–14k comparison.** Accurate enough; see the corrected prices in `01-evidence-ranked.md` C3.

## 3. Problems the research surfaced (ranked by how much they'd hurt)

### P1: The core user may not be able to read the sentence candidates (HIGH)
About **68% of people with chronic aphasia have central alexia** (Brookshire 2014). CUE.md's flow is "AI generates 2–3 candidate sentences → tap one", which is a reading task. An SLP judge would spot this.
**Fix (about 2 hours):**
- Each candidate is shown as **icons + its object photo crop + short text**. Lucid Voice and Proloquo boards pair symbols with text for the same reason.
- **Whisper preview:** tapping (or a ring click) on a candidate plays it **privately in one earbud** before it goes public. The ASSETS '24 aphasia co-design ("Looking Past Screens") independently prototyped private audio prompts through earphones.
- The **literal option is always first and always the shortest**, e.g. "Water. Want." → "I want water."
- Pitch line: *"Most people with aphasia also have trouble reading, so Cue never makes you read to talk. You hear your options in your ear first."*

### P2: The flow assumes two hands. Most of your users have one (HIGH)
In one cohort, **about 61% of people with aphasia had right-side arm/leg weakness**. CUE.md implies ring on one hand and tablet taps with the other.
**Fix (0 hours of code, 15 minutes of design):** the **ring goes on the left index finger** and the **tablet sits on a stand**. Every action has to work with one hand: ring click to capture, then the same hand taps the tablet. Say it out loud: *"Designed for one hand, because most stroke survivors with aphasia have a weak right side."* That one sentence buys a lot of credibility.

### P3: The demo opens with the part that isn't novel (HIGH)
"Camera sees what you point at → word" has been done by diaLEX and XAAC at hackathons, by **Obiorah, Piper & Horn for aphasia specifically (ASSETS 2017)**, and with GPT-4V (Zastudil 2024). And in TalkAbout (ASSETS 2012), people with aphasia **ranked object recognition below location and partner context**.
**Fix:** rewrite the first paragraph of CUE.md and the first 20 seconds of the demo around timing (see `00-BRIEF.md` for the script). The camera becomes "one of the ways you compose", introduced third.

### P4: "Speak at the next pause" will misfire on mid-sentence pauses (MED-HIGH)
Silero VAD only knows *silence*, not *turn end*. People pause mid-sentence for 300–700 ms all the time. If Cue fires during one, it **interrupts**, which is worse than being late.
**Fix (2–3 hours, and it's your best "Actually Intelligent" depth story):**
- Gate on VAD silence **plus an end-of-turn model**. **Smart Turn v3.x** (Pipecat, open weights) is an 8M-parameter model that reads raw audio prosody. The ONNX build takes about 20–36 ms on a laptop CPU with 92.9% reported accuracy. Run it in a tiny local Python sidecar (or onnxruntime-web).
- Hangover fallback: if the model isn't ready, require ≥500 ms silence **and** a falling-pitch end (or a transcript that ends with "?").
- The partner display shows **"turn ending…" → "your turn"** so judges *see* the decision.
- Pitch line: *"Voice AI spent the last two years learning when a bot should talk. We pointed that tech at the people who need it most."*

### P5: A queued sentence can go stale (MED)
You queue "Yes, I'd love pizza." The partner keeps talking: "…actually, let's do sushi instead." Firing the old line now is wrong *and* on time.
**Fix (1 hour):** a **relevance gate**. When the turn ends, run one fast check (a heuristic: new question detected, or a cheap LLM yes/no) on "Does the queued reply still answer the last turn?" If not, **buzz twice and hold** instead of speaking. Also offer an anchor prefix for late replies: "Going back to the pizza: …". This is a nice moment to show judges deliberately: "Cue knows when *not* to talk."

### P6: The hardware and browser plan has two traps (MED). *Update: mostly moot. The tablet is a laptop and the XIAO isn't coming; see `04-hardware-without-xiao.md`*
1. **Web Bluetooth does not work in Safari on iPad/iOS** (any version). If "tablet" means iPad, BLE button events fail. **Fix:** drop BLE. The ESP32S3 is already on Wi-Fi, so send **everything (frames + button events + haptic commands) over one WebSocket**. One transport, one failure mode. Run the UI in Chrome on the laptop or an Android tablet.
2. **Mixed content:** a page served over `https://` (e.g. deployed to Vercel) can't open `ws://192.168.x.x`. **Fix:** serve the UI from `http://localhost` during the demo, or relay through a local Node server.
3. **Camera sensor:** newer XIAO ESP32S3 Sense boards ship with an **OV3660**, not an OV2640, and most example code assumes the OV2640. Check the sensor PID on first boot and keep both configs ready.

### P7: Feature soup, part 2 (MED)
CUE.md lists object naming, core words, LLM composition, queued speech, backchannels, private send via Photon, IR lamp, and an AR upgrade path. Judges will remember two.
**Fix:** a strict hierarchy in every artifact (poster, Devpost, README):
1. **On time** (queue → speaks at turn end inside 700 ms) ← the invention
2. **Instant** (backchannels in <150 ms)
3. **Compose by pointing** (camera + core words + LLM) ← the input
4. Bonus: the lamp (FREE-WiLi). **Cut from the pitch:** Photon private send (it isn't about timing) and the AR upgrade path. Aphasia co-designers called head-worn displays "publicly awkward"; mention AR only if asked.

### P8: The ICP still includes nonspeaking autistic teens (LOW-MED, but a landmine)
- "Teens" brings in AI-with-minors questions. Lingraphica limits Conversations to **18+** "due to AI regulations".
- Pointing-based communication in nonspeaking autism sits next to the **Spelling to Communicate / RPM controversy**: ASHA's 2018 position statements discourage it over facilitator influence. A judge from that world may connect "pointing + autism" to it.
- **Fix:** make the demo persona **one adult with aphasia after a stroke**. Keep apraxia of speech (it often co-occurs) and say "nonspeaking autistic adults are a future co-design partner, not a claim tonight."

## 4. Red-team: the 8 hardest judge questions and the answers

| Question | Answer (≤2 sentences) |
|---|---|
| "Isn't this just Lingraphica Conversations / Lucid Voice with a camera?" | "They fixed *what* you say; both still speak whenever you hit the button. Cue is the first AAC that decides *when* to speak, at the partner's turn end, inside the 700 ms window where a 'yes' still sounds like a yes." |
| "The user still composes slowly. You just hide it." | "Exactly like fluent speakers do: everyone plans their reply during the other person's turn and launches on a cue. Cue gives AAC users that same overlap, so the slowness moves into time the conversation already spends on the partner talking." |
| "What if it interrupts?" | "It waits for an end-of-turn model, not just silence, and a manual 'now' or 'hold' always overrides. Showing you: [partner pauses mid-sentence, Cue holds]." |
| "Is the AI putting words in their mouth?" | "The AI never decides *what*. You approve every word, and the literal version is always first. The only thing you can hand to Cue is *when*, and only by holding the ring." |
| "Did you test with real users?" | "No, and we won't pretend to. Our number comes from hackers using a tap-board vs Cue; the next step is co-design with the U-M Aphasia Program, the oldest aphasia program in the US, here in Ann Arbor." |
| "Can people with aphasia even read the options?" | "Most can't read well, so options are icons plus a private audio preview in your ear." |
| "Why a ring?" | "One hand, eyes up, discreet. Aphasia co-design studies found glasses publicly awkward and tablets stigmatizing, and most users have a weak right hand." |
| "What's your number?" | "Median reply gap after the partner stops: Cue X ms vs tap-board Y s (n = 5, measured tonight). Plotted on the curve where listeners start hearing reluctance." (Measure it. Never quote a target as a result.) |

## 5. What would make me change the verdict
- **Pause detection can't be made reliable in the hall by hour 14** → keep it in the demo with a lapel mic and the visible "turn ending…" meter. If it's still bad, demo "speak now" plus backchannels, and show the queue on a recorded clip with an honest label. Don't abandon the thesis.
- **The ring hardware doesn't arrive** → *confirmed: it won't.* Wired Grove-button ring + Arduino (Web Serial) + Logitech webcam on the hand, all from the MLH lab; a presentation clicker as insurance. See `04-hardware-without-xiao.md`. The timing thesis doesn't need the camera at all.
- **A judge has seen a timing-first AAC hack this season** → nothing found as of Oct 2, 2026 (4 searches).
