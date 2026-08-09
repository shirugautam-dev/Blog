// document.addEventListener("DOMContentLoaded",()=>{
//     const bookList=document.querySelector(".book-list");
//     if(!bookList){
//         console.error("'.book-list' not found.");
//         return;
//     }
//     books.forEach(book=>{
//         const card=createBookCard(book);
//         bookList.appendChild(card);
//     });
// });


document.addEventListener("DOMContentLoaded", () => {
  const bookList = document.querySelector(".book-list");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!bookList) {
    console.error("'.book-list' element not found.");
    return;
  }

  // Function to render filtered books
  function renderBooks(selectedGenre) {
    bookList.innerHTML = ""; // Clear existing books

    const filteredBooks = selectedGenre === "All"
      ? books
      : books.filter(book => book.genre.toLowerCase() === selectedGenre.toLowerCase());

    if (filteredBooks.length === 0) {
      bookList.innerHTML = `<p class="no-books">No reviews found for "<strong>${selectedGenre}</strong>" yet.</p>`;
      return;
    }

    filteredBooks.forEach(book => {
      const card = createBookCard(book);
      bookList.appendChild(card);
    });
  }

  // Event listener for genre filter buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      
      // Add 'active' class to clicked button
      button.classList.add("active");

      // Get selected genre from data-genre attribute
      const genre = button.getAttribute("data-genre");
      renderBooks(genre);
    });
  });

  // Initial render: show all books
  renderBooks("All");
});