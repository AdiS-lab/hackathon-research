---
doc: cue-applications-ranked
status: v2 (round 2 added objections 2.13–2.20, 2026-10-03 ~01:20 EDT)
persona: "Ray, 58, chronic non-fluent aphasia after a left-hemisphere stroke (see 00-ICP.md)"
evidence_ids: "Bracketed IDs like [C1] point to rows in 03-claims.md"
---

# 02: Cue's applications, ranked, in Ray's voice

## How to use this doc
Read each one-liner out loud **as Ray**. If you can't say it with a straight face, the feature doesn't belong in the pitch.

## 1. The ranking

**Score = Pain × Fit × Demo × Novelty** (each 1–5, max 625)
- **Pain:** how much it hurts Ray (from the severity table in `00-ICP.md`)
- **Fit:** how much better Cue is than what he could already do (texting, his iPad, his wife, his phone)
- **Demo:** whether a judge can feel it in 90 seconds
- **Novelty:** whether anyone has shipped it (from the prior-art tables)

| Rank | Application (feature × moment) | One-liner as Ray | Pain | Fit | Demo | Nov. | Score | Pitch? |
|---|---|---|---|---|---|---|---|---|
| **1** | **Speak at turn end.** Compose while they talk; Cue says it the moment they finish. Moment: Sunday dinner. | *"I had the answer. By the time I could say it, my son had already said it for me."* | 5 | 5 | 5 | 5 | **625** | **Lead** |
| **2** | **Hold the floor.** Partner screen shows "Ray has something"; one click plays *"Wait, I want to say something."* Moment: any group talk. | *"Everyone keeps talking because nobody can tell I'm about to."* | 5 | 4 | 5 | 4 | **400** | Yes, inside #1 |
| **3** | **"Ask me."** Instant clip: *"Ask me. I understand."* Moment: doctor, pharmacy, waiter. | *"The doctor asked my wife how my balance was. I'm the one who fell."* | 5 | 4 | 5 | 3 | **300** | Yes, 10 seconds |
| **4** | **Instant reactions.** One click = laugh, "mm-hmm", "no way" in under 150 ms. Moment: TV, jokes, stories. | *"My laugh shows up after everyone's done laughing."* | 4 | 4 | 5 | 3 | **240** | Yes, the opener |
| **5** | **Point instead of 20 questions.** Ring camera turns his point into an exact word the partner sees and hears. Moment: kitchen, shelf, store. | *"I point at it and she guesses wrong four times."* | 3 | 4 | 4 | 2 | **96** | Yes, as act two |
| **6** | **Nouns + one verb → a sentence.** Tile + core word ("more") → LLM gives 2–3 options, literal first; he hears them in his earbud and picks. | *"I have 'water'. I don't have 'Can I have some'."* | 4 | 3 | 4 | 2 | **96** | Yes, as how he composes |
| **7** | **"Cue me."** Point at an object, hear only the first sound ("wuh…"), say it himself; one more click speaks it. | *"I know the word. Just give me the first sound."* | 3 | 3 | 3 | 3 | **81** | Only if asked / theme |
| **8** | **Name the unfamiliar thing.** Point at a pill bottle or a sign; VLM says what it is. | *"I can't read the label, and I can't ask what it says."* | 2 | 3 | 3 | 2 | **36** | No (prior art; reading claims are risky) |
| **9** | **Private send.** Compose by pointing, send as a text to Denise instead of speaking aloud. | *"I don't want the whole restaurant to hear I need the bathroom."* | 2 | 2 | 2 | 2 | **16** | No (see §2.1) |
| **10** | **Point to control the lamp** (FREE-WiLi IR). | *"I can't get up and reach the switch."* | 1 | 2 | 4 | 2 | **16** | Sponsor bonus only, not ICP |

**The order of the pitch follows the ranking:** #4 opens (judge laughs) → #1 is the invention (with #2 on the partner screen) → #5/#6 show how he composed it → #3 is the dignity line. Everything below #6 is cut from the 90 seconds.

**Round 3 change (red team R1):** #1 assumes Ray can compose while listening, which people with aphasia may find hard (bigger dual-task costs). So #2 (hold the floor) is an equal half of the core, not a sub-feature: *compose ahead when he can, hold the floor when he can't.* The demo shows both. See `04-red-team.md`.

### The single line to embody
> **"I'm not slow. I'm late. And late gets you talked over."**

Backup lines by moment:
- At the table: *"My answer is ready the second you stop talking. Cue makes sure that's when it arrives."*
- At the doctor: *"Ask me. I understand."*
- On authorship: *"I pick every word. Cue only picks the moment."*

---

## 2. The obvious questions, answered concretely

### 2.1 "Why can't he just text?"
There are two versions of this question. Answer the one being asked.

