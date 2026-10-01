---
doc: grand-prize-patterns
status: v1
data: "data/analyze_winners.py → data/feature_lift.csv, data/overall_winners_2026.csv"
---

# 02 — What wins *overall* (not just a track)

## A. MHacks grand-prize history (what could be verified)
| Edition | Grand prize | What it was | Pattern |
|---|---|---|---|
| MHacks (Sep 2013) | **GreenCan** | Trash can that sorts recyclables from garbage by the *sound* an item makes on entry | Hardware + ML + sustainability; physical, judge-tryable |
| MHacks IV (2014) | **Power Glove 2.0** | Gesture glove | Wearable hardware |
| MHacks V (2015) | **Draw Anything** | iOS app; Fourier series turn any photo into step-by-step drawing instructions | Clever math, instantly demoable |
| MHacks 16 (Nov 2023) | **DECO.ai** | AI interior design with 3D room visualization | AI + 3D visual wow |
| MHacks 2024 ($3k) | *not found* | Devpost blocked; no press coverage indexed | — |
| MHacks 2025 ($4k) | *not found* | Same. Track winners are in `PAST-WINNERS.md` | — |

> **Correction to `PAST-WINNERS.md`:** "Cosmo Cook" won the separate **Google x MHacks AI Hackathon** (April 2024), not the MHacks 2024 grand prize.

## B. The most recent big grand prizes (what MHacks judges are calibrated against)
| Event | Overall winner | What | Shape |
|---|---|---|---|
| **TreeHacks 2026** (Feb, 1,000+ hackers, $500k pool) | **Shepherd** | Smart white cane with a **motorized omni-wheel that physically steers a blind user** around obstacles; iPhone LiDAR plus on-device vision; ESP32-S3 motor and haptics over BLE | Accessibility × hardware × on-device AI. Also won the Healthcare track grand prize |
| **PennApps XXVI** | **ALSistive** | Smartwatch that tracks ALS progression more accurately | Health × wearable |
| **Cal Hacks 12.0** (Oct 2025, 695 projects) | **FaceTimeOS** | FaceTime your Mac; a multimodal computer-use agent sees and controls it | Novel interface for agents; instantly understood |
| **UC Berkeley AI Hackathon 2026** | **Lucid Voice** (World track GP) | **AAC: 2–3 tapped words → 3 register-correct sentences in the user's cloned voice**, using a personal knowledge graph | Accessibility × AI. ⚠️ Overlaps our AAC concept (see 03) |
| same | **Theracat** (Lab track GP + SkyDeck GP) | A band and a plush cat that detect anxiety from movement and interrupt it before it peaks (ESP32 + ElevenLabs) | Health × wearable × emotion |
| **Hack Canada 2026** | **wallhacks.** | "See people through walls" (ESP32 Wi-Fi sensing + three.js) | Pure hardware wow |
| **StarkHacks 2026** (Purdue) | **OmniGlove** | Glove mirrors 3D hand motion to train robot imitation | Wearable × robotics |
| **RevolutionUC 2026** | **Tremorfix** | Sensors + ESP32 + servo stabilize hand tremors | Health × actuation |
| **Hack the 6ix 2026** | **Praxis** | QNX + Raspberry Pi rehab tracing exercise → measured accuracy and stability | Health × hardware × metrics |
| **YHack Spring 2026** | **Circa** | Real-time field monitoring for precision irrigation (ESP32) | **Nature** × hardware |
| **HackSMU VII** | **HerdSignal** | Elephant communication intelligence | **Nature** × AI |
| **UNIHACK 2026** | **Antrum MK 1** | Handheld trackers point cavers to each other with no GPS or signal | Safety × hardware |
| **WildHacks 2026** | Wildcat Arcade | Wii Sports Resort with your phone as the controller | Fun, instantly playable |
| **LA Hacks 2026** | codebreaker | Agentic cybersecurity: detect, validate and fix vulnerabilities | Software; needs a benchmark to be credible |

## C. Quantitative pattern (spring 2026, 41 in-person collegiate hackathons)
From HackWinnerDB: **27 overall/grand winners vs 677 other prize winners** (track, sponsor and category). Because the database only holds winners, "lift" means *overall winners vs other winners*. That is exactly the comparison we care about: what turns a good project into the overall winner.

