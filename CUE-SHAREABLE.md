Cue
"2 million Americans with aphasia know exactly what they want to say -- they just lost the words. Cue lets them point at it."


THE IDEA

Cue is a camera ring + tablet for people who can't speak. A tiny camera on the ring streams what you point at -- objects highlight in real time as you scan the room. Click, and the highlighted object becomes a word. Tap "want" on the tablet, AI writes the sentence, you approve, it speaks. Hold the ring to speak at the next natural pause in conversation. Double-click for instant reactions in under 150ms.


THREE FEATURES

1. FAST COMMUNICATION
Objects highlight live as you sweep your hand. Click to select, tap a core word, sentence is built. Hold the ring -- it speaks at the partner's next pause, not a second too late. Double-click for instant "yes" / "haha" / "mm-hmm" with no delay. Cue is about timing, not typing.

2. CONTEXT-AWARE VOCABULARY
No icon folders. No scrolling. Point at what's in front of you and it becomes your vocabulary. The camera sees the room -- water bottle, phone, door, person -- and the AI uses what your conversation partner just said to write sentences that actually fit the moment.

3. PRIVATE MESSAGES
Not everything should be broadcast. Point at someone's phone, hold click, and your message sends as a text instead of being spoken aloud. "I need the bathroom" shouldn't be announced to the room.


ICP

Adults with aphasia (post-stroke), nonspeaking autistic adults/teens, and people with apraxia of speech. They can move, they can point, they know what they want to say -- they just can't produce the words.

NOT for: late-stage ALS (eye gaze), severe CP (switch scanning), deaf users (sign language).


HOW IT WORKS

RING CAMERA      -->  streams video, objects highlight live with bounding boxes
RING CLICK       -->  highlighted object becomes a word tile
TABLET TAP       -->  add core word (want / no / more / go / help / yes)
                 -->  AI generates 2-3 candidate sentences
TABLET TAP       -->  pick a sentence + speak now
RING HOLD        -->  queue sentence, speaks at partner's next pause
RING DOUBLE      -->  instant backchannel ("haha" / "mm-hmm" / "no" / "wait")


HARDWARE

Ring: XIAO ESP32S3 Sense (21x17mm, OV2640 camera, WiFi + BLE) + tactile button + vibration motor -- ~$20
Tablet/laptop: browser UI -- $0
Speaker: laptop or JBL Go 3 -- $0 (MLH hardware lab)
Backup: Logitech USB webcam on lanyard (MLH hardware lab) if ring camera isn't ready

Total: ~$20-30 vs $6,000-14,000 for dedicated AAC devices.


SOFTWARE

Object detection: MediaPipe (COCO 80 classes, in-browser, runs on every frame from ring camera)
Ring stream: ESP32S3 streams MJPEG over WiFi (~10-15fps), laptop receives + runs detection
Partner speech: Web Speech API (streaming transcription for context)
Pause detection: vad-web (Silero VAD) -- detects partner pause, triggers queued sentence
LLM: Claude Haiku or GPT-4o-mini -- tiles + partner context --> 2-3 candidate sentences
TTS: ElevenLabs Flash v2.5
Backchannels: 8 pre-rendered clips, <150ms
Private send: Photon Spectrum SDK (iMessage/WhatsApp)
UI: React + Tailwind + Vite


ARCHITECTURE

    [Ring Camera]           [Ring Button]         [Partner Mic]
    ESP32S3 OV2640          BLE click             Browser mic
         |                       |                       |
    WiFi MJPEG stream       Web Bluetooth          Web Speech API
         |                       |                       |
         v                       v                       v
  +-----------------------------------------------------------------+
  |                     Browser (laptop)                             |
  |                                                                  |
  |  Live video + MediaPipe --> bounding boxes on screen             |
  |  Ring click --> lock highlighted object as tile                   |
  |  Core word tap --> add to sentence                               |
  |  LLM --> 3 candidate sentences                                   |
  |  Tap to speak now / hold to speak at pause                       |
  |  Double-click --> instant backchannel                            |
  |                                                                  |
  +-----------------------------------------------------------------+
         |                    |                    |
      Speaker          Partner Display        Private Send
                    (second window)         (iMessage/WhatsApp)


ROLES (team of 3-4)

Person 1 -- VISION: ring camera stream, MediaPipe detection, live bounding boxes, click-to-lock
Person 2 -- COMPOSE + SPEECH: LLM sentences, ElevenLabs TTS, backchannels, partner transcription, pause detection
Person 3 -- UI: tablet interface, partner display, canvas overlay, demo polish
Person 4 -- HARDWARE: ring firmware, BLE connection, button debounce, haptic, enclosure


BUILD ORDER

Hour 0-2: webcam streaming + MediaPipe + bounding boxes on screen (keyboard standin for ring)
Hour 2-5: click-to-lock, tiles, core words, LLM returning candidate sentences
Hour 5-8: TTS wired, backchannels pre-rendered, double-click plays them
Hour 8-12: partner mic, VAD pause detection, hold-to-queue-to-pause working
Hour 12-16: ring firmware, BLE/WiFi connected, swap keyboard for ring
Hour 16-20: private send, VLM fallback, latency logging, offline fallbacks
Hour 20-24: rehearse x3, backup video, README, Devpost, freeze


PRIOR ART -- THIS COMBINATION IS NEW

diaLEX (HackCWRU 2026) -- closest. Live YOLO --> word cards. But: no live highlighting on camera feed, no clicker, no timing features, needs two Apple devices.
XAAC (2025) -- Quest passthrough + gaze select. But: $500 VR headset, sensory issues for autistic users.
Lucid Voice (Berkeley 2026 Grand Prize) -- tap words --> tone-aware sentences. But: no camera, no object detection, no timing.
Google Lens -- snapshot --> search results. Information tool. Cue is a communication tool.
OrCam MyEye -- reads text aloud for blind users. $4,500. Not AAC.

No one has combined: live object highlighting + ring clicker + AAC sentence building + timing-aware speech + private messaging.


COUNTER-ARGUMENTS

"Can't they just type?" -- At 5-15 wpm the conversation moved on. Cue is about timing, not typing.

"Isn't this Google Lens?" -- Lens tells you about things. Cue lets you talk using things. One gives search results. The other gives you a voice.

"How is this different from diaLEX?" -- diaLEX shows word cards on a separate screen. Cue highlights objects live on the camera feed as you scan. Different interaction, plus timing features and private send that diaLEX doesn't have.

"Pointing only gives nouns." -- Camera = nouns, tablet = verbs, LLM = grammar. Two taps, one sentence.

"What if detection is wrong?" -- Top-3 as tiles. Tap the right one. VLM fallback for objects outside COCO 80.

"Why not AR glasses?" -- Sensory aversion in autistic users. $1,500+ vs $30. Judges reward what you built.

"Has a ring been used for AAC before?" -- No. AllyAAC used a wrist IMU for gestures. Lotus Ring does IR light switches. A ring clicker for selecting camera-detected objects for communication is new.

"Why not a watch?" -- A ring is one click, eyes in the conversation. A watch means looking at your wrist.

"Medical device?" -- No. Communication tool.


PRIZE TARGETS

Grand Prize -- accessibility x hardware x novel timing x measured number
Beyond the Code (Hardware) -- camera ring + tablet
ElevenLabs -- TTS for all spoken output
Photon -- private messaging via iMessage/WhatsApp
FREE-WiLi -- IR point-to-control (bonus)
Judged by an LLM -- clean repo, latency bench, cited research
