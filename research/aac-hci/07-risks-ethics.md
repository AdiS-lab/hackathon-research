---
doc: risks-ethics
topic: Technical risks, ethical pitfalls, and how to pre-empt them in the pitch
status: draft-v1
---

# 07 — Risks and ethics

## Technical risk register
```yaml
risks:
  - id: R1
    risk: "Hardware doesn't arrive by Oct 3"
    likelihood: MED
    impact: HIGH
    mitigation: "Order 2x XIAO nRF52840 Sense today with the fastest shipping; also buy a BLE remote ring (Amazon next-day); fallback C = phone-on-wrist (DeviceMotion IMU + camera) and switch main track to 2 (AI)"
  - id: R2
    risk: "Object recognition wrong in venue lighting / clutter"
    likelihood: HIGH
    impact: MED
    mitigation: "Center-crop ROI only; show top-3 and let twist/click cycle; rehearse with the same 4 demo objects; VLM fallback; template fallback"
  - id: R3
    risk: "IMU gestures misfire (false positives while pointing)"
    likelihood: MED
    impact: MED
    mitigation: "<=8 large distinct gestures; require the button held as a 'gesture clutch', or a 300 ms stillness gate; per-user threshold calibration screen"
  - id: R4
    risk: "LLM latency spikes on venue Wi-Fi"
    likelihood: HIGH
    impact: HIGH
    mitigation: "Prefetch candidates on every tile change; cached template sentences as instant option 2; phone hotspot as backup network; local small model optional"
  - id: R5
    risk: "Pause detection fires during a mid-sentence breath, or never fires in a noisy hall"
    likelihood: MED
    impact: MED
    mitigation: "Headset/lapel mic for the partner during the demo; 500-700 ms hangover; manual 'now' click always overrides; visual countdown on the partner display"
  - id: R6
    risk: "Web Bluetooth pairing flakiness in the demo"
    likelihood: MED
    impact: HIGH
    mitigation: "Auto-reconnect loop; keyboard shortcuts that emit the same events (judge never sees a dead demo); backup video"
  - id: R7
    risk: "Scope creep (lip reading, EMG, AR glasses)"
    likelihood: HIGH
    impact: HIGH
    mitigation: "P0/P1/P2 list in 03-hci-modalities.md; feature freeze at hour 18"
```

## Ethical pitfalls (judges and LLM judges look for these)
1. **Authorship and "words put in my mouth".** AAC users take pride in their words. LLM suggestions can sound overly formal and wash out personality ("The less I type, the better"). Concerns about authenticity and self-perception come up repeatedly.
   - *Design response:* nothing is spoken without an explicit click; the literal minimal sentence is always offered; a "my style" few-shot set; edits go back into style examples.
2. **The agency vs. timing tradeoff.** Users *will* give up some agency for timing (CHI '25). Mosaic makes this a **user-controlled dial**, not a hidden default: an "Auto" mode (top candidate plus speak at next pause) vs. a "Careful" mode (always choose).
3. **Partner privacy.** An always-on mic transcribes people who didn't consent, and the camera may capture bystanders.
   - *Design response:* the camera captures only on click; transcripts are kept in memory for N turns and never saved; a visible "listening" indicator on the partner display; face enrollment only for consenting people.
4. **Overclaiming the user population.** Don't say "for all nonverbal people". Name the groups (aphasia, nonspeaking autism, apraxia) and say late-stage ALS needs gaze or BCI.
5. **Not tested with users.** Say so plainly. Point to the participatory process the field expects (AllyAAC: 18 months of co-design; "It's Complicated", CHI '26 workshop, on evaluating AI AAC beyond wpm).
6. **Children and AI.** Lingraphica limits Conversations to adults 18+ "due to AI regulations". Pitch adult users to avoid this question, or address it.
7. **Medical device language.** Avoid "treats" or "diagnoses". Use "communication tool / prototype".

## One-slide ethics statement (paste-ready)
> *Mosaic suggests and never speaks for you. Every sentence needs your click. The plain version of what you selected is always an option. You choose the speed/control tradeoff. The camera only looks when you point and click, and conversation audio is never stored.*

## Sources
["The less I type, the better" (Google Research)](https://research.google/pubs/the-less-i-type-the-better-how-ai-language-models-can-enhance-or-impede-communication-for-aac-users/) · ["Why So Serious?" CHI'25](https://arxiv.org/pdf/2410.16634) · [I, Robot? autoethnography](https://arxiv.org/html/2509.13671v2) · [It's Complicated, CHI'26 workshop](https://arxiv.org/abs/2606.24854) · [AllyAAC](https://arxiv.org/abs/2602.22131v1) · [Lingraphica Conversations (18+)](https://secure.businesswire.com/news/home/20260708229328/en/Lingraphica-Supports-Spontaneous-Communication-With-New-Conversations-Tool) · [AAC etiquette: don't finish sentences](https://www.assistiveware.com/blog/dos-and-donts-aac-wait-time)
