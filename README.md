# BrainIQ – Vercel‑Ready Starter (Next.js + Tailwind)

Netflix‑inspiriertes IQ‑Test UI (DE) als Next.js App‑Router Projekt.

## Lokal starten
```bash
npm install
npm run dev
```

## Firebase Setup
In Vercel **Environment Variables** anlegen (Project Settings → Environment Variables):

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`

Optional:
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

Für lokal: `.env.local` erstellen (siehe `.env.example`).

## Deploy auf Vercel
1. Repo zu GitHub pushen
2. Vercel → “New Project” → Repo auswählen
3. Env Vars hinzufügen
4. Deploy

## Was ist drin?
- `/` Landing Page (Netflix‑Style)
- `/test/[id]` Placeholder‑Testseite
- API Route Platzhalter:
  - `POST /api/subscribe`
  - `POST /api/certificate`
- Firebase Client Scaffold: `lib/firebaseClient.ts`
- Free‑Cooldown Helper: `lib/gating.ts` (14 Tage)

## Nächste Schritte
- Firebase Auth im Modal (Google/Apple)
- Firestore: waitlist/users/tests
- Test Engine + Scoring
- Zertifikat: PDF + Mail via `app/api/certificate/route.ts`
- Abo: Stripe/Paddle via `app/api/subscribe/route.ts`
