# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. Features a component-based architecture with dark mode support and smooth animations.

## Tech Stack

### Core Framework
- **Next.js 15.5.4** - React framework with App Router and Turbopack
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **tailwind-merge** - Merge Tailwind classes without conflicts
- **class-variance-authority** - Type-safe component variants
- **Framer Motion 12** - Animation library
- **next-themes** - Dark mode implementation

### Component Libraries
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Project Structure

```
my-portfolio/
├── app/
│   ├── components/       # Reusable UI components
│   ├── section/          # Page sections
│   │   ├── About/
│   │   ├── Action_Buttons/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Experience/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Hobbies/
│   │   ├── Navigation/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   └── Testimonials/
│   ├── lib/              # Utility functions and helpers
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/               # Static assets
├── .gitignore
├── Jenkinsfile           # CI/CD pipeline configuration
├── next.config.ts        # Next.js configuration
├── package.json
├── postcss.config.mjs    # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server with Turbopack:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

The page will auto-reload when you make changes to the code.

### Building for Production

Build the optimized production bundle:

```bash
npm run build
```

### Running Production Build

Start the production server:

```bash
npm run start
```

## Configuration

### TypeScript

TypeScript configuration is located in `tsconfig.json`. The project uses strict type checking.

### Tailwind CSS

Tailwind configuration uses the new Tailwind CSS 4 with PostCSS setup in `postcss.config.mjs`.

### Next.js

Next.js configuration is in `next.config.ts`. The project uses:
- App Router
- Turbopack for faster builds
- Server Components by default

## CI/CD

The project includes a Jenkins pipeline configuration (`Jenkinsfile`) for automated builds and deployments.

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow React functional component patterns
- Use Tailwind utility classes for styling
- Implement proper TypeScript types and interfaces

### Component Organization
- Place reusable components in `app/components/`
- Place page-specific sections in `app/section/`
- Keep components small and focused on single responsibilities

### Performance
- Leverage Next.js Server Components where possible
- Use dynamic imports for code splitting
- Optimize images with Next.js Image component
- Minimize client-side JavaScript

## Deployment

### Vercel (Recommended)

Deploy to Vercel with zero configuration:

```bash
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

### Other Platforms

The application can be deployed to any platform that supports Node.js:
- Build: `npm run build`
- Start: `npm start`

Ensure the platform is configured to:
- Run build command: `npm run build`
- Start command: `npm start`
- Node.js version: 20.x or higher

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Add your environment variables here
```

Note: Never commit `.env` files to version control.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project. All rights reserved.

## Contributing

This is a personal portfolio project. For any questions or suggestions, please open an issue.
