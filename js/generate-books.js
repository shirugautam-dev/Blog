const fs = require("fs");
const path = require("path");
const books = require("./books-data.js");
const outputDir = path.join(__dirname, "..", "books");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

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


function generateHTML(book) {
    const pageUrl = `https://srijanagautam.com/books/${book.slug}.html`;
    const currentIndex = books.findIndex(
        item => item.slug === book.slug
    );
    const previousBook =
        currentIndex > 0
            ? books[currentIndex - 1]
            : null;
    const nextBook =
        currentIndex < books.length - 1
            ? books[currentIndex + 1]
            : null;
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta    name="viewport"     content="width=device-width, initial-scale=1.0">
    <title>${book.title} | Srijana Gautam</title>
  <meta  name="description" content="My review of ${book.title} by ${book.author}.">
  <meta    property="og:title" content="${book.title} | Srijana Gautam">

  <meta   property="og:description" content="My review of ${book.title} by ${book.author}." >

  <meta     property="og:image" content="${book.coverImage}"   >

  <meta     property="og:url"     content="${pageUrl}"   >

  <meta property="og:type" content="article">

  <link rel="icon" href="../favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link    rel="preconnect"     href="https://fonts.gstatic.com"     crossorigin   >
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"  >
  <link     rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="../book-cover.css">
  <style>
    /* ========================================
       INDIVIDUAL BOOK REVIEW PAGE
       ======================================== */
    body {
      background: #ec7f37;
    }


    .single-book-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 25px 30px 60px;
      background: #FFF8F2;
      border-radius: 16px;
    }


    /* ---------- TOP NAVIGATION ---------- */

    .single-book-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
    }


    .single-book-top a {
      text-decoration: none;
    }


    /* ---------- REVIEW CARD ---------- */

    .single-book-card {
      background: #fff;
      border: 1px solid #e4e4e4;
      border-radius: 16px;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);

      display: grid;
      grid-template-columns: 280px 1fr;

      gap: 40px;

      padding: 38px 40px 30px;

      max-width: 1120px;
      margin: 0 auto;
    }


    /* ---------- LEFT COLUMN ---------- */

    .single-book-sidebar {
      padding-right: 30px;
      border-right: 1px solid #e5e5e5;
    }


    .single-book-cover {
      width: 100%;
      max-width: 230px;
      display: block;

      margin: 0 auto 25px;

      border-radius: 8px;

      box-shadow:
        0 8px 18px rgba(0, 0, 0, 0.12);
    }


    .single-book-title {
      font-family: "Cormorant Garamond", serif;
      font-size: 2rem;
      line-height: 1.1;
      margin: 0 0 8px;
      color: #222;
    }

    .single-book-author {
      font-family: "Inter", sans-serif;
      font-size: 1.2rem;
      font-style: italic;
      margin: 0 0 22px;
      color: #555;
    }


    .single-book-details {
      border-top: 1px solid #e5e5e5;
      padding-top: 18px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-family: "Inter", sans-serif;
      font-size: 0.95rem;
      color: #666;
    }


    .single-book-rating {
      margin-top: 18px;
    }


    /* ---------- RIGHT COLUMN ---------- */

    .single-book-main {
      min-width: 0;
    }


    .single-book-review {
      font-family: ui-rounded;
      font-size: 1.25rem;
      line-height: 1.55;
      color: #222;
    }


    .single-book-review p {
      margin-top: 0;
      margin-bottom: 1.25em;
      font-family: ui-rounded;
      font-size: 1.1rem;
    }


    .single-book-review p:last-child {
      margin-bottom: 0;
    }


    .single-book-review em {
      font-weight: 600;
    }


    /* ---------- END + SHARING ---------- */

   .single-book-navigation-area {
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px 40px 0;
}


.single-book-end-text {
  display: block;
  text-align: center;
  color: #777;
  letter-spacing: 5px;
  margin-bottom: 20px;
  margin-top: 25px;
}

