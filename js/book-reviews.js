document.addEventListener("DOMContentLoaded", () => {
  const bookList = document.querySelector(".book-list");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("bookSearchInput");
  const searchButton = document.getElementById("bookSearchButton");
  const moreReviews = document.querySelector(".book-reviews-more");
  const bookPageIndex = document.getElementById("book-page-index");
  if (!bookList) {
    console.error("'.book-list' element not found.");
    return;
  }

  let selectedGenre = "All";

  const booksPerPage = 8;
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = Math.max(1, parseInt(urlParams.get("page")) || 1);

  function renderBooks() {
    const searchTerm = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

    // Filter books by category and search
    const filteredBooks = books.filter(book => {
      const matchesGenre =
        selectedGenre === "All" ||
        book.genre.toLowerCase() === selectedGenre.toLowerCase() ||
        (book.categories &&
          book.categories.some(
            category =>
              category.toLowerCase() === selectedGenre.toLowerCase()
          ));

      const matchesSearch =
        searchTerm === "" ||
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm);

      return matchesGenre && matchesSearch;
    });

    bookList.innerHTML = "";

    if (filteredBooks.length === 0) {
      bookList.innerHTML = `
        <p class="no-books">
          No reviews found${searchTerm ? ` for "<strong>${searchTerm}</strong>"` : ""}.
        </p>
      `;

      if (moreReviews) {
        moreReviews.style.display = "none";
      }

      return;
    }

    // Work out which 8 books belong on this page
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;

    const booksToDisplay = filteredBooks.slice(startIndex, endIndex);

    booksToDisplay.forEach(book => {
      bookList.appendChild(createBookCard(book));
    });
    // Build the "Reviews on this page" list
    if (bookPageIndex) {
      bookPageIndex.innerHTML = booksToDisplay
        .map(
          book => `
        <a href="${book.url}">
          ${book.title}
        </a>
      `
        )
        .join("");
    }

    // Show "View more reviews" only if another page exists
    if (moreReviews) {
      const hasPreviousPage = currentPage > 1;
      const hasNextPage = endIndex < filteredBooks.length;

      if (hasPreviousPage || hasNextPage) {
        moreReviews.style.display = "flex";
        moreReviews.style.justifyContent = "space-between";

        moreReviews.innerHTML = `
      ${hasPreviousPage
            ? `<a href="book-reviews.html?page=${currentPage - 1}">
               ← Previous
             </a>`
            : `<span></span>`
          }

      ${hasNextPage
            ? `<a href="book-reviews.html?page=${currentPage + 1}">
               View more reviews →
             </a>`
            : `<span></span>`
          }
    `;
      } else {
        moreReviews.style.display = "none";
      }
    }
  }

  // -------------------------
  // GENRE FILTERS
  // -------------------------

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
      selectedGenre = button.dataset.genre;
      currentPage = 1;

      window.history.replaceState(
        {},
        "",
        "book-reviews.html"
      );

      renderBooks();
    });
  });

  // -------------------------
  // BOOK SEARCH
  // -------------------------

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