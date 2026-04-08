const fs = require("fs");
const path = require("path");

const books = require("./books-data.js");

const outputDir = path.join(__dirname, "..", "books");

// create folder
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

function generateHTML(book) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${book.title}</title>
  <meta name="description" content="${book.excerpt}">

  <link rel="stylesheet" href="../style.css">
</head>

<body>

  <div class="content"></div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.3.0/marked.min.js"></script>

  <script>
    const slug = "${book.slug}";
    const rating = ${book.rating};

    fetch("../book-reviews/" + slug + ".md")
      .then(res => res.text())
      .then(md => {
        document.querySelector(".content").innerHTML = \`
          <article class="article-body">

            <a href="../book-reviews.html" class="back-link">← Back to reviews</a>

            <div class="book-rating">
              \${"★".repeat(rating)}\${"☆".repeat(5 - rating)}
            </div>

            \${marked.parse(md)}

          </article>
        \`;
      });
  </script>

</body>
</html>`;
}

// generate files
books.forEach(book => {
  const filePath = path.join(outputDir, `${book.slug}.html`);
  fs.writeFileSync(filePath, generateHTML(book));
  console.log(`Generated: ${book.slug}.html`);
});

console.log("✅ Book review pages generated!");