.single-book-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.single-book-share {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.single-book-share-label {
  margin-right: 3px;
}

.single-book-share .share-btn {
  width: 38px;
  height: 38px;
  border: 1px solid #222;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #111;
}

    .single-book-navigation a {
      text-decoration: none;
      white-space: nowrap;
    }

    .single-book-share {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }

    .single-book-share-label {
      margin-right: 3px;
    }

    .single-book-share .share-btn {
      width: 38px;
      height: 38px;
      border: 1px solid #222;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #111;
    }

    /* ---------- COMMENTS ---------- */
    .single-book-comments {
      max-width: 960px;
      margin: 35px auto 0;
      padding: 0 20px;
    }

    /* ---------- DARK MODE ---------- */
    body.dark {
      background: #111;
    }

    body.dark .single-book-card {
      background: #181818;
      border-color: #333;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
    }

    body.dark .single-book-sidebar {
      border-color: #333;
    }

    body.dark .single-book-title,
    body.dark .single-book-review {
      color: #eee;
    }

    body.dark .single-book-author {
      color: #ccc;
    }

    body.dark .single-book-details {
      border-color: #333;
      color: #aaa;
    }

    body.dark .single-book-navigation-area {
      color: #eee;
    }

    body.dark .single-book-share .share-btn {
    border-color: #eee;
    color: #eee;
    }

    /* ---------- MOBILE ---------- */

    @media (max-width: 800px) {
      .single-book-container {
        padding: 20px 15px 40px;
      }

      .single-book-top {
        margin-bottom: 20px;
      }

      .single-book-card {
        grid-template-columns: 1fr;
        gap: 25px;
        padding: 25px 20px;
      }

      .single-book-sidebar {
        padding-right: 0;
        padding-bottom: 25px;
        border-right: none;
        border-bottom: 1px solid #e5e5e5;
        text-align: center;
      }

      .single-book-cover {
        max-width: 190px;
      }

      .single-book-details {
        align-items: center;
      }

      .single-book-main {
        width: 100%;
      }

    .single-book-review {
        font-size: 1.15rem;
      }

    .single-book-navigation {
        flex-wrap: wrap;
        justify-content: center;
      }

    .single-book-navigation-area {
      padding: 22px 20px 0;
}

.single-book-navigation {
  flex-wrap: wrap;
  justify-content: center;
}

.single-book-navigation > a:first-child {
  margin-right: auto;
}

.single-book-navigation > a:last-child {
  margin-left: auto;
}
}
</style>

<script>
    if (localStorage.getItem("theme") === "dark") {
      document.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("dark");
      });
    }
</script>

</head>

<body>
  <div class="single-book-container">
    <!-- TOP NAVIGATION -->
    <div class="single-book-top">
      <a
        href="../book-reviews.html"
        class="nav-brand"
      >
        ← Book reviews
      </a>

      <button
        id="theme-toggle"
        aria-label="Toggle theme"
      >
        🌙
      </button>
    </div>

    <div class="home-header">
      <a href="../index.html" class="nav-left" > Srijana’s thoughts </a>
      <a href="../book-reviews.html" class="nav-right" > ← Back </a>
    </div>

    <!-- ========================================
         REVIEW CARD
         ======================================== -->

    <article class="single-book-card">
      <!-- LEFT SIDE -->
      <aside class="single-book-sidebar">
        <img src="${book.coverImage}" alt="${book.title} book cover" class="single-book-cover">
        <h1 class="single-book-title"> ${book.title} </h1>
        <h2 class="single-book-author"> by ${book.author} </h2>
        <div class="single-book-details">
          <span>Genre: ${book.genre} </span>
          <span>Published: ${book.published}</span>
          <span>Pages: ${book.pages}</span>
          ${book.reviewed
            ? `<span>Reviewed on: ${book.reviewed}</span>`
            : ""}
        </div>

        ${book.rating
            ? ` <div class="single-book-rating">
                ${createStars(book.rating)}
                </div>
            `
            : ""
        }
      </aside>
      <!-- RIGHT SIDE -->
      <div class="single-book-main">
        <div           id="book-review-content"           class="single-book-review"         >
          <p>Loading review...</p>
        </div>

        <!-- END / SHARE / NAVIGATION -->

        <div class="single-book-end">
          <span class="single-book-end-text">             ✦ The End ✦           </span>
          <div class="single-book-navigation">
        </div>
      
    </article>
    <!-- END / SHARE / PREVIOUS / NEXT -->

    <div class="single-book-navigation-area">
    <div class="single-book-navigation">
    ${previousBook
            ? `
          <a href="${previousBook.slug}.html">
            ← Previous review
          </a>
        `
            : `<span></span>`
        }

    <div class="single-book-share">
      <span class="single-book-share-label">Share: </span>
      <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(book.title)}"
        target="_blank" class="share-btn" >
        <i class="fa-brands fa-x-twitter"></i>
      </a>
      <a
        href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}"
        target="_blank"
        class="share-btn">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}"
        target="_blank"
        class="share-btn" >
        <i class="fa-brands fa-facebook"></i>
      </a>

      <a href="https://wa.me/?text=${encodeURIComponent(pageUrl)}"
        target="_blank"
        class="share-btn">
        <i class="fa-brands fa-whatsapp"></i>
      </a>

    </div>


    ${nextBook
            ? `
          <a href="${nextBook.slug}.html">
            Next review →
          </a>
        `
            : `<span></span>`
        }

  </div>

