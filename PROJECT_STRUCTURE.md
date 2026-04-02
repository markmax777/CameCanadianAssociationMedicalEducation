# Project Structure

Complete guide to the CAME website codebase organization and architecture.

## Directory Overview

```
CAME/
├── src/                          # Source code
│   ├── app/                      # Application code
│   │   ├── components/          # React components
│   │   ├── contexts/            # React contexts
│   │   ├── pages/               # Page components
│   │   ├── translations/        # i18n files
│   │   ├── App.tsx             # Root component
│   │   └── routes.tsx          # Route configuration
│   ├── imports/                 # Static assets
│   └── styles/                  # Global styles
├── guidelines/                   # Design guidelines
├── package.json                 # Dependencies
├── vite.config.ts              # Vite configuration
├── postcss.config.mjs          # PostCSS config
├── README.md                    # Main documentation
├── CONTRIBUTING.md              # Contribution guide
├── DEPLOYMENT.md                # Deployment guide
├── TRANSLATIONS.md              # Translation guide
├── CHANGELOG.md                 # Version history
└── LICENSE                      # License file
```

## Source Code Structure

### `/src/app/`

Main application directory containing all React code.

#### `/src/app/components/`

Reusable React components.

```
components/
├── ui/                          # Radix UI primitives
│   ├── button.tsx              # Button component
│   ├── card.tsx                # Card layouts
│   ├── dialog.tsx              # Modal dialogs
│   ├── select.tsx              # Dropdown selects
│   ├── tabs.tsx                # Tab navigation
│   └── ... (40+ UI components)
├── figma/
│   └── ImageWithFallback.tsx   # Image component with fallback
├── Footer.tsx                   # Site footer
├── Layout.tsx                   # Page layout wrapper
├── Navigation.tsx               # Main navigation (simple)
└── NavigationWithDropdown.tsx   # Navigation with "More" menu
```

**Key Components**:

