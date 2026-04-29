document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const resultsBox = document.getElementById("searchResults");

  if (!input || !resultsBox) return;

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase().trim();

    resultsBox.innerHTML = "";

    if (!query) {
      resultsBox.style.display = "none";
      return;
    }

    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      resultsBox.style.display = "block";
      resultsBox.innerHTML = "<div class='no-results'>No results</div>";
      return;
    }

    results.forEach(item => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.title;
      resultsBox.appendChild(link);
    });

    resultsBox.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      resultsBox.style.display = "none";
    }
  });
});