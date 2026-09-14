// this is the page where I write reviews

const books = [
  {
    slug: "the-forty-rules-of-love",
    title: "The Forty Rules of Love",
    author: "Elif Shafak",
    genre: "Fiction",
    published: 2015,
    pages: 368,
    reviewed: "14 Sep 2026",
    teaser: "A great storyteller. Her insights are timeless and relatable across cultures.",
    quote: '"Do not chase love outside—discover and remove the walls within your own heart."',
    coverImage: "https://covers.openlibrary.org/b/isbn/9780241972939.jpg"
  },
  {
    slug: "kin",
    title: "Kin",
    author: "Tayari Jones",
    genre: "Fiction",
    published: 2026,
    pages: 368,
    reviewed: "13 Sep 2026",
    teaser: "This is a story of friendship, racism, inequality and self-discovery.",
    quote: '“The world wanted so much from me.Love required so much betrayal.Sometimes of myself. Oftentimes, everyone with a heart ended up devastated."',
    coverImage: "https://covers.openlibrary.org/b/isbn/9780525659181.jpg"
  },
  {
    slug: "beartown",
    title: "Beartown",
    author: "Fredrik Backman",
    genre: "Fiction",
    published: 2017,
    pages: 432,
    reviewed: "6 Sep 2026",
    teaser: "An emotional rollercoaster that stayed with me long after I finished the book.",
    quote: '“Everyone has a thousand wishes before a tragedy, but just one afterwards.”',
    coverImage: "https://covers.openlibrary.org/b/isbn/9781410498120.jpg"
  },
  {
    slug: "evidence-of-the-affair",
    title: "Evidence of the Affair",
    author: "Taylor Jenkins Reid",
    genre: "Fiction",
    published: 2018,
    pages: 88,
    reviewed: "5 Sep 2026",
    teaser: "It is a tale how we find solace in strangers when our own deceive us.",
    quote: '“It is funny the crazy things our brains make up to save us from the truth.”',
    coverImage: "https://covers.openlibrary.org/b/isbn/9789026356018.jpg"
  },
  {
    slug: "mother-mary-comes-to-me",
    title: "Mother Mary Comes To Me",
    author: "Arundhati Roy",
    genre: "Memoir",
    published: 2025,
    pages: 224,
    reviewed: "1 Sep 2026",
    teaser: "Hilarious, sad and maddening all in one",
    quote: '"The world was too ridiculous for me to remain too sad for too long.”',
    coverImage: "https://covers.openlibrary.org/b/isbn/9780241761724.jpg",
  },
  {
    slug: "on-earth-we-are-briefly-gorgeous",
    title: "On Earth We Are Briefly Gorgeous",
    author: "Ocean Vuong",
    genre: "Fiction",
    published: 2019,
    pages: 256,
    reviewed: "21 Aug 2026",
    teaser: "some teaser",
    quote: '"They say nothing lasts forever, but they’re just scared it will last longer than they can love it”',
    coverImage: "https://covers.openlibrary.org/b/isbn/9781473564473.jpg"
  },
  {
    slug: "the-answer-is-no",
    title: "The Answer Is No",
    author: "Fredrik Backman",
    genre: "Fiction",
    published: 2024,
    pages: 68,
    reviewed: "19 Aug 2026",
    teaser: "explores boundaries, personal space and our relationship with the word “no”",
    quote: '"Being smart is the worst thing one can be in modern society. All it ever means is more work.”',
    coverImage: "https://covers.openlibrary.org/b/isbn/1662526520.jpg"
  },
  {
    slug: "whistler",
    title: "Whistler",
    author: "Ann Patchett",
    genre: "Fiction",
    published: 2026,
    reviewed: "20 Aug 2026",
    pages: 304,
    teaser: "Can a relationship survive four decades of absence?",
    quote: '"I don’t know why people bother to guess at things. They’re always wrong”',
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
    teaser: "some teaser",
    quote: '"Addicts are addicted to their drugs, and their families are addicted to hope.”',
    coverImage: "https://covers.openlibrary.org/b/isbn/9781405930253.jpg"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = books;
}