---
doc: prior-art
topic: What already exists, so we can tell judges how we're different
status: draft-v1
---

# 02 — Prior art and the differentiation map

## TL;DR
```yaml
point_at_object_to_aac: ALREADY_DONE   # VocalEyes, SceneTalk, WatchThis, an AAC patent, Talk For Me (image recognition)
llm_reply_suggestions_from_partner_speech: ALREADY_DONE_COMMERCIALLY   # Lingraphica Conversations (beta Q2 2026)
llm_symbols_to_sentence: ALREADY_DONE   # Talk For Me, GPT-4 symbol->sentence studies, Speak Ease
llm_abbreviation_expansion: ALREADY_DONE_RESEARCH   # Google SpeakFaster
wrist_imu_gesture_aac: EXISTS_IN_RESEARCH   # AllyAAC (2026), Edge Impulse blog demo
gesture_plus_speech_intent_fusion_for_aphasia: EXISTS_IN_RESEARCH_ONLY   # arXiv 2502.13983 (offline, no wearable)
expressive_tone_control_aac: SPARSE   # Expressive Keyboard, EmotionTalker, Monarch AAC; "all but absent"
eyes_free_backchannel_channel: SPARSE   # backchanneling paper gives design recs; no product found
partner_notification_and_context_marking: EXISTS_IN_RESEARCH   # COMPA (CHI'24), online meetings only
speak_at_next_pause_queueing: NOT_FOUND   # 2 searches incl. extended; candidate novelty (COMPA pauses the transcript, not the output timing)
physical_composing_or_hold_on_signal: EXISTS_IN_RESEARCH   # ASSETS'21 'sidekick' flag robot (timer motion = composing)
fused_ring_point_gesture_partner_context_with_tone: NOT_FOUND   # the combination is our whitespace
```

## A. "Point at the world → words" (the original idea, which is taken)
| Name | What it is | Year/status | Gap we can exploit |
|---|---|---|---|
| **VocalEyes** (Santa Monica College IxD student project) | iPad AR app. Point the camera at a *trained* object (Play-Doh, fruit snacks), the frame freezes, AAC buttons appear (Want/More/Help/Play/Eat/Stop/All Done), tap to speak | grad showcase project | Tablet held in hand, closed object set, fixed core buttons, no conversation context |
| **SceneTalk** (Microsoft Research, 2017) | Gaze-based AAC prototype. CV identifies objects in view and suggests related words and phrases | research prototype | Pre-LLM; authors noted misidentification, latency, lighting and occlusion limits |
| **WatchThis** (MIT Media Lab) | Watch with a flip-up camera; pointing captures the area of interest for natural-language questions about objects | research prototype | An assistant for asking questions, not AAC output |
| **US patent 12032807 "Assistive communication method and apparatus"** | AAC apparatus with a camera (optionally smart glasses) that auto-fills selections with words for recognized objects | patent | Shows the concept is known. Don't pitch pointing alone as the invention |
| **Talk For Me** (Across the Cloud; inspired by a stroke survivor) | Grid plus image-recognition suggested text, LLM builds a sentence, TTS speaks it | app (App Store), alpha | Phone grid; no wearable or eyes-free channel |
| **Lotus Ring** (Lotus Laboratories) | IR ring: point at a Lotus Switch Cover and click to toggle a wall switch. For mobility disabilities; charged about twice a year | shipping (CES 2025) | Controls the environment, not communication. **This is the interaction metaphor to borrow: point + click with a near-zero learning curve** |

