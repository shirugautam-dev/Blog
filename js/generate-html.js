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

  <!-- ✅ THEME TOGGLE BUTTON -->
  
  <div class="content"></div>

  <!-- Markdown parser -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js"></script>
  <script src="../theme.js"></script>
  
<div class = "container">
  <script>
    const slug = "${article.slug}";

    fetch("../articles/" + slug + ".md")
      .then(res => res.text())
      .then(md => {
        document.querySelector(".content").innerHTML = \`
          <article class="article-body">
            <div class="home-header">
              <a href="../index.html">← Back to Srijana's thoughts</a>
            </div>

            \${marked.parse(md)}
          <div class="article-end">
          
            <hr><p><a href="../index.html">← Back </a> <span>✦</span> The End <span>✦</span><a href="../index.html">← Next</a> </p>
          
            </div>
    
            </article>
        \`;
      });
  </script>
</div>
</body>
</html>`;
}

articles.forEach(article => {
  const filePath = path.join(outputDir, `${article.slug}.html`);
  fs.writeFileSync(filePath, generateHTML(article));
  console.log(`Generated: ${article.slug}.html`);
});

console.log("✅ All HTML files generated!");