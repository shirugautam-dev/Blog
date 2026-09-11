function createStars(rating) {
  if (!rating) return "";

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

  const coverImgSrc =
    book.coverImage || "Images/books/default-cover.jpg";

  article.innerHTML = `
    <img
      src="${coverImgSrc}"
      alt="${book.title} Cover"
      class="book-card-cover"
    >

    <div class="book-card-info">

      <h2 class="book-title">
        ${book.title}
      </h2>

      <h3 class="book-author">
        by ${book.author}
      </h3>

      <div class="book-meta">

        <span>Genre: ${book.genre}</span>

        <span>Published: ${book.published}</span>

        <span>Pages: ${book.pages}</span>

        ${book.reviewed
      ? `<span>Reviewed on: ${book.reviewed}</span>`
      : ""
    }

      </div>

      ${book.rating ? createStars(book.rating) : ""}
    
    
      </div>


   <div class="book-card-teaser">  
    <div class="book-card-quote">
      ${book.quote ? `<p>${book.quote}</p>` : ""}
   </div>
   
   ${book.teaser ? `<p>${book.teaser}</p>` : ""}
   
      ${book.reviewed
      ? `
            <a
              href="books/${book.slug}.html"
              class="read-review-link"
            >
              Read my review →
            </a>
          `
      : `
            <p class="coming-soon">
              <em>Review coming soon...</em>
            </p>
          `
    }

    </div> 
  `;

  return article;
}