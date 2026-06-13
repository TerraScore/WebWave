# Wavy Spots Animated Explainer Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 30-second Remotion 4 animated explainer video showing a person joining a Wavy Spot and watching a café come alive with connection, exported as 1920×1080 MP4 + 1080×1920 vertical crop.

**Architecture:** Standalone Remotion project at `~/Desktop/wavy-spots-video/`. One root composition (`SpotVideo`, 900 frames at 30fps) orchestrates 6 sequential `<Sequence>` scenes. SVG React components handle illustrated characters with interpolated expression states (isolated → connected).

**Tech Stack:** Remotion 4, React 18, TypeScript 5, Vitest + @testing-library/react for unit tests.

---

## Timing Reference (30fps)

| Scene | Frames | Duration |
|-------|--------|----------|
| ColdOpen | 0–149 | 5s |
| ProtagonistEnters | 150–299 | 5s |
| JoinsSpot | 300–449 | 5s |
| WavePulse | 450–607 | ~5.3s (overlaps Scene 5 by 8f) |
| RoomWakesUp | 600–809 | 7s |
| EndCard | 810–899 | 3s |

---

## File Map

| File | Responsibility |
|------|---------------|
| `package.json` | Dependencies, scripts |
| `remotion.config.ts` | Remotion output settings |
| `vite.config.ts` | Vitest config for unit tests |
| `tsconfig.json` | TypeScript settings |
| `src/test-setup.ts` | @testing-library/jest-dom import |
| `src/tokens.ts` | Brand colors, timing constants, easing |
| `src/Root.tsx` | `registerRoot`, declares both compositions |
| `src/SpotVideo.tsx` | Main 16:9 composition, sequences all scenes |
| `src/characters/Person.tsx` | Illustrated SVG character, isolated/connected states |
| `src/characters/Person.test.tsx` | Unit tests for Person states |
| `src/characters/Protagonist.tsx` | Larger Person variant (no extra logic) |
| `src/components/CafeBackground.tsx` | Static SVG café environment |
| `src/components/PhoneMockup.tsx` | Wavy app phone mockup for Scene 3 |
| `src/components/RippleRing.tsx` | Single expanding ring, animated by frame |
| `src/components/NotifPip.tsx` | Rose notification dot with pop-in animation |
| `src/scenes/ColdOpen.tsx` | Scene 1: isolated café |
| `src/scenes/ProtagonistEnters.tsx` | Scene 2: protagonist walks in |
| `src/scenes/JoinsSpot.tsx` | Scene 3: phone close-up, join tap |
| `src/scenes/WavePulse.tsx` | Scene 4: ripple radiates outward |
| `src/scenes/RoomWakesUp.tsx` | Scene 5: heads lift, glow spreads |
| `src/scenes/EndCard.tsx` | Scene 6: wide shot + logo + tagline |

---

## Task 1: Scaffold the Remotion project

**Files:**
- Create: `~/Desktop/wavy-spots-video/package.json`
- Create: `~/Desktop/wavy-spots-video/remotion.config.ts`
- Create: `~/Desktop/wavy-spots-video/tsconfig.json`
- Create: `~/Desktop/wavy-spots-video/vite.config.ts`
- Create: `~/Desktop/wavy-spots-video/src/test-setup.ts`
- Create: `~/Desktop/wavy-spots-video/.gitignore`

- [ ] **Step 1: Create project directory and package.json**

```bash
mkdir -p ~/Desktop/wavy-spots-video
cd ~/Desktop/wavy-spots-video
```

Create `package.json`:

```json
{
  "name": "wavy-spots-video",
  "version": "1.0.0",
  "scripts": {
    "start": "remotion studio",
    "render": "remotion render SpotVideo out/spots-video-16x9.mp4",
    "render:vertical": "remotion render SpotVideoVertical out/spots-video-9x16.mp4",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "remotion": "^4.0.0",
    "@remotion/cli": "^4.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "vitest": "^1.6.0",
    "@testing-library/react": "^15.0.0",
    "@testing-library/jest-dom": "^6.4.0",
    "@vitejs/plugin-react": "^4.3.0",
    "vite": "^5.3.0",
    "jsdom": "^24.1.0"
  }
}
```

- [ ] **Step 2: Install dependencies**

```bash
cd ~/Desktop/wavy-spots-video && npm install
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 3: Create remotion.config.ts**

```typescript
import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setCodec("h264");
```

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": ["src", "remotion.config.ts"]
}
```

- [ ] **Step 5: Create vite.config.ts**

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
    globals: true,
  },
});
```

- [ ] **Step 6: Create src/test-setup.ts**

```typescript
import "@testing-library/jest-dom";
```

- [ ] **Step 7: Create .gitignore**

```
node_modules/
out/
.DS_Store
```

- [ ] **Step 8: Initialise git and commit scaffold**

```bash
cd ~/Desktop/wavy-spots-video
git init
git add .
git commit -m "chore: scaffold Remotion project"
```

---

## Task 2: Brand tokens

**Files:**
- Create: `src/tokens.ts`

- [ ] **Step 1: Create src/tokens.ts**

```typescript
export const COLORS = {
  bg: "#0B0712",
  bgLight: "#110818",
  rose: "#D31C5C",
  roseBright: "#FF4D8D",
  roseDeep: "#A30E45",
  blue: "#2563EB",
  blueBright: "#3B82F6",
  muted: "#6B5560",
  ink: "#15070E",
  charIsolated: "#2a1520",
  charIsolatedBorder: "#3a2030",
  white: "#FFFFFF",
} as const;

