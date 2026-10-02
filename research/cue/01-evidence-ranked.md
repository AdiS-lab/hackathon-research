---
doc: cue-evidence-ranked
status: v1
researched: 2026-10-02
claim_under_test: "AAC users don't just talk slowly. They talk late. Cue fixes *when*, not just *what*."
confidence_key: "HIGH = peer-reviewed, replicated or large-n; MED = single study, small n, or practitioner source; LOW = secondary or unverified. Most papers were read through search snippets/abstracts because arxiv, PMC and many publisher sites are blocked from this environment. Re-check any number before it goes on the poster."
---

# 01: Evidence for the Cue thesis, ranked

The thesis has three links. Each needs its own evidence:

1. **Timing carries meaning.** Gaps between turns are tiny, and a late answer *means something different* from an on-time one.
2. **AAC users are always late.** Their replies take seconds to minutes, so the conversation reorganizes around them.
3. **Lateness costs people, not just conversations.** It hides competence, shrinks social life and feeds isolation.

The earlier research (`../aac-hci/01-problem-validation.md`) covered link 2 well. **Links 1 and 3 were thin, and most of what's new here goes there.**

## Tier S: lead with these (new, strong, rarely cited in AAC pitches)

| # | Claim | Source | Conf. | How to use it |
|---|---|---|---|---|
| S1 | **A delay changes what your answer means.** Listeners heard a "yeah/sure" after 0, 600 and 1200 ms of silence. With each step they rated the speaker **less willing to comply and less in agreement**. Silence was a stronger cue than pitch. | Roberts, Francis & Morgan 2006, *Speech Communication* | HIGH | The killer line: **"A late yes sounds like a reluctant yes."** AAC users are misheard in timing, not words. |
| S2 | **Past ~700 ms, "no"-type answers outnumber "yes"-type answers.** In real phone calls, preferred responses mostly came after short gaps. Only at gaps of **700 ms or more** did dispreferred responses clearly outnumber them. | Kendrick & Torreira 2015, *Discourse Processes* | HIGH | Gives you a **target number**: Cue's queued reply should land **inside 700 ms** of the partner finishing. Put it on the poster. |
| S3 | **The listener's brain predicts "yes" after a fast reply.** In an EEG study, a fast (300 ms) "no" triggered a surprise response (N400) that a delayed (1000 ms) "no" didn't, because a delay has already primed the brain to expect a "no". | Bögels, Kendrick & Levinson 2015, *PLOS ONE* | HIGH | Backup for S1/S2 if a judge pushes: "this is measurable in the brain, not just etiquette." |
| S4 | **Fast replies are how people feel connected.** Conversations with faster response times (often about a quarter second) were rated as more connected. Outside observers rated pairs as more connected too. Slowing replies in video by fractions of a second lowered enjoyment, and speeding them up raised it. | Templeton, Chang, Reynolds, Cone LeBeaumont & Wheatley 2022, *PNAS* (Dartmouth) | HIGH | Bridges timing to **loneliness**: "Response speed is how humans feel 'we clicked'. AAC users never get to click." |
| S5 | **Fluent speakers can only hit a 200 ms gap because they plan during the other person's turn and fire on a "go-signal".** Producing one word takes ≥600 ms and a simple sentence >1500 ms, yet gaps are about 200 ms. Next speakers start planning as soon as they understand the incoming turn, and launch on turn-final cues. | Levinson & Torreira 2015 model; Barthel, Meyer & Levinson 2017, *Front. Psychol.*; Levinson 2016, *TiCS* | HIGH | **The architecture argument.** Cue copies the brain's design: *compose during their turn, launch on the cue.* See `03-deeper-meaning.md`. |
| S6 | **The universal gap is about 200 ms.** Across 10 languages, average gaps sat within about 250 ms of the cross-language mean (Japanese about 7 ms, Danish about 469 ms). | Stivers et al. 2009, *PNAS* | HIGH | Already in the repo. Keep it as the "how fast is a turn" number. |

## Tier A: strong support and the human stakes