**(a) "Why not text instead of using Cue in the room?"**
1. **Writing and reading break along with speech.** Agraphia showed up in about 56% of left-hemisphere acute stroke patients in one series, and about 68% of people with chronic aphasia have reading trouble. People with milder aphasia do text (about 15 texts a week on average in one study, with huge variation), but how *well* it works tracks aphasia severity and reading/writing deficits, not confidence or practice. Ray's moderate non-fluent profile is the group it works worst for. [POP7, POP5, ALT1, ALT1b]
2. **One hand.** Most of these users have a weak right hand. Typing a sentence one-handed with the non-dominant hand is slow even without aphasia. [POP6]
3. **Texting takes him out of the conversation.** Head down, eyes on a phone, at a table where everyone is talking. It's a message to someone who isn't there, not a turn in a conversation. The problem we're solving is the turn.
4. **It's still late.** A typed message at a few words per minute lands even later than speech.

**Answer in one breath:** *"Some people with aphasia text, and it works about as well as their writing does, which for Ray isn't well. More importantly, a text is head-down and late. Ray needs his turn in the room, not a message."*

**(b) "Why is private send a feature at all? Just text."**
**Honest answer:** for Ray, private send is a weak feature, and we've cut it from the pitch. Its only real advantage over texting is that he composes by pointing and tapping a core word, so **no spelling**, and it goes to one person (Denise) without the room hearing. That is real (bathroom, pain, "let's leave"), but it's rare, and the iMessage path is a sponsor integration, not his core problem. If a judge asks: *"It's the same compose flow, sent to one person instead of the room, because he can't spell a text. It's a side door, not the product."*

### 2.2 "Is a ring plus a tablet actually faster than just tapping the tablet?"
**No, not per tap, and we don't claim it is.** The ring isn't faster at tapping; it's faster at being on time. Three concrete parts to the answer:

