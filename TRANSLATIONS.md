# Translation Guide

This document explains how the bilingual (English/French) translation system works in the CAME website.

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Translation Files](#translation-files)
- [Adding New Translations](#adding-new-translations)
- [Using Translations](#using-translations)
- [Best Practices](#best-practices)
- [Common Issues](#common-issues)

## Overview

The CAME website is fully bilingual, supporting both English (EN) and French (FR). All content is translatable through a centralized system using React Context.

### Key Features

- ✅ Seamless language switching
- ✅ Persistent language selection
- ✅ Type-safe translations
- ✅ Organized by section
- ✅ Easy to maintain and extend

## Architecture

### Language Context

The translation system uses React Context to provide translations throughout the app.

**Location**: `/src/app/contexts/LanguageContext.tsx`

```typescript
interface LanguageContextType {
  language: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
  t: Translations;
}
```

### Translation Structure

All translations follow this pattern:

```typescript
export const sectionTranslations = {
  en: {
    // English translations
  },
  fr: {
    // French translations
  }
};
```

## Translation Files

All translation files are located in `/src/app/translations/`:

| File | Purpose | Sections Covered |
|------|---------|------------------|
| `home-translations.ts` | Homepage content | Hero, features, CTAs |
| `about-translations.ts` | About section | Mission, leadership, history |
| `membership-translations.ts` | Membership pages | Plans, benefits, reasons to join |
| `professional-development-translations.ts` | PD programs | CLIME, ICLEM, webinars, podcasts |
| `community-translations.ts` | Community pages | Newsletter, special interest groups |
| `awards-grants-translations.ts` | Awards & Grants | Awards list, grants, past winners |
| `foundation-translations.ts` | Foundation pages | About, grants |
| `nav-translations.ts` | Navigation menu | Main nav, dropdowns |
| `footer-translations.ts` | Footer content | Links, copyright |
| `common-translations.ts` | Shared strings | Buttons, labels, common phrases |
| `program-details-translations.ts` | Program details | CLIME, ICLEM specifics |
| `index.ts` | Central export | Combines all translations |

## Adding New Translations

### Step 1: Choose the Right File

Determine which translation file should contain your new content:

- **Page-specific content** → Use the relevant section file
- **Reusable strings** (buttons, labels) → Use `common-translations.ts`
- **Navigation items** → Use `nav-translations.ts`

### Step 2: Add to Both Languages

**Always add translations in pairs (EN + FR).**

```typescript
// In membership-translations.ts

export const membershipTranslations = {
  en: {
    // ... existing translations
    newSection: {
      title: "New Section Title",
      description: "Description in English",
      cta: "Call to Action"
    }
  },
  fr: {
    // ... existing translations
    newSection: {
      title: "Titre de la nouvelle section",
      description: "Description en français",
      cta: "Appel à l'action"
    }
  }
};
```

### Step 3: Update Index File

If you created a new translation file, export it in `/src/app/translations/index.ts`:

```typescript
export { newSectionTranslations } from './new-section-translations';
```

### Step 4: Update Type Definitions

The system is type-safe. Update types if adding new top-level sections:

```typescript
// In LanguageContext.tsx
export interface Translations {
  // ... existing sections
  newSection: typeof newSectionTranslations.en;
}
```

## Using Translations

### In Components

```typescript
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t, language } = useLanguage();

  return (
    <div>
      <h1>{t.membership.newSection.title}</h1>
      <p>{t.membership.newSection.description}</p>
      <button>{t.membership.newSection.cta}</button>
    </div>
  );
}
```

### With Dynamic Content

For interpolated strings:

```typescript
// Translation file
export const membershipTranslations = {
  en: {
    welcome: (name: string) => `Welcome, ${name}!`,
    price: (amount: number) => `$${amount} CAD`
  },
  fr: {
    welcome: (name: string) => `Bienvenue, ${name}!`,
    price: (amount: number) => `${amount} $ CAD`
  }
};

// Component
function Welcome({ userName }: { userName: string }) {
  const { t } = useLanguage();
  return <h1>{t.membership.welcome(userName)}</h1>;
}
```

### Arrays and Lists

For lists of items:

```typescript
export const membershipTranslations = {
  en: {
    benefits: [
      "Access to professional network",
      "Discounted conference rates",
      "Educational resources"
    ]
  },
  fr: {
    benefits: [
      "Accès au réseau professionnel",
      "Tarifs de conférence réduits",
      "Ressources éducatives"
    ]
  }
};

// Component
function BenefitsList() {
  const { t } = useLanguage();
  return (
    <ul>
      {t.membership.benefits.map((benefit, i) => (
        <li key={i}>{benefit}</li>
      ))}
    </ul>
  );
}
```

## Best Practices

### ✅ Do's

1. **Always add both languages simultaneously**
   ```typescript
   // Good
   en: { title: "Title" }
   fr: { title: "Titre" }
   ```

2. **Use descriptive keys**
   ```typescript
   // Good
   hero: { title, subtitle, cta }
   
   // Bad
   section1: { text1, text2, btn }
   ```

3. **Keep structure parallel**
   ```typescript
   // English and French should have identical structure
   en: {
     section: { title, items: [...] }
   }
   fr: {
     section: { title, items: [...] }
   }
   ```

4. **Group related content**
   ```typescript
   // Good
   membership: {
     plans: { ... },
     benefits: { ... },
     signup: { ... }
   }
   ```

5. **Use functions for dynamic content**
   ```typescript
   greeting: (name: string) => `Hello, ${name}`
   ```

### ❌ Don'ts

1. **Don't hardcode strings in components**
   ```typescript
   // Bad
   <h1>Membership Plans</h1>
   
   // Good
   <h1>{t.membership.plans.title}</h1>
   ```

2. **Don't leave missing translations**
   ```typescript
   // Bad - FR missing
   en: { title: "Title" }
   fr: { }
   ```

3. **Don't nest too deeply**
   ```typescript
   // Bad - too many levels
   section.subsection.item.subitem.text.title
   
   // Good - 2-3 levels max
   section.item.title
   ```

4. **Don't duplicate translations**
   ```typescript
   // Bad - duplicate "Submit" everywhere
   form1: { submit: "Submit" }
   form2: { submit: "Submit" }
   
   // Good - use common translations
   common: { submit: "Submit" }
   ```

## Common Issues

### Issue: Missing Translation

**Symptom**: Blank text or error in console

**Solution**: Ensure translation exists in both EN and FR

```typescript
// Check both languages have the key
en: { newKey: "English text" }
fr: { newKey: "Texte français" }
```

### Issue: Language Not Switching

**Symptom**: Content doesn't change when toggling language

**Solution**: Verify you're using `t` from `useLanguage()`, not hardcoded strings

```typescript
// Wrong
<h1>Membership</h1>

// Correct
const { t } = useLanguage();
<h1>{t.membership.title}</h1>
```

### Issue: Type Errors

**Symptom**: TypeScript errors when accessing translations

**Solution**: Ensure translation structure matches type definitions

```typescript
// Translation file structure must match
export const membershipTranslations = {
  en: {
    title: "Membership",
    plans: { /* ... */ }
  },
  fr: {
    title: "Adhésion",
    plans: { /* ... */ }  // Same structure as EN
  }
};
```

### Issue: Text Overflow in French

**Symptom**: French text is longer and breaks layout

**Solution**: Test both languages and adjust CSS

```typescript
// Use flexible layouts
<div className="flex-1 min-w-0">
  <p className="truncate">{t.longText}</p>
</div>
```

## Testing Translations

### Manual Testing Checklist

- [ ] Toggle language switcher
- [ ] Verify all text changes
- [ ] Check for layout breaks
- [ ] Test on mobile and desktop
- [ ] Verify special characters display correctly (é, è, à, etc.)
- [ ] Check plurals work in both languages

### Automated Testing

```typescript
// Example test
describe('Translations', () => {
  it('should have matching structure in EN and FR', () => {
    const enKeys = Object.keys(membershipTranslations.en);
    const frKeys = Object.keys(membershipTranslations.fr);
    expect(enKeys).toEqual(frKeys);
  });
});
```

## Adding a New Page

When creating a new page, follow this workflow:

1. **Create translation entries**
   ```typescript
   // In appropriate translation file
   newPage: {
     title: "Page Title",
     content: "Page content..."
   }
   ```

2. **Use in component**
   ```typescript
   function NewPage() {
     const { t } = useLanguage();
     return <h1>{t.section.newPage.title}</h1>;
   }
   ```

3. **Test both languages**
   - Switch to EN → verify content
   - Switch to FR → verify content
   - Check responsive layout in both

## French Translation Tips

### Common Patterns

| English | French | Notes |
|---------|--------|-------|
| Sign Up | S'inscrire | Reflexive verb |
| Learn More | En savoir plus | Common phrase |
| Contact Us | Nous contacter | Infinitive form |
| About | À propos | Preposition required |
| Members | Membres | No apostrophe |
| Leadership | Leadership | Same in French |

### Capitalization

- **English**: Capitalize Most Words in Titles
- **French**: Capitalize only first word (unless proper noun)

```typescript
en: { title: "Membership Benefits" }
fr: { title: "Avantages de l'adhésion" }
```

### Gender Agreement

Remember to match article/adjective gender:

```typescript
// Masculine
"un membre" (a member)

// Feminine  
"une conférence" (a conference)
```

## Resources

### Translation Tools

- [DeepL](https://www.deepl.com/translator) - High-quality translations
- [Linguee](https://www.linguee.com/) - Context examples
- [Government of Canada Style Guide](https://www.noslangues-ourlanguages.gc.ca/)

### Getting Help

For translation questions:
1. Check existing translations for similar phrases
2. Consult `common-translations.ts` for reusable strings
3. Review Government of Canada bilingual standards
4. Seek professional translation for critical content

---

**Last Updated**: April 2, 2026
