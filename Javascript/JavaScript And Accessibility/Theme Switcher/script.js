// Array of themes with name and message
const themes = [
  { name: "light", message: "Light theme activated!" },
  { name: "dark", message: "Dark theme activated!" }
];

// Select elements
const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const liveRegion = document.querySelector('[aria-live="polite"]');

// Toggle dropdown visibility
button.addEventListener("click", () => {
  const isHidden = dropdown.hasAttribute("hidden");
  if (isHidden) {
    dropdown.removeAttribute("hidden");
    button.setAttribute("aria-expanded", "true");
  } else {
    dropdown.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
  }
});

// Handle theme selection
dropdown.addEventListener("click", (event) => {
  const clicked = event.target;
  if (clicked && clicked.getAttribute("role") === "menuitem") {
    const themeName = clicked.textContent.toLowerCase();

    // Remove previous theme classes
    themes.forEach(theme => {
      document.body.classList.remove(`theme-${theme.name}`);
    });

    // Add selected theme class
    document.body.classList.add(`theme-${themeName}`);

    // Update live region message
    const theme = themes.find(t => t.name === themeName);
    if (theme) liveRegion.textContent = theme.message;

    // Close dropdown
    dropdown.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", "false");
  }
});
