# Sepideh Nilforoushan — Portfolio

Modern full-stack portfolio built with **Next.js**, **Tailwind CSS**, **Framer Motion**, and **Prisma**.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 15, React 19, Tailwind CSS v4, Framer Motion |
| Backend | Next.js API Routes |
| Database | Prisma + SQLite (dev) / PostgreSQL (prod) |

## Sections

- **Hero** — animated intro with gradient background and CTAs
- **Skills** — responsive grid with hover animations
- **Projects** — project cards loaded from database
- **Experience** — work history and education
- **Contact** — form with validation (saved to database via API)

## Getting Started

```bash
npm install
npm run db:push
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio` | Full portfolio data |
| GET | `/api/projects` | Projects list |
| POST | `/api/contact` | Submit contact form |

## Customize

Edit `prisma/seed.ts` then run `npm run db:seed` to update content.