export const SCENE_FRAMES = {
  coldOpenStart: 0,
  coldOpenEnd: 150,
  protagonistStart: 150,
  protagonistEnd: 300,
  joinsSpotStart: 300,
  joinsSpotEnd: 450,
  wavePulseStart: 450,
  wavePulseEnd: 608,
  roomWakesStart: 600,
  roomWakesEnd: 810,
  endCardStart: 810,
  endCardEnd: 900,
} as const;

export const VIDEO = {
  width: 1920,
  height: 1080,
  fps: 30,
  durationInFrames: 900,
} as const;

export const VERTICAL_VIDEO = {
  width: 1080,
  height: 1920,
  fps: 30,
  durationInFrames: 900,
} as const;

export const EASING = {
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
};
```

- [ ] **Step 2: Commit**

```bash
git add src/tokens.ts
git commit -m "feat: add brand tokens and timing constants"
```

---

## Task 3: CaféBackground component

**Files:**
- Create: `src/components/CafeBackground.tsx`

- [ ] **Step 1: Create src/components/CafeBackground.tsx**

```tsx
import React from "react";
import { COLORS } from "../tokens";

export const CafeBackground: React.FC = () => (
  <svg
    width="1920"
    height="1080"
    viewBox="0 0 1920 1080"
    style={{ position: "absolute", inset: 0 }}
  >
    {/* Floor */}
    <rect x="0" y="700" width="1920" height="380" fill="#0d0815" />

    {/* Back wall */}
    <rect x="0" y="0" width="1920" height="720" fill={COLORS.bg} />

    {/* Window left */}
    <rect x="80" y="80" width="220" height="300" rx="8" fill="#0a0610" stroke="#1a0d20" strokeWidth="3" />
    <line x1="190" y1="80" x2="190" y2="380" stroke="#1a0d20" strokeWidth="2" />
    <line x1="80" y1="230" x2="300" y2="230" stroke="#1a0d20" strokeWidth="2" />
    {/* Soft window glow */}
    <rect x="80" y="80" width="220" height="300" rx="8" fill="rgba(37,99,235,0.04)" />

    {/* Window right */}
    <rect x="1620" y="80" width="220" height="300" rx="8" fill="#0a0610" stroke="#1a0d20" strokeWidth="3" />
    <line x1="1730" y1="80" x2="1730" y2="380" stroke="#1a0d20" strokeWidth="2" />
    <line x1="1620" y1="230" x2="1840" y2="230" stroke="#1a0d20" strokeWidth="2" />
    <rect x="1620" y="80" width="220" height="300" rx="8" fill="rgba(37,99,235,0.04)" />

    {/* Table 1 (left) */}
    <rect x="200" y="660" width="280" height="16" rx="4" fill="#1a0d14" stroke="#251020" strokeWidth="1" />
    <rect x="290" y="676" width="12" height="80" rx="3" fill="#1a0d14" />
    <rect x="370" y="676" width="12" height="80" rx="3" fill="#1a0d14" />

    {/* Table 2 (center-left) */}
    <rect x="600" y="660" width="280" height="16" rx="4" fill="#1a0d14" stroke="#251020" strokeWidth="1" />
    <rect x="690" y="676" width="12" height="80" rx="3" fill="#1a0d14" />
    <rect x="770" y="676" width="12" height="80" rx="3" fill="#1a0d14" />

    {/* Table 3 (center — protagonist) */}
    <rect x="820" y="640" width="280" height="16" rx="4" fill="#1a0d14" stroke="#251020" strokeWidth="1" />
    <rect x="905" y="656" width="12" height="80" rx="3" fill="#1a0d14" />
    <rect x="985" y="656" width="12" height="80" rx="3" fill="#1a0d14" />

    {/* Table 4 (center-right) */}
    <rect x="1040" y="660" width="280" height="16" rx="4" fill="#1a0d14" stroke="#251020" strokeWidth="1" />
    <rect x="1125" y="676" width="12" height="80" rx="3" fill="#1a0d14" />
    <rect x="1205" y="676" width="12" height="80" rx="3" fill="#1a0d14" />

    {/* Table 5 (right) */}
    <rect x="1440" y="660" width="280" height="16" rx="4" fill="#1a0d14" stroke="#251020" strokeWidth="1" />
    <rect x="1525" y="676" width="12" height="80" rx="3" fill="#1a0d14" />
    <rect x="1605" y="676" width="12" height="80" rx="3" fill="#1a0d14" />

    {/* Ambient floor gradient */}
    <defs>
      <radialGradient id="floorGlow" cx="50%" cy="0%" r="50%">
        <stop offset="0%" stopColor="rgba(211,28,92,0.05)" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
    <rect x="0" y="600" width="1920" height="480" fill="url(#floorGlow)" />
  </svg>
);
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CafeBackground.tsx
git commit -m "feat: add CafeBackground SVG component"
```

---

## Task 4: Person character component (with tests)

**Files:**
- Create: `src/characters/Person.tsx`
- Create: `src/characters/Person.test.tsx`

- [ ] **Step 1: Write failing tests**

Create `src/characters/Person.test.tsx`:

```tsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Person } from "./Person";

