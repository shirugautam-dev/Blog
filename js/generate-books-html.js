const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const mdDir = path.join(__dirname, "..", "book-reviews");
const outputDir = path.join(__dirname, "..", "books_htmls");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(mdDir);

const books = [];

files.forEach(file => {
  if (!file.endsWith(".md")) return;

  const slug = file.replace(".md", "");
  const filePath = path.join(mdDir, file);

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  // ✅ EXTRACT FIRST IMAGE (cover)
  const imgMatch = content.match(/!\[.*?\]\((.*?)\)/);
  const cover = imgMatch ? imgMatch[1] : "Images/default.jpg";

  // ✅ REMOVE FIRST IMAGE FROM CONTENT
  const contentWithoutCover = content.replace(/!\[.*?\]\((.*?)\)/, "").trim();

  // ✅ DATE
  const date = data.date || new Date().toISOString().split("T")[0];

  books.push({
    title: data.title,
    slug,
    excerpt: data.excerpt,
    rating: data.rating,
    cover,
    date
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${data.title}</title>
  <meta name="description" content="${data.excerpt}">

  <!-- OG TAGS -->
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.excerpt}">
  <meta property="og:image" content="../${cover}">
  <meta property="og:type" content="article">

  <link rel="stylesheet" href="../style.css">
  <script>
    const isGitHub = location.hostname.includes("github.io");
    const base = isGitHub ? "/Blog/" : "/";
    document.write('<base href="' + base + '">');
  </script>
</head>

<body>

<body>

  <div class="page-container">
    <div class="book-banner" style="background-image: url('../${cover}')">
      <div class="banner-overlay">
        <h1 class="banner-title">${data.title}</h1>
      </div>
    </div>
    <div class="content"></div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js"></script>

  <script>
    const slug = "${slug}";
    const rating = ${data.rating};

    const date = new Date("${date}").toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    fetch("../book-reviews/" + slug + ".md")
      .then(res => res.text())
      .then(md => {

        // remove frontmatter
        let cleaned = md.replace(/^---[\\s\\S]*?---/, "").trim();

        // remove first image (cover)
        cleaned = cleaned.replace(/!\\[.*?\\]\\((.*?)\\)/, "").trim();

        document.querySelector(".content").innerHTML = \`
          <article class="article-body">

            <a href="../book-reviews.html" class="back-link">← Back to reviews</a>

            <div class="meta">
              <span>\${date}</span>
            </div>

            <div class="book-rating">
              \${"★".repeat(rating)}\${"☆".repeat(5 - rating)}
            </div>

            \${marked.parse(cleaned)}

          </article>
        \`;
      });
  </script>

</body>
</html>`;

  fs.writeFileSync(path.join(outputDir, `${slug}.html`), html);
});


// AUTO books-data.js
const dataFile = `
const books = ${JSON.stringify(books, null, 2)};

if (typeof module !== "undefined") {
  module.exports = books;
}
`;

fs.writeFileSync(
  path.join(__dirname, "books-data.js"),
  dataFile
);

console.log("✅ Everything generated!");