This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# ALX Listing App

This is a scaffolded project for an Airbnb-style property listing page. It is part of the ALX Software Engineering program milestone.

## 🚀 Project Goals

- Create a clean, maintainable, and scalable foundation for a modern web app.
- Practice with Next.js, TypeScript, TailwindCSS, and ESLint.
- Build reusable components (like Card and Button).
- Organize code and assets for real-world production readiness.

## 🗂️ Project Structure

components/ -> Reusable UI components like Card and Button
interfaces/ -> TypeScript interfaces for component props and data types
constants/ -> Static values and sample data
public/assets/ -> Project-wide images and SVGs

# Components

Button.tsx

✅ What it does:
Reusable button component with basic Tailwind styling. You pass in the label and an onClick function.

Card.tsx

✅ What it does:
Displays an image, title, and description — just like an Airbnb-style property listing card.

# Interface

Index.tsx

✅ What it does:
This file defines the types for the props you pass into your components. This keeps your code safe, readable, and consistent using TypeScript.

# Constants

Listing.ts

✅ What it does:
Holds example listing data you can later map over to show multiple Cards.
