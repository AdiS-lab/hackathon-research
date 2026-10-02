---
doc: cue-deeper-meaning
status: v1
purpose: "The 'why this matters' layer: framings that turn a clever device into an idea judges remember. Each is tied to evidence in 01-evidence-ranked.md."
---

# 03: Deeper meaning and more perspective

## 1. Late isn't slow. Late changes what you said.
Every AAC pitch says "AAC is slow (10 wpm vs 150)". That's a **speed** problem, and speed problems sound like "make the keyboard better".

The research supports a sharper claim. **Conversation encodes meaning in timing.** After 600 ms of silence, listeners hear a "sure" as less willing (Roberts 2006). Past about 700 ms, the answers that follow are mostly refusals and disagreements (Kendrick & Torreira 2015), and the listener's brain has already shifted to expecting a "no" (Bögels 2015).

So an AAC user who answers "Yes!" 12 seconds later isn't just slow. **Every listener's brain hears a hesitant yes.** They're misunderstood *even when every word is right*. No vocabulary, LLM or voice clone fixes that. Only timing does.

> **Poster line:** *"A late yes sounds like a reluctant yes. AAC users are misheard in time, not in words."*

## 2. Cue copies how your brain takes turns
Fluent speakers can't produce a sentence in 200 ms; it takes over 1.5 s. They hit 200 ms gaps anyway by doing two things (Levinson & Torreira 2015; Barthel et al. 2017):
1. **Plan early.** Start building the reply as soon as you understand where the other person is going.
2. **Launch on a cue.** Watch for turn-final signals (intonation, syntax) and fire the moment the turn ends.

AAC breaks both. Composition can't start until you know what to say, and output fires whenever you finish, not when the floor opens.

**Cue rebuilds exactly that two-stage architecture outside the body:**

| What a fluent brain does | What Cue does |
|---|---|
| Plans the reply during the partner's turn | You compose (point + core word + pick) **while they're still talking**. The partner display says "composing…" |
| Holds the finished reply in a buffer | **Hold the ring** → the approved sentence is queued, with audio already rendered |
| Detects the turn-end "go-signal" | VAD + end-of-turn model reads the partner's prosody |
| Launches within about 200 ms | Plays the pre-rendered audio. **Target: inside 700 ms** |

This is the answer to "you're still slow, you're just hiding it". *Everyone* hides it. That's how conversation works. Cue gives AAC users the same overlap fluent speakers get for free.

> **One-liner for technical judges:** *"Speakers plan during your turn and fire on a cue. AAC users can't. Cue is a prosthetic for turn-taking, not for language."*

## 3. The name already means three things. Use all three.
1. **Turn-taking:** the "go-signal" that tells you it's your turn (above).
2. **Theater:** an actor's line comes **on cue**, which is literally the queued-sentence mechanic.
3. **Aphasia therapy:** a **cue** is the hint an SLP gives to unlock a word you can't retrieve, like the first sound ("it starts with *wuh*…"). Phonemic cues are often enough.

That third meaning points to a small, honest feature: **"cue me" mode** for the camera. When you point at the water bottle, Cue can first play only the **first sound** in your earbud ("wuh…"). If the word comes back, *you* say it. If it doesn't, one more click speaks "water". It turns object naming from "the AI talks for you" into **"the AI helps your own word come back"**, which is the opposite of the authorship worry. Don't make therapy claims; say "practice-friendly". Optional, and about 1 hour on top of the naming feature.

> *"In aphasia therapy, a cue is the hint that brings your word back. In conversation, a cue is the signal that it's your turn. Cue does both."*

## 4. It's about competence, not convenience
The Aphasia Institute's core insight: **aphasia masks competence**. "People with aphasia know much more than they can say" (Kagan). The partner's job is to *reveal* it.

Lateness is a second mask on top of the first. A sharp, funny person who answers 15 seconds late looks confused. The joke dies, partners switch to yes/no questions (A4), and the person becomes a "passive responder" in their own life. Fast replies are literally how people feel they "clicked" (Templeton 2022), so the friends drift away, and aphasia ends up with worse quality-of-life scores than cancer (A2).

**Cue's real product is the moment the partner thinks "oh, they're still *in there*."** That's the emotional climax of the demo: the joke lands, the judge laughs, the judge *gets it*.

## 5. A cleaner line on AI ethics than the competition
Lucid Voice, Lingraphica Conversations and most LLM AAC hand the AI the **words** and leave the **timing** to the user. Cue does the reverse:

> **You own *what*. Cue only handles *when*.**

Every word is user-approved, with the literal option first. The only thing you delegate is the moment of launch, and only by explicitly holding the ring (and Cue will refuse to fire a stale line). "Why So Serious?" shows users *want* to delegate timing more than wording. It's a better ethical story than "the AI writes, you approve", and it's true to how the system works.

## 6. Voice AI learned when to talk. Give it to the people who need it most.
The voice-agent industry spent 2025–26 solving one problem: **when should the bot talk?** That produced VAD, end-of-turn models (Smart Turn, LiveKit's turn detector) and speculative turn detection. All of it serves *bots talking to people*.

Cue redirects that infrastructure to **people who can't speak on time**. That's the "Actually Intelligent" story: you're not calling an LLM; you're repurposing frontier turn-taking models for a population that has been waiting (literally) for decades. Higginbotham was writing about AAC users "slipping through the timestream" in 1999.

## 7. The theme, without forcing it
MHacks 2026 is "Digital Garden: build something that grows". Three honest bridges, lightest first:
1. **The conversation garden** on the partner display: an on-time turn blooms, a missed one wilts. It's the timing metric drawn as the theme.
2. **"A voice that grows back into the conversation."** Aphasia recovery is long, slow growth; UMAP's whole model is intensive practice. Cue-me mode (§3) is a small daily-practice loop.
3. **Growth of the social network:** S4 and A2 say timing → connection → friends retained. Don't overclaim it, but it's the real "why".

## 8. Home-field advantage: Ann Arbor
- The **University of Michigan Aphasia Program (UMAP)**, founded **1937**, is the **oldest aphasia program in the US**. It created the model for intensive comprehensive aphasia programs, of which there are about 12 worldwide. It's at UCLL, 1111 E. Catherine St, Ann Arbor.
- In June 2026, **Ann Arbor's mayor proclaimed National Aphasia Awareness Month** with UMAP staff and a client at City Hall.
- **Use it two ways:**
  1. **Pitch:** "The oldest aphasia program in the country is in this city. They're our first call for co-design." Some judges will be U-M people.
  2. **Action today (Friday, Oct 2):** email **ucll@umich.edu** (phone (734) 764-8440). Introduce yourselves as U-M/MHacks students building a timing-focused AAC prototype, and ask for **10 minutes with an SLP** this weekend or a one-line reaction. One real quote ("Timing is the thing our clients struggle with most…") is worth more than any citation. Even a reply after the event helps the Devpost write-up and the "next steps" slide. Don't share any client information; ask only for professional opinion.

## 9. What *not* to say (it weakens the deeper story)
- ❌ "Cue lets nonverbal people talk." (Overclaims. Say "people with aphasia and apraxia who can point".)
- ❌ "AI understands what you mean." (That's the authorship trap. Say "AI suggests, you choose".)
- ❌ "Faster AAC." (That's the old framing. Say "on-time AAC".)
- ❌ "Replaces AAC devices / SLPs." (Say "a $30 add-on to the tablet they already have".)
- ❌ Any medical claim about recovery. (Say "communication tool, practice-friendly".)
