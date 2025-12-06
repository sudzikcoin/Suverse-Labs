# SuVerse Labs - Project Documentation

## Overview

SuVerse Labs is a technology company focused on decarbonizing the trucking and freight industry through AI agents, telematics tools, and blockchain infrastructure. The platform aggregates multiple sustainable transportation initiatives under one unified web presence, targeting partners, investors, and industry stakeholders with a professional, presentation-ready interface.

The application serves as a marketing and information portal showcasing five core projects:
- **PingPoint**: AI-powered freight tracking system
- **Fleet Carbon Dashboard**: Real-time fleet performance and emissions monitoring
- **Carbon Vault**: Blockchain-based carbon credit and REC marketplace
- **AgentOS**: LLM-powered business process automation platform
- **Validators**: Decentralized blockchain infrastructure participation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript in strict mode
- Vite as the build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management
- Tailwind CSS for styling with shadcn/ui component library
- Inter font family from Google Fonts for typography

**Design System:**
- Following shadcn/ui "new-york" style preset
- Light theme with clean, professional aesthetics
- System-based design approach inspired by enterprise SaaS (Stripe, Linear, Vercel)
- Sustainability-conscious visual language using blue-green gradients
- Responsive design targeting mobile, tablet, and desktop breakpoints
- Custom CSS variables for theming in HSL color space

**Component Structure:**
- `components/layout/`: Core layout components (Header, Footer, Layout wrapper)
- `components/shared/`: Reusable business components (ProjectCard, NewsCard, ValueCard, SectionHeading)
- `components/ui/`: shadcn/ui primitive components (40+ components including Button, Card, Dialog, Form, etc.)
- `pages/`: Route-level page components for each URL endpoint

**Routing Strategy:**
- File-based page components in `client/src/pages/`
- Centralized router configuration in `App.tsx`
- Static navigation items defined in `client/src/data/nav.ts`
- Routes include: Home, About, Founder, Projects (with sub-pages for each project), Technology, Sustainability, Partners, News, Contact, and dynamic news article pages

**State Management:**
- No global authentication state (app is public-facing)
- Server state managed via TanStack Query with custom query client
- Form state managed locally with React Hook Form
- Toast notifications via custom hook pattern

### Backend Architecture

**Technology Stack:**
- Express.js server with TypeScript
- PostgreSQL database (configured but not currently in active use)
- Drizzle ORM for database schema and queries
- In-memory storage implementation as fallback (MemStorage class)

**Server Structure:**
- `server/index.ts`: Main Express application setup with logging middleware
- `server/routes.ts`: API endpoint registration
- `server/storage.ts`: Storage abstraction layer with in-memory implementation
- `server/static.ts`: Static file serving for production builds
- `server/vite.ts`: Vite development server integration for HMR

**API Design:**
- RESTful endpoint: `POST /api/contact` for contact form submissions
- Request validation using Zod schemas from shared schema definitions
- Error handling with appropriate HTTP status codes
- JSON request/response format

**Build Process:**
- Custom build script (`script/build.ts`) using esbuild for server and Vite for client
- Server bundling with selective dependency externalization to reduce cold start times
- Allowlist of bundled dependencies for performance optimization
- Output to `dist/` directory with separate public and server bundles

### Data Storage Solutions

**Database Schema (Drizzle ORM):**
- `users` table: Basic user authentication structure (id, username, password)
- `contact_messages` table: Contact form submissions (id, name, email, company, subject, message, createdAt)
- Schema defined in `shared/schema.ts` with TypeScript types and Zod validation schemas
- PostgreSQL dialect configured in `drizzle.config.ts`

**Current Implementation:**
- In-memory storage (MemStorage) used for development/demo
- Database connection string required via `DATABASE_URL` environment variable
- Migration files generated to `./migrations` directory
- Schema can be pushed to database via `npm run db:push` script

**Data Files:**
- `client/src/data/nav.ts`: Navigation menu structure
- `client/src/data/projects.ts`: Project metadata and descriptions
- `client/src/data/posts.ts`: Blog/news article content
- Static data approach eliminates need for CMS in current phase

### Design Patterns

**Separation of Concerns:**
- Clear separation between client (`client/`), server (`server/`), and shared (`shared/`) code
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)
- Type safety enforced across client-server boundary via shared schema definitions

**Component Composition:**
- PageShell/Section pattern for consistent page layouts
- Compound components for complex UI (e.g., Card with CardHeader, CardContent)
- Slot pattern from Radix UI for flexible component APIs

**Data Fetching:**
- Custom `apiRequest` helper for type-safe API calls
- Query functions with configurable 401 handling behavior
- Infinite stale time for static-like data

**Validation Strategy:**
- Zod schemas as single source of truth for data validation
- `drizzle-zod` integration for automatic schema generation from database tables
- Client-side validation via React Hook Form with Zod resolvers
- Server-side validation using same schemas

## External Dependencies

### UI Component Libraries
- **@radix-ui/***: Headless UI primitives for 25+ components (accordion, dialog, dropdown, popover, etc.)
- **shadcn/ui**: Pre-styled component system built on Radix UI
- **lucide-react**: Icon library
- **react-icons**: Additional icon set (used for social media icons)
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command palette component

### Styling & Theming
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **class-variance-authority (CVA)**: Type-safe variant handling for components
- **tailwind-merge**: Intelligent Tailwind class merging
- **clsx**: Conditional class name composition
- **autoprefixer**: CSS vendor prefixing

### Form Management
- **react-hook-form**: Performant form state management
- **@hookform/resolvers**: Validation resolver integration

### Data Layer
- **drizzle-orm**: TypeScript ORM for SQL databases
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas
- **pg**: PostgreSQL client library
- **connect-pg-simple**: PostgreSQL session store for Express

### Development & Build Tools
- **Vite**: Frontend build tool with HMR support
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution for development and build scripts
- **TypeScript**: Type safety across entire application
- **@vitejs/plugin-react**: React integration for Vite

### Replit-Specific Integrations
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit workspace integration
- **@replit/vite-plugin-dev-banner**: Development environment banner

### Routing & Navigation
- **wouter**: Lightweight client-side routing library (~1.5KB)

### Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **zod**: Schema validation library
- **zod-validation-error**: User-friendly Zod error messages

### Session Management
- **express-session**: Session middleware for Express
- **memorystore**: In-memory session store fallback

### HTTP & API
- **express**: Web application framework
- **cors**: Cross-origin resource sharing middleware

### Fonts
- **Google Fonts CDN**: Inter font family loaded via CDN link in `client/index.html`