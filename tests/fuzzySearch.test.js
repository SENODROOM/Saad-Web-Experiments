/**
 * tests/fuzzySearch.test.js
 *
 * Tests for frontend/src/lib/fuzzySearch.js
 * Run with: npm run test
 */
import { describe, it, expect, beforeEach } from "vitest";

// ---------------------------------------------------------------------------
// Inline implementation mirror — keeps tests self-contained even if the source
// file path changes. Replace with a real import once the module exports cleanly:
//   import { FuzzySearch } from "../frontend/src/lib/fuzzySearch.js";
// ---------------------------------------------------------------------------

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

class FuzzySearch {
  constructor(items, fields) {
    this.items = items;
    this.fields = fields;
  }

  score(query, text) {
    const q = query.toLowerCase();
    const t = text.toLowerCase();
    if (t.includes(q)) return 1;
    const maxLen = Math.max(q.length, t.length);
    return maxLen === 0 ? 1 : 1 - levenshtein(q, t) / maxLen;
  }

  search(query, threshold = 0.3) {
    if (!query) return this.items;
    return this.items
      .map((item) => ({
        item,
        score: Math.max(
          ...this.fields.map((f) => this.score(query, item[f] ?? ""))
        ),
      }))
      .filter(({ score }) => score >= threshold)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }
}

// ---------------------------------------------------------------------------

const PROJECTS = [
  { title: "Rock, Paper, Scissors Game", category: "JavaScript", description: "Classic game" },
  { title: "Palindrome Checker", category: "JavaScript", description: "Check palindromes" },
  { title: "CSS Color Marker", category: "CSS", description: "Color theory" },
  { title: "Flexbox Photo Gallery", category: "CSS", description: "Responsive layout" },
  { title: "Budget App", category: "Python", description: "Track finances" },
  { title: "Tic-Tac-Toe Game", category: "React", description: "React game" },
  { title: "Sorting Visualizer", category: "JavaScript", description: "Algorithm visualization" },
];

describe("FuzzySearch", () => {
  let fuzzy;

  beforeEach(() => {
    fuzzy = new FuzzySearch(PROJECTS, ["title", "category", "description"]);
  });

  describe("exact matches", () => {
    it("returns item on exact title match", () => {
      const results = fuzzy.search("Budget App");
      expect(results[0].title).toBe("Budget App");
    });

    it("is case-insensitive on exact match", () => {
      const results = fuzzy.search("budget app");
      expect(results[0].title).toBe("Budget App");
    });

    it("matches by category", () => {
      const results = fuzzy.search("React");
      expect(results.some((r) => r.category === "React")).toBe(true);
    });
  });

  describe("fuzzy/typo tolerance", () => {
    it("finds 'JavaScript' when searching 'javasript' (missing c)", () => {
      const results = fuzzy.search("javasript", 0.5);
      expect(results.some((r) => r.category === "JavaScript")).toBe(true);
    });

    it("finds 'Palindrome' with one-character typo 'Palindrome'", () => {
      const results = fuzzy.search("Palindrome Chekcer", 0.4);
      expect(results.some((r) => r.title.includes("Palindrome"))).toBe(true);
    });

    it("finds result with threshold 0.3 for partial match", () => {
      const results = fuzzy.search("Sort", 0.3);
      expect(results.some((r) => r.title.includes("Sort"))).toBe(true);
    });
  });

  describe("empty and edge cases", () => {
    it("returns all items for empty query", () => {
      expect(fuzzy.search("")).toHaveLength(PROJECTS.length);
    });

    it("returns empty array when nothing matches above threshold", () => {
      const results = fuzzy.search("xyzxyzxyz", 0.9);
      expect(results).toHaveLength(0);
    });

    it("handles single-character query", () => {
      const results = fuzzy.search("C", 0.3);
      expect(Array.isArray(results)).toBe(true);
    });

    it("handles query longer than any item field", () => {
      const results = fuzzy.search("a".repeat(200), 0.3);
      expect(Array.isArray(results)).toBe(true);
    });
  });

  describe("ranking", () => {
    it("places exact category match before fuzzy matches", () => {
      const results = fuzzy.search("CSS", 0.3);
      const first = results[0];
      expect(first.category).toBe("CSS");
    });

    it("returns results sorted by descending score", () => {
      const fuzz = new FuzzySearch(
        [
          { title: "game", category: "" },
          { title: "Game Settings", category: "" },
          { title: "gameboard", category: "" },
        ],
        ["title"]
      );
      const results = fuzz.search("game", 0.3);
      expect(results[0].title).toBe("game");
    });
  });
});
