const library = [];

function Book(title, author, genre){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.id = crypto.randomUUID();

}

function addBookToLibrary(title, author, genre){
    library.push(new Book(title, author, genre));
}

function displayBooks(){
    const bookDisplay = document.querySelector(".book-placeholder");
    for (let book of library){
        let bookCard = document.createElement("article");
        let title = document.createElement("h3");
        title.textContent = book.title;

        let author = document.createElement("h4");
        author.textContent = book.author;

        let genre = document.createElement("h4");
        genre.textContent = book.genre;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(genre);

        bookDisplay.appendChild(bookCard);
    }
}

const newBookBtn = document.querySelector(".new-book");
newBookBtn.addEventListener("click", event => {
    const bookForm = document.getElementById("new-book-form");
    bookForm.classList.toggle("show");
})

