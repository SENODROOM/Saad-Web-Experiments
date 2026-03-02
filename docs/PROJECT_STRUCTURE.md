# Project Structure

## Directory Overview

```
saad-web-experiments/
├── .github/              # GitHub configuration
│   └── workflows/        # CI/CD workflows
│       └── ci.yml
├── .vscode/              # VS Code settings
│   ├── extensions.json
│   └── settings.json
├── CSS/                  # CSS projects (35+)
├── HTML/                 # HTML projects (22)
├── Javascript/           # JavaScript projects (60+)
├── React/                # React projects (13)
├── Python/               # Python projects (32)
├── Images/               # Image assets
├── docs/                 # Documentation
│   ├── ARCHITECTURE.md
│   ├── DEPLOYMENT.md
│   └── PROJECT_STRUCTURE.md
├── scripts/              # Build and utility scripts
│   └── generate-projects.js
├── tests/                # Test files
│   └── setup.js
├── .editorconfig         # Editor configuration
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── .prettierignore       # Prettier ignore rules
├── CONTRIBUTING.md       # Contribution guidelines
├── LICENSE               # MIT License
├── README.md             # Project documentation
├── Home.css              # Main stylesheet
├── index.html            # Main entry point
├── package.json          # Node dependencies
├── projects.js           # Project data
├── requirements.txt      # Python dependencies
├── vite.config.js        # Vite configuration
└── vitest.config.js      # Vitest configuration
```

## Category Folders

### HTML/ (22 projects)
Standalone HTML files demonstrating semantic markup.

```
HTML/
├── Accessible Audio Controller.html
├── Book Catalog Table.html
├── Cat Photo App.html
└── ...
```

### CSS/ (35+ projects)
CSS projects with styling and layouts.

```
CSS/
├── Availability Table/
│   ├── index.html
│   └── styles.css
├── Balance Sheet/
│   ├── index.html
│   └── styles.css
└── ...
```

### Javascript/ (60+ projects)
JavaScript projects organized by topic.

```
Javascript/
├── Arrays/
│   ├── Golf Score Translator.js
│   └── Shopping List.js
├── DOM Manipulation Events/
│   ├── Emoji Reactor/
│   │   ├── index.html
│   │   ├── script.js
│   │   └── styles.css
│   └── ...
├── Leetcode/
│   ├── Counter.js
│   ├── Debounce.js
│   └── ...
└── ...
```

### React/ (13 projects)
React component-based applications.

```
React/
├── Color Picker App/
│   ├── index.html
│   ├── index.jsx
│   └── styles.css
├── Currency Converter/
│   ├── index.html
│   ├── index.jsx
│   └── styles.css
└── ...
```

### Python/ (32 projects)
Python algorithms and data structures.

```
Python/
├── Budget App.py
├── Hash Table.py
├── Merge Sort Algorithm.py
└── ...
```

## Configuration Files

### .eslintrc.json
ESLint configuration for JavaScript linting.

### .prettierrc
Prettier configuration for code formatting.

### vite.config.js
Vite build tool configuration.

### vitest.config.js
Vitest testing framework configuration.

### package.json
Node.js dependencies and scripts.

### requirements.txt
Python dependencies.

## Key Files

### index.html
Main portfolio page with:
- Search functionality
- Category filters
- Project cards
- Dark mode toggle

### Home.css
Main stylesheet with:
- CSS custom properties
- Responsive design
- Dark mode styles
- Component styles

### projects.js
Project data array containing:
- Project metadata
- File paths
- Descriptions
- Categories

## Scripts

### scripts/generate-projects.js
Automatically generates projects.json from directory structure.

## Tests

### tests/setup.js
Vitest setup and configuration.

## Documentation

### docs/ARCHITECTURE.md
System architecture and design decisions.

### docs/DEPLOYMENT.md
Deployment guide for various platforms.

### docs/PROJECT_STRUCTURE.md
This file - project structure documentation.

## Naming Conventions

### Files
- HTML: `kebab-case.html`
- CSS: `kebab-case.css` or `styles.css`
- JavaScript: `PascalCase.js` or `camelCase.js`
- Python: `snake_case.py`

### Folders
- Title Case with spaces: `Project Name/`

### Variables
- JavaScript: `camelCase`
- Python: `snake_case`
- CSS: `kebab-case`

## Adding New Projects

1. Create project folder in appropriate category
2. Add project files (index.html, styles.css, script.js)
3. Update projects.js with project metadata
4. Test locally
5. Commit and push

---

Last Updated: 2024