</div>

    <!-- COMMENTS OUTSIDE THE CARD -->

    <section class="single-book-comments comments-section"     aria-label="Comments" >

      <div class="comments-header">
        <h2>Comments</h2>
        <p> What did you think? I’d love to hear from you. </p>
      </div>

      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="53edd7b4-beea-4e0d-b392-b9beb1cab6c3"
        data-page-id="${book.slug}"
        data-page-url="${pageUrl}"
        data-page-title="${book.title}"
        data-theme="light"
      ></div>


    </section>
  </div>
  <footer class="site-footer">
    <p class="footer-social">
      <a        href="https://twitter.com/@GautamShiru"  target="_blank"       >
        <i class="fab fa-twitter"></i> </a>

      <a href="https://linkedin.com/in/srijana-raghunath-739bb1221" target="_blank" >
        <i class="fab fa-linkedin"></i> </a>

      <a href="https://facebook.com/srijana.raghunath"         target="_blank"      >
        <i class="fab fa-facebook"></i>       </a>

      <a         href="https://wa.me/918408035577"         target="_blank"       >
        <i class="fab fa-whatsapp"></i>       </a>

      <a href="mailto:srijana.thinks@gmail.com">         <i class="fas fa-envelope"></i>       </a>

      <a href="../rss.xml">         <i class="fas fa-rss"></i>       </a>
    </p>


    <p class="footer-copy">       © 2026 Srijana Gautam     </p>
  </footer>


  <!-- MARKED -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="../theme.js"></script>
  <!-- LOAD REVIEW -->
  <script>
    const bookSlug = "${book.slug}";
    fetch("../book-reviews/" + bookSlug + ".md")
      .then(res => {
        if (!res.ok) {
          throw new Error(
            "Review file not found: " + bookSlug
          );
        }
        return res.text();
      })

      .then(md => {
        document.querySelector(
          "#book-review-content"
        ).innerHTML = marked.parse(md);
      })
      .catch(err => {

        console.error(err);

        document.querySelector(
          "#book-review-content"
        ).innerHTML =
          "<p style='color:red;'>❌ Failed to load review</p>";

      });


    /* CUSDIS */

    const cusdisScript =
      document.createElement("script");

    cusdisScript.src =
      "https://cusdis.com/js/cusdis.es.js";

    document.body.appendChild(cusdisScript);

  </script>


</body>

</html>`;
}


/* ========================================
   GENERATE BOOK PAGES
   ======================================== */

books.forEach(book => {

    const filePath = path.join(
        outputDir,
        `${book.slug}.html`
    );

    fs.writeFileSync(
        filePath,
        generateHTML(book)
    );

    console.log(
        `Generated: ${book.slug}.html`
    );

});


console.log(
    "✅ All book review pages generated!"
);