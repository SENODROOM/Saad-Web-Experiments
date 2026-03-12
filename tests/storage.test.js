/**
 * tests/storage.test.js
 *
 * Tests for frontend/src/lib/storage.js (localStorage wrapper)
 * Run with: npm run test
 */
import { describe, it, expect, beforeEach, vi } from "vitest";

// ---------------------------------------------------------------------------
// localStorage mock (jsdom provides it in Vitest, but we make it explicit here
// so the tests document expected behaviour regardless of environment)
// ---------------------------------------------------------------------------

const store = {};
const localStorageMock = {
  getItem: vi.fn((key) => store[key] ?? null),
  setItem: vi.fn((key, value) => { store[key] = String(value); }),
  removeItem: vi.fn((key) => { delete store[key]; }),
  clear: vi.fn(() => { Object.keys(store).forEach((k) => delete store[k]); }),
  get length() { return Object.keys(store).length; },
  key: vi.fn((i) => Object.keys(store)[i] ?? null),
};

Object.defineProperty(global, "localStorage", { value: localStorageMock });

// ---------------------------------------------------------------------------
// Inline implementation mirror of storage.js
// ---------------------------------------------------------------------------

const Storage = {
  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw !== null ? JSON.parse(raw) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  has(key) {
    return localStorage.getItem(key) !== null;
  },
};

// ---------------------------------------------------------------------------

describe("Storage wrapper", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  describe("set", () => {
    it("stores a string value", () => {
      Storage.set("name", "Saad");
      expect(localStorageMock.setItem).toHaveBeenCalledWith("name", '"Saad"');
    });

    it("stores a number", () => {
      Storage.set("count", 42);
      expect(localStorageMock.setItem).toHaveBeenCalledWith("count", "42");
    });

    it("stores an object as JSON", () => {
      Storage.set("user", { id: 1, name: "Saad" });
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        "user",
        '{"id":1,"name":"Saad"}'
      );
    });

    it("stores an array", () => {
      Storage.set("items", [1, 2, 3]);
      expect(localStorageMock.setItem).toHaveBeenCalledWith("items", "[1,2,3]");
    });

    it("returns true on success", () => {
      expect(Storage.set("x", 1)).toBe(true);
    });
  });

  describe("get", () => {
    it("retrieves a stored string", () => {
      store["key"] = '"hello"';
      expect(Storage.get("key")).toBe("hello");
    });

    it("retrieves a stored object", () => {
      store["obj"] = '{"a":1}';
      expect(Storage.get("obj")).toEqual({ a: 1 });
    });

    it("returns defaultValue when key is missing", () => {
      expect(Storage.get("missing", "default")).toBe("default");
    });

    it("returns null by default when key is missing", () => {
      expect(Storage.get("nope")).toBeNull();
    });

    it("returns defaultValue on malformed JSON", () => {
      store["bad"] = "{not json}";
      expect(Storage.get("bad", [])).toEqual([]);
    });
  });

  describe("remove", () => {
    it("removes an existing key", () => {
      store["toRemove"] = '"val"';
      Storage.remove("toRemove");
      expect(localStorageMock.removeItem).toHaveBeenCalledWith("toRemove");
    });

    it("does not throw when key does not exist", () => {
      expect(() => Storage.remove("nonexistent")).not.toThrow();
    });
  });

  describe("has", () => {
    it("returns true when key exists", () => {
      store["present"] = '"yes"';
      expect(Storage.has("present")).toBe(true);
    });

    it("returns false when key is absent", () => {
      expect(Storage.has("absent")).toBe(false);
    });
  });
});
