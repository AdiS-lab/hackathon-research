---
doc: problem-validation
topic: Is AAC (augmentative & alternative communication) a valid, judge-convincing problem?
status: draft-v1
confidence_legend: "HIGH = primary/peer-reviewed source seen in search snippet; MED = secondary source or single snippet; LOW = unverified / inferred"
---

# 01 — Problem validation

## TL;DR (machine-readable)
```yaml
verdict: VALID_PROBLEM
strongest_pain_points:
  - id: P1_rate_gap
    claim: "AAC users communicate at ~10-20 wpm vs ~130-200 wpm natural speech"
    confidence: MED
  - id: P2_timing
    claim: "Messages arrive too late; conversation moves on; jokes/backchannels die. AAC users will trade some authorship for speed when timing matters."
    confidence: HIGH   # CHI'25 'Why So Serious?' + 2025 backchanneling paper
  - id: P3_tone
    claim: "Synthetic voices are flat; users have almost no control over tone/prosody; called 'all but absent' from AAC R&D"
    confidence: MED
  - id: P4_abandonment
    claim: "Large share of AAC systems are abandoned/under-used (one study: only ~39% used >1 year; secondary sources quote 30-50% abandonment)"
    confidence: MED
  - id: P5_core_vs_fringe
    claim: "~200-250 core words cover ~80% of what people say; objects (nouns) are 'fringe' vocabulary"
    confidence: MED
  - id: P6_attention
    claim: "AAC devices demand visual attention, so users miss partner's face/nonverbal cues"
    confidence: HIGH   # backchanneling paper
population:
  us_rely_on_aac: "~2M+ (ASHA, via secondary source)"
  us_could_benefit: "~5M (Beukelman & Light 2020, via secondary source)"
  world_could_benefit: "~97M (Beukelman & Light 2020, via secondary source)"
```

## 1. The communication-rate gap (P1)
- Typical AAC device output is about **10 wpm** compared with 130–200 wpm for speakers. Another commonly quoted range is AAC at **10–20 wpm** against **140–150 wpm** conversational speech. A 2023 study using fine-tuned RoBERTa language models on AAC corpora reached about **25.75 wpm**, which is still far below speech.
- Google's **SpeakFaster** (Nature Communications, Nov 2024) used fine-tuned LLMs and conversational context to expand abbreviations. Text-entry rates were **29–60% above baseline** for two eye-gaze users with ALS, with **57% motor-action savings** in simulation.
- **Implication for us:** LLMs measurably speed up AAC, so the "AI actually solves a real problem" story (the Actually Intelligent track) has peer-reviewed support.

