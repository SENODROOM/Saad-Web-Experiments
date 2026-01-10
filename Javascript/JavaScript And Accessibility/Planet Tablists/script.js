const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Step 16: Deselect all tabs
    tabs.forEach(t => {
      t.setAttribute("aria-selected", "false");
    });

    // Step 17: Hide all panels
    panels.forEach(panel => {
      panel.hidden = true;
    });

    // Step 18: Mark the clicked tab as selected
    tab.setAttribute("aria-selected", "true");

    // Step 19: Get the associated panel's id
    const associatedPanel = tab.getAttribute("aria-controls");

    // Step 20: Select the panel element using its id
    const panel = document.getElementById(associatedPanel);

    // Step 21: Show the panel by setting hidden to false
    panel.hidden = false;
  });
});
