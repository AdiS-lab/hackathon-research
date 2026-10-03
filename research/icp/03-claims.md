---
doc: cue-claims-ledger
status: v2 (round 2 verification pass, 2026-10-03 ~01:15 EDT)
scope: "Every claim the Cue pitch could make, from ALL evidence docs in this repo, tied to sources and graded."
source_docs:
  - research/icp/01-evidence.md          # ICP: clinical, severity, conversation, pointing, abandonment
  - research/cue/01-evidence-ranked.md   # timing science, Tier S/A/B/C, prior-art table
  - research/cue/02-judgment.md          # problems P1–P8, red-team
  - research/aac-hci/01-problem-validation.md  # rate gap, abandonment, core/fringe
  - research/aac-hci/02-prior-art.md     # camera→AAC, LLM AAC, wearables, sidekick, COMPA, hackathon prior art
  - research/aac-hci/07-risks-ethics.md  # authorship, privacy, minors
  - research/aac-hci/09-critique.md      # failure modes
  - IDEA2-DEEP-DIVE.md                   # earlier autism-children framing (superseded for this ICP)
  - research/grand-prize/*               # judging, not ICP claims (not ledgered)
status_key: "USE = safe on poster/pitch · Q&A = fine when asked, not headline · VERIFY = re-check the primary before printing · DROP = don't say"
strength_key: "HIGH = peer-reviewed/replicated/clinical standard · MED = single study, small n, practitioner/advocacy · LOW = secondary/unverified"
note: "Many publisher and forum sites are blocked from this environment; several rows rely on abstracts/snippets. VERIFY rows are the ones to check first."
---

# 03: The claims ledger

## 0. The claim tree (how the argument hangs together)

```
T0  "Ray isn't slow. He's late, and late gets you talked over. Cue gets him his turn back."
├── T1  Timing carries meaning in conversation ............ CONV1–CONV6
├── T2  People with aphasia are always late ................ CONV7, CONV8, CONV17, POP3, POP4, POP10
├── T3  Lateness costs them: voice, respect, friends, safety  CONV9–CONV14, SEV1–SEV9
├── T4  Today's alternatives don't fix timing .............. ALT1–ALT9, NOV2
├── T5  Cue's mechanism copies fluent turn-taking, and it's new  CONV6, NOV3, NOV4
└── T6  Cue fits Ray's body and brain ...................... POP5–POP8, PT1–PT5, ALT5
```

If a judge attacks one branch, defend it with that branch's rows. If a branch has only VERIFY rows, don't lead with it.

---

## 1. Population and clinical profile (who Ray is)

| ID | Claim, worded as we'd say it | Source | Repo doc | Strength | Status | Used in |
|---|---|---|---|---|---|---|
| POP1 | 2M+ Americans live with aphasia, about 180k new cases a year; more common than Parkinson's. | NAA; NIDCD; U-M | icp/01 B1; cue/01 A1 | MED-HIGH | USE | Poster number 1 |
| POP2 | Roughly a fifth to a third of stroke survivors (21–38%) have aphasia. | Frontiers Rehab Sci 2025 review; StatPearls | icp/01 A1 | HIGH | Q&A | Sizing |
| POP3 | In Broca's (non-fluent) aphasia, comprehension is relatively intact, so people know what they want to say and are aware they can't; frustration follows. | StatPearls NBK436010 | icp/01 A2 | HIGH | USE | Persona, opening line |
| POP4 | In Broca's aphasia, verbs and grammar words are harder than nouns (telegraphic speech). | Chen & Bates; noun–verb dissociation review | icp/01 A3 | HIGH | USE | Camera = nouns, buttons = verbs, LLM = grammar |
| POP5 | About 68% of people with chronic aphasia have reading trouble (central alexia). | Brookshire et al. 2014, *Aphasiology* | icp/01 A4; cue/01 B3 | MED-HIGH | USE | No-reading UI, earbud preview |
| POP6 | About 61% of people with post-stroke aphasia have right-side weakness. | EJNPN 2019 single-hospital cohort | icp/01 A5; cue/01 B4 | MED | USE ("in one cohort") | Left-hand ring |
| POP7 | Writing is impaired too: agraphia in ~56% of left-hemisphere acute stroke patients in one series; about a third of all acute strokes. | Acta Medica Saliniana (acute stroke series) | 02-applications §2.1 | MED | Q&A | "Why not text?" |
| POP8 | Clinicians split people with severe aphasia into "independent" vs "partner-dependent" communicators (Garrett & Lasker 2005). Ray is independent. | AAC-Aphasia Categories; validity study | icp/01 A6 | HIGH | Q&A | "Can he use this?" / who it's NOT for |
| POP9 | Stroke under 65 is rising: self-reported stroke prevalence rose ~15% for adults under 65 between 2011–13 and 2020–22 (14.6% at 18–44, 15.7% at 45–64), vs 7.8% overall. | CDC *MMWR* 73(20), 2024 (BRFSS) | icp/01 B10 | HIGH | Q&A | Why Ray is 58 *(round 2: verified, upgraded)* |
| POP10 | Aphasia often doesn't go away: about two-thirds of people aphasic in the acute phase were still aphasic at 12 months; 30–43% remain severely aphasic at 18 months. | Laska et al. 2001, *J Intern Med*; Pedersen et al. (Copenhagen Stroke Study) | 02-applications §2.14 | MED-HIGH | Q&A | "Won't he just recover?" *(round 2: new)* |

## 2. Severity (what it costs)

| ID | Claim | Source | Repo doc | Strength | Status | Used in |
|---|---|---|---|---|---|---|
| SEV1 | People with aphasia report worse health-related quality of life than people with cancer or Alzheimer's. | Lam & Wodchis 2010 | icp/01 B3; cue/01 A2 | MED-HIGH | USE | Poster number 2 |
| SEV2 | Up to 62% show depression 12 months after stroke. | Hilari et al.; Frontiers Comm 2023 review | icp/01 B3 | MED-HIGH | USE ("up to") | Poster number 2 |
| SEV3 | After stroke, friends are what disappears; family stays. People with aphasia got the most hurtful responses and lost friends unless friendships were strong before. | Northcott & Hilari 2011 (n = 29, 10 with aphasia); follow-up network study | icp/01 B4 | MED-HIGH | USE | "The friends drift away" |
| SEV4 | ~28% of working-age people with post-stroke aphasia return to work vs ~45% of stroke survivors overall. | Graham, Pereira & Teasell 2011, *Aphasiology* (systematic review) | icp/01 B5 | MED-HIGH | USE | Stakes *(round 2: primary found)* |
| SEV5 | Hospital patients with communication disability have about 3× more preventable adverse events. | Bartlett et al. 2008; Hemsley et al. | icp/01 B6 | HIGH | USE | Doctor scene stakes |
| SEV6 | Clinicians talk to family instead of the patient and stick to basic needs; in recorded visits no physician wrote down keywords. | Carragher et al. 2024; Mayo patient-centred study | icp/01 B7 | MED-HIGH | USE | "Ask me. I understand." |
| SEV7 | Caregivers of people with aphasia carry more burden and depression than other stroke caregivers (one study OR 3.73 for severe depression). | Several smaller studies (Turkey, Indonesia, Brazil) | icp/01 B8 | MED | Q&A | Denise |
| SEV8 | Insurance-funded therapy usually ends before recovery does. | American Stroke Association | icp/01 B9 | MED | Q&A | Ray's therapy ended at month 5 |
| SEV9 | 84.5% (2016) / 86.2% (2020) of Americans have never heard the word "aphasia." | NAA awareness surveys | icp/01 B2 | MED-HIGH | USE | Poster number 1, "why people assume he's confused" |
| SEV10 | AAC abandonment: in one study only ~39% of SLP-introduced devices were still used after a year. | Johnson (UNH thesis) and cited study | aac-hci/01 P4; cue/01 C2 | MED | Q&A ("in one study") | Why Ray's iPad is in a drawer |
| SEV11 | UK: 54% of adults have never heard of aphasia, and 20% say they'd assume someone with communication problems had a learning difficulty. | Stroke Association (UK) public survey, 2024–25 | — | MED (advocacy survey) | Q&A | Problem #2: people assume he's less capable *(round 2: new)* |

## 3. Conversation mechanics (the timing thesis)

| ID | Claim | Source | Repo doc | Strength | Status | Used in |
|---|---|---|---|---|---|---|
| CONV1 | The normal gap between turns is about 200 ms across 10 languages. | Stivers et al. 2009, *PNAS* | cue/01 S6; aac-hci/01 | HIGH | USE | Poster number 3 |
| CONV2 | Past about 700 ms, "no"-type answers outnumber "yes"-type answers. | Kendrick & Torreira 2015 | cue/01 S2 | HIGH | USE | 700 ms target, meter |
| CONV3 | A late "yes" sounds less willing: listeners rated replies after 600 and 1200 ms of silence as progressively less willing. | Roberts, Francis & Morgan 2006 | cue/01 S1 | HIGH | USE | Proof slide |
| CONV4 | The listener's brain expects "no" after a delay (N400 study). | Bögels, Kendrick & Levinson 2015 | cue/01 S3 | HIGH | Q&A | Backup if challenged |
| CONV5 | Faster replies make people feel more connected; slowing replies lowered enjoyment. | Templeton et al. 2022, *PNAS* | cue/01 S4 | HIGH | USE | Links timing → friends (SEV3) |
| CONV6 | Fluent speakers plan their reply during the other person's turn and launch on a turn-end cue. | Levinson & Torreira 2015; Barthel et al. 2017 | cue/01 S5 | HIGH | USE | "Cue copies how your brain takes turns" |
| CONV7 | AAC users are advised to get 10–45 s of wait time. | AssistiveWare; AbleNet | cue/01 A6 | MED (practice) | USE | Poster number 3 |
| CONV8 | AAC output runs ~12–18 wpm vs ~125–185 wpm speech. | Higginbotham via CHI '25 and others | aac-hci/01 P1 | MED-HIGH | Q&A | Background only (we don't sell speed) |
| CONV9 | Spouses "speaking for" the person with aphasia goes with less participation by that person. | Croteau & Le Dorze (overprotection); Oxford CA study | icp/01 C4 | MED-HIGH | USE | Partner screen |
| CONV10 | First person: "My brain is still trying to catch up while the conversation has already moved on… when people interrupt, finish my sentences, or speak over me." | Stroke Association forum post | icp/01 C1 | MED | VERIFY (snippet; check page and author before printing) | Opening quote option |
| CONV11 | First person: callers ask "Where's your mother?"; "the hardest part is getting people to understand I know what I want to say." | ASA "Communication advice from experts" | icp/01 C2 | MED-HIGH | USE (attribute to ASA) | Problem #2 |
| CONV12 | AAC conversations are lopsided: partners ask yes/no questions and the AAC user becomes a "passive responder." | AAC conversation-analysis literature | cue/01 A4 | HIGH | Q&A | Why turns matter |
| CONV13 | Word retrieval is a measurable stressor in aphasia; time pressure makes naming worse. | Mayo preliminary study; TUM simulation | icp/01 C7 | MED | Q&A | Composing during their turn removes pressure |
| CONV14 | Groups, noise and phone calls are the hardest settings for people with aphasia. | BYU noise studies (AJSLP 2023/2024); needs assessments | icp/01 C6 | MED-HIGH | USE | Sunday dinner scene |
| CONV15 | AAC devices demand visual attention, so users miss partners' faces and nonverbal cues. | Backchanneling in AAC, 2025 (exploratory, 4 users + 4 SLPs) | aac-hci/01 P6; cue/01 C1 | MED (small n) | Q&A ("an exploratory study") | Ring = eyes up |
| CONV16 | AAC users will trade control for timing when timing matters. | "Why So Serious?" CHI '25 (7 users) | cue/01 A5 | MED-HIGH | USE (note small n if asked) | Ethics answer |
| CONV17 | People with aphasia are less likely to anticipate turn transitions: predicting a turn end relies on lexical and syntactic content, which aphasia disrupts (eye-tracking during video conversations). | Preisig et al. 2016, *J Cogn Neurosci* 28(10) | 02-applications §2.18 | MED (lab study, small n) | Q&A | Why Cue detects the turn end for him *(round 2: new)* |

## 4. Why the alternatives don't fix it

| ID | Claim | Source | Repo doc | Strength | Status | Used in |
|---|---|---|---|---|---|---|
| ALT1 | Texting success in chronic aphasia tracks severity and reading/writing deficits, not confidence or how often people text (n = 20). | AJSLP 2022 texting transactional-success study; Kinsey et al. 2021 | 02-applications §2.1 | MED-HIGH | Q&A | "Why not text?" |
| ALT2 | Speech recognition fails on aphasic speech: ~61–70% word error rate off the shelf, ~32–36% after fine-tuning (AphasiaBank). | UNIR Whisper/Wav2Vec study; Imperial "When Whisper listens to aphasia" | 02-applications §2.3 | MED-HIGH | Q&A | "Why not Siri?" |
| ALT3 | Paged (multi-page) layouts slow selection: 133 vs 193 symbols in 20 min on the first trial vs a single page. | RESNA 2016 (Anson, layout study) | 02-applications §2.2 | MED (not aphasia-specific) | Q&A | Ring vs tablet |
| ALT4 | People with aphasia navigate scene-based displays more accurately and faster than grids, with fewer eye fixations (n = 21 eye-tracking). | Pitt/ASHA VSD studies (Brock et al.; Thiessen et al.) | 02-applications §2.2 | MED-HIGH | Q&A | Vocabulary from the real scene |
| ALT5 | People with aphasia spoke ~70% of the time even with an AAC device available. | CORE linguistic analysis (n = 3) | icp/01 A7 | MED (tiny n) | Q&A ("in one small study") | "His voice beats Cue's voice" |
| ALT6 | SLPs link AAC abandonment to **poor fit**, not maintaining/adjusting the system, lack of training and lack of support (275 AAC-specialist SLPs). | Johnson, Inglebret, Jones & Ray 2006, *AAC* 22(2) | icp/01 E1 | MED-HIGH | Q&A | "Vocabulary from the room" = a system that adjusts itself *(round 2: the "67%" figure could not be traced to any primary and is dropped, see X13)* |
| ALT7 | People are reluctant to use AAC in public with unfamiliar partners; stigma drives abandonment. | Abandonment reviews | icp/01 E2 | MED | Q&A | Discreet ring |
| ALT8 | Partner training works for chronic aphasia, but only for the partners who get it. | Simmons-Mackie et al. 2016 systematic review | 02-applications §2.5 | HIGH (that it works) | Q&A | Partner screen travels with him |
| ALT9 | People with aphasia found head-worn displays "publicly awkward"; tablets are stigmatizing. | Curtis & Neate 2025 (14 PWA); "Looking Past Screens" ASSETS '24 | cue/01 B5 | MED-HIGH | Q&A | Ring, not glasses |

## 5. Pointing and words

| ID | Claim | Source | Repo doc | Strength | Status | Used in |
|---|---|---|---|---|---|---|
| PT1 | People with aphasia gesture more than controls; Broca's aphasia uses specific gestures to compensate. | Sekine & Rose 2013; Kong 2015; Akhavan 2018 | icp/01 D1; cue/01 B1 | HIGH | USE | Cue builds on what he already does |
| PT2 | Working out what a person with aphasia is pointing at can take "extensive interactional work." | Klippi 2015 | icp/01 D2 | MED-HIGH | USE | The 20-questions problem |
| PT3 | Chil: a three-word vocabulary ("yes", "no", "and") yet a powerful speaker through pointing, gesture and partners. | Goodwin 1995–2003 | icp/01 D3 | HIGH | Q&A / poster story | Competence beyond words |
| PT4 | Images help people with aphasia as word-retrieval reminders. | Design Probes for AI-Driven AAC 2025 (11 PWA) | cue/01 B6 | MED | Q&A | Photo crop on each tile |
| PT5 | A first-sound (phonemic) cue often unlocks a word. | Aphasia therapy cueing hierarchy | cue/01 B2 | HIGH | Q&A | "Cue me" mode |

## 6. Novelty and prior art

| ID | Claim | Source | Repo doc | Strength | Status | Used in |
|---|---|---|---|---|---|---|
| NOV1 | Camera → object → word is NOT new: Obiorah et al. 2017 (aphasia), SceneTalk 2017, VocalEyes, patent 12032807, diaLEX and XAAC (hackathons), Zastudil 2024 (GPT-4V). | Prior-art searches | aac-hci/02 A, D0; cue/01 | HIGH | USE (to show we know) | Why camera isn't the headline |
| NOV2 | LLM reply/sentence suggestion is NOT new: Lingraphica Conversations (shipping since Jul 2026, 18+), Lucid Voice (Berkeley 2026 grand prize), Speak Ease, Talk For Me, SpeakFaster. | Prior-art searches | aac-hci/02 B; cue/01 | HIGH | USE | "They fixed what; we fix when" |
| NOV3 | Nothing found that times AAC output to the partner's turn end (4 searches, 2 extended, across research, products and Devpost, as of Oct 2, 2026). | Prior-art searches | cue/01 prior-art table; aac-hci/02 TL;DR | MED (absence of evidence) | USE ("we couldn't find any") | The invention |
| NOV4 | Closest prior art for the floor signal: ASSETS '21 "sidekick" flag robot with an "I'm composing" timer motion; COMPA (CHI '24) partner notifications in Google Meet. | Valencia et al. 2021; Valencia et al. 2024 | aac-hci/02 B, C2 | HIGH | Q&A (cite as inspiration) | Honest credit |
| NOV5 | People with aphasia ranked location and partner context above object recognition (TalkAbout, ASSETS 2012). | Kane et al. 2012 | cue/01 C6 | MED-HIGH | Q&A | Camera is one input |

## 7. Claims to DROP or reword (collected from every doc)

| ID | As it appears somewhere | Problem | Say instead | Where it appears |
|---|---|---|---|---|
| X1 | "Proloquo2Go $300+" | It's $249.99 | "$250 app plus an iPad" | CUE.md, IDEA2-DEEP-DIVE.md |
| X2 | "30–50% abandonment" | Vendor/secondary | "In one study only ~39% were still used after a year" (SEV10) | aac-hci/01 |
| X3 | "ElevenLabs ~75 ms" | Model inference only; network TTFB ~250 ms | Pre-render at approval; playback is local | CUE.md |
| X4 | "The camera gives the name back" as the headline | Prior art (Obiorah 2017) | NOV1: "one input" | CUE.md, CUE-SHAREABLE.md |
| X5 | "Every human points before age 1" | True but irrelevant to adults after stroke | PT1 (people with aphasia already gesture more) | CUE.md |
| X6 | 600–720k nonverbal autistic children; "a 3-year-old can use it" | Different ICP (children, minors + AI) | Not part of this pitch | IDEA2-DEEP-DIVE.md |
| X7 | Nonspeaking autistic teens in the ICP | Minors + AI; spelling-to-communicate controversy | "Future co-design partners, not a claim tonight" | CUE.md, CUE-SHAREABLE.md |
| X8 | "Cue lets nonverbal people talk" / "voice for the voiceless" | Overclaims; Ray has words | "Gets his turn back" | general |
| X9 | "Faster AAC" / "ring is faster than a tablet" | Not true per tap (02-applications §2.2) | "On time, eyes up, one hand" | general |
| X10 | "2 million Americans with aphasia know exactly what they want to say" | Not true of all aphasia (fluent/global differ) | "People with non-fluent aphasia, like Ray, usually know what they want to say" (POP3) | CUE-SHAREABLE.md tagline |
| X11 | "OV2640" camera | New XIAO boards ship OV3660 (moot: XIAO isn't coming) | Check sensor ID if Plan C | CUE.md |
| X12 | Any measured result before we measure it | — | Fill reply-gap numbers at hour 18 | everywhere |
| X13 | "67% abandoned AAC because vocabulary didn't match daily life (n = 275)" | No primary found; the n = 275 study surveyed **SLPs**, not users, and reports factors, not this percentage | ALT6 wording | icp/01 E1 (fixed) |

## 8. Gaps: claims we'd like but don't have yet
1. A direct measurement of **reply gaps in aphasia conversation** (how long people with aphasia actually take to respond in natural talk). Searched indirectly; not found as a single number. We use AAC wait-time guidance (CONV7) instead.
2. ~~Primary source for the 67% figure~~ Resolved in round 2: not traceable, dropped (X13).
3. **A named first-person quote we can print** (CONV10 needs the forum author and page check; CONV11 is safe via ASA).
4. **Any aphasia-specific study of wearables for AAC.** Only glasses/tablet perceptions (ALT9) so far.
