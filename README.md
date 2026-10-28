# FIFA World Cup 2026 Fan Hub

A Next.js fan website for the 2026 FIFA World Cup, featuring live match data, fan polls, a fantasy team builder, a bracket predictor, and a final experience gallery.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| State Management | Zustand (persisted to localStorage) |
| Database | Supabase (Postgres + Realtime) |
| External API | football-data.org (v4) |
| Deployment | Vercel |

## Data Flow

1. **Static data** (teams, groups, schedule) is read from `src/lib/data/`.
2. **Live match data** is fetched from football-data.org via `src/lib/api.ts` with a 60-second revalidation cache.
3. **Fan polls & predictions** are submitted to Supabase via `src/app/polls/page.tsx`. Duplicate submissions are blocked server-side using a browser fingerprint (`@fingerprintjs/fingerprintjs`).
4. **User state** (fantasy squad, bracket picks, theme) is stored in `localStorage` via Zustand stores in `src/lib/store.ts`.

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_FOOTBALL_API_TOKEN=your_football_data_api_token
```

The same three variables must also be added in the **Vercel dashboard** under Project → Settings → Environment Variables.

> ⚠️ Never commit real keys to source control. `.env.local` is gitignored.

## Running Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Homepage (live scores, Hall of Champions, news)
│   ├── schedule/               # Full match schedule
│   ├── groups/                 # Group stage standings
│   ├── bracket/                # Knockout bracket pick'em
│   ├── polls/                  # Fan predictions & champion picker
│   ├── fantasy/                # Fantasy squad builder
│   ├── highlights/             # Match highlights
│   ├── final-experience/       # Final match gallery, highlights & YouTube embeds
│   ├── teams/[slug]/           # Individual team page
│   ├── match/[id]/             # Individual match page
│   └── specialities/          # Special awards & tournament records
├── components/
│   ├── layout/                 # Navbar, Footer, ThemeProvider, GlobalBackButton
│   └── ui/                     # Shared UI primitives (Flag, FadeIn, SectionTitle, etc.)
├── lib/
│   ├── api.ts                  # football-data.org API client
│   ├── supabase.ts             # Supabase client
│   ├── store.ts                # Zustand global stores
│   ├── utils.ts                # Utility functions (countdown, date formatting, cn)
│   └── data/                   # Static data files (teams, matches, groups, news)
└── types/
    └── index.ts                # Shared TypeScript types
```

## Key Pages

| Route | Description |
|---|---|
| `/` | Homepage with live scores, Hall of Champions, upcoming matches, news |
| `/schedule` | Full World Cup match schedule |
| `/groups` | Group stage tables and standings |
| `/bracket` | Knockout bracket with prediction picks |
| `/polls` | Fan polls, champion predictor, vote submission |
| `/fantasy` | Fantasy squad builder with formation picker |
| `/highlights` | Match highlights section |
| `/final-experience` | Final match gallery, YouTube video embeds |
| `/teams/[slug]` | Individual team profile |
| `/match/[id]` | Individual match details |
| `/specialities` | Awards (Golden Boot, Golden Ball, etc.) |
