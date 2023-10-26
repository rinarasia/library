window.onload = function () {
  const $title = document.querySelector("#title");
  const $author = document.querySelector("#author");
  const $pages = document.querySelector("#pages");
  const $read = document.querySelector("#read");

  const bookshelf = document.getElementById("bookshelf");

  const book = document.querySelectorAll(".book");
  const $displayBook = document.querySelector("#displayBook");

  let bookTitle;
  let bookAuthor;
  let bookPages;
  let bookRead;

  function displayBooks() {
    myLibrary.forEach((book) => {
      bookTitle = book.title;
      bookAuthor = book.author;
      bookPages = book.pages;
      bookRead = book.read;
      createBook(book);
      /*
      // Filter books unread
      if (bookRead === true) {
        createBook(book);
      }*/
    });
  }

  displayBooks();

  function sortAlpha() {
    myLibrary.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  function sortReverseAlpha() {
    myLibrary.sort(function (a, b) {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }

  // SORT LIBRARY ARRAY----------------------------------------------
  let sort = document.getElementById("sort");

  sort.addEventListener("change", function () {
    if (sort.value == "aToZ") {
      sortAlpha();
    } else if (sort.value == "zToA") {
      console.log("No sort Z to A");
      sortReverseAlpha();
    } else if (sort.value == "dateAdded") {
      console.log("hello date added was today");
      myLibrary.sort();
    }
    removeAllBooks();
    displayBooks();
  });

  // FORM CONTROLS--------------------------------------------------------
  const $form = document
    .querySelector("form")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      // save new book
      const addedBook = new Book(
        $title.value,
        $author.value,
        $pages.value,
        $read.checked
      );

      bookTitle = $title.value;
      bookAuthor = $author.value;
      bookPages = $pages.value;
      bookRead = $read.value;

      // check if book exists in library
      const isFound = myLibrary.find(
        (x) => x.title.toLowerCase() === bookTitle.toLowerCase()
      );

      console.log(isFound);

      if (isFound) {
        console.log("Book was found!!!");
      } else {
        addBookToLibrary(addedBook);
        console.log("I added the book");
        createBook(addedBook);
        logBookArray();
      }
    });

  function createDeleteBtn() {
    // create delete button
    deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    const x = document.createTextNode("x");
    deleteBtn.appendChild(x);

    // add delete button to bookshelf
    bookCard.appendChild(deleteBtn);
  }

  function addDeleteFunction(book) {
    // add delete function
    deleteBtn.addEventListener("click", (e) => {
      console.log("Are you sure you want to delete " + myLibrary.indexOf(book));
      let index = myLibrary.indexOf(book);
      myLibrary.splice(index, 1);

      let thisBookCard = e.target.parentElement;
      bookshelf.removeChild(thisBookCard);
      console.log(myLibrary);
      checkIfEmpty();
    });
  }

  function createBookCover() {
    //----------------CREATE NEW BOOK---------------------

    newBook = document.createElement("div");
    newBook.classList.add("book");

    // BOOK TITLE
    let title = document.createElement("h4");
    title.classList.add("title");
    newBook.appendChild(title);

    // BOOK TITLE TEXT
    const newBookTitle = document.createTextNode(bookTitle);

    // add title to book
    title.appendChild(newBookTitle);

    // Add author to book ---------------------------------
    // create span author inside book
    let spanAuthor = document.createElement("span");
    spanAuthor.classList.add("author");
    newBook.appendChild(spanAuthor);

    // create author text for book
    let textAuthor = document.createTextNode(bookAuthor);

    // add author to book
    spanAuthor.appendChild(textAuthor);

    // Add pages to book ---------------------------------
    // create span pages inside book
    let spanPages = document.createElement("span");
    spanPages.classList.add("pages");
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
    // set initial book status
    if (bookRead === false) {
      readBtn.classList.add("unread");
      readBtn.innerHTML = "Unread";
      bookRead = false;
    } else {
      readBtn.classList.add("read");
      readBtn.innerHTML = "Read";
    }

    bookCard.appendChild(readBtn);

    readBtn.addEventListener("click", (e) => {
      console.log("I am reading " + book.title);
      if (bookRead === false) {
        bookRead = true;
        console.log(bookRead);
      } else if (bookRead == true) {
        bookRead = false;
        console.log(bookRead);
      }
      readBtn.classList.toggle("read");
      readBtn.classList.toggle("unread");
      setReadStatus(readBtn);
    });
  }

  function setReadStatus(readBtn) {
    let text = readBtn;
    if (text.innerHTML === "Read") {
      text.innerHTML = "Unread";
    } else {
      text.innerHTML = "Read";
    }
  }

  function createBook(book) {
    bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    createDeleteBtn();
    addDeleteFunction(book);

    createBookCover();

    createReadButton(book);

    //--------------ADD BOOKCARD TO BOOKSHELF----------------
    // add book to bookshelf
    bookshelf.appendChild(bookCard);
  }
};

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " Pages" + read;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const Tolkien = new Book("Tolkien", "J.R.R.", "1342", false);
// add default books to library
const bookOne = new Book("Frog", "J.R.R.", "1342", false);
const bookTwo = new Book("Apple", "J.R.R.", "1342", true);
const bookThree = new Book("Cats", "J.R.R.", "1342", false);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
addBookToLibrary(bookThree);
addBookToLibrary(Tolkien);

function removeAllBooks() {
  console.log("It's working!!!");
  while (bookshelf.firstChild) {
    bookshelf.firstChild.remove();
  }
}

function checkIfEmpty() {
  if (myLibrary.length === 0) {
    let p = document.createElement("p");
    p.classList.add("p");
    bookshelf.appendChild(p);

    // create author text for book
    let text = document.createTextNode(
      "No books found. Add a book to your library."
    );

    // add author to book
    p.appendChild(text);
    console.log("Ahh no books!");
  }
}
