document.addEventListener("DOMContentLoaded", () => {

  const navSearchButton = document.getElementById("nav-search-button");
  const floatingSearch = document.getElementById("floating-search");

  const input = document.getElementById("searchInput");
  const resultsBox = document.getElementById("searchResults");
  const searchType = document.getElementById("searchType");
  const searchButton = document.getElementById("searchButton");

  if (!input || !resultsBox || !searchType) return;

  /* =========================
     OPEN / CLOSE SEARCH
     ========================= */

  if (navSearchButton && floatingSearch) {
    navSearchButton.addEventListener("click", (event) => {
      event.stopPropagation();

      floatingSearch.classList.toggle("search-open");

      if (floatingSearch.classList.contains("search-open")) {
        input.focus();
      }
    });
  }

  /* =========================
     SEARCH
     ========================= */

  function performSearch() {
    const query = input.value.toLowerCase().trim();
    const type = searchType.value;

    resultsBox.innerHTML = "";

    if (!query) {
      resultsBox.style.display = "none";
      return;
    }

    const results = searchData.filter(item => {

      if (type === "articles" && item.type !== "article") {
        return false;
      }

      if (type === "books" && item.type !== "book") {
        return false;
      }

      if (item.type === "article") {
        return item.title.toLowerCase().includes(query);
      }

      if (item.type === "book") {
        return (
          item.title.toLowerCase().includes(query) ||
          item.author.toLowerCase().includes(query)
        );
      }

      return false;
    });

    if (results.length === 0) {
      resultsBox.style.display = "block";
      resultsBox.innerHTML =
        "<div class='no-results'>No results</div>";
      return;
    }

    results.forEach(item => {
      const link = document.createElement("a");

      link.href = item.url;

      if (item.type === "book") {
        link.innerHTML = `
          <strong>${item.title}</strong>
          <small>Book Review — ${item.author}</small>
        `;
      } else {
        link.innerHTML = `
          <strong>${item.title}</strong>
          <small>Article</small>
        `;
      }

      resultsBox.appendChild(link);
    });

    resultsBox.style.display = "block";
  }

  /* Search while typing */
  input.addEventListener("input", performSearch);

  /* Change search category */
  searchType.addEventListener("change", performSearch);

  /* Search button */
  if (searchButton) {
    searchButton.addEventListener("click", performSearch);
  }

  /* Enter key */
  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  /* Close search when clicking elsewhere */
  document.addEventListener("click", event => {
    if (
      !event.target.closest(".floating-search") &&
      !event.target.closest("#nav-search-button")
    ) {
      floatingSearch.classList.remove("search-open");
    }
  });

});