document.addEventListener("DOMContentLoaded", () => {
  const bookList = document.querySelector(".book-list");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("bookSearchInput");
  const searchButton = document.getElementById("bookSearchButton");

  if (!bookList) {
    console.error("'.book-list' element not found.");
    return;
  }
  let selectedGenre = "All";
  function renderBooks() {
    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";
    const filteredBooks = books.filter(book => {
      // 1. Check genre
      const matchesGenre =
        selectedGenre === "All" ||
        book.genre.toLowerCase() === selectedGenre.toLowerCase();
      // 2. Check search
      const matchesSearch =
        searchTerm === "" ||
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm);
      // 3. Book must satisfy BOTH conditions
      return matchesGenre && matchesSearch;
    });

    bookList.innerHTML = "";
    if (filteredBooks.length === 0) {
      bookList.innerHTML = `
        <p class="no-books">
          No reviews found${searchTerm ? ` for "<strong>${searchTerm}</strong>"` : ""}.
        </p>
      `;
      return;
    }

    filteredBooks.forEach(book => {
      bookList.appendChild(createBookCard(book));
    });
  }


  // -------------------------
  // GENRE FILTERS
  // -------------------------

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active state
      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });
      // Activate selected button
      button.classList.add("active");
      // Store selected genre
      selectedGenre = button.dataset.genre;

      // Re-render using genre + current search
      renderBooks();
    });
  });


  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderBooks();
    });
  }

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      renderBooks();
    });
  }

  renderBooks();
});