# AMPLIFY TODAY — COMPLETE MVP BUILD PROMPT
### "The Digital Evolution" — An Immersive Scroll-Driven 3D Experience
**Version 1.0 | For: Antigravity IDE + Another AI Agent**

---

> **What this document is:** A fully self-contained specification that describes every design decision, animation behavior, 3D scene, component structure, font, color, copy, and interaction pattern for the Amplify Today website. An AI agent reading this document should be able to build the complete MVP with zero ambiguity.

---

## 00. PROJECT IDENTITY

**Brand:** Amplify Today (`amplifytoday.in`)  
**Service:** Digital services agency — websites, hosting, SEO, social media management, and growth for Indian small businesses and startups.  
**Core Message:** Your business exists offline. We make it explode online.  
**Design Reference:** `dieantwoord.com` — raw maximalist energy, all-caps boldness, pitch-black background, full-bleed visual storytelling, sticker cutouts floating free, thick SVG dividers, high-contrast type hierarchy. We are borrowing the **aesthetic DNA**, not the content.  
**Tone:** Confident, provocative, bold. Not friendly-startup-pastels. Not corporate. Raw digital power.  
**Target Audience:** Small business owners in India aged 28–50 who feel invisible online. They don't understand tech but they understand results.

---

## 01. TECHNOLOGY STACK

### Core Framework
```
Next.js 14+ (App Router)
React 18+ with React Compiler enabled (next.config.js: experimental.reactCompiler: true)
TypeScript strict mode
```

### 3D Engine
```
three@^0.169.0
@react-three/fiber@^8.17.0       (R3F — declarative Three.js in React)
@react-three/drei@^9.115.0       (R3F helpers: useGLTF, OrbitControls, Text, Float, etc.)
@react-three/postprocessing@^2.16 (Bloom, Chromatic Aberration, Noise, Vignette)
leva@^0.9.35                     (Dev-only debug panel for scene tuning — remove in prod)
```

### Animation
```
gsap@^3.12.5                     (ScrollTrigger, Timeline, morphSVG)
@gsap/react@^2.1.1               (useGSAP hook for React integration)
framer-motion@^11.11.0           (Page transitions, text reveals, stagger entrances, hover states)
```

### Styling
```
tailwindcss@^3.4.0
tailwind-merge@^2.5.0
clsx@^2.1.1
```

### Utilities
```
@vercel/analytics@^1.3.1
sharp@^0.33.5                    (Next.js image optimization)
```

### Init Commands (run in order inside Antigravity IDE terminal)
```bash
npx create-next-app@latest amplifytoday --typescript --tailwind --app --no-src-dir
cd amplifytoday

npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install gsap @gsap/react framer-motion
npm install leva --save-dev
npm install tailwind-merge clsx @vercel/analytics sharp
```

---

## 02. FILE & FOLDER ARCHITECTURE

```
amplifytoday/
├── app/
│   ├── layout.tsx                  ← Root layout, fonts, metadata, GA/Analytics
│   ├── page.tsx                    ← Main page — assembles all sections
│   ├── globals.css                 ← CSS vars, Tailwind @base, custom utilities
│   └── favicon.ico
│
├── components/
│   ├── canvas/
│   │   ├── SceneController.tsx     ← R3F Canvas wrapper, scroll-progress context
│   │   ├── Scene1_Offline.tsx      ← Scene 1: Dim storefront
│   │   ├── Scene2_Foundation.tsx   ← Scene 2: Blocks assembling
│   │   ├── Scene3_Connection.tsx   ← Scene 3: Pathways + beams
│   │   ├── Scene4_Network.tsx      ← Scene 4: Orbiting nodes
│   │   ├── Scene5_Hub.tsx          ← Scene 5: Full network reveal
│   │   ├── shared/
│   │   │   ├── BuildingGeometry.tsx ← The central isometric building mesh
│   │   │   ├── DigitalBlock.tsx    ← Reusable falling block geometry
│   │   │   ├── NetworkNode.tsx     ← Pulsing sphere node
│   │   │   ├── GlowPathway.tsx     ← Tube geometry with emissive material
│   │   │   ├── ParticleField.tsx   ← Background particle system
│   │   │   └── CameraRig.tsx       ← Scroll-driven camera controller
│   │   └── PostProcessing.tsx      ← Bloom, vignette, chromatic aberration
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx         ← Scene 1 overlay
│   │   ├── FoundationSection.tsx   ← Scene 2 overlay
│   │   ├── ConnectionSection.tsx   ← Scene 3 overlay
│   │   ├── NetworkSection.tsx      ← Scene 4 overlay
│   │   ├── HubSection.tsx          ← Scene 5 overlay + CTA
│   │   └── ServicesStrip.tsx       ← Horizontal marquee of services
│   │
│   ├── ui/
│   │   ├── Navbar.tsx              ← Fixed top navigation
│   │   ├── ChapterLabel.tsx        ← Scene chapter indicator (e.g., "02 / FOUNDATION")
│   │   ├── StatPill.tsx            ← Floating stat bubbles ("97% of buyers search online")
│   │   ├── GlitchText.tsx          ← Text with glitch animation effect
│   │   ├── MarqueeStrip.tsx        ← Horizontal scrolling text (like Die Antwoord's ticker)
│   │   ├── StickerDecal.tsx        ← Floating PNG cutout elements
│   │   ├── DividerLine.tsx         ← Full-width SVG horizontal divider
│   │   ├── CTAButton.tsx           ← Primary call to action
│   │   └── LoadingScreen.tsx       ← Initial load screen
│   │
│   └── providers/
│       ├── ScrollProvider.tsx      ← Scroll progress context (0 to 1)
│       └── ThreeProvider.tsx       ← R3F Canvas singleton context
│
├── hooks/
│   ├── useScrollProgress.ts        ← Returns normalized scroll 0–1
│   ├── useSceneProgress.ts         ← Returns which scene (1–5) + local progress
│   └── useReducedMotion.ts         ← Respects prefers-reduced-motion
│
├── lib/
│   ├── constants.ts                ← SCENE_RANGES, COLORS, CAMERA_KEYFRAMES
│   ├── gsapAnimations.ts           ← GSAP timeline factories
│   └── threeUtils.ts               ← Three.js helper functions
│
├── public/
│   ├── models/
│   │   ├── storefront.glb          ← Low-poly shop (Scene 1)
│   │   └── building_base.glb       ← Clean geometric building (all scenes)
│   ├── textures/
│   │   ├── grid_floor.png          ← Infinite grid texture
│   │   └── noise.png               ← Noise texture for materials
│   ├── fonts/
│   │   ├── BebasNeue-Regular.woff2
│   │   ├── Syne-Bold.woff2
│   │   └── DMSans-Regular.woff2
│   └── stickers/
│       ├── arrow_up.png            ← Upward arrow sticker
│       ├── wifi_signal.png         ← WiFi signal sticker
│       ├── growth_chart.png        ← Arrow chart sticker
│       └── star_burst.png          ← Star burst element
│
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 03. DESIGN SYSTEM

### 3.1 Color Palette

```css
/* globals.css — CSS Custom Properties */

