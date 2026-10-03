---
doc: cue-icp-red-team
status: v1 (round 3, 2026-10-03 ~01:50 EDT)
method: "Attack 02-applications-ranked.md and 03-claims.md as (a) a skeptical speech-language pathologist judge and (b) a skeptical engineer judge. Each attack gets a verdict and a fix that is already applied in the other docs."
verdict_key: "HOLDS = our answer survives · PATCHED = answer was weak, now fixed · OPEN RISK = real, can't be fixed tonight, say it honestly"
---

# 04: Red team

## The one that matters most

### R1. "Can Ray even compose while he's listening?" (SLP) → OPEN RISK, design patched
**Attack:** The core mechanism (#1, speak at turn end) assumes Ray builds his reply *while the partner is still talking*. Fluent speakers do that automatically. People with aphasia have reduced attention and working memory: in dual-task studies, word production errors rise more for people with aphasia than for controls, and even healthy listeners attend less to incoming speech while planning a reply. Ray may miss what Maya says while he's pointing and tapping.

**Why it doesn't sink the idea:**
1. **The floor-hold (#2) is the fallback built for exactly this.** If he can't compose while listening, one click shows "Ray has something" and plays "Wait, I want to say something", and he composes *after* her turn without being talked over. The two features cover each other: compose-ahead when he can, hold-the-floor when he can't.
2. **Composing is lighter than speaking.** Pointing and one tap is not the same load as retrieving and articulating words, which is where the dual-task cost shows up. That's a hypothesis, not a finding; say so.
3. **The relevance gate catches misses.** If the topic changed while he composed, Cue buzzes and holds the stale line.

**What we say:** *"When Ray can compose while you talk, Cue lands his reply on time. When he can't, one click holds the floor so he can compose without being talked over. Which one he uses more is the first thing we'd test with the U-M Aphasia Program."*
**Design change applied:** the floor-hold is promoted from "inside #1" to an equal half of the core (02 §1 note), and the demo shows both.

## SLP-side attacks

### R2. "Listening to three AI options in an earbud is a comprehension and memory test." → PATCHED
Agrammatic aphasia often comes with trouble understanding complex sentences, and holding three spoken options in memory is hard. **Fix:** play **one option at a time**, literal first, short, at a slower speech rate; a click hears the next one. Never more than three. (Updated in 00-ICP §4 requirements via 02 §2.9.)

### R3. "'People with aphasia know exactly what they want to say' isn't true for everyone." → HOLDS (already hedged)
Already in the drop list (X10). Say "people with non-fluent aphasia, like Ray, usually know what they want to say."

### R4. "A late synthetic 'yes' from someone people *know* uses AAC may not sound reluctant. Listeners make allowances." → OPEN RISK
The timing science (Roberts 2006, Kendrick & Torreira 2015) was measured on typical speakers. Nobody has tested whether listeners discount lateness for AAC users. **But** the downstream harm doesn't depend on it: whether or not listeners "make allowances", the conversation still moves on, partners still speak for him, and friends still drift (SEV3, CONV9, CONV10). **What we say:** lead with "the conversation moves on without him" (true regardless) and keep the reluctant-yes curve as supporting science, worded as "for typical speakers." Logged as assumption ASM1 in 03-claims.

### R5. "Ray walks with a cane in his left hand. You put the ring on his left hand." → PATCHED (scope)
Cue is a **seated** conversation tool: the table, the exam room, the couch. Walking-and-talking is out of scope. Say it.

### R6. "Doesn't Cue train partners to wait less, which undoes supported conversation?" → HOLDS
The opposite: the partner screen tells them when to wait ("Ray has something") and Cue removes the long silent gaps that make partners jump in. It's a supported-conversation prompt that goes everywhere (ALT8).

### R7. "Is first-sound cueing ('Cue me') appropriate for Broca's aphasia with apraxia?" → HOLDS, low stakes
Phonemic cueing is a standard step in the cueing hierarchy (PT5); with apraxia, hearing the target can still help. It's ranked #7 and kept out of the pitch, so the risk is small. Say "practice-friendly", never "therapy".

## Engineer-side attacks

### R8. "Your ring-vs-tablet estimate flatters Cue." → PATCHED
Round 1 said Cue was "somewhat faster" for a word already on the board (~7 s vs ~12 s). A well-designed board with *more* on the home page and *baking soda* one page deep is about 3 taps, roughly the same as Cue, and Cue's camera can miss and need a retry. **Fixed wording (02 §2.2):** "About the same for a word already on his board; much faster for a word that isn't; and the timing and eyes-up benefits are where the ring wins."

### R9. "Chrome's speech recognition sends audio to Google. Your privacy answer says audio is never saved." → PATCHED
True: Chrome's default Web Speech recognition streams microphone audio to a Google service; on-device recognition (`processLocally`) is newer and not available everywhere. **Fix (02 §2.10):** turn-end detection (VAD + Smart Turn) runs locally; partner transcription either uses on-device recognition where the browser supports it, or is disclosed as a cloud speech service. Never say "audio never leaves the laptop" unless that's what was built.

### R10. "End-of-turn models are trained on two-person speech. Sunday dinner is five people talking over each other." → OPEN RISK, scoped
Correct. Turn-end detection in multi-party, overlapping talk is much harder. **What we say:** the live demo is one partner (as in the doctor's office and most 1:1 time with Denise); in groups, the floor-hold click is the reliable tool and turn-end launch is best-effort. Scene C is told as Maya speaking while others listen, which is a single-speaker turn.

### R11. "700 ms is a target, not a result." → HOLDS
Already in the never-claim list. The number on the poster is what we measure at hour 18.

### R12. "Texting: plenty of people with aphasia text." → PATCHED
True: in one study of 20 people with chronic aphasia, participants sent about 15 texts a week on average, with huge variation, and texting *amount* didn't track aphasia severity, while texting *success* (getting the message across) did. **Fixed wording (02 §2.1):** don't say "he can't text." Say: "People with milder aphasia text; how well it works tracks severity and reading/writing. And either way, a text isn't a turn in the room."

## Scorecard after round 3
| Attack | Verdict |
|---|---|
| R1 compose while listening | OPEN RISK, mitigated by floor-hold |
| R2 three spoken options | PATCHED |
| R3 "know what they want to say" | HOLDS |
| R4 listeners make allowances | OPEN RISK, reframed |
| R5 cane in left hand | PATCHED (seated scope) |
| R6 undoes partner training | HOLDS |
| R7 cue-me with apraxia | HOLDS |
| R8 speed estimate | PATCHED |
| R9 Web Speech privacy | PATCHED |
| R10 group turn-taking | OPEN RISK, scoped |
| R11 700 ms | HOLDS |
| R12 texting | PATCHED |

**Three open risks to say out loud if pushed:** R1 (dual-task), R4 (listener allowances), R10 (groups). All three are the first things a real study with people with aphasia would test.

## Sources (new this round)
- Dual-task and speech planning: [JSLHR 2025 dual-task discourse in aphasia](https://pubs.asha.org/doi/10.1044/2025_JSLHR-24-00550) · [JSLHR 2019](https://pubs.asha.org/doi/10.1044/2019_JSLHR-L-18-0399) · [Dual-task word production in aphasia (UNIGE)](https://access.archive-ouverte.unige.ch/access/metadata/d72d21ba-54d4-4016-9087-5b4cf221e868/download) · [Listening while planning (AMLaP abstract)](https://www.uni-saarland.de/fileadmin/upload/fakultaet-p/amlap/Abstracts/submission_271.pdf)
- Texting: [Kinsey et al. 2021 (ASHA figshare)](https://asha.figshare.com/articles/journal_contribution/Texting_behaviors_of_individuals_with_aphasia_Kinsey_et_al_2021_/14669664) · [AJSLP 2022 texting success](https://pubs.asha.org/doi/10.1044/2022_AJSLP-21-00291)
- Web Speech privacy: [W3C TAG on-device recognition review](https://tag-github-bot.w3.org/gh/w3ctag/design-reviews/1189) · [Client-side ASR overview (Fora Soft 2026)](https://www.forasoft.com/learn/ai-for-video-engineering/articles-ai/client-side-asr-faster-whisper-wasm-browser)
