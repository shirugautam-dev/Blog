const fs = require("fs");
const path = require("path");

const articles = require("./articles-data.js");

const outputDir = path.join(__dirname, "..", "htmls");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}


function escapeHTML(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}


function generateHTML(article) {

  const pageUrl =
    `https://srijanagautam.com/htmls/${article.slug}.html`;

  const currentIndex =
    articles.findIndex(a => a.slug === article.slug);

  /*
   * articles-data.js is ordered newest → oldest.
   * Therefore:
   * +1 = previous article
   * -1 = next article
   */

  const previousArticle =
    articles[currentIndex + 1];

  const nextArticle =
    articles[currentIndex - 1];


  const formattedDate =
    new Date(article.date).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );


  return `<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <link
    rel="icon"
    href="../favicon.ico"
  >

  <title>${escapeHTML(article.title)}</title>

  <meta
    name="description"
    content="${escapeHTML(article.excerpt)}"
  >

  <meta
    property="og:title"
    content="${escapeHTML(article.title)}"
  >

  <meta
    property="og:description"
    content="${escapeHTML(article.excerpt)}"
  >

  <meta
    property="og:image"
    content="https://srijanagautam.com/${article.thumbnail}"
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
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  >

  <link
    rel="stylesheet"
    href="../style.css"
  >

  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  >

  <script>

    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark-loading");
    }

  </script>

</head>


<body>

  <div id="progress-bar"></div>


  <div class="container article-page-container">


    <!-- =========================
         HEADER
         ========================= -->

    <header class="site-header">

      <a
        href="../index.html"
        class="site-title"
      >
        Srijana’s thoughts
      </a>


      <nav class="main-nav">

        <a href="../index.html">
          Home
        </a>

        <a href="../about.html">
          About
        </a>

        <a href="../book-reviews.html">
          Book Reviews
        </a>

        <a href="../index.html#search-section">
          Search
        </a>

        <a href="../index.html#subscribe-section">
          Subscribe
        </a>

      </nav>


      <button
        id="theme-toggle"
        aria-label="Toggle dark mode"
      >
        🌙
      </button>

    </header>



    <!-- =========================
         ARTICLE
         ========================= -->

    <article class="article-layout">


      <!-- =========================
           ARTICLE SIDEBAR
           ========================= -->

      <aside class="article-sidebar">

        <a
          href="../articles-list.html"
          class="article-back-link"
        >
          ← Back to articles
        </a>


        <div class="article-sidebar-divider"></div>


        <p class="article-sidebar-date">
          ${formattedDate}
        </p>


        <div class="article-reading-time">
          <i class="fa-regular fa-clock"></i>
          <span class="reading-time-value">
            Reading...
          </span>
        </div>


        <div class="article-sidebar-divider"></div>


        <div class="article-share">

          <p>
            Share this article
          </p>

          <div class="article-share-buttons">

            <a
              href="https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(article.title)}"
              target="_blank"
              rel="noopener"
              class="article-share-btn"
              aria-label="Share on X"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>


            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}"
              target="_blank"
              rel="noopener"
              class="article-share-btn"
              aria-label="Share on LinkedIn"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>


            <a
              href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}"
              target="_blank"
              rel="noopener"
              class="article-share-btn"
              aria-label="Share on Facebook"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>


            <a
              href="https://wa.me/?text=${encodeURIComponent(pageUrl)}"
              target="_blank"
              rel="noopener"
              class="article-share-btn"
              aria-label="Share on WhatsApp"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>

          </div>

        </div>

      </aside>



      <!-- =========================
           ARTICLE CONTENT
           ========================= -->

      <main class="article-main">

        <div id="article-content">
          Loading article...
        </div>


        <!-- =========================
             ARTICLE NAVIGATION
             ========================= -->

        <div class="article-navigation">


          ${previousArticle
      ? `
                <a
                  href="${previousArticle.slug}.html"
                  class="article-navigation-link article-navigation-previous"
                >
                  <span>← Previous article</span>
                  <strong>
                    ${escapeHTML(previousArticle.title)}
                  </strong>
                </a>
              `
      : `<span></span>`
    }


          ${nextArticle
      ? `
                <a
                  href="${nextArticle.slug}.html"
                  class="article-navigation-link article-navigation-next"
                >
                  <span>Next article →</span>
                  <strong>
                    ${escapeHTML(nextArticle.title)}
                  </strong>
                </a>
              `
      : `<span></span>`
    }

        </div>



        <!-- =========================
             COMMENTS
             ========================= -->

        <section
          class="comments-section"
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
            data-page-id="${article.slug}"
            data-page-url="${pageUrl}"
            data-page-title="${escapeHTML(article.title)}"
            data-theme="light"
          ></div>

        </section>


      </main>

    </article>

  </div>



  <!-- =========================
       FOOTER
       ========================= -->

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

    </p>


    <p class="footer-copy">
      © 2026 Srijana Gautam
    </p>

  </footer>



  <!-- =========================
       SCRIPTS
       ========================= -->

  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js"
  ></script>


  <script src="../theme.js"></script>


  <script>

    const slug = "${article.slug}";


    history.scrollRestoration = "manual";


    window.addEventListener("load", () => {
      window.scrollTo(0, 0);
    });


    const articlesData =
      ${JSON.stringify(articles)};


    /*
     * Calculate reading time
     */

    function calculateReadingTime(text) {

      const words =
        text
          .trim()
          .split(/\\s+/)
          .length;

      const minutes =
        Math.max(1, Math.ceil(words / 200));

      return minutes + " min read";
    }


    /*
     * Add photo credits
     */

    function addPhotoCredits(html) {

      return html.replace(
        /<img([^>]*?)title="([^"]+)"([^>]*)>/gi,
        '<img$1title="$2"$3><p class="photo-credit">$2</p>'
      );

    }


    /*
     * Load article
     */

    fetch("../articles/" + slug + ".md")

      .then(res => {

        if (!res.ok) {
          throw new Error(
            "Markdown file not found: " + slug
          );
        }

        return res.text();

      })


      .then(md => {

        const html =
          addPhotoCredits(
            marked.parse(md)
          );


        document.getElementById(
          "article-content"
        ).innerHTML = html;


        /*
         * Reading time
         */

        document.querySelector(
          ".reading-time-value"
        ).textContent =
          calculateReadingTime(md);


        /*
         * Add the article excerpt
         * underneath the title.
         */

        const articleContent =
          document.getElementById(
            "article-content"
          );


        const heading =
          articleContent.querySelector("h1");


        if (heading) {

          const excerpt =
            document.createElement("p");

          excerpt.className =
            "article-excerpt";

          excerpt.textContent =
            ${JSON.stringify(article.excerpt)};


          heading.insertAdjacentElement(
            "afterend",
            excerpt
          );

        }


        /*
         * Make the first image the
         * article hero image.
         */

        const firstImage =
          articleContent.querySelector("img");


        if (firstImage) {

          firstImage.classList.add(
            "article-hero-image"
          );

        }


        /*
         * Remove old book-review link
         * injection from the article body.
         *
         * Book reviews can still be linked
         * naturally from the article text.
         */

      })


      .catch(err => {

        console.error(err);

        document.getElementById(
          "article-content"
        ).innerHTML =
          "<p class='article-error'>Failed to load article.</p>";

      });


    /*
     * Cusdis
     */

    const cusdisScript =
      document.createElement("script");

    cusdisScript.src =
      "https://cusdis.com/js/cusdis.es.js";

    document.body.appendChild(
      cusdisScript
    );

  </script>


</body>

</html>`;
}


articles.forEach(article => {

  const filePath =
    path.join(
      outputDir,
      `${article.slug}.html`
    );

  fs.writeFileSync(
    filePath,
    generateHTML(article)
  );

  console.log(
    `Generated: ${article.slug}.html`
  );

});


console.log(
  "✅ All HTML files generated!"
);