vi.mock("remotion", async () => {
  const actual = await vi.importActual<typeof import("remotion")>("remotion");
  return {
    ...actual,
    useCurrentFrame: vi.fn(() => 0),
    useVideoConfig: vi.fn(() => ({
      width: 1920,
      height: 1080,
      fps: 30,
      durationInFrames: 900,
    })),
  };
});

describe("Person", () => {
  it("renders an SVG element", () => {
    const { container } = render(
      <Person state="isolated" connectionProgress={0} />
    );
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("uses dark fill in isolated state", () => {
    const { container } = render(
      <Person state="isolated" connectionProgress={0} />
    );
    const head = container.querySelector("[data-testid='person-head']");
    expect(head).toBeTruthy();
    expect(head?.getAttribute("fill")).toBe("#2a1520");
  });

  it("uses rose fill in connected state", () => {
    const { container } = render(
      <Person state="connected" connectionProgress={1} colorVariant="rose" />
    );
    const head = container.querySelector("[data-testid='person-head']");
    expect(head?.getAttribute("fill")).toBe("#D31C5C");
  });

  it("uses blue fill when colorVariant is blue", () => {
    const { container } = render(
      <Person state="connected" connectionProgress={1} colorVariant="blue" />
    );
    const head = container.querySelector("[data-testid='person-head']");
    expect(head?.getAttribute("fill")).toBe("#2563EB");
  });

  it("applies larger scale when scale prop > 1", () => {
    const { container } = render(
      <Person state="isolated" connectionProgress={0} scale={1.3} />
    );
    const svg = container.querySelector("svg");
    expect(svg?.style.transform).toContain("scale(1.3)");
  });
});
```

- [ ] **Step 2: Run tests — verify they fail**

```bash
cd ~/Desktop/wavy-spots-video && npm test
```

Expected: 5 failures — `Person` not found.

- [ ] **Step 3: Implement src/characters/Person.tsx**

```tsx
import React from "react";
import { interpolate } from "remotion";
import { COLORS } from "../tokens";

export interface PersonProps {
  state: "isolated" | "connected";
  connectionProgress: number; // 0–1
  colorVariant?: "rose" | "blue";
  scale?: number;
}

export const Person: React.FC<PersonProps> = ({
  state,
  connectionProgress,
  colorVariant = "rose",
  scale = 1,
}) => {
  const connected = state === "connected";
  const connectedColor = colorVariant === "rose" ? COLORS.rose : COLORS.blue;
  const headFill = connected ? connectedColor : COLORS.charIsolated;
  const bodyFill = connected ? connectedColor : COLORS.charIsolated;
  const borderColor = connected
    ? colorVariant === "rose"
      ? COLORS.roseBright
      : COLORS.blueBright
    : COLORS.charIsolatedBorder;

  const glowOpacity = interpolate(connectionProgress, [0, 1], [0, 1]);
  const glowRadius = colorVariant === "rose" ? "rgba(211,28,92,0.5)" : "rgba(37,99,235,0.5)";

  // Mouth: flat line (isolated) → smile arc (connected)
  // At progress=0: M10 34 L22 34  (flat)
  // At progress=1: M10 34 Q16 40 22 34  (smile)
  const mouthCY = interpolate(connectionProgress, [0, 1], [34, 40]);
  const mouthD =
    connectionProgress < 0.05
      ? "M10 34 L22 34"
      : `M10 34 Q16 ${mouthCY} 22 34`;

  return (
    <svg
      width={32}
      height={80}
      viewBox="0 0 32 80"
      style={{ transform: `scale(${scale})`, transformOrigin: "bottom center", overflow: "visible" }}
    >
      <defs>
        <filter id={`glow-${colorVariant}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Glow halo */}
      {connected && (
        <ellipse
          cx="16"
          cy="16"
          rx="20"
          ry="20"
          fill={glowRadius}
          opacity={glowOpacity * 0.6}
        />
      )}

      {/* Head */}
      <circle
        data-testid="person-head"
        cx="16"
        cy="16"
        r="14"
        fill={headFill}
        stroke={borderColor}
        strokeWidth="1.5"
        filter={connected ? `url(#glow-${colorVariant})` : undefined}
      />

      {/* Eyes */}
      <circle cx="11" cy="13" r="2" fill={connected ? "#fff" : COLORS.muted} opacity={connected ? 0.9 : 0.5} />
      <circle cx="21" cy="13" r="2" fill={connected ? "#fff" : COLORS.muted} opacity={connected ? 0.9 : 0.5} />

      {/* Mouth */}
      <path
        d={mouthD}
        stroke={connected ? "#fff" : COLORS.muted}
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity={connected ? 0.9 : 0.5}
      />

      {/* Body */}
      <rect
        x="4"
        y="34"
        width="24"
        height="42"
        rx="5"
        fill={bodyFill}
        stroke={borderColor}
        strokeWidth="1"
        filter={connected ? `url(#glow-${colorVariant})` : undefined}
      />
    </svg>
  );
};
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
npm test
```

Expected: 5 tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/characters/Person.tsx src/characters/Person.test.tsx
git commit -m "feat: add Person SVG character with isolated/connected states"
```

---

## Task 5: Protagonist character

**Files:**
- Create: `src/characters/Protagonist.tsx`

- [ ] **Step 1: Create src/characters/Protagonist.tsx**

```tsx
import React from "react";
import { Person, PersonProps } from "./Person";

type ProtagonistProps = Omit<PersonProps, "scale" | "colorVariant">;

export const Protagonist: React.FC<ProtagonistProps> = (props) => (
  <Person {...props} scale={1.4} colorVariant="rose" />
);
```

- [ ] **Step 2: Commit**

```bash
git add src/characters/Protagonist.tsx
git commit -m "feat: add Protagonist character (scaled-up Person)"
```

---

## Task 6: PhoneMockup component

**Files:**
- Create: `src/components/PhoneMockup.tsx`

- [ ] **Step 1: Create src/components/PhoneMockup.tsx**

This renders the Wavy app phone used in Scene 3 (JoinsSpot). `tapProgress` (0–1) drives the "Join Spot" button press animation.

```tsx
import React from "react";
import { interpolate } from "remotion";
import { COLORS } from "../tokens";

interface PhoneMockupProps {
  tapProgress: number; // 0–1, drives button press
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ tapProgress }) => {
  const btnScale = interpolate(tapProgress, [0, 0.3, 0.6, 1], [1, 0.93, 0.97, 1]);
  const btnGlow = interpolate(tapProgress, [0, 0.5, 1], [0.4, 1, 0.7]);

  return (
    <svg width="200" height="360" viewBox="0 0 200 360" style={{ overflow: "visible" }}>
      <defs>
        <filter id="phoneGlow" x="-30%" y="-10%" width="160%" height="120%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={COLORS.roseBright} />
          <stop offset="100%" stopColor={COLORS.rose} />
        </linearGradient>
      </defs>

      {/* Phone frame */}
      <rect
        x="4" y="4" width="192" height="352" rx="28"
        fill={COLORS.ink}
        stroke={COLORS.rose}
        strokeWidth="2.5"
        filter="url(#phoneGlow)"
        style={{ opacity: 0.9 + btnGlow * 0.1 }}
      />

      {/* Screen area */}
      <rect x="14" y="20" width="172" height="320" rx="18" fill="#0f0618" />

      {/* Status bar notch */}
      <rect x="74" y="22" width="52" height="10" rx="5" fill={COLORS.bg} />

      {/* Wavy logo mark */}
      <rect x="86" y="44" width="28" height="8" rx="4" fill={COLORS.rose} />

      {/* Spot card */}
      <rect x="22" y="68" width="156" height="120" rx="12" fill="#1a0a12" stroke="#2a1020" strokeWidth="1" />

      {/* Spot card: location pin icon */}
      <circle cx="42" cy="92" r="10" fill={COLORS.rose} opacity={0.15} />
      <path d="M42 86 C38 86 35 89 35 93 C35 98 42 106 42 106 C42 106 49 98 49 93 C49 89 46 86 42 86Z" fill={COLORS.rose} />
      <circle cx="42" cy="93" r="3" fill="#fff" />

      {/* Spot card: café name */}
      <rect x="58" y="87" width="100" height="8" rx="4" fill="#3a1525" />
      <rect x="58" y="99" width="70" height="6" rx="3" fill="#2a1020" />

      {/* Spot card: "4 people here" */}
      <rect x="22" y="106" width="60" height="6" rx="3" fill="#2a1020" />

      {/* Avatar circles */}
      <circle cx="28" cy="138" r="10" fill={COLORS.rose} />
      <circle cx="46" cy="138" r="10" fill={COLORS.blue} />
      <circle cx="64" cy="138" r="10" fill={COLORS.roseDeep} />
      <rect x="78" y="132" width="40" height="12" rx="6" fill="#2a1020" />

      {/* Separator */}
      <line x1="22" y1="162" x2="178" y2="162" stroke="#2a1020" strokeWidth="1" />

      {/* Spot list items (other spots, dimmed) */}
      <rect x="22" y="176" width="156" height="40" rx="8" fill="#150810" stroke="#1e0d18" strokeWidth="1" opacity={0.5} />
      <rect x="22" y="224" width="156" height="40" rx="8" fill="#150810" stroke="#1e0d18" strokeWidth="1" opacity={0.3} />

      {/* JOIN SPOT button */}
      <g transform={`translate(100, 298) scale(${btnScale})`} style={{ transformOrigin: "center" }}>
        <rect
          x="-74" y="-18" width="148" height="36" rx="18"
          fill="url(#btnGrad)"
          style={{ filter: `drop-shadow(0 0 ${8 + btnGlow * 12}px rgba(211,28,92,${btnGlow * 0.7}))` }}
        />
        <text
          x="0" y="6"
          textAnchor="middle"
          fill="#fff"
          fontSize="14"
          fontWeight="700"
          fontFamily="Outfit, sans-serif"
          letterSpacing="1"
        >
          JOIN SPOT
        </text>
      </g>
    </svg>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/PhoneMockup.tsx
git commit -m "feat: add PhoneMockup component for JoinsSpot scene"
```

---

## Task 7: RippleRing component

**Files:**
- Create: `src/components/RippleRing.tsx`

- [ ] **Step 1: Create src/components/RippleRing.tsx**

Each ring receives a `delayFrames` offset so rings stagger. `frame` is passed in from the parent scene (not `useCurrentFrame()` directly) so the parent controls timing.

```tsx
import React from "react";
import { interpolate } from "remotion";
import { COLORS } from "../tokens";

interface RippleRingProps {
  frame: number;
  delayFrames: number;
  maxRadius: number;
  cx: number;
  cy: number;
}

export const RippleRing: React.FC<RippleRingProps> = ({
  frame,
  delayFrames,
  maxRadius,
  cx,
  cy,
}) => {
  const localFrame = Math.max(0, frame - delayFrames);
  const duration = 50; // frames to expand

  const radius = interpolate(localFrame, [0, duration], [0, maxRadius], {
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(localFrame, [0, duration * 0.3, duration], [0, 0.6, 0], {
    extrapolateRight: "clamp",
  });

  if (localFrame <= 0) return null;

  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill="none"
      stroke={COLORS.rose}
      strokeWidth="2"
      opacity={opacity}
    />
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/RippleRing.tsx
git commit -m "feat: add RippleRing animated component"
```

---

## Task 8: NotifPip component

**Files:**
- Create: `src/components/NotifPip.tsx`

- [ ] **Step 1: Create src/components/NotifPip.tsx**

```tsx
import React from "react";
import { interpolate, spring } from "remotion";
import { COLORS } from "../tokens";

interface NotifPipProps {
  frame: number;
  delayFrames: number;
  cx: number;
  cy: number;
  fps: number;
}

export const NotifPip: React.FC<NotifPipProps> = ({
  frame,
  delayFrames,
  cx,
  cy,
  fps,
}) => {
  const localFrame = Math.max(0, frame - delayFrames);

  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 12, stiffness: 200, mass: 0.5 },
  });

  const opacity = interpolate(localFrame, [0, 3, 40, 50], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });

  if (localFrame <= 0) return null;

  return (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
      <circle r="8" fill={COLORS.rose} opacity={opacity} />
      <circle
        r="14"
        fill="none"
        stroke={COLORS.roseBright}
        strokeWidth="1.5"
        opacity={opacity * 0.4}
      />
    </g>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/NotifPip.tsx
git commit -m "feat: add NotifPip animated notification dot"
```

---

## Task 9: Scene 1 — ColdOpen

**Files:**
- Create: `src/scenes/ColdOpen.tsx`

- [ ] **Step 1: Create src/scenes/ColdOpen.tsx**

Uses `useCurrentFrame()` which returns the frame relative to this `<Sequence>` (0–149). Slow camera drift via SVG transform on the whole scene.

```tsx
import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { COLORS } from "../tokens";
import { CafeBackground } from "../components/CafeBackground";
import { Person } from "../characters/Person";

const CHARACTERS = [
  { x: 280, colorVariant: "blue" as const },
  { x: 640, colorVariant: "rose" as const },
  { x: 960, colorVariant: "blue" as const },
  { x: 1080, colorVariant: "rose" as const },
  { x: 1480, colorVariant: "blue" as const },
];

export const ColdOpen: React.FC = () => {
  const frame = useCurrentFrame();

  // Slow drift: translate X by up to 20px over 150 frames
  const driftX = interpolate(frame, [0, 150], [0, -20]);
  const fadeIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, opacity: fadeIn }}>
      <div style={{ transform: `translateX(${driftX}px)`, width: "100%", height: "100%" }}>
        <CafeBackground />

        {/* Characters sitting at tables, all isolated */}
        {CHARACTERS.map((char, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: char.x,
              top: 480,
              filter: "blur(0px)",
              opacity: 0.6 + (i % 2) * 0.1,
            }}
          >
            <Person
              state="isolated"
              connectionProgress={0}
              colorVariant={char.colorVariant}
            />
          </div>
        ))}

        {/* Ambient overlay — deepens the isolation feel */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 50% 30%, transparent 40%, rgba(11,7,18,0.5) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/scenes/ColdOpen.tsx
git commit -m "feat: add ColdOpen scene (isolated café)"
```

---

## Task 10: Scene 2 — ProtagonistEnters

**Files:**
- Create: `src/scenes/ProtagonistEnters.tsx`

- [ ] **Step 1: Create src/scenes/ProtagonistEnters.tsx**

Protagonist slides in from the left. Background characters stay head-down.

```tsx
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../tokens";
import { CafeBackground } from "../components/CafeBackground";
import { Person } from "../characters/Person";
import { Protagonist } from "../characters/Protagonist";

const BG_CHARACTERS = [
  { x: 200, colorVariant: "blue" as const },
  { x: 580, colorVariant: "rose" as const },
  { x: 1100, colorVariant: "blue" as const },
  { x: 1460, colorVariant: "rose" as const },
];

export const ProtagonistEnters: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const slideIn = spring({ frame, fps, config: { damping: 18, stiffness: 80, mass: 1 } });
  const protagonistX = interpolate(slideIn, [0, 1], [-120, 920]);

  const fadeIn = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, opacity: fadeIn }}>
      <CafeBackground />

      {/* Background characters — isolated, slightly blurred */}
      {BG_CHARACTERS.map((char, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: char.x,
            top: 480,
            filter: "blur(1.5px)",
            opacity: 0.45,
          }}
        >
          <Person state="isolated" connectionProgress={0} colorVariant={char.colorVariant} />
        </div>
      ))}

      {/* Protagonist walking in */}
      <div
        style={{
          position: "absolute",
          left: protagonistX,
          top: 440,
        }}
      >
        <Protagonist state="isolated" connectionProgress={0} />
      </div>

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 40%, transparent 35%, rgba(11,7,18,0.55) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/scenes/ProtagonistEnters.tsx
git commit -m "feat: add ProtagonistEnters scene"
```

---

## Task 11: Scene 3 — JoinsSpot

**Files:**
- Create: `src/scenes/JoinsSpot.tsx`

- [ ] **Step 1: Create src/scenes/JoinsSpot.tsx**

Zooms in to the phone. `tapProgress` drives the button press at ~frame 100 of this scene.

```tsx
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../tokens";
import { PhoneMockup } from "../components/PhoneMockup";

export const JoinsSpot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  // Phone scales up from background into view
  const phoneScale = spring({ frame, fps, config: { damping: 20, stiffness: 100, mass: 0.8 } });
  const scale = interpolate(phoneScale, [0, 1], [0.4, 1]);

  // Tap happens at frame 90
  const tapFrame = Math.max(0, frame - 90);
  const tapProgress = interpolate(tapFrame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Background fades to near-black to focus on phone
  const bgOpacity = interpolate(frame, [0, 30], [0.6, 0.05], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, opacity: fadeIn }}>
      {/* Dark bg overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: COLORS.bg,
          opacity: bgOpacity,
        }}
      />

      {/* Ambient rose glow behind phone */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(211,28,92,0.15) 0%, transparent 70%)`,
          opacity: 0.8 + tapProgress * 0.2,
        }}
      />

      {/* Phone mockup, centered */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <PhoneMockup tapProgress={tapProgress} />
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/scenes/JoinsSpot.tsx
git commit -m "feat: add JoinsSpot scene with phone mockup"
```

---

## Task 12: Scene 4 — WavePulse

**Files:**
- Create: `src/scenes/WavePulse.tsx`

- [ ] **Step 1: Create src/scenes/WavePulse.tsx**

4 staggered rings expand from center. NotifPips appear at character x-positions.

```tsx
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, VIDEO } from "../tokens";
import { CafeBackground } from "../components/CafeBackground";
import { RippleRing } from "../components/RippleRing";
import { NotifPip } from "../components/NotifPip";

const NOTIF_POSITIONS = [
  { cx: 220, cy: 520, delay: 20 },
  { cx: 660, cy: 510, delay: 30 },
  { cx: 1100, cy: 520, delay: 25 },
  { cx: 1500, cy: 515, delay: 35 },
];

export const WavePulse: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cx = VIDEO.width / 2;
  const cy = 520;

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
      <CafeBackground />

      {/* Ripple rings emanating from protagonist position */}
      <svg
        width={VIDEO.width}
        height={VIDEO.height}
        style={{ position: "absolute", inset: 0 }}
      >
        <RippleRing frame={frame} delayFrames={0} maxRadius={600} cx={cx} cy={cy} />
        <RippleRing frame={frame} delayFrames={9} maxRadius={600} cx={cx} cy={cy} />
        <RippleRing frame={frame} delayFrames={18} maxRadius={600} cx={cx} cy={cy} />
        <RippleRing frame={frame} delayFrames={27} maxRadius={600} cx={cx} cy={cy} />

        {/* Notification pips at each character position */}
        {NOTIF_POSITIONS.map((pos, i) => (
          <NotifPip
            key={i}
            frame={frame}
            delayFrames={pos.delay}
            cx={pos.cx}
            cy={pos.cy}
            fps={fps}
          />
        ))}
      </svg>

      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(11,7,18,0.6) 100%)",
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/scenes/WavePulse.tsx
git commit -m "feat: add WavePulse scene with ripple rings and notification pips"
```

---

## Task 13: Scene 5 — RoomWakesUp

**Files:**
- Create: `src/scenes/RoomWakesUp.tsx`

- [ ] **Step 1: Create src/scenes/RoomWakesUp.tsx**

Each character lights up with a staggered delay. `connectionProgress` for each is driven by `spring()` offset by that character's delay.

```tsx
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../tokens";
import { CafeBackground } from "../components/CafeBackground";
import { Person } from "../characters/Person";
import { Protagonist } from "../characters/Protagonist";

const CHARACTERS = [
  { x: 200, colorVariant: "blue" as const, delayFrames: 30 },
  { x: 580, colorVariant: "rose" as const, delayFrames: 10 },
  { x: 1100, colorVariant: "blue" as const, delayFrames: 50 },
  { x: 1460, colorVariant: "rose" as const, delayFrames: 70 },
];

export const RoomWakesUp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  // Protagonist is already connected from the start of this scene
  const protagonistProgress = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });

  // Ambient glow blooms as more people connect
  const glowProgress = interpolate(frame, [0, 150], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, opacity: fadeIn }}>
      {/* Rising ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 60%, rgba(211,28,92,${glowProgress * 0.1}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <CafeBackground />

      {/* Background characters — each lighting up with delay */}
      {CHARACTERS.map((char, i) => {
        const localFrame = Math.max(0, frame - char.delayFrames);
        const progress = spring({
          frame: localFrame,
          fps,
          config: { damping: 14, stiffness: 100, mass: 0.8 },
        });
        const state = progress > 0.5 ? "connected" : "isolated";
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: char.x,
              top: 480,
              filter: `blur(${interpolate(progress, [0, 1], [1.5, 0])}px)`,
              opacity: interpolate(progress, [0, 1], [0.45, 1]),
            }}
          >
            <Person
              state={state}
              connectionProgress={progress}
              colorVariant={char.colorVariant}
            />
          </div>
        );
      })}

      {/* Protagonist — connected, centered */}
      <div style={{ position: "absolute", left: 920, top: 440 }}>
        <Protagonist state="connected" connectionProgress={Math.min(protagonistProgress, 1)} />
      </div>

      {/* Vignette softens */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(11,7,18,${0.5 - glowProgress * 0.3}) 100%)`,
          pointerEvents: "none",
        }}
      />
    </AbsoluteFill>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/scenes/RoomWakesUp.tsx
git commit -m "feat: add RoomWakesUp scene with staggered character connection"
```