:root {
  /* Base */
  --color-void:       #000000;    /* True black — canvas background */
  --color-abyss:      #080808;    /* Near-black — page background */
  --color-charcoal:   #121212;    /* Elevated surface */
  --color-ash:        #1E1E1E;    /* Card/section bg */
  --color-smoke:      #2A2A2A;    /* Subtle border */

  /* Text */
  --color-white:      #FFFFFF;    /* Primary text */
  --color-off-white:  #E8E8E8;    /* Body text */
  --color-muted:      #888888;    /* Metadata, labels */

  /* Accent 1 — Electric Cyan (primary accent) */
  --color-cyan:       #00F0FF;    /* Main electric accent */
  --color-cyan-dim:   #00A8B5;    /* Subdued cyan */
  --color-cyan-glow:  rgba(0, 240, 255, 0.15);  /* Glow halos */

  /* Accent 2 — Neon Orange (energy/action accent) */
  --color-orange:     #FF6B00;    /* CTA, highlights */
  --color-orange-dim: #C45200;    /* Subdued orange */
  --color-orange-glow: rgba(255, 107, 0, 0.15);

  /* Scene-specific lighting colors (used in Three.js pointLights) */
  --scene1-light:     #2233AA;    /* Cold, dim blue — "offline" */
  --scene2-light:     #00F0FF;    /* Cyan snap-in — "construction" */
  --scene3-light:     #00FF88;    /* Green pathways — "connection" */
  --scene4-light:     #FF6B00;    /* Orange pulse — "network" */
  --scene5-light:     #FFFFFF;    /* Full white radiance — "hub" */
}
```

**Color Usage Rules:**
- `--color-void` is ALWAYS the `<Canvas>` background and `<html>` background
- `--color-cyan` is used for: node highlights, active states, glowing mesh edges, progress indicators
- `--color-orange` is used for: CTA buttons, the final scene's radiant core, hover states on nav
- Never use any pastel. Never use gradients with more than 2 steps. Keep gradients tight and directional.
- White text ONLY on black/void background. Never on grey. Never on colored backgrounds.

---

### 3.2 Typography

**Font Stack:**

| Role | Family | Weight | Usage |
|---|---|---|---|
| Display | Bebas Neue | 400 | Scene chapter labels, hero stat numbers, massive visual text |
| Headline | Syne | 700 | Section titles (e.g. "YOUR BUSINESS, ONLINE. AMPLIFIED.") |
| Body | DM Sans | 400/500 | Body copy, descriptions, overlays |
| Mono | JetBrains Mono | 400 | URLs, stats, code-like labels, terminal text |

**Loading in Next.js (`app/layout.tsx`):**
```tsx
import { Bebas_Neue, Syne, DM_Sans } from 'next/font/google'
import localFont from 'next/font/local'

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })
const syne = Syne({ weight: '700', subsets: ['latin'], variable: '--font-syne' })
const dmSans = DM_Sans({ weight: ['400', '500', '600'], subsets: ['latin'], variable: '--font-dm' })
const jetbrains = localFont({ src: '../public/fonts/JetBrainsMono.woff2', variable: '--font-mono' })
```

**Type Scale (Mobile-first, rem-based):**
```css
--text-xs:    0.75rem;   /* 12px — metadata labels */
--text-sm:    0.875rem;  /* 14px — UI captions */
--text-base:  1rem;      /* 16px — body copy */
--text-lg:    1.25rem;   /* 20px — lead text */
--text-xl:    1.5rem;    /* 24px — subtitle */
--text-2xl:   2rem;      /* 32px — section sub-heading */
--text-3xl:   3rem;      /* 48px — section heading */
--text-4xl:   5rem;      /* 80px — hero display (desktop) */
--text-5xl:   8rem;      /* 128px — giant chapter numerals */
--text-giant: clamp(4rem, 12vw, 14rem); /* Responsive massive type */
```

**Die Antwoord Typography Rules to Replicate:**
- ALL section headings are `ALL CAPS, NO EXCEPTIONS`
- Letter-spacing on display text: `tracking-widest` (0.1em minimum)
- Headlines slam left edge — no centering for structural text (centering only for CTAs)
- Mix font sizes dramatically — a tiny label beside a massive number is a signature move
- Overlay text has `mix-blend-mode: screen` or uses `drop-shadow` — never a box background behind it

---

### 3.3 Spacing & Layout

```css
/* Scroll-section heights — each scene gets a tall scrollable panel */
.scene-section {
  height: 250vh;  /* Desktop: each of the 5 scenes = 250vh of scroll */
  position: relative;
}

/* Canvas is fixed — content scrolls over it */
.canvas-fixed {
  position: fixed;
  top: 0; left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}

/* Content overlays position absolutely within their scene section */
.scene-overlay {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem 3rem 4rem;
  z-index: 10;
  pointer-events: none;
}
```

**Layout Grid:**
- No grid system. Layout is raw and intentional.
- Text is either: slammed to left edge, or centered, or brutally right-aligned
- No max-width container for display text — let it breathe full-width
- Body copy gets `max-w-[60ch]` for readability

---

### 3.4 Motion Principles

**The Three Laws of Motion on this site:**

1. **Scroll is the director.** Every 3D camera move, every text entrance, every light change is enslaved to scroll position. Nothing plays automatically on a timer (except ambient micro-animations like node pulse, particle drift).

2. **Abrupt is intentional.** Some transitions snap (blocks locking into place). Some ease slowly (camera drift). Mixing snap and ease creates rhythm like a music track — tension and release.

3. **Text reveals on scroll-enter, not on load.** Text overlays use a `clipPath` or `y-transform` reveal driven by `framer-motion`'s `whileInView` with `once: true`.

**GSAP Easing Reference:**
```js
const EASES = {
  cameraMove:    "power2.inOut",   // Smooth camera navigation
  blockDrop:     "bounce.out",     // Blocks landing with weight
  textReveal:    "power3.out",     // Text sliding up into view
  nodeOrbit:     "none",           // Linear orbital loop
  lightTransition: "power1.inOut", // Gradual lighting shift
}
```

---

## 04. THE SCROLL ARCHITECTURE

The page has **5 scenes × 250vh = 1250vh** of total scroll height. The canvas is `position: fixed`. As the user scrolls, the DOM scroll position is converted to a `progress` value (0 to 1) which drives everything.

```ts
// lib/constants.ts

export const TOTAL_SCROLL_HEIGHT = 1250  // in vh units

// Each scene: [startProgress, endProgress]
export const SCENE_RANGES = {
  scene1: [0.00, 0.20],   // 0% – 20% scroll
  scene2: [0.20, 0.40],   // 20% – 40% scroll
  scene3: [0.40, 0.60],   // 40% – 60% scroll
  scene4: [0.60, 0.80],   // 60% – 80% scroll
  scene5: [0.80, 1.00],   // 80% – 100% scroll
}

