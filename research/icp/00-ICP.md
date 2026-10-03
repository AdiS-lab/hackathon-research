---
doc: cue-icp
status: v1
date: 2026-10-03 (MHacks day 1)
read_time: 8 min
companion: "01-evidence.md (every number below, with source + confidence)"
decision: "ICP = one adult with chronic non-fluent (Broca's-type) aphasia after a left-hemisphere stroke, living at home with a spouse. Lead the pitch with 'the conversation moves on without him'. Introduce the camera as the way he turns the pointing he already does into words."
---

# Cue ICP: who we're building for, what hurts, and how to show it

## 1. The one person

> **Ray, 58.** *Fictional composite built from the research in `01-evidence.md`. Every detail matches a documented pattern, but Ray is not a real person. Say "a composite" if anyone asks.*

| | |
|---|---|
| **Who he was** | High-school chemistry teacher for 30 years in Ypsilanti. Talked for a living. Known for bad puns. |
| **What happened** | Left-hemisphere (MCA) ischemic stroke 14 months ago. |
| **Aphasia type** | Moderate **non-fluent (Broca's-type)** aphasia with **apraxia of speech**. |
| **What he *can* do** | Understands most everyday conversation. Knows exactly what he wants to say. Produces 1–3 word bursts with long pauses: *"Coffee… no. Uh… tea."* **Nouns come easier than verbs.** Grammar words drop out (telegraphic speech). Points and gestures constantly. Says "yes", "no" and a few automatic phrases reliably. |
| **What he *can't* do** | Build a sentence on demand. Get a word out on time. Read more than a few words without effort (mild alexia). Use his **right hand** well (right-side weakness; he walks with a cane in his left). Phone calls are close to impossible. |
| **Home** | Lives with his wife **Denise (56)**, who still works full time. Two adult kids nearby; a 9-year-old granddaughter, **Maya**, is over most Sundays. |
| **Care so far** | Inpatient rehab → outpatient speech therapy, which **ended at month 5** when his visits ran out. Now: an aphasia group once a week, and a therapy app he uses sometimes. |
| **AAC history** | His SLP set up a symbol app on an iPad. He used it for about two weeks. It lives in a drawer: too many folders, too slow, and it made him "look sick" at the dinner table. He uses his voice, gestures and pointing ~70% of the time anyway. |
| **Friends** | His teacher friends visited a lot in the first two months. Now it's mostly family. |
| **Mood** | Flat. Denise worries he's depressed. He stopped going to his grandson's games because "people talk to Denise, not me." |
| **What he wants** (in his group's words) | To be **independent and respected**, to **give his opinion**, to **get back to social life** and maybe part-time work. Not to "talk faster". |

### Who Ray is NOT (say this out loud; judges trust it)
- **Not** global aphasia (can't understand or point meaningfully) → needs partner-dependent strategies, not a device.
- **Not** fluent/Wernicke's aphasia (speaks fluently but with wrong words, poor comprehension) → LLM + reading-heavy UI would fail him.
- **Not** primary progressive aphasia (e.g. the Bruce Willis story) → different, degenerative condition.
- **Not** ALS / locked-in (eye gaze), not CP (switch scanning), not Deaf (sign).
- **Not** a child, and **not** nonspeaking autism (minors + AI; the spelling-to-communicate controversy). Future co-design partners, not a claim tonight.

### Secondary user: Denise (and every partner)
She is the person Ray talks to most, and she's worn out. Caregivers of stroke survivors **with** aphasia carry more burden and much more depression than those caring for stroke survivors without it. She often **speaks for Ray**: answers the doctor, finishes his sentences. She means well. Research shows that "speaking for" is linked to Ray **participating less**. **Cue has to work on Denise's behavior too, not only Ray's.**

---

## 2. Ray's problems, ranked by severity

Scoring: **Frequency** (how often it happens) × **Harm** (what it costs him) × **Gap** (how badly today's tools fail), each 1–5. Max 125.

| # | Problem (as Ray lives it) | Freq | Harm | Gap | Score | Does Cue solve it? |
|---|---|---|---|---|---|---|
| **1** | **The conversation moves on without him.** By the time a word is ready, the topic has changed. People finish his sentences, talk over him, or switch to yes/no questions. In groups (Sunday dinner) he basically drops out. | 5 | 5 | 5 | **125** | **Yes. This is the core.** Compose while they talk, hold the floor, speak at their turn end. |
| **2** | **People think he's less smart than he is.** Callers ask "Where's your mother?" Waiters talk to Denise. The doctor addresses Denise. A late, flat "yes" sounds unsure. | 5 | 5 | 4 | **100** | **Mostly.** On-time replies and a "wait, I'm talking" signal show competence. It doesn't fix public awareness (84–86% of Americans have never heard the word "aphasia"). |
| **3** | **He has the noun (or can point at it) but can't build the sentence.** "Water… want." Verbs and grammar words are what break in Broca's aphasia. | 5 | 4 | 4 | **80** | **Yes.** Pointing/camera supplies the noun, a core-word button supplies the verb, and the LLM supplies the grammar. Ray approves every word. |
| 4 | **Phone calls.** Almost impossible. | 3 | 4 | 5 | 60 | **No.** Out of scope. Say so. |
| 5 | **Pointing makes the partner play 20 questions.** He points at the shelf; Denise guesses "the remote? the book? the glasses?" Each wrong guess costs time and patience on both sides. | 4 | 3 | 4 | **48** | **Yes. This is where the camera earns its place:** it turns his point into an exact word the partner sees and hears. |
| 6 | **Reading and writing** (mail, texts, menus). | 4 | 3 | 4 | 48 | **No** (and the UI must not *require* reading; see §4). |
| 7 | **Tip-of-the-tongue on a specific word.** He knows the thing, knows what it does, can't get the name. Therapy ended at month 5. | 5 | 3 | 3 | **45** | **Partly.** "Cue me" plays only the first sound ("wuh…") so his own word can come back; one more click speaks it. Practice-friendly, not therapy. |
| 8 | **Unsafe in hospital and at the doctor.** People with communication disability have about **3× more preventable adverse events** in hospital. Staff talk to family or stick to "basic needs". | 2 | 5 | 4 | **40** | **Partly.** The "ask me" and floor-hold clips plus pointing work in an exam room. Not the demo scene; mention it as stakes. |
| 9 | **AAC devices don't fit his life.** Vocabulary doesn't match the moment, too many folders, takes attention off faces, stigmatizing at the table. | 4 | 3 | 3 | **36** | **Yes, by design.** Vocabulary comes from the room he's in; a ring instead of a big screen; eyes stay on faces; his own voice always wins. |

**What the ranking says:** Phone calls (#4) and reading (#6) score high but Cue doesn't touch them; we say so. Of what Cue *can* reach, Ray's worst problem is not vocabulary. It's **losing his turn**: the conversation can't wait for him, so other people speak for him, he looks less capable than he is, and the friends drift away. Problems #1 and #2 together are the story. #3 and #5 are **how** Cue lets him compose fast enough to get his turn back.

**Decision (you asked the research to decide):** lead with **timing told through Ray** ("the conversation moves on without him"), not the perception science, and not the camera. Use the camera as act two: "he already points at things; Cue turns the point into a word." The 700 ms / "a late yes sounds like a reluctant yes" science is the **proof slide**, not the opening.

> Why not camera-first? Camera → word for aphasia was published in 2017 (Obiorah et al.) and built at hackathons (diaLEX, XAAC). People with aphasia ranked location and partner context **above** object recognition (TalkAbout, 2012). And for Broca's aphasia specifically, nouns are the *easier* words. The camera is valuable for problem #5 (ending the guessing game), not as the headline.

---

## 3. One day with Ray: before and with Cue

Concrete scenes, in the order they'd happen. Use **Scene C** as the demo.

### Scene A: 7:45 am, breakfast with Denise
- **Before:** "Coffee or tea?" Ray: "Tea." Fine. Yes/no and either/or questions work.
- **With Cue:** **No change, and that's the point.** Ray just talks. Cue stays quiet unless he picks it up. (If Ray starts speaking, any queued Cue line is cancelled: **his voice beats Cue's voice.**)

### Scene B: 11:30 am, follow-up with his neurologist
- **Before:** The doctor asks Denise, "How's his balance been?" Ray knows he fell last Tuesday and Denise doesn't. He tries: "Uh… Tues… no…" The doctor nods at Denise and moves on.
- **With Cue:** Ray **double-clicks** the ring: a clip plays immediately: *"Ask me. I understand."* The partner screen on the desk shows **"Ray is composing…"**, so the doctor waits instead of turning to Denise. Ray taps **fall** (a core-word tile) and **Tuesday**, hears two options in his earbud, picks *"I fell on Tuesday."*, and it speaks. Denise hears it for the first time too.
- **Why it matters:** a fall is a safety fact that would otherwise be lost (Problem #8), and the doctor learns to address Ray (#2).

### Scene C: 5:30 pm Sunday, the kitchen table. **This is the demo.**
Maya (9) is showing her science-fair volcano. The family is talking over each other.
- **Before:** Maya: "…and it didn't really foam up, it just kind of fizzed." Ray knows exactly why: not enough baking soda. 30 years of teaching chemistry. He starts: "Bak… uh…" His son jumps in: "Dad means it's fine, sweetie." Topic moves to dinner. Ray goes quiet. Later he tells Denise, with effort, "I… teacher." She knows what he means.
- **With Cue:** While Maya is still talking, Ray **points the ring at the baking soda box and clicks** → tile: *baking soda*. He taps **more** on the laptop with his left hand. In his earbud: *"Add more baking soda."* He **holds the ring**: the line is queued and the partner screen shows **"Ray has something."** Maya pauses mid-sentence, and **Cue waits**. Maya finishes, and **within 700 ms** Cue says, in Ray's chosen voice: *"Add more baking soda."* Maya turns: "Grandpa, really? How much?" Ray clicks *"Show me"*... and they're doing chemistry together.
- **What the judge should feel:** "Oh, he's still *in there*." That moment is the product.

### Scene D: 8:30 pm, TV with Denise
- **Before:** Something funny happens on TV. By the time Ray could say anything, the moment's gone; he laughs, but Denise is looking at her phone.
- **With Cue:** One click: an instant "Ha! Did you see that?" in under 150 ms. Small, but it's the kind of reply that makes people feel connected (faster replies → stronger felt connection).

### What Ray still can't do with Cue (say it before a judge does)
Phone calls. Reading his mail. Talking about things that aren't in the room *and* aren't on his core board (Lions game strategy) beyond short phrases. Cue doesn't treat aphasia; it gets him his turn back.

---

## 4. Design requirements that come straight from Ray

Each requirement exists because of a documented fact about this ICP. If a judge asks "why X?", the answer is in the right column.

| Requirement | Because |
|---|---|
| **Ring on the LEFT index finger; everything one-handed.** Laptop on a stand, big targets. | Most people with post-stroke aphasia have right-side weakness (about 61% in one cohort). |
| **Never require reading.** Each option = photo crop + icon + short text, and a **private earbud preview** before anything goes public. | About 68% of people with chronic aphasia have reading trouble. |
| **Max 3 options, literal one first and shortest** ("Baking soda. More." → "Add more baking soda."). | Comprehension is "relatively" preserved, not perfect; choice overload costs time. Literal-first protects authorship. |
| **Core words = verbs and function words** (want, more, no, go, help, fall, show, wait, ask me). Camera = nouns. | In Broca's aphasia, verbs and grammar break more than nouns. Give him the hard part as buttons. |
| **"Ray has something" / "composing…" on a partner-facing screen.** | Partners speak for, finish for and talk over people with aphasia; speaking-for predicts less participation. A visible signal tells them to wait. This is Supported Conversation (partner training) built into a screen. |
| **Speak at the partner's turn end, not on silence.** End-of-turn model + manual override. | Mid-sentence pauses are common; an interruption is worse than lateness. |
| **Cancel the queue if Ray starts speaking himself.** | People with aphasia use their own speech ~70% of the time even with a device. Cue supports his voice; it doesn't replace it. |
| **Floor-hold and "ask me" clips, instant (<150 ms), no LLM.** | Problem #2 and Scene B. The fastest, most reliable moment in the demo. |
| **Small, quiet, worn on the body; no glasses, no big screen in the face.** | People with aphasia described head-worn displays as "publicly awkward" and tablets as stigmatizing; stigma is a top reason for abandoning AAC. |
| **Adults only.** | Lingraphica's AI tool is 18+ "due to AI regulations"; avoids the minors question. |

---

## 5. How to present it

### The first 15 seconds (memorize)
> "Ray taught chemistry for 30 years. Since his stroke he has aphasia: he understands everything and knows exactly what he wants to say, but the words come out one at a time. So at Sunday dinner, by the time his answer is ready, the conversation has moved on, and his son is answering for him. **Ray isn't slow. He's late, and late gets you talked over.** Cue gets him his turn back."

### Severity in three numbers (the poster's left column)
1. **2M+ Americans** have aphasia, more than Parkinson's, and **86%** of people have never heard the word.
2. People with aphasia report **worse quality of life than people with cancer or Alzheimer's**, and up to **62%** show depression a year after stroke. Friends are the part of their network that disappears.
3. A conversational turn gap is **~200 ms**. Ray needs **10–45 s**. Past **700 ms**, listeners start hearing a "yes" as reluctant.

### The mechanism, in Ray's terms (not ours)
| Ray's problem | What Cue does | What the judge sees |
|---|---|---|
| "The conversation moves on" | He composes **while they're still talking**, and Cue speaks **the moment they finish** | Teammate talks, pauses mid-sentence (Cue holds), finishes, and Cue speaks inside 700 ms on a live meter |
| "People talk over me / for me" | Partner screen: **"Ray has something."** One click: *"Wait, I want to say something."* | The judge-as-partner stops and waits |
| "I can point at it but can't say it" | Point + click → the object becomes a word; tap **more**/**want** → a sentence | Point at the bottle; a tile appears; hear options in the earbud |
| "I have the word, not the sentence" | Nouns from the camera, verbs from buttons, grammar from the LLM; he approves every word | Literal option first: "Water. Want." → "Can I have some water?" |
| "My laugh comes too late" | One click = instant laugh / "mm-hmm" | Judge clicks during a joke; laugh lands immediately |

### Lines for the hard questions (Ray-specific)
- **"Can he even use this?"** "Ray's profile, non-fluent aphasia with good comprehension and one good hand, is the profile that uses AAC independently. We designed for his left hand and for limited reading, and we cut people Cue won't work for: global and fluent aphasia."
- **"Isn't the AI putting words in his mouth?"** "Ray picks every word; the literal option is always first. The thing he hands to Cue is *when*, not *what*."
- **"Why would he use this when he abandoned his iPad app?"** "He abandoned it for the reasons people usually do: the vocabulary didn't match his day, it was slow, and it pulled his eyes off faces. Cue's vocabulary is whatever's on the table, it's on his finger, and his own voice always comes first."
- **"Did you test with people with aphasia?"** "Not yet. Ray is a composite from the research. Our first call is the University of Michigan Aphasia Program here in Ann Arbor, the oldest in the country."

### Words to use / avoid
- ✅ "gets his turn back", "on time", "he chooses every word", "composite", "people with aphasia" (person-first), "communication tool"
- ❌ "gives a voice to the voiceless", "nonverbal people" (Ray has words, just not on time), "faster AAC", "fixes aphasia", "patients", "suffers from"

---

## 6. Open questions for you
1. **Ray or a different name/background?** If a teammate has a family member with aphasia and is willing to share (with consent), a real story beats a composite. Never use one without permission.
2. **Demo props:** the volcano scene needs a baking soda box (not a COCO class, so it needs the VLM fallback) **or** swap to COCO objects (cup, bottle, book). Recommendation: keep **bottle/cup** for the live detection and tell the volcano story verbally.
3. **Scene B ("Ask me. I understand.")** is the strongest dignity moment and needs zero AI. Do you want it as a pre-rendered clip on the double-click cycle? Recommendation: yes.
