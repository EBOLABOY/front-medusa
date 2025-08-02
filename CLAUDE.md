# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
npm run dev          # Start development server on port 8000 with Turbopack
npm run build        # Build for production
npm run start        # Start production server on port 8000
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size (sets ANALYZE=true)
```

### Environment Setup
- Copy `.env.template` to `.env.local` and configure required variables
- Required: `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` for Medusa integration
- Optional: `NEXT_PUBLIC_STRIPE_KEY` for Stripe payments
- Backend URL defaults to `http://localhost:9000` (configurable via `MEDUSA_BACKEND_URL`)

## Project Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router and React 19 RC
- **Backend**: Medusa.js v2 e-commerce platform
- **Styling**: Tailwind CSS with Medusa UI preset + custom CASETiFY theme
- **Language**: TypeScript with strict mode
- **Payments**: Stripe integration

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── [countryCode]/     # Country-specific routing
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── lib/                   # Core utilities and configuration
│   ├── config.ts          # Medusa SDK configuration
│   ├── data/              # Server actions for data fetching
│   ├── hooks/             # Custom React hooks
│   └── util/              # Utility functions
├── modules/               # Feature-based components
│   ├── account/           # User account functionality
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── common/            # Shared components
│   ├── home/              # Homepage components
│   ├── layout/            # Layout components (nav, footer)
│   ├── products/          # Product display and actions
│   └── store/             # Product listing and filtering
├── styles/
│   └── globals.css        # Global styles and Tailwind imports
└── types/                 # TypeScript type definitions
```

### Key Configuration Files
- `next.config.js`: Next.js configuration with image domains and build settings
- `tailwind.config.js`: Extended Tailwind config with CASETiFY color palette and animations
- `tsconfig.json`: TypeScript config with path aliases (`@lib/*`, `@modules/*`, `@pages/*`)
- `check-env-variables.js`: Validates required environment variables on build

### Data Fetching Patterns
- **Server Actions**: Located in `src/lib/data/` using Medusa SDK
- **Product Data**: `listProducts()` and `listProductsWithSort()` functions in `src/lib/data/products.ts`
- **Caching**: Leverages Next.js cache with `force-cache` strategy
- **Authentication**: Headers managed via `getAuthHeaders()` from cookies

### Medusa Integration
- **SDK Configuration**: `src/lib/config.ts` with Medusa client setup
- **Region-based**: All product queries require country code or region ID
- **Product Fields**: Fetches variants with calculated prices, inventory, metadata, and tags
- **Pagination**: Supports offset-based pagination with configurable limits

### UI/UX Patterns
- **CASETiFY Design System**: Custom color palette and animations in Tailwind config
- **Responsive Design**: Mobile-first with custom breakpoints (2xsmall to 2xlarge)
- **Component Architecture**: Feature-based modules with templates, components, and sub-components
- **Loading States**: Skeleton components in `src/modules/skeletons/`

### Development Notes
- Build ignores ESLint and TypeScript errors (`ignoreDuringBuilds: true`)
- Uses React 19 RC with type overrides for compatibility
- Turbopack enabled for faster development builds
- Image optimization configured for Medusa AWS S3 domains
- Environment variables validated on startup via custom check script

### Testing and Linting
- ESLint configured with Next.js preset
- Prettier available for code formatting
- No test framework configured - check with team before adding tests
- TypeScript strict mode enabled with path aliases

### Deployment
- Configured for Vercel deployment via `vercel.json`
- Build command: `npm run build`
- Output directory: `.next`
- Custom rewrites for proper Next.js App Router handling