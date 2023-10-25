window.onload = function () {
  const $title = document.querySelector('#title');
  const $author = document.querySelector('#author');
  const $pages = document.querySelector('#pages');
  const $read = document.querySelector('#read');

  const bookshelf = document.getElementById('bookshelf');

  const book = document.querySelectorAll('.book');
  const $displayBook = document.querySelector('#displayBook');

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
     bookRead = $read.checked;
    
    // check if book exists in library
    const isFound = myLibrary.find((x) => x.title.toLowerCase() === bookTitle.toLowerCase());

    console.log(isFound);

    if(isFound) {
      console.log("Book was found!!!");
    } else {
      addBookToLibrary(addedBook);
      console.log("I added the book");
      createBook(addedBook);
      logBookArray();
    }

  });

  // find index of book
  function findIndex(book) {
    return myLibrary.indexOf(book);
  }

  function createDeleteBtn() {
    // create delete button
    deleteBtn = document.createElement("button");
    deleteBtn.classList.add('delete');
    const x = document.createTextNode('x');
    deleteBtn.appendChild(x);

    // add delete button to bookshelf
    bookCard.appendChild(deleteBtn);
  }

  function addDeleteFunction(book, index) {
    // add delete function
    deleteBtn.addEventListener("click", (e) => {
      console.log("Are you sure you want to delete " + myLibrary.indexOf(book));

      myLibrary.splice(index, 1);

      let thisBookCard = e.target.parentElement;
      bookshelf.removeChild(thisBookCard);
    });
  }  

  function createBookCover() {
    //----------------CREATE NEW BOOK---------------------

    newBook = document.createElement("div");
    newBook.classList.add('book');

    // BOOK TITLE
    let title = document.createElement("h4");
    title.classList.add('title');
    newBook.appendChild(title);

    // BOOK TITLE TEXT
    const newBookTitle = document.createTextNode(bookTitle);

    // add title to book
    title.appendChild(newBookTitle);

    // Add author to book ---------------------------------
    // create span author inside book
    let spanAuthor = document.createElement("span");
    spanAuthor.classList.add('author');
    newBook.appendChild(spanAuthor);

    // create author text for book
    let textAuthor = document.createTextNode(bookAuthor);

    // add author to book
    spanAuthor.appendChild(textAuthor);

    // Add pages to book ---------------------------------
    // create span pages inside book
    let spanPages = document.createElement("span");
    spanPages.classList.add('pages');
    newBook.appendChild(spanPages);

    // create pages text for book
    let textPages = document.createTextNode(bookPages + `pgs`);

    // add author to book
    spanPages.appendChild(textPages);

    // add book to book card
    bookCard.appendChild(newBook);
  }

  function createReadButton(book) {
    //--------------CREATED READ BUTTON----------------------

    const readBtn = document.createElement("button");
    
    if(bookRead === false) {
      readBtn.classList.add('unread');
      readBtn.innerHTML = "Unread";
    } else {
      readBtn.classList.add('read');
      readBtn.innerHTML = "Read";
    }

    bookCard.appendChild(readBtn);

    readBtn.addEventListener("click", (e) => {
      console.log("I am reading " + book.title);
      readBtn.classList.toggle("read");
      readBtn.classList.toggle("unread");
      setReadBtn(readBtn);
    });
 
  }

  function setReadBtn(readBtn) {
    let text = readBtn;
    if (text.innerHTML === "Read") {
      text.innerHTML = "Unread";
    } else {
      text.innerHTML = "Read";
    }
  }

  function createBook(book) {
    bookCard = document.createElement("div");
    bookCard.classList.add('bookCard');

    createDeleteBtn();

    let index = myLibrary.indexOf(book);

    addDeleteFunction(book, index);
    createBookCover();
    createReadButton(book);

    //--------------ADD BOOKCARD TO BOOKSHELF----------------
    // add book to bookshelf
    bookshelf.append(bookCard);
  }

  function logBookArray() {
    myLibrary.forEach(book => {
      console.log(book);
    })
  }
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