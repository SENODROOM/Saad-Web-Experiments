#!/usr/bin/env node

/**
 * Script to automatically generate projects.json from directory structure
 * This helps maintain the projects list without manual updates
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, "..");

const categories = ["HTML", "CSS", "Javascript", "React", "Python"];

const categoryDescriptions = {
  HTML: "Semantic HTML and accessibility projects",
  CSS: "Styling, layouts, and animations",
  Javascript: "Interactive web applications and algorithms",
  React: "Modern component-based applications",
  Python: "Algorithms, data structures, and OOP",
};

function scanDirectory(dir, category) {
  const projects = [];

  if (!fs.existsSync(dir)) {
    console.warn(`Directory not found: ${dir}`);
    return projects;
  }

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // Check if it's a project directory (contains index.html or .py files)
      const files = fs.readdirSync(itemPath);
      const hasIndex = files.includes("index.html");
      const hasPython = files.some((f) => f.endsWith(".py"));
      const hasJSX = files.some((f) => f.endsWith(".jsx"));

      if (hasIndex || hasPython || hasJSX) {
        const project = {
          id: item.toLowerCase().replace(/\s+/g, "-"),
          category: category,
          title: item,
          slug: item.toLowerCase().replace(/\s+/g, "-"),
          description: `${item} - ${categoryDescriptions[category]}`,
          tags: [category.toLowerCase()],
          difficulty: "intermediate",
          dateCreated: stats.birthtime.toISOString().split("T")[0],
          technologies: getTechnologies(category),
          featured: false,
        };

        // Add file paths
        if (hasIndex) {
          project.iframeSrc = `${category}/${item}/index.html`;
          project.codeFiles = getCodeFiles(itemPath, category, item);
        } else if (hasPython) {
          project.codeFiles = files
            .filter((f) => f.endsWith(".py"))
            .map((f) => ({
              name: f,
              src: `${category}/${f}`,
              lang: "python",
            }));
        }

        projects.push(project);
      } else {
        // Recursively scan subdirectories
        projects.push(...scanDirectory(itemPath, category));
      }
    } else if (stats.isFile()) {
      // Handle standalone files (like in HTML category)
      if (item.endsWith(".html") && category === "HTML") {
        const project = {
          id: item.replace(".html", "").toLowerCase().replace(/\s+/g, "-"),
          category: "HTML",
          title: item.replace(".html", ""),
          slug: item.replace(".html", "").toLowerCase().replace(/\s+/g, "-"),
          description: `${item.replace(".html", "")} - Semantic HTML project`,
          tags: ["html", "semantic"],
          difficulty: "beginner",
          dateCreated: stats.birthtime.toISOString().split("T")[0],
          technologies: ["HTML5"],
          featured: false,
          iframeSrc: `HTML/${item}`,
          codeFiles: [
            {
              name: item,
              src: `HTML/${item}`,
              lang: "html",
            },
          ],
        };
        projects.push(project);
      } else if (item.endsWith(".py") && category === "Python") {
        const project = {
          id: item.replace(".py", "").toLowerCase().replace(/\s+/g, "-"),
          category: "Python",
          title: item.replace(".py", ""),
          slug: item.replace(".py", "").toLowerCase().replace(/\s+/g, "-"),
          description: `${item.replace(".py", "")} - Python implementation`,
          tags: ["python", "algorithm"],
          difficulty: "intermediate",
          dateCreated: stats.birthtime.toISOString().split("T")[0],
          technologies: ["Python"],
          featured: false,
          codeFiles: [
            {
              name: item,
              src: `Python/${item}`,
              lang: "python",
            },
          ],
        };
        projects.push(project);
      } else if (item.endsWith(".js") && category === "Javascript") {
        const project = {
          id: item.replace(".js", "").toLowerCase().replace(/\s+/g, "-"),
          category: "JavaScript",
          title: item.replace(".js", ""),
          slug: item.replace(".js", "").toLowerCase().replace(/\s+/g, "-"),
          description: `${item.replace(".js", "")} - JavaScript implementation`,
          tags: ["javascript", "algorithm"],
          difficulty: "intermediate",
          dateCreated: stats.birthtime.toISOString().split("T")[0],
          technologies: ["JavaScript"],
          featured: false,
          codeFiles: [
            {
              name: item,
              src: `Javascript/${item}`,
              lang: "javascript",
            },
          ],
        };
        projects.push(project);
      }
    }
  }

  return projects;
}

function getCodeFiles(projectPath, category, projectName) {
  const files = fs.readdirSync(projectPath);
  const codeFiles = [];

  const fileExtensions = {
    html: "html",
    css: "css",
    js: "javascript",
    jsx: "jsx",
    py: "python",
  };

  for (const file of files) {
    const ext = path.extname(file).slice(1);
    if (fileExtensions[ext]) {
      codeFiles.push({
        name: file,
        src: `${category}/${projectName}/${file}`,
        lang: fileExtensions[ext],
      });
    }
  }

  return codeFiles;
}

function getTechnologies(category) {
  const techMap = {
    HTML: ["HTML5"],
    CSS: ["CSS3", "HTML5"],
    Javascript: ["JavaScript", "HTML5", "CSS3"],
    React: ["React", "JavaScript", "HTML5", "CSS3"],
    Python: ["Python"],
  };
  return techMap[category] || [];
}

function generateProjectsJSON() {
  console.log("🔍 Scanning project directories...\n");

  const allProjects = [];

  for (const category of categories) {
    const categoryPath = path.join(rootDir, category);
    console.log(`📂 Scanning ${category}...`);

    const projects = scanDirectory(categoryPath, category);
    allProjects.push(...projects);

    console.log(`   Found ${projects.length} projects\n`);
  }

  const output = {
    version: "2.0.0",
    lastUpdated: new Date().toISOString(),
    totalProjects: allProjects.length,
    categories: categories.map((cat) => ({
      name: cat,
      count: allProjects.filter((p) => p.category === cat).length,
      description: categoryDescriptions[cat],
    })),
    projects: allProjects,
  };

  const outputPath = path.join(rootDir, "src", "data", "projects.json");
  const outputDir = path.dirname(outputPath);

  // Create directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log("✅ Successfully generated projects.json");
  console.log(`📊 Total projects: ${allProjects.length}`);
  console.log(`📍 Output: ${outputPath}\n`);

  // Print summary
  console.log("📈 Summary by category:");
  output.categories.forEach((cat) => {
    console.log(`   ${cat.name}: ${cat.count} projects`);
  });
}

// Run the script
try {
  generateProjectsJSON();
} catch (error) {
  console.error("❌ Error generating projects.json:", error);
  process.exit(1);
}