---

## Task 14: Scene 6 — EndCard

**Files:**
- Create: `src/scenes/EndCard.tsx`

- [ ] **Step 1: Create src/scenes/EndCard.tsx**

Wide shot with full rose glow, Wavy logo text fades in, tagline appears.

```tsx
import React from "react";
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, VIDEO } from "../tokens";
import { CafeBackground } from "../components/CafeBackground";
import { Person } from "../characters/Person";
import { Protagonist } from "../characters/Protagonist";

const ALL_CHARACTERS = [
  { x: 180, colorVariant: "rose" as const },
  { x: 440, colorVariant: "blue" as const },
  { x: 700, colorVariant: "rose" as const },
  { x: 1180, colorVariant: "blue" as const },
  { x: 1440, colorVariant: "rose" as const },
];

export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fadeIn = interpolate(frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });

  const logoSpring = spring({ frame, fps, config: { damping: 18, stiffness: 80 } });
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoY = interpolate(logoSpring, [0, 1], [30, 0]);

  const taglineOpacity = interpolate(frame, [20, 45], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bg, opacity: fadeIn }}>
      {/* Full rose ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 55%, rgba(211,28,92,0.18) 0%, rgba(37,99,235,0.06) 50%, transparent 75%)",
          pointerEvents: "none",
        }}
      />

      <CafeBackground />

      {/* All characters connected */}
      {ALL_CHARACTERS.map((char, i) => (
        <div key={i} style={{ position: "absolute", left: char.x, top: 490 }}>
          <Person state="connected" connectionProgress={1} colorVariant={char.colorVariant} />
        </div>
      ))}
      <div style={{ position: "absolute", left: 920, top: 450 }}>
        <Protagonist state="connected" connectionProgress={1} />
      </div>

      {/* Wavy logo — centered, fades up */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "22%",
          transform: `translate(-50%, calc(-50% + ${logoY}px))`,
          opacity: logoOpacity,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 800,
            fontSize: 120,
            letterSpacing: "-0.03em",
            background: `linear-gradient(100deg, ${COLORS.roseBright}, ${COLORS.rose})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
          }}
        >
          wavy
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: "Outfit, sans-serif",
            fontWeight: 500,
            fontSize: 32,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: COLORS.muted,
            marginTop: 16,
            opacity: taglineOpacity,
          }}
        >
          Find your people.
        </div>
      </div>
    </AbsoluteFill>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/scenes/EndCard.tsx
