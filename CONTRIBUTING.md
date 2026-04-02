# Contributing to CAME Website

Thank you for your interest in contributing to the Canadian Association for Medical Education (CAME) website project!

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Translation Guidelines](#translation-guidelines)
- [Component Guidelines](#component-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Git
- Code editor (VS Code recommended)

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/markmax777/CAME.git
cd CAME

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/membership-signup`)
- `fix/` - Bug fixes (e.g., `fix/navigation-dropdown`)
- `refactor/` - Code refactoring (e.g., `refactor/translation-system`)
- `docs/` - Documentation updates (e.g., `docs/readme-update`)
- `style/` - Styling changes (e.g., `style/homepage-hero`)

### Development Process

1. Create a new branch from `main`
2. Make your changes
3. Test thoroughly (both EN and FR)
4. Commit with descriptive messages
5. Push and create a Pull Request

## Code Standards

### TypeScript

- Use TypeScript for all new files
- Define proper types/interfaces
- Avoid `any` types when possible
- Use descriptive variable names

```typescript
// Good
interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

// Avoid
const data: any = { ... };
```

### React Best Practices

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use proper prop types

```typescript
// Good - Small, focused component
export function MembershipCard({ plan }: { plan: MembershipPlan }) {
  return (
    <div className="rounded-lg border p-6">
      <h3>{plan.name}</h3>
      <p>${plan.price}</p>
    </div>
  );
}
```

### Styling Guidelines

- Use Tailwind CSS classes
- Follow the design system colors:
  - Navy: `#0B2D5B`
  - Sky Blue: `#4FA3FF`
  - Light Blue: `#7FC4FF`
  - Yellow CTA: `#FFC845` (use sparingly)
- Maintain responsive design (mobile-first)
- Keep spacing generous and breathable

```tsx
// Good - Consistent with design system
<button className="bg-[#FFC845] hover:bg-[#FFD666] text-[#0B2D5B] px-6 py-3 rounded-lg">
  Become a Member
</button>
```

## Translation Guidelines

### Adding New Content

**Always add both English and French translations simultaneously.**

1. Locate the appropriate translation file in `/src/app/translations/`
2. Add entries to both `en` and `fr` objects
3. Use the `useLanguage()` hook to access translations

```typescript
// In translation file
export const homeTranslations = {
  en: {
    hero: {
      title: "Advancing Excellence in Medical Education",
      subtitle: "Canada's national organization..."
    }
  },
  fr: {
    hero: {
      title: "Promouvoir l'excellence en éducation médicale",
      subtitle: "L'organisation nationale du Canada..."
    }
  }
};

// In component
const { t } = useLanguage();
<h1>{t.home.hero.title}</h1>
```

### Translation File Organization

- `home-translations.ts` - Homepage content
- `about-translations.ts` - About section pages
- `membership-translations.ts` - Membership pages
- `professional-development-translations.ts` - PD programs
- `community-translations.ts` - Community pages
- `awards-grants-translations.ts` - Awards & Grants
- `foundation-translations.ts` - Foundation pages
- `nav-translations.ts` - Navigation menu items
- `footer-translations.ts` - Footer content
- `common-translations.ts` - Shared strings (buttons, labels)
- `program-details-translations.ts` - Program-specific details

### Translation Checklist

- [ ] Added English translation
- [ ] Added French translation
- [ ] Tested language toggle
- [ ] Verified proper formatting
- [ ] Checked for text overflow on both languages

## Component Guidelines

### File Structure

```
src/app/components/
├── ui/                    # Reusable UI primitives
├── Navigation.tsx         # Main navigation
├── Footer.tsx            # Site footer
└── Layout.tsx            # Page wrapper
```

### Creating New Components

1. Place in appropriate directory
2. Use TypeScript
3. Export as named export
4. Include prop types
5. Add translations if needed

```typescript
// components/MemberCard.tsx
interface MemberCardProps {
  name: string;
  role: string;
  image?: string;
}

export function MemberCard({ name, role, image }: MemberCardProps) {
  return (
    <div className="rounded-lg border p-4">
      {image && <img src={image} alt={name} className="w-full" />}
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}
```

### Using UI Components

The project uses Radix UI primitives located in `/src/app/components/ui/`. These are pre-built, accessible components:

- `Button` - Buttons with variants
- `Card` - Card layouts
- `Dialog` - Modal dialogs
- `Select` - Dropdown selects
- `Tabs` - Tab navigation
- And many more...

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Formatting, missing semicolons, etc.
- `refactor` - Code restructuring
- `test` - Adding tests
- `chore` - Maintenance tasks

### Examples

```bash
feat(membership): add early career pricing tier

- Added $130 Early Career membership option
- Updated pricing cards with colored borders
- Added translation support for new tier

Closes #45
```

```bash
fix(navigation): resolve dropdown menu z-index issue

The "More" dropdown was appearing behind hero images.
Increased z-index to 50 to fix the issue.
```

## Pull Request Process

### Before Submitting

1. **Test Both Languages**: Verify EN and FR work correctly
2. **Check Responsive Design**: Test mobile, tablet, desktop
3. **Run Build**: Ensure `pnpm build` completes successfully
4. **Review Your Changes**: Self-review the diff
5. **Update Documentation**: If adding features, update README

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested in English
- [ ] Tested in French
- [ ] Tested on mobile
- [ ] Tested on desktop

## Screenshots
[Add screenshots if applicable]

## Checklist
- [ ] Code follows project style guidelines
- [ ] Added translations for both languages
- [ ] Updated documentation if needed
- [ ] Build passes successfully
```

### Review Process

1. Submit PR with clear description
2. Address review feedback
3. Ensure CI checks pass
4. Wait for approval from maintainers
5. Squash and merge when approved

## Questions?

If you have questions about contributing, please:

1. Check existing documentation
2. Search closed issues
3. Open a new issue with the `question` label

---

Thank you for contributing to CAME! 🎓