// Camera positions at the START of each scene (Three.js coordinates)
export const CAMERA_KEYFRAMES = [
  { position: [2, 3, 8],    target: [0, 0, 0],  fov: 55 },  // Scene 1: close, low angle
  { position: [4, 5, 6],    target: [0, 1, 0],  fov: 50 },  // Scene 2: slight pullback
  { position: [6, 6, 6],    target: [0, 0, 0],  fov: 50 },  // Scene 3: isometric
  { position: [5, 8, 5],    target: [0, 0, 0],  fov: 45 },  // Scene 4: elevated
  { position: [10, 12, 10], target: [0, 0, 0],  fov: 40 },  // Scene 5: wide reveal
]
```

**useScrollProgress hook:**
```ts
// hooks/useScrollProgress.ts
import { useEffect, useState } from 'react'

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setProgress(Math.min(scrolled / maxScroll, 1))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}
```

---

## 05. SCENE-BY-SCENE NARRATIVE & VISUAL SPECIFICATIONS

---

### SCENE 1 — "THE OFFLINE ENTITY"
**Scroll Range:** 0% – 20% | **Story Beat:** Problem. Invisibility. The dark before.

#### 3D Environment
```
Camera Position:  [2, 3, 8]
Camera Target:    [0, 0, 0]
Camera FOV:       55
Background Color: #000000
Fog:              FogExp2, color #000000, density 0.08  (thick, oppressive)
Ambient Light:    intensity 0.1, color #1A1A2E
Point Light 1:    position [2, 4, 2], color #2233AA, intensity 0.8  (cold blue, the only source)
Point Light 2:    position [-3, 1, -1], color #441111, intensity 0.3  (red-ish shadow fill)
```

#### Central Object: Low-Poly Storefront
```
Model:       storefront.glb (or THREE.BoxGeometry approximation if no GLTF ready)
Geometry:    A roughly drawn shop front — flat roof, single door cutout, a sign that says "SHOP"
             Made of MeshToonMaterial or MeshLambertMaterial for that low-poly look
Material:    color: #222233, roughness: 1.0, metalness: 0.0
             emissive: #000000  (no self-illumination — it's dead)
Scale:       [1, 1, 1]
Position:    [0, -0.5, 0]
Animation:   Slow, barely perceptible Y-axis rotation: speed 0.0003 radians/frame
```

#### Ground Plane
```
Geometry:    InfiniteGridHelper from Drei (gridSize: 50, gridDivisions: 50)
Color1:      #111111  (grid lines)
Color2:      #0A0A0A  (cell background)
The grid reinforces the sense of digital emptiness — a void with structure
```

#### Particles
```
Count:        300 dust particles
Positions:    Random within [-8, 8] bounding cube
Material:     PointsMaterial, color #333355, size 0.03
Animation:    Drift slowly upward (y += 0.001 per frame), wrap when y > 8
Purpose:      Creates a sense of floating isolation, not beauty — dread
```

#### Text Overlay (HTML — `position: sticky`, `z-index: 10`)
```
CHAPTER LABEL:   [Mono font, --color-muted, text-xs tracking-[0.3em]]
                 "01 / THE OFFLINE ENTITY"

STAT PILL:       [Floats top-right, animate in at scroll 5%]
                 "97% of buyers search online before purchasing"
                 [Background: transparent, border: 1px solid --color-cyan-dim]
                 [Font: DM Sans, size text-sm]

MAIN HEADLINE:   [Bebas Neue, --text-giant, --color-white, tracking-widest]
                 "YOUR CUSTOMERS
                 CAN'T FIND YOU."

SUBTEXT:         [DM Sans, text-lg, --color-muted, max-w-[50ch]]
                 "Most businesses lose 9 out of 10 potential customers
                 before they ever make contact.
                 They searched online. You weren't there."

GLITCH TEXT:     [Below headline, small, --color-cyan, text-sm, mono font]
                 "ERROR_404: BUSINESS_NOT_FOUND.exe"
                 [Apply glitch animation — see GlitchText component spec]
```

#### Scroll Behavior within Scene 1 (0%–20%)
```
0%–5%:    Static. Let user absorb the emptiness. No camera move.
5%–10%:   Camera very slowly creeps forward (z: 8 → 6). Text fades in.
10%–15%:  The single blue point light dims further. Near-total darkness. The storefront barely visible.
15%–20%:  Scene begins transitioning — fog starts thinning, camera begins Z-pullback for Scene 2 handoff.
           First block geometry begins to appear faintly above the building.
```

---

### SCENE 2 — "THE FOUNDATION"
**Scroll Range:** 20% – 40% | **Story Beat:** Solution begins. Structure arrives. The build.

#### 3D Environment
```
Camera Position:  [4, 5, 6]  →  eases in from Scene 1 camera
Camera Target:    [0, 1, 0]
Camera FOV:       50
Background Color: #000000
Fog:              FogExp2, color #000005, density 0.04  (thinning — world opening up)
Ambient Light:    intensity 0.3, color #002233  (blue-tinted ambient)
Point Light 1:    position [0, 8, 0], color #00F0FF, intensity 2.5  (top-down cyan spotlight)
Point Light 2:    position [4, 2, 4], color #003355, intensity 1.0
DirectionalLight: position [5, 10, 5], color #FFFFFF, intensity 0.4, castShadow: true
```

#### The Building Transformation
```
The storefront from Scene 1 morphs/transitions into a clean geometric building.
Implementation: morph by lerping vertex positions if using custom geometry,
OR: cross-fade opacity between two separate meshes (simpler, recommended for MVP)

New Building Mesh:
  Geometry: A clean BoxGeometry stack
    - Base: BoxGeometry(2, 0.3, 2) — foundation slab
    - Tower: BoxGeometry(1.4, 2.5, 1.4) — main body
    - Top: BoxGeometry(0.8, 0.4, 0.8) — roof element
    - Antenna: CylinderGeometry(0.02, 0.02, 1, 8) — signal mast on top
  
  Material: MeshStandardMaterial
    color: #0A1A2A
    roughness: 0.3
    metalness: 0.7
    emissive: #001533
    emissiveIntensity: 0.5
  
  Edge Highlight: EdgesGeometry + LineSegments
    color: #00F0FF (cyan wireframe edges)
    linewidth: 1
    — This gives the "digital blueprint" feel
```

#### Digital Blocks (The Build Animation)
```
Create 12 blocks that "fall from above" and lock into position around the building.
Each block represents: domain, hosting, SSL, design, CMS, speed, etc.

Block Geometry: BoxGeometry(0.3, 0.2, 0.3) each, slight variations in size
Block Material: MeshStandardMaterial
  color: #00F0FF
  roughness: 0.4
  metalness: 0.9
  emissive: #00F0FF
  emissiveIntensity: 0.2

Block Animation (GSAP timeline, triggered by scroll 20%–35%):
  Each block starts at Y: +8 (above frame), alpha: 0
  Staggers in with 0.15s delay between each
  Uses: ease "bounce.out" — they land with physical weight
  Final positions: arranged around the base of the building in a ring
  Landing micro-shake: tiny scale pulse [1, 1, 1] → [1.1, 0.9, 1.1] → [1, 1, 1] on bounce

Label chips: Use Drei's <Text> to render tiny 3D text labels on each block
  Text: "DOMAIN", "HOSTING", "SSL", "DESIGN", "CMS", "SPEED", "MOBILE", etc.
  Font size: 0.08, color: #00F0FF, depthOffset: -1
