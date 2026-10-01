# Deep Dive: Context-Aware AAC Device for Non-Verbal Communication

**Status: COMMITTED. We are building this.**

> "Stephen Hawking had a team of Intel engineers. It took him a minute to produce a single word. We built a $50 device that lets someone communicate in a single tap."

---

## The Problem

5 million Americans cannot rely on speech to meet daily communication needs (Beukelman & Light, 2020). The U.S. Census Bureau doesn't even count them.

The largest subgroup: **non-verbal and minimally verbal autistic children.**

- 1 in 31 children in the U.S. are now diagnosed with autism (CDC, 2025 — up from 1 in 36 in 2023)
- 25-30% of autistic children are non-verbal or minimally verbal past age 5
- That's **600,000-720,000 children** in the U.S. alone who understand the world around them but cannot speak
- Add cerebral palsy (~764,000 Americans), ALS (~32,000), stroke-related aphasia (~2 million), and acquired brain injuries — the population is massive

These people can *see* what they want. They can *understand* language. They can *point*. They just can't produce speech.

### Current Solutions Are Broken

| Solution | Cost | Problem |
|----------|------|---------|
| Proloquo2Go | $250-300 (app only, requires iPad) | Static pre-loaded icons. If the object isn't pre-programmed, the child can't talk about it. |
| TouchChat HD | $150-300 (app only) | Same static icon limitation. 40,000 symbols, but none of them are the specific toy on the floor right now. |
| Tobii Dynavox (dedicated device) | $6,000-$14,000 | Insurance takes months to approve. Requires SLP evaluation + letter of medical necessity. |
| iPad + rugged case + AAC app | ~$750 total | Still static icons. Setup takes weeks of therapist configuration. |

**The fundamental flaw in all existing AAC**: a therapist manually pre-loads 200-500 symbols into the device. If the child is looking at something that isn't in the icon set, they have no way to communicate about it. A child staring at their juice box on the counter has no "juice box" button unless someone programmed it.

### The Stephen Hawking Reference

Stephen Hawking — the most famous AAC user in history — used Intel's ACAT system with an infrared cheek sensor. He selected characters one at a time, producing at peak 15 words per minute. By end of life: roughly 1 word per minute. His system required a dedicated Intel engineering team to maintain.

ACAT was open-sourced in 2015 and is free. But it's still character-by-character, still requires specialized hardware, and still assumes literacy. A 3-year-old can't use it.

---

## Our Solution

A dedicated device that **sees the room and turns it into tappable communication cards in real-time.**

The child doesn't type. The child doesn't navigate menus. The child doesn't need to read. The camera sees what they see, and the screen shows what's around them as big, colorful cards. Tap a card. The device speaks.

**One-liner**: "Current AAC gives children 500 pre-loaded icons. We give them everything they can see."

### How It Works

```
Camera sees room
       |
       v
Object detection (YOLOv8 on-device)
       |
       v
Objects become tappable cards on touchscreen
  [ juice ]  [ cup ]  [ mom ]  [ door ]
       |
       v
Child taps one or more cards
       |
       v
LLM constructs natural sentence
  "I want juice" / "Mom, help" / "Go outside"
       |
       v
Speaker speaks sentence aloud
       |
       v
Caregiver hears and responds
```

### Key Insight: Voice Output Is for the Listener, Not the User

The child's interaction is entirely visual and tactile — see card, tap card. The synthesized speech is for the **caregiver, teacher, parent, or anyone nearby.** This matters because:

- The child doesn't need to comprehend the spoken output
- The caregiver doesn't need to look at the device screen
- The device bridges the gap between the child's visual understanding and the caregiver's auditory understanding
- This is how all AAC works — we're just making the input side context-aware

---

## Ideal Customer Profile

**Primary**: Children ages 3-12 who are non-verbal or minimally verbal with **intact receptive language** — they understand words and objects but cannot produce speech.

This includes:
- **Autistic children with intact comprehension** (largest group) — they know what "cup" and "water" mean, they just can't say the words
- **Children with apraxia of speech** — motor planning disorder where the brain can't coordinate mouth muscles despite knowing what to say
- **Children with cerebral palsy** affecting speech — physical motor limitation, not cognitive