| Feature | Overall winners | Other winners | Lift |
|---|---|---|---|
| Uses **ESP32** | 26% | 3% | **~8×** |
| Uses **C++** (firmware) | 22% | 7% | 3.3× |
| Uses **Raspberry Pi** | 11% | 3% | 3.4× |
| **Physical hardware** (any) | 37% | 18% | **2.0×** |
| **Health** framing | 22% | 11% | **2.0×** |
| **Accessibility** framing | 7% | 4% | 1.9× |
| Nature / farm / climate framing | 15% | 9% | 1.6× |
| PyTorch (custom model) | 15% | 7% | 2.2× |
| Claude / Gemini / ElevenLabs used | 11% / 19% / 11% | 11% / 20% / 14% | **~1.0× (table stakes)** |
| "Agent" in the pitch | 7% | 13% | **0.6× (agent wrappers don't win overall)** |
| React / Next.js | 41% / 19% | 41% / 22% | ~1.0× |

Caveats: n = 27 is small; data is auto-imported and largely unverified. Treat these as **directional, not precise**. Script and CSVs are in `data/`.

## D. Anatomy of a 2026 grand-prize winner (Shepherd, read from its repo)
Shepherd's README is effectively a judging script. Copy the structure:
1. **A named human with a costly status quo:** a cost table (WeWalk smart cane $800–1,150; OrCam $2–5k; guide dog ~$50k) vs **"~$50 to build."**
2. **One hard number:** **"<100 ms latency, 30–50× faster than cloud-based alternatives."**
3. **The device *acts on the world*:** a motor physically pushes the cane. It doesn't just display or speak.
4. **On-device AI as a design decision** (latency, privacy, no subscription), not as a feature.
5. **Research lineage:** "builds on Stanford's Augmented Cane project," plus what they added.
6. **A named algorithm** ("gap-seeking steering," with the formula), which signals depth to technical judges.
7. **Open-source build:** CAD, BOM, assembly docs, plus protocol docs (`BLE_PROTOCOL.md`).
8. Stack: **phone as the brain (sensors and ML) + ESP32 as the body (actuation and haptics) over BLE.** This is the cheapest way to look like a "real device" in 24–36 h.

## E. The pattern, as rules
1. **Make something a judge can feel within 30 seconds.** Every top winner above has a moment where the judge *does something* and the physical world responds (a cane steers you, a cat purrs, a tremor is damped, a wall goes see-through).
2. **Health or accessibility doubles your odds of going from track winner to overall winner.** There's no health track in 2026, so a health or accessibility build in the Hardware track stands out more.
3. **AI should be invisible and necessary.** LLM, agent or voice API use is flat (about 1×) between overall winners and the rest. What separates winners is *what the AI enables physically*, plus a number that proves it works.
4. **Specific beats general.** "Blind pedestrians," "ALS patients," "people with tremors." Not "everyone."
5. **Bring receipts:** a cost table, a latency or accuracy number, and a citation. MHacks' criteria include *Technical Complexity*; numbers are how 3-minute judges score it.
6. **Repeating an archetype is fine.** Smart canes, AAC and rehab devices have won many times. Judges reward the best *execution* of a human-stakes archetype, not concept novelty alone. They do punish a demo that looks like something they saw that day.

## Sources
[Stanford Daily: 12th TreeHacks](https://stanforddaily.com/2026/02/15/12th-annual-treehacks/) · [Shepherd repo](https://github.com/tonywangs/shepherd) · [Shepherd Devpost](https://devpost.com/software/raising-cane) · [PennApps XXVI (Carleton)](https://www.carleton.edu/computer-science/sentinel-newsletter/news/pennapps-xxvi-the-nations-oldest-hackathon-hosted-at-the-university-of-pennsylvania/) · [Cal Hacks 12 winner blog](https://blog.dylanlu.com/cal-hacks-12/) · [Lucid Voice repo](https://github.com/dbhargav-uw/Lucid-Voice) · [HackWinnerDB](https://github.com/notsointresting/hackwinnerdb) · [GreenCan / MHacks 2013 (UM EECS)](https://eecs.engin.umich.edu/stories/over-1200-attend-mhacks-2013-recyclable-sorter-wins-at-record-breaking-event) · [MHacks IV recap (MLH)](https://news.mlh.io/mhacks-iv-recap-09-11-2014) · [Draw Anything (Wolfram)](https://www.wolfram.com/customer-stories/mhacks-winners-code-with-the-wolfram-language/) · [DECO.ai (UM CSE)](https://cse.engin.umich.edu/stories/mhacks-ai-powered-interior-design-assistant-wins-midwests-largest-student-run-hackathon) · [JetBrains: notes from the judging table (2026)](https://blog.jetbrains.com/ai/2026/06/how-to-win-a-hackathon-notes-from-the-judging-table/)