```

#### Particles (upgraded from Scene 1)
```
Count:        800 particles
Distribution: Concentrated near building, not random across void
Material:     PointsMaterial, color #00F0FF, size 0.025, transparent, opacity 0.6
Animation:    Spiral slowly around building center (polar orbit, Y-axis)
```

#### Text Overlay
```
CHAPTER LABEL:   "02 / THE FOUNDATION"  [--color-cyan, mono, text-xs tracking-[0.3em]]

MAIN HEADLINE:   [Bebas Neue, clamp(3rem, 8vw, 9rem), --color-white]
                 "WE LAY THE
                 FOUNDATION."

SUB-HEADLINE:    [Syne Bold, text-2xl, --color-cyan]
                 "Domain. Hosting. Design. Security. Speed."

BODY TEXT:       [DM Sans, text-base, --color-off-white, max-w-[55ch], leading-relaxed]
                 "Every great online presence starts with a solid base.
                 We register your domain, set up blazing-fast hosting,
                 design your brand identity, and secure your site with SSL —
                 everything locked in and live within days."

SERVICE TAGS:    [Horizontal row of pill tags, --color-ash bg, --color-cyan text, text-xs border border-cyan]
                 ["Domain Registration", "Fast Hosting", "SSL Certificate", "Mobile-First Design", "CMS Setup"]
```

#### Scroll Behavior within Scene 2 (20%–40%)
```
20%–25%:  Blocks begin falling. Camera eases in from Scene 1 position.
           Old storefront fades out (opacity 0 → 0 over 5% scroll).
           New building rises from 0 opacity.
25%–32%:  Blocks rain down sequentially with bounce easing.
           Each block landing triggers a brief cyan flash on the nearest Point Light.
32%–38%:  All blocks settled. Building glows steadily. Text fully revealed.
38%–40%:  Camera begins slow upward arc for Scene 3 handoff.
           Blocks begin emitting small particle trails.
```

---

### SCENE 3 — "THE CONNECTION"
**Scroll Range:** 40% – 60% | **Story Beat:** Visibility. Search. The world can see you now.

#### 3D Environment
```
Camera Position:  [6, 6, 6]  (true isometric angle)
Camera Target:    [0, 0, 0]
Camera FOV:       50
Background Color: #000000
Fog:              FogExp2, color #001A00, density 0.025  (green-tinted, thinning more)
Ambient Light:    intensity 0.5, color #001A00
Point Light 1:    position [0, 10, 0], color #00FF88, intensity 3.0  (green spotlight from above)
Point Light 2:    position [-5, 3, 5], color #004400, intensity 1.5
SpotLight:        position [0, 12, 0], angle 0.3, penumbra 0.5, color #FFFFFF, intensity 1.5
                  — The spotlight sweeps slowly L→R, like a search crawl
                  — spotLight.rotation.y animates: 0 → Math.PI * 2, looping, period 6s (ambient, not scroll-driven)
```

#### The Pathway System
```
Create 6–8 glowing pathways (tube geometry) that EMANATE from the building outward.
They look like fiber optic cables or search connections reaching into the distance.

Pathway Geometry: TubeGeometry along a CatmullRomCurve3
  Each tube: radius 0.03, tubularSegments 64, radialSegments 8
  Paths arc outward in different compass directions, then curve up or into the distance

Pathway Material: MeshBasicMaterial (unaffected by lighting — they self-illuminate)
  color: #00FF88
  OR: ShaderMaterial with animated texture to create a "data flowing" effect
  Simpler MVP approach: pulsing emissiveIntensity on MeshStandardMaterial (0.5 → 2.0 → 0.5 loop)

Pathway Draw Animation (scroll 40%–55%):
  Each pathway starts at dashOffset: 1.0 (fully hidden)
  Animates dashOffset: 1.0 → 0.0 (draws itself progressively)
  Use LineDashedMaterial for this effect on the edges
  Stagger each path by 0.3s

Searchlight Beams:
  Use 3 SpotLightHelper-style cone geometries (ConeGeometry, very narrow, 0.1 top radius)
  Material: MeshBasicMaterial, color #FFFFFF, opacity 0.03, transparent
  These represent search engine crawlers scanning the site
  Animate them: slowly panning side to side from top-down position
