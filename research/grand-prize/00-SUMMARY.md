---
doc: grand-prize-summary
status: v1
researched: 2026-10-01
event: "MHacks 2026, Oct 3–4, Ann Arbor ('Digital Garden: build something that grows')"
---

# Grand-prize research: summary

## TL;DR
1. **What wins overall in 2026:** a **physical device a judge can feel in 30 seconds**, serving a **specific person with a health or accessibility need**, with **AI hidden inside** and **one hard number** on the poster. Across 41 spring-2026 collegiate hackathons, overall winners were ~2× more likely than other prize winners to be hardware (37% vs 18%) and health-framed (22% vs 11%). ESP32 showed up ~8× more often. "Agent" pitches showed up *less* (0.6×). LLM and voice APIs were flat (table stakes).
2. **Recent grand prizes follow this exactly:** TreeHacks 2026 → **Shepherd** (motorized smart cane that steers a blind user); PennApps XXVI → **ALSistive** (ALS smartwatch); Berkeley AI 2026 → **Lucid Voice** (AAC) and **Theracat** (anxiety band); RevolutionUC → **Tremorfix**; StarkHacks → **OmniGlove**; Hack Canada → **wallhacks** (see through walls).
3. **Our AAC ring is the right archetype, but its composition layer is no longer novel.** Lucid Voice (Berkeley grand prize) already does fragments → 3 tone-aware sentences in your own voice. AllyAAC (CHI '26) already does wrist-IMU gesture AAC. **The open space is timing:** speaking at the partner's pause, instant backchannels, a buzz when it's your turn. **Lead the demo and the pitch with timing.**
4. **MHacks 2026 specifics:** expo judging at **reserved numbered tables in waves**. 2025 criteria were Innovation / Technical Complexity / Usability (incl. accessibility) / Theme. Tracks: Sustainability · Actually Intelligent · FinTech · **Beyond the Code (Hardware)** + bonus tracks. **No Health track this year**, so a health or accessibility build in Hardware stands out.
5. **Sponsors worth stacking:** **FREE-WiLi** (tier 2; an AAC device won their prize at GrizzHacks 2026; the new FREE-WiLi 2 has an IR blaster), **ElevenLabs** (sponsor + the most common MLH prize of 2026), **Freesolo** (fine-tuned small models), **Photon** (iMessage/WhatsApp agents), **Fetch.ai** (title sponsor; 2025 MHacks paid $1,250 / $750 / $500), and the **Judged by an LLM** bonus track.

**Recommendation: build "Cue," the AAC ring re-aimed at timing** (details and re-score in `03-idea-scorecard.md`, ~75 → ~84/100). **Backup: "Canopy,"** a farmworker heat-stress band (71/100).

## The 90-second table script (Cue)
1. **(0:00) Hook, before the judge sits:** "AAC users don't just talk slowly. They talk *late*. A typical tap-board reply arrives after the conversation has moved on." Point at the poster number (measured at the event).
2. **(0:10) The judge wears the ring.** A teammate tells a joke. The judge flicks → a laugh plays **instantly** (<150 ms, no LLM).
3. **(0:25)** The teammate asks a question. The judge flicks *want* + points at a water bottle + twists to pick a candidate + **holds click**. The ring says "queued," and the sentence fires **the moment the teammate pauses**. The ring buzzes "your turn."
4. **(0:50) Act on the room:** the judge points the ring at a lamp and clicks → it turns on (FREE-WiLi IR).
5. **(1:05) Proof:** the partner screen's **conversation garden**: on-time turns bloomed, late ones wilted. "Median reply gap: X s with Cue vs Y s on a tap board, n = 5 hackers we tested tonight."
6. **(1:20) Lineage:** "Lucid Voice and AllyAAC (CHI '26) fixed *what* AAC users say. We fixed *when*." BOM ≈ $40 vs $6k–14k for dedicated devices.

## Before Saturday 9 AM (Oct 1–2)
- [ ] **Open the Hacker Handbook** ([Notion](https://safe-banon-80d.notion.site/2026-Hacker-Handbook-3ca24ca0c81b80fb8adee2e26c8508af)) and paste the prize list into this repo. I couldn't reach it from here. It probably settles the grand-prize amount, sponsor prize rules and judging times.
- [ ] Confirm the ring hardware is arriving (`../aac-hci/SUMMARY.md` §5). If it isn't, use the phone-on-wrist fallback and switch the main track to *Actually Intelligent*.
- [ ] API keys: ElevenLabs (expressive TTS), one fast LLM, Freesolo account (optional), Fetch.ai Agentverse account (optional).
- [ ] Throwaway learning spikes only (MLH rules: no project code written in advance): Web Bluetooth ↔ XIAO; `vad-web` pause detection; ElevenLabs latency test; a FREE-WiLi IR "hello world" if you can borrow one.
- [ ] Print or prepare a **poster slot** for the measured number and the cost table.
- [ ] Pick roles (see `../aac-hci/06-build-plan.md`) plus one person who owns **demo reliability** (offline fallbacks, pre-cached audio, spare batteries).

## At the event
- At the opening ceremony, confirm: grand-prize eligibility across tracks, FREE-WiLi 2 loaners, Freesolo/Photon/ElevenLabs prize rules, judging-wave times, and what the LLM judge reads.
- **Reserve a judging table early** in the dashboard. Pick one with a wall outlet and a spot for the lamp.
- Hour ~18: run the 5-person timing test and print the number.
- Submit to Devpost **≥1 h early**: Hardware track + FREE-WiLi + ElevenLabs + Judged by an LLM (+ Freesolo/Fetch.ai if built).

## Open questions for you
1. **Has the ring hardware (XIAO nRF52840 Sense, etc.) been ordered, and will it arrive Friday?** That decides Hardware vs AI track.
2. Do you want me to write the README skeleton and latency-bench script layout now (structure only, no project code) so the LLM-judge track is easy at hour 20?
3. Do you want the Canopy backup fleshed out into a full build plan too, or stay committed to Cue?

## Files
- `01-mhacks-2026-intel.md`: event facts, theme, judging format, every sponsor and what they reward, MLH prizes
- `02-grand-prize-patterns.md`: MHacks grand-prize history, 2026 grand prizes, quantitative pattern analysis, Shepherd's anatomy
- `03-idea-scorecard.md`: Cue vs Canopy vs Buzz, new prior art, the changes that raise Cue's score, the prize stack
- `data/`: `analyze_winners.py` (reproducible), `feature_lift.csv`, `overall_winners_2026.csv`

## Method and limits
Most event and news sites (mhacks.org, Devpost, Notion, Wikipedia, umich.edu) were **blocked by this environment's network policy**, so primary sources were the organizers' public GitHub repos ([site](https://github.com/becccasun/mhacks-2026-site), [dashboard](https://github.com/mhacks/dashboard)), winner repos (Shepherd, Lucid Voice), [HackWinnerDB](https://github.com/notsointresting/hackwinnerdb) (~4,200 winner records), and search-engine snippets. **The MHacks 2024 and 2025 grand-prize winners could not be identified.** The judge list isn't public.