- **Layout.tsx**: Wraps all pages with consistent header/footer
- **Navigation.tsx**: Main navigation bar with language toggle
- **Footer.tsx**: Multi-column footer with newsletter signup
- **ui/**: Pre-built accessible components from Radix UI

#### `/src/app/contexts/`

React Context providers for global state.

```
contexts/
└── LanguageContext.tsx          # Bilingual translation system
```

**LanguageContext**:
- Manages current language (EN/FR)
- Provides translations to entire app
- Persists language preference

#### `/src/app/pages/`

Page-level components mapped to routes.

```
pages/
├── Home.tsx                     # Homepage
├── About.tsx                    # About overview
├── Membership.tsx               # Membership overview
├── ProfessionalDevelopment.tsx  # PD overview
├── Community.tsx                # Community overview
├── AwardsGrants.tsx            # Awards & Grants overview
├── Foundation.tsx               # Foundation overview
├── Contact.tsx                  # Contact page
├── Donate.tsx                   # Donation page
├── Store.tsx                    # Merchandise store
├── MemberLogin.tsx              # Login page
├── NotFound.tsx                 # 404 page
│
├── about/                       # About sub-pages
│   ├── MissionVision.tsx       # Mission & vision
│   ├── Leadership.tsx          # Leadership overview
│   ├── HistoryImpact.tsx       # History & impact
│   └── leadership/
│       ├── BoardDirectors.tsx  # Board members
│       ├── Committees.tsx      # Committee list
│       └── Representatives.tsx # School reps
│
├── membership/                  # Membership sub-pages
│   ├── Benefits.tsx            # Membership benefits
│   ├── Plans.tsx               # Pricing plans
│   ├── BecomeMember.tsx        # Signup info
│   ├── Directory.tsx           # Member directory
│   └── MembershipSignup.tsx    # Signup form
│
├── professional-development/    # PD sub-pages
│   ├── LeadershipPrograms.tsx  # Leadership overview
│   ├── Clime1.tsx              # CLIME 1.0
│   ├── Clime2.tsx              # CLIME 2.0
│   ├── Iclem1.tsx              # ICLEM 10
│   ├── Webinars.tsx            # Webinar library
│   ├── Podcasts.tsx            # Podcast episodes
│   └── LearningResources.tsx   # Resource hub
│
├── community/                   # Community sub-pages
│   ├── Newsletter.tsx          # Newsletter archive
│   └── SpecialInterestGroups.tsx # SIG directory
│
├── awards-grants/               # Awards sub-pages
│   ├── AwardsNominations.tsx   # Awards info
│   ├── EducationGrants.tsx     # Grant opportunities
│   └── PastWinners.tsx         # Winners showcase
│
├── foundation/                  # Foundation sub-pages
│   ├── AboutFoundation.tsx     # Foundation mission
│   └── FoundationGrants.tsx    # Grant programs
│
└── programs/                    # Deprecated - moved to PD
    ├── CamePaccc.tsx
    ├── Clime20.tsx
    ├── Clime2027.tsx
    └── Iclem102027.tsx
```

**Naming Convention**:
- PascalCase for file names
- Match component name to file name
- Sub-pages in directories matching parent section

#### `/src/app/translations/`

Bilingual translation files (EN/FR).

```
translations/
├── index.ts                     # Central export
├── home-translations.ts         # Homepage
├── about-translations.ts        # About section
├── membership-translations.ts   # Membership
├── professional-development-translations.ts # PD
├── community-translations.ts    # Community
├── awards-grants-translations.ts # Awards & Grants
├── foundation-translations.ts   # Foundation
├── nav-translations.ts          # Navigation
├── footer-translations.ts       # Footer
├── common-translations.ts       # Shared strings
└── program-details-translations.ts # Program details
```

**Translation Structure**:
```typescript
export const sectionTranslations = {
  en: { /* English */ },
  fr: { /* French */ }
};
```

See [TRANSLATIONS.md](./TRANSLATIONS.md) for detailed guide.

#### `/src/app/routes.tsx`

React Router configuration using Data mode.

```typescript
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      // ... more routes
    ]
  }
]);
```

**Route Structure**:
- Uses `react-router` v7
- Data mode with `createBrowserRouter`
- Nested routes for sub-pages
- Layout wrapper for all pages

#### `/src/app/App.tsx`

Root application component.

```typescript
import { RouterProvider } from 'react-router';
import { LanguageProvider } from './contexts/LanguageContext';
import { router } from './routes';

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
```

### `/src/imports/`

Static assets imported into the application.

```
imports/
├── image.png                    # Asset 1
├── image-1.png                  # Asset 2
├── image-2.png                  # Asset 3
└── pasted_text/
    └── came-website-brief.md    # Original design brief
```

**Note**: Images from Figma imports are referenced via `figma:asset` scheme.

### `/src/styles/`

Global CSS and Tailwind configuration.

```
styles/
├── index.css                    # Main entry point
├── theme.css                    # Design tokens
├── fonts.css                    # Font imports
└── tailwind.css                 # Tailwind directives
```

#### `theme.css`

Design system tokens:

```css
:root {
  --color-navy: #0B2D5B;
  --color-sky-blue: #4FA3FF;
  --color-light-blue: #7FC4FF;
  --color-yellow: #FFC845;
  
  --font-family-base: 'Inter', sans-serif;
  
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}
```

#### `fonts.css`

Font imports (Google Fonts, etc.):

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## Configuration Files

### `package.json`

Project metadata and dependencies.

**Key Scripts**:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Major Dependencies**:
- React 18.3.1
- React Router 7.13.0
- Tailwind CSS 4.1.12
- Vite 6.3.5
- Radix UI components
- Material-UI (select components)
- Motion (animations)
- Recharts (charts)

### `vite.config.ts`

Vite build configuration.

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  // ... other config
});
```

### `postcss.config.mjs`

PostCSS configuration for Tailwind.

```javascript
export default {
  plugins: {
    tailwindcss: {},
  },
};
```

## Design Guidelines

### `/guidelines/Guidelines.md`

Original design brief and specifications.

**Contains**:
- Visual design system
- Color palette
- Typography scale
- Component specifications
- Page wireframes
- Image style guide

