document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("post");

  if (!slug) return;

  const filePath = `articles/${slug}.md`;
  console.log("Attempting to fetch from:", filePath); // This tells you the exact name needed

  fetch(filePath) 
    .then(res => {
      if (!res.ok) throw new Error(`File not found at ${filePath}`);
      return res.text();
    })
    .then(md => {
      const content = document.querySelector(".content");
      if (typeof marked === 'undefined') {
          throw new Error("The 'marked' library is blocked or missing!");
      }
      content.innerHTML = `<article class="article-body">
      <div class="home-header">
        <a href="index.html">← Back to Home</a> <a href="book-reviews.html" class="header-link">BOOK REVIEWS</a> </div>
        <hr>
        ${marked.parse(md)}
        <footer class="article-end">
            <p>Thank you for reading. I hope these thoughts resonated with you.</p>
          </footer>
      </article>`;
    })
    .catch(err => {
      console.error("Loader Error:", err.message);
      document.querySelector(".content").innerHTML = `<p style="color:red">Error: ${err.message}</p>`;
    });
});
