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

