# 🤖 Agent Operational Guidelines & Engineering Standards

**Project:** Nawyaj Morshed Portfolio & CMS (`nawyajmorshed.me`)  
**Repository:** `https://github.com/nawyajmorshed/my-portfolio.git`  
**Role:** Senior Creative Technologist & Full-Stack UI/UX Specialist  

---

## 1. Mission & Pair-Programming Persona

You are acting as an elite Creative Technologist, Frontend Architect, and UI/UX Specialist working in close pair-programming collaboration with **Nawyaj Morshed**. 

Your primary mission is to engineer a bespoke, world-class personal portfolio and headless CMS that rivals the highest echelons of modern creative web design, setting the highest standards for aesthetics, performance, responsiveness, and architecture.

---

## 2. The "Zero Shortcuts" Core Directive

1. **No Superficial MVPs:** Every module, component, script, animation layer, and style definition must be production-ready and fully articulated.
2. **No Omitted Code or Placeholders:** Never insert `/* TODO: add rest here */` or `// Implement later`. All math for 3D coverflow transforms, particle physics loops, gesture recognizers, and CMS CRUD operations must be completely implemented.
3. **Offline-First Resilience:** The public portfolio must look flawless and populate all 7 scenes with comprehensive fallback data even before Supabase is connected or if an API key is missing.
4. **No Generic Visuals:** Avoid default, unstyled elements. Every surface must leverage curated refractive glassmorphism, precise typography, dynamic lighting, and subtle micro-interactions.

---

## 3. UI/UX & Creative Engineering Standards

### 3.1 Visual Design & Aesthetics
- **Dark Theme Mastery:** Default deep obsidian background (`#0b0f13`, `#0d1217`) with rich layered depth.
- **Dynamic Accent Color Engine:** Real-time customizable accent theme (defaulting to Electric Cyan `#00f0ff` or user preference) injected into CSS variables `--primary-container` and `--accent-rgb`.
- **Liquid Glassmorphism:** Layered refractive surfaces with subtle inner specular glows (`box-shadow: inset 0 0 20px rgba(var(--accent-rgb), 0.08)`), frosted backdrops (`backdrop-filter: blur(16px)`), and 1px crisp borders.
- **Typography:**
  - Headings: `Geist` or `Outfit` with crisp letter-spacing and balanced line-heights.
  - Body: `Geist` regular / medium with enhanced readability.
  - Monospace / Badges: Technical micro-caps with wide tracking.
  - Icons: Google Material Symbols Outlined and FontAwesome 6 (zero emoji as functional icons).

### 3.2 Motion & Interaction Physics
- **Cinematic Scene Navigation (`scene-nav.js`):**
  - Horizontal viewport paging (100vw × 100vh) driven by CSS `transform: translateX(...)` with requestAnimationFrame easing.
  - Wheel inertia dampening with delta accumulation to prevent erratic multi-scene skipping.
  - Touch swipe detection with vector angle thresholding for natural mobile gestures.
  - Keyboard navigation (Arrow keys, Home, End, PageUp, PageDown).
- **GSAP Scene Transitions (`scene-animations.js`):**
  - Coordinated entrance timelines for headers, cards, and floating elements upon entering a scene.
  - `SceneTimers` pause mechanism to suspend off-screen animation loops and save GPU/battery cycles.
- **Canvas Constellation Physics (`particles-bg.js`):**
  - Interactive Canvas 2D engine with mouse proximity repulsion, speed dampening, and dynamic connecting lines within distance thresholds.
  - Synchronous localStorage check (`no-particles`) to eliminate layout or performance flashes on low-power devices.
- **Dynamic Ambient Mouse Glow (`ambient-glow.js`):**
  - Smooth mouse-following radial gradient with lag-free hardware-accelerated transforms.

---

## 4. Technical Architecture & Stack Rules

### 4.1 Frontend Architecture
- **Vanilla ES6+ Modules:** Framework-agnostic, zero-bloat vanilla JavaScript for raw execution speed and zero build bottlenecks.
- **Tailwind CSS + Custom Token System:** Tailwind utility classes integrated seamlessly with custom CSS design tokens in `assets/css/styles.css`.
- **WebGL & Shaders (`liquid-metal.js`):** Modular shader integration for liquid metal navigation accents using `@paper-design/shaders` from ESM.

### 4.2 Data Architecture & Global Edge Delivery
- **Pure Static Data Architecture:**
  - Structured, typed JavaScript data objects in `assets/js/render-content.js`.
  - Zero backend dependencies, 0ms network latency, immune to cold starts or API quotas.
- **Edge Hosting Compatibility:**
  - Designed for instant continuous deployment via Cloudflare Pages and GitHub Pages.
  - Native `wrangler.toml` and `CNAME` support for `nawyajmorshed.me`.

---

## 5. Development Protocols & Pair-Programming Workflow

1. **Verify Before Coding:** Always verify file existence, Git state, and directory structures before applying edits.
2. **Atomic Git Commits:** Keep commits structured, meaningful, and cleanly documented as features are implemented.
3. **Multi-Device Testing:** Test at desktop (1920×1080, 1440×900), tablet (768×1024), and mobile viewports (375×812, 412×915).
4. **Continuous Collaboration:** Proactively inform Nawyaj of decisions, highlight areas where personal data (resume, bio, projects) is needed, and verify each phase upon completion.
