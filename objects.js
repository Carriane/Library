let myLibrary = [];

const book = {
    title: '',
    author: '',
    pages: '',
    // read: function() {
    //     return `I have read ${this.title} by ${this.author}, which is ${this.pages} pages long.`;
    // }
};

function addBookToLibrary() {
   const newBook = new book();
   newBook.title = bookForm.title.value;
   newBook.author = bookForm.author.value;
   newBook.pages = bookForm.pages.value;
   myLibrary.push(newBook);
   
}


console.log(myLibrary(newBook));