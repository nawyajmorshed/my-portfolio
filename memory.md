# 🧠 Project Memory: Nawyaj Morshed Portfolio

**Last Updated:** 2026-09-27  
**Project Domain:** [nawyajmorshed.me](https://nawyajmorshed.me)  
**Target Repository:** [github.com/nawyajmorshed/my-portfolio](https://github.com/nawyajmorshed/my-portfolio)  
**Owner:** Nawyaj Morshed (`nawyajmorshed2000@gmail.com`)

---

## 1. Project Overview & Identity

This project is a high-performance, cinematic, interactive portfolio engineered for **Nawyaj Morshed**, published under the custom domain **`nawyajmorshed.me`**.

This project is engineered as an elite creative web platform featuring state-of-the-art interactive web technologies:
- **100% Pure Static Architecture:** Git-driven, zero backend dependencies, ultra-fast 0ms database latency, and instant global edge delivery.
- 100vw × 100vh full-page horizontal scene navigation with inertial scroll and gesture controls.
- Refractive liquid glassmorphism with dynamic ambient lighting.
- Interactive HTML5 Canvas particle constellation with mouse proximity physics.
- 3D Coverflow project showcases featuring your 6 flagship projects.
- Elastic accordion career and education timeline.
- Dynamic accent color theming engine with instant CSS injection.
- Cloudflare Pages / GitHub Pages edge deployment.

> **Zero-Shortcuts Directive:** Every feature, visual effect, interaction layer, and data structure must be built with production-grade modularity, clean architecture, and enhanced aesthetics tailored specifically for Nawyaj Morshed.

---

## 2. System Architecture & Technical Specifications

The codebase architecture comprises the following component and data structure:

### 2.1 File & Directory Map
```tree
├── apps.html                # Standalone Web Applications Showcase
├── CNAME                    # Custom domain mapping (nawyajmorshed.me)
├── index.html               # Main Public Portfolio (Single-Page Scenes)
├── package.json             # Dev dependencies and scripts
├── wrangler.toml            # Cloudflare Pages edge deployment configuration
│
├── assets/
│   ├── css/
│   │   └── styles.css       # Core design tokens, glassmorphism, 3D transforms, animations
│   │
│   ├── images/              # Profile portraits, favicons, project previews
│   │
│   └── js/
│       ├── ambient-glow.js  # Dynamic radial mouse-tracking glow
│       ├── apps-page.js     # Showcase logic for standalone apps
│       ├── liquid-metal.js  # Shader-based liquid metal border on navigation bar
│       ├── mobile-layout.js # Dynamic responsive viewport & layout adjustments
│       ├── nav.js           # Navigation links, indicator pill glider, active scene observer
│       ├── particles-bg.js  # Interactive HTML5 Canvas particle constellation engine
│       ├── preloader.js     # Staggered typography entrance preloader
│       ├── render-content.js# Public data fetching & DOM hydration from structured static data
│       ├── scene-animations.js # GSAP timeline entrance animations per scene
│       ├── scene-nav.js     # Cinematic scene paging & scroll-lock coordinator
│       ├── tailwind-config.js # Custom Tailwind color palettes, radii & fonts
│       └── work-tabs.js     # Category tab switching & glider animation
```

### 2.2 Scene Inventory
1. **Scene 1: Hero (`#hero`)**
   - Status badge ("Available for Opportunities" / customizable).
   - Large headline with gradient accent highlight.
   - Dynamic bio showcasing Full-Stack, Mobile, AI, and 3D graphics expertise.
   - Primary CTAs: "Download Resume", "Browse Apps" / Portfolio links.
   - Floating avatar frame with refractive glass border and ambient back-glow.
   - Social link icon cluster (GitHub, LinkedIn, Twitter/X, Email, etc.).
2. **Scene 2: About (`#about`)**
   - Professional narrative & background at BUBT (CSE).
   - 2-column balanced personal data cards (Full Name, Location, Degree, Availability, etc.).
3. **Scene 3: Work / Projects (`#work`)**
   - Multi-category tab switcher (Mobile Apps, Web Platforms, AI & Systems).
   - 3D Coverflow carousel with mathematical perspective transformation (`translateX`, `scale`, `rotateY`, `opacity`, `zIndex`).
   - Project cards featuring tags, live demo links, source code links, and modal expanders for all 6 flagship projects.
4. **Scene 4: Skills (`#skills`)**
   - Categorized skills matrix (Mobile Development, Web Technologies, AI/ML, Interactive 3D & Tools).
   - Refractive glass cards with icon visualizers and hover glow.
   - Fixed bottom marquee band (`#floating-chips`) with continuous infinite ticker drift.
5. **Scene 5: Experience & Education (`#experience`)**
   - Elastic accordion gallery expanding on hover/focus.
   - Organization, role, timeline duration, accomplishments, and tech badges.
6. **Scene 6: Testimonials & Recommendations (`#testimonials`)**
   - Client feedback, reviews, star ratings, and platforms.
   - Multi-tab coverflow carousel with client avatars and quotes.
7. **Scene 7: Contact & Footer (`#contact`)**
   - Refractive contact container.
   - Interactive 4-color Gmail hover CTA button with SVG contour patterns and expanding radial gradient.
   - Social links and copy-email interaction.
   - Integrated footer with back-to-top button and copyright notice.

### 2.3 Static Data Engine & Theming
- **Structured Static Store:** `render-content.js` contains clean, strongly-typed data objects detailing your real projects, skills, education, and social links.
- **Dynamic Theming:** Instant CSS variable injection (`--primary-container`, `--accent-rgb`) with `localStorage` caching to prevent any flash of unstyled content (FOUC).
- **Background Switcher:** Toggle between particle physics, custom video backgrounds, and ambient static wallpapers directly from the top-right floating controller.

---

## 3. Technology Stack & Design System Specifications

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Markup** | HTML5 Semantic | Accessible, SEO-optimized structure with OpenGraph & Twitter Cards |
| **Styling** | Tailwind CSS CDN + Custom Vanilla CSS (`styles.css`) | Design token system, glassmorphism, 3D transforms |
| **Typography** | [Geist](https://fonts.google.com/specimen/Geist), [Outfit](https://fonts.google.com/specimen/Outfit), [Material Symbols](https://fonts.google.com/icons) | Sleek modern tech aesthetics |
| **Animations** | GSAP 3.12, HTML5 Canvas 2D, CSS3 GPU Transitions | 60fps cinematic micro-interactions & particle constellation |
| **Data Architecture** | Pure Static Git-driven | Zero backend latency, 100% reliable, zero maintenance |
| **Hosting & DNS** | Cloudflare Pages / GitHub Pages (`CNAME: nawyajmorshed.me`) | Ultra-fast worldwide edge delivery |

---

## 4. Discovered Local Projects & Developer Profile (From PC Research)

### 4.1 Developer Profile
- **Name:** Nawyaj Morshed
- **Education:** B.Sc. in Computer Science & Engineering (CSE) at Bangladesh University of Business & Technology (BUBT), Dhaka, Bangladesh
- **Focus Areas:** Full-Stack Web Development, Mobile Engineering (Flutter/Android), AI/LLM Systems, Interactive 3D Graphics
- **Email:** `nawyajmorshed2000@gmail.com`
- **GitHub:** `https://github.com/nawyajmorshed`
- **Domain:** `nawyajmorshed.me` (Registered via Namecheap)
- **Git Push Access:** Confirmed active and persistent via Windows Credential Manager (`LegacyGeneric:target=git:https://github.com` for user `nawyajmorshed`).

### 4.2 Verified Flagship Projects on PC
1. **Ever Green (`com.evergreen.health` - Production Telemedicine Mobile Platform)**
   - **Type:** Real-world Production Healthcare & Telemedicine Application for Evergreen Homeo Hall (~700,000 community followers, engineered for 20,000–40,000 messages/day).
   - **Tech Stack:** Flutter 3.41 (targetSdk 36 / Android 16), Riverpod, GoRouter, Supabase PostgreSQL, WebRTC / Agora video-audio calls, SQLCipher / SQLite WAL mode offline message store, SPKI certificate pinning, Google Play Integrity & Firebase App Check.
   - **Highlights:** WhatsApp-grade realtime chat with cursor pagination (`(created_at, id)` composite cursor), bidirectional voice notes with slide-to-lock/cancel, full-screen incoming native call alerts (`fullScreenIntent` with custom ringtone/vibration), live patient queue triage, offline-first SQLite synchronization, and bilingual English & Bangla interfaces.
2. **Ever Green Website (Healthcare Marketing & Consultation Platform)**
   - **Type:** Bilingual Production Web Platform for Evergreen Homeo Hall
   - **Tech Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Lucide React, self-hosted Inter + Hind Siliguri typography.
   - **Highlights:** Bilingual live English ⇄ বাংলা toggle with strongly-typed translation dictionary, class-based dark mode with zero-flash anti-FOUC script, custom motion architecture (`IntersectionObserver` + `requestAnimationFrame`), consultation booking flows, and WhatsApp deep integration.
3. **CampusOne (Android Mobile Ecosystem) & FixIt (Web Platform)**
   - **Type:** University Capstone Project & Campus Companion for BUBT
   - **Tech Stack:** Android (Kotlin/Java/Flutter), React + Vite + Tailwind JS (Web), Supabase (PostgreSQL, Auth, RLS)
   - **Highlights:** Full Android release APK built (`CampusOne-release.apk`). Real-time campus issue/maintenance tracking, Lost & Found with proof verification, peer-to-peer student marketplace, campus ride sharing, blood donation network, study hub, club directory, and event management.
4. **Tahbil (Offline-First Expense Tracker for Android)**
   - **Type:** Personal Finance & On-Device AI App ("Every taka, tracked")
   - **Tech Stack:** Flutter, Dart 3, Riverpod, Drift (SQLite), Google ML Kit on-device OCR, fl_chart, Clean Architecture
   - **Highlights:** Zero internet permission required (100% private), camera receipt OCR extraction (merchant, items, taka amount), automated categorization, bilingual support (English & Bangla).
5. **Havzero (AI Assistant & LLM Platform)**
   - **Type:** Generative AI & Fine-Tuned Model Ecosystem
   - **Tech Stack:** Python, Unsloth LLM fine-tuning, Cloudflare Tunnels (`cloudflared`), custom training pipelines, high-conversion landing page.
6. **3D Racing Game - Open World Edition**
   - **Type:** Interactive 3D Simulation & Game Engine
   - **Tech Stack:** Python, Modern OpenGL (Core Profile 3.3+), PyOpenGL, Pygame, NumPy, GLSL custom shaders
   - **Highlights:** Multi-kilometer chunk-based terrain streaming, custom vehicle physics engine (acceleration, friction, LERP steering, terrain grip), Phong lighting, atmospheric fog, and dynamic follow camera.

---

## 5. Domain & Hosting Architecture (`nawyajmorshed.me`)

The domain `nawyajmorshed.me` is registered with **Namecheap**.

### Recommended Hosting: Cloudflare Pages (Top Choice)
- **Cost:** 100% Free Forever
- **Speed:** Worldwide edge deployment across 300+ global locations with zero latency.
- **Git Continuous Deployment (CI/CD):** Connects directly to `https://github.com/nawyajmorshed/my-portfolio.git`. Every `git push` automatically builds and deploys live in ~20 seconds.
- **SSL / HTTPS:** Automatic enterprise-grade SSL certificates handled at the edge without manual renewal.
- **DNS Setup with Namecheap:**
  - Option A: Point Namecheap custom DNS / nameservers to Cloudflare (best speed and DDoS protection).
  - Option B: Add a `CNAME` record in Namecheap Advanced DNS pointing `@` and `www` to your Cloudflare Pages URL (`<project>.pages.dev`).

### Alternative Hosting: GitHub Pages
- **Cost:** 100% Free
- **Integration:** Directly uses repository `CNAME` file.
- **DNS Setup with Namecheap:**
  - In Namecheap Advanced DNS: Add 4 `A` Records for `@` pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`), and one `CNAME` Record for `www` pointing to `nawyajmorshed.github.io`.