**Secondary**: Adults with acquired speech loss who have full language comprehension:
- Stroke survivors with expressive aphasia
- ALS patients (Hawking's condition)
- Traumatic brain injury survivors

**NOT targeting**: Pre-symbolic communicators who don't yet understand that pictures represent things. This device requires the user to recognize objects on screen — if they can't make that connection, a different intervention is needed first.

### Why This ICP Definition Matters for the Demo

When a judge asks "who is this for?", the answer is precise:

> "Children who understand everything around them but can't speak. They know what the water bottle is. They want it. They just can't tell you. This device lets them point to it and be heard."

---

## The Device

### Why a Dedicated Device, Not an App

- A child doesn't need another app on a parent's phone. They need a tool that's always available, always on, purpose-built.
- A physical device that judges can pick up and use is worth more than any slide deck.
- "We built this" hits different than "we made an app."
- Dedicated devices qualify for Best Hardware Hack (~10-15% win rate, fewer competitors).

### Hardware (From MLH Hardware Lab — Free to Borrow)

The MLH Hardware Lab at MHacks provides most of what we need:

| Component | Source | Purpose |
|-----------|--------|---------|
| Raspberry Pi 4B | MLH Hardware Lab (9 available) | Main compute — runs detection, UI, TTS |
| Logitech Webcam | MLH Hardware Lab (8 available) | Camera input for object detection |
| JBL Go 3 Speaker | MLH Hardware Lab (2 available) | TTS voice output |
| Grove Button | MLH Hardware Lab (12 available) | Optional physical "speak" button |
| Grove Buzzer | MLH Hardware Lab (10 available) | Audio confirmation feedback |
| Breadboard + jumper wires | MLH Hardware Lab | Connecting button/buzzer to Pi GPIO |

**Only thing to bring**: A small HDMI touchscreen (~$35) for the dedicated device form factor. Alternatively, display the UI on a laptop connected to the Pi — less "product" feeling but zero cost.

**Total cost with MLH lab**: $0-35

### Device Layout

```
+----------------------------------+
|           Enclosure              |
|                                  |
|   +---------------------------+  |
|   |                           |  |
|   |     7" Touchscreen        |  |
|   |                           |  |
|   |  [ juice ] [ cup ] [ toy ]|  |  <-- Child taps these
|   |                           |  |
|   |  "I want juice"           |  |  <-- Sentence bar
|   |                           |  |
|   +---------------------------+  |
|                                  |
|   Camera (top, facing outward    |
|   at the room/table)             |
|                                  |
|   Speaker (bottom/back,          |
|   facing caregiver)              |
|                                  |
|   [RPi 4B] (behind screen)      |
|                                  |
+----------------------------------+
```

Camera points outward from the top edge — same direction the child is looking. Screen faces the child. Speaker fires toward the room.

### Why Not AR Glasses / Wristband / Other Hardware

We considered and rejected these:

- **AR glasses**: Autistic children frequently have sensory aversions to things on their face. Glasses get thrown, chewed, rejected. AR overlays add visual noise — the opposite of what this population needs. Also, the caregiver can't see what the child is selecting.
- **Wristband**: If the device has a touchscreen, a separate wristband button is redundant. It adds hardware complexity without solving a real interaction problem.
- **Phone app**: Loses the "we built this device" moment. Also, a child using a parent's phone creates dependency and access issues.

The right answer is the simplest one: a screen with a camera that sits on a table.

---

## Technical Architecture

### Software Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| Object Detection | YOLOv8n (nano) via ultralytics | Runs at 8-15 FPS on RPi 4B. No cloud needed. No internet needed. |
| UI | React + Tailwind in Chromium kiosk mode | Fullscreen, no browser chrome, feels native. Uses existing scaffold patterns from repo. |
| TTS | Piper TTS (local, offline) | ~200ms latency, multiple voices, runs on-device. No API keys. |
| Sentence Construction | LLM via API (Claude) or rule-based fallback | Cards -> natural sentence. "cup + want" -> "I want the cup" |
| Backend | FastAPI on localhost | Bridges detection -> React frontend via WebSocket |
| OS | Raspberry Pi OS (64-bit Bookworm) | Stable, well-supported, Pi 4B compatible |

### Why Everything Runs Locally

No internet required. A child using this at home, in a car, at a park, at school — it just works. Judges will ask "what if there's no WiFi?" and the answer is "doesn't matter." This is a strong technical and product answer.

The only cloud dependency is the LLM for natural sentence construction, and we build a rule-based fallback so the device works fully offline. Cards map to sentence templates: `[object] + [action]` -> "I want [object]" / "Give me [object]" / "I see [object]".

### Multi-Agent Pipeline (For Technical Depth Scoring)

| Agent | Role | Tech |
|-------|------|------|
| Detection Agent | Identifies objects in camera feed, outputs bounding boxes + labels | YOLOv8n, runs every frame |
| Vocabulary Mapping Agent | Maps object labels to age-appropriate communication words | Curated vocabulary set (~100 common objects) + CLIP zero-shot for unknowns |
| Card Rendering Agent | Produces large, colorful, tappable cards from detected objects | React components, child-friendly colors, rounded corners, large text |
| Sentence Builder Agent | Constructs natural language from selected cards | LLM (Claude API) or rule-based templates |
| Speech Agent | Converts sentence to spoken audio | Piper TTS, local inference |

Visible agent communication in the UI: "Detection Agent: Found 5 objects" -> "Vocabulary Agent: Mapped to communication cards" -> "Speech Agent: Ready". Judges love watching agents talk to each other.

### De-Scoped From Original Design (Intentionally Cut)

These were in the earlier version but removed to keep scope realistic for 24 hours:

- ~~SAM2 segmentation~~ -> YOLOv8 bounding boxes are sufficient and 10x simpler
- ~~CLIP for every object~~ -> Curated vocabulary set of ~100 common objects, CLIP only for unknown objects
- ~~Context learning / personalization~~ -> "Remembers your child's patterns" is a great feature but adds significant state management. Cut.
- ~~Spatial awareness / depth estimation~~ -> "Cup ON table vs IN cabinet" is impressive but not needed for MVP
- ~~Video/animation decomposition~~ -> Not relevant to AAC use case
- ~~AR camera overlay~~ -> Adds visual complexity, rejected for ICP reasons

---

## ICP-Aligned Design Decisions

Every design choice is driven by the target user:

| Decision | Why |
|----------|-----|
| Large cards (minimum 80x80px tap targets) | Children with motor control issues need big targets |
| Maximum 6-8 cards on screen at once | Reduce cognitive load, prevent overwhelm |
| High contrast, solid colors | Visual clarity for users who may have co-occurring visual processing differences |
| No text required to use (icons + labels) | User may be pre-literate |
| Sentence bar shows selected cards visually | User confirms what they're saying by seeing it, not reading it |
| Speaker faces outward, not at user | Voice output is for the caregiver |
| Device sits on table, not held | Stable, always available, no grip strength required |
| Physical "speak" button option (Grove button) | Some users prefer tactile confirmation over screen tap |

---

## The Pitch

### Opening (15 seconds)

> "1 in 31 children in America are diagnosed with autism. Over 600,000 of them can't speak — but they understand everything around them. Current communication devices cost up to $14,000 and use static icons from 2005. Stephen Hawking had a team of Intel engineers and could produce one word per minute. We built a $50 device that does something his system never could."

### Demo (45 seconds)

Hand the device to the judge.

> "Point it at anything."

Camera sees the judging table. Water bottle, laptop, phone, pen appear as big colorful cards on the touchscreen.

> "Tap what you want."

Judge taps the water bottle card. Sentence bar shows: "I want the water bottle." Device speaks it aloud.

> "Now imagine a 4-year-old doing this. A child who has never been able to tell their parent what they want just pointed at their juice box and said 'I want juice.' For the first time."

### Technical (20 seconds)

> "YOLOv8 running on-device on a Raspberry Pi. No internet needed. Real-time object detection, vocabulary mapping, local text-to-speech. The board isn't pre-programmed — it generates itself from whatever the camera sees."

### Close (10 seconds)

> "Current AAC gives children 500 pre-loaded icons. We give them everything they can see. Every child deserves to be heard."

### Anticipated Judge Questions

| Question | Answer |
|----------|--------|
| "How is this different from Proloquo2Go?" | "Proloquo uses static pre-loaded icons — a therapist manually programs 500 symbols. Our device sees the room. If there's a juice box on the counter, it's a card. No setup, no therapist, no configuration." |
| "Is this a medical device?" | "No. AAC is classified as assistive communication technology, not a medical device. No FDA regulation. Same category as text-to-speech apps." |
| "What if the camera doesn't recognize an object?" | "We curate a vocabulary set of the 100 most common household objects for high accuracy. For unknown objects, CLIP zero-shot classification provides a best-guess label. And we always have a 'help' card that doesn't rely on detection." |
| "Does this actually work in real-time?" | "YOLOv8 nano runs at 8-15 FPS on a Raspberry Pi 4. For a static scene — a table, a room — we don't need 60 FPS. The objects aren't moving." |
| "What about children who can't understand the cards either?" | "Our ICP is children with intact receptive language — they understand objects and pictures but can't produce speech. For pre-symbolic communicators, different interventions come first. We're specific about who this serves." |
| "How much does it cost?" | "Under $50 in parts. We borrowed most of it from the MLH hardware lab today. Proloquo2Go costs $300. A Tobii Dynavox costs $14,000." |

---

## Judging Criteria Alignment

### 1. Innovation

**Score: A+**

- Camera-based context-aware AAC is genuinely novel. No hackathon winner has built this.
- Clear differentiation from every existing AAC product (static icons vs live detection).
- The Hawking reference grounds the innovation in a universally understood story.
- Real, unsolved problem — not a solution looking for a problem.

### 2. Technical Complexity

**Score: A+**

- Multi-agent pipeline with visible agent communication (trending — 25+ winners used multi-agent in 2024-2025)
- Multi-model: YOLOv8 + CLIP + LLM + TTS, all orchestrated
- On-device / edge AI inference (rising trend — 8+ winners)
- Custom hardware device, not just a web app
- Offline-capable — works without internet

### 3. Usability

**Score: A+**

- Any judge can use it in 3 seconds: point, tap, hear
- No instructions needed. No onboarding. No account creation.
- Child-friendly design driven by real AAC best practices
- Physical device that judges can hold and interact with

### 4. Theme Adherence

**Score: S (Triple-Track)**

- **Healthcare**: Assistive communication device for medical conditions (autism, cerebral palsy, apraxia, ALS, stroke)
- **Accessibility**: Bridges speech disability — translates visual understanding into verbal output
- **Frontier Interfaces**: Camera-based real-time object-to-communication pipeline, novel interaction paradigm

Triple-track eligibility is extremely rare. Healthcare + Accessibility is the most-winning combo in hackathon history (36% of all winners in the database).

---

## Sponsor Prize Targets

| Prize | Fit | Strategy |
|-------|-----|----------|
| Best Hardware Hack (~$1,000-$2,000) | High | Dedicated RPi device. Few competitors. ~10-15% win rate. |
| Best AI Application | High | Multi-agent pipeline with visible communication. Real AI engineering, not an API wrapper. |
| Best Use of [Cloud API] | High | Use sponsor's API for sentence construction or TTS. Easy integration. |
| Accessibility Prize | High | Direct fit. Assistive communication for speech-disabled users. |
| Best Use of Snap AR | Skip | Rejected AR for ICP reasons. Don't force it. |
| Best Use of Solana/Crypto | Skip | No natural fit. Don't stretch. |

**Target 2-3 sponsor prizes** alongside a track prize. Best combo: **Best Hardware Hack + Best AI Application + Accessibility Prize**.

---

## 24-Hour Build Plan

### Pre-Hackathon (Do This Week)

- [ ] Test RPi 4B + webcam + speaker setup at home (borrow or buy a Pi, return after)
- [ ] Get YOLOv8n running on Pi — confirm FPS is acceptable
- [ ] Get Piper TTS running on Pi — confirm latency and voice quality
- [ ] Test Chromium kiosk mode with a basic React app on Pi
- [ ] Curate vocabulary list: 100 most common household/classroom objects with child-friendly labels
- [ ] Design card component in Figma or rough sketch — large, colorful, rounded
- [ ] If bringing a touchscreen: test it with Pi, confirm touch input works

If pre-hackathon hardware testing isn't possible, **fallback**: run the detection backend on a laptop, display UI on a tablet/phone in the browser. Same software, different form factor. Less hardware prize credibility, but zero hardware risk.

### Hackathon Day

| Hours | Deliverable | Owner |
|-------|------------|-------|
| 0-2 | Setup: repo, deploy pipeline, grab hardware from MLH lab, assemble device | All |
| 2-5 | **Backend**: FastAPI + YOLOv8n detection endpoint. Camera frame in -> labeled objects out. | Backend/AI Lead |
| 2-5 | **Frontend**: React app — card grid, sentence bar, mode switching. Big colorful cards. | Frontend Lead |
| 2-5 | **Hardware**: Pi + webcam + speaker + screen assembled and booting. Chromium kiosk mode. | Systems Lead |
| 2-5 | **TTS**: Piper TTS integration. Sentence string in -> audio out. Test on Pi speaker. | Data/Integration Lead |
| 5-8 | **Integration**: Camera feed -> detection -> cards appear on screen. Tap card -> sentence bar updates. | Backend + Frontend |
| 5-8 | **Sentence builder**: Selected cards -> natural sentence via LLM or rule templates. | AI Lead |
| **Hour 8** | **MVP checkpoint**: Point camera at table -> objects appear as cards -> tap -> device speaks. If this doesn't work, all other work stops until it does. | All |
| 8-12 | Multi-agent visible communication in UI (agent status panel) | Frontend Lead |
| 8-12 | CLIP integration for unknown objects (fallback for objects not in curated list) | AI Lead |
| 8-12 | Vocabulary mapping refinement — "bottle" -> "drink", action verbs ("want", "help", "go") | Data Lead |
| 8-12 | Device enclosure — mount Pi + screen + camera together cleanly | Systems Lead |
| 12-16 | Card animations (Framer Motion — cards slide in, pulse on tap, sentence bar animates) | Frontend Lead |
| 12-16 | "Favorites" tray — most recently/frequently tapped cards persist at top | Backend Lead |
| 12-16 | Rule-based offline fallback for sentence construction (no LLM needed) | AI Lead |
| 12-16 | Physical button integration (Grove button -> "speak" trigger) | Systems Lead |
| 16-20 | Polish: card colors, sizing, font choices, loading states, error handling | Frontend Lead |
| 16-20 | Demo environment prep — curate objects for judging table demo | All |
| 16-20 | Edge cases: what happens with 0 detections? 20 detections? Blurry camera? | Backend Lead |
| 20-22 | **Demo rehearsal**. Run through pitch 3+ times. Time it. Identify failure points. | All |
| 20-22 | Backup: pre-cache a demo scene in case live detection hiccups | Systems Lead |
| 22-24 | Final testing, Devpost submission, backup demo recording | All |

### Critical Path

The MVP is: **camera -> detection -> cards -> tap -> sentence -> speech.** Everything else is enhancement. If the MVP doesn't work by hour 8, stop all other work and fix it. A working MVP with no polish beats a polished UI with broken detection.

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| YOLOv8n too slow on RPi 4B | Medium | Critical | Pre-test before hackathon. Fallback: run detection on laptop, stream cards to Pi display. |
| Object recognition accuracy in cluttered scenes | Medium | High | Curate demo environment. Use common, distinct objects (water bottle, backpack, phone). Pre-test with exact demo objects. |
| Judges compare to Proloquo2Go | High | Medium | Lead with differentiator: "Proloquo uses static icons. We see the room." Have comparison slide ready. |
| TTS latency too high | Low | Medium | Piper TTS runs in ~200ms locally. Pre-test. Browser TTS as fallback. |
| Touchscreen not responsive enough | Low | High | Pre-test before hackathon. Fallback: use a tablet as display. |
| MLH hardware lab out of Pi 4B kits | Low | Critical | Arrive early. Have a backup laptop-based demo ready. |
| 24 hours not enough for full pipeline | Low-Medium | High | MVP is achievable by hour 8 (detection -> cards -> speech). Everything after is additive. |
| No hardware experience on team | Medium | Medium | Pre-hackathon assembly + testing eliminates most debugging. The assembly itself is cable connections, not soldering. |
| Child-friendly UI takes too long | Medium | Medium | Big cards, solid colors, rounded corners. Simpler UI than a dashboard. Don't over-design. |

---

## Competitive Landscape (Why This Wins)

### vs. Past Hackathon Winners

| Project | What It Did | How We're Different |
|---------|------------|-------------------|
| SignVerse (MHacks 2024) | ASL to speech translation | Different direction — we're object-to-speech, not gesture-to-speech |
| BlinkAI (TreeHacks 2025) | Blink Morse code for non-verbal | Input is blink patterns. Ours is visual/tap. Different interaction model. |
| Show and Tell (TreeHacks 2024) | Emotion detection for hearing impaired | Different problem — emotion, not communication. Different modality. |
| BrailleBot (TreeHacks 2025) | Sub-$15 braille printer | Different disability, different output. Similar "affordable assistive tech" narrative. |
| Edith (TreeHacks 2025) | AI "second pair of eyes" for accessibility | General accessibility. We're specific: communication for non-verbal users. |
| Dementia Assistant (MHacks 2025) | Snap Spectacles for name recognition | Similar population (cognitive/neuro). Different problem (memory vs communication). |

No hackathon winner has built camera-based context-aware AAC. This is a genuine first.

### vs. Commercial Products

| Product | Price | Our Advantage |
|---------|-------|---------------|
| Proloquo2Go | $250-300 + iPad ($500+) | Live camera detection vs static icons. $50 vs $750+. |
| TouchChat HD | $150-300 + iPad | Same advantage. No therapist setup needed. |
| Tobii Dynavox | $6,000-$14,000 | 100x cheaper. Same core function. |
| ACAT (Hawking's system) | Free software, specialized hardware | Visual/tap input vs character-by-character typing. No literacy required. |

---

## Rating

| Dimension | Score | Notes |
|-----------|-------|-------|
| Innovation | A+ | Camera-based AAC is novel. No hackathon or commercial product does this. |
| Technical Complexity | A+ | Multi-agent, multi-model, on-device inference, custom hardware. |
| Usability | A+ | Point. Tap. Hear. 3 seconds to understand, zero onboarding. |
| Theme Adherence | S | Triple-track: Healthcare + Accessibility + Frontier Interfaces. |
| Demo Impact | S | Physical device handoff. Emotional narrative. Interactive. Unforgettable. |
| Social Impact | S | Non-verbal children, autism, $50 vs $14,000. Judges will feel this. |
| Hardware | A | Dedicated device from MLH lab parts. Tangible product. |
| Sponsor Prize Potential | A+ | Hardware Hack + AI Application + Accessibility. 2-3 prizes realistic. |
| Grand Prize Viability | A | Emotional narrative + technical depth + hardware + social impact. |

**Overall: S-tier.**

---

## Sources

Statistics and facts cited in this document:

- [CDC Autism Prevalence 2025: 1 in 31 Children](https://www.autismparentingmagazine.com/latest-cdc-autism-report/)
- [Autism Statistics 2026](https://www.motivity.net/autism-facts)
- [Non-verbal Autism: Minimally Verbal Clinical Features](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11967401/)
- [AAC Device Costs and Comparison (2026)](https://www.speechpathologygraduateprograms.org/blog/top-10-aac-augmentative-and-alternative-communication-devices/)
- [Proloquo2Go Pricing](https://littlewords.ai/blog/proloquo2go-aac-device)
- [5 Million Americans Need AAC (ASHA)](https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/)
- [CommunicationFIRST: Census Bureau Needs to Count AAC Users](https://communicationfirst.org/the-census-bureau-needs-to-start-counting-us/)
- [Stephen Hawking's ACAT and Speech System](https://www.newsweek.com/stephen-hawking-talk-communicate-how-845125)
- [ACAT Open-Sourced by Intel](https://github.com/intel/acat)
- [How DECtalk Gave Voice to Hawking (Computer History Museum)](https://computerhistory.org/blog/how-dectalk-gave-voice-to-a-genius-engineering-stephen-hawkings-wheelchair/)
- [MLH Hardware Lab Contents](https://guide.mlh.com/organizer-resources/hardware-lab-contents)
