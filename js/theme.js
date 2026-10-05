document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // Update button
  if (toggle) {
    toggle.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";

    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      const isDark =
        document.body.classList.contains("dark");

      localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
      );

      toggle.textContent =
        isDark ? "☀️" : "🌙";
    });
  }
});