| # | Claim | Source | Conf. | How to use it |
|---|---|---|---|---|
| A1 | **Aphasia: 2M+ Americans, about 180k new cases a year. More common than Parkinson's, CP or muscular dystrophy**, but most people have never heard the word. | National Aphasia Association; NIDCD; U-M UCLL | MED-HIGH | ICP size. The "never heard of it" line works with judges. |
| A2 | **People with aphasia report worse health-related quality of life than people with cancer or Alzheimer's.** Up to **62% show signs of depression 12 months after a stroke**. They are at risk of losing friends and their wider social network. | Hilari et al.; *Frontiers in Communication* 2023 review | MED-HIGH (QoL comparison is from Lam & Wodchis 2010, widely cited) | Stakes. Pair it with S4: *the friends drift away because the conversation can't wait.* |
| A3 | **Aphasia hides competence.** "People with aphasia know much more than they can say." Trained partners can *reveal* that competence. | Kagan 1998/2001 (Supported Conversation for Adults with Aphasia, Aphasia Institute) | HIGH (clinical standard) | Frame Cue as **competence-revealing tech**: lateness makes a sharp person look confused. |
| A4 | **AAC conversations are lopsided.** Speaking partners take most turns, ask mostly yes/no questions, interrupt, and leave the AAC user as a "passive responder" who rarely initiates. | Decades of AAC conversation-analysis work (Light; Kraat; Clarke & Wilkinson; reviewed in *Front. Psychol.* 2021) | HIGH (consistent findings) | Explains *why* timing matters: if you can't take the floor in time, you only ever answer. |
| A5 | **Users trade agency for timing when timing matters.** In "Why So Serious?" (CHI '25 Honorable Mention + Best Demo), users often preferred the one-click Full-Auto mode for quips because landing on time beat perfect wording. | Valencia, Weinberg et al. 2025 (7 AAC-user interviews + prototype study) | MED-HIGH (small n, top venue) | The ethics answer: users themselves rank timing that high. Note n is small. |
| A6 | **Practitioners tell partners to wait 10+ seconds, up to 45 s.** "Most AAC users benefit from at least 10 seconds of wait time." Up to 45 s helps them claim more turns. | AssistiveWare; AbleNet; CoughDrop guidance | MED (practitioner) | Quantifies the gap: **about 10–45 s vs 0.2 s, i.e. 50–200× slower than a turn.** |
| A7 | **A first-person voice:** *"Nobody tells you a conversation has a timer on it… while you're still building a sentence, the room has moved three topics on. By the time your words are formed and ready, the exact moment they belonged to has gone. Not because you had nothing to say, but because the conversation didn't wait."* | Communication Matters (UK AAC charity), "Conversation Starters" articles written by AAC users | MED (author not verified; page blocked here) | **Open the Devpost and poster with this quote.** Check the author's name on the page and credit them. |

## Tier B: supports specific design choices

| # | Claim | Source | Conf. | Design choice it supports |
|---|---|---|---|---|
| B1 | People with aphasia **use more gestures than controls, and more of them compensate for missing words** (38% compensatory vs 0% in healthy speakers in one study). | Gesture-in-aphasia literature (e.g. Akhavan, Göksun & Nozari 2018; van Nispen et al.) | MED | Pointing is an *existing* strength. Cue builds on the body's signals instead of replacing them. |
| B2 | **Nearly everyone with aphasia has word-finding trouble ("tip of the tongue").** Phonemic cues (the first sound) are often enough to unlock the word. | Aphasia therapy standard (cueing hierarchy; Lingraphica, Tactus, UCL) | HIGH | **"Cue" mode for object naming**: offer the first sound before speaking the whole word (see `02-judgment.md` §3). |
| B3 | **About 68% of people with chronic aphasia have central alexia (reading impairment).** | Brookshire, Wilson, Nadeau, Gonzalez Rothi & Kendall 2014, *Aphasiology* 28(12) | MED-HIGH (convenience sample) | ⚠️ **Text-only candidate sentences are a problem for the core user.** Add audio preview and icons. |
| B4 | In one stroke cohort, **74% of people with aphasia had arm/leg weakness, 82% of it on the right side** (about 61% overall). | Egyptian J. Neurol. Psychiatry Neurosurg. 2019 cohort | MED (single hospital cohort) | ⚠️ **Design for one hand, the left.** The ring goes on the left hand, and the tablet sits on a stand. |
| B5 | People with aphasia found hands-free smartglass interaction (HoloLens) **"publicly awkward" and inaccessible after post-stroke paralysis**. They worried about conspicuous form factors. Tablet AAC is "physically obtrusive… perpetuates stigma". | Curtis & Neate, *Sci. Reports* 2025 (14 PWA); "Looking Past Screens", ASSETS '24 (11 PWA) | MED-HIGH | Supports **a small ring over glasses or a big tablet**. It also makes the AR "upgrade path" a weaker story than you'd think. |
| B6 | **Images help people with aphasia as word-retrieval reminders and shared scaffolds**, more than as verification. | Design Probes for AI-Driven AAC (2025, 11 PWA) | MED | Show the photo crop next to each tile. |
| B7 | A large multimodal model (GPT-4V) produced **contextually relevant vocabulary from a scene photo**, judged close to human-made by 13 SLPs/AAC researchers. | Zastudil, Holyfield, … MacNeil 2024 (arXiv 2408.11137) | MED | Backs the VLM fallback for objects outside COCO. Also **prior art** (see below). |

## Tier C: true but weak. Use sparingly or reword

| # | Claim as currently written | Problem | Better version |
|---|---|---|---|
| C1 | Backchanneling paper cited as HIGH | It's a **4-user workshop plus 4 SLP interviews**; the authors call it exploratory | "An exploratory 2025 study found AAC users improvise backchannels with eyebrow raises and wheelchair taps." Don't call it proof. |
| C2 | "30–50% abandonment" | Secondary/vendor sources | "In one study only about 39% of SLP-introduced devices were still used after a year." |
| C3 | "Proloquo2Go $300+" | It's **$249.99** (App Store, May 2026), plus a $149.99 add-on | "$250 app plus an iPad" or "$6k–14k dedicated devices" (Tobii Dynavox lists at about $10.9k–20k in Ontario's 2025 price list). |
| C4 | "ElevenLabs Flash ~75 ms" | That's **model inference only**. Independent benchmarks show a median TTFB of about 250 ms over the network | **It doesn't matter for Cue.** Pre-render the audio when the user approves, so playback at the pause is local (see `02-judgment.md` §2). |
| C5 | "OV2640 camera" in the hardware table | Recent XIAO ESP32S3 Sense boards ship with the **OV3660**, which needs a different config (most examples assume OV2640) | Check the sensor ID on the first boot and keep both configs ready. |
| C6 | "For someone with aphasia… the camera gives the name back" as a headline | **Prior art:** Obiorah, Piper & Horn, *Independent Word Discovery for People with Aphasia* (ASSETS 2017) did camera → words for aphasia. TalkAbout (ASSETS 2012) found people with aphasia **ranked location and partner context above object recognition**. | Keep the feature, but present it as *one input*, not the invention. |
| C7 | "Every human points before age 1" | Roughly right (pointing emerges around 9–12 months), but irrelevant to adult stroke survivors | Drop it. Use B1 (people with aphasia already gesture more) instead. |

