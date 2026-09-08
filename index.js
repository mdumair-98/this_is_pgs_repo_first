// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleTheme");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Update button text depending on mode
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "Switch to Light Mode";
    } else {
      toggleBtn.textContent = "Toggle Dark Mode";
    }
  });
});
