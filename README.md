# Medivo Doctor Appointment Platform

A modern telehealth booking platform built with Next.js, Clerk authentication, Prisma, and Vonage video calling.

## 🚀 Overview

This repository powers a doctor appointment app for patients and doctors, featuring:

- Secure sign-in / sign-up flows with Clerk
- Doctor discovery by specialty
- Appointment booking and management
- Admin dashboard for approvals and payouts
- Real-time video consultations powered by Vonage
- Server-side data handling with Prisma and PostgreSQL
- Responsive UI with Tailwind CSS and Radix UI

## ✨ Features

- Patient authentication and onboarding
- Doctor profile browsing, filtering, and booking
- Appointment list and availability management for doctors
- Admin panel for doctor approvals and payout tracking
- In-app video calling for remote doctor visits
- Role-based views for patients, doctors, and admins
- Notifications and UI feedback with `sonner`

## 🧱 Tech Stack

- Next.js 15
- React 19
- Clerk for authentication
- Prisma for database access
- Tailwind CSS and Radix UI for styling
- Vonage for video conferencing
- Zod for schema validation
- `@hookform/resolvers` and `react-hook-form` for form handling

## 📁 Project Structure

- `app/` — Next.js app routes and layouts
- `components/` — Shared UI components
- `actions/` — server action handlers and business logic
- `lib/` — utilities, data helpers, and Prisma client
- `prisma/` — schema and database migrations
- `public/` — static assets

## ⚙️ Setup

1. Clone the repository
   ```bash
   git clone https://github.com/<your-org>/medivo.git
   cd medivo
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables

   Create a `.env` file with your configuration, for example:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/medivo"
   NEXT_PUBLIC_CLERK_FRONTEND_API="your-clerk-frontend-api"
   CLERK_API_KEY="your-clerk-api-key"
   VONAGE_API_KEY="your-vonage-api-key"
   VONAGE_API_SECRET="your-vonage-api-secret"
   ```

4. Generate Prisma client
   ```bash
   npx prisma generate
   ```

5. Run database migrations
   ```bash
   npx prisma migrate dev
   ```

6. Start the development server
   ```bash
   npm run dev
   ```

Open `http://localhost:3000` to view the app.

## 🧪 Scripts

- `npm run dev` — start the Next.js development server
- `npm run build` — build the production app
- `npm run start` — run the production server
- `npm run lint` — run ESLint checks
- `npm run clean` — remove `.next` build artifacts

## 📌 Notes

- This project is configured for Clerk authentication and Vonage video conferencing.
- Update environment variables before running the app locally.
- The database schema is managed through Prisma migrations in `prisma/migrations`.

## 💡 Contribution

Contributions are welcome. Feel free to open issues or pull requests for features, bug fixes, or documentation enhancements.

## 📄 License

This project is currently private. Add a license file if you plan to publish it publicly.