## Documentation Files

### `README.md`

Main project documentation with:
- Project overview
- Installation instructions
- Tech stack
- Site structure
- Key features
- Deployment info

### `CONTRIBUTING.md`

Contribution guidelines covering:
- Development workflow
- Code standards
- Translation guidelines
- Component guidelines
- Commit conventions
- Pull request process

### `DEPLOYMENT.md`

Deployment guide for:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Custom domain setup
- Performance optimization

### `TRANSLATIONS.md`

Translation system documentation:
- Architecture overview
- Adding translations
- Using translations in components
- Best practices
- Common issues

### `CHANGELOG.md`

Version history and release notes:
- v1.0.0 - Initial release
- Feature additions
- Bug fixes
- Breaking changes

### `LICENSE`

MIT License for the project.

## Architecture Patterns

### Component Composition

Components are composed hierarchically:

```
App
└── LanguageProvider
    └── RouterProvider
        └── Layout
            ├── Navigation
            ├── Page (from route)
            └── Footer
```

### Data Flow

```
LanguageContext
  ↓
useLanguage() hook
  ↓
Component accesses t.section.key
```

### Routing Pattern

```
/                          → Home
/about                     → About
/about/mission-vision      → Mission & Vision (child route)
/membership                → Membership
/membership/plans          → Plans (child route)
```

### Styling Approach

1. **Tailwind utility classes** for most styling
2. **Design tokens** in `theme.css` for consistency
3. **Component-specific CSS** only when necessary
4. **Responsive design** with Tailwind breakpoints

## Key Conventions

### File Naming

- **Components**: PascalCase (`MemberCard.tsx`)
- **Utilities**: camelCase (`utils.ts`)
- **Types**: PascalCase (`types.ts`)
- **Styles**: kebab-case (`theme.css`)

### Import Paths

```typescript
// Relative imports for local files
import { Component } from './Component';
import { Component } from '../components/Component';

// Package imports
import { useState } from 'react';
import { Link } from 'react-router';
```

### Component Structure

```typescript
// 1. Imports
import { useLanguage } from '../contexts/LanguageContext';

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
export function MyComponent({ title }: Props) {
  // 3a. Hooks
  const { t } = useLanguage();
  
  // 3b. State
  const [state, setState] = useState();
  
  // 3c. Effects
  useEffect(() => {}, []);
  
  // 3d. Handlers
  const handleClick = () => {};
  
  // 3e. Render
  return <div>{title}</div>;
}
```

## Development Workflow

### Adding a New Page

1. Create page component in `/src/app/pages/`
2. Add route in `/src/app/routes.tsx`
3. Add translations in appropriate file
4. Add navigation link if needed
5. Test both EN and FR

### Adding a New Feature

1. Create component in `/src/app/components/`
2. Add translations if needed
3. Import and use in pages
4. Test responsive design
5. Update documentation

### Modifying Styles

1. Use Tailwind classes when possible
2. Add custom CSS to `theme.css` for tokens
3. Avoid inline styles
4. Test dark mode compatibility (if applicable)

## Build Output

Production build creates optimized files in `/dist/`:

```
dist/
├── index.html               # Entry point
├── assets/
│   ├── index-[hash].js     # Main JavaScript bundle
│   ├── index-[hash].css    # Compiled styles
│   └── [images]            # Optimized images
└── ... other static assets
```

## Performance Considerations

- **Code Splitting**: Routes are lazy-loaded
- **Tree Shaking**: Unused code is removed
- **Asset Optimization**: Images compressed
- **Minification**: JS/CSS minified in production
- **Lazy Loading**: Images load as needed

## Accessibility

- **Radix UI**: All components are WCAG compliant
- **Semantic HTML**: Proper heading hierarchy
- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Screen reader friendly
- **Focus Management**: Visible focus indicators

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Known Limitations

- No backend/database (static site)
- No user authentication (placeholder only)
- Forms submit to frontend (no actual processing)
- Store is placeholder (no e-commerce)

---

**Last Updated**: April 2, 2026
