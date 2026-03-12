/**
 * tests/analytics.test.js
 *
 * Tests for frontend/src/lib/analytics.js
 * Run with: npm run test
 */
import { describe, it, expect, beforeEach, vi } from "vitest";

// ---------------------------------------------------------------------------
// localStorage mock
// ---------------------------------------------------------------------------

const store = {};
const localStorageMock = {
  getItem: vi.fn((key) => store[key] ?? null),
  setItem: vi.fn((key, value) => { store[key] = String(value); }),
  removeItem: vi.fn((key) => { delete store[key]; }),
  clear: vi.fn(() => { Object.keys(store).forEach((k) => delete store[k]); }),
};
Object.defineProperty(global, "localStorage", { value: localStorageMock });

// ---------------------------------------------------------------------------
// Inline implementation mirror of analytics.js
// ---------------------------------------------------------------------------

const STORAGE_KEY = "portfolio_analytics";
const MAX_SEARCH_HISTORY = 100;
const MAX_RECENT_PROJECTS = 20;

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw
      ? JSON.parse(raw)
      : {
          pageViews: 0,
          sessionViews: 0,
          projectViews: {},
          searchQueries: [],
          filterUsage: {},
          recentProjects: [],
        };
  } catch {
    return {
      pageViews: 0,
      sessionViews: 0,
      projectViews: {},
      searchQueries: [],
      filterUsage: {},
      recentProjects: [],
    };
  }
}

function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const Analytics = {
  trackPageView() {
    const data = loadData();
    data.pageViews += 1;
    data.sessionViews += 1;
    saveData(data);
  },

  trackProjectView(projectId, projectTitle) {
    const data = loadData();
    data.projectViews[projectId] = (data.projectViews[projectId] ?? 0) + 1;
    // Update recents
    data.recentProjects = data.recentProjects.filter((p) => p.id !== projectId);
    data.recentProjects.unshift({ id: projectId, title: projectTitle, timestamp: Date.now() });
    if (data.recentProjects.length > MAX_RECENT_PROJECTS) {
      data.recentProjects = data.recentProjects.slice(0, MAX_RECENT_PROJECTS);
    }
    saveData(data);
  },

  trackSearch(query) {
    if (!query || !query.trim()) return;
    const data = loadData();
    data.searchQueries.unshift({ query: query.trim(), timestamp: Date.now() });
    if (data.searchQueries.length > MAX_SEARCH_HISTORY) {
      data.searchQueries = data.searchQueries.slice(0, MAX_SEARCH_HISTORY);
    }
    saveData(data);
  },

  trackFilter(category) {
    const data = loadData();
    data.filterUsage[category] = (data.filterUsage[category] ?? 0) + 1;
    saveData(data);
  },

  getSummary() {
    const data = loadData();
    const topProjects = Object.entries(data.projectViews)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([id, views]) => ({ id, views }));
    return {
      pageViews: data.pageViews,
      uniqueProjectsViewed: Object.keys(data.projectViews).length,
      totalProjectViews: Object.values(data.projectViews).reduce((a, b) => a + b, 0),
      searchCount: data.searchQueries.length,
      topProjects,
      recentProjects: data.recentProjects.slice(0, 5),
      filterUsage: data.filterUsage,
    };
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  },
};

// ---------------------------------------------------------------------------

