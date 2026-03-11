# 🚀 Saad Web Experiments - Portfolio

> A comprehensive, interactive portfolio showcasing 165 web development projects with advanced features including search, filtering, bookmarks, analytics, and more.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Project Breakdown](#-project-breakdown)
- [Keyboard Shortcuts](#️-keyboard-shortcuts)
- [Analytics](#-analytics)
- [Technology Stack](#-technology-stack)
- [Deployment](#-deployment)
- [Adding Projects](#-adding-new-projects)
- [Environment Variables](#-environment-variables)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

---

## ✨ Features

### Core Features

- 🔍 **Smart Search** - Real-time search across all projects with instant results
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

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup (Optional)

The backend provides API endpoints for persistent bookmarks and analytics.

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

---

## 📁 Project Structure

```
saad-web-experiments/
├── frontend/                    # Next.js Application
│   ├── app/
│   │   ├── page.tsx            # Main portfolio page (all features)
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css         # Global styles + modals
│   │   └── api/                # API routes (optional)
│   ├── public/
│   │   ├── projects.js         # 165 projects data
│   │   ├── Home.css            # Portfolio styles
│   │   ├── HTML/               # 22 HTML projects
│   │   ├── CSS/                # 35+ CSS projects
│   │   ├── Javascript/         # 60+ JavaScript projects
│   │   ├── React/              # 13 React projects
│   │   ├── Python/             # 32+ Python projects
│   │   └── Images/             # Assets
│   └── package.json
├── backend/                     # Express.js API (Optional)
│   ├── src/
│   │   ├── models/             # MongoDB models
│   │   │   ├── Analytics.js
│   │   │   └── Bookmark.js
│   │   ├── routes/             # API routes
│   │   ├── lib/                # Utilities
│   │   └── server.js           # Entry point
│   ├── .env                    # Environment variables
│   └── package.json
├── docs/                        # Documentation
├── README.md                    # This file
├── LICENSE                      # MIT License
└── package.json                 # Root workspace
```

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

## ⌨️ Keyboard Shortcuts

| Shortcut       | Action                   |
| -------------- | ------------------------ |
| `/`            | Focus search input       |
| `Escape`       | Clear search             |
| `Ctrl+D`       | Toggle dark mode         |
| `Ctrl+Shift+A` | View analytics dashboard |

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

- 📈 **Project Views** - Which projects you opened and how many times
- 🔍 **Search Queries** - What you searched for with timestamps
- 🏷️ **Filter Usage** - Which categories you filtered
- ⭐ **Bookmarks** - Your saved favorite projects

### Data Privacy

- ✅ All data stored locally in browser (localStorage)
- ✅ No data sent to external servers
- ✅ Private to your browser only
- ✅ Clear browser data to reset analytics

---

## 🔧 Technology Stack

### Frontend

| Technology | Version | Purpose                    |
| ---------- | ------- | -------------------------- |
| Next.js    | 16      | React framework with SSR   |
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

### Deploy to Vercel (Recommended)

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

4. **Set Environment Variables** (if using backend)
   - `NEXT_PUBLIC_API_URL` - Your backend URL
   - `MONGODB_URI` - MongoDB connection string

### Deploy Backend

Deploy backend separately to:

- **Vercel** (Serverless Functions)
- **Railway** (Recommended for MongoDB apps)
- **Render** (Free tier available)
- **Heroku** (With MongoDB Atlas)

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

### Code File Object

| Property | Type   | Required | Description                                  |
| -------- | ------ | -------- | -------------------------------------------- |
| `name`   | string | Yes      | Display name (e.g., "index.html")            |
| `src`    | string | Yes      | Path to file                                 |
| `lang`   | string | Yes      | "html", "css", "javascript", "python", "jsx" |

---

## 🔐 Environment Variables

### Frontend (`frontend/.env`)

```env
# Backend API URL (optional)
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

---

## 🐛 Troubleshooting

### Frontend Issues

**Projects not loading?**

```bash
# Check if projects.js exists
ls frontend/public/projects.js

# Restart dev server
cd frontend
npm run dev
```

**Build errors?**

```bash
# Clear Next.js cache
cd frontend
rm -rf .next
npm run build
```

### Backend Issues

**MongoDB connection failed?**

```bash
# Verify MongoDB URI in backend/.env
# Ensure IP is whitelisted in MongoDB Atlas
# Check network connectivity
```

**Port already in use?**

```bash
# Kill process on port 5000
npx kill-port 5000

# Or use different port
PORT=5001 npm run dev
```

### Common Issues

**Double scrollbar?**

- Fixed in latest version
- Clear browser cache and reload

**Dark mode not persisting?**

- Check browser localStorage is enabled
- Clear site data and try again

**Analytics not showing?**

- Press `Ctrl+Shift+A` or type `showAnalytics()` in console
- Ensure localStorage is enabled

---

## 📚 Documentation

- [Backend API Documentation](backend/README.md)
- [Architecture Documentation](docs/ARCHITECTURE.md)
- [API Reference](docs/API.md)

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Muhammad Saad Amin**  
Software Engineer | Web Developer

- Portfolio: [Your Portfolio URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

## 🌟 Acknowledgments

- [Free Code Camp](https://www.freecodecamp.org/) - For the amazing curriculum
- [Next.js](https://nextjs.org/) - The React framework
- [Prism.js](https://prismjs.com/) - Syntax highlighting
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📈 Project Stats

- **Total Projects**: 165
- **Lines of Code**: 50,000+
- **Technologies**: 5+ languages
- **Features**: 15+ advanced features
- **Status**: ✅ Production Ready

---

<div align="center">

**[⬆ Back to Top](#-saad-web-experiments---portfolio)**

Made with ❤️ by Muhammad Saad Amin

</div>
