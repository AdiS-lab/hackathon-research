# MHacks 2026 — Idea List

Rating scale: S / A / B / C / D (S = almost certain winner, D = don't bother)

---

## Idea 1: Fast Device-to-Device Transfer / Cloud Storage Optimizer

**Concept**: A tool that makes transferring images, videos, and files between phones/devices faster — possibly combined with intelligent cloud offloading to free up device storage.

**Possible angles**:
- P2P transfer via WebRTC/Wi-Fi Direct that bypasses cloud bottlenecks
- AI-powered storage manager that identifies duplicates, compresses media, and offloads to cloud intelligently
- "Smart sync" that keeps thumbnails on-device but full-res in cloud, with instant fetch

**Rating: C+**

**Why it scores low**:
- **Not novel enough** — AirDrop, Nearby Share, Snapdrop, Google Photos, iCloud already solve this well. Judges have seen it.
- **No clear track fit** — Doesn't map cleanly to any likely MHacks 2026 track (not healthcare, sustainability, frontier interfaces, or accessibility).
- **Hard to demo "wow"** — Transferring a file is visually boring. The demo is "look, the file appeared on the other phone." Judges won't feel excited.
- **No AI depth** — Unless you add a genuinely clever AI layer, this reads as a utility app, not a hackathon project. "Optimization" track expects algorithmic/agentic innovation, not file transfer.
- **No social impact** — No healthcare, accessibility, or sustainability angle to score bonus points on judging criteria.

**What would make it better (B+ territory)**:
- Combine with **edge AI compression** — e.g., on-device neural codec that compresses video 10x in real-time before transfer, then reconstructs on the other side. That's technically impressive and demo-worthy.
- Target a **specific painful scenario** — e.g., "emergency responders sharing body-cam footage in areas with no cell service" using mesh networking (P2P + LoRa). That adds social impact + hardware.
- Add **privacy/security angle** — encrypted, zero-knowledge transfer with no cloud intermediary. Could fit an accessibility or security sponsor prize.

**Verdict**: As a standalone "faster file transfer" app, this won't win. The space is too crowded and the demo is flat. If you pivot to a specific use case with AI compression or mesh networking hardware, it becomes viable.

---

## Idea 2: Visual-to-Component AI — Turning Any Visual Context into Accurate Design Components

**Concept**: A system that ingests images, screenshots, videos, or photos and decomposes them into structured, reusable design components (SVGs, React components, tokens) rather than generating full raster images. Solves the massive gap where AI can generate photos but can't produce clean vector graphics, individual UI components, or design-system-ready output.

**Possible angles**:
- Upload a screenshot/photo of any UI -> AI decomposes into individual SVG components, color tokens, typography, spacing
- Video/animation -> extracted motion patterns as CSS/Lottie animations + individual frame components
- Multi-agent pipeline: one agent segments the visual, one generates clean SVGs per element, one validates against design system constraints
- "Reverse Figma" — point at a real-world object or interface and get editable vector components back

**Rating: B+**

**Strengths**:
- **Real gap** — AI generates raster images well (DALL-E, Midjourney) but SVG generation is genuinely terrible. Every designer knows this pain. Judges who've tried generating SVGs with AI will immediately get it.
- **Strong demo** — Take a photo of a website/app/poster -> watch it decompose into individual clean SVG components in real-time. Visually impressive, judges can interact live.
- **Technical depth** — Vision model for segmentation + custom SVG generation pipeline + multi-agent validation is legitimately complex. Hits "Technical Complexity" judging criteria hard.
- **Dev tool winners exist** — Judy AI, Relay, BlackBox Studio, dockerc, Cyberwright all won at major hackathons. Design/dev tools win when they're demo-able.

**Weaknesses**:
- **Pure software** — No hardware component. Winner data shows hardware+AI combos dominate grand prizes. This maxes out at track prize territory without hardware.
- **No social impact** — Doesn't hit healthcare, accessibility, or sustainability. Misses the "community impact" multiplier.
- **Differentiation from v0/screenshot-to-code** — Vercel's v0 and similar tools already convert screenshots to code. You need a clear differentiator (the SVG/component angle IS that differentiator, but you need to articulate it sharply in the demo).
- **Track fit is okay, not great** — Best fit is "Optimization." Doesn't fit Healthcare/Sustainability/Accessibility tracks.

**What would push it to A/A+ territory**:
- **Add accessibility layer** — System doesn't just extract components, it also generates WCAG-compliant alternatives (proper contrast ratios, ARIA labels, screen-reader-friendly SVGs). Now it fits Accessibility track + has social impact.
- **Add hardware interaction** — Use a phone camera or AR glasses to point at physical designs (posters, whiteboards, product packaging) and extract components in real-time. Now you have a "Frontier Interfaces" angle + hardware demo.
- **Multi-agent architecture** — Segmentation Agent -> SVG Generator Agent -> Design System Validator Agent -> Accessibility Checker Agent. Visible agent communication in the UI. Judges love watching agents talk to each other.
- **Target a specific persona** — "Helping non-designers in startups build consistent UIs" or "Helping blind developers understand visual designs through structured component descriptions" would sharpen the pitch.

**Verdict**: This is a genuinely clever insight — the gap between AI image generation and structured component output is real and unsolved. As a pure "design tool for developers" it's a solid B+ that could win Optimization track or a sponsor dev-tools prize. Add an accessibility angle or hardware interaction and it jumps to A-tier with grand prize potential.

---

## Idea 3: AI-Powered Campus Network Optimizer / Smart WiFi Agents

**Concept**: Campus WiFi (like GT's) collapses when thousands of people are on it simultaneously. Build AI agents that operate at the networking layer to intelligently manage traffic, optimize routing, prioritize critical traffic, and reduce congestion — essentially a smart network orchestration layer.

**Possible angles**:
- AI agents that monitor network load per access point and dynamically re-route/balance client connections
- Client-side app that intelligently picks the least congested AP, compresses requests, batches non-urgent traffic
- Dashboard showing real-time campus network health with predictive congestion alerts
- Edge caching agent that pre-fetches commonly accessed resources during off-peak hours

**Rating: C**

**Why it scores low**:
- **Can't actually touch the network** — You don't have admin access to GT/UMich's network infrastructure. Without root-level control over access points, DHCP, or routing tables, you can only build a monitoring/visualization layer, not actually fix the problem. Judges will ask "does this actually work?" and the answer is "not without IT admin cooperation."
- **Demo is weak** — You can't demo congestion relief live at a hackathon. You'd be showing graphs and dashboards, not an interactive experience. Compare this to "judge raises arm and gets real-time PT feedback" — network optimization is invisible.
- **Enterprise infrastructure problem** — This is a sysadmin/network engineering problem, not a hackathon-scale project. Cisco, Aruba, and Meraki already have AI-powered network management. Judges know this.
- **No social impact** — "WiFi is slow" doesn't hit healthcare, accessibility, or sustainability.
- **Agents feel forced** — "AI agents handling the networking layer" sounds impressive but in practice, what are the agents actually deciding? Network optimization is algorithmic (load balancing, QoS), not agentic. Multi-agent AI shines when agents have distinct roles and communicate — network packet routing doesn't naturally decompose that way.

**What would make it better (B territory)**:
- **Pivot to mesh networking for emergencies** — Instead of "fix campus WiFi," build a system where phones form an ad-hoc mesh network when infrastructure fails (natural disaster, concert, protest). Now you have: hardware angle (phone radios), social impact (emergency comms), and a demo-able scenario. This is basically Meshworks from TreeHacks 2024 (which won Best Beginner Hack).
- **Pivot to network accessibility** — AI that detects when a user's connection is too slow for their task and automatically adapts content (compresses images, serves text-only mode, prioritizes screen reader data). Now it's accessibility + optimization.
- **Pivot to privacy/security** — AI agents that detect network attacks (ARP spoofing, evil twin APs) on public WiFi and alert users. More demo-able and fits a security sponsor prize.

**Verdict**: The underlying frustration is real (campus WiFi sucks), but it's an infrastructure problem you can't solve at the application layer in 24 hours. The demo would be graphs about a problem you can't actually fix. Pivot to mesh networking, network accessibility, or network security for a viable hackathon project.
