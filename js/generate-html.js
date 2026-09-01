const fs = require("fs");
const path = require("path");

const articles = require("./articles-data.js");
const outputDir = path.join(__dirname, "..", "htmls");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function generateHTML(article) {
  const pageUrl = `https://srijanagautam.com/htmls/${article.slug}.html`;
  return `<!DOCTYPE html>  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" href="../favicon.ico">
      <title>${article.title}</title>
      <meta name="description" content="${article.excerpt}">
      <meta property="og:title" content="${article.title}">
      <meta property="og:description" content="${article.excerpt}">
      <meta property="og:image" content="https://srijanagautam.com/Images/Self_org.jpg">
      <meta property="og:url" content="https://srijanagautam.com/htmls/${article.slug}.html">
      <meta property="og:type" content="article">
      <script>
        if (localStorage.getItem("theme") === "dark") {
          document.addEventListener("DOMContentLoaded", () => {
          document.body.classList.add("dark");
          });
        }
      </script>
      <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
      <link rel="stylesheet" href="../style.css">
    </head>

    <body>
      <div class="content"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js"></script>
        <script src="../theme.js"></script>
        <script>
          const slug = "${article.slug}";
          history.scrollRestoration = "manual";
          window.addEventListener("load", () => {
          window.scrollTo(0, 0);
          });
          const articlesData = ${JSON.stringify(articles)};
          const currentIndex = articlesData.findIndex(a => a.slug === slug);
          const prevArticle = articlesData[currentIndex - 1];
          const nextArticle = articlesData[currentIndex + 1];
          
          function addPhotoCredits(html) {
          return html.replace(
            /<img([^>]*?)title="([^"]+)"([^>]*)>/gi,
            '<img$1title="$2"$3><p class="photo-credit">$2</p>'
          );
          }
          
          fetch("../articles/" + slug + ".md")
          .then(res => {
            if (!res.ok) {
            throw new Error("Markdown file not found: " + slug);
            }
          return res.text();
          })
          .then(md => {
            document.querySelector(".content").innerHTML = \`
            <article class="article-body">
              <div class="home-header">
                <a href="../index.html" class="nav-left">Srijana’s thoughts</a>
                <a href="javascript:history.back()" class="nav-right"> ← Back </a>
              </div>
              \${addPhotoCredits(marked.parse(md)).replace(
  /(<h1[^>]*>.*?<\\/h1>)/i,
  '$1<div class="book-review-link"><a href="../book-reviews.html">📚 Read my book reviews →</a></div>'
)}
<div class="article-end">
                <span class="end-text">✦ The End ✦</span>
                 
 
                <div class="article-nav">  
                  \${ nextArticle 
                  ? '<a href="' + nextArticle.slug + '.html">← Previous</a>' 
                  : '<span></span>' }
                <div class="share-container">
                  <span class="share-label">Share:</span>
                  <a href="https://twitter.com/intent/tweet?url=https://srijanagautam.com/htmls/${article.slug}.html&text=${article.title}" target="_blank" class="share-btn"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://srijanagautam.com/htmls/${article.slug}.html" target="_blank" class="share-btn"><i class="fa-brands fa-linkedin"></i></a>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https://srijanagautam.com/htmls/${article.slug}.html" target="_blank" class="share-btn"><i class="fa-brands fa-facebook"></i></a>
                  <a href="https://wa.me/?text=https://srijanagautam.com/htmls/${article.slug}.html" target="_blank" class="share-btn"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                  \${ prevArticle 
                  ? '<a href="' + prevArticle.slug + '.html">Next →</a>' 
                  : '<span></span>' }
                </div>  
                            </div>

              <section class="comments-section" aria-label="Comments">

                <div class="comments-header">
                  <h2>Comments</h2>
                  <p>What did you think? I’d love to hear from you.</p>
                </div>

                <div
                  id="cusdis_thread"
                  data-host="https://cusdis.com"
                  data-app-id="53edd7b4-beea-4e0d-b392-b9beb1cab6c3"
                  data-page-id="${article.slug}"
                  data-page-url="${pageUrl}"
                  data-page-title="${article.title}"
                  data-theme="\${document.body.classList.contains("dark") ? "dark" : "light"}"
                ></div>

              </section>

            </article>
            \`; 
            const cusdisScript = document.createElement("script");
cusdisScript.src = "https://cusdis.com/js/cusdis.es.js";
document.body.appendChild(cusdisScript);
            })
            .catch(err => {
              console.error(err);
              document.querySelector(".content").innerHTML =
              "<p style='color:red;'>❌ Failed to load article</p>";
            });
        </script>
      </body>
      <footer class="site-footer">
  <p class="footer-social">
    <a href="https://twitter.com/@GautamShiru" target="_blank"><i class="fab fa-twitter"></i></a>
    <a href="https://linkedin.com/in/srijana-raghunath-739bb1221" target="_blank"><i class="fab fa-linkedin"></i></a>
    <a href="https://facebook.com/srijana.raghunath" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="https://wa.me/918408035577" target="_blank"><i class="fab fa-whatsapp"></i></a>
    <a href="mailto:srijana.thinks@gmail.com"><i class="fas fa-envelope"></i></a>
    <a href="rss.xml"><i class="fas fa-rss"></i></a>
  </p>
  <p class="footer-copy">© 2026 Srijana Gautam</p>
</footer>
    </html>`;
}

articles.forEach(article => {
  const filePath = path.join(outputDir, `${article.slug}.html`);
  fs.writeFileSync(filePath, generateHTML(article));
  console.log(`Generated: ${article.slug}.html`);
});

console.log("✅ All HTML files generated!");