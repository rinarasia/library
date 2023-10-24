window.onload = function () {
  const $title = document.querySelector('#title');
  const $author = document.querySelector('#author');
  const $pages = document.querySelector('#pages');
  const $read = document.querySelector('#read');

  const bookshelf = document.getElementById('bookshelf');

  const book = document.querySelectorAll('.book');
  const $displayBook = document.querySelector('#displayBook');

  const deleteBtn = document.querySelectorAll('.delete');

  let bookTitle;
  let bookAuthor;
  let bookPages;

  const $form = document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();

    // save new book
    const addedBook = new Book($title.value, $author.value, $pages.value, $read.checked);

     bookTitle = $title.value;
     bookAuthor = $author.value;
     bookPages = $pages.value;

    // show new book on bookshelf

    // check if book exists in library
    const isFound = myLibrary.find((x) => x.title === bookTitle);

    console.log(isFound);

    if(isFound) {
      console.log("Book was found!!!");
    } else {
      addBookToLibrary(addedBook);
      console.log("I added the book");
      createBook(addedBook);
    }

  });

  function createBook(book) {
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
  }

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', (e) => {
      console.log(myLibrary[i].title);
    })
  };


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



function deleteBook(index) {
  console.log(myLibrary[index].title);
}


const Tolkien = new Book('Tolkien', 'J.R.R.', '1342', true);

console.log(Tolkien.info());

addBookToLibrary(Tolkien);
/*

const bookOne = new Book('Book1', 'J.R.R.', '1342', true);
const bookTwo = new Book('Book2', 'J.R.R.', '1342', true);
const bookThree = new Book('Book3', 'J.R.R.', '1342', true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);
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



      /*   
    
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
*/