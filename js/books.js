const container = document.getElementById("books-container");

if (container && typeof books !== "undefined") {
  books.forEach(book => {
    const stars =
      "★".repeat(book.rating) + "☆".repeat(5 - book.rating);

    const card = `
  <a href="books_htmls/${book.slug}.html" class="book-link">
    <div class="book-card">

      <div class="book-img-wrap">
        <img src="${book.cover}" class="book-cover" />
      </div>

      <div class="book-content">
        <h3 class="book-title">${book.title.replaceAll("_", " ")}</h3>

        <div class="book-rating">${stars}</div>

        <p class="book-review">${book.excerpt}</p>

        <div class="book-read">Read Review →</div>
      </div>

    </div>
  </a>
`;

    container.innerHTML += card;
  });
}