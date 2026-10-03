---
doc: cue-hardware-build
status: v1
date: 2026-10-03
supersedes_detail_of: "04-hardware-without-xiao.md (that doc is the decision; this one is the build sheet)"
assumes: "Standard US MLH hardware lab + a laptop running Chrome. No XIAO. Sensor = Grove 3-axis digital accelerometer, button = Grove button, camera = Logitech webcam."
---

# 05: Exactly what the Cue hardware looks like (no XIAO)

## 1. What it looks like on the body

```
                     LEFT HAND, palm down, index finger pointing
                     ─────────────────────────────────────────────►  (what you point at)

   [ring]  Grove BUTTON on a velcro loop around the index finger's base,
           facing the thumb → the THUMB presses it (one hand, no looking)

   [back of hand]  Logitech WEBCAM strapped flat on the back of the hand,
                   lens aimed along the index finger
                   + Grove ACCELEROMETER taped to the webcam's back
                     (it moves exactly with the camera)

   [forearm]  Arduino Uno + Grove Base Shield in a small box / on velcro,
              2 Grove cables run from hand → forearm, held by velcro bands

   [cables]  webcam USB + Arduino USB run up the arm to a USB hub → laptop
```

**At the table:** the laptop is on a stand in front of the user (it's the "tablet"), and a second device faces the partner. The user wears **one earbud** for private previews. The public voice comes from the laptop speaker or a small speaker.

**Why the camera goes on the back of the hand, not the finger:** a Logitech C270 weighs about **75 g**, too heavy for a finger but fine on the back of the hand. With the lens along the index finger, **the center of the frame is roughly what you're pointing at**, so the software just takes a center crop. Its fixed focus and 55° field of view suit objects 0.5–2 m away on a table.

## 2. Parts list
| # | Part | Qty | Source | Notes |
|---|---|---|---|---|
| 1 | Arduino (Uno-class) + **Grove Base Shield** | 1 (+1 spare) | MLH lab (12 available) | Set the shield's voltage switch to **5V** on an Uno. If the lab's board is an Uno R4 WiFi, it works the same over USB |
| 2 | **Grove Button** | 1 (+1 spare) | MLH lab (7) | The ring. Momentary; SIG goes HIGH when pressed |
| 3 | **Grove 3-Axis Digital Accelerometer** | 1 | MLH lab (7) | The sensor, on I²C. Probably an **LIS3DHTR** (address 0x19); older kits have an ADXL345 (0x53) or MMA7660 (0x4C). **Run an I²C scanner first** to find out which |
| 4 | **Grove Buzzer** | 1 | MLH lab (7) | Feedback ticks. There's no vibration motor in the lab, so audio ticks stand in for haptics |
| 5 | **Grove Rotary Angle Sensor** (optional) | 1 | MLH lab (7) | A physical **tone dial** on the forearm box (warm / even / urgent) |
| 6 | **Grove Touch Sensor** (optional) | 1 | MLH lab (8) | Second input: "cancel / not now", on the side of the forearm box |
| 7 | Grove cables | 4–5 | MLH lab (25) | Standard ones are about 20 cm. Finger → forearm needs more: **chain a Grove-to-jumper adapter + jumper wires**, or ask for 50 cm cables |
| 8 | **Logitech webcam** | 1 (+1 as the partner camera, optional) | MLH lab (8) | Usually a C270 (720p, fixed focus, 55° FOV) |
| 9 | USB hub (with USB-C if the laptop needs it) | 1 | Bring | The webcam + Arduino (+ lapel mic) need 2–3 ports. **Most likely thing to be forgotten** |
| 10 | Velcro straps / cable ties / electrical tape / a small box (e.g. a cut-down project box or cardboard) | — | Bring / lab tools | Velcro beats tape for putting it on and off the judge's hand |
| 11 | One **earbud** (wired is most reliable) | 1 | Bring | Private preview of sentence options |
| 12 | Lapel mic for the partner (USB or 3.5 mm) | 1 | Bring if possible | Pause detection in a loud hall. Fallback: the laptop mic + partner leaning in |
| 13 | Presentation clicker | 1 | Buy (~$25) | Insurance if the Arduino ring dies |

## 3. Wiring (Grove Base Shield ports)
| Shield port | Module | Pin in code | Why this port |
|---|---|---|---|
| **D2** | Button | `2` | Interrupt-capable, for clean timing |
| **D3** | Buzzer | `3` | PWM for `tone()` |
| **I2C** (any of the 4) | Accelerometer | SDA/SCL | — |
| **A0** | Rotary angle (optional) | `A0` | Tone dial, 0–1023 |
| **D4** | Touch (optional) | `4` | Cancel |

There's no breadboard and no soldering. Every module is one Grove cable into the shield.

## 4. What each input does (designed for one hand + eyes up)
| Physical action | Detected by | Cue action | Feedback |
|---|---|---|---|
| **Thumb click** (< 250 ms) | Button | Snap a photo of what you're pointing at → object tile. If options are showing, **pick the one you're hearing** | 1 tick |
| **Double click** (2 clicks within 300 ms) | Button | **Instant backchannel**, cycling the last-used one (laugh / mm-hmm / yes / wait) | none (the sound *is* the feedback) |
| **Hold** (≥ 600 ms) | Button | **Queue** the chosen sentence → it speaks at the partner's turn end | 2 ticks when queued, 1 long tone = "your turn / spoken" |
| **Roll the wrist** left/right while options are showing | Accelerometer | **Scroll** through the 2–3 options; each one plays in the **earbud** | soft tick per option |
| **Hand still** for ~150 ms after a click | Accelerometer | Delay the photo until the hand is steady → **sharp frames** | — |
| **Quick wrist flick** (spike > ~2 g) | Accelerometer | Optional alternative backchannel trigger ("haha" without the thumb) | — |
| **Turn the dial** | Rotary angle | Tone: warm / even / urgent → sent as a TTS style setting | — |
| **Touch pad** | Touch | Cancel the queue / "not now" | 1 low tone |

**Why the accelerometer matters (say this to hardware judges):** it does three jobs a button can't. It makes the camera reliable (stillness gate), it lets someone who struggles to read **choose by ear with a wrist roll** (alexia fix), and it adds a hands-busy backchannel gesture. That's the "sensor fusion" story without extra parts.

## 5. Data flow
```
Button / accel / dial / touch → Arduino (debounce + gesture detect)
      → USB serial, 115200 baud, one line per event:
          B:CLICK   B:DOUBLE   B:HOLD   R:-1 / R:+1 (roll step)   F:FLICK   S:STILL   D:0..2 (dial)   T:CANCEL
      ← laptop sends: Z1 (tick)  Z2 (double tick)  Z3 (long "your turn" tone)  Z0 (low tone)
Chrome (Web Serial API) ─┬─ webcam (getUserMedia, pick the Logitech by deviceId) → center crop → object detector → tile
                         ├─ partner mic → VAD + end-of-turn model → "turn ended" → play the queued audio
                         ├─ earbud preview via setSinkId(earbud) · public voice via setSinkId(speaker)
                         └─ WebSocket → partner display (composing… / turn ending… / your turn)
```

Browser facts that matter:
- **Web Serial** works in desktop Chrome/Edge only, on `https://` or `http://localhost`, and needs one user click to pick the port ("Connect ring" button).
- `getUserMedia` will pick the laptop's built-in camera by default. **Enumerate devices and select the Logitech by label.**
- **Two audio outputs at once:** `audio.setSinkId(earbudId)` for previews and the default speaker for public speech. Chrome supports `setSinkId` on media elements and on `AudioContext` (since Chrome 110).

## 6. Firmware (about 70 lines; type it in at the event)
```cpp
#include <Wire.h>
#include "LIS3DHTR.h"            // Library Manager: "Grove-3-Axis-Digital-Accelerometer-2g-to-16g-LIS3DHTR"
LIS3DHTR<TwoWire> LIS;

const int BTN = 2, BUZ = 3, DIAL = A0, TOUCH = 4;
unsigned long downAt = 0, lastUp = 0; bool down = false, holdSent = false, pendingClick = false;
int lastDial = -1; float rollRef = 0; bool rolling = false;

void tick(int n){ for(int i=0;i<n;i++){ tone(BUZ, 2200, 25); delay(60);} }

void setup(){
  Serial.begin(115200);
  pinMode(BTN, INPUT); pinMode(TOUCH, INPUT);
  LIS.begin(Wire, 0x19);                     // change if the I2C scanner shows another address/chip
  LIS.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);
}

void loop(){
  unsigned long now = millis();
  bool pressed = digitalRead(BTN) == HIGH;

  // --- button: click / double / hold ---
  if (pressed && !down){ down = true; downAt = now; holdSent = false; }
  if (pressed && down && !holdSent && now - downAt >= 600){ Serial.println("B:HOLD"); holdSent = true; pendingClick = false; }
  if (!pressed && down){
    down = false;
    if (!holdSent){
      if (pendingClick){ Serial.println("B:DOUBLE"); pendingClick = false; }   // 2nd press began inside the window
      else { pendingClick = true; lastUp = now; }
    }
  }
  if (pendingClick && !down && now - lastUp >= 300){ Serial.println("B:CLICK"); pendingClick = false; }

  // --- accelerometer: still / flick / roll steps ---
  float x = LIS.getAccelerationX(), y = LIS.getAccelerationY(), z = LIS.getAccelerationZ();
  float mag = sqrt(x*x + y*y + z*z);
  static unsigned long stillSince = 0; static bool stillSent = false;
  if (fabs(mag - 1.0) < 0.06){
    if (!stillSince) stillSince = now;
    if (!stillSent && now - stillSince > 150){ Serial.println("S:STILL"); stillSent = true; }   // once per still period
  } else { stillSince = 0; stillSent = false; }
  if (mag > 2.0) { Serial.println("F:FLICK"); delay(250); }
  float roll = atan2(y, z) * 57.3;                       // degrees; calibrate the axis to your mounting
  if (!rolling){ rollRef = roll; rolling = true; }
  if (roll - rollRef > 25){ Serial.println("R:+1"); rollRef = roll; }
  if (roll - rollRef < -25){ Serial.println("R:-1"); rollRef = roll; }

  // --- optional dial + touch ---
  int d = map(analogRead(DIAL), 0, 1023, 0, 2); if (d != lastDial){ Serial.print("D:"); Serial.println(d); lastDial = d; }
  static bool t0 = false; bool t = digitalRead(TOUCH); if (t && !t0) Serial.println("T:CANCEL"); t0 = t;

  // --- commands from the laptop ---
  if (Serial.available()){ String c = Serial.readStringUntil('\n');
    if (c == "Z1") tick(1); else if (c == "Z2") tick(2); else if (c == "Z3") tone(BUZ, 1500, 300); else if (c == "Z0") tone(BUZ, 600, 150); }
  delay(5);
}
```
Notes: `S:STILL` fires once each time the hand settles. On the laptop, take the photo on the first `S:STILL` after a `B:CLICK` (or after 400 ms, whichever comes first). The 0.06 g threshold needs tuning on the real mount. The roll axis depends on how the board is taped down, so print raw x/y/z once and pick the axis that changes when you roll the wrist. If the accelerometer isn't an LIS3DHTR, swap the include and the three `getAcceleration` calls; nothing else changes.

## 7. Assembly order (about 2.5 h total, with test gates)
| Step | Time | Done when |
|---|---|---|
| 1. Get parts from the MLH lab **at check-in** | 15 min | Shield + Uno, button, accelerometer, buzzer, cables, webcam in hand |
| 2. I²C scanner sketch → identify the accelerometer | 10 min | You know the chip and address |
| 3. Flash the firmware **on the desk** (nothing worn yet) | 30 min | Serial Monitor shows `B:CLICK/DOUBLE/HOLD`, `S:STILL`, `R:±1`; `Z1` ticks |
| 4. Chrome page: "Connect ring" (Web Serial) + log events + pick the Logitech camera | 30 min | Clicking the button shows a frame grab in the browser |
| 5. Mount: velcro loop + button at the index finger's base (thumb side); webcam + accelerometer on the back of the hand; Uno on the forearm; cable-tie the cables | 45 min | Someone else can put it on in under 30 s |
| 6. Re-check roll direction and stillness thresholds **while wearing it** | 20 min | Rolling the wrist reliably steps options, without false steps while pointing |
| 7. **Keyboard mirror:** keys 1/2/3/←/→ emit the same events | 10 min | The demo survives a dead cable |

## 8. Failure plan
| If this breaks | Do this | Demo still shows |
|---|---|---|
| Accelerometer flaky | Ignore R/S/F events; use click = next option, hold = choose + queue | Everything except roll-to-choose |
| Arduino / serial dies | Presentation clicker (PageDown = click; hold = hold) or the keyboard mirror | All timing features |
| Webcam on the hand is too awkward | Clip it to the **chest** (lanyard/shirt) facing forward; use center crop or tap-to-pick from top-3 tiles | Pointing → tiles, minus the "pointing finger" story |
| Hall too loud for pause detection | Lapel mic on the partner; manual "now" via touch pad; visible meter | The mechanism, honestly labeled |
| Laptop runs out of USB ports | Hub. Bring two | — |

## 9. What to say about it
*"This is the wired prototype, built from the MLH lab: a thumb button on the index finger, a camera and an accelerometer on the back of the hand. The thumb talks, the wrist chooses, the camera sees. The production version is a $20 wireless ESP32 camera ring; that board is in the mail."*

## Sources
[MLH hardware lab contents](https://guide.mlh.io/organizer-resources/hardware-lab-contents) · [Grove LIS3DHTR wiki](https://wiki.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR) · [LIS3DHTR Arduino library](https://reference.arduino.cc/reference/en/libraries/grove-3-axis-digital-accelerometer-2g-to-16g-lis3dhtr) · [Logitech C270 specs (Distrelec)](https://www.distrelec.ch/en/webcam-c270-1280-720-30fps-55-usb-logitech-960-001063/p/12571552) · [Chrome AudioContext.setSinkId](https://developer.chrome.com/blog/audiocontext-setsinkid)
