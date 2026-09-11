// this is the page where I write reviews

const books = [
  {
    slug: "kin",
    title: "Kin",
    author: "Tayari Jones",
    genre: "Fiction",
    // rating: 4.5,
    published: 2026,
    pages: 368,
    reviewed: "",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780525659181.jpg"
  },
  {
    slug: "beartown",
    title: "Beartown",
    author: "Fredrik Backman",
    genre: "Fiction",
    // rating: 4.5,
    published: 2017,
    pages: 432,
    reviewed: "6 Sep 2026",
    teaser: "An emotional rollercoaster that stayed with me long after I finished the book.",
    quote: "“Everyone has a thousand wishes before a tragedy, but just one afterwards.”",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781410498120.jpg"
  },
  {
    slug: "evidence-of-the-affair",
    title: "Evidence of the Affair",
    author: "Taylor Jenkins Reid",
    genre: "Fiction",
    // rating: 4.5,
    published: 2018,
    pages: 88,
    reviewed: "5 Sep 2026",
    coverImage: "https://covers.openlibrary.org/b/isbn/9789026356018.jpg"
  },
  {
    slug: "mother-mary-comes-to-me",
    title: "Mother Mary Comes To Me",
    author: "Arundhati Roy",
    genre: "Memoir",
    // rating: 4.5,
    published: 2025,
    pages: 224,
    coverImage: "https://covers.openlibrary.org/b/isbn/9780241761724.jpg",
    reviewed: "1 Sep 2026"
  },
  {
    slug: "on-earth-we-are-briefly-gorgeous",
    title: "On Earth We Are Briefly Gorgeous",
    author: "Ocean Vuong",
    genre: "Fiction",
    // rating: 4.5,
    published: 2019,
    pages: 256,
    reviewed: "21 Aug 2026",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781473564473.jpg"
  },
  {
    slug: "the-answer-is-no",
    title: "The Answer Is No",
    author: "Fredrik Backman",
    genre: "Fiction",
    // rating: 4.5,
    published: 2024,
    pages: 68,
    reviewed: "19 Aug 2026",
    coverImage: "https://covers.openlibrary.org/b/isbn/1662526520.jpg"
  },
  {
    slug: "whistler",
    title: "Whistler",
    author: "Ann Patchett",
    genre: "Fiction",
    // rating: 3.5,
    published: 2026,
    reviewed: "20 Aug 2026",
    pages: 304,
    coverImage: "https://covers.openlibrary.org/b/isbn/9781037206498.jpg"
  },
  {
    slug: "anxious-people",
    title: "Anxious People",
    author: "Fredrik Backman",
    genre: "Fiction",
    // rating: 3,
    published: 2021,
    pages: 397,
    reviewed: "2 Sep 2026",
    coverImage: "https://covers.openlibrary.org/b/isbn/9781405930253.jpg"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = books;
}