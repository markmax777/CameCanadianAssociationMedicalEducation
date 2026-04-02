# CAME - Canadian Association for Medical Education

A modern, academic-grade website for the Canadian Association for Medical Education (CAME), built with React, TypeScript, and Tailwind CSS.

## 🎯 Project Overview

This website serves as the digital home for CAME, Canada's national organization dedicated to promoting, advancing, and recognizing excellence across the full continuum of medical education. The site is designed to match the quality and professionalism of top medical schools like Harvard Medical School and Stanford Medicine.

### Primary Goals

- **Increase CAME Membership** - Streamlined membership signup and benefits showcase
- **Promote Leadership Programs** - Highlight CLIME, ICLEM, and other educational programs
- **Build Community** - Connect medical educators across Canada
- **Encourage Support** - Facilitate donations through the CAME Foundation

## 🎨 Design System

### Color Palette

- **Navy Blue**: `#0B2D5B` - Primary brand color
- **Sky Blue**: `#4FA3FF` - Secondary highlights
- **Light Blue**: `#7FC4FF` - Tertiary accents
- **Yellow**: `#FFC845` - High-priority CTAs only (Become a Member, Donate, Register)

### Typography

- **Font Family**: Inter
- **Hero Title**: 64-72px
- **Page Title**: 42px
- **Section Title**: 32px
- **Subsection**: 22px
- **Body Text**: 16-18px

## 🌐 Bilingual Support

The website features full English/French translation support:

- **Language Toggle**: EN/FR switcher in navigation
- **Translation System**: React Context-based with dedicated translation files
- **Coverage**: All pages and components are fully translated

### Translation Files

Located in `/src/app/translations/`:
- `home-translations.ts`
- `about-translations.ts`
- `membership-translations.ts`
- `professional-development-translations.ts`
- `community-translations.ts`
- `awards-grants-translations.ts`
- `foundation-translations.ts`
- `nav-translations.ts`
- `footer-translations.ts`
- `common-translations.ts`
- `program-details-translations.ts`

## 🗂️ Site Structure

```
Home
│
├── About
│   ├── Mission & Vision
│   ├── Leadership
│   │   ├── Board of Directors
│   │   ├── Committees
│   │   └── School Representatives
│   └── History & Impact
│
├── Membership
│   ├── Benefits
│   ├── Plans (Individual $195, Early Career $130, Learner $20, Associate $45)
│   ├── Become a Member
│   └── Directory
│
├── Professional Development
│   ├── Leadership Programs
│   ├── CLIME (1.0 & 2.0)
│   ├── ICLEM 10
│   ├── Webinars
│   ├── Podcasts
│   └── Learning Resources
│
├── Community
│   ├── Newsletter
│   └── Special Interest Groups
│
├── Awards & Grants (in "More" dropdown)
│   ├── Awards & Nominations
│   ├── Education Grants
│   └── Past Winners
│
├── Foundation (in "More" dropdown)
│   ├── About Foundation
│   └── Foundation Grants
│
├── Store (in "More" dropdown)
├── Contact (in "More" dropdown)
└── Donate (in "More" dropdown)
```

## 🛠️ Tech Stack

### Core Technologies

- **React 18.3.1** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router 7** - Client-side routing with Data mode
- **Tailwind CSS 4** - Utility-first styling

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Motion** - Animations (formerly Framer Motion)
- **Recharts** - Data visualization
- **Sonner** - Toast notifications

### Additional Libraries

- **React Hook Form** - Form management
- **Material-UI** - Select components
- **date-fns** - Date utilities
- **canvas-confetti** - Celebration effects

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/markmax777/CAME.git

# Navigate to project directory
cd CAME

# Install dependencies (using pnpm)
pnpm install

# Or with npm
npm install
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
CAME/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable components
│   │   │   ├── ui/             # Radix UI components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── contexts/           # React contexts
│   │   │   └── LanguageContext.tsx
│   │   ├── pages/              # Route pages
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Membership.tsx
│   │   │   ├── about/          # About sub-pages
│   │   │   ├── membership/     # Membership sub-pages
│   │   │   ├── professional-development/
│   │   │   ├── community/
│   │   │   ├── awards-grants/
│   │   │   └── foundation/
│   │   ├── translations/       # i18n translation files
│   │   ├── App.tsx            # Root component
│   │   └── routes.tsx         # Route configuration
│   ├── styles/
│   │   ├── index.css          # Global styles
│   │   ├── theme.css          # Theme tokens
│   │   ├── fonts.css          # Font imports
│   │   └── tailwind.css       # Tailwind directives
│   └── imports/               # Images and assets
├── package.json
├── vite.config.ts
└── README.md
```

## 🎯 Key Features

### Navigation

- **Hierarchical Structure**: 9 main sections with smart "More" dropdown
- **Sticky Navigation**: Stays visible while scrolling
- **Mobile Responsive**: Hamburger menu for smaller screens
- **Language Toggle**: Seamless EN/FR switching

### Membership System

- **Four Membership Tiers**:
  - Individual Member ($195)
  - Early Career Member ($130)
  - Learner Member ($20)
  - Associate Member ($45)
- **7 Official Benefits**: Timeline-style "Reasons to Join CAME"
- **Signup Flow**: Multi-step form with validation

### Professional Development

- **CLIME Conference**: Leadership program details
- **ICLEM**: International conference information
- **Resources**: Webinars, podcasts, learning materials

### Awards & Grants

- **7 Major Awards**: Rising Star, Certificate of Excellence, Ian Hart Award, etc.
- **Education Grants**: Funding opportunities for medical education
- **Past Winners**: Recognition showcase

### Foundation

- **About Foundation**: Mission and impact
- **Grant Programs**: Available funding opportunities

## 🌍 Deployment

This project is configured for deployment to modern hosting platforms:

### Recommended Platforms

- **Vercel** - Optimized for React/Vite projects
- **Netlify** - Simple continuous deployment
- **GitHub Pages** - Free static hosting
- **Cloudflare Pages** - Fast global CDN

### Build Configuration

```bash
# Build command
npm run build

# Output directory
dist/
```

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to the Canadian Association for Medical Education (CAME).

## 📧 Contact

**Canadian Association for Medical Education (CAME)**

- **Address**: 150 Elgin Street, 10th Floor, Ottawa, Ontario K2P 1L4
- **Phone**: 613-730-8173
- **Fax**: (613) 730-1196
- **Email**: came@afmc.ca
- **Website**: [coming soon]
- **X (Twitter)**: https://x.com/cameacem

## 🙏 Acknowledgments

- Design inspired by Harvard Medical School, Stanford Medicine, and Johns Hopkins Medicine
- Built with modern React best practices
- Accessibility-first component library (Radix UI)
- Translation system for Canadian bilingual requirements

---

**Last Updated**: April 2, 2026
**Version**: 1.0.0
**Status**: Production Ready ✅