Cue -- Architecture + Build Walkthrough


SYSTEM OVERVIEW

One browser tab does everything. The ring is just a wireless button + camera that sends events and images over WiFi. Everything else runs in the browser on a laptop.

    [Ring: ESP32S3 Sense]          [Partner's mic]
         |                              |
    WiFi (WebSocket)              Web Speech API
         |                              |
         v                              v
  +------------------------------------------+
  |           Chrome Browser (laptop)         |
  |                                           |
  |  Camera Frame --> MediaPipe Detector      |
  |       |                                   |
  |       v                                   |
  |  Object Tiles + Core Word Buttons         |
  |       |                                   |
  |       v                                   |
  |  LLM Composer (Haiku/GPT-4o-mini)        |
  |       |                                   |
  |       v                                   |
  |  Candidate Sentences                      |
  |       |                                   |
  |       +---> Speak Now (ElevenLabs TTS)    |
  |       +---> Queue to Pause (VAD trigger)  |
  |       +---> Send Privately (Photon)       |
  |                                           |
  |  Backchannels --> pre-rendered audio clips |
  |                                           |
  +------------------------------------------+
         |                    |
      Speaker          Partner Display
                      (second browser window)


DATA FLOW (one sentence, step by step)

1. User points ring at a water bottle, clicks
2. ESP32S3 snaps JPEG, sends over WebSocket to laptop
3. Browser receives frame, runs MediaPipe Object Detector
4. Detector returns: [{label: "bottle", confidence: 0.91}, {label: "cup", confidence: 0.34}]
5. "bottle" tile appears in the tile bar (top of screen)
6. User taps "want" core-word button on tablet
7. Current state: tiles = ["bottle"], core = ["want"]
8. Browser sends to LLM:
   {
     tiles: ["bottle"],
     core_words: ["want"],
     partner_said: "Do you need anything before we start?",
     style: ["casual", "short sentences"]
   }
9. LLM returns:
   [
     "Can I have some water?",
     "I want water.",
     "Water please."
   ]
10. Three candidate sentences appear on screen
11a. User taps one --> ElevenLabs TTS --> speaker plays it
11b. User holds ring --> sentence queued --> VAD listens for partner pause --> speaks automatically


MODULES (6 files that matter)

src/
  capture.ts      -- receives ring camera frames OR laptop webcam frames
  detect.ts       -- MediaPipe Object Detector, returns top-3 labels
  compose.ts      -- sends tiles + core words + partner context to LLM, returns candidates
  speak.ts        -- ElevenLabs TTS + pre-rendered backchannel playback
  listen.ts       -- Web Speech API (partner transcript) + VAD (pause detection)
  App.tsx          -- UI: tile bar, core words, candidates, partner display

Plus:
  ring.ts          -- WebSocket client for ring events (CLICK/DOUBLE/HOLD) + camera frames
  keys.ts          -- keyboard fallback (Space/D/H) for development without hardware


HOW EACH MODULE WORKS

1. capture.ts
   - If ring connected: listens on WebSocket for JPEG binary messages
   - If no ring: uses navigator.mediaDevices.getUserMedia() for laptop webcam
   - On CLICK event: grabs current frame as ImageBitmap
   - Exports: getFrame() --> ImageBitmap

2. detect.ts
   - Loads MediaPipe ObjectDetector with EfficientDet-Lite model (COCO 80 classes)
   - Takes an ImageBitmap, center-crops to middle 60%
   - Returns top-3 detections: [{label, confidence}]
   - If nothing detected with high confidence: falls back to VLM call (send JPEG to Claude/GPT-4o with "what is the object at the center of this image?")
   - Exports: detectObjects(frame) --> Detection[]

3. compose.ts
   - Maintains tile state: list of selected nouns + core words
   - On tile change: calls LLM with JSON schema
   - Input: { tiles, core_words, partner_last_utterances, style_examples }
   - Output: 3 candidate sentences (one must be the literal minimal)
   - Streams responses for speed
   - Exports: compose(tiles, coreWords, partnerContext) --> string[]

4. speak.ts
   - speakNow(text, tone): calls ElevenLabs Flash v2.5, plays audio
   - queueToSpeak(text): stores sentence, waits for listen.ts to signal a pause
   - playBackchannel(id): plays pre-rendered clip from cache (<150ms)
   - On startup: pre-renders 8 backchannel clips via ElevenLabs and caches as AudioBuffers
   - Exports: speakNow(), queueToSpeak(), playBackchannel()

5. listen.ts
   - startListening(): begins Web Speech API recognition (continuous, interim results)
   - Feeds transcript to compose.ts as partner context
   - VAD (vad-web): monitors mic for speech end
   - onPause callback: if a sentence is queued, triggers speak.ts.speakNow()
   - Exports: startListening(), onPause(callback), getTranscript()

6. App.tsx
   - Top section: tile bar (detected objects, tap to add/remove)
   - Middle section: core-word buttons (want / no / more / go / help / yes / question)
   - Bottom section: candidate sentences (tap to select)
   - Speak now button + queued indicator
   - Ring status indicator (connected/disconnected)
   - Opens a second window for partner display (shows tiles forming + "composing...")


RING PROTOCOL (ESP32S3 firmware)

The ring runs a WebSocket server on port 81 over local WiFi.
Laptop connects to ws://<ring-ip>:81

Ring --> Laptop messages:
  { type: "click" }                           -- button pressed
  { type: "double" }                          -- button double-pressed
  { type: "hold" }                            -- button held >800ms
  { type: "frame", data: <binary JPEG> }      -- sent immediately after "click"

Laptop --> Ring messages:
  { type: "haptic", pattern: "short" }        -- selected
  { type: "haptic", pattern: "double" }       -- queued
  { type: "haptic", pattern: "long" }         -- your turn (pause detected)


DEVELOPMENT WITHOUT HARDWARE (start today)

You don't need the ring to build 90% of this.

Phase 1: webcam + keyboard (now through Friday)
  - Laptop webcam = the camera
  - Space = click (capture frame + detect)
  - D = double-click (play backchannel)
  - H = hold (queue sentence to next pause)
  - Build the full UI, detection, composition, TTS, and timing
  - This IS the app. The ring just replaces the keyboard later.

Phase 2: ring integration (Saturday at the hackathon)
  - Flash ESP32S3 firmware (WebSocket server + camera capture + button)
  - Swap keys.ts for ring.ts (same event interface)
  - Test end-to-end with the physical ring

Phase 3: polish (Saturday afternoon)
  - Partner display in second window
  - Backchannel pre-rendering
  - Private send via Photon (bonus)
  - Latency logging for the bench numbers
  - FREE-WiLi IR point-to-control (bonus)


WHAT TO BUILD IN ORDER (hour by hour at the hackathon)

Hour 0-2: skeleton
  - Vite + React app running
  - Webcam streaming in the browser
  - MediaPipe Object Detector loaded and returning labels on a test frame
  - Keyboard events wired (Space/D/H)

Hour 2-5: core loop
  - Click --> capture --> detect --> tile appears on screen
  - Core-word buttons working (tap to add to sentence)
  - LLM call wired: tiles + core words --> 3 candidate sentences on screen
  - Tap a candidate --> logged to console (no TTS yet)

Hour 5-8: speech
  - ElevenLabs TTS wired: tap candidate --> spoken aloud
  - Pre-render 8 backchannel clips at startup
  - Double-click --> plays backchannel (<150ms target)
  - Web Speech API capturing partner speech as context

Hour 8-12: timing (the differentiator)
  - VAD (vad-web) detecting partner pauses
  - Hold --> queue sentence --> VAD triggers playback at pause
  - Partner display: second window showing tiles + "composing..."
  - End-to-end test: build a sentence while partner talks, it speaks at the pause

Hour 12-16: ring integration
  - Flash ESP32S3 firmware
  - WebSocket connection laptop <--> ring
  - Ring click --> capture from ring camera --> detect --> tile
  - Ring hold --> queue
  - Ring double --> backchannel
  - Haptic feedback working

Hour 16-20: harden
  - VLM fallback for objects outside COCO 80
  - Offline fallbacks (cached templates, pre-rendered audio)
  - Latency logging --> bench/latency.json
  - Private send via Photon (bonus)
  - FREE-WiLi IR control (bonus)

Hour 20-24: demo prep
  - Rehearse demo 3x with the exact objects you'll show judges
  - Record backup video
  - README with architecture diagram, latency table, ethics section, citations
  - Devpost submission (claims --> code links)
  - Freeze. No new features.


KEY DECISIONS LOCKED

- Camera: ESP32S3 Sense on ring (primary), laptop webcam (dev/fallback), chest-mounted Logitech (backup)
- Detection: MediaPipe in-browser (fast) + VLM fallback (slow but open-vocabulary)
- Ring communication: WiFi WebSocket (not BLE -- need bandwidth for JPEG frames)
- LLM: cloud API, not on-device (24h hackathon, don't fight inference infra)
- TTS: ElevenLabs (prize target + quality)
- Timing: vad-web for pause detection, manual override always available
- UI: single browser tab, second window for partner
- Dev strategy: keyboard-first, ring-last
