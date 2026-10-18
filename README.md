# Bhoomi Gupta — macOS Desktop Portfolio

A desktop portfolio experience inspired by macOS, built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Features

- **macOS Desktop Architecture**:
  - Top Menu Bar with active application indicator, live digital clock, system status icons, and theme switch (Light / Dark).
  - Floating Desktop with greeting ("Hey, this is Bhoomi"), subtitle, polaroid photo frame with purple washi tape, and animated explorer tip.
  - Desktop Icons (double-click to open About Me, Projects folder, Resume PDF, Contact, and Photo Viewer).
  - Bottom Dock with spring-based magnification, running app indicator dots, and tooltips.
  - Frosted Glass Windows (`mac-glass`) with purple traffic lights, draggable headers, z-index focus stacking, minimize to dock, maximize, and Esc key close.
- **Applications & Windows**:
  - **About Me**: Warm first-person bio, verified academic facts (NSUT ICE 2024–2028), role targeting.
  - **Projects**: Finder-style folder window with search bar, view toggles, category filtering, tech stack chips, and GitHub/Live links (DSABuddy, Wajah, WorkMark, Epsilon, Medeliver, Naksha, Finance Tracker).
  - **Experience**: Vertical timeline layout (newest first) featuring Genpact (Agentic AI Intern), RITES Ltd. (IT Intern), The Debugging Society, IEEE NSUT, TEDxNSUT, Intaglios, and SpaceCon.
  - **Skills**: Grouped capability chips for Languages, Frontend, Backend, Databases, Core CS, and Tools/Cloud/AI.
  - **Education**: Detailed academic cards for NSUT, Amity Pushp Vihar (94.4%), and Amity Sec 46 Gurugram (99.4%).
  - **Honors & Certifications**: Hackathon achievements (Adobe Express Grand Finalist, DTU brAInwave, Amazon Hack On Top 75, Flipkart GRID 8.0) and friendly empty state for certifications (`src/data/certifications.ts`).
  - **Contact**: Copy-to-clipboard cards with confetti feedback for email, phone, GitHub, and LinkedIn.
  - **Resume Viewer**: Embedded single-page PDF viewer with direct Download button.
  - **Mailer App**: Working email composer with honeypot spam protection, rate limiting, and `mailto:` fallback.
  - **Ask Bhoomi AI**: iMessage-styled chatbot with suggested chips, verified resume context, and local fallback.
  - **Music Box**: Retro-cute lofi player with spinning vinyl animation, volume control persisted to `localStorage`, visualizer bars, and 3 audio loops.
  - **Photos**: Preview photo viewer with Polaroid, Circle, and Clean frame styles, zoom, and rotation.
- **Mobile Responsive**: Automatically collapses into an iOS/macOS mobile home screen with app grid and full-screen bottom sheets on mobile viewports.
- **Accessibility & Copy Integrity**: Full keyboard navigation, `prefers-reduced-motion` support, zero buzzwords, and zero em dashes in copy.

---

## Getting Started

### 1. Installation

```bash
git clone https://github.com/bhoomi2310/resume-website.git
cd resume-website
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### 3. Production Build

```bash
npm run build
npm run preview
```

---

## Environment Variables

For full functionality on Vercel or production:

Create a `.env.local` file in the root directory:

```env
# Optional: For AI Chatbot (falls back to intelligent local resume solver if omitted)
OPENAI_API_KEY=your_openai_api_key_here
# or
GROQ_API_KEY=your_groq_api_key_here

# Optional: For Mailer Form (to send emails to imbhoomigupta@gmail.com)
RESEND_API_KEY=your_resend_api_key_here

# Or Standard SMTP:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=imbhoomigupta@gmail.com
SMTP_PASS=your_app_specific_password_here
```

---

## Placeholders to Replace

When you are ready to update assets:

1. **Profile Picture**:
   - Replace `/public/profile.jpg` with your updated portrait.
2. **Resume PDF**:
   - Replace `/public/Bhoomi_Gupta_Resume.pdf` whenever you generate an updated resume.
3. **Music Tracks**:
   - Replace `/public/music/track1.wav`, `track2.wav`, `track3.wav` with any MP3 or WAV lofi audio files you like. Update titles in `src/data/music.ts`.
4. **Certifications**:
   - Add entries into `certificationsData` in `src/data/certifications.ts`.
5. **API Keys**:
   - Add `OPENAI_API_KEY` (or `GROQ_API_KEY`) and `RESEND_API_KEY` (or SMTP credentials) in your Vercel Project Settings under **Settings > Environment Variables**.

---

## Vercel Deployment

1. Push your repository to GitHub.
2. In your [Vercel Dashboard](https://vercel.com/), click **New Project** and import `resume-website`.
3. Framework Preset: **Vite**.
4. Root Directory: `./`.
5. Add your Environment Variables.
6. Click **Deploy**. Both the Vite single-page app and the `/api/chat` and `/api/send-mail` serverless functions will be deployed automatically!
