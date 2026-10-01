# MHacks 2026 Hackathon Strategy

> **Update (Oct 1, 2026):** the "inferred tracks" below are outdated. Official 2026 tracks, sponsors, judging format and grand-prize patterns are in `research/grand-prize/00-SUMMARY.md`.

## Inferred 2026 Tracks
1. Sustainability / Climate
2. Health / Healthcare
3. Optimization / Efficiency
4. Frontier Tech / Novel Interfaces (AR/VR/spatial/gesture/BCI)
5. Wild card (Accessibility, Education, or AI-specific)

## What Wins at MHacks
- Live "wow" demo (judges interact, see results)
- AI is table stakes -- use agentic, RAG, multimodal, or on-device
- Physical + digital (hardware hacks outperform pure software)
- Specific problem > generic platform
- Multi-agent architectures trending hard
- Social impact multiplier for Healthcare/Accessibility

## Judging Criteria
1. Innovation -- originality, creative problem-solving, real-world relevance
2. Technical Complexity -- depth, advanced tech, robustness
3. Usability -- user-friendliness, accessibility, UX
4. Theme Adherence -- alignment with track

## Top 3 Project Ideas (Tier 1)

### 1. GhostHand -- AI Physical Therapy via Gesture Tracking
- Track: Healthcare / Frontier Interfaces
- Webcam + IMU sensors track PT movements in real-time
- AI compares form vs prescribed exercises, live audio/visual feedback
- Demo: Judge raises arm -> system detects angle, gives correction overlay
- Tech: MediaPipe/OpenPose, LLM coaching agent, React dashboard, Python backend, Arduino/IMU

### 2. EcoSentry -- Multi-Agent Environmental Monitoring Swarm
- Track: Sustainability
- Raspberry Pi sensor network (temp, air quality, humidity, noise)
- Multi-agent AI: anomaly detection + trend prediction + recommendations
- Demo: Blow near air quality sensor -> spike detected -> prediction -> recommendation
- Tech: RPi + BME680/MQ-135, CrewAI/AutoGen, WebSocket streaming, React dashboard

### 3. SpectraSign -- AR Sign Language Interpreter
- Track: Frontier Interfaces / Accessibility
- ASL hand signs -> English text in AR overlay (real-time)
- Reverse: spoken English -> AR sign language animations
- Demo: Signer does ASL -> text appears in AR -> judge speaks -> AR shows signs
- Tech: Snap AR / MediaPipe, fine-tuned ASL model, TTS/STT, React Native companion

## Sponsor Prize Targets
- Best Hardware Hack (~$1,000) -- fewer competitors
- Best use of AR platform (Snap AR) -- very few teams attempt
- Best use of AI platform -- watch announcements
- Best use of Crypto/Solana ($2,500 in 2025) -- high prize, moderate competition
- Best use of specific API -- often easy wins

## 24-Hour Timeline
| Time | Activity |
|------|----------|
| 0-2h | Finalize idea, assign roles, set up repo + deploy |
| 2-8h | Core MVP working end-to-end |
| 8-14h | Hardware integration, AI agent wiring, data pipeline |
| 14-20h | Polish UI, demo-worthy features, edge cases |
| 20-22h | Demo prep, rehearsal, backup recording |
| 22-24h | Final testing, Devpost submission |

## Role Division (4 People)
1. Frontend/Demo Lead -- React UI, demo script, presentation
2. Backend/AI Lead -- LLM agents, RAG pipeline, API integrations
3. Hardware/Systems Lead -- Sensors, AR, edge devices, deployment
4. Data/Integration Lead -- Data pipeline, sponsor APIs, testing

## Pre-Hackathon Checklist
- [ ] Test all hardware (RPi, sensors, AR devices)
- [ ] Build boilerplate repos (auth, deploy pipeline, scaffold, components)
- [ ] Practice demo at least 3 times
- [ ] Pick 2-3 sponsor prizes to target
- [ ] Survey team for hardware availability and skills
- [ ] Monitor track + sponsor announcements
