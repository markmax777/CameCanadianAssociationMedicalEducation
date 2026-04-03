# Responsive Navbar Component Guide

A clean, modern, fully responsive navigation bar built with React, TypeScript, and Tailwind CSS.

## 🎯 Features

- ✅ **Responsive Design** - Adapts to desktop, tablet, and mobile screens
- ✅ **Dropdown Menu** - Supports nested navigation items
- ✅ **Hamburger Menu** - Mobile-friendly hamburger icon on small screens
- ✅ **Smooth Animations** - Transitions and hover effects
- ✅ **Sticky Navigation** - Stays at the top while scrolling
- ✅ **Lucide Icons** - Uses lucide-react for crisp, modern icons
- ✅ **TypeScript Ready** - Fully typed for better development experience
- ✅ **Zero Dependencies** - Only uses lucide-react (already installed)

## 📁 Files

- `/src/app/components/Navbar.tsx` - Main navbar component
- `/src/app/components/NavbarDemo.tsx` - Demo page with sample content

## 🚀 Quick Start

### 1. View the Demo

Update your `/src/app/App.tsx` to use the demo:

```tsx
import NavbarDemo from './components/NavbarDemo';

export default function App() {
  return <NavbarDemo />;
}
```

### 2. Use the Navbar Component

Or import just the navbar into your existing app:

```tsx
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Your content here */}
    </div>
  );
}
```

## 🎨 Customization

### Change Colors

The navbar uses Tailwind CSS classes. Modify colors in `/src/app/components/Navbar.tsx`:

```tsx
// Current: Blue theme
className="bg-blue-600 text-white hover:bg-blue-700"

// Change to: Green theme
className="bg-green-600 text-white hover:bg-green-700"

// Change to: Purple theme
className="bg-purple-600 text-white hover:bg-purple-700"
```

### Update Logo

Replace the gradient logo (lines 23-29 in Navbar.tsx):

```tsx
{/* Current: Gradient box with letter */}
<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
  <span className="text-white font-bold text-xl">L</span>
</div>

{/* Option 1: Use an image */}
<img src="/logo.png" alt="Logo" className="w-10 h-10" />

{/* Option 2: Use an SVG */}
<svg className="w-10 h-10" viewBox="0 0 24 24">
  {/* Your SVG paths */}
</svg>
```

### Modify Menu Items

Edit the navigation links (lines 37-80 in Navbar.tsx):

```tsx
{/* Desktop Navigation */}
<a href="#home">Home</a>
<a href="#about">About</a>

{/* Add new items */}
<a href="#pricing">Pricing</a>
<a href="#blog">Blog</a>
```

### Add/Remove Dropdown Items

Modify the dropdown menu (lines 51-75 in Navbar.tsx):

```tsx
{/* Current dropdown items */}
<a href="#web-design">Web Design</a>
<a href="#development">Development</a>
<a href="#consulting">Consulting</a>
<a href="#support">Support</a>

{/* Add more items */}
<a href="#marketing">Marketing</a>
<a href="#analytics">Analytics</a>
```

### Change Sticky Behavior

Remove sticky positioning if needed (line 18 in Navbar.tsx):

```tsx
{/* Current: Sticky */}
<nav className="bg-white shadow-md sticky top-0 z-50">

{/* Change to: Fixed */}
<nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">

{/* Change to: Regular (no sticky) */}
<nav className="bg-white shadow-md">
```

## 🎯 Advanced Features

### Add React Router Links

If using React Router, replace `<a>` tags with `<Link>`:

```tsx
import { Link } from 'react-router';

// Replace
<a href="#home">Home</a>

// With
<Link to="/">Home</Link>
```

### Add Active State

Highlight the current page:

```tsx
import { useLocation } from 'react-router';

function Navbar() {
  const location = useLocation();
  
  return (
    <a 
      href="/"
      className={`${
        location.pathname === '/' 
          ? 'text-blue-600' 
          : 'text-gray-700'
      } hover:text-blue-600`}
    >
      Home
    </a>
  );
}
```

### Add Search Bar

Insert a search bar in the desktop navigation:

```tsx
<div className="hidden md:flex md:items-center md:space-x-8">
  {/* Add search before menu items */}
  <div className="relative">
    <input
      type="text"
      placeholder="Search..."
      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
  </div>
  
  {/* Rest of menu items */}
</div>
```

### Add Multi-Level Dropdowns

For nested dropdowns, add state management:

```tsx
const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

<div className="relative group">
  <button>Services</button>
  <div className="dropdown">
    <button 
      onMouseEnter={() => setOpenSubMenu('design')}
      className="flex items-center justify-between w-full"
    >
      <span>Design</span>
      <ChevronRight className="w-4 h-4" />
    </button>
    
    {openSubMenu === 'design' && (
      <div className="absolute left-full top-0 ml-1">
        <a href="#ui">UI Design</a>
        <a href="#ux">UX Design</a>
      </div>
    )}
  </div>
</div>
```

## 📱 Responsive Breakpoints

The navbar uses these breakpoints:

- **Mobile**: < 768px (hamburger menu)
- **Desktop**: ≥ 768px (full navigation)

Customize breakpoints using Tailwind's responsive prefixes:

```tsx
{/* Hidden on mobile, visible on tablet and up */}
<div className="hidden md:flex">

{/* Hidden on tablet and up, visible on mobile */}
<div className="md:hidden">

{/* Custom breakpoint */}
<div className="hidden lg:flex"> {/* 1024px and up */}
```

## 🎨 Style Variants

### Transparent Navbar (for hero sections)

```tsx
<nav className="bg-transparent text-white absolute top-0 left-0 right-0 z-50">
```

### Dark Mode

```tsx
<nav className="bg-gray-900 text-white shadow-lg">
  {/* Update all text colors */}
  <a className="text-gray-300 hover:text-white">
```

### Bordered Navbar

```tsx
<nav className="bg-white border-b-2 border-gray-200">
```

### Glassmorphism Effect

```tsx
<nav className="bg-white/80 backdrop-blur-md shadow-md">
```

## 🔧 Troubleshooting

### Icons not showing?

Make sure lucide-react is installed:

```bash
npm install lucide-react
# or
pnpm install lucide-react
```

### Dropdown not closing on mobile?

The `closeMenu()` function handles this. Make sure it's called on all mobile links:

```tsx
<a href="#home" onClick={closeMenu}>Home</a>
```

### Navbar overlapping content?

Add padding to your main content:

```tsx
<main className="pt-16"> {/* 16 = h-16 of navbar */}
  {/* Your content */}
</main>
```

## 📦 Production Build

The component is production-ready:

```bash
npm run build
# or
pnpm build
```

All imports use valid paths:
- ✅ `lucide-react` (npm package)
- ✅ Relative component imports
- ✅ No figma:asset or environment-specific imports

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Vite](https://vitejs.dev)

---

**Built with ❤️ using React + Vite + Tailwind CSS**
