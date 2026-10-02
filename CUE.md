# Cue

> "AAC users don't just talk slowly. They talk late."

## The Idea

Cue is a camera ring + tablet system for people who can't speak. A tiny camera on the ring sees what you point at — click, and it becomes a word on the tablet. Tap a core word like "want," and the AI writes "Can I have some water?" You approve it and either speak now or hold the ring to speak at the partner's next natural pause. Double-click anytime for instant reactions (yes, haha, mm-hmm) in under 150ms.

Cue also identifies unfamiliar objects on demand — point at medication, a control panel, or a sign, and it tells you what you're looking at. For someone with aphasia who lost the word for the thing in front of them, the camera gives the name back.

## ICP

Adults with aphasia (post-stroke), nonspeaking autistic adults/teens, and people with apraxia of speech. They can move, they can point, they know what they want to say — they just can't produce the words. For aphasia, word retrieval is the core problem: you see the object, you know what it does, but the name is gone. Cue gives it back.

NOT for: late-stage ALS (eye gaze), severe CP (switch scanning), deaf users (sign language).

## How It Works

```
RING CLICK     ->  camera snaps what you're pointing at  ->  object tile on tablet
TABLET TAP     ->  select core word (want / no / more / go / help / yes)
               ->  AI generates 2-3 candidate sentences
TABLET TAP     ->  pick a sentence + speak now
   -- or --
RING HOLD      ->  queue sentence, speaks at partner's next pause

RING CLICK     ->  instant backchannel ("yes")
RING DOUBLE    ->  cycle + play next backchannel ("haha" / "mm-hmm" / "no" / "wait")
```

## Hardware

| Component | What | Cost | Source |
|-----------|------|------|--------|
| Camera ring | XIAO ESP32S3 Sense (21x17mm, OV2640 camera, WiFi + BLE) + tactile button + coin vibration motor | ~$20 | Buy (order by Oct 1) |
| Tablet/laptop | Runs browser UI | $0 | Bring your own |
| Speaker | Laptop speakers or JBL Go 3 | $0 | MLH hardware lab |
| RPi 4B | Backend if needed | $0 | MLH hardware lab |
| Backup camera | Logitech USB webcam (chest-mounted on lanyard) | $0 | MLH hardware lab |

Total BOM: ~$20-30 vs $6,000-14,000 for dedicated AAC devices.

## Software

| Layer | Tech | Why |
|-------|------|-----|
| Object detection | MediaPipe Object Detector (EfficientDet-Lite, COCO 80 classes) | In-browser, local, <400ms |
| Ring connection | WiFi (image transfer) + Web Bluetooth (button events) | No bridge, no pairing app |
| Partner speech | Browser Web Speech API | Free, streaming transcription for context |
| Pause detection | @ricky0123/vad-web (Silero VAD) | Detects partner's pause -> triggers queued sentence |
| LLM composition | Claude Haiku or GPT-4o-mini (JSON mode) | Tiles + partner context -> 2-3 candidates |
| TTS | ElevenLabs Flash v2.5 | ~75ms inference, expressive |
| Backchannels | 8 pre-rendered audio clips | <150ms, no LLM, no TTS |
| Private send | Photon Spectrum SDK | iMessage/WhatsApp instead of speaking aloud |
| UI | React + Tailwind + Vite | — |

## Ring Firmware (~100 lines Arduino)

- ESP32S3 hosts a tiny WebSocket server on local WiFi
- On CLICK: snap JPEG (640x480, ~40KB), send to laptop over WiFi (<100ms)
- Button debounce: CLICK vs DOUBLE_CLICK vs HOLD based on timing
- Haptic commands from host: short buzz (selected), double buzz (queued)
- No ML on device. Camera captures, laptop processes.

## Tablet UI

- **Top**: object tiles from ring camera (tap to add to sentence)
- **Middle**: persistent core-word buttons (want / no / more / go / help / yes / question)
- **Bottom**: 2-3 AI-generated candidate sentences
- **Corner**: speak-now button + queued indicator
- **Second window** (partner-facing): tiles forming + "composing..." status

## Challenges + Caveats

### Hardware risks
- **Ring hardware may not arrive by Oct 3.** XIAO ESP32S3 Sense needs 2-day shipping. Backup: Logitech webcam from MLH hardware lab, chest-mounted on a lanyard. Same detection pipeline, different camera position. Loses the "point and click" UX but the demo still works.
- **Camera on a finger is physically awkward.** The ESP32S3 is 21x17mm — roughly the size of a large class ring, but with a battery and button it's chunky. A 3D-printed shell or velcro strap works for a demo. This is a prototype, not a product.
- **Image quality from a moving hand.** Snap-on-click (not streaming) mitigates this — users naturally pause when pointing. But fast or shaky clicks will produce blurry frames. Mitigation: take 2-3 rapid frames, pick the sharpest.

