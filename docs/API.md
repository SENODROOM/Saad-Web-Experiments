# API Documentation

## Projects Data Structure

The `projects.js` file contains an array of project objects with the following structure:

### Project Object Schema

```javascript
{
  category: String,      // "HTML" | "CSS" | "JavaScript" | "React" | "Python"
  title: String,         // Project title
  iframeSrc: String,     // Path to project (for web projects)
  description: String,   // Brief project description
  codeFiles: Array       // Array of code file objects
}
```

### Code File Object Schema

```javascript
{
  name: String,          // File name (e.g., "index.html")
  src: String,           // Path to file
  lang: String           // Language: "html" | "css" | "javascript" | "jsx" | "python"
}
```

## Functions

### filterProjects(projects, category)

Filters projects by category.

**Parameters:**
- `projects` (Array): Array of project objects
- `category` (String): Category to filter by or "All"

**Returns:** Array of filtered projects

**Example:**
```javascript
const htmlProjects = filterProjects(allProjects, "HTML");
```

### searchProjects(projects, query)

Searches projects by title, description, or category.

**Parameters:**
- `projects` (Array): Array of project objects
- `query` (String): Search query

**Returns:** Array of matching projects

**Example:**
```javascript
const results = searchProjects(allProjects, "calculator");
```

## Categories

- **HTML**: 22 projects
- **CSS**: 35+ projects
- **JavaScript**: 60+ projects
- **React**: 13 projects
- **Python**: 32 projects

---

Last Updated: 2024
