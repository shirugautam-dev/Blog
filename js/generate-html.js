const fs = require("fs");
const path = require("path");

const articles = require("./articles-data.js");

const outputDir = path.join(__dirname, "..", "htmls");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function generateHTML(article) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="../favicon.ico">
  <title>${article.title}</title>
  <meta name="description" content="${article.excerpt}">

  <!-- Open Graph -->
  <meta property="og:title" content="${article.title}">
  <meta property="og:description" content="${article.excerpt}">
  <meta property="og:image" content="https://shirugautam-dev.github.io/Blog/Images/Self_org.jpg">
  <meta property="og:url" content="https://shirugautam-dev.github.io/Blog/htmls/${article.slug}.html">
  <meta property="og:type" content="article">

  <script>
    if (localStorage.getItem("theme") === "dark") {
      document.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("dark");
      });
    }
  </script>

  <link rel="stylesheet" href="../style.css">
</head>

<body>

  <div class="content"></div>

  <!-- Markdown parser -->
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
     \${marked.parse(md)}

    <div class="article-end">
      \${ nextArticle 
        ? '<a href="' + nextArticle.slug + '.html">← Previous</a>' 
        : '<span></span>' }

      <span class="end-text">✦ The End ✦</span>

      \${ prevArticle 
        ? '<a href="' + prevArticle.slug + '.html">Next →</a>' 
        : '<span></span>' }
    </div>
  </article>
\`;
      })
      .catch(err => {
        console.error(err);
        document.querySelector(".content").innerHTML =
          "<p style='color:red;'>❌ Failed to load article</p>";
      });
  </script>

</body>
</html>`;
}

articles.forEach(article => {
  const filePath = path.join(outputDir, `${article.slug}.html`);
  fs.writeFileSync(filePath, generateHTML(article));
  console.log(`Generated: ${article.slug}.html`);
});

console.log("✅ All HTML files generated!");