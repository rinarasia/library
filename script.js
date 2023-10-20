const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return title + ' by ' + author + ', ' + pages + ' Pages' + read;
  }

}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const Tolkien = new Book('Tolkien', 'J.R.R.', '1342', true);

console.log(Tolkien.info());

addBookToLibrary(Tolkien);


const tik = new Book('Tik', 'J.R.R.', '1342', true);
const tok = new Book('Tok', 'J.R.R.', '1342', true);
const ohh = new Book('Ohh', 'J.R.R.', '1342', true);

addBookToLibrary(tik);
addBookToLibrary(tok);
addBookToLibrary(ohh);
console.log(myLibrary[0].title);
