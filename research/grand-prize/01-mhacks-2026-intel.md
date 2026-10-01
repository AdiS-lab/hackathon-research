---
doc: mhacks-2026-intel
status: v1 (researched 2026-10-01, event starts 2026-10-03)
confidence_key: "VERIFIED = read in official source code; SNIPPET = search-engine snippet only; INFERENCE = my reasoning"
---

# 01 — MHacks 2026: what we know about the event

## Access note
`mhacks.org`, `live.mhacks.org`, Devpost, Notion, Wikipedia and most news sites were **blocked** by this research environment's network policy. The best primary sources turned out to be the organizers' **public GitHub code**:
- [`becccasun/mhacks-2026-site`](https://github.com/becccasun/mhacks-2026-site): the marketing site (theme, FAQ, sponsors, deadlines)
- [`mhacks/dashboard`](https://github.com/mhacks/dashboard): the hacker portal, live site, check-in, wallet passes and judging-table reservations (commits up to 2026-09-30)

## Event facts
| Fact | Value | Confidence |
|---|---|---|
| Dates | Sat Oct 3, 9:00 AM → Sun Oct 4, 2026 (24 h of hacking) | VERIFIED (`lib/wallet/event.ts`) |
| Check-in | **CCCB** (Central Campus Classroom Building, 1225 Geddes Ave) from 9:00 AM. Late check-in: Pierpont corridor (North Campus), 11:00 AM–2:30 PM | VERIFIED (wallet pass copy, Sep 27 commit) |
| Venue | Changed from "CCCB" to the generic "University of Michigan" on Sep 27. The FAQ says North Campus, and late check-in is at Pierpont, so expect **North Campus hacking** | VERIFIED + INFERENCE |
| Size | "1,000+ student builders" from "across North America" | VERIFIED (site copy) |
| Teams | Solo or **up to 4**; team matching on day 1 | VERIFIED (FAQ) |
| Prize pool | "$40,000+" | SNIPPET (fetch.ai event page) |
| Grand prize | 2025: **$4,000 cash, 1 winner** ("MHacks Grand Award"). 2024: $3,000. 2026 amount not found | SNIPPET |
| MLH | MLH member event (MLH badge on the site) → expect standard MLH prizes | VERIFIED (badge component) |
| Handbook | [2026 Hacker Handbook (Notion)](https://safe-banon-80d.notion.site/2026-Hacker-Handbook-3ca24ca0c81b80fb8adee2e26c8508af). **Blocked here; read it yourself.** It almost certainly lists the final prizes and judging rules | VERIFIED link |
| Support | hackathon-org@umich.edu | VERIFIED |

## Theme: "Digital Garden"
- Tagline: **"Build something that grows."** Described as "24 hours of building at the intersection of nature and technology" (SNIPPET of site meta) and "creative engineering, design, building, and prototyping that blur the line between code and the real world" (VERIFIED, About section).
- The whole site is botanical: Michigan native-species labels (Michigan Lily, Dwarf Lake Iris, Black-Eyed Susan), flagged invasives (Lily of the Valley), a "bouquet" page in the dashboard, and ASCII flowers.
- The organizers are **agent-native**: they shipped an MCP server so you can *apply through Claude or Codex*. Expect them to appreciate well-engineered agent and tool integrations, and not to be impressed by "we called an LLM."

## Tracks (from your screenshots; see `../aac-hci/05-tracks.md`)
- **Main (pick exactly one):** Sustainability · Actually Intelligent (AI) · FinTech · Beyond the Code (Hardware)
- **Bonus (any number):** Useless AI · Dumbest Idea · Judged by an LLM
- Note: **there is no Health track in 2026.** In 2025 there was "Lifeline (Healthcare)." Health projects now have to enter AI or Hardware, which thins out health competition inside each track (INFERENCE).

## Judging format (how you'll actually be seen)
- **Science-fair expo with reserved tables.** The dashboard has a `judging-map` where teams **reserve a numbered table** (`components/reservation/judging-map.tsx`). The demo seed says "Table assignments and judging waves will be posted before hacking ends" and asks you to "keep at least one team member near the assigned table throughout the judging window." (VERIFIED code; the seed is demo content but matches the design.)
- MHacks has used distributed expo judging for years: each judge covers a block of tables, brings back a ranked shortlist, and more judges are sent to the frequently shortlisted tables (SNIPPET, MHacks' own "how to throw a hackathon" write-up). **Implication: you must win a 2–3-minute table visit, repeatedly.** Being shortlisted by the first judge is what earns you the second and third visits.
- Submission is on **Devpost**, with track selection and repo link. Submit early: "late edits may not be available once judging begins."
- **2025 judging criteria** (SNIPPET from the 2025 Devpost; assume similar in 2026): **Innovation · Technical Complexity · Usability (including accessibility and inclusivity) · Adherence to Theme.** Usability explicitly includes accessibility, which is free points for an accessibility project.

## Who is coming: sponsors (VERIFIED from both repos, Sep 24–28 commits)
Tier sizes come from the site's sticker wall (bigger = higher tier).

| Tier | Sponsor | What they are | What they'll likely judge or reward | Fit with our plan |
|---|---|---|---|---|
| **1 (title)** | **Fetch.ai** | Agent platform: uAgents, Agentverse, ASI:One | 2025 MHacks: Best Use of Fetch.ai **$1,250**, Agentverse **$750**, ASI:One **$500**. 2026 winners elsewhere: multi-agent swarms registered on Agentverse and discoverable via ASI:One chat (LifeLink, CareLoop, Fireflai) | Wrap a backend capability as an Agentverse agent that ASI:One can call. Cheap if planned from hour 0 |
| 2 | **FREE-WiLi** | Hardware hacking multitool. **FREE-WiLi 2** announced Sep 2026: 2× RP2350, ESP32-C5, iCE40 FPGA, Pi CM0, 3.5" touchscreen, IR, LoRa, NFC, sub-GHz | 2025 MHacks: "Best Use of FREE-WiLi" (Gestura, a gesture mouse for disabled users). 2026 GrizzHacks: an **AAC communicator ("OmniComm") won the FREE-WiLi prize** | Very high for any hardware or accessibility project. Ask for a loaner kit at opening |
| 2 | **Notability** | Note-taking app | Likely a "learning / notes" prize. Unknown | Low |
| 2 | University of Michigan | Host | — | — |
| 3 | AWS | Cloud | Possibly "Best use of AWS" | Use Bedrock or Lambda only if it's free to add |
| 3 | Capital One | Bank | Historically "Best Financial Hack" (Nessie API) | Only for FinTech projects |
| 3 | **Meta** | Quest / Ray-Ban Meta | 2025 "Portal" prize was **Meta x Oakley glasses**. Possibly a Meta-device prize | Medium (glasses camera input) |
| 3 | D. E. Shaw, Stevens Capital Mgmt | Quant firms (recruiting) | Probably "most technically complex"–style prizes or none | Recruiting |
| 3 | **xAI** (replaced the SpaceX link on Sep 28) | Grok API | Possibly "Best use of Grok/xAI API" | Cheap if you need any LLM call |
| 3 | **Council** | Clinical AI platform for health systems (HIPAA, private-cloud medical model) | Likely a health/clinical AI prize | Good for any health or accessibility project |
| 3 | **Neon** | Serverless Postgres | "Best use of Neon" (MLH-style) | Free stack choice for the DB |
| 3 | **Photon** | **Spectrum SDK: AI agents inside iMessage, WhatsApp, Telegram, Slack, Discord** | 2026 HackPrinceton track "Agents in iMessage" (cash). Winners: WaterShield (an **ESP32 leak detector** that texts you) and Wavelength (a social coach for neurodivergent people) | High: give the device an iMessage/WhatsApp presence for the caregiver or partner side |
| 3 | **Freesolo** | Fine-tunes small models (<10B) via a CLI driven by Claude Code or Codex; exportable weights | 2026 Hack the 6ix: "Best Model Trained on Freesolo" | Medium: fine-tune a small on-device model for one narrow job |
| 3 | Relay | Human-in-the-loop workflow automation | Unknown | Low |
| 3 | TechSmith | Snagit / Camtasia | Possibly a "best demo video" prize | Use Camtasia for the Devpost video |
| 3 | SpacetimeDB | Real-time database for multiplayer and live apps | "Best use of SpacetimeDB" | Medium if there's live multi-client sync |
| 3 | Salesforce | Agentforce | Unknown | Low |
| 3 | **ElevenLabs** | Voice (TTS, voice cloning, conversational agents) | Also the most common MLH prize of 2026 (**"[MLH] Best Use of ElevenLabs" appeared at 39+ events**) | High for anything that speaks |

**Standard MLH prizes this season** (frequency across 2026 events in HackWinnerDB): ElevenLabs (39+), Gemini API (33+), Solana (27+), MongoDB Atlas (21+), Vultr (14), Snowflake (7), DigitalOcean (7), .Tech domain (7), Presage (6), Gemma 4 (5), GoDaddy domain (5), Google Antigravity (4), Auth0 AI Agents (3).

## Judges
- **Not found publicly.** Based on MHacks' expo model, expect organizers, sponsor engineers (Fetch.ai, FREE-WiLi, Photon, ElevenLabs, Council, AWS, Meta…), and possibly U-M faculty or alumni (INFERENCE).
- What this mix implies: sponsor engineers reward **real integration depth** with their product. Organizers (who built an MCP server) reward **engineering taste**. Everyone rewards a **demo they can touch**.

## Things to confirm at the opening ceremony
1. The 2026 grand prize amount, and whether every project is eligible for it regardless of track.
2. Whether a hardware lab or loaner kits exist (FREE-WiLi 2, Meta glasses).
3. The exact Devpost deadline and the judging-wave times.
4. "Judged by an LLM": what the LLM reads (repo? Devpost text? video?).
5. Sponsor prize list and requirements (Fetch.ai usually requires Agentverse registration plus an ASI:One chat protocol).

## Sources
[mhacks-2026-site repo](https://github.com/becccasun/mhacks-2026-site) · [mhacks/dashboard repo](https://github.com/mhacks/dashboard) · [dashboard PR #197 (handbook)](https://github.com/mhacks/dashboard/pull/197) · [fetch.ai MHacks 2026 event](https://www.fetch.ai/events/mhacks-2026-2cjxasveix229y1) · [MHacks 2025 Devpost](https://mhacks-2025.devpost.com/) · [MHacks Live prizes](https://live.mhacks.org/prizes) · [Photon Spectrum (HackerNoon)](https://hackernoon.com/introducing-spectrum-agents-for-the-rest-of-us) · [Freesolo Flash](https://www.producthunt.com/products/freesolo-flash) · [Council](https://council.health/) · [FREE-WiLi 2 (CNX Software)](https://www.cnx-software.com/2026/09/09/free-wili-2-portable-hacking-multitool-features-two-rp2350-mcus-esp32-c5-ice40-fpga-and-raspberry-pi-cm0/?amp=1) · [HackWinnerDB](https://github.com/notsointresting/hackwinnerdb) (2026 sponsor-prize winners)