### Detection risks
- **COCO 80 classes won't cover everything.** It knows "bottle" and "cup" but not "humidifier" or "medication." Mitigation: VLM fallback (send the frame to a vision-language model for open-vocabulary identification). Slower (~1-2s) but covers the long tail.
- **Cluttered environments confuse object detectors.** A messy table might return 8 objects. Mitigation: center-crop the frame — what's at the center is what you're pointing at. Show top-3, user taps the right one.
- **Lighting at the venue.** Hackathon halls are uneven. Mitigation: rehearse with the demo objects, boost exposure in the capture settings.

### Interaction risks
- **"Point and click" is slower than just tapping a grid.** For a known, pre-loaded vocabulary, a traditional AAC grid is faster. Cue is better when the vocabulary is dynamic (new room, unfamiliar objects) and when timing matters more than raw wpm.
- **Core words on the tablet are still taps.** We didn't eliminate grid-style tapping — we reduced it to 6-8 persistent buttons instead of hierarchical folders of 500 icons. The LLM fills the grammar gap.
- **The LLM may over-formalize or add words the user didn't intend.** Mitigation: one candidate is always the literal minimal ("I want water"), the user always approves before anything is spoken, and style examples keep the register casual.

### Demo risks
- **Venue WiFi may be unreliable.** Ring sends images over local WiFi. Mitigation: bring a travel router for a dedicated local network between the ring and laptop. LLM/TTS calls need internet — cache template sentences and pre-rendered audio as offline fallback.
- **Pause detection in a noisy hall.** VAD may misfire or never trigger. Mitigation: lapel mic on the demo partner, manual "speak now" button as override, visible "pause detected" indicator so judges see the mechanism even if it's imperfect.
- **Web Bluetooth pairing can be flaky.** Mitigation: WiFi-only mode as backup (everything over WebSocket), keyboard shortcuts that emit the same events so the demo never dies.

### Ethical caveats
- **Not tested with actual AAC users.** Be honest about this with judges. Cite the participatory design process the field expects (AllyAAC: 18 months of co-design) as the next step.
- **AI authorship concern.** The LLM writes the sentence — is it the user's voice? Mitigation: user always approves, literal option always available, style examples preserve personality. Cite CHI '25 finding that users choose to trade some authorship for timing.
- **Camera privacy.** It captures images of objects and potentially people. Mitigation: capture only on click (not streaming to cloud), images processed locally or ephemerally, nothing stored.
- **Not a medical device.** Communication tool. No diagnosis, no treatment claims.

## AR Upgrade Path

The ring camera is a scrappy version of what AR glasses do. If Snap Spectacles are available as loaners at MHacks:
- Same detection pipeline, different camera source (glasses instead of finger)
- Detected objects become floating labels in view instead of tiles on a tablet
- Build the ring version first. Port to glasses as a stretch demo if time allows.
- "Here's the $30 version, and here's what it looks like in AR" — that's a roadmap, not a pivot.

## Counter-Arguments

**"Can't they just type on a phone?"** — At 5-15 wpm the conversation moved on 30 seconds ago. Cue is about timing, not typing.

**"Pointing only gives nouns."** — Camera = nouns, tablet buttons = verbs/intent, LLM = grammar. Two taps, one sentence.

**"How is this different from diaLEX / XAAC?"** — They stopped at "camera sees object -> word." None of them time output to conversation pauses, have instant backchannels, or send privately.

**"Why not Proloquo2Go?"** — $300+, 5-15 wpm, 30-50% abandonment. Nobody talks by scrolling icon folders.

**"What if the camera gets the object wrong?"** — Top-3 shown as tiles. Tap the right one. VLM fallback for objects outside COCO 80.

**"Why a ring and not a watch?"** — A ring points. A watch captures your wrist. Pointing is the most natural reference gesture — every human does it before age 1.

**"Is this a medical device?"** — No. Communication tool.

## Prize Targets

- **Grand Prize** — accessibility x hardware x novel timing x measured number
- **Beyond the Code (Hardware)** — camera ring + tablet
- **ElevenLabs** — TTS for all spoken output
- **Photon** — private messaging via iMessage/WhatsApp
- **FREE-WiLi** — IR point-to-control (bonus: point at lamp, it turns on)
- **Judged by an LLM** — clean repo, latency bench, cited research, ethics section