git commit -m "feat: add EndCard scene with logo and tagline"
```

---

## Task 15: SpotVideo composition

**Files:**
- Create: `src/SpotVideo.tsx`

- [ ] **Step 1: Create src/SpotVideo.tsx**

```tsx
import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { COLORS, SCENE_FRAMES } from "./tokens";
import { ColdOpen } from "./scenes/ColdOpen";
import { ProtagonistEnters } from "./scenes/ProtagonistEnters";
import { JoinsSpot } from "./scenes/JoinsSpot";
import { WavePulse } from "./scenes/WavePulse";
import { RoomWakesUp } from "./scenes/RoomWakesUp";
import { EndCard } from "./scenes/EndCard";

export const SpotVideo: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: COLORS.bg }}>
    <Sequence from={SCENE_FRAMES.coldOpenStart} durationInFrames={150}>
      <ColdOpen />
    </Sequence>

    <Sequence from={SCENE_FRAMES.protagonistStart} durationInFrames={150}>
      <ProtagonistEnters />
    </Sequence>

    <Sequence from={SCENE_FRAMES.joinsSpotStart} durationInFrames={150}>
      <JoinsSpot />
    </Sequence>

    {/* WavePulse and RoomWakesUp overlap by 8 frames */}
    <Sequence from={SCENE_FRAMES.wavePulseStart} durationInFrames={158}>
      <WavePulse />
    </Sequence>

    <Sequence from={SCENE_FRAMES.roomWakesStart} durationInFrames={210}>
      <RoomWakesUp />
    </Sequence>

    <Sequence from={SCENE_FRAMES.endCardStart} durationInFrames={90}>
      <EndCard />
    </Sequence>
  </AbsoluteFill>
);
```

- [ ] **Step 2: Commit**

```bash
git add src/SpotVideo.tsx
git commit -m "feat: add SpotVideo root composition with all 6 scenes"
```

---

## Task 16: Root.tsx — register both compositions

**Files:**
- Create: `src/Root.tsx`

- [ ] **Step 1: Create src/Root.tsx**

The vertical composition wraps `SpotVideo` with a 1.2× scale + center crop transform so the same scenes work for 9:16.

```tsx
import React from "react";
import { Composition, AbsoluteFill } from "remotion";
import { SpotVideo } from "./SpotVideo";
import { VIDEO, VERTICAL_VIDEO } from "./tokens";

