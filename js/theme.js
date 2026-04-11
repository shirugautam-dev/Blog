const toggle = document.getElementById("theme-toggle");

// ✅ ALWAYS apply saved theme (even without button)
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

// ✅ Only handle click if button exists (homepage)
if (toggle) {
  // Set correct icon on load
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggle.textContent = "🌙";
    }
  });
}