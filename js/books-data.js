const books = [
  {
    title: "Book 1",
    slug: "book1",
    excerpt: "This is my review on Book 1",
    rating: 4,
    cover: "images/book1.jpg"
  } ,
  {
    title: "Book 2",
    slug: "book1",
    excerpt: "This is my review on Book 2",
    rating: 4,
    cover: "images/book2.jpg"
  },
  {
    title: "Book 3",
    slug: "book1",
    excerpt: "This is my review on Book 3",
    rating: 4,
    cover: "images/book3.jpg"
  }
];

// for Node (generator)
if (typeof module !== "undefined") {
  module.exports = books;
}