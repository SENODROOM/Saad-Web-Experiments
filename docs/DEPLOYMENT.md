# Deployment Guide

## Overview

This guide covers deploying the Saad Web Experiments portfolio to various platforms.

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Project built successfully (`npm run build`)

## Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Preview deployments for PRs
- Free for personal projects

**Steps:**

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel
   ```bash
   vercel login
   ```

3. Deploy
   ```bash
   vercel
   ```

4. For production
   ```bash
   vercel --prod
   ```

**Configuration (vercel.json):**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### 2. Netlify

**Steps:**

1. Install Netlify CLI
   ```bash
   npm install -g netlify-cli
   ```

2. Login
   ```bash
   netlify login
   ```

3. Initialize
   ```bash
   netlify init
   ```

4. Deploy
   ```bash
   netlify deploy --prod
   ```

**Configuration (netlify.toml):**
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Steps:**

1. Install gh-pages
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to package.json
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy
   ```bash
   npm run deploy
   ```

4. Configure GitHub Pages
   - Go to repository settings
   - Enable GitHub Pages
   - Select gh-pages branch

### 4. Cloudflare Pages

**Steps:**

1. Push code to GitHub
2. Go to Cloudflare Pages dashboard
3. Connect your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Build output: `dist`
5. Deploy

## Environment Variables

Create `.env` file for local development:
```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

For production, set these in your hosting platform's dashboard.

## Custom Domain

### Vercel
1. Go to project settings
2. Add custom domain
3. Update DNS records

### Netlify
1. Go to domain settings
2. Add custom domain
3. Configure DNS

### GitHub Pages
1. Add CNAME file to public folder
2. Configure DNS with your provider

## CI/CD with GitHub Actions

The project includes automated deployment via GitHub Actions.

**Workflow triggers:**
- Push to main branch
- Pull requests

**Steps:**
1. Lint code
2. Run tests
3. Build project
4. Deploy to production

## Performance Optimization

Before deploying:

1. **Optimize images**
   ```bash
   npm run optimize-images
   ```

2. **Analyze bundle**
   ```bash
   npm run build -- --analyze
   ```

3. **Check bundle size**
   ```bash
   npm run build
   ls -lh dist/
   ```

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All projects display properly
- [ ] Search functionality works
- [ ] Dark mode toggle works
- [ ] Code syntax highlighting works
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Analytics tracking (if configured)
- [ ] Error monitoring (if configured)

## Monitoring

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

### Performance Monitoring
- Google PageSpeed Insights
- WebPageTest
- Lighthouse CI

### Error Tracking
- Sentry
- LogRocket
- Rollbar

## Rollback

If deployment fails:

**Vercel:**
```bash
vercel rollback
```

**Netlify:**
- Go to deploys
- Click on previous deploy
- Click "Publish deploy"

**GitHub Pages:**
```bash
git revert HEAD
git push
npm run deploy
```

## Troubleshooting

### Build Fails
- Check Node.js version
- Clear node_modules and reinstall
- Check for syntax errors
- Review build logs

### 404 Errors
- Check routing configuration
- Verify file paths
- Check .gitignore

### Slow Loading
- Enable compression
- Optimize images
- Use CDN
- Enable caching

---

For more help, check the platform-specific documentation or open an issue.