**1. For a word already on his board, a direct tap is about as fast as the ring.** A rough keystroke-level estimate (standard HCI timings for a typical adult, so a lower bound, not Ray's real times; illustrative only):

| Task: say "Add more baking soda" | Steps | Estimate |
|---|---|---|
| Grid app, word on the board | Open Kitchen folder → Baking folder → *baking soda* → *more* → *speak* (≈5 × [think 1.35 s + point 1.1 s]) | ~12 s |
| Grid app, word NOT on the board | Spell b-a-k-i-n-g s-o-d-a (11 letters) with agraphia | 30 s+, often impossible |
| Cue | Point + click ring (≈2.7 s) → tap *more* (≈2.5 s) → hear preview (≈1.5 s) → hold (≈0.5 s) | ~7 s |

So, honestly: **about the same for a word already on his board** (a good board puts *more* on the home page and *baking soda* one page in, ~3 taps, and Cue's camera can miss and need a retry), and **much faster for a word that isn't on the board**. Page-based layouts do measurably slow selection (133 vs 193 symbols in 20 minutes, paged vs single page), and people with aphasia navigate scene-based displays faster and more accurately than grids. *(Round 3: the earlier "somewhat faster" claim was softened after red-team R8.)*

**2. The real win is when the 7 seconds happen.** With a grid, composing starts when it's his turn, so the conversation waits (or moves on). With Cue, he composes **during the partner's turn** and the reply lands **within 700 ms** of them finishing. The metric changes from words per minute to **reply gap**: about 10–45 s with a board vs under 1 s with Cue. That's what we measure tonight. [CONV7, CONV2]

**3. The ring does what a screen can't:**
- **Eyes up.** Hold, click and double-click work without looking down, so he keeps watching faces. AAC screens pull visual attention off the partner. [CONV15]
- **One hand.** The ring is on his good (left) hand; the laptop sits on a stand.
- **Instant reactions.** A laugh has to be under a second to count; finding a "haha" button on a screen takes longer than the moment lasts.

**Everything still works by tapping.** The ring is the fast path, not a requirement. If someone can't wear it, Cue still works on the screen.

**Answer in one breath:** *"Per tap, a ring isn't faster than a screen. What it does is let him compose while you're still talking, without looking down, with his one good hand, and land the reply the moment you finish. We're not measuring words per minute. We're measuring the gap: about 30 seconds with a board, under a second with Cue."*

### 2.3 "Why not just speak into speech recognition / Siri?"
Speech recognition fails on aphasic speech: off-the-shelf models had about **61–70% word error rate** on AphasiaBank, and even fine-tuned models were around 32–36%. And Ray's problem is getting the words out at all, not transcribing them. [ALT2]

### 2.4 "Why not just use his phone camera (Google Lens)?"
Holding a phone up and tapping it takes **two hands**; he has one. Lens tells you about an object; it doesn't say a sentence for you, on time, in a conversation.

### 2.5 "Why not just train his family to wait?"
Partner training works for chronic aphasia (Simmons-Mackie 2016 systematic review), and Cue doesn't replace it. But only the people who got trained benefit. His doctor, the waiter, his grandson's coach and his old colleagues never will be. **The partner screen ("Ray has something") is a partner-training prompt that comes with him** into every room. [ALT8]

### 2.6 "Lingraphica Conversations and Lucid Voice already do AI replies for aphasia."
They help with **what** to say. Both still speak whenever he presses the button, which is usually too late. Cue is the first that decides **when**: at the partner's turn end. [NOV2, NOV3]

### 2.7 "Won't it interrupt people?"
It waits for an end-of-turn model, not just silence, so mid-sentence pauses don't trigger it. If the partner changes topic, the ring buzzes and Cue holds the stale line. He can always override with "now" or cancel. If he starts speaking himself, the queue cancels.

### 2.8 "Can someone 14 months after a stroke learn this?"
Three ring actions (click, double, hold). No folders. The vocabulary is whatever's in front of him. Garrett & Lasker's "independent communicator" profile, which Ray fits, uses AAC strategies on his own. We say plainly that partner-dependent (severe/global) aphasia is not our user. [POP8]

### 2.9 "Is the AI putting words in his mouth?"
He hears the options privately first, **one at a time** (literal first, short, slower speech rate; a click plays the next), so he isn't holding three sentences in memory. Nothing is spoken until he holds or taps. What he delegates is **when**, not **what**. Users themselves trade control for timing when timing matters (CHI '25). [CONV16]

### 2.10 "What about the people being recorded?"
Turn-end detection (voice activity + the end-of-turn model) runs **locally on the laptop**. Partner transcription, used only for context, runs on-device where the browser supports it; otherwise it uses a cloud speech service (Chrome's default sends audio to Google), and we say so. Transcripts are kept in memory for a few turns and never saved by Cue. The camera only captures when he clicks, and the partner screen shows when Cue is listening. *(Round 3 fix, red-team R9: don't claim audio never leaves the laptop unless that's what was built.)*

### 2.11 "Who pays?"
About $30 in parts plus a laptop or tablet he already has, against $250 for an app plus an iPad or $6k–14k for a dedicated device. Not a medical device; a communication tool.

### 2.12 "Why a ring and not a watch or glasses?"
A ring points and clicks without looking at your wrist. People with aphasia called head-worn displays "publicly awkward" and tablets stigmatizing. Most users have one good hand, and a ring leaves it free to tap. [ALT9, POP6]

### 2.13 "Isn't the invention just software? Why build hardware?"
Yes, the invention is software: launching an AAC reply at the partner's turn end. The ring exists because the moments that matter (hold, react, "wait") last under a second and happen while his eyes are on a face. A screen button needs eyes and a reach; a ring click needs neither. If the ring fails, the software still works from the screen. Saying this plainly is stronger than pretending the ring is the magic.

### 2.14 "Won't he just recover?"
Many don't. About two-thirds of people aphasic after a stroke are still aphasic at 12 months, and 30–43% remain severely aphasic at 18 months. Ray is at 14 months; for him this is daily life, not a phase. [POP10]

### 2.15 "Can't he tell when it's his turn on his own?"
Knowing when someone is about to finish depends on following their words and grammar in real time, and aphasia disrupts exactly that: in an eye-tracking study, people with aphasia were less likely to anticipate turn transitions. And even when he knows, his own output takes seconds to start. Cue watches for the turn end so he doesn't have to. [CONV17]

### 2.16 "His iPad already has quick phrases for 'wait' and 'ask me'."
It does, and that proves the need. The difference is reach: on a tablet the phrase is behind an unlock, an app and a page, with eyes off the person. On the ring it's one click, under 150 ms, eyes up. A quick phrase that takes 5 seconds to find is a late quick phrase.

### 2.17 "Won't LLM and text-to-speech latency make him late anyway?"
No, because none of it happens at the turn end. The LLM runs while he composes during the partner's turn; the audio is rendered when he approves. At the turn end Cue only plays a local file. The only latency that matters is turn-end detection, budgeted under 700 ms.

### 2.18 "What if the partner never stops talking, or talks over Cue?"
Three answers. One click plays "Wait, I want to say something", which works with a talker who doesn't pause. A manual "now" sends it whenever he chooses. And if the partner starts again mid-reply, Cue stops rather than talking over them, and the line stays queued.

### 2.19 "Who pays? Will insurance cover it?"
Probably not as a speech-generating device. Medicare covers dedicated devices, and Cue isn't one. It doesn't need to be: about $30 in parts plus a laptop or tablet the family already owns. Families buy it directly, or SLPs recommend it as an add-on to therapy. Don't claim insurance coverage.

### 2.20 "Ray isn't real."
Correct, and we say so: he's a composite where every detail comes from published research (see `01-evidence.md`). A real person's story, shared with consent, is the next step, starting with the University of Michigan Aphasia Program.

---

## 3. What we will NOT claim
- That Cue is faster per selection than a grid. (It's faster to be on time.)
- That it helps with phone calls, reading or writing.
- That it treats aphasia or helps recovery. ("Cue me" is practice-friendly, nothing more.)
- That it was tested with people with aphasia. (Not yet. U-M Aphasia Program is the first call.)
- Any number we haven't measured tonight. The reply-gap result is filled in at hour 18.
