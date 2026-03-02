#!/usr/bin/env node

/**
 * Verification script to check if all required files and configurations are in place
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  const fullPath = path.join(rootDir, filePath);
  const exists = fs.existsSync(fullPath);
  const status = exists ? "✓" : "✗";
  const color = exists ? "green" : "red";
  log(`  ${status} ${description}`, color);
  return exists;
}

function checkDirectory(dirPath, description) {
  const fullPath = path.join(rootDir, dirPath);
  const exists = fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
  const status = exists ? "✓" : "✗";
  const color = exists ? "green" : "red";
  log(`  ${status} ${description}`, color);
  return exists;
}

async function main() {
  log("\n🔍 Verifying Project Setup...\n", "cyan");

  let totalChecks = 0;
  let passedChecks = 0;

  // Configuration Files
  log("📋 Configuration Files:", "blue");
  const configFiles = [
    ["package.json", "Package configuration"],
    [".gitignore", "Git ignore rules"],
    [".eslintrc.json", "ESLint configuration"],
    [".prettierrc", "Prettier configuration"],
    [".editorconfig", "Editor configuration"],
    ["vite.config.js", "Vite configuration"],
    ["vitest.config.js", "Vitest configuration"],
    ["requirements.txt", "Python dependencies"],
    ["pyproject.toml", "Python project config"],
  ];

  configFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // Documentation
  log("\n📚 Documentation:", "blue");
  const docFiles = [
    ["README.md", "Main documentation"],
    ["CONTRIBUTING.md", "Contribution guidelines"],
    ["LICENSE", "License file"],
    ["CHANGELOG.md", "Change log"],
    ["SECURITY.md", "Security policy"],
    ["QUICKSTART.md", "Quick start guide"],
    ["UPGRADE_SUMMARY.md", "Upgrade summary"],
  ];

  docFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // Documentation Folder
  log("\n📖 Documentation Folder:", "blue");
  const docsFiles = [
    ["docs/ARCHITECTURE.md", "Architecture docs"],
    ["docs/DEPLOYMENT.md", "Deployment guide"],
    ["docs/PROJECT_STRUCTURE.md", "Project structure"],
    ["docs/API.md", "API documentation"],
  ];

  docsFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // GitHub Configuration
  log("\n🐙 GitHub Configuration:", "blue");
  const githubFiles = [
    [".github/workflows/ci.yml", "CI/CD workflow"],
    [".github/dependabot.yml", "Dependabot config"],
    [".github/CODE_OF_CONDUCT.md", "Code of conduct"],
    [".github/FUNDING.yml", "Funding config"],
    [".github/pull_request_template.md", "PR template"],
    [".github/ISSUE_TEMPLATE/bug_report.md", "Bug report template"],
    [".github/ISSUE_TEMPLATE/feature_request.md", "Feature request template"],
  ];

  githubFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // Deployment Configuration
  log("\n🚀 Deployment Configuration:", "blue");
  const deployFiles = [
    ["vercel.json", "Vercel config"],
    ["netlify.toml", "Netlify config"],
  ];

  deployFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // Test Files
  log("\n🧪 Test Configuration:", "blue");
  const testFiles = [
    ["tests/setup.js", "Test setup"],
    ["tests/utils.test.js", "Sample tests"],
    ["Python/tests/__init__.py", "Python tests init"],
    ["Python/tests/test_budget_app.py", "Python test example"],
  ];

  testFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // Scripts
  log("\n📜 Scripts:", "blue");
  const scriptFiles = [
    ["scripts/generate-projects.js", "Project generator"],
    ["scripts/verify-setup.js", "Setup verifier"],
  ];

  scriptFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // VS Code Configuration
  log("\n💻 VS Code Configuration:", "blue");
  const vscodeFiles = [
    [".vscode/settings.json", "VS Code settings"],
    [".vscode/extensions.json", "Recommended extensions"],
  ];

  vscodeFiles.forEach(([file, desc]) => {
    totalChecks++;
    if (checkFile(file, desc)) passedChecks++;
  });

  // Project Directories
  log("\n📁 Project Directories:", "blue");
  const directories = [
    ["HTML", "HTML projects"],
    ["CSS", "CSS projects"],
    ["Javascript", "JavaScript projects"],
    ["React", "React projects"],
    ["Python", "Python projects"],
    ["Images", "Image assets"],
  ];

  directories.forEach(([dir, desc]) => {
    totalChecks++;
    if (checkDirectory(dir, desc)) passedChecks++;
  });

  // Summary
  log("\n" + "=".repeat(50), "cyan");
  const percentage = ((passedChecks / totalChecks) * 100).toFixed(1);
  const summaryColor = percentage === "100.0" ? "green" : percentage >= "80.0" ? "yellow" : "red";

  log(`\n📊 Verification Summary:`, "cyan");
  log(`   Total Checks: ${totalChecks}`, "blue");
  log(`   Passed: ${passedChecks}`, "green");
  log(`   Failed: ${totalChecks - passedChecks}`, "red");
  log(`   Success Rate: ${percentage}%`, summaryColor);

  if (passedChecks === totalChecks) {
    log("\n✅ All checks passed! Your project is ready to go! 🎉\n", "green");
    log("Next steps:", "cyan");
    log("  1. npm install", "blue");
    log("  2. npm run dev", "blue");
    log("  3. npm run build", "blue");
    log("  4. Deploy to your favorite platform\n", "blue");
  } else {
    log("\n⚠️  Some checks failed. Please review the missing files above.\n", "yellow");
  }

  process.exit(passedChecks === totalChecks ? 0 : 1);
}

main().catch((error) => {
  log(`\n❌ Error: ${error.message}\n`, "red");
  process.exit(1);
});
