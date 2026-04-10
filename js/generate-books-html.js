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
  let cover = imgMatch ? imgMatch[1] : "Images/default.jpg";
  cover = cover.replace(/^(\.\.\/)+/, "");

  // ✅ REMOVE FIRST IMAGE FROM CONTENT
  const contentWithoutCover = content.replace(/!\[.*?\]\((.*?)\)/, "").trim();

  // ✅ FORMAT DATE CLEANLY HERE (ONLY ONCE)
  const d = new Date(data.date || Date.now());
  const formattedDate = d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });

  books.push({
    title: data.title,
    slug,
    excerpt: data.excerpt,
    rating: data.rating,
    cover,
    date: formattedDate
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
  <meta property="og:image" content="${cover}">
  <meta property="og:type" content="article">

  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="../style.css">

  <script>
    const isGitHub = location.hostname.includes("github.io");
    const base = isGitHub ? "/Blog/" : "/";
    document.write('<base href="' + base + '">');
  </script>
</head>

<body>

  <div class="page-container">

    <div class="book-hero">
      <div class="book-hero-img">
        <img src="${cover}" alt="${data.title}">
      </div>

      <div class="book-hero-content">
        <h1 class="book-hero-title">${data.title}</h1>

        <div class="book-rating">
          ${"★".repeat(data.rating)}${"☆".repeat(5 - data.rating)}
        </div>

        <div class="book-meta">
          ${formattedDate}
        </div>
      </div>
    </div>

    <div class="content"></div>

  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js"></script>

  <script>
    const slug = "${slug}";

    fetch("../book-reviews/" + slug + ".md")
      .then(res => res.text())
      .then(md => {

        let cleaned = md.replace(/^---[\\s\\S]*?---/, "").trim();
        cleaned = cleaned.replace(/!\\[.*?\\]\\((.*?)\\)/, "").trim();

        document.querySelector(".content").innerHTML = \`
          <article class="article-body">

            <a href="../book-reviews.html" class="back-link">← Back to reviews</a>

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