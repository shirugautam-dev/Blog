function createStars(rating) {
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5;
  let stars = "";

  for (let i = 0; i < full; i++) {
    stars += "★";
  }
  if (half) {
    stars += "½";
  }
  while (stars.length < 5) {
    stars += "☆";
  }
  return `
    <div class="book-rating">
      <span class="stars">${stars}</span>
      <span class="rating-number">${rating}/5</span>
    </div>
  `;
}

function createBookCard(book) {
  const article = document.createElement("article");
  article.className = "book-card";

  // Use a provided image path, or default to a placeholder
  const coverImgSrc = book.coverImage || "Images/books/default-cover.jpg";

  article.innerHTML = `
    <div class="book-card-left">
      <img src="${coverImgSrc}" alt="${book.title} Cover" class="book-card-cover">
    </div>

    <div class="book-card-right">
      <div class="book-card-header">
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author">by ${book.author}</h3>
        <div class="book-meta">
          <span>Genre: ${book.genre}</span> • 
          <span>Published: ${book.published}</span> • 
          <span>Pages: ${book.pages}</span>
          <span>Reviewed: ${book.reviewed}</span>
        </div>
        ${createStars(book.rating)}
      </div>

      <div class="book-review-content">
        ${book.review
        ? book.review
        .trim()
        .split(/\n\s*\n/)
        .map(paragraph => `<p>${paragraph.trim()}</p>`)
        .join("")
      : "<p><em>Review coming soon...</em></p>"
        }
      </div>

      ${book.tags && book.tags.length
      ? `<div class="book-tags">
            ${book.tags.map(tag => `<span class="book-tag">${tag}</span>`).join("")}
           </div>`
      : ""
    }
    </div>
  `;

  return article;
}