## 2. Timing beats everything (P2), which is the most under-served pain point
- *"Why So Serious? Exploring Timely Humorous Comments in AAC Through AI-Powered Interfaces"* (CHI '25; Best Paper Honorable Mention and Jury Best Demo; Valencia, Weinberg et al.). It names three barriers: **timing, intonation, technical limits**. Users "frantically type as the conversation moves on, and jokes play too late". When timing is critical, AAC users **prefer a Full-Auto mode** and trade some agency for speed.
- *"One Does Not Simply 'Mm-hmm': Exploring Backchanneling in the AAC Micro-Culture"* (2025; Weinberg, O'Connor, Gonzalez Penuela, Valencia, Roumen). Backchannels ("uh-huh", nods) are a large part of conversation. AAC users fall back on eyebrow raises, chair or wheelchair taps and pre-programmed "QuickFire" phrases. AAC devices **demand visual attention**, which means users miss their partner's nonverbal cues. The paper gives design recommendations for building backchanneling into AAC.
- **Implication:** an **eyes-free, instant-reaction channel** (a ring gesture that triggers a backchannel in about 100 ms) targets a documented, under-served need. This is a stronger differentiator than "point at objects".

## 3. Tone of voice (P3)
- Research quoted in snippets: speech-generating AAC "synthesize[s] a single flat tone … devoid of emotion". People who use these devices "have very little expressive control over their tone of voice", and the issue "remains all but absent from AAC research and development".
- Prior work exists: the Expressive Keyboard (emoji and punctuation drive prosody), EmotionTalker, prosodic VOCA research, and **Monarch AAC**, a Columbia Greater Good Challenge winner that offers tone and emotional nuance plus adaptive vocabulary.
- 2025–26 TTS can do this: ElevenLabs **v3** supports inline audio tags such as `[sad] [angry] [whispers] [laughs] [sighs]`, but at about 250–300 ms latency it isn't recommended for real-time use. **Flash v2.5** runs at about 75 ms model inference and under 500 ms end to end.
- **Implication:** a physical **tone dial** (ring twist or tilt) that sets emotion and emphasis is cheap to build, demos well and is backed by research.

## 4. Abandonment (P4)
- One study found that only **39.35%** of devices introduced by SLPs are used for more than a year. Main reasons: poor fit, lack of support or training, stigma, devices that don't match the user's strengths, and **insufficient support for multimodal communication**.
- A secondary source (a vendor blog citing ASHA) puts abandonment or under-use at 30–50%. This is **LOW–MED confidence**, so quote the 39% figure with care.
- **Implication:** "AAC that works with the body's existing signals (gestures, partial speech, pointing) instead of replacing them" directly answers the "insufficient multimodal support" reason for abandonment.

## 5. Core vs. fringe vocabulary (P5), the honest weakness of "point at objects"
- Banajee, DiCarlo & Stricklin (2003): **25 words made up 96%** of words spoken by toddlers. For adults, **about 200–250 words cover about 80%** of speech.
- Objects you can point at are **fringe** vocabulary (nouns). Core words like *want, more, not, go, help, you, that* can't be pointed at.
- **Implication:** a pointing-only design is limited by language structure, not just by the fact that it's been done. A credible design needs a **separate channel for core words**, such as ring gestures or LLM-inserted structure. The concepts in 04-concepts.md are built around this.

## 6. Who exactly is the user? (Judges will ask.)
| Group | Can point? | Can gesture? | Partial speech? | Fit for a "multimodal fragments" design |
|---|---|---|---|---|
| Autistic people who don't speak or speak little | usually yes | yes | sometimes | HIGH |
| Aphasia after stroke (word retrieval is broken, intent is intact) | yes (often one-handed) | yes | fragmentary | HIGH; research shows gestures improve intent recognition |
| Childhood apraxia of speech / Down syndrome | yes | yes | partial | HIGH |
| Laryngectomy / voice loss | yes | yes | can mouth words | MED (lip reading would be the better channel) |
| Cerebral palsy with motor impairment | varies | idiosyncratic gestures | dysarthric | MED; AllyAAC shows a wrist IMU works with personalized gestures |
| Late-stage ALS | no | minimal | no | LOW (eye gaze or BCI is the right channel; don't claim this group) |

**Recommended pitch framing:** "People who *can* move and make sounds but can't produce reliable speech: aphasia, nonspeaking autism, apraxia. Today's AAC makes them ignore their body's signals and dig through a grid."

## Sources
- AAC rate stats: [RESNA 2008 Romich](https://resna.org/sites/default/files/legacy/conference/proceedings/2008/CAC/Romich.html), [Sheffield 2023 poster (RoBERTa 25.75 wpm)](https://staffwww.dcs.shef.ac.uk/people/S.Goetze/papers/2023_Yusufali_UK_Speech_Conference_2023_Poster.pdf), [White Rose eprint 201253](https://eprints.whiterose.ac.uk/id/eprint/201253)
- SpeakFaster: [Nature Comms / PMC11530652](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11530652/), [Google Research blog](https://research.google/blog/speakfaster-revolutionizing-communication-for-people-with-severe-motor-impairments/)
- Timing/humor: [arXiv 2410.16634](https://arxiv.org/pdf/2410.16634), [Cornell news](https://news.cornell.edu/stories/2025/05/ai-tools-help-people-speech-disabilities-make-timely-jokes)
- Backchanneling: [arXiv 2506.17890](https://arxiv.org/abs/2506.17890v1)
- Tone: [Microsoft voicesetting paper](https://microsoft.com/en-us/research/uploads/prod/2018/01/voicesetting.pdf), [prosodic VOCA pre-print](https://opus.bibliothek.uni-augsburg.de/opus4/files/48858/pre-print_Springer_jw-ea_prosodicVOCA.pdf), [Monarch AAC](https://sps.columbia.edu/news/monarch-aac-assistive-communication-tool-takes-first-place-greater-good-challenge), [ElevenLabs v3](https://elevenlabs.io/blog/eleven-v3)
- Abandonment: [SEN Magazine](https://senmagazine.co.uk/content/tech/assistive-tech/28585/aac-abandonment/), [Johnson thesis (UNH)](https://scholars.unh.edu/thesis/385)
- Core vocab: [AssistiveWare](https://www.assistiveware.com/blog/teaching-core-words-building-blocks-communication-and-curriculum), [Liberator](https://liberator.net.au/news/the-importance-of-speaking-like-a-toddler.html)
- Population: [ASHA Practice Portal](https://www.asha.org/Practice-Portal/Professional-Issues/Augmentative-and-Alternative-Communication/), [voxbooster stats (secondary)](https://voxbooster.com/blog/aac-device-statistics-2026)
- Gesture + aphasia: [arXiv 2502.13983 Gesture-Aware Zero-Shot ASR](https://www.arxiv.org/pdf/2502.13983), [Design Probes for AI-Driven AAC (aphasia)](https://arxiv.org/abs/2504.09435v1)
- AllyAAC: [arXiv 2602.22131](https://arxiv.org/abs/2602.22131v1)

> NOTE FOR DOWNSTREAM AGENTS: arxiv.org, mhacks.org and several other domains were **blocked by the egress proxy** in this research environment. Paper claims come from search-engine snippets and abstracts, not full-text reads. Re-verify any number before it goes on a slide.
