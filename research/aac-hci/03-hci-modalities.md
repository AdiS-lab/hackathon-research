---
doc: hci-modalities
topic: Input/output channels for a novel AAC interface, scored for a 24h hackathon with ~48h to source hardware
status: draft-v1
scoring: "1-5; higher is better. 'Buildable' = 24h by 3-4 students; 'Sourcing' = obtainable by Oct 3 2026 (MHacks start) from ~Oct 1"
---

# 03 — HCI modalities: what each channel is good for

## Key design insight
**Different channels are good at different parts of language.** A good novel AAC interface **assigns each part of speech to the body signal that's best at it** and lets an LLM put the pieces together:

| Language part | Best channel | Why |
|---|---|---|
| Fringe nouns (water, door, that cup) | **Pointing + camera** | You can't type a noun faster than you can point at it |
| People / addressee ("you", "Mom") | **Pointing at a person**, or face/voice ID | Deixis; also sets the register for the LLM |
| Core words and intent (want, no, more, help, question) | **Ring micro-gestures (IMU)** | About 6–10 gestures cover most core intent; they can't be pointed at |
| Reactions / backchannel (mm-hmm, haha, wait, yes/no) | **Ring gesture → instant pre-recorded audio, no LLM** | Timing matters more than wording (CHI '25 and backchannel research) |
| Tone / prosody (polite, urgent, joking, sad) | **Ring twist/tilt as a continuous dial** | Tone is the least-served dimension of AAC |
| Grammar and glue words | **LLM** | Where LLMs are strongest and judges see "Actually Intelligent" |
| Conversational context | **Mic → partner's speech transcript** | Makes candidate sentences relevant (SpeakFaster, Lingraphica) |
| Commit / speak | **Ring click (one deliberate press)** | The Lotus Ring metaphor: point + click; the user keeps authorship |

## Modality scorecard
| ID | Modality | AAC value | Novelty for judges | Buildable 24h | Sourcing by Oct 3 | Demo wow | Notes |
|---|---|---|---|---|---|---|---|
| M1 | Ring button (click / double / long) | 5 | 2 | 5 | 5 | 2 | Cheap BLE "TikTok/Kindle remote ring" sends HID key or volume events. Fallback: phone as ring |
| M2 | Ring IMU micro-gestures (flick, twist, tap, circle) | 5 | 4 | 4 | 3 | 4 | Seeed XIAO nRF52840 Sense (6-axis IMU + BLE + mic, 20×17.5 mm). Edge Impulse tutorial exists for XIAO gestures. Genki Wave (9DoF ring + buttons + Python API) if someone owns one |
| M3 | Pointing → object (camera) | 4 | 2 (done before) | 4 | 5 | 4 | Easiest version: camera on wrist or hand so the frame center is the target. Harder version: chest/head camera + MediaPipe fingertip ray (100% accuracy at 2 m, 77.5% at 3 m, <30% at 4.5 m in dim light, in one study) |
| M4 | Pointing → person (addressee) | 4 | 4 | 4 | 5 | 4 | Point at a person to set "you"/name and register (casual vs. formal). Simple face enrollment or a colored badge for the demo. Privacy caveat |
| M5 | Partner speech → context (STT) | 5 | 2 (Lingraphica) | 5 | 5 | 3 | Streaming STT via browser Web Speech API, Whisper or a realtime API |
| M6 | Turn-taking / "speak at next pause" (VAD + TRP) | 5 | **5** | 4 | 5 | 5 | Queue the composed sentence; fire it at the partner's next pause (silence >~400–700 ms or a prosodic end-of-turn). Haptic buzz = "now's your turn". No AAC product found doing this |
| M7 | Tone dial → expressive TTS | 4 | 4 | 5 | 5 | 5 | Map twist angle to `[warm]` `[urgent]` `[joking]` `[sad]`. ElevenLabs v3 audio tags (~250–300 ms; "not for realtime") vs. Flash v2.5 (~75 ms inference). Use v3 for composed sentences and pre-render reactions |
| M8 | Haptics on ring (vibration motor) | 3 | 3 | 4 | 4 | 3 | Eyes-free feedback: "selected", "queued", "your turn". Coin motor ~$1–2 |
| M9 | Partner-facing display (2nd screen / LED) | 4 | 3 | 5 | 5 | 4 | Lets the partner see the message forming (co-construction; AAC-RERC dual-screen research) and signals "I'm composing, wait" |
| M10 | Partial vocalization / dysarthric fragments → intent | 4 | 4 | 3 | 5 | 4 | Fuse "wa..." + point(bottle) → "water". Supported by gesture-aware ASR research (2502.13983). Risky to demo with typical voices; pitch honestly |
| M11 | Visual speech (lip reading) via webcam | 3 | 4 | 2 | 5 | 4 | Open VSR models exist (Auto-AVSR, LRS3 ~19% WER for visual-only). Heavy and fragile in 24 h. A good stretch goal for the laryngectomy use case |
| M12 | sEMG silent speech (MyoWare/Grove EMG on jaw/throat) | 4 | 5 | 2 | 2 | 5 | DIY versions do ~10 commands (SilentSpeak: 4× Grove EMG + ESP32-S3 + 1D CNN). High risk: electrodes, noise, training data in 24 h |
| M13 | Eye gaze (webcam / iPad) | 4 | 1 | 3 | 5 | 2 | Already well served (iPadOS 18 eye tracking, TD Pilot). Don't compete |
| M14 | AR glasses display (Spectacles / Even G2 / Brilliant) | 4 | 4 | 3 | 1–2 | 5 | Only if loaners exist at MHacks (Snap prize historically present; UNVERIFIED for 2026) |
| M15 | EEG/BCI (Muse/OpenBCI) | 2 | 5 | 1 | 1 | 4 | Not credible in 24 h; skip |

## Recommended channel set (P0 = must, P1 = should, P2 = stretch)
```yaml
P0: [M1_click, M2_imu_gestures, M3_point_object, M5_partner_stt, M7_tone_dial, M9_partner_display]
P1: [M6_speak_at_next_pause, M8_haptics, M4_point_person]
P2: [M10_partial_vocalization, M11_lip_reading, M14_ar_glasses]
SKIP: [M12_semg, M13_gaze, M15_bci]
```

## Latency budget (target the feel of a conversation)
| Step | Target | How |
|---|---|---|
| Ring event → UI | <50 ms | BLE notify → local bridge → WebSocket |
| Instant reaction (backchannel) | <150 ms | Pre-rendered audio clips; **never** route through the LLM |
| Point-click → object highlighted | <400 ms | Local detector on the frame-center crop (YOLO-World ~50+ FPS on V100-class GPUs; on a laptop use a small model or ROI only), or a fast VLM on a 256–384 px crop |
| Tokens → 3 candidate sentences | <1.2 s to first candidate | Small/fast LLM, streaming, JSON output; prefetch while the user is still selecting |
| Confirm → first audio | <500 ms | Fast streaming TTS. Pre-render the top candidate in the background while the user is deciding |

## Sources
[XIAO nRF52840 Sense](https://wiki.seeedstudio.com/XIAOEI/) · [Edge Impulse XIAO gesture wearable](https://www.hackster.io/sologithu/controlling-devices-with-gesture-detection-wearable-750074) · [Genki Wave Python API](https://pypi.org/project/genki-wave/0.1.5/) · [Tap Strap python SDK](https://github.com/TapWithUs/tap-python-sdk) · [BLE remote ring](https://shop.xda-developers.com/sales/tiktok-scrolling-kindle-app-page-turning-bluetooth-remote-ring) · [Finger-pointing estimation (arXiv 2307.02949)](https://arxiv.org/html/2307.02949v2) · [YOLO-World CVPR 2024](https://openaccess.thecvf.com/content/CVPR2024/html/Cheng_YOLO-World_Real-Time_Open-Vocabulary_Object_Detection_CVPR_2024_paper.html) · [ElevenLabs v3](https://elevenlabs.io/blog/eleven-v3) · [TRP detection](https://eejournal.ktu.lt/index.php/elt/article/view/33853) · [AAC-RERC co-construction](https://rerc2009.aac-learning-center.org/index-38406.php.html) · [VSR multilingual repo](https://github.com/Nmawyin/Visual_Speech_Recognition_for_Multiple_Languages) · [Hack Club EMG projects](https://summer.hackclub.com/projects/2417) · [Gemini Live API](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/live-api/send-audio-video-streams)
