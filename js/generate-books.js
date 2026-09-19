const fs = require("fs");
const path = require("path");
const books = require("./books-data.js");

const outputDir = path.join(__dirname, "..", "books");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}


/* =========================================================
   STAR RATING
   ========================================================= */

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
    <div class="single-book-rating">
      <span class="stars">${stars}</span>
      <span class="rating-number">${rating}/5</span>
    </div>
  `;
}


/* =========================================================
   GENERATE INDIVIDUAL BOOK PAGE
   ========================================================= */

function generateHTML(book) {

  const pageUrl =
    `https://srijanagautam.com/books/${book.slug}.html`;

  const currentIndex =
    books.findIndex(item => item.slug === book.slug);

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

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>
    ${book.title} | Srijana Gautam
  </title>

  <meta
    name="description"
    content="My review of ${book.title} by ${book.author}."
  >

  <meta
    property="og:title"
    content="${book.title} | Srijana Gautam"
  >

  <meta
    property="og:description"
    content="My review of ${book.title} by ${book.author}."
  >

  <meta
    property="og:image"
    content="${book.coverImage}"
  >

  <meta
    property="og:url"
    content="${pageUrl}"
  >

  <meta
    property="og:type"
    content="article"
  >

  <link
    rel="icon"
    href="../favicon.ico"
  >

  <link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  >

  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
  >

  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  >

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  >

  <link
    rel="stylesheet"
    href="../style.css"
  >

</head>


<body>

  <div class="single-book-page">


    <!-- =====================================================
         SITE HEADER
         ===================================================== -->

    <header class="single-book-header">

      <a
        href="../index.html"
        class="single-book-site-title"
      >
        Srijana’s thoughts
      </a>


      <nav class="single-book-nav">

        <a href="../index.html">
          Home
        </a>

        <a href="../about.html">
          About
        </a>

        <a
          href="../book-reviews.html"
          class="active"
        >
          Book Reviews
        </a>

      </nav>


      <button
        id="theme-toggle"
        aria-label="Toggle theme"
      >
        🌙
      </button>

    </header>



    <!-- =====================================================
         MAIN BOOK REVIEW LAYOUT
         ===================================================== -->

    <main class="single-book-layout">


      <!-- ===================================================
           LEFT SIDEBAR
           =================================================== -->

      <aside class="single-book-sidebar">


        <a
          href="../book-reviews.html"
          class="single-book-back"
        >
          ← Back to book reviews
        </a>


        <img
          src="${book.coverImage}"
          alt="${book.title} book cover"
          class="single-book-cover"
        >


        <div class="single-book-details">

          <h1 class="single-book-title">
            ${book.title}
          </h1>

          <p class="single-book-author">
            ${book.author}
          </p>


          <div class="single-book-meta">

            <div>
              <i class="fa-regular fa-user"></i>
              <span>${book.author}</span>
            </div>

            <div>
              <i class="fa-regular fa-calendar"></i>
              <span>Published: ${book.published}</span>
            </div>

            <div>
              <i class="fa-solid fa-book-open"></i>
              <span>${book.pages} pages</span>
            </div>

            <div>
              <i class="fa-solid fa-tag"></i>
              <span>${book.genre}</span>
            </div>

            ${book.reviewed
      ? `
                  <div>
                    <i class="fa-regular fa-circle-check"></i>
                    <span>Reviewed: ${book.reviewed}</span>
                  </div>
                `
      : ""
    }

          </div>


          ${book.rating
      ? createStars(book.rating)
      : ""
    }


          <!-- SHARE -->

          <div class="single-book-share">

            <p>
              Share this review
            </p>

            <div class="single-book-share-buttons">

              <a
                href="https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(book.title)}"
                target="_blank"
                rel="noopener"
                aria-label="Share on X"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>


              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}"
                target="_blank"
                rel="noopener"
                aria-label="Share on LinkedIn"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>


              <a
                href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}"
                target="_blank"
                rel="noopener"
                aria-label="Share on Facebook"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>


              <a
                href="https://wa.me/?text=${encodeURIComponent(pageUrl)}"
                target="_blank"
                rel="noopener"
                aria-label="Share on WhatsApp"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>

            </div>

          </div>

      </aside>



      <!-- ===================================================
           REVIEW
           =================================================== -->

      <article class="single-book-content">


        <div class="single-book-label">
          BOOK REVIEW
        </div>


        <h2 class="single-book-main-title">
          ${book.title}
        </h2>


        <p class="single-book-main-author">
          ${book.author}
        </p>


        <div
          id="book-review-content"
          class="single-book-review"
        >

          <p>
            Loading review...
          </p>

        </div>


        <!-- PREVIOUS / NEXT -->

        <div class="single-book-navigation">


          ${previousBook
      ? `
                <a
                  href="${previousBook.slug}.html"
                  class="single-book-navigation-link"
                >

                  <span>
                    ← Previous review
                  </span>

                  <strong>
                    ${previousBook.title}
                  </strong>

                </a>
              `
      : `<span></span>`
    }


          ${nextBook
      ? `
                <a
                  href="${nextBook.slug}.html"
                  class="single-book-navigation-link next"
                >

                  <span>
                    Next review →
                  </span>

                  <strong>
                    ${nextBook.title}
                  </strong>

                </a>
              `
      : `<span></span>`
    }

        </div>


      </article>

    </main>



    <!-- =====================================================
         COMMENTS
         ===================================================== -->

    <section
      class="single-book-comments comments-section"
      aria-label="Comments"
    >

      <div class="comments-header">

        <h2>
          Comments
        </h2>

        <p>
          What did you think? I’d love to hear from you.
        </p>

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



  <!-- =====================================================
       FOOTER
       ===================================================== -->

  <footer class="site-footer">

    <p class="footer-social">

      <a
        href="https://twitter.com/@GautamShiru"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-twitter"></i>
      </a>


      <a
        href="https://linkedin.com/in/srijana-raghunath-739bb1221"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-linkedin"></i>
      </a>


      <a
        href="https://facebook.com/srijana.raghunath"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-facebook"></i>
      </a>


      <a
        href="https://wa.me/918408035577"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-whatsapp"></i>
      </a>


      <a href="mailto:srijana.thinks@gmail.com">
        <i class="fas fa-envelope"></i>
      </a>


      <a href="../rss.xml">
        <i class="fas fa-rss"></i>
      </a>

    </p>


    <p class="footer-copy">
      © 2026 Srijana Gautam
    </p>

  </footer>



  <!-- =====================================================
       SCRIPTS
       ===================================================== -->

  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

  <script src="../theme.js"></script>


  <script>

    const bookSlug = "${book.slug}";


    fetch("../book-reviews/" + bookSlug + ".md")

      .then(response => {

        if (!response.ok) {
          throw new Error(
            "Review file not found: " + bookSlug
          );
        }

        return response.text();

      })

      .then(markdown => {

        document.querySelector(
          "#book-review-content"
        ).innerHTML = marked.parse(markdown);

      })

      .catch(error => {

        console.error(error);

        document.querySelector(
          "#book-review-content"
        ).innerHTML =
          "<p>Unable to load this review.</p>";

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


/* =========================================================
   GENERATE ALL BOOK PAGES
   ========================================================= */

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