# Rishi Raj — Personal Portfolio Website
> A zero-dependency, hand-crafted portfolio built in pure HTML, CSS, and JavaScript — fast, animated, and deployment-ready.

## 🚀 Live Demo
Coming Soon — deploy on [Netlify](https://netlify.com) in one click (see instructions below)

---

## 📌 Overview
Most developer portfolios rely on heavy frameworks or templates that look generic and load slowly. This one is built entirely from scratch — no React, no Bootstrap, no jQuery — just clean, semantic HTML, modern CSS, and vanilla JavaScript.

It showcases 4 real-world projects spanning full-stack web development, AI/ML systems, and algorithm visualization, along with skills, education, certifications, and a working contact form. Every animation, layout, and interaction is custom-written and optimized for performance.

---

## ✨ Features

- 🎬 **Page load animation** — branded "RR" logo with animated progress bar, fades out after 1.5s
- 🌌 **Live particle canvas** — 70 floating indigo particles with proximity-based connecting lines, rendered via `requestAnimationFrame` on an HTML5 Canvas
- ⌨️ **Typing effect** — cycles through "Frontend Developer", "Full Stack Developer", "AI Enthusiast" with realistic type/delete timing (100ms type, 60ms delete, 1800ms pause)
- 🌗 **Dark / Light mode toggle** — switches via CSS custom properties on `[data-theme]`, preference persisted in `localStorage`
- 📍 **Active section tracking** — navbar links highlight in real-time as you scroll using `scrollY` offset detection
- 🎞️ **Scroll reveal animations** — every section card fades up on enter using `IntersectionObserver` (threshold: 0.12), fires once and unobserves
- 📊 **Animated skill bars** — progress bars animate from 0% to their target width (triggered by a second `IntersectionObserver` at threshold 0.3) using a `cubic-bezier(0.4,0,0.2,1)` easing over 1.2s
- 🃏 **Project cards** — 4 projects with tech badges, bullet points, hover glow effect, and direct GitHub repo links
- ⭐ **Featured badges** — top 2 projects visually distinguished with a "Featured" pill
- 📅 **Vertical education timeline** — gradient connecting line with glowing dot markers
- 📜 **Horizontal certifications scroll** — CSS scroll-snap with custom styled scrollbar
- 📬 **Working contact form** — Formspree integration with async `fetch`, client-side validation (name, email regex, subject, message), loading spinner state, and success/error feedback
- ☝️ **Back-to-top button** — appears after 400px scroll, smooth scrolls to top
- 📱 **Fully responsive** — two breakpoints: stacked layout at 900px, hamburger menu at 640px with slide-down nav
- ♿ **Accessible** — `aria-label`, `aria-expanded`, semantic HTML5 elements throughout

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 (semantic — `nav`, `section`, `footer`, `form`) |
| Styling | CSS3 — Custom Properties, Grid, Flexbox, `clamp()`, `@keyframes` |
| Scripting | Vanilla JavaScript ES6+ — `IntersectionObserver`, Canvas API, `async/await`, `localStorage` |
| Fonts | Google Fonts — Inter (300–900) |
| Icons | Font Awesome 6.5 (CDN) |
| Form Backend | Formspree (serverless form handling) |
| Deployment | Netlify (static, no build step) |

---

## 📸 Screenshots

> Add screenshots manually after deployment.

---

## ⚙️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/RishiRaj0011/Personal_Portfolio_Website.git

# 2. Navigate into the folder
cd Personal_Portfolio_Website

# 3. Open in browser — no build step, no dependencies
# Option A: just open index.html directly in any browser
# Option B: use VS Code Live Server extension for hot reload
```

**No npm install. No build command. No environment variables required.**

To enable the contact form:
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy your endpoint ID
3. In `index.html`, replace `YOUR_FORM_ID` in the form `action` attribute:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

To enable resume download:
- Add your `resume.pdf` to the project root (the Download Resume button already links to it)

---

## 🏗️ Architecture

The entire site is 3 files — no build tooling, no bundler, no dependencies installed locally:

```
Personal_Portfolio_Website/
├── index.html     # All markup — 9 sections, semantic HTML5
├── styles.css     # All styles — ~400 lines, CSS custom properties for theming
├── script.js      # All interactivity — ~160 lines, zero libraries
└── Rishi.jpg      # Profile photo
```

**Key design decisions:**

- **CSS custom properties for theming** — dark/light mode is a single `data-theme` attribute swap on `<html>`, no JS class toggling needed for individual elements
- **IntersectionObserver over scroll events** — scroll reveal and skill bar animations use `IntersectionObserver` instead of `scroll` listeners, which is non-blocking and more performant
- **Canvas particles with O(n²) proximity check** — connecting lines between particles are drawn only when distance < 120px, keeping the visual clean without a separate library
- **Formspree for contact** — eliminates the need for any backend; form submissions go directly to email via a `fetch` POST with `Accept: application/json`
- **`passive: true` on scroll listeners** — both scroll event listeners are marked passive to avoid blocking the main thread during scroll

---

## 📈 Performance & Highlights

- ⚡ **Zero dependencies** — no `node_modules`, no bundler; the entire site is ~3 files totaling under 50KB (excluding the photo)
- 🎯 **70 particles** rendered at 60fps using `requestAnimationFrame` with no dropped frames on modern hardware
- 📐 **Responsive at 2 breakpoints** — 900px (stacked layout) and 640px (hamburger menu), tested across mobile and desktop
- 🔢 **15+ skills** across 5 categories with individually configurable progress bar widths via `data-width` HTML attributes
- 🧠 **4 real projects** linked directly to their GitHub repos — RAG pipeline (90% retrieval accuracy), Job Portal (13 REST endpoints), Face Detection (95% accuracy), Path Visualizer (2500 DOM nodes)
- 🎨 **Consistent design system** — 2 accent colors (`#6366F1`, `#818CF8`), 2 background layers, `14px` border radius, `0.3s ease` transitions — all defined as CSS variables and reused throughout
- ♿ **Accessible** — all interactive elements have `aria-label` or `aria-expanded` attributes; form errors are inline and descriptive

---

## 🔮 Future Improvements

1. **Project live demo links** — add deployed URLs alongside GitHub links once projects are hosted
2. **Blog / writing section** — a simple markdown-rendered section for technical articles would increase SEO and recruiter engagement
3. **Netlify Forms fallback** — replace Formspree with Netlify's built-in form handling to remove the only external dependency

---

## 📬 Contact

**Rishi Raj**
- 📧 rishiraj18072003@gmail.com
- 💼 [linkedin.com/in/rishiraj18](https://linkedin.com/in/rishiraj18)
- 🐙 [github.com/RishiRaj0011](https://github.com/RishiRaj0011)
- 📍 Gaya, Bihar, India

---

*Built with zero frameworks. Just craft.*
