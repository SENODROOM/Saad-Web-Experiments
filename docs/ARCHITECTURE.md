# Architecture Documentation

## Overview

This document describes the architecture and design decisions for the Saad Web Experiments portfolio.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        User Browser                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Static Web Server                        │
│                    (Vercel/Netlify/GH Pages)                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Frontend Application                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   index.html │  │   Home.css   │  │ projects.js  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Project Categories                       │  │
│  │  • HTML (22 projects)                                │  │
│  │  • CSS (35+ projects)                                │  │
│  │  • JavaScript (60+ projects)                         │  │
│  │  • React (13 projects)                               │  │
│  │  • Python (32 projects)                              │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **Vanilla JavaScript**: Core functionality
- **React 18**: Component-based UI (for React projects)
- **Prism.js**: Syntax highlighting

### Build Tools
- **Vite**: Fast build tool and dev server
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Vitest**: Testing framework

### Deployment
- **GitHub Actions**: CI/CD pipeline
- **Vercel/Netlify**: Hosting platform

## Directory Structure

```
/
├── CSS/                    # CSS projects (35+)
│   ├── Availability Table/
│   ├── Balance Sheet/
│   └── ...
├── HTML/                   # HTML projects (22)
│   ├── Accessible Audio Controller.html
│   ├── Book Catalog Table.html
│   └── ...
├── Javascript/             # JavaScript projects (60+)
│   ├── Arrays/
│   ├── DOM Manipulation Events/
│   ├── Leetcode/
│   └── ...
├── React/                  # React projects (13)
│   ├── Color Picker App/
│   ├── Currency Converter/
│   └── ...
├── Python/                 # Python projects (32)
│   ├── Budget App.py
│   ├── Hash Table.py
│   └── ...
├── Images/                 # Image assets
├── scripts/                # Build scripts
├── tests/                  # Test files
├── .github/                # GitHub Actions workflows
├── index.html              # Main entry point
├── Home.css                # Main stylesheet
├── projects.js             # Project data
└── package.json            # Dependencies
```

## Core Components

### 1. Main Portfolio Page (index.html)

The main entry point that displays all projects with:
- Search functionality
- Category filtering
- Dark mode toggle
- Project cards with live previews
- Code viewer with syntax highlighting

### 2. Project Data (projects.js)

Central data structure containing all project metadata:
```javascript
{
  category: "Category",
  title: "Project Title",
  iframeSrc: "path/to/project",
  description: "Project description",
  codeFiles: [
    { name: "file.html", src: "path", lang: "html" }
  ]
}
```

### 3. Project Categories

Each category has its own folder structure:

**HTML Projects**: Standalone HTML files
**CSS Projects**: Folders with index.html + styles.css
**JavaScript Projects**: Folders with index.html + script.js + styles.css
**React Projects**: Folders with index.html + index.jsx + styles.css
**Python Projects**: Standalone .py files

## Design Patterns

### 1. Module Pattern
JavaScript code is organized into modules for better maintainability.

### 2. Component-Based Architecture
React projects use functional components with hooks.

### 3. Lazy Loading
Projects and code are loaded on-demand to improve performance.

### 4. Responsive Design
Mobile-first approach with CSS Grid and Flexbox.

## Data Flow

```
User Action
    │
    ▼
Event Listener
    │
    ▼
Update State
    │
    ▼
Filter/Search Projects
    │
    ▼
Render UI
    │
    ▼
Load Code (on demand)
    │
    ▼
Syntax Highlighting
```

## Performance Optimizations

1. **Lazy Loading**: Code files loaded only when project is expanded
2. **Debounced Search**: Search input debounced to reduce re-renders
3. **Virtual Scrolling**: (Future) For large project lists
4. **Code Splitting**: Separate bundles for vendor and app code
5. **Image Optimization**: WebP format with fallbacks
6. **Caching**: Service worker for offline access (Future)

## Security Considerations

1. **Content Security Policy**: Restrict inline scripts
2. **HTTPS Only**: All resources served over HTTPS
3. **Input Sanitization**: User input sanitized before rendering
4. **Dependency Auditing**: Regular npm audit checks

## Accessibility

1. **Semantic HTML**: Proper heading hierarchy
2. **ARIA Labels**: Screen reader support
3. **Keyboard Navigation**: Full keyboard accessibility
4. **Color Contrast**: WCAG AA compliance
5. **Focus Indicators**: Visible focus states

## Testing Strategy

### Unit Tests
- Utility functions
- Component logic
- Data transformations

### Integration Tests
- Search functionality
- Filter functionality
- Project loading

### E2E Tests
- User workflows
- Navigation
- Project interactions

## Deployment Pipeline

```
Code Push
    │
    ▼
GitHub Actions Triggered
    │
    ├─► Lint Code
    ├─► Run Tests
    ├─► Build Project
    │
    ▼
Deploy to Production
    │
    ▼
Live Site Updated
```

## Future Enhancements

1. **Backend API**: For dynamic project management
2. **Database**: Store project metadata
3. **User Accounts**: Save favorites, comments
4. **Analytics**: Track popular projects
5. **Search Engine**: Full-text search with Algolia
6. **CDN**: Global content delivery
7. **Progressive Web App**: Offline support

## Monitoring

1. **Error Tracking**: Sentry integration
2. **Performance Monitoring**: Web Vitals
3. **Analytics**: Google Analytics / Plausible
4. **Uptime Monitoring**: UptimeRobot

## Maintenance

1. **Dependency Updates**: Monthly npm updates
2. **Security Patches**: Immediate security updates
3. **Code Reviews**: All PRs reviewed
4. **Documentation**: Keep docs up-to-date

---

Last Updated: 2024
