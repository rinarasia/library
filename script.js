window.onload = function () {
  const $title = document.querySelector('#title');
  const $author = document.querySelector('#author');
  const $pages = document.querySelector('#pages');
  const $read = document.querySelector('#read');

  const bookshelf = document.getElementById('bookshelf');


  const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // save new book
    const addedBook = new Book($title.value, $author.value, $pages.value, $read.checked);

    const bookTitle = $title.value;
    const bookAuthor = $author.value;
    const bookPages = $pages.value;

    // add book to library
    addBookToLibrary(addedBook);

    // show new book on bookshelf

    myLibrary.forEach(book => {
      console.log(book.title);

      // create new book
      const newBook = document.createElement("div");
      newBook.classList.add('book');

      // Add title to book-----------------------------------
      // create h4 inside book
      const h4 = document.createElement("h4");
      h4.classList.add('title');
      newBook.appendChild(h4);

      // create text for book
      const newBookTitle = document.createTextNode(bookTitle);

      // add title to book
      h4.appendChild(newBookTitle);

      // Add author to book ---------------------------------
      // create span author inside book
      const spanAuthor = document.createElement("span");
      spanAuthor.classList.add('author');
      newBook.appendChild(spanAuthor);

      // create author text for book
      const newBookAuthor = document.createTextNode(bookAuthor);

      // add author to book
      spanAuthor.appendChild(newBookAuthor);

      // Add pages to book ---------------------------------
      // create span pages inside book
      const spanPages = document.createElement("span");
      spanPages.classList.add('pages');
      newBook.appendChild(spanPages);

      // create author text for book
      const newBookPages = document.createTextNode(bookPages + `pgs`);

      // add author to book
      spanPages.appendChild(newBookPages);

      // add book to bookshelf
      bookshelf.append(newBook);

    });

  });


}

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + ' by ' + author + ', ' + pages + ' Pages' + read;
  }

}

function addBookToLibrary(book) {
  myLibrary.push(book);
}
/*
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
*/



/*

    
      // get bookshelf
    
      // create new book
      const newBook = document.createElement("div");
      newBook.classList.add('book');
    
      // add book to bookshelf
      bookshelf.append(newBook);

      */