## The prior-art picture, updated

| What Cue does | Who already did it | Still open? |
|---|---|---|
| Camera → object → word | diaLEX, XAAC (hackathons); Obiorah 2017 (aphasia); SceneTalk 2017; Zastudil 2024 (GPT-4V VSDs); patent 12032807 | ❌ Taken |
| Tiles/fragments → 3 LLM sentences | Lucid Voice (Berkeley AI 2026 grand prize; also personal memory graph, voice clone, tone dial); Lingraphica Conversations (shipping since Jul 2026, transcribes the partner + suggests replies); Speak Ease; Talk For Me | ❌ Taken, and now a commodity |
| Partner speech → context | Lingraphica Conversations; COMPA (CHI '24); TalkAbout (2012) | ❌ Taken |
| Composing/hold-on signal to the partner | ASSETS '21 "sidekick" flag robot; COMPA notifications | ⚠️ Partly. Cite it as inspiration |
| Instant eyes-free backchannels | QuickFire phrases exist on devices; no wearable product found | ✅ Mostly open |
| **Speak at the partner's next turn end (end-of-turn detection driving AAC output)** | **Nothing found** in four searches (2 extended) across AAC research, products and Devpost. Voice-AI agents do this for bots (Smart Turn, LiveKit) | ✅ **Open. This is the novelty.** |
| Timing metric shown as meaning ("how your reply sounded") | Nothing found | ✅ Open |

**Bottom line:** the evidence makes the timing thesis **stronger than CUE.md currently presents it**. It also shows the camera is *not* where the novelty is. Lead with timing; the camera is one input.

## Sources
- Roberts, Francis & Morgan 2006: [EMCA wiki](https://emcawiki.net/Roberts2006) · Kendrick & Torreira 2015: [MPI](https://forms.mpi.nl/node/50430), [White Rose](https://eprints.whiterose.ac.uk/116177) · Bögels, Kendrick & Levinson 2015: [PMC4689543](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4689543/), [Tilburg](https://research.tilburguniversity.edu/en/publications/never-say-no-how-the-brain-interprets-the-pregnant-pause-in-conve/)
- Templeton et al. 2022 PNAS: [Dartmouth](https://pbs.dartmouth.edu/news/2022/01/when-people-click-they-respond-faster-each-other), [PsyPost](https://www.psypost.org/how-fast-you-respond-to-someone-during-conversation-is-a-signal-of-how-connected-you-are-study-finds)
- Turn planning: [Barthel, Meyer & Levinson 2017](https://www.mpi.nl/publications/item2404491/next-speakers-plan-their-turn-early-and-speak-after-turn-final-go-signals), [PMC5387091](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5387091/), [Levinson 2016 TiCS](https://forms.mpi.nl/node/50773), [Front. Psychol. 2016](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2016.01858/full) · Stivers et al. 2009: [MPI](https://forms.mpi.nl/node/50939)
- Aphasia numbers: [NAA](https://aphasia.org/faq-list/how-common-is-aphasia/), [ASHA](https://www.asha.org/practice-portal/clinical-topics/aphasia/), [U-M MARI](https://mari.umich.edu/news/ann-arbor-recognizes-national-aphasia-awareness-month-2026/) · QoL/depression: [Frontiers Comm 2023](https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2023.1187233/full), [City Univ. (Hilari)](https://openaccess.city.ac.uk/id/eprint/7471/1/Assessing_health-related_quality_of_life_in_people_with_aphasia_-_vol1.pdf)
- SCA / competence: [Kagan 2001 JSLHR](https://pubs.asha.org/doi/10.1044/1092-4388(2001/051)), [Aphasia Institute PDF](https://src.healthpei.ca/sites/src.healthpei.ca/files/stroke/Supported_Conversation_with_Adults_with_Aphasia.pdf)
- AAC asymmetry: [Front. Psychol. 2021](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.686657/epub), [UCL common ground](https://discovery.ucl.ac.uk/id/eprint/10183279/)
- Why So Serious? [arXiv 2410.16634](https://arxiv.org/pdf/2410.16634), [Cornell](https://news.cornell.edu/stories/2025/05/ai-tools-help-people-speech-disabilities-make-timely-jokes) · Backchanneling: [arXiv 2506.17890](https://arxiv.org/html/2506.17890v1)
- Wait time: [AssistiveWare](https://www.assistiveware.com/blog/dos-and-donts-aac-wait-time), [AbleNet](https://support.ablenetinc.com/aac-education-and-resources/wait-time/) · Quote: [Communication Matters](https://www.communicationmatters.org.uk/?p=7208)
- Gesture: [Akhavan et al. 2018 (CMU)](https://www.cmu.edu/dietrich/psychology/nozarilab/papers/2018AkhavanGoksunNozari.pdf), [Tilburg](https://research.tilburguniversity.edu/en/publications/does-gesture-add-to-the-comprehensibility-of-people-with-aphasia/) · Cueing: [Lingraphica](https://aphasia.com/navigating-aphasia/aphasia-therapy/word-retrieval/), [Tactus](https://tactustherapy.com/cueing-hierarchy-word-finding-aphasia)
- Alexia: [Brookshire et al. 2014](https://aphasialab.cci.fsu.edu/files/2017/06/Brookshire-et-al_2014_freq-of-alexia-in-aphasai.pdf) · Hemiparesis: [EJNPN 2019](https://ejnpn.springeropen.com/articles/10.1186/s41983-019-0128-1/tables/1)
- Smartglasses/discreet AAC: [Curtis & Neate 2025](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12583751/), [Looking Past Screens](https://a11y-paradise.onrender.com/reviews/69ae2d528415640d742073d0) · Design probes: [arXiv 2504.09435](https://arxiv.org/html/2504.09435v1) · GPT-4V VSDs: [arXiv 2408.11137](https://arxiv.org/pdf/2408.11137)
- Prior art: [Obiorah et al. 2017](https://tidal.northwestern.edu/media/files/pubs/Independent_Word_Discovery_for_People_with_Aphasia.pdf), [TalkAbout 2012](https://userpages.umbc.edu/~skane/pubs/assets12), [Lucid Voice repo](https://github.com/dbhargav-uw/Lucid-Voice), [Lingraphica Conversations](https://secure.businesswire.com/news/home/20260708229328/en/Lingraphica-Supports-Spontaneous-Communication-With-New-Conversations-Tool)
- Prices: [Proloquo2Go](https://apppricinglab.com/iap/apple/308368164), [ASHA Medicare SGD](https://asha.org/practice/reimbursement/medicare/sgd_policy), [Ontario 2025 list](https://www.ontario.ca/files/2025-03/moh-communication-aids-manual-clinics-en-2025-03-27.pdf) · ElevenLabs latency: [docs](https://elevenlabs.io/docs/eleven-api/concepts/latency), [Deepgram analysis](https://deepgram.com/learn/is-elevenlabs-real-time-what-developers-need-to-know)
- Hardware: [OV3660 on XIAO S3](https://medium.com/@manjotkhangura/getting-esp32-s3-sense-ov3660-camera-working-a-weekend-deep-dive-941d9c1a05d8), [Web Bluetooth browser support](https://www.beaconzone.co.uk/blog/browser-support-for-web-bluetooth/) · Smart Turn: [HF ONNX](https://huggingface.co/soniqo/Smart-Turn-v3.2-ONNX), [Pipecat](https://docs.pipecat.ai/pipecat-cloud/guides/smart-turn)