## B. LLM-powered AAC (crowded in research, early in products)
| Name | What it is | Notes |
|---|---|---|
| **Google SpeakFaster** | LLM expands abbreviations (word initials) using conversation context | Nature Comms 2024; 29–60% faster for gaze users with ALS |
| **Lingraphica Conversations** | Transcribes the partner's speech, AI suggests replies, the user reviews/edits/speaks | Beta Q2 2026, launched Jul 2026; adults 18+ only; aphasia market. **Direct competitor to any "partner-aware reply suggestions" pitch** |
| **Speak Ease** (2025) | Text + voice + context (partner, emotional tone) → LLM → personalized TTS | Feasibility study with SLPs |
| GPT-4 symbol→sentence studies (2024) | Selected AAC symbols → full sentence | Studies with ASD and brain-lesion users |
| **"Why So Serious?"** (CHI '25) | AI interfaces for timely humorous comments; Full-Auto vs. controlled modes | Users trade agency for timing |
| **"The less I type, the better"** (Google) | How LLMs help or hurt AAC users | Key ethics citation: authorship, personality, overly formal output |
| **"I, Robot?" autoethnography** (arXiv 2509.13671) | An AAC user's ultra-personalized AI AAC | Personalization vs. authenticity |
| **"It's Complicated"** (CHI '26 workshop; Frisch, Wade, Vertanen et al.) | Six AAC problem spaces and how to evaluate AI AAC | Good "we know the literature" citation |
| **COMPA** (CHI '24; Valencia, Bigham, Pavel et al.) | Chrome extension for Google Meet: live transcript **pauses when the AAC user starts typing**; **context marking** (which part of the conversation you're replying to); LLM starter phrases from marked context + intent (reply/opinion/question/yes-no); **partner notifications** about what the AAC user is typing | **Closest prior art to Mosaic's timing and partner-display features.** COMPA is online-meeting only and screen-based. Mosaic is in-person, eyes-free and physical. Cite it, then say what's new: physical-world tokens, ring gestures, speak-at-next-pause, tone |
| **Context-aware AAC (location/identity/time/activity)** (2012–2015 SciTePress papers) | GPS/Wi-Fi location → phrase suggestions | Pre-LLM; shows the "context" idea is old, so the novelty must be in the interaction |
| **Aging Up AAC** (2024–25, 12 autistic adults) | Interview study | All 12 wanted typing as an option; themes include input/output flexibility and **control of communication**. Support for *multiple* input channels |
| **Design Probes for AI-Driven AAC** (aphasia, 2025) | 11 people with aphasia tested 4 AI prototypes | Images worked better as **word-retrieval reminders or shared scaffolds** than as verification. Speech input is hard for some; anxiety drives input preference |

## C. Body-signal and wearable input for AAC
| Name | Modality | Notes |
|---|---|---|
| **AllyAAC** (arXiv 2602.22131) | Wrist IMU (9.4 g Movesense) + Android; users record their own idiosyncratic gestures; personalized Transformer | 18 months of participatory design; 14-person field study; 600k+ data points. **Shows a wrist IMU for AAC is valid. We must differentiate:** they focus on gesture recognition, we'd focus on *fusing* gesture with pointing, partner context and tone |
| Edge Impulse blog, "Helping patients communicate through on-device gesture recognition" | IMU + TinyML gestures → phrases | Hobby/demo level |
| **Gesture-Aware Zero-Shot ASR** (arXiv 2502.13983; Kim, Lee, Stark, Han) | Multimodal LLM fuses aphasic speech with gesture video → intent | Offline research. **Shows that fusing fragments works**, with no wearable or real-time product |
| **AlterEgo** (MIT spin-out, 2025) | sEMG silent speech at jaw/throat; reported 92% word accuracy, >100 wpm in the lab | Commercial; not hackathon-reproducible. DIY versions: Inner Voice EMG, SilentSpeak (4× Grove EMG, ESP32-S3, 10 commands), SpeakUp (MyoWare + SVM) |
| **Meta Neural Band** | sEMG wristband; gestures plus "neural handwriting"; SDK opened for Ray-Ban Display (Swift/Kotlin + web apps) | Hardware unlikely to be available within 48 h |
| **Project Relate / Voiceitt** | Personalized dysarthric ASR | Exists; don't compete |
| **iPadOS 18 Eye Tracking; TD Pilot** | Gaze via front camera; dedicated gaze AAC | Exists; don't compete on gaze |
| **Even Realities G2 + R1 ring** | Display glasses; web-app SDK (Even Hub, Apr 2026); the R1 ring already controls apps | A plausible "deluxe" platform; likely can't be bought in time |
| **Brilliant Labs Frame/Halo** | Open-source AI glasses (camera, display, mic) | Same availability problem |
| **Snap Spectacles** | Hand tracking, ray-based pointing, World Query, LLM in lenses | **May be available at MHacks** (Snap AR prize historically). Good for a ray-pointing demo if loaners exist. UNVERIFIED for 2026 |

## C2. Turn-taking and nonverbal-signal AAC (closest to Mosaic's timing features)
| Name | What it is | Notes |
|---|---|---|
| **"Aided Nonverbal Communication through Physical Expressive Objects"** (ASSETS 2021 Best Student Paper; CACM Research Highlight "Nonverbal Communication through Expressive Objects"; Valencia et al.) | 12-month co-design of a 3D-printed **flag-like "sidekick"** on a wheelchair, controlled by the user's existing head switch. Motions included a **timer motion that conveys "I'm composing"** and a shortcut for "can you hold on a minute please" | **Strong evidence** that physical turn-taking signals help, especially with "mid-circle" partners. It also **partly overlaps Mosaic's floor-hold/composing cue**, so cite it as inspiration. Design parameters: **attention, precision, timing**. The authors note commercial SGDs "do not yet support augmentations that can increase non-verbal communication" |

## D. Hackathon prior art (to avoid looking derivative)
- MHacks 2025 **Dementia Assistant** (Snap Spectacles; remembers loved ones' names) won a track. Showed that AR + accessibility wins at MHacks.
- MHacks 2025 **SoundSense** (sounds → visual alerts for deaf users) won Lifeline. **Gestura** (gesture mouse for disabled users) won a sponsor prize. **ScreenWave** (gesture glove) won Best Hardware Hack.
- MHacks 2024 **The WiLi Watch** (voice wristband for smart home) won Accessibility. **SignVerse / Msign** (ASL) won.
- **Pattern:** accessibility wearables with gestures win often at MHacks. Plain "ASL translator" or "object to word" projects are common enough that judges have seen them. The angle has to be a *new interaction*, not a new classifier.
- Full table: `../../PAST-WINNERS.md`.

## E. Our whitespace in one sentence
> Nobody has shipped **a single eyes-free wearable that fuses** (1) pointing (fringe nouns), (2) micro-gestures (core words, instant backchannels), (3) the partner's live speech (context) and (4) a physical tone control into **one confirm-before-speak sentence**, with timing-aware delivery (*speak at the next pause*).

## Sources
[VocalEyes](https://ixd.smc.edu/student-profile-projects/vocaleyes) · [SceneTalk PDF](https://microsoft.com/en-us/research/wp-content/uploads/2017/04/scenetalk.pdf) · [WatchThis](https://www-prod.media.mit.edu/projects/watchthis/overview) · [Patent 12032807](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/12032807) · [Talk For Me report](https://www1.eleceng.adelaide.edu.au/personal/dabbott/wiki/images/f/fb/TalkForMe-FinalReport.pdf) · [Talk For Me app](https://apps.apple.com/app/talk-for-me/id6447722734) · [Lotus Ring (podfeet CES 2025)](https://www.podfeet.com/blog/2025/04/ces-2025-lotus/) · [Lotus pilot](https://gls.georgialibraries.org/join-the-lotus-ring-pilot-program-by-april-15/) · [SpeakFaster](https://research.google/blog/speakfaster-revolutionizing-communication-for-people-with-severe-motor-impairments/) · [Lingraphica Conversations PR](https://secure.businesswire.com/news/home/20260708229328/en/Lingraphica-Supports-Spontaneous-Communication-With-New-Conversations-Tool) · [Speak Ease arXiv 2503.17479](https://arxiv.org/abs/2503.17479v1) · [The less I type](https://research.google/pubs/the-less-i-type-the-better-how-ai-language-models-can-enhance-or-impede-communication-for-aac-users/) · [I, Robot?](https://arxiv.org/html/2509.13671v2) · [It's Complicated](https://arxiv.org/abs/2606.24854) · [Design probes aphasia](https://arxiv.org/abs/2504.09435v1) · [COMPA CHI'24](https://www.ruofeidu.com/cites/Valencia2024COMPA.html) · [Expressive objects / sidekick (CACM)](https://cacm.acm.org/research-highlights/nonverbal-communication-through-expressive-objects) · [ASSETS'21 best student paper](https://www.sigaccess.org/2021/11/2021-best-student-paper/) · [NSF PAR 10503737](https://par.nsf.gov/biblio/10503737) · [Aging Up AAC](https://arxiv.org/abs/2404.17730v3) · [Context-aware AAC (SciTePress)](https://www.scitepress.org/Papers/2014/48842/48842.pdf) · [AllyAAC](https://arxiv.org/abs/2602.22131v1) · [Edge Impulse blog](https://edgeimpulse.com/blog/helping-patients-communicate-through-on-device-gesture-recognition/) · [Gesture-aware ASR](https://www.arxiv.org/pdf/2502.13983) · [AlterEgo (Decrypt)](https://decrypt.co/338527/near-telepathic-wearable-communicate-silently-devices) · [SilentSpeak/Inner Voice (Hack Club)](https://summer.hackclub.com/projects/2417) · [Meta neural SDK](https://aiweekly.co/alerts/meta-opens-ray-ban-neural-input-sdk-to-developers) · [Project Relate](https://www.deeplearning.ai/the-batch/project-relate) · [iPad eye tracking](https://croma.com/unboxed/how-to-use-eye-tracking-on-iphone-or-ipad) · [Even Hub](https://idevice.com/even-realities-opened-its-glasses-to-outside-developers) · [Brilliant Halo](https://roadtovr.com/brilliant-labs-halo-smart-glasses-price-release-date/) · [Spectacles hand tracking](https://developers.snap.com/spectacles/spectacles-frameworks/spectacles-interaction-kit/features/handtracking)