const SpotVideoVertical: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#0B0712", overflow: "hidden" }}>
    {/* Scale up and center-crop the 16:9 composition into 9:16 */}
    <div
      style={{
        position: "absolute",
        width: VIDEO.width,
        height: VIDEO.height,
        // Center horizontally within 1080px wide frame
        left: (VERTICAL_VIDEO.width - VIDEO.width) / 2,
        // Center vertically — push up slightly so characters are in frame
        top: (VERTICAL_VIDEO.height - VIDEO.height) / 2 - 200,
        transform: "scale(1.2)",
        transformOrigin: "center center",
      }}
    >
      <SpotVideo />
    </div>
  </AbsoluteFill>
);

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="SpotVideo"
      component={SpotVideo}
      durationInFrames={VIDEO.durationInFrames}
      fps={VIDEO.fps}
      width={VIDEO.width}
      height={VIDEO.height}
    />
    <Composition
      id="SpotVideoVertical"
      component={SpotVideoVertical}
      durationInFrames={VERTICAL_VIDEO.durationInFrames}
      fps={VERTICAL_VIDEO.fps}
      width={VERTICAL_VIDEO.width}
      height={VERTICAL_VIDEO.height}
    />
  </>
);
```

- [ ] **Step 2: Create src/index.ts (entry point)**

```typescript
import { registerRoot } from "remotion";
import { RemotionRoot } from "./Root";

