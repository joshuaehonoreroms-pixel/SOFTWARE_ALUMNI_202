# Project Setup

## Requirements
- Node 18+
- pnpm (Recommended: v9+)
- Convex account
- Clerk account

## Setup
```bash
# Install dependencies (frozen lockfile to ensure consistency)
pnpm run check:deps

# Start development server
pnpm dev
```

## Required Environment Variables
Create a `.env.local` file with the following keys:

```bash
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Convex Backend
CONVEX_DEPLOYMENT=... # e.g. dev:my-project-123
NEXT_PUBLIC_CONVEX_URL=https://...convex.cloud
```

## Architecture
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **Backend**: Convex
- **Auth**: Clerk
