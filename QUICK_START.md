# Quick Start Guide

Get up and running with the CAME website in 5 minutes.

## Prerequisites

- Node.js 18 or higher
- npm, pnpm, or yarn
- Git

## Installation

```bash
# Clone the repository
git clone https://github.com/markmax777/CAME.git

# Navigate to project
cd CAME

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## Common Tasks

### 1. Edit Homepage Content

```typescript
// File: /src/app/translations/home-translations.ts

export const homeTranslations = {
  en: {
    hero: {
      title: "Your New Title",  // ← Edit here
      subtitle: "Your subtitle"
    }
  },
  fr: {
    hero: {
      title: "Votre nouveau titre",  // ← And here
      subtitle: "Votre sous-titre"
    }
  }
};
```

### 2. Add a New Page

**Step 1**: Create page component

```typescript
// File: /src/app/pages/NewPage.tsx

import { useLanguage } from '../contexts/LanguageContext';

export function NewPage() {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#0B2D5B]">
        {t.newPage.title}
      </h1>
      <p className="mt-4 text-lg">
        {t.newPage.content}
      </p>
    </div>
  );
}
```

**Step 2**: Add route

```typescript
// File: /src/app/routes.tsx

import { NewPage } from './pages/NewPage';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // ... existing routes
      { path: "new-page", Component: NewPage },
    ]
  }
]);
```

**Step 3**: Add translations

```typescript
// File: /src/app/translations/common-translations.ts

export const commonTranslations = {
  en: {
    newPage: {
      title: "New Page",
      content: "Page content here"
    }
  },
  fr: {
    newPage: {
      title: "Nouvelle page",
      content: "Contenu de la page ici"
    }
  }
};
```

**Step 4**: Add navigation link (optional)

```typescript
// File: /src/app/components/Navigation.tsx

<Link to="/new-page" className="hover:text-[#4FA3FF]">
  {t.nav.newPage}
</Link>
```

### 3. Change Colors

```typescript
// Use design system colors in components

// Navy Blue (primary)
className="bg-[#0B2D5B] text-white"

// Sky Blue (secondary)
className="bg-[#4FA3FF] text-white"

// Light Blue (accent)
className="bg-[#7FC4FF] text-[#0B2D5B]"

// Yellow (CTAs only)
className="bg-[#FFC845] text-[#0B2D5B]"
```

### 4. Update Membership Pricing

```typescript
// File: /src/app/pages/membership/Plans.tsx

const plans = [
  {
    name: "Individual",
    price: 195,  // ← Change price here
    features: [...]
  },
  // ... other plans
];
```

Also update translations:

```typescript
// File: /src/app/translations/membership-translations.ts

en: {
  plans: {
    individual: {
      price: "$195",  // ← Update here
    }
  }
}
```

### 5. Switch Language

Click the **EN/FR** toggle in the top-right navigation.

Or programmatically:

```typescript
const { setLanguage } = useLanguage();

// Switch to French
setLanguage('fr');

// Switch to English
setLanguage('en');
```

### 6. Add New Translation

```typescript
// 1. Add to translation file
export const membershipTranslations = {
  en: {
    newFeature: {
      title: "New Feature",
      description: "Feature description"
    }
  },
  fr: {
    newFeature: {
      title: "Nouvelle fonctionnalité",
      description: "Description de la fonctionnalité"
    }
  }
};

// 2. Use in component
const { t } = useLanguage();
<h2>{t.membership.newFeature.title}</h2>
```

## Project Structure (Simplified)

```
CAME/
├── src/
│   ├── app/
│   │   ├── components/       ← Reusable components
│   │   ├── pages/           ← Page components
│   │   ├── translations/    ← EN/FR translations
│   │   ├── routes.tsx       ← URL routing
│   │   └── App.tsx          ← Root component
│   └── styles/
│       └── theme.css        ← Design tokens
├── package.json             ← Dependencies
└── README.md               ← Full documentation
```

## Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
git add .
git commit -m "Your changes"
git push origin main
```

## Design System Quick Reference

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#0B2D5B` | Primary brand, headings |
| Sky Blue | `#4FA3FF` | Links, secondary elements |
| Light Blue | `#7FC4FF` | Accents, highlights |
| Yellow | `#FFC845` | CTAs only (Become Member, Donate) |

### Typography

```typescript
// Heading sizes
<h1 className="text-5xl">       // Hero (64-72px)
<h1 className="text-4xl">       // Page title (42px)
<h2 className="text-3xl">       // Section (32px)
<h3 className="text-xl">        // Subsection (22px)
<p className="text-base">       // Body (16-18px)
```

### Spacing

```typescript
className="p-4"    // Padding
className="m-4"    // Margin
className="gap-4"  // Gap between flex items
className="space-y-4"  // Vertical spacing between children
```

### Common Layouts

```typescript
// Container
<div className="container mx-auto px-4 py-12">

// Two-column grid
<div className="grid md:grid-cols-2 gap-8">

// Three-column grid
<div className="grid md:grid-cols-3 gap-6">

// Centered content
<div className="flex items-center justify-center min-h-screen">
```

## Debugging

### Translation not showing?

1. Check translation file has both EN and FR
2. Verify you're using `t.section.key` not hardcoded string
3. Check console for errors

### Page not loading?

1. Verify route is added in `routes.tsx`
2. Check component is imported correctly
3. Look for errors in browser console

### Styling not working?

1. Ensure Tailwind classes are spelled correctly
2. Check that custom colors use `[]` syntax: `bg-[#0B2D5B]`
3. Verify responsive classes: `md:`, `lg:`

### Build failing?

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

## Testing Checklist

Before deploying:

- [ ] Test both EN and FR languages
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Verify all navigation links work
- [ ] Test forms (even if they're placeholders)
- [ ] Check images load correctly
- [ ] Verify no console errors
- [ ] Run production build successfully

## Getting Help

1. **Documentation**: Check README.md, CONTRIBUTING.md
2. **Translations**: See TRANSLATIONS.md
3. **Deployment**: See DEPLOYMENT.md
4. **Structure**: See PROJECT_STRUCTURE.md

## Next Steps

Once you're comfortable:

1. Read the full [README.md](./README.md)
2. Review [CONTRIBUTING.md](./CONTRIBUTING.md) for code standards
3. Check [TRANSLATIONS.md](./TRANSLATIONS.md) for translation system
4. Explore [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options

---

**Questions?** Open an issue or check the documentation files.

**Last Updated**: April 2, 2026
