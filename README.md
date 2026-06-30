# Sepideh Nilforoushan — Portfolio

Full-stack portfolio built with **Next.js**, **Material UI**, **Prisma**, and **SQLite**.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 15, React 19, MUI |
| Backend | Next.js API Routes |
| Database | Prisma + SQLite (dev) / PostgreSQL (prod) |
| 3D / Shader | Three.js |

## Features

- Server-rendered portfolio content from database
- REST API: `/api/portfolio`, `/api/projects`, `/api/contact`
- Contact form saves messages to database
- Animated hero shader + skills section 3D crystal
- Responsive MUI design

## Getting Started

```bash
npm install
npm run db:push    # Create database tables
npm run db:seed    # Seed with your portfolio data
npm run dev        # http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/portfolio` | Full portfolio data |
| GET | `/api/projects` | All projects |
| POST | `/api/contact` | Submit contact form `{ name, email, message }` |
| GET | `/api/contact` | List contact messages (admin) |

## Database

Local dev uses SQLite (`prisma/dev.db`). For production on Vercel, use PostgreSQL:

1. Create a free database on [Neon](https://neon.tech) or [Supabase](https://supabase.com)
2. Set `DATABASE_URL` in your hosting provider
3. Update `prisma/schema.prisma` provider to `postgresql`
4. Run `npx prisma db push && npx prisma db seed`

View data: `npm run db:studio`

## Deploy (Vercel)

```bash
npx vercel
```

Set `DATABASE_URL` to your PostgreSQL connection string in Vercel environment variables.

## Customize

- **Content**: Edit `prisma/seed.ts` then run `npm run db:seed`
- **Theme**: `theme/theme.ts`
- **Components**: `components/`
