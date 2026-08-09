document.addEventListener("DOMContentLoaded",()=>{

    const bookList=document.querySelector(".book-list");

    if(!bookList){
        console.error("'.book-list' not found.");
        return;
    }

    books.forEach(book=>{

        const card=createBookCard(book);

        bookList.appendChild(card);

    });

});