registerRoot(RemotionRoot);
```

- [ ] **Step 3: Commit**

```bash
git add src/Root.tsx src/index.ts
git commit -m "feat: register SpotVideo and SpotVideoVertical compositions"
```

---

## Task 17: Preview in Remotion Studio

- [ ] **Step 1: Start Remotion Studio**

```bash
cd ~/Desktop/wavy-spots-video && npm start
```

Expected: browser opens at `http://localhost:3000` showing Remotion Studio with two compositions: `SpotVideo` and `SpotVideoVertical`.

- [ ] **Step 2: Preview each scene**

In Remotion Studio:
- Scrub through frames 0–149: dark café, 5 muted characters
- Scrub 150–299: protagonist slides in from left
- Scrub 300–449: phone zooms in, JOIN SPOT button visible
- Scrub 450–599: ripple rings expand from center, notification pips appear
- Scrub 600–809: characters light up one by one, glow spreads
- Scrub 810–899: full glow, Wavy logo + "Find your people." fades in

- [ ] **Step 3: Fix any visual issues before rendering**

Common things to check:
- Character positions overlap with table SVG positions
- Glow opacities feel right (not too bright or too dim)
- Logo font loads (Outfit) — if not, add to `public/` and use `@font-face` in a `<style>` tag inside `EndCard.tsx`

