# GitHub Setup Guide

Complete guide to push your CAME website to GitHub and set up your repository.

## Pre-Push Checklist

Before pushing to GitHub, ensure:

- [ ] All files are saved
- [ ] Project builds successfully (`npm run build`)
- [ ] No sensitive data (API keys, passwords) in code
- [ ] .gitignore is configured properly
- [ ] README.md is complete and accurate

## Step-by-Step GitHub Setup

### 1. Initialize Git Repository (if not already done)

```bash
# Navigate to your project directory
cd CAME

# Initialize git (if needed)
git init

# Check current status
git status
```

### 2. Review Files to be Committed

```bash
# See what will be committed
git status

# See the .gitignore file
cat .gitignore
```

**Verify these are NOT staged**:
- `node_modules/`
- `dist/`
- `.env` files
- `pnpm-lock.yaml` (if using npm/yarn)

### 3. Stage All Files

```bash
# Add all files
git add .

# Or add specific files
git add src/
git add package.json
git add README.md
# ... etc.

# Verify what's staged
git status
```

### 4. Make Initial Commit

```bash
# Commit with descriptive message
git commit -m "Initial commit: CAME website v1.0.0

- Complete bilingual (EN/FR) website
- React Router with hierarchical navigation
- Full translation system across all pages
- Membership system with official pricing
- Professional Development programs (CLIME, ICLEM)
- Awards & Grants section
- Foundation pages
- Comprehensive documentation"
```

### 5. Create GitHub Repository

**Option A: Via GitHub Website**

