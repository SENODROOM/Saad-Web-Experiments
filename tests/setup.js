// Vitest setup file
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Add custom matchers if needed
expect.extend({
  // Custom matchers can be added here
});
