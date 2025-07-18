const library = [];

class Book{
    constructor(title, author, genre){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.id = crypto.randomUUID();
    }
}



function addBookToLibrary(title, author, genre){
    library.push(Book(title, author, genre));
}

function displayBooks(){
    const bookDisplay = document.querySelector(".lib-placeholder");
    if (bookDisplay != null){
        bookDisplay.innerHTML = "";
    }
    for (let book of library){
        let bookCard = document.createElement("article");
        bookCard.dataset.id = book.id;
        let title = document.createElement("h3");
        title.textContent = "Title: " + book.title;

        let author = document.createElement("h4");
        author.textContent = "Author: " + book.author;

        let genre = document.createElement("h4");
        genre.textContent = "Genre: " + book.genre;

        let removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Book";
        removeBtn.addEventListener("click", (event) => {
            const bookId = bookCard.dataset.id;

            const index = library.findIndex(b => b.id === bookId);

            if (index !== -1) {
                library.splice(index, 1); 
                displayBooks(); 
            }
        })

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(genre);
        bookCard.appendChild(removeBtn);
        

        bookCard.style.width = "100px";
        bookCard.style.height = "200px";

        bookDisplay.appendChild(bookCard);
    }
}

const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", event => {
    const bookForm = document.getElementById("new-book-form");
    bookForm.classList.toggle("show");
})

const formSubmit = document.querySelector("[type=submit]");
formSubmit.addEventListener("click", event =>{
    event.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    addBookToLibrary(title, author, genre);
    const form = document.querySelector("form");
    form.reset();

})

const showBookBtn = document.querySelector(".show-books");
showBookBtn.addEventListener("click", displayBooks);