1. Go to [github.com](https://github.com)
2. Click the **+** icon → **New repository**
3. Fill in details:
   - **Repository name**: `CAME`
   - **Description**: "Canadian Association for Medical Education (CAME) - Official bilingual website for medical educators"
   - **Visibility**: Private or Public (your choice)
   - **DO NOT** initialize with README (you already have one)
   - **DO NOT** add .gitignore (you already have one)
   - **DO NOT** add a license (you already have one)
4. Click **Create repository**

**Option B: Via GitHub CLI**

```bash
# Install GitHub CLI if needed
# https://cli.github.com/

# Login to GitHub
gh auth login

# Create repository
gh repo create CAME --public --source=. --remote=origin --push
```

### 6. Connect Local Repository to GitHub

```bash
# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/markmax777/CAME.git

# Verify remote
git remote -v
```

Should show:
```
origin  https://github.com/markmax777/CAME.git (fetch)
origin  https://github.com/markmax777/CAME.git (push)
```

### 7. Push to GitHub

```bash
# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**If you encounter authentication issues**:

```bash
# Use personal access token instead of password
# Generate token at: https://github.com/settings/tokens

# Or use SSH (recommended)
# 1. Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. Add to ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. Add SSH key to GitHub
# Copy key to clipboard
cat ~/.ssh/id_ed25519.pub
# Add at: https://github.com/settings/keys

# 4. Change remote to SSH
git remote set-url origin git@github.com:markmax777/CAME.git

# 5. Push again
git push -u origin main
```

### 8. Verify Upload

1. Go to `https://github.com/markmax777/CAME`
2. Check that all files are present
3. Verify README.md displays correctly
4. Check that documentation files are visible

## Repository Configuration

### Set Repository Description

1. Go to repository settings
2. Add description: "Canadian Association for Medical Education (CAME) - Official bilingual website for medical educators"
3. Add topics:
   - `medical-education`
   - `healthcare`
   - `canada`
   - `bilingual`
   - `react`
   - `typescript`
   - `vite`
   - `tailwindcss`

### Configure Repository Settings

#### General Settings

- [ ] Set default branch to `main`
- [ ] Enable "Require pull request reviews before merging"
- [ ] Enable "Require status checks to pass before merging"
- [ ] Enable "Automatically delete head branches"

#### Branch Protection Rules

1. Go to Settings → Branches
2. Add rule for `main` branch:
   - [ ] Require pull request before merging
   - [ ] Require approvals (1-2)
   - [ ] Dismiss stale pull request approvals
   - [ ] Require status checks to pass
   - [ ] Include administrators (optional)

### Add Collaborators

1. Go to Settings → Collaborators
2. Click "Add people"
3. Enter GitHub usernames
4. Assign appropriate permissions

## Create GitHub Issues Templates

### Bug Report Template

Create `.github/ISSUE_TEMPLATE/bug_report.md`:

```markdown
---
name: Bug Report
about: Create a report to help us improve
title: '[BUG] '
labels: bug
assignees: ''
---

**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- Browser: [e.g., Chrome 122]
- Device: [e.g., iPhone 12, Desktop]
- Language: [EN/FR]

**Additional context**
Any other context about the problem.
```

### Feature Request Template

Create `.github/ISSUE_TEMPLATE/feature_request.md`:

```markdown
---
name: Feature Request
about: Suggest an idea
title: '[FEATURE] '
labels: enhancement
assignees: ''
---

**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives considered**
Other solutions you've considered.

**Additional context**
Any other context, mockups, etc.
```

## Create Pull Request Template

Create `.github/pull_request_template.md`:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing Checklist
- [ ] Tested in English
- [ ] Tested in French
- [ ] Tested on mobile
- [ ] Tested on desktop
- [ ] No console errors
- [ ] Build passes (`npm run build`)

## Screenshots
[Add if applicable]

## Related Issues
Closes #[issue number]
```

## Set Up GitHub Actions (Optional)

Create `.github/workflows/build.yml`:

```yaml
name: Build and Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: dist
        path: dist/
```

## GitHub Pages Setup (Optional)

To host on GitHub Pages:

1. Create deployment workflow `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install and build
      run: |
        npm install
        npm run build
        
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v2
      with:
        path: dist/
        
    - name: Deploy to GitHub Pages
      uses: actions/deploy-pages@v2
```

2. Enable GitHub Pages:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

3. Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/CAME/',  // Your repo name
  // ... other config
});
```

## Repository Maintenance

### Regular Tasks

```bash
# Pull latest changes
git pull origin main

# Create feature branch
git checkout -b feature/new-feature

# Make changes, then commit
git add .
git commit -m "Add new feature"

# Push feature branch
git push origin feature/new-feature

# Create pull request on GitHub
# After merge, delete branch
git checkout main
git pull origin main
git branch -d feature/new-feature
```

### Tagging Releases

```bash
# Create a tag for version 1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tag to GitHub
git push origin v1.0.0

# Or push all tags
git push origin --tags
```

### Create GitHub Release

1. Go to repository → Releases
2. Click "Create a new release"
3. Choose tag: `v1.0.0`
4. Title: "CAME Website v1.0.0"
5. Description: Copy from CHANGELOG.md
6. Attach build artifacts (optional)
7. Publish release

## Troubleshooting

### Large File Error

If Git complains about large files:

```bash
# Check large files
git rev-list --objects --all | \
  git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | \
  sort -k3 -n

# Add to .gitignore and remove from tracking
echo "large-file.zip" >> .gitignore
git rm --cached large-file.zip
git commit -m "Remove large file"
```

### Authentication Failed

```bash
# Generate personal access token
# https://github.com/settings/tokens
# With repo scope

# Use token as password when prompted
# Or configure credential helper
git config --global credential.helper cache
```

### Push Rejected

```bash
# Pull first, then push
git pull origin main --rebase
git push origin main
```

## Post-Setup Checklist

After pushing to GitHub:

- [ ] Repository is visible and accessible
- [ ] README.md displays correctly on homepage
- [ ] All documentation files are present
- [ ] .gitignore is working (no node_modules, etc.)
- [ ] Repository description and topics are set
- [ ] Branch protection is configured (if needed)
- [ ] Collaborators are added (if needed)
- [ ] Issue templates are created
- [ ] Pull request template is created
- [ ] GitHub Actions are set up (if using)
- [ ] First release is tagged (v1.0.0)

## Next Steps

1. **Set up deployment**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
2. **Invite collaborators**: Add team members
3. **Create project board**: Organize tasks
4. **Set up CI/CD**: Automate testing and deployment
5. **Monitor activity**: Watch issues and pull requests

---

**Your repository is now ready for development and collaboration!**

**Last Updated**: April 2, 2026
