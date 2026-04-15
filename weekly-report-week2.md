# Weekly Report - Week 2: Development Foundations

**Name:** Engiemar S. Balanay
**Week:** 2
**Date:** July 2025
**Workshop:** AI Agent Developer Workshop - AusBiz Consulting

---

## Objectives

The goal for Week 2 was to build a personal CV and portfolio website using Next.js, React, TypeScript, and Tailwind CSS. The website was to be deployed on Vercel and serve as a professional online presence.

## What I Did

I scaffolded a new Next.js project using create-next-app with TypeScript, Tailwind CSS, the App Router, and a src directory structure. I then built 8 separate React components to make up the CV page:

- Header with navigation links
- Hero section with a short introduction
- About Me section with quick facts
- Skills section grouped into four categories (Frontend, Backend, AI/MCP, DevOps)
- Experience section listing my workshop internship tasks
- Education section with relevant coursework
- Contact section with email, GitHub, and location
- Footer with credits

All components were composed together in a single page.tsx file. I updated the layout metadata and README to reflect the project details.

After building, I verified the project compiled without errors using npm run build with Turbopack. The site was then pushed to GitHub and deployed on Vercel.

## Tech Stack Used

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel for deployment
- GitHub for version control
- GitHub Copilot for AI-assisted development

## Challenges

The main challenge was getting the Vercel deployment to work correctly. The first attempt resulted in a 404 error even though the build status showed "Ready." After investigating, I decided to rebuild the project from scratch with a clean scaffold, which resolved the issue.

Another minor challenge was managing the terminal working directory on Windows, which sometimes reset unexpectedly. Using absolute paths and Push-Location helped work around this.

## What I Learned

- How to structure a Next.js App Router project with reusable components
- How to use Tailwind CSS utility classes for responsive layouts
- The importance of clean project setup for successful Vercel deployment
- How to use GitHub Copilot effectively to speed up component development

## Repository

GitHub: https://github.com/engiebalanay-prog/week-2-nextjs-cv

## Next Steps

In Week 3, I will extend the project into a full-stack application by adding a database with Prisma ORM and Vercel Neon PostgreSQL, building CRUD functionality for a Person management app.
