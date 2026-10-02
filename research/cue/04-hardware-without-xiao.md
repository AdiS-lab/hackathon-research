---
doc: cue-hardware-without-xiao
status: v1
date: 2026-10-02
facts: "XIAO ESP32S3 Sense has NOT shipped (it won't arrive by Sat 9 AM). The 'tablet' is a laptop. Repo is private. No AAC user or SLP contact yet."
---

# 04: Building Cue without the XIAO

**Don't wait for the board.** The timing thesis (queue → speak at turn end, instant backchannels) needs **a button on a finger and a laptop**, not a camera. The camera is input #3. Everything below comes from the **MLH hardware lab** (its standard US kit has 8 Logitech webcams, 12 Arduinos + Grove base shields, 7 Grove buttons, Grove buzzers, 9 Raspberry Pi 4B kits) or from a store on Saturday morning.

## The plan: a wired "ring" from the MLH lab
| Part | Source | Role |
|---|---|---|
| **Grove button** in a velcro finger loop, worn on the **left index finger** | MLH lab (Grove Button ×7) | Click / double / hold, exactly as CUE.md specifies |
| **Arduino + Grove base shield** strapped to the wrist with a short Grove cable to the button | MLH lab | Debounces and emits `CLICK`, `DOUBLE`, `HOLD` over USB serial |
| **Grove buzzer** (or a vibration motor if you can find one) on the wristband | MLH lab | Feedback: one chirp = selected, two = queued, long = your turn |
| **Logitech webcam** strapped to the back of the left hand/wrist, pointing forward | MLH lab (×8) | The pointing camera: snap a frame on click |
| **Laptop** running Chrome | You | UI, detection, LLM, TTS, turn detection |
| **Partner display** = a second laptop or a phone browser over WebSocket | Teammate | "composing… / turn ending… / your turn" + the conversation garden |

**Why this is better for the demo, not just a fallback:**
- **Web Serial in Chrome on the laptop** reads the Arduino directly, with no Wi-Fi, no pairing and no ESP32 camera config. It removes failure modes F3/R6 at once.
- The webcam image is far better than an OV2640/OV3660 on a moving finger, so object detection works the first time.
- A wired prototype reads as honest engineering. Pitch it as: *"This is the wired prototype. The production version is a $20 ESP32 camera ring; the board is literally in the mail."*

Firmware is about 40 lines: read the button, time it (CLICK < 250 ms; DOUBLE = two clicks within 300 ms; HOLD ≥ 600 ms), `Serial.println("HOLD")`, and drive the buzzer on commands from the laptop.

## Plan B: off-the-shelf clicker (zero firmware)
A **USB/Bluetooth presentation clicker** (e.g. Logitech R400/R500-type, sold at Best Buy/Target/Staples) pairs with the laptop as a keyboard and sends PageDown/PageUp. Map PageDown click/double/hold in the browser. Tape it to a finger strap. It's less "hardware track", but it never fails. Buy one Saturday morning as insurance, ~$20–30.
*(Avoid "TikTok/Kindle ring remotes" for this: many send volume or touch events that browsers don't see reliably, and some only do "page forward".)*

## Plan C: buy an ESP32 camera board Saturday
Micro Center (Madison Heights, about 45–60 min from Ann Arbor) usually carries ESP32 boards and Seeed/Adafruit parts, but **stock is unverified**. Call or check their site before driving. Only worth it if someone can go without losing build time. **Recommendation: skip it.** It's a long drive for the part of the project that isn't the novelty.

## Track decision
- **Wired ring + webcam + haptics/buzzer + FREE-WiLi IR lamp** → still a credible **Beyond the Code (Hardware)** entry: a wearable, physical feedback and a physical-world effect.
- If by **hour 6** there's no wearable working at all (clicker only, no lamp) → enter **Actually Intelligent**, and lead with the end-of-turn model + timing metric.

## Updates to the earlier docs
- "Drop Web Bluetooth" is no longer a concern: the laptop runs Chrome, and Web Serial replaces both BLE and the Wi-Fi WebSocket for the ring.
- The OV3660/OV2640 note only matters if Plan C happens.
- The "one hand, left side" design point still holds: put the button **and** the camera on the left hand, and keep the laptop on the table, operable with one hand (big targets, keyboard shortcuts for helpers only).
