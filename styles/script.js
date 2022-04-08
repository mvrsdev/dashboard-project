// The log helps to ensure that your script is loaded
console.log("Script loaded successfully!");

// Get drawer menu instance by its ID
const drawerMenu = document.getElementById("drawer-menu");

// Add "click" event listener on toggle button
document.getElementById("toggle-button").addEventListener("click", () => {
  // Invert display value according it's current value (if "none", then "flex", and vice-versa)
  drawerMenu.style.display =
    drawerMenu.style.display === "none" ? "flex" : "none";
});
