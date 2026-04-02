# Deployment Guide

This guide covers deploying the CAME website to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Build Process](#build-process)
- [Deployment Platforms](#deployment-platforms)
  - [Vercel](#vercel-recommended)
  - [Netlify](#netlify)
  - [GitHub Pages](#github-pages)
  - [Cloudflare Pages](#cloudflare-pages)
- [Environment Configuration](#environment-configuration)
- [Post-Deployment](#post-deployment)

## Prerequisites

Before deploying, ensure:

- [ ] All code is committed to Git
- [ ] Repository is pushed to GitHub
- [ ] Build runs successfully locally (`npm run build`)
- [ ] Both EN and FR translations are working
- [ ] All routes are functioning correctly

## Build Process

The project uses Vite for building:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

**Build Output**:
- Location: `dist/` directory
- Contents: Optimized static HTML, CSS, JS, and assets
- Ready for deployment to any static hosting service

## Deployment Platforms

### Vercel (Recommended)

Vercel offers excellent support for Vite + React applications.

#### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option 2: Deploy via Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository: `markmax777/CAME`
4. Configure project:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click "Deploy"

#### Vercel Configuration (Optional)

Create `vercel.json` in root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Netlify

Netlify provides simple continuous deployment.

#### Option 1: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Deploy to production
netlify deploy --prod
```

#### Option 2: Deploy via Netlify Dashboard

1. Visit [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `markmax777/CAME`
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node version**: 18 (or later)
5. Click "Deploy site"

#### Netlify Configuration

Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### GitHub Pages

Deploy directly from your GitHub repository.

#### Steps

1. Install `gh-pages` package:
```bash
npm install --save-dev gh-pages
```

2. Add deployment script to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts` with base path:
```typescript
export default defineConfig({
  base: '/CAME/', // Your repository name
  // ... other config
});
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages`
   - Save

**Note**: Site will be available at `https://markmax777.github.io/CAME/`

### Cloudflare Pages

Fast global CDN with excellent performance.

#### Steps

1. Visit [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to "Workers & Pages" → "Create application" → "Pages"
3. Connect to GitHub and select `markmax777/CAME`
4. Configure build:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click "Save and Deploy"

#### Cloudflare Configuration (Optional)

Create `_redirects` file in `public/` folder:

```
/* /index.html 200
```

## Environment Configuration

### Environment Variables

If your project needs environment variables:

1. Create `.env.production`:
```env
VITE_API_URL=https://api.came.ca
VITE_ANALYTICS_ID=your-analytics-id
```

2. Add to your deployment platform:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Build & deploy → Environment
   - **Cloudflare**: Settings → Environment Variables

### Build Optimization

The project is already configured for optimal builds:

- Code splitting
- Asset optimization
- Tree shaking
- Minification
- Lazy loading routes

## Post-Deployment

### Verification Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Language toggle (EN/FR) functions
- [ ] Responsive design on mobile/tablet/desktop
- [ ] All images load properly
- [ ] Forms submit correctly
- [ ] No console errors
- [ ] All sub-pages are accessible
- [ ] 404 page displays for invalid routes

### Testing Routes

Test these critical routes:

```
/
/about
/about/mission-vision
/about/leadership
/membership
/membership/plans
/professional-development
/community
/awards-grants
/foundation
/contact
/donate
```

### Custom Domain Setup

#### Vercel

1. Go to Project Settings → Domains
2. Add your domain: `came.ca`
3. Add DNS records as instructed
4. SSL certificate is automatic

#### Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Configure DNS:
   ```
   A     @     75.2.60.5
   CNAME www   your-site.netlify.app
   ```
4. HTTPS is automatic

#### Cloudflare Pages

1. Go to Custom domains
2. Add `came.ca`
3. DNS is automatically configured if domain is on Cloudflare
4. SSL/TLS is automatic

### Performance Optimization

After deployment, consider:

1. **Enable Compression**: Gzip/Brotli (usually automatic)
2. **CDN**: All recommended platforms include CDN
3. **Caching**: Set appropriate cache headers
4. **Analytics**: Add Google Analytics or similar
5. **Monitoring**: Set up uptime monitoring

### Continuous Deployment

All platforms support automatic deployment:

1. **Push to `main` branch** → Automatic deployment
2. **Preview Deployments**: Pull requests get preview URLs
3. **Rollback**: Easy rollback to previous deployments

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Routes Return 404

Ensure redirect rules are configured (see platform-specific sections above).

### Images Not Loading

Check that images in `/src/imports/` are included in the build.

### Large Bundle Size

- Check that tree-shaking is working
- Ensure production build is used
- Consider code splitting for large pages

## Support

For deployment issues:

- **Vercel**: [Vercel Support](https://vercel.com/support)
- **Netlify**: [Netlify Support](https://www.netlify.com/support/)
- **GitHub Pages**: [GitHub Docs](https://docs.github.com/pages)
- **Cloudflare**: [Cloudflare Support](https://support.cloudflare.com/)

---

**Last Updated**: April 2, 2026