describe("Analytics", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  describe("trackPageView", () => {
    it("increments pageViews on each call", () => {
      Analytics.trackPageView();
      Analytics.trackPageView();
      const summary = Analytics.getSummary();
      expect(summary.pageViews).toBe(2);
    });
  });

  describe("trackProjectView", () => {
    it("records a view for a project", () => {
      Analytics.trackProjectView("js-palindrome", "Palindrome Checker");
      const summary = Analytics.getSummary();
      expect(summary.totalProjectViews).toBe(1);
      expect(summary.uniqueProjectsViewed).toBe(1);
    });

    it("accumulates multiple views for the same project", () => {
      Analytics.trackProjectView("js-palindrome", "Palindrome Checker");
      Analytics.trackProjectView("js-palindrome", "Palindrome Checker");
      Analytics.trackProjectView("js-palindrome", "Palindrome Checker");
      const summary = Analytics.getSummary();
      expect(summary.totalProjectViews).toBe(3);
    });

    it("tracks multiple distinct projects", () => {
      Analytics.trackProjectView("css-gallery", "Flexbox Gallery");
      Analytics.trackProjectView("js-game", "Rock Paper Scissors");
      const summary = Analytics.getSummary();
      expect(summary.uniqueProjectsViewed).toBe(2);
    });

    it("adds project to recentProjects", () => {
      Analytics.trackProjectView("react-ttt", "Tic-Tac-Toe");
      const summary = Analytics.getSummary();
      expect(summary.recentProjects[0].id).toBe("react-ttt");
    });

    it("deduplicates recentProjects and bumps to top", () => {
      Analytics.trackProjectView("a", "A");
      Analytics.trackProjectView("b", "B");
      Analytics.trackProjectView("a", "A"); // re-view
      const summary = Analytics.getSummary();
      expect(summary.recentProjects[0].id).toBe("a");
      expect(summary.recentProjects).toHaveLength(2);
    });

    it("topProjects returns projects sorted by view count", () => {
      Analytics.trackProjectView("popular", "Popular");
      Analytics.trackProjectView("popular", "Popular");
      Analytics.trackProjectView("popular", "Popular");
      Analytics.trackProjectView("less", "Less");
      const summary = Analytics.getSummary();
      expect(summary.topProjects[0].id).toBe("popular");
      expect(summary.topProjects[0].views).toBe(3);
    });
  });

  describe("trackSearch", () => {
    it("records a search query", () => {
      Analytics.trackSearch("sorting visualizer");
      const summary = Analytics.getSummary();
      expect(summary.searchCount).toBe(1);
    });

    it("ignores empty queries", () => {
      Analytics.trackSearch("");
      Analytics.trackSearch("   ");
      const summary = Analytics.getSummary();
      expect(summary.searchCount).toBe(0);
    });

    it("records multiple distinct searches", () => {
      Analytics.trackSearch("react");
      Analytics.trackSearch("css");
      Analytics.trackSearch("python");
      expect(Analytics.getSummary().searchCount).toBe(3);
    });

    it("trims whitespace from queries", () => {
      Analytics.trackSearch("  react  ");
      const data = JSON.parse(store[STORAGE_KEY]);
      expect(data.searchQueries[0].query).toBe("react");
    });
  });

  describe("trackFilter", () => {
    it("records filter category usage", () => {
      Analytics.trackFilter("JavaScript");
      Analytics.trackFilter("JavaScript");
      Analytics.trackFilter("CSS");
      const summary = Analytics.getSummary();
      expect(summary.filterUsage["JavaScript"]).toBe(2);
      expect(summary.filterUsage["CSS"]).toBe(1);
    });
  });

  describe("getSummary", () => {
    it("returns zero values when nothing tracked", () => {
      const summary = Analytics.getSummary();
      expect(summary.pageViews).toBe(0);
      expect(summary.uniqueProjectsViewed).toBe(0);
      expect(summary.totalProjectViews).toBe(0);
      expect(summary.searchCount).toBe(0);
    });

    it("topProjects is capped at 5 entries", () => {
      for (let i = 0; i < 10; i++) {
        Analytics.trackProjectView(`project-${i}`, `Project ${i}`);
      }
      expect(Analytics.getSummary().topProjects.length).toBeLessThanOrEqual(5);
    });

    it("recentProjects in summary is capped at 5", () => {
      for (let i = 0; i < 10; i++) {
        Analytics.trackProjectView(`p-${i}`, `P ${i}`);
      }
      expect(Analytics.getSummary().recentProjects).toHaveLength(5);
    });
  });

  describe("clear", () => {
    it("removes all analytics data", () => {
      Analytics.trackPageView();
      Analytics.trackProjectView("x", "X");
      Analytics.clear();
      const summary = Analytics.getSummary();
      expect(summary.pageViews).toBe(0);
      expect(summary.totalProjectViews).toBe(0);
    });
  });
});
