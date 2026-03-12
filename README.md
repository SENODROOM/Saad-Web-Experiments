# 🚀 Saad Web Experiments - Portfolio

> A comprehensive, interactive portfolio showcasing 165 web development projects with advanced features including search, filtering, bookmarks, analytics, and more.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live-muhammad--saad--amin.vercel.app-blue?style=flat-square&logo=vercel)](https://muhammad-saad-amin.vercel.app)

---

## 🌐 Live Demo

**[muhammad-saad-amin.vercel.app](https://muhammad-saad-amin.vercel.app)**

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [Project Breakdown](#-project-breakdown)
- [React Projects](#-react-projects)
- [Keyboard Shortcuts](#️-keyboard-shortcuts)
- [Analytics](#-analytics)
- [Technology Stack](#-technology-stack)
- [Deployment](#-deployment)
- [Adding Projects](#-adding-new-projects)
- [Environment Variables](#-environment-variables)
- [Testing](#-testing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## ✨ Features

### Core Features

- 🔍 **Smart Search** - Real-time fuzzy search across all projects with instant results
- 🏷️ **Category Filters** - Filter by HTML, CSS, JavaScript, Python, React
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🌙 **Dark Mode** - Seamless light/dark theme toggle with persistence
- 🎨 **Syntax Highlighting** - Beautiful code display powered by Prism.js

### Advanced Features

- ⌨️ **Keyboard Shortcuts** - Navigate efficiently with keyboard commands
- 🔖 **Bookmarks System** - Save and manage favorite projects (localStorage)
- 📊 **Analytics Dashboard** - Track views, searches, and usage patterns
- 💬 **Toast Notifications** - User-friendly feedback for all actions
- 📋 **One-Click Copy** - Copy code to clipboard instantly
- 📂 **Multi-File Support** - View multiple files per project with tabs
- 🎯 **Live Preview** - Interactive iframe previews for web projects
- ⚛️ **React Projects** - All React experiments fully bundled and live-previewed via iframe

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/SENODROOM/Responsive-Web-Design-Certification.git
cd Responsive-Web-Design-Certification/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup (Optional)

The backend provides API endpoints for persistent bookmarks and analytics. The frontend works fully without it using localStorage.

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your MongoDB URI
# MONGODB_URI=your_mongodb_connection_string

# Start backend server
npm run dev
```

Backend runs on [http://localhost:5000](http://localhost:5000)

### Run Everything Together

```bash
# From repo root — starts both frontend and backend concurrently
npm run dev:all
```

---

## 📁 Project Structure

```
saad-web-experiments/
├── frontend/                    # Next.js Application
│   ├── app/
│   │   ├── page.tsx            # Main portfolio page
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles
│   │   └── api/                # Next.js API routes (proxy to backend)
│   │       ├── analytics/
│   │       └── bookmarks/
│   ├── public/
│   │   ├── projects.js         # 165 projects data registry
│   │   ├── Home.css            # Portfolio styles
│   │   ├── HTML/               # 22 HTML projects
│   │   ├── CSS/                # 35+ CSS projects
│   │   ├── Javascript/         # 60+ JavaScript projects
│   │   ├── React/              # 13 React projects (pre-built, iframe-ready)
│   │   ├── Python/             # 32+ Python projects
│   │   └── Images/             # Assets
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── lib/                # Frontend utilities (analytics, storage, search)
│   │   ├── models/             # TypeScript types for API responses
│   │   └── types/              # Shared TypeScript interfaces
│   └── package.json
├── backend/                     # Express.js API (Optional)
│   ├── src/
│   │   ├── config/env.js       # Environment loader
│   │   ├── lib/mongodb.js      # MongoDB connection (single source of truth)
│   │   ├── models/             # Mongoose models
│   │   │   ├── Analytics.js
│   │   │   └── Bookmark.js
│   │   ├── routes/             # Express route handlers
│   │   │   ├── analytics.js
│   │   │   └── bookmarks.js
│   │   └── server.js           # Entry point
│   ├── .env.example            # Environment template (never commit .env)
│   └── package.json
├── docs/                        # Documentation
├── tests/                       # Root-level JS/TS tests (Vitest)
│   ├── setup.js
│   ├── utils.test.js
│   ├── fuzzySearch.test.js
│   ├── storage.test.js
│   └── analytics.test.js
├── scripts/                     # Dev utilities
│   ├── generate-projects.js
│   └── verify-setup.js
├── README.md
├── LICENSE
└── package.json                 # Root npm workspace
```

---

## 🏗️ Architecture

The project is a **monorepo** with two independent packages managed via npm workspaces.

### Frontend (Next.js)

The frontend is the only required component. It is a self-contained Next.js 15 app deployed to Vercel. All core features — search, bookmarks, analytics, dark mode — work client-side via `localStorage`. No backend required for the live demo.

MongoDB logic lives **exclusively in `backend/src/lib/mongodb.js`**. The file `frontend/src/lib/mongodb.ts` exists only as a thin TypeScript type/client adapter for Next.js API routes that optionally proxy to the backend — it does **not** run its own database connection. If you do not use the backend, those API routes are simply unused.

### Backend (Express.js — Optional)

The backend is an optional Express.js server that persists bookmarks and analytics to MongoDB Atlas. It is a separate deployable unit (Railway, Render, or Heroku recommended). The frontend detects whether `NEXT_PUBLIC_API_URL` is set and falls back to localStorage if the backend is unavailable.

### Data Flow

```
Browser
  └── Next.js Frontend (Vercel)
        ├── localStorage  ← bookmarks & analytics (default, always works)
        └── NEXT_PUBLIC_API_URL (optional)
              └── Express Backend
                    └── MongoDB Atlas
```

### Why No MongoDB in the Frontend Source

`frontend/src/models/Analytics.ts` and `frontend/src/models/Bookmark.ts` are **TypeScript interface files** — they define the shape of API responses. They contain no Mongoose imports and run no database logic. They exist so the Next.js API route handlers are fully typed.

---

## 🎯 Project Breakdown

| Category   | Count   | Description                                |
| ---------- | ------- | ------------------------------------------ |
| HTML       | 22      | Semantic HTML, forms, tables, multimedia   |
| CSS        | 35+     | Layouts, animations, responsive design     |
| JavaScript | 60+     | DOM manipulation, async, algorithms, games |
| React      | 13      | Components, hooks, state management        |
| Python     | 32+     | Scripts, algorithms, data structures       |
| **Total**  | **165** | **Complete web development showcase**      |

---

## ⚛️ React Projects

All 13 React experiments are fully functional and live-previewable directly in the portfolio. They are served as pre-built static HTML files from `frontend/public/React/`, so no separate bundler or dev server is needed to view them.

| Project                     | Features                     |
| --------------------------- | ---------------------------- |
| Color Picker App            | useState, dynamic styling    |
| Currency Converter          | useEffect, API data fetching |
| Event RSVP                  | Forms, controlled inputs     |
| Fruit Search App            | Real-time filtering          |
| Mood Board                  | Drag-and-drop state          |
| One-Time Password Generator | Crypto randomness, clipboard |
| Reusable Footer             | Component composition        |
| Reusable Mega Navbar        | Responsive navigation        |
| Reusable Profile Card       | Props, conditional rendering |
| Shopping List App           | CRUD with useState           |
| Tic-Tac-Toe Game            | Game logic, lifting state up |
| Toggle Text App             | Boolean state toggling       |

Each project's source (`.jsx`, `.html`, `.css`) is viewable with syntax highlighting in the portfolio's code panel, and the live preview loads instantly in the iframe.

---

## ⌨️ Keyboard Shortcuts

| Shortcut       | Action                   |
| -------------- | ------------------------ |
| `/`            | Focus search input       |
| `Escape`       | Clear search             |
| `Ctrl+D`       | Toggle dark mode         |
| `Ctrl+Shift+A` | View analytics dashboard |
| `Ctrl+B`       | View bookmarks           |
| `Shift+?`      | Show keyboard help       |

---

## 📊 Analytics

Track your portfolio usage with the built-in analytics dashboard.

### How to View Analytics

**Method 1: Keyboard Shortcut** (Recommended)

```
Press: Ctrl+Shift+A
```

**Method 2: Browser Console**

1. Press `F12` to open Developer Tools
2. Click "Console" tab
3. Type: `showAnalytics()`
4. Press Enter

**Method 3: Raw Data (JSON)**

1. Open Console (`F12`)
2. Type: `getAnalytics()`
3. Press Enter

### What Gets Tracked

- 📈 **Project Views** — Which projects you opened and how many times
- 🔍 **Search Queries** — What you searched for with timestamps
- 🏷️ **Filter Usage** — Which categories you filtered
- ⭐ **Bookmarks** — Your saved favourite projects

### Data Privacy

- ✅ All data stored locally in browser (`localStorage`)
- ✅ No data sent to external servers unless backend is configured
- ✅ Private to your browser only
- ✅ Clear browser data to reset analytics

---

## 🔧 Technology Stack

### Frontend

| Technology | Version | Purpose                    |
| ---------- | ------- | -------------------------- |
| Next.js    | 15      | React framework with SSR   |
| React      | 19      | UI library                 |
| TypeScript | 5.0     | Type safety                |
| Prism.js   | 1.29    | Syntax highlighting        |
| Custom CSS | -       | Styling with CSS variables |

### Backend (Optional)

| Technology | Version | Purpose               |
| ---------- | ------- | --------------------- |
| Express.js | 4.x     | Web framework         |
| MongoDB    | -       | Database              |
| Mongoose   | 8.x     | ODM for MongoDB       |
| CORS       | -       | Cross-origin requests |

---

## 🌐 Deployment

### Deploy Frontend to Vercel (Recommended)

The live site is deployed at **[muhammad-saad-amin.vercel.app](https://muhammad-saad-amin.vercel.app)**.

To deploy your own fork:

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy**

   ```bash
   vercel
   ```

3. **Configure Build Settings**
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/.next`
   - Install Command: `cd frontend && npm install`

4. **Set Environment Variables** (only if using backend)
   - `NEXT_PUBLIC_API_URL` — Your backend URL

### Deploy Backend

Deploy backend separately to:

- **Railway** (Recommended for MongoDB apps)
- **Render** (Free tier available)
- **Vercel** (Serverless Functions)
- **Heroku** (With MongoDB Atlas)

Set these environment variables on your backend host:

```env
MONGODB_URI=mongodb+srv://...
PORT=5000
NODE_ENV=production
```

---

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run with coverage report
npm run test:coverage

# Watch mode
npm run test:ui
```

### Test Coverage

| Module                | Tests                                     |
| --------------------- | ----------------------------------------- |
| `utils.test.js`       | `filterProjects`, `searchProjects`        |
| `fuzzySearch.test.js` | Levenshtein search, threshold, edge cases |
| `storage.test.js`     | localStorage wrapper, get/set/remove      |
| `analytics.test.js`   | Event tracking, session data, summaries   |

Python tests live in `frontend/public/Python/tests/` and can be run with:

```bash
cd frontend/public/Python
python -m pytest tests/
```

---

## 📝 Adding New Projects

Edit `frontend/public/projects.js` and add your project:

```javascript
{
    category: "JavaScript",
    title: "My Awesome Project",
    iframeSrc: "Javascript/My Awesome Project/index.html",
    description: "A brief description of what this project does",
    codeFiles: [
        {
            name: "index.html",
            src: "Javascript/My Awesome Project/index.html",
            lang: "html"
        },
        {
            name: "script.js",
            src: "Javascript/My Awesome Project/script.js",
            lang: "javascript"
        },
        {
            name: "styles.css",
            src: "Javascript/My Awesome Project/styles.css",
            lang: "css"
        }
    ]
}
```

### Project Object Properties

| Property      | Type   | Required | Description                                       |
| ------------- | ------ | -------- | ------------------------------------------------- |
| `category`    | string | Yes      | "HTML", "CSS", "JavaScript", "Python", or "React" |
| `title`       | string | Yes      | Project name                                      |
| `iframeSrc`   | string | No       | Path to preview file (null for code-only)         |
| `description` | string | Yes      | Brief project description                         |
| `codeFiles`   | array  | Yes      | Array of file objects                             |

---

## 🔐 Environment Variables

### Frontend (`frontend/.env.local`)

```env
# Backend API URL (optional — omit to use localStorage only)
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend (`backend/.env`)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# CORS (optional)
CORS_ORIGIN=http://localhost:3000
```

> ⚠️ **Never commit `.env` files.** Use `.env.example` as a template and keep real credentials out of version control.

---

## 🐛 Troubleshooting

### Frontend Issues

**Projects not loading?**

```bash
# Check if projects.js exists
ls frontend/public/projects.js

# Restart dev server
cd frontend && npm run dev
```

**Build errors?**

```bash
# Clear Next.js cache
cd frontend && rm -rf .next && npm run build
```

### Backend Issues

**MongoDB connection failed?**

- Verify `MONGODB_URI` in `backend/.env`
- Ensure your IP is whitelisted in MongoDB Atlas
- Always run the backend from its own directory: `cd backend && npm run dev`

**Port already in use?**

```bash
npx kill-port 5000
# or
PORT=5001 npm run dev
```

### Common Issues

**Double scrollbar?** — Clear browser cache and reload.

**Dark mode not persisting?** — Ensure `localStorage` is enabled in your browser.

**Analytics not showing?** — Press `Ctrl+Shift+A` or type `showAnalytics()` in the console.

---

## 📚 Documentation

- [Backend API Documentation](backend/README.md)
- [Architecture Documentation](docs/ARCHITECTURE.md)
- [API Reference](docs/API.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Muhammad Saad Amin**  
Software Engineer | Web Developer

- 🌐 Portfolio: [muhammad-saad-amin.vercel.app](https://muhammad-saad-amin.vercel.app)
- 🐙 GitHub: [@SENODROOM](https://github.com/SENODROOM)

---

## 🌟 Acknowledgments

- [freeCodeCamp](https://www.freecodecamp.org/) — For the amazing curriculum
- [Next.js](https://nextjs.org/) — The React framework
- [Prism.js](https://prismjs.com/) — Syntax highlighting
- [Vercel](https://vercel.com/) — Deployment platform

---

## 📈 Project Stats

- **Total Projects**: 165
- **Lines of Code**: 50,000+
- **Technologies**: 5+ languages
- **Features**: 15+ advanced features
- **Status**: ✅ Production Ready — [Live at muhammad-saad-amin.vercel.app](https://muhammad-saad-amin.vercel.app)

---

<div align="center">

**[⬆ Back to Top](#-saad-web-experiments---portfolio)**

Made with ❤️ by [Muhammad Saad Amin](https://github.com/SENODROOM)

</div>
