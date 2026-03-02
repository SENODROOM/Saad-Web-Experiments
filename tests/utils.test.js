import { describe, it, expect } from "vitest";

// Example utility functions to test
function filterProjects(projects, category) {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

function searchProjects(projects, query) {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
}

describe("Project Utilities", () => {
  const mockProjects = [
    {
      category: "HTML",
      title: "Test HTML Project",
      description: "A test HTML project",
    },
    {
      category: "CSS",
      title: "Test CSS Project",
      description: "A test CSS project",
    },
    {
      category: "JavaScript",
      title: "Test JS Project",
      description: "A test JavaScript project",
    },
  ];

  describe("filterProjects", () => {
    it("should return all projects when category is 'All'", () => {
      const result = filterProjects(mockProjects, "All");
      expect(result).toHaveLength(3);
    });

    it("should filter projects by category", () => {
      const result = filterProjects(mockProjects, "HTML");
      expect(result).toHaveLength(1);
      expect(result[0].category).toBe("HTML");
    });

    it("should return empty array for non-existent category", () => {
      const result = filterProjects(mockProjects, "Python");
      expect(result).toHaveLength(0);
    });
  });

  describe("searchProjects", () => {
    it("should search by title", () => {
      const result = searchProjects(mockProjects, "HTML");
      expect(result).toHaveLength(1);
      expect(result[0].title).toContain("HTML");
    });

    it("should search by description", () => {
      const result = searchProjects(mockProjects, "CSS");
      expect(result).toHaveLength(1);
    });

    it("should be case insensitive", () => {
      const result = searchProjects(mockProjects, "html");
      expect(result).toHaveLength(1);
    });

    it("should return empty array for no matches", () => {
      const result = searchProjects(mockProjects, "xyz123");
      expect(result).toHaveLength(0);
    });

    it("should return all projects for empty query", () => {
      const result = searchProjects(mockProjects, "");
      expect(result).toHaveLength(3);
    });
  });
});