- [ ] **Step 4: Commit any fixes**

```bash
git add -p
git commit -m "fix: visual adjustments after studio preview"
```

---

## Task 18: Render and export

- [ ] **Step 1: Create output directory**

```bash
mkdir -p ~/Desktop/wavy-spots-video/out
```

- [ ] **Step 2: Render 16:9 MP4**

```bash
cd ~/Desktop/wavy-spots-video && npm run render
```

Expected: `out/spots-video-16x9.mp4` created, ~1920×1080, ~30s duration.

- [ ] **Step 3: Render 9:16 vertical MP4**

```bash
npm run render:vertical
```

Expected: `out/spots-video-9x16.mp4` created, ~1080×1920, ~30s duration.

- [ ] **Step 4: Verify output files**

```bash
ls -lh out/
```

Expected: both files present, each between 5–30MB (depends on complexity).

- [ ] **Step 5: Final commit**

```bash
git add package.json  # lock file if generated
git commit -m "feat: complete Wavy Spots explainer video v1"
```

---

## Self-Review Notes

- All 6 spec scenes are covered by Tasks 9–14
- Scene overlap (WavePulse/RoomWakesUp at frames 600–608) is explicit in `SpotVideo.tsx` via `durationInFrames={158}` on WavePulse
- `connectionProgress` type is `number` (0–1) throughout — consistent across Person, Protagonist, and all scene callers
- Brand tokens in `tokens.ts` match spec values exactly
- Vertical crop uses the same `SpotVideo` component — no duplicated scene code
- `RippleRing` and `NotifPip` receive `frame` as a prop (not `useCurrentFrame()`) so they can be staggered by the parent — this is intentional
- Audio is out of scope per spec; no tasks for it
