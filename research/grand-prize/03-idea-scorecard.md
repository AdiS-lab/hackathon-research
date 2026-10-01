---
doc: idea-scorecard
status: v1
decision: "Keep the AAC ring ('Cue'), but re-aim it at the white space that 2026 prior art left open: timing + eyes-free + acting on the room. Backup: 'Canopy' heat-stress band."
---

# 03 — Scoring the current plan against what wins

## Rubric (weights come from 02-grand-prize-patterns)
| Criterion | Weight | Why |
|---|---|---|
| **Table wow:** a judge touches it and the physical world responds within 30 s | 25 | Every 2026 overall winner had this; expo judging = 2–3 min per table |
| **Human stakes:** health or accessibility, a named user | 20 | ~2× lift for overall vs other winners; Usability criterion includes accessibility |
| **Theme:** "Digital Garden / build something that grows" + track fit | 15 | "Adherence to Theme" was 1 of 4 MHacks 2025 criteria |
| **Depth + receipts:** a number, an algorithm, a citation | 15 | Technical Complexity criterion; Shepherd's playbook |
| **Novelty vs 2026 prior art** | 15 | Judges punish "I saw this today," not archetypes |
| **Sponsor stack** | 10 | Expected value from side prizes |

## The three contenders

### A. **Cue**: the AAC ring, refocused (current plan, `research/aac-hci`)
**New prior art found today, and it matters:**
- **Lucid Voice** won a **Grand Prize at the UC Berkeley AI Hackathon 2026**: taps → 3 register-correct sentences, partner-aware wording, tone dial, cloned voice, on-device. That is most of Mosaic's *composition* layer.
- **AllyAAC** (CHI '26, arXiv 2602.22131): **wrist-worn IMU + phone** for gesture AAC, 18 months of participatory design, 14-person field study. That covers Mosaic's *ring flicks*.
- **VoiceBridge** (Hacked 2026 Hardware 1st): head-movement typing + live transcription on a Raspberry Pi.
- **OmniComm** (GrizzHacks 2026): an AAC communicator that won the **FREE-WiLi** prize.
- Already known: diaLEX, XAAC (point → word), COMPA, the "sidekick" robot.

**What is still open (no prior art found):** **timing.** No system found by us or the earlier `02-prior-art.md` search *times the AAC user's output to the partner's turn boundary*, gives instant (<150 ms) backchannels, and buzzes the user when the floor opens. Lucid Voice and AllyAAC both optimize *what* you say; **Cue optimizes *when* you say it.** The CHI '25 evidence (users trade agency for timing) backs this up.

**Score:** wow 19 · stakes 19 · theme 6 · depth 13 · novelty 9 · sponsors 9 = **75 / 100**

### B. **Canopy**: a heat-stress band for the people who grow our food (backup)
- **Problem:** crop workers' heat-related death rate is **~20× the U.S. civilian workforce rate** (CDC MMWR 2008: 0.39 vs 0.02 per 100k). Fields often lack cell signal.
- **Research lineage (Shepherd-style):** Buller et al. 2013 Kalman filter estimates **core temperature from heart rate alone**; independently validated on **35 Washington farmworkers** against ingestible sensors (UW thesis).
- **Build:** MAX30102 PPG + skin temperature on an ESP32 band → Buller estimate → haptic + **Spanish voice alert (ElevenLabs)** → crew lead alert over **WhatsApp/iMessage (Photon)**, relayed over **LoRa (FREE-WiLi 2)** when there's no signal → a rest-break scheduling agent (Fetch.ai).
- **Theme bridge:** sustainability/climate + "the people who grow our food." Better than A's, still indirect.
- **Weaknesses:** the 30-second demo has to *time-compress* a slow physiological process, which judges may read as simulated. Prior art exists (Kenzen commercial; a 2026 UNR Makerthon winner; a SAS hackathon winner). It's October in Michigan, so there's no heat to show.
- **Score:** wow 13 · stakes 17 · theme 11 · depth 13 · novelty 8 · sponsors 9 = **71**

### C. **Buzz**: a vision-guided buzz pollinator (theme-max wildcard)
- Camera finds open flowers; a pan-tilt arm places a probe vibrating at a few hundred Hz (bumblebee-style sonication) to release pollen. Visible on a dark card.
- **Strong:** maximum theme fit, very visual, judge can move the flower and watch it track.
- **Weak:** no human stakes (that's the biggest lift factor), commercial prior art (Arugga, Polly), thin sponsor stack, and real flowering plants by Saturday are hard to get.
- **Score:** wow 21 · stakes 7 · theme 15 · depth 11 · novelty 9 · sponsors 4 = **67**

## Verdict
**Build A (Cue), with the changes below.** It matches the 2026 grand-prize archetype best: accessibility × wearable hardware × invisible AI (Shepherd, Lucid Voice, Theracat, Tremorfix, ALSistive, VoiceBridge all share it). Its one defensible novelty, **timing**, is also its best demo moment. Lucid Voice winning is *evidence that AAC lands with judges*, not a reason to drop it. You just can't lead with what Lucid Voice already did.

Switch to **B** only if the ring hardware definitely won't arrive *and* the team would rather have a sustainability story. C is a fun build but loses the human-stakes multiplier.

## Changes to Cue that move the score
| Change | Rubric effect | Effort |
|---|---|---|
| **Lead with timing, not composition.** Open with: partner tells a joke → judge (wearing the ring) flicks → laugh plays *instantly*. Then a full reply fires **at the partner's next pause**, and the ring buzzes "your turn." Only *then* show composition | Novelty +3, wow +2 | 0 (re-order the demo) |
| **One Shepherd-style number:** measure *reply gap after the partner stops talking*. Cue (pre-queued, fires at the pause) vs a tap-board baseline (an ordinary grid AAC page). Run it on 5+ hackers at the event and put it on a poster. Example target: "1.1 s vs 14 s median" (**measure it; don't quote this**) | Depth +2 | 2 h |
| **Cost table:** dedicated SGDs $6k–14k; iPad + AAC app ~$750; **Cue ≈ $30–50 in parts** (count your actual BOM) | Stakes +1, depth +1 | 15 min |
| **Act on the room** (keep the Lotus idea): point the ring at a lamp and it turns on. Use **FREE-WiLi 2's IR** as the blaster so the FREE-WiLi prize is earned | Wow +2, sponsor +1 | 2–3 h |
| **On-device composer via Freesolo:** fine-tune a small model for the 3-candidate composer so the latency number doesn't depend on the cloud (Shepherd's "on-device is the design" move) | Depth +1, sponsor +1 | 3–4 h, optional |
| **Theme bridge, lightweight:** the partner display grows a small **"conversation garden"**: each on-time turn blooms a flower, a late one wilts. It shows the timing metric *as* the theme. Tagline: *"Cue: a voice that grows back into the conversation."* | Theme +3 | 1–2 h (front-end) |
| **Name the prior art on the poster:** "Lucid Voice and AllyAAC fixed *what* AAC users say. We fixed *when*." Judges trust teams that know the field | Novelty +1 | 0 |

**Re-scored with changes: ~84 / 100.**

## Track and prize stack for Cue
| Prize | Why it's winnable | Hard requirement |
|---|---|---|
| **Grand Prize** | Archetype match + timing novelty + number | Live demo never fails → offline fallbacks (see 09-critique) |
| **Beyond the Code (Hardware)** main track | Wearable ring + IR control + haptics; likely fewer entrants than AI | The ring must be worn in the demo, not sitting on the desk |
| **FREE-WiLi** | An AAC device already won their prize at GrizzHacks 2026 | Actually use the FREE-WiLi (IR blaster or partner display) |
| **ElevenLabs** (MLH and/or sponsor) | Expressive TTS + tone dial + optional voice clone | Use their API for the speech output |
| **Judged by an LLM** (bonus) | Repo-quality track; see `../aac-hci/05-tracks.md` | README + latency bench + tests |
| Freesolo (if offered) | Fine-tuned small composer model | Train on Freesolo |
| Fetch.ai (optional) | Expose "compose" as an Agentverse agent callable from ASI:One | Only if a teammate has slack at hour 12+ |

Skip FinTech, Capital One, SpacetimeDB and Salesforce for this project.

## Sources
[Lucid Voice](https://github.com/dbhargav-uw/Lucid-Voice) · [AllyAAC / CHI '26](https://arxiv.org/abs/2602.22131v1) · [VoiceBridge (Hacked 2026)](https://github.com/Donutboy2003/Byte-of-87_VoiceBridge) · [CDC MMWR: heat deaths among crop workers](https://stacks.cdc.gov/view/cdc/183129) · [Buller algorithm validated in farmworkers (UW)](https://digital.lib.washington.edu/researchworks/items/34213275-4ed3-4f8b-88fc-72d675246a4d/full) · [UNR Makerthon 2026 (Core Temp Cord)](https://www.unr.edu/nevada-today/news/2026/sixth-annual-makerthon-competition-winners) · [Arugga robotic pollinator (NVIDIA)](https://blogs.nvidia.com/blog/arugga-tomato-pollinator-bumblebees) · `../aac-hci/*` (problem validation, prior art, build plan, critique)
