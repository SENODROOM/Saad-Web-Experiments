# 🚀 Saad Web Experiments - Portfolio

A comprehensive portfolio showcasing 165 web development projects including HTML, CSS, JavaScript, React, and Python.

## ✨ Features

- 🔍 Search across all projects
- 🏷️ Filter by category (HTML, CSS, JavaScript, Python, React)
- 📱 Fully responsive design
- 🌙 Dark mode toggle
- ⌨️ Keyboard shortcuts (`/` to search, `Ctrl+D` for dark mode, `Escape` to clear)
- 🔖 Bookmark projects (saved in browser)
- 💬 Toast notifications
- 🎨 Syntax highlighting with Prism.js
- 📋 One-click code copying

## 🚀 Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Open: `http://localhost:3000`

### Backend (Optional)
```bash
cd backend
npm install
npm run dev
```
Runs on: `http://localhost:5000`

## 📁 Project Structure

```
saad-web-experiments/
├── frontend/
│   ├── app/
│   │   ├── page.tsx          ← Main portfolio page
│   │   ├── layout.tsx        ← Layout with Home.css
│   │   └── globals.css       ← Global styles
│   └── public/
│       ├── projects.js       ← 165 projects data
│       ├── Home.css          ← Portfolio styles
│       ├── HTML/             ← 22 HTML projects
│       ├── CSS/              ← 35+ CSS projects
│       ├── Javascript/       ← 60+ JavaScript projects
│       ├── React/            ← 13 React projects
│       └── Python/           ← 32+ Python projects
├── backend/
│   ├── src/
│   │   ├── models/           ← MongoDB models
│   │   ├── routes/           ← API routes
│   │   └── server.js         ← Express server
│   └── .env                  ← Environment variables
└── README.md
```

## 🎯 Project Breakdown

- **HTML**: 22 projects
- **CSS**: 35+ projects
- **JavaScript**: 60+ projects
- **React**: 13 projects
- **Python**: 32+ projects
- **Total**: 165 projects

## ⌨️ Keyboard Shortcuts

- `/` - Focus search
- `Escape` - Clear search
- `Ctrl+D` - Toggle dark mode
- `Ctrl+Shift+A` - View analytics dashboard

## 📊 Analytics

View your usage analytics in three ways:

1. **Keyboard Shortcut**: Press `Ctrl+Shift+A`
2. **Browser Console**: Type `showAnalytics()` and press Enter
3. **Raw Data**: Type `getAnalytics()` in console for JSON data

Analytics tracks:
- Project views (which projects you opened)
- Search queries (what you searched for)
- Filter usage (which categories you filtered)
- Bookmarks (your saved projects)

All data is stored locally in your browser (localStorage).

## 🔧 Technology Stack

### Frontend
- Next.js 16
- TypeScript
- React 19
- Custom CSS
- Prism.js (syntax highlighting)

### Backend (Optional)
- Express.js
- MongoDB Atlas
- Mongoose

## 🌐 Deployment

### Vercel
```bash
vercel
```

**Configuration:**
- Build Command: `cd frontend && npm run build`
- Output Directory: `frontend/.next`
- Install Command: `cd frontend && npm install`

## 📝 Adding New Projects

Edit `frontend/public/projects.js`:

```javascript
{
    category: "JavaScript",
    title: "My New Project",
    iframeSrc: "Javascript/My New Project/index.html",
    description: "Description here",
    codeFiles: [
        {
            name: "index.html",
            src: "Javascript/My New Project/index.html",
            lang: "html"
        }
    ]
}
```

## 📄 License

MIT License

## 👤 Author

**Muhammad Saad Amin**  
Software Engineer | Web Developer

---

**Status**: ✅ Production Ready | 165 Projects