```

#### Text Overlay
```
CHAPTER LABEL:   "03 / THE CONNECTION"  [--color-muted → changes to #00FF88 in this scene]

STAT PILL:       [Appears left side, animate in]
                 "68% of all online experiences begin with a search engine"

MAIN HEADLINE:   [Bebas Neue, text-giant, --color-white]
                 "GET FOUND.
                 GET CLICKED.
                 GET PAID."

BODY TEXT:       [DM Sans, text-base, --color-off-white, max-w-[55ch]]
                 "We craft SEO-optimised content that speaks Google's language.
                 From keyword strategy to on-page structure, we make sure
                 your business appears when your customers are searching."

SERVICE TAGS:    ["SEO Strategy", "Keyword Research", "Content Writing", "Meta Optimisation", "Google Business"]

GLITCH SUBTEXT:  [--color-cyan, mono, text-sm]  
                 "> INDEXING amplifytoday.in... DONE"
                 "> RANK POSITION: CLIMBING..."
                 [typewriter animation effect — characters appear one by one]
```

#### Scroll Behavior within Scene 3 (40%–60%)
```
40%–45%:  Camera arrives at isometric position. Green ambient wash floods the scene.
           First pathway begins drawing from building outward.
45%–52%:  All 6–8 pathways draw progressively. Searchlight begins sweep.
52%–57%:  Text fully revealed. Scene holds. Pathways pulse rhythmically.
57%–60%:  Pathways begin converting to node connections for Scene 4 handoff.
           Camera begins rising (y: 6 → 8).
```

---

### SCENE 4 — "THE NETWORK"
**Scroll Range:** 60% – 80% | **Story Beat:** Presence. Rhythm. Community. Always posting.

#### 3D Environment
```
Camera Position:  [5, 8, 5]
Camera Target:    [0, 0, 0]
Camera FOV:       45  (tighter, more dramatic)
Background Color: #000000
Fog:              FogExp2, color #0A0500, density 0.015  (almost clear now)
Ambient Light:    intensity 0.7, color #1A0800
Point Light 1:    position [0, 5, 0], color #FF6B00, intensity 4.0  (warm orange core)
Point Light 2:    position [3, 3, -3], color #FF3300, intensity 2.0
Point Light 3:    position [-3, 3, 3], color #FF9900, intensity 2.0
```

#### Orbiting Nodes System
```
Create 16 nodes orbiting the central building in 3 orbital rings.

Ring 1 (inner):   4 nodes, orbital radius 3.0, Y offset 0.5
Ring 2 (middle):  6 nodes, orbital radius 5.0, Y offset -0.5
Ring 3 (outer):   6 nodes, orbital radius 7.0, Y offset 1.5

Node Geometry: SphereGeometry(0.2, 16, 16)
Node Material: MeshStandardMaterial
  color: #FF6B00
  roughness: 0.1
  metalness: 1.0
  emissive: #FF3300
  emissiveIntensity: 1.5

Node Pulse Animation (ambient loop, NOT scroll-driven):
  Scale oscillates: 1.0 → 1.4 → 1.0 over 1.5s (staggered per node)
  EmissiveIntensity oscillates: 1.5 → 3.0 → 1.5 (in sync with scale)
  Each node has a random phase offset so they pulse asynchronously

Connection Lines Between Nodes:
  Line segments connecting each node to its nearest 2 neighbours
  Material: LineBasicMaterial, color #FF6B00, opacity 0.3, transparent
  These lines pulse opacity in sync with node pulse

Node Label (Drei <Text>):
  Icons/labels on each node: "IG", "FB", "YT", "X", "LI", "WA", "G", "TK"
  (representing social platforms — Instagram, Facebook, YouTube, X, LinkedIn, WhatsApp, Google, TikTok)
  Font size: 0.12, color: #FF6B00

Building Core Change:
  The central building now has warm orange emissive:
  emissiveIntensity: 2.0 (glowing hub at center of everything)
```

#### Text Overlay
```
CHAPTER LABEL:   "04 / THE NETWORK"  [color: #FF6B00]

STAT PILL:       "India has 600M+ social media users. Your competitors are already there."
                 [border: 1px solid #FF6B00]

MAIN HEADLINE:   [Bebas Neue, text-giant, --color-white]
                 "YOUR BRAND,
                 EVERYWHERE
                 AT ONCE."

BODY TEXT:       [DM Sans, text-base, --color-off-white]
                 "Consistent, scheduled content across Instagram, Facebook, and beyond.
                 We manage your social presence so you can manage your business.
                 Stories. Reels. Posts. Every week. On autopilot."

SERVICE TAGS:    ["Instagram Management", "Facebook Pages", "Content Calendar", "Reels Production", "Community Replies"]

PULSING COUNTER: [Bebas Neue, text-5xl, --color-orange, animate number counting up]
                 "12 posts published this week for our clients"  
                 [The number counts up as user scrolls into this section]
```

#### Scroll Behavior within Scene 4 (60%–80%)
```
60%–65%:  Nodes burst into existence from building center, fly outward to orbital positions.
           Orange light floods in, replacing green.
65%–72%:  Nodes begin pulsing. Connection lines appear. Scene holds.
72%–78%:  Additional micro-nodes (smaller, 0.08 radius) appear — representing individual posts/content.
           They birth from the main nodes and drift outward before fading.
78%–80%:  Camera pulls back dramatically for Scene 5 — final reveal.
```

---

### SCENE 5 — "THE ALWAYS-ON HUB"
**Scroll Range:** 80% – 100% | **Story Beat:** Culmination. Glory. The invitation.

#### 3D Environment
```
Camera Position:  [10, 12, 10]  →  [15, 18, 15] over the course of scene (continues pulling back)
Camera Target:    [0, 0, 0]
Camera FOV:       40  (tight zoom as camera pulls back = more dramatic)
Background Color: #000000  (but stars appear — see Particle update below)
Fog:              FogExp2, color #000000, density 0.005  (nearly gone — cosmic clarity)
Ambient Light:    intensity 1.0, color #111111  (near-full ambient)
Point Light 1:    position [0, 3, 0], color #FFFFFF, intensity 8.0  (core white light — sun-like)
Point Light 2:    position [5, 5, 5], color #00F0FF, intensity 3.0
Point Light 3:    position [-5, 5, -5], color #FF6B00, intensity 3.0
PointLight core:  position [0, 0.5, 0], color #FFFFFF, intensity 20.0, distance 5, decay 2
                  — The building core itself is now a light source
```

#### The Full Reveal
```
All previous elements remain:
  - Building (now bright, white emissive core)
  - All 16 orbiting nodes (still pulsing, orange)
  - All pathways (green, reaching outward)
  - All 12 foundation blocks (locked in place, cyan)

New Elements Added:
  STAR FIELD:
    3000 points, positions random in [-100, 100] sphere
    PointsMaterial, color #FFFFFF, size 0.05
    These are the "customers" this business can now reach
    Slowly rotate as a whole field

  CORONA EFFECT:
    Around the building core, use @react-three/postprocessing Bloom:
    luminanceThreshold: 0.2
    luminanceSmoothing: 0.9
    intensity: 3.0
    mipmapBlur: true
    The building glows like a small sun

  OUTER RING:
    One large TorusGeometry(8, 0.05, 16, 100)
    Material: MeshBasicMaterial, color #00F0FF, opacity 0.4
    Slowly rotates on X axis: speed 0.001 rad/frame
    Represents the digital ecosystem surrounding the business
```

#### Text Overlay — THE CTA SECTION
```
CHAPTER LABEL:   "05 / THE ALWAYS-ON HUB"  [color: #FFFFFF]

STAT PILL:       "Businesses with full digital presence grow 2.8× faster"

MAIN HEADLINE:   [Bebas Neue, text-giant, --color-white, text-center]
                 "YOUR BUSINESS.
                 ONLINE.
                 AMPLIFIED."

BODY TEXT:       [DM Sans, text-lg, --color-off-white, text-center, max-w-[55ch], mx-auto]
                 "From zero online presence to a complete, automated,
                 always-on digital brand. This is what Amplify Today delivers."

BIG CTA BUTTON:  [Large, centered, no border-radius or very slight]
                 Background: #FF6B00
                 Text: "START YOUR GROWTH JOURNEY →"
                 Font: Syne Bold, text-xl, --color-white, uppercase, tracking-widest
                 Hover: background brightens to #FF8C00, slight scale(1.03)
                 On click: opens WhatsApp or contact form

SECONDARY CTA:   [Below primary, text link style]
                 Text: "SEE OUR WORK ↓"
                 Color: --color-cyan
                 Underline on hover

SOCIAL PROOF:    [3 micro-testimonials side by side — text-sm, --color-muted]
                 "Ankit's Bakery: 3× walk-ins in 60 days"
                 "Priya Boutique: First Instagram sale in Week 2"
                 "Ravi Auto: Now ranks #1 in Bangalore searches"

FOOTER LINE:     [text-xs, --color-muted, mono, text-center, mt-8]
                 "amplifytoday.in · hello@amplifytoday.in · Made in Bengaluru 🇮🇳"
```

#### Scroll Behavior within Scene 5 (80%–100%)
```
80%–85%:  Camera arrives at wide position. Full network visible. Star field fades in. Bloom activates.
85%–90%:  Torus ring rotates into view from below. CTA text rises up. Building core pulses white.
90%–95%:  Everything holds. Scene is at maximum radiance. CTA fully visible.
95%–100%: Subtle slow rotation of entire scene continues. Page "settles" — the journey is complete.
          CTA button gets a subtle pulsing scale animation (1.0 → 1.02 → 1.0, loop 2s)
```

---

## 06. GSAP SCROLLTRIGGER CONFIGURATION

```ts
// lib/gsapAnimations.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// MASTER SCROLL DRIVER
// This single ScrollTrigger drives a progress value 0→1
// that gets passed into the R3F canvas via a ref/context
export function initMasterScrollTrigger(onUpdate: (progress: number) => void) {
  ScrollTrigger.create({
    trigger: '#scroll-container',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.5,       // Lag behind scroll by 1.5s for cinematic feel
    onUpdate: (self) => {
      onUpdate(self.progress)
    }
  })
}

// SCENE-SPECIFIC TEXT REVEAL TRIGGERS
export function initTextReveals() {
  // Each .scene-headline gets a clip-path reveal
  gsap.utils.toArray('.scene-headline').forEach((el: any) => {
    gsap.fromTo(el,
      { clipPath: 'inset(100% 0 0 0)', y: 40, opacity: 0 },
      {
        clipPath: 'inset(0% 0 0 0)',
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Stat pills fly in from right
  gsap.utils.toArray('.stat-pill').forEach((el: any) => {
    gsap.fromTo(el,
      { x: 60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Service tags stagger in
  gsap.utils.toArray('.service-tag-group').forEach((group: any) => {
    gsap.fromTo(group.querySelectorAll('.tag'),
      { y: 20, opacity: 0 },
      {
        y: 0, opacity: 1,
        stagger: 0.07,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
}

// MARQUEE STRIP (permanent ambient scroll — not scroll-progress-driven)
export function initMarquee(selector: string) {
  const items = gsap.utils.toArray(selector) as HTMLElement[]
  gsap.to(items, {
    xPercent: -100,
    repeat: -1,
    duration: 30,
    ease: 'none',
    modifiers: {
      xPercent: gsap.utils.wrap(-100, 0)
    }
  })
}
```

---

## 07. REACT THREE FIBER — CAMERA RIG

```tsx
// components/canvas/shared/CameraRig.tsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { CAMERA_KEYFRAMES } from '@/lib/constants'
import * as THREE from 'three'

function lerpKeyframes(progress: number, keyframes: typeof CAMERA_KEYFRAMES) {
  const count = keyframes.length
  const scaled = progress * (count - 1)
  const index = Math.floor(scaled)
  const t = scaled - index
  const current = keyframes[Math.min(index, count - 1)]
  const next = keyframes[Math.min(index + 1, count - 1)]
  
  return {
    position: new THREE.Vector3(...current.position).lerp(new THREE.Vector3(...next.position), t),
    target: new THREE.Vector3(...current.target).lerp(new THREE.Vector3(...next.target), t),
    fov: THREE.MathUtils.lerp(current.fov, next.fov, t)
  }
}

export function CameraRig() {
  const scrollProgress = useScrollProgress()
  
  useFrame((state) => {
    const { position, target, fov } = lerpKeyframes(scrollProgress, CAMERA_KEYFRAMES)
    
    // Smooth damping — camera doesn't snap, it glides
    state.camera.position.lerp(position, 0.05)
    // @ts-ignore
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, fov, 0.05)
    state.camera.updateProjectionMatrix()
    state.camera.lookAt(target)
    
    // Subtle ambient drift — never fully still, like breathing
    const time = state.clock.getElapsedTime()
    state.camera.position.y += Math.sin(time * 0.5) * 0.02
    state.camera.position.x += Math.cos(time * 0.3) * 0.01
  })
  
  return null
}
```

---

## 08. POST-PROCESSING PIPELINE

```tsx
// components/canvas/PostProcessing.tsx
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import * as THREE from 'three'

export function PostProcessing() {
  const progress = useScrollProgress()
  
  // Bloom intensity scales with scene — most intense in Scene 5
  const bloomIntensity = THREE.MathUtils.lerp(0.3, 3.0, progress)
  // Chromatic aberration strongest in Scene 1 (glitchy offline world) → fades out
  const chromaticOffset = THREE.MathUtils.lerp(0.005, 0.0005, progress)
  
  return (
    <EffectComposer>
      <Bloom
        luminanceThreshold={0.2}
        luminanceSmoothing={0.9}
        intensity={bloomIntensity}
        mipmapBlur
      />
      <ChromaticAberration
        offset={new THREE.Vector2(chromaticOffset, chromaticOffset)}
        blendFunction={BlendFunction.NORMAL}
        radialModulation={false}
        modulationOffset={0}
      />
      <Noise
        opacity={0.03}
        blendFunction={BlendFunction.ADD}
      />
      <Vignette
        offset={0.3}
        darkness={0.6}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  )
}
```

---

## 09. THE SCENECONTROLLER (Main Canvas)

```tsx
// components/canvas/SceneController.tsx
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { CameraRig } from './shared/CameraRig'
import { ParticleField } from './shared/ParticleField'
import { BuildingGeometry } from './shared/BuildingGeometry'
import { PostProcessing } from './PostProcessing'
import { useScrollProgress } from '@/hooks/useScrollProgress'

export function SceneController() {
  const progress = useScrollProgress()
  
  return (
    <Canvas
      className="canvas-fixed"
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }}
      shadows
      camera={{ position: [2, 3, 8], fov: 55, near: 0.1, far: 500 }}
      dpr={[1, 2]}  // Responsive pixel ratio — caps at 2 for performance
      style={{ background: '#000000' }}
    >
      <Suspense fallback={null}>
        <CameraRig />
        <ParticleField scrollProgress={progress} />
        <BuildingGeometry scrollProgress={progress} />
        {/* Scene-specific elements controlled by scrollProgress */}
        <PostProcessing />
        {/* Fog */}
        <fogExp2 attach="fog" color="#000000" density={Math.max(0.005, 0.08 - progress * 0.075)} />
      </Suspense>
    </Canvas>
  )
}
```

---

## 10. DIE ANTWOORD-INSPIRED UI ELEMENTS

### 10.1 Navbar
```tsx
// Behaviour: transparent initially, stays fixed, no background even on scroll
// Pure minimalism — just text links, no hamburger menu on desktop

Structure:
  <nav> [position: fixed, top-0, w-full, z-50, mix-blend-mode: difference OR normal]
    Left: AMPLIFY TODAY  [Bebas Neue, text-xl, letter-spacing: 0.15em, --color-white]
    Right: [WORK] [SERVICES] [ABOUT] [START →]
           All uppercase, DM Sans 500, text-sm, tracking-widest
           Hover: --color-cyan underline slide-in from left
           "START →": --color-orange, no border, background-free
```

### 10.2 MarqueeStrip (Die Antwoord Ticker equivalent)
```tsx
// A full-width horizontal scrolling text strip
// Appears between Scene 1 and Scene 2 as a visual separator

Content: 
  "WEBSITE ✦ SEO ✦ INSTAGRAM ✦ GOOGLE ADS ✦ HOSTING ✦ DOMAIN ✦ GROWTH ✦ "
  (repeat 4 times to fill the strip)

Style:
  Background: #FF6B00 (full orange strip)
  Text: --color-void (black text ON orange — maximum contrast)
  Font: Bebas Neue, text-xl, tracking-[0.2em]
  Height: 48px
  z-index: 20 (above canvas)
  Position: sticky at scene boundaries

Animation: gsap marquee, continuous scroll leftward, speed: duration 25s, ease: 'none', repeat: -1
```

### 10.3 DividerLine (SVG Separator)
```tsx
// Full-width horizontal SVG divider — Die Antwoord uses thick decorative horizontal lines
// between sections

Design: A jagged, slightly irregular horizontal line
SVG implementation:
  <svg viewBox="0 0 1440 8" preserveAspectRatio="none" width="100%" height="8">
    <path d="M0,4 L360,2 L720,6 L1080,2 L1440,4" 
          stroke="#FF6B00" strokeWidth="2" fill="none" opacity="0.6"/>
    <path d="M0,4 L1440,4" 
          stroke="#FFFFFF" strokeWidth="0.5" fill="none" opacity="0.2"/>
  </svg>
```

### 10.4 GlitchText Component
```tsx
// Text that visually "glitches" — horizontal displacement, color channels split
// Used for the "ERROR_404" text in Scene 1

CSS Animation keyframes:
@keyframes glitch {
  0%   { text-shadow: 2px 0 #00F0FF, -2px 0 #FF6B00; transform: translateX(0) }
  25%  { text-shadow: -3px 0 #00F0FF, 3px 0 #FF6B00; transform: translateX(2px) }
  50%  { text-shadow: 3px 0 #00F0FF, -3px 0 #FF6B00; transform: translateX(-1px) }
  75%  { text-shadow: -2px 0 #00F0FF, 2px 0 #FF6B00; transform: translateX(1px) }
  100% { text-shadow: 2px 0 #00F0FF, -2px 0 #FF6B00; transform: translateX(0) }
}

.glitch-text {
  animation: glitch 0.3s infinite;
  animation-play-state: paused;  /* Only plays on hover or trigger */
  font-family: var(--font-mono);
  color: var(--color-cyan);
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

/* Trigger: plays for 2s on scroll-enter, then stops */
```

### 10.5 StickerDecal
```tsx
// Floating PNG images placed freely across the page — Die Antwoord's signature
// These are NOT inside containers — they float over everything

Sticker List:
  1. arrow_up.png     — top-right of Scene 2, rotated 15°, scale 80px
  2. wifi_signal.png  — left side of Scene 3, rotated -8°, scale 60px
  3. growth_chart.png — right side of Scene 4, rotated 5°, scale 90px
  4. star_burst.png   — scattered in Scene 5 × 3 copies at different sizes

Sticker Style:
  position: absolute
  pointer-events: none
  z-index: 15
  filter: drop-shadow(0 0 8px rgba(255,107,0,0.5))

Sticker Animation (framer-motion):
  initial: { opacity: 0, scale: 0.7, rotate: [original + 10] }
  whileInView: { opacity: 1, scale: 1, rotate: [original] }
  transition: { type: 'spring', stiffness: 120, damping: 12, delay: 0.2 }
  Subtle ambient: each sticker has a continuous y-oscillation ±8px over 4s (framer-motion animate)
```

### 10.6 StatPill
```tsx
// Floating stat bubbles that appear in scroll sections
// Inspired by Die Antwoord's floating SVG label elements

Style:
  display: inline-flex
  padding: 0.5rem 1.25rem
  border: 1px solid var(--color-cyan)  /* or --color-orange depending on scene */
  background: rgba(0, 240, 255, 0.05)
  backdrop-filter: blur(4px)
  font-family: var(--font-mono)
  font-size: var(--text-xs)
  color: var(--color-cyan)
  letter-spacing: 0.15em
  text-transform: uppercase

Animation:
  Framer Motion: initial opacity 0, x: 30
  whileInView: opacity 1, x: 0
  transition: duration 0.5, ease "easeOut", delay 0.4
```

---

## 11. LOADING SCREEN

```tsx
// components/ui/LoadingScreen.tsx
// This shows while Three.js / GLTF models load

Design:
  Background: #000000 fullscreen
  Center: AMPLIFY TODAY logotype [Bebas Neue, text-4xl, --color-white, tracking-[0.3em]]
  Below: Loading bar — a thin 2px line that fills left to right
    Track: --color-smoke
    Fill: --color-cyan, animated width 0% → 100%
  Below bar: [mono, text-xs, --color-muted] "INITIALISING DIGITAL EVOLUTION..."

Behavior:
  useProgress() from @react-three/drei gives actual load progress 0–100
  When progress hits 100%, fade out LoadingScreen with framer-motion: opacity 0, duration 0.8
  Then remove from DOM via conditional render

CSS:
  .loading-screen {
    position: fixed; inset: 0; z-index: 100;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: #000000;
  }
```

---

## 12. MOBILE STRATEGY

Mobile gets a **simplified 3D scene** (reduced geometry, no postprocessing) + the same narrative text flow.

```tsx
// Detection: useMediaQuery('(max-width: 768px)') or window.innerWidth

Mobile Adjustments:
  - Canvas dpr: [1, 1]  (no high-DPI on mobile for performance)
  - Particle count: halved (150, 400 instead of 300, 800)
  - PostProcessing: DISABLED entirely on mobile (biggest performance win)
  - OrbitControls: disabled (no touch-rotate — scroll only)
  - Shadows: disabled (receiveShadow and castShadow all false)
  - Node orbit count: 8 instead of 16
  - Pathway tubes: 4 instead of 8
  - Text overlays: stack vertically, font-size scaled via clamp()

Mobile Font Sizes:
  --text-giant on mobile: clamp(2.5rem, 12vw, 5rem)  (not 14rem — too big for 390px)

Mobile Layout:
  Text overlays: bottom of screen, left-aligned
  Stat pills: hidden on mobile to avoid clutter
  Sticker decals: all hidden on mobile (z-index 0, display none)

Performance Minimum Target:
  60fps on desktop Chrome (M1/Intel)
  30fps stable on mid-range Android (Snapdragon 7xx)
  Use React.Suspense + lazy loading for all R3F components
```

---

## 13. NEXT.JS CONFIGURATION

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,       // Memoization auto-applied — critical for R3F
  },
  webpack: (config) => {
    // Handle GLTF and GLSL files
    config.module.rules.push(
      { test: /\.(glb|gltf)$/, use: 'file-loader' },
      { test: /\.(glsl|vs|fs|vert|frag)$/, use: 'raw-loader' }
    )
    return config
  }
}

module.exports = nextConfig
```

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)'],
        syne: ['var(--font-syne)'],
        dm: ['var(--font-dm)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        void: '#000000',
        abyss: '#080808',
        charcoal: '#121212',
        ash: '#1E1E1E',
        cyan: '#00F0FF',
        'cyan-dim': '#00A8B5',
        orange: '#FF6B00',
        'orange-dim': '#C45200',
      },
      animation: {
        glitch: 'glitch 0.3s infinite',
        float: 'float 4s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-1px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
}

export default config
```

---

## 14. EXACT PAGE ASSEMBLY (`app/page.tsx`)

```tsx
// app/page.tsx
// This is the single page — all 5 scenes + their overlays

export default function HomePage() {
  return (
    <main id="scroll-container" style={{ height: '1250vh', position: 'relative' }}>
      
      {/* FIXED: The 3D canvas — stays in place, scroll drives it */}
      <SceneController />
      
      {/* FIXED: Navbar — always on top */}
      <Navbar />
      
      {/* Loading screen — conditional, removed when assets loaded */}
      <LoadingScreen />
      
      {/* SCROLLABLE HTML OVERLAY SECTIONS */}
      {/* Each section is 250vh tall — contains sticky overlay */}
      
      <section className="scene-section" style={{ height: '250vh' }} data-scene="1">
        <HeroSection />
      </section>
      
      {/* Die Antwoord-style full-width orange marquee strip between scenes */}
      <MarqueeStrip />
      
      <section className="scene-section" style={{ height: '250vh' }} data-scene="2">
        <FoundationSection />
      </section>
      
      <DividerLine />
      
      <section className="scene-section" style={{ height: '250vh' }} data-scene="3">
        <ConnectionSection />
      </section>
      
      <DividerLine />
      
      <section className="scene-section" style={{ height: '250vh' }} data-scene="4">
        <NetworkSection />
      </section>
      
      <DividerLine />
      
      <section className="scene-section" style={{ height: '250vh' }} data-scene="5">
        <HubSection />
      </section>
      
    </main>
  )
}
```

---

## 15. PAGE METADATA & SEO

```tsx
// app/layout.tsx
export const metadata = {
  title: 'Amplify Today | Digital Growth for Indian Businesses',
  description: 'Website design, SEO, social media management & digital marketing for small businesses in India. Get found online. Grow faster.',
  keywords: 'website design india, seo bangalore, social media management, digital marketing small business india, amplify today',
  openGraph: {
    title: 'Amplify Today — Your Business. Online. Amplified.',
    description: 'We take offline businesses and make them explode online. Website, SEO, Instagram, Google — everything handled.',
    url: 'https://amplifytoday.in',
    siteName: 'Amplify Today',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amplify Today — Digital Growth for India',
    description: 'Website + SEO + Social + Growth. All handled.',
    images: ['/og-image.jpg'],
  },
  themeColor: '#FF6B00',
  viewport: 'width=device-width, initial-scale=1',
}
```

---

## 16. PERFORMANCE BENCHMARKS & TARGETS

```
Lighthouse Score Targets (desktop):
  Performance:    ≥ 85
  Accessibility:  ≥ 90
  Best Practices: ≥ 90
  SEO:            ≥ 95

Three.js Draw Calls: < 80 per frame (keep geometry merged where possible)
Triangle Count: < 50,000 total in frame
Texture Memory: < 128MB
JavaScript Bundle: < 800KB gzipped (Three.js is large — tree-shake aggressively)

WebGL Context: powerPreference: 'high-performance'
               antialias: true (desktop), false (mobile)
               logarithmicDepthBuffer: true (prevents z-fighting)
```

---

## 17. DEPLOYMENT

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel (recommended)
npx vercel --prod

# Vercel project settings:
# Framework: Next.js
# Node.js version: 20.x
# Build command: npm run build
# Output: .next (auto-detected)
# Region: sin1 (Singapore — closest to India for low latency)

# Environment Variables needed:
# NEXT_PUBLIC_SITE_URL=https://amplifytoday.in
# (Add analytics IDs when ready)
```

---

## 18. AESTHETIC RULES — "THE DIE ANTWOORD TRANSLATION"

Die Antwoord's site energy translated into Amplify Today design rules:

| Die Antwoord Original | Amplify Today Translation |
|---|---|
| Pure black background (#000) | Pure black void — canvas AND page |
| #FF5E00 orange theme color | #FF6B00 neon orange — CTAs, energy, action |
| Massive all-caps display type | Bebas Neue all-caps for every headline |
| Sticker/cutout PNGs floating free | Arrow, WiFi, chart stickers floating over canvas |
| Character portrait cards | None (service brand, not people brand yet) |
| Full-bleed photography | Full-bleed 3D canvas replacing photography |
| SVG torn-paper dividers | Jagged SVG horizontal dividers between scenes |
| Marquee text strip | Orange/black marquee listing all services |
| "LORE", "TOUR", "SHOP" in nav | "WORK", "SERVICES", "ABOUT", "START" in nav |
| Social links as pure text URLs | Social links in footer, clean, no icons |
| Anarchic, chaotic layout | Controlled chaos — Die Antwoord's ORDER within chaos |
| Orange as excitement | Orange CTA button — one clear action per scene |
| White on black — brutal contrast | Same. Never invert. Never use dark text on light bg. |
| Multiple visual layers at once | 3D + HTML overlay + stickers + particles = depth |
| Energy that doesn't apologize | Copy is confident: "GET FOUND. GET CLICKED. GET PAID." |

---

## 19. COPY VOICE GUIDE

All text on this site should feel written by someone who:
- Has seen too many businesses fail online and is fed up
- Knows the solution and delivers it without hedging
- Speaks to small business owners in plain, punchy English
- Never uses words like "synergy", "leverage", "ecosystem"
- Ends sentences early. Like this.

**DO write:**
- "Your customers can't find you."
- "We fix that. Fast."
- "Most businesses lose 9 in 10 customers before first contact."
- "Get found. Get clicked. Get paid."

**DO NOT write:**
- "We leverage cutting-edge digital strategies to amplify your brand's online presence."
- "Our holistic approach to digital transformation ensures..."
- "Solutions tailored to your unique business needs"
- "Let's connect and explore synergies"

---

## 20. SUMMARY CHECKLIST FOR INITIAL BUILD

```
□ Next.js 14 app initialized with TypeScript, Tailwind, App Router
□ All npm packages installed (Three.js stack, GSAP, Framer Motion)
□ globals.css has all CSS custom properties (colors, type scale)
□ Tailwind config extends with brand colors and custom animations
□ next.config.js has reactCompiler enabled, GLTF webpack rule
□ Layout.tsx has all 4 fonts loaded via next/font
□ SceneController.tsx renders the fixed Canvas
□ CameraRig.tsx lerps between CAMERA_KEYFRAMES based on scroll
□ useScrollProgress hook returns 0–1 value
□ ParticleField renders and adjusts count by scroll progress
□ BuildingGeometry switches material/emissive by scroll progress
□ Scene 1: dim storefront, cold blue light, dense fog, ERROR_404 text
□ Scene 2: 12 blocks fall with bounce.out easing, cyan highlight
□ Scene 3: 6–8 pathways draw from building, sweeping spotlight
□ Scene 4: 16 nodes orbit and pulse, warm orange light floods
□ Scene 5: camera pulled back, star field, bloom at max, CTA live
□ PostProcessing: Bloom, ChromaticAberration, Noise, Vignette — scroll-reactive
□ MarqueeStrip between scenes (orange bg, black text, GSAP scroll)
□ DividerLine SVG between sections
□ GlitchText component working with CSS keyframes
□ StickerDecal components floating over canvas (4 stickers)
□ StatPill bubbles in each scene
□ Navbar: fixed, transparent, Bebas Neue brand name left, nav links right
□ LoadingScreen: shows during asset load, fades out on complete
□ Mobile: postprocessing OFF, particles halved, font sizes clamped
□ Metadata complete in layout.tsx
□ Vercel deployment tested on staging URL
```

---

*End of MVP Build Prompt. Every decision above is intentional and locked in. Build this exactly as specified. The soul of this site is: raw digital power, controlled chaos, scroll-driven revelation, maximum contrast, zero apology.*

**Build tool:** Antigravity IDE  
**Deployment:** Vercel  
**Client:** amplifytoday.in  
**Vibe:** dieantwoord.com meets Three.js meets Indian digital disruption
