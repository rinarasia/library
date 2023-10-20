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

function addBookToLibrary() {
  myLibrary.push();
}

const Tolkien = new Book('Tolkien', 'J.R.R.', '1342', true);

console.log(Tolkien.info());