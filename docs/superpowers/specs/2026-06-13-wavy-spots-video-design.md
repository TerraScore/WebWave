# Wavy Spots Feature — Animated Explainer Video

**Date:** 2026-06-13  
**Status:** Approved  

---

## Overview

A 30-second animated explainer video for Wavy's Spots feature. The narrative follows a person entering a disconnected café, joining a Wavy Spot, and watching the room come alive with connection. Built with Remotion (React) and exported as MP4.

---

## Story Arc

| Time | Scene | Description |
|------|-------|-------------|
| 0–5s | Cold Open — The Silence | Café interior, 5+ people at laptops. Dark, muted. Faces expressionless, no eye contact. Slow camera drift. |
| 5–10s | Protagonist Enters | He walks in from left, scans the room. Others stay head-down. Expression: searching, slightly deflated. |
| 10–15s | He Joins the Spot | Phone close-up — Wavy app open, Spot card for this café showing "4 people here." He taps **Join Spot**. |
| 15–20s | The Wave Pulses Out | A rose ripple radiates from his position outward. Notification pips appear on others' phones/screens. |
| 20–27s | The Room Wakes Up | One by one, heads lift. Faces shift blank → curious → smiling. Rose + blue glow spreads person to person. |
| 27–30s | Wide Shot + End Card | Full café glowing rose. Everyone connected. Wavy logo fades in. Tagline: **"Find your people."** |

---

## Visual Design

### Style
- **Cinematic Dark** — deep `#0B0712` backgrounds with glowing rose halos
- Depth-of-field: background characters slightly blurred/desaturated until they join
- Ambient rose radial gradient blooms as connection spreads

### Characters
- **Illustrated SVG characters** — stylised faces with two states:
  - **Isolated**: dark `#2a1520` fill, muted border, blank expression (flat mouth line)
  - **Connected**: rose `#D31C5C` or blue `#2563EB` fill, glowing box-shadow, smile arc
- Protagonist is always slightly larger and centered
- 5–6 background characters

### Brand Tokens
| Token | Value |
|-------|-------|
| Background | `#0B0712` |
| Rose | `#D31C5C` / `#FF4D8D` |
| Blue | `#2563EB` / `#3B82F6` |
| Muted | `#6B5560` |
| Font (display) | Outfit 800 |
| Font (body) | Work Sans |

### Phone UI (Scene 3)
- Minimal Wavy app mockup — not pixel-perfect, stylised
- Shows: Wavy logo mark, Spot card (café name, "4 people here", 3 avatar circles), "Join Spot" CTA button
- Phone frame: `#15070E` with rose border and glow

### Ripple Effect (Scene 4)
- Concentric expanding rings, `rgba(211,28,92,0.4)` → transparent
- 3–4 rings staggered by ~0.3s each
- Notification pips (small rose circles) animate in at character positions

---

## Tech Stack

| Concern | Choice |
|---------|--------|
| Framework | Remotion 4 + React 18 + TypeScript |
| Characters | SVG React components with interpolated expression state |
| Animation | `spring()`, `interpolate()`, `useCurrentFrame()` from Remotion |
| Composition | One root composition, 6 scene components |
| Output (primary) | 1920×1080 MP4 at 30fps |
| Output (secondary) | 1080×1920 vertical crop (Reels/TikTok) |
| Audio | Optional: ambient café ambience fading out + soft music sting at end |

---

## Project Structure

```
wavy-spots-video/          # standalone Remotion project (separate from wavywebsite)
├── src/
│   ├── Root.tsx            # registerRoot, defines compositions
│   ├── SpotVideo.tsx       # main 30s composition, orchestrates scenes
│   ├── scenes/
│   │   ├── ColdOpen.tsx       # Scene 1: isolated café
│   │   ├── ProtagonistEnters.tsx  # Scene 2: walks in
│   │   ├── JoinsSpot.tsx      # Scene 3: phone close-up
│   │   ├── WavePulse.tsx      # Scene 4: ripple
│   │   ├── RoomWakesUp.tsx    # Scene 5: heads lift
│   │   └── EndCard.tsx        # Scene 6: wide shot + logo
│   ├── characters/
│   │   ├── Person.tsx         # SVG character, accepts `state: 'isolated'|'connected'`
│   │   └── Protagonist.tsx    # larger variant
│   ├── components/
│   │   ├── PhoneMockup.tsx    # Scene 3 phone + Wavy UI
│   │   ├── RippleRing.tsx     # animated concentric ring
│   │   ├── NotifPip.tsx       # rose notification dot
│   │   └── CafeBackground.tsx # SVG café environment (tables, windows, plants)
│   └── tokens.ts              # brand colors, fonts, easing constants
├── public/
│   └── Outfit-Bold.woff2      # bundled font
├── package.json
└── remotion.config.ts
```

---

## Scene Transitions

- Scenes are sequential within a single Remotion composition (no hard cuts except Scene 2→3 which uses a quick zoom-in to the phone)
- Default transition: `interpolate(frame, [start, start+8], [0, 1])` opacity fade on entering scene elements
- Scene 4→5 transition: ripple rings continue playing under Scene 5 (overlapping by ~8 frames)

---

## Outputs & Delivery

| Format | Dimensions | Use |
|--------|-----------|-----|
| `spots-video-16x9.mp4` | 1920×1080 | Website hero, investor deck, YouTube |
| `spots-video-9x16.mp4` | 1080×1920 | Instagram Reels, TikTok |

The 9:16 version is rendered from the same composition with a `verticalCrop` flag that adjusts the camera framing (center-weighted crop, characters scaled up 1.2×).

---

## Out of Scope

- Voiceover or narration
- Real app screenshots (stylised mockup only)
- After Effects / Lottie (fallback to Option C only if SVG approach hits limits)
- Sound design (ambient audio is optional stretch goal)
