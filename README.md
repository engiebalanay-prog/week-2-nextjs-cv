# Weeks 2 & 3 - Next.js CV Website + Person App

Personal CV and portfolio website with a full-stack Person management app, built with Next.js, React, TypeScript, Tailwind CSS, Prisma ORM, and Neon PostgreSQL as part of the AI Agent Developer Workshop.

## About

This project combines a single-page CV website (Week 2) with a full-stack CRUD application for managing person records (Week 3). It uses Prisma ORM with a Neon Postgres database and Next.js Server Actions for seamless data operations.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Prisma ORM 7 with PostgreSQL adapter
- Neon Postgres (serverless)
- Deployed on Vercel

## Project Structure

```
src/
  app/
    layout.tsx              - Root layout with metadata and fonts
    page.tsx                - Main page composing all CV sections
    globals.css             - Global Tailwind styles
    persons/
      page.tsx              - Person list (Read all)
      new/page.tsx          - Create new person
      [id]/page.tsx         - View person detail + Delete
      [id]/edit/page.tsx    - Edit person
  components/
    Header.tsx              - Navigation header
    Hero.tsx                - Hero section
    About.tsx               - About me with quick facts
    Skills.tsx              - Skills grouped by category
    Experience.tsx          - Work experience timeline
    Education.tsx           - Education details
    Contact.tsx             - Contact information
    Footer.tsx              - Page footer
    PersonForm.tsx          - Reusable person form (Create/Edit)
  lib/
    prisma.ts               - Prisma client singleton
    actions.ts              - Server actions (CRUD operations)
  generated/prisma/         - Generated Prisma client
prisma/
  schema.prisma             - Database schema with Person model
```

## Getting Started

```bash
npm install
npx prisma generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.
Navigate to [/persons](http://localhost:3000/persons) for the Person management app.

## Workshop Info

- **Workshop**: AI Agent Developer Workshop - AusBiz Consulting
- **Weeks**: 2 (Development Foundations) & 3 (Database Integration)
- **Author**: Engiemar S. Balanay
- **GitHub**: [engiebalanay-prog](https://github.com/engiebalanay-prog)
