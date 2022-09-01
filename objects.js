let myLibrary = [];

const book = {
    title: 'Default',
    author: 'Default',
    pages: 'Default',
    read: function() {
        return `I have read ${this.title} by ${this.author}, which is ${this.pages} pages long.`;
    }
};

function addBookToLibrary() {
    const myBooks = myLibrary.push(Book);
}

for (let i = 0; i < myLibrary.length; i++) {
    return myLibrary;
};

const mybook = Object.create(book);
mybook.title = 'Green Eggs and Ham';
mybook.author = 'Dr.Suess';
mybook.pages = '14';
console.log(mybook.read());