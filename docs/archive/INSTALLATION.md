# 📦 Installation Guide

Complete installation instructions for the Saad Web Experiments portfolio.

## System Requirements

### Required
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Git**: Latest version

### Optional (for Python projects)
- **Python**: v3.11 or higher
- **pip**: Latest version

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/SENODROOM/Responsive-Web-Design-Certification.git
cd Responsive-Web-Design-Certification
```

### 2. Install Node.js Dependencies

```bash
npm install
```

This will install all required packages including:
- Vite (build tool)
- React (for React projects)
- ESLint (code linting)
- Prettier (code formatting)
- Vitest (testing framework)
- Husky (git hooks)

### 3. Initialize Git Hooks

```bash
npm run prepare
```

This sets up pre-commit hooks for code quality checks.

### 4. Verify Installation

```bash
npm run verify
```

This script checks if all required files and configurations are in place.

### 5. Start Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173`

## Python Setup (Optional)

If you want to work with Python projects:

### 1. Create Virtual Environment

```bash
python -m venv venv
```

### 2. Activate Virtual Environment

**Windows:**
```bash
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### 3. Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 4. Run Python Tests

```bash
pytest
```

## Verification

After installation, verify everything works:

```bash
# Check linting
npm run lint

# Check formatting
npm run format:check

# Run tests
npm run test

# Build project
npm run build
```

## Troubleshooting

### Node Version Issues

If you encounter Node version issues:

```bash
# Check your Node version
node --version

# If using nvm, switch to correct version
nvm use 18
```

### Installation Errors

If `npm install` fails:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Port Already in Use

If port 5173 is already in use:

```bash
# Kill the process
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

### Git Hooks Not Working

If pre-commit hooks don't run:

```bash
# Reinstall Husky
rm -rf .husky
npm run prepare
```

### Python Virtual Environment Issues

If virtual environment activation fails:

**Windows:**
```bash
# Enable script execution
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

**macOS/Linux:**
```bash
# Ensure correct permissions
chmod +x venv/bin/activate
```

## IDE Setup

### VS Code (Recommended)

1. Install recommended extensions:
   - ESLint
   - Prettier
   - Python (if working with Python)

2. Extensions will be suggested automatically when you open the project

3. Settings are pre-configured in `.vscode/settings.json`

### Other IDEs

- Import `.editorconfig` for consistent formatting
- Configure ESLint and Prettier plugins
- Set up Python interpreter (if applicable)

## Next Steps

After successful installation:

1. Read `QUICKSTART.md` for quick start guide
2. Check `README.md` for full documentation
3. Review `CONTRIBUTING.md` for contribution guidelines
4. Explore `docs/` for detailed guides

## Getting Help

If you encounter issues:

1. Check this troubleshooting section
2. Search existing [GitHub issues](https://github.com/SENODROOM/Responsive-Web-Design-Certification/issues)
3. Create a new issue with:
   - Your OS and versions
   - Error messages
   - Steps to reproduce

---

Happy coding! 🚀
