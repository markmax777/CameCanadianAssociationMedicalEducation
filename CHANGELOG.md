# Changelog

All notable changes to the CAME website project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-02

### Added

#### Core Features
- Complete bilingual English/French website with language toggle
- React Router 7 with hierarchical navigation structure
- Responsive design for mobile, tablet, and desktop
- Sticky navigation with "More" dropdown menu
- Professional footer with newsletter signup

#### Pages - About Section
- Mission & Vision page with organizational values
- Leadership section:
  - Board of Directors
  - Committees listing
  - School Representatives directory
- History & Impact timeline

#### Pages - Membership Section
- Membership overview with 7 official "Reasons to Join CAME"
- Membership Plans page with 4 tiers:
  - Individual Member ($195)
  - Early Career Member ($130)
  - Learner Member ($20)
  - Associate Member ($45)
- Benefits showcase
- Membership signup flow
- Member directory

#### Pages - Professional Development Section
- Leadership Programs overview
- CLIME Conference (1.0 and 2.0)
- ICLEM 10 conference details
- Webinars library
- Podcasts section
- Learning Resources hub

#### Pages - Community Section
- Newsletter archive and signup
- Special Interest Groups directory

#### Pages - Awards & Grants Section
- Awards & Nominations page with 7 major awards:
  - Rising Star Award
  - Certificate of Excellence
  - Certificate of Merit
  - Meridith Marks New Educator Award
  - Ian Hart Distinguished Contribution Award
  - CAME Service Award
  - Mid-Career Achievement Award
- Education Grants opportunities
- Past Winners showcase

#### Pages - Foundation Section
- About Foundation mission and impact
- Foundation Grants programs

#### Pages - Other
- Home page with hero section and key features
- Store page (merchandise placeholder)
- Contact page with form and information
- Donate page with CAME Foundation info
- Member Login page
- 404 Not Found page

#### Translation System
- Complete translation infrastructure using React Context
- 12 translation files covering all sections
- Seamless language switching with persistent selection
- Translation files:
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

#### Design System
- Blue-only color scheme:
  - Navy Blue (#0B2D5B)
  - Sky Blue (#4FA3FF)
  - Light Blue (#7FC4FF)
- Inter font family throughout
- Consistent spacing and typography
- Professional academic aesthetic

#### Components
- Reusable UI components from Radix UI
- Custom navigation with dropdown support
- Footer with multi-column layout
- Card components for programs, awards, and members
- Form components with validation
- Language toggle component

#### Technical Infrastructure
- Vite build system
- TypeScript for type safety
- Tailwind CSS v4 for styling
- React 18 with hooks
- Motion (Framer Motion) for animations
- Recharts for data visualization
- React Hook Form for form management

### Changed
- Updated membership pricing to official CAME rates
- Redesigned pricing cards with colored borders
- Replaced generic membership benefits with official 7 "Reasons to Join CAME"
- Improved responsive navigation with "More" dropdown
- Enhanced language toggle visibility and accessibility

### Fixed
- Translation bugs across 10 pages (Membership, Awards & Grants, Foundation sections)
- All hardcoded English strings now use translation system
- Language toggle now properly switches all content
- Navigation dropdown z-index issues
- Mobile menu responsiveness
- Form validation edge cases

### Security
- No exposed API keys or credentials
- Client-side only implementation
- Safe external link handling

---

## [0.2.0] - 2026-03-28

### Added
- Initial navigation structure
- Basic page routing
- Translation system foundation

### Changed
- Migrated from hardcoded text to translation files

### Fixed
- Routing issues with nested pages

---

## [0.1.0] - 2026-03-20

### Added
- Initial project setup
- Basic React + Vite configuration
- Tailwind CSS integration
- Initial design system tokens

---

## Future Releases

### [1.1.0] - Planned
- [ ] Member authentication system
- [ ] Event calendar integration
- [ ] Newsletter subscription backend
- [ ] Search functionality
- [ ] Member directory filtering
- [ ] Awards nomination form
- [ ] Grant application system

### [1.2.0] - Planned
- [ ] Store e-commerce functionality
- [ ] Payment integration for memberships
- [ ] Donation processing
- [ ] Member dashboard
- [ ] Content management system
- [ ] Blog/news posting system

### [2.0.0] - Planned
- [ ] Member portal with login
- [ ] Discussion forums
- [ ] Resource library with downloads
- [ ] Event registration system
- [ ] Certificate generation for programs
- [ ] Advanced analytics

---

**Note**: This changelog tracks significant changes. For detailed commit history, see the Git log.
