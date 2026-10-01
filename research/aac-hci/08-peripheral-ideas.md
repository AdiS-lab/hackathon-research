---
doc: peripheral-ideas
topic: Adjacent HCI ideas found during research. Some could be a stretch feature, others a whole alternative project
status: draft-v1
---

# 08 — Peripheral ideas (beyond core AAC)

```yaml
ideas:
  - id: X1
    name: "Hum-to-intonation"
    gist: "User hums or vocalizes the melody of the sentence; its pitch contour is transferred onto the TTS output (prosody transfer)."
    why_interesting: "Many AAC users can vocalize but not articulate. Prosody transfer from reference audio exists in TTS research (global pitch/loudness features). Gives tone control that is literally your own voice's melody."
    feasibility_24h: 2   # needs pitch extraction + a TTS that accepts a contour; could fake it with SSML pitch/rate per segment
    use_as: "stretch feature or a wow moment"
  - id: X2
    name: "Late-reply anchoring (in person)"
    gist: "When your sentence is ready after the topic moved on, Mosaic adds a short bridge ('Going back to the pizza thing:') based on which partner utterance you were replying to."
    why_interesting: "COMPA (CHI'24) showed context marking helps online. Nobody does it in person, by voice."
    feasibility_24h: 5   # just prompt + transcript index
    use_as: "cheap P1 feature for Mosaic; demos well"
  - id: X3
    name: "Floor-hold signal"
    gist: "One flick plays a short 'one sec' and shows ✋ composing on the partner display / LED; the transcript keeps buffering."
    why_interesting: "Wait time (up to 45 s) increases AAC turns and words; partners interrupt or finish sentences, which users find dismissive."
    feasibility_24h: 5
    use_as: "P0 inside Mosaic"
  - id: X4
    name: "Fatigue-adaptive prediction"
    gist: "Ring IMU tremor/slowness → more aggressive auto-complete when the user is tired."
    why_interesting: "People with ALS prefer fewer predictions when strong and more when fatigued (context-aware AAC literature)."
    feasibility_24h: 3
    use_as: "talking point / stretch"
  - id: X5
    name: "Partner coach (C3)"
    gist: "AI converts the partner's open questions into choices the AAC user can answer with one flick."
    why_interesting: "Partner instruction is highly effective (meta-analysis: 17 SCED studies, 53 participants), and most partners are untrained."
    feasibility_24h: 5
    use_as: "P1 feature or a whole AI-track project"
  - id: X6
    name: "Point-to-control + point-to-say (Lotus-style unification)"
    gist: "The same ring gesture that says 'turn on the light' can also *actually* toggle a smart plug when pointed at the lamp."
    why_interesting: "Merges environmental control (Lotus Ring's actual market) with communication; very strong hardware-track demo (light physically turns on)."
    feasibility_24h: 4   # smart plug with local API, or an IR LED like Lotus
    use_as: "stretch wow moment in the demo (30 s)"
  - id: X7
    name: "Silent-speech mini vocabulary (C4)"
    gist: "Lip-reading or EMG for ~10 high-value words, fused with pointing."
    feasibility_24h: 2
    use_as: "only if a teammate has EMG/VSR experience"
  - id: X8
    name: "Personal phrase map (C5)"
    gist: "Embeddings of the scene at each confirmed utterance; later, pointing in the same place surfaces your own past phrases first."
    feasibility_24h: 3
    use_as: "personalization talking point; needs seeded history for the demo"
```

## Most promising peripheral ideas for the demo
- **X6 (point-to-control)** is the cheapest big wow: point at a lamp, click, and the lamp turns on *and* the device says "Can you leave the light on?" or simply acts. It ties directly to the Lotus Ring inspiration and makes the hardware track story concrete. A Wi-Fi smart plug with a local HTTP API: Shelly Gen1-style devices accept `http://<ip>/relay/0?turn=on|off|toggle` with no cloud needed. Gen2+ devices use an RPC API, so check the exact model. Bring your own travel router because venue Wi-Fi often isolates clients. Or use an IR LED on the ring, like Lotus.
- **X2 (late-reply anchoring)** costs about 1 hour and answers the "comment appears out of context" problem from COMPA.

## Sources
[Prosody transfer (global pitch/loudness)](https://astro.paperswithcode.com/paper/prosody-transfer-in-neural-text-to-speech) · [Prosody & AAC (PMC6802860)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6802860) · [COMPA](https://www.ruofeidu.com/cites/Valencia2024COMPA.html) · [Wait time](https://www.assistiveware.com/blog/dos-and-donts-aac-wait-time) · [Context-aware AAC / ALS fatigue](https://www.scitepress.org/Papers/2014/48842/48842.pdf) · [Partner instruction meta-analysis](https://stars.library.ucf.edu/scopus2015/642) · [Lotus Ring](https://www.podfeet.com/blog/2025/04/ces-2025-lotus/)
