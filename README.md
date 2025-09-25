
# 🌐 Intern-Setu  

## Botpress integration notes

Botpress can capture profile fields (education, skills, city, language). Expose a small HTTP webhook action in the bot to POST the candidate JSON to your Flask `/recommend` endpoint or to Airtable via Zapier.

Botpress Action (JavaScript):

```js
const axios = require('axios')
const candidate = { /* gather slots */ }
await axios.post(process.env.RECOMMEND_URL + '/recommend', { candidate })
```

- Keep `RECOMMEND_URL` as an env var on the Botpress server.
- Alternatively: Botpress → Zapier → Flask/Airtable.

## Airtable integration

- Keep internship listings and candidate profiles in Airtable tables.
- Option A: Scheduled Zapier task to sync Airtable internships to the Flask server.
- Option B: Flask calls Airtable on each `/recommend` for freshest data.
- Airtable form embed URL is provided to the profile component via `NEXT_PUBLIC_AIRTABLE_EMBED_URL`.

## Retool dashboard (analytics)

Create a Retool app connected to Airtable + your Flask backend logs. Suggested widgets:
- Daily recommendations (time-series)
- Click-through rates (apply clicks / impressions)
- Language distribution (pie)
- Export CSV/PDF (Retool export)

What to log from the frontend:

```json
{
  "event": "impression | apply_click | save_click",
  "userId": "anon-uuid",
  "language": "en|hi|ta",
  "internshipId": "id",
  "timestamp": 1730000000000
}
```

Send to a small analytics endpoint (Flask `/analytics`) or via Zapier to Airtable.

## Accessibility & low-digital-literacy recommendations

- Large tappable targets (≥ 44x44 px)
- Clear labels + icons; plain language
- Offline-first fallback (drafts offline → sync on reconnect)
- Minimal typing; prefer picklists/buttons; voice capture (future)
- Prominent language toggle; store preference in localStorage
- Low-data mode; avoid avatars by default; lazy-load on Wi‑Fi
- Short microcopy instructions (e.g., “Tap Apply — you can edit before submit”)
- 3-step pictorial/video guide for first-time users
- Offer SMS fallback for interview scheduling

## File map / where things live

```
/project-root
  /public
    sw.js
    offline.html
  /src
    /components
      InternshipCard.jsx
      MatchesCarousel.jsx
      AIInterviewChat.jsx
      ProfileFormEmbed.jsx
      LanguageSwitcher.jsx
    /data
      sample-internships.json
    /hooks
      useRegisterSW.js
    /pages or /app
      index.jsx (Home) or app/page.tsx
      _app.jsx (register i18n & SW) or app/client-layout.tsx
    i18n.js
    styles/globals.css
  /server
    app.py
    internships.json
  .env.local
  tailwind.config.cjs
  next.config.js (if needed for images)
```

## Env & wiring (quick flow)

Set envs (Next.js):

```bash
NEXT_PUBLIC_AIRTABLE_EMBED_URL=...
NEXT_PUBLIC_BOTPRESS_URL=https://botpress.example
NEXT_PUBLIC_RECOMMEND_URL=http://localhost:5001
```

Flask server URL: use as `RECOMMEND_URL` in Botpress or `NEXT_PUBLIC_RECOMMEND_URL` in Next.js.

Frontend → Flask example:

```js
import axios from 'axios'
export async function fetchMatches(candidate) {
  const res = await axios.post(process.env.NEXT_PUBLIC_RECOMMEND_URL + '/recommend', { candidate })
  return res.data.matches
}
```

Production: run Flask behind a domain or same-origin with the frontend.

## Bonus UI improvements

- “Why matched” toggle on each card to reveal the scoring breakdown
- Micro-animations on apply/save for confirmation
- Simple progress indicator across the application flow
- “Help” quick-access (phone/SMS fallback)
*A Smart Bridge Between Students and Internships*
--

## 🚀 Overview
**Intern-Setu** is an AI-driven platform designed to **connect students with the most relevant internships** by analyzing their skills, academic background, and preferences.  
The platform leverages **Machine Learning, NLP**, and **real-time job market data** to provide personalized internship recommendations and actionable career insights.

---

## ✨ Key Features
- **AI-Based Matching**  
  - Uses ML algorithms to match candidate profiles with internship postings.
- **Smart Recommendations**  
  - Personalized suggestions ranked by relevance score, skill fit, and user preferences.
- **Interactive Dashboard**  
  - Real-time analytics, saved internships, and one-click application tracking.
- **Multi-Platform Support**  
  - Responsive PWA (Progressive Web App) built with **Next.js** for web & mobile.
- **Secure Authentication**  
  - Supabase-powered auth with social login and JWT security.
- **Automated Data Updates**  
  - Background jobs fetch and update live internship postings.

---

## 🏗️ Architecture
| Layer          | Tech Stack                                  | Purpose                              |
|----------------|----------------------------------------------|--------------------------------------|
| **Frontend**   | Next.js 13+, TailwindCSS, Framer Motion      | PWA UI, animations, responsive UX   |
| **Backend**    | Flask, Python                                | API, recommendation engine          |
| **Database**   | Supabase/PostgreSQL                          | User profiles, internship listings  |
| **AI/ML**      | Pandas, scikit-learn, OpenAI (optional)      | Skill extraction & recommendation   |
| **Automation** | n8n / Cron jobs                              | Data ingestion and updates          |
| **Hosting**    | Vercel (frontend), Render/Railway (backend)  | Free & scalable deployment          |


---