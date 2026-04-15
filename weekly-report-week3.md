# Weekly Report - Week 3: Database Integration

**Name:** Engiemar S. Balanay
**Week:** 3
**Date:** April 2026
**Workshop:** AI Agent Developer Workshop - AusBiz Consulting

---

## Objectives

The goal for Week 3 was to extend the existing Next.js CV website into a full-stack application by integrating a PostgreSQL database using Prisma ORM and Neon serverless Postgres. The deliverable was a Person management app with full CRUD functionality.

## What I Did

I extended my Week 2 Next.js project by adding Prisma ORM 7 with a Neon PostgreSQL database. The main steps were:

- Set up a Neon account and created a serverless Postgres database
- Installed Prisma CLI, Prisma Client, and the PostgreSQL driver adapter
- Defined a Person model in the Prisma schema with fields for name, email, phone, address, bio, photo URL, GitHub, LinkedIn, and website
- Pushed the schema to Neon using prisma db push
- Created a Prisma client singleton with the PrismaPg adapter for database connections
- Built five Server Actions for the CRUD operations: getPersons, getPerson, createPerson, updatePerson, and deletePerson
- Created four new pages under /persons: a list page showing all persons, a new person form, a detail view with delete option, and an edit form
- Built a reusable PersonForm component used by both the create and edit pages
- Added a Persons navigation link to the site header
- Configured the build script to run prisma generate before next build so the generated client is available on Vercel

## Tech Stack Used

- Next.js 16 (App Router, Server Actions)
- React 19
- TypeScript
- Tailwind CSS v4
- Prisma ORM 7 with @prisma/adapter-pg
- Neon PostgreSQL (serverless)
- Vercel for deployment
- GitHub Copilot for AI-assisted development

## Challenges

The main challenge was working with Prisma 7, which introduced significant changes from earlier versions. Unlike older Prisma versions, Prisma 7 uses a prisma.config.ts file for configuration, generates the client to a custom output directory, and requires a driver adapter instead of connecting directly via a URL. The type exports also changed - for example, the Person type is exported as PersonModel rather than Person. Working through these differences required reading the generated code to understand the new structure.

Another issue was that prisma init set a local Prisma Postgres URL in the .env file that overrode my Neon connection string. Removing the duplicate entry resolved the connection problem.

## What I Learned

- How to set up Prisma ORM 7 with a Neon serverless PostgreSQL database
- How to use Next.js Server Actions for database operations without writing API routes
- How driver adapters work in Prisma 7 for connecting to PostgreSQL
- How to structure a full-stack Next.js app with shared components and server-side data fetching
- The importance of configuring prisma generate in the build pipeline for deployment

## Repository

GitHub: https://github.com/engiebalanay-prog/week-2-nextjs-cv

## Next Steps

In Week 4, I will build a custom MCP server that enables AI agents to interact with the Person database, providing tools for creating, reading, updating, and deleting person records through the Model Context Protocol.
