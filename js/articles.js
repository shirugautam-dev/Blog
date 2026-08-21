const params = new URLSearchParams(window.location.search);
const postSlug = params.get("post");

if (!postSlug) {

  const articles = window.articlesData || [];

  const container = document.getElementById("articles");
  const articlesPerPage = 10;

  function render() {
    if (!container) return;

    const pageParams = new URLSearchParams(window.location.search);
    const currentPage = parseInt(pageParams.get("page")) || 1;

    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;

    const paginatedArticles = articles.slice(startIndex, endIndex);

    // Clear existing articles before rendering
    container.innerHTML = "";

    paginatedArticles.forEach(article => {

      const post = document.createElement("article");
      post.className = "srijana-post";

      const formattedDate = new Date(article.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      post.innerHTML = `
        <div class="article-card-content">

          <img
            src="${article.thumbnail}"
            alt="${article.title}"
            class="article-thumbnail"
          >

          <div class="article-card-text">

            <h2>
              <a href="/htmls/${article.slug}.html">
                ${article.title}
              </a>
            </h2>

            <p>${article.excerpt}</p>

            <p class="post-meta">
              ${formattedDate}
            </p>

          </div>

        </div>
      `;

      container.appendChild(post);
    });

    // Pagination
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    if (totalPages <= 1) return;

    const nav = document.createElement("div");
    nav.className = "pagination-container";

    nav.innerHTML += `
      <a href="?page=1"
         class="${currentPage === 1 ? "active-page" : ""}">
        1
      </a>
    `;

    if (currentPage > 3) {
      nav.innerHTML += `<span>...</span>`;
    }

    for (
      let i = currentPage - 1;
      i <= currentPage + 1;
      i++
    ) {
      if (i > 1 && i < totalPages) {

        nav.innerHTML += `
          <a href="?page=${i}"
             class="${i === currentPage ? "active-page" : ""}">
            ${i}
          </a>
        `;
      }
    }

    if (currentPage < totalPages - 2) {
      nav.innerHTML += `<span>...</span>`;
    }

    if (totalPages > 1) {

      nav.innerHTML += `
        <a href="?page=${totalPages}"
           class="${currentPage === totalPages ? "active-page" : ""}">
          ${totalPages}
        </a>
      `;
    }

    container.appendChild(nav);
  }

  render();
}