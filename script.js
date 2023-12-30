window.onload = function () {
  const bookshelf = document.getElementById("bookshelf");

  //const book = document.querySelectorAll(".book");

  let display = document.querySelector("#display");
  let displayBook = document.querySelector("#displayBook");
  let displayTitle = document.querySelector("#displayTitle");
  let displayAuthor = document.querySelector("#displayAuthor");
  let displayPages = document.querySelector("#displayPages");
  let displayRead = document.querySelector("#displayRead");  


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      return title + " by " + author + ", " + pages + " Pages" + read;
    }
  }
}
  
  

class Library {
  constructor() {
    this.library = [];
  }

  addBook(book) {
     this.library.push(book)
  }
  
  firstBooks = () => {
        myLibrary.addBook(new Book("Frog", "Fred Frog", 1342, false))
        myLibrary.addBook(new Book("Apple", "Amelia Apple", 453, true))
        myLibrary.addBook(new Book("Cats", "Cathy Cats", 159, false))
        myLibrary.displayBooks();
  }
  
  displayBooks() {
    this.library.forEach((book) => {
      this.createBook(book);
    });
  }
  
  checkLibrary(book) {
    //console.log(myLibrary.library);
    const isFound = myLibrary.library.find((x) => x.title.toLowerCase() === book.title.toLowerCase());
    
    if(isFound){
      console.log("You added that already!");
      console.log(isFound);
      //myLibrary.addBook(book);      
    } else {
      // add book to library array
      myLibrary.addBook(book);
      myLibrary.createBook(book);
    }
    //console.log(book);
    
  }
  
  createBook(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    
    
    //this.checkLibrary(book)
    // create delete button
    this.createDeleteBtn(book, bookCard);

    // create book cover
    this.createBookCover(book, bookCard);

    // create read button
    this.createReadButton(book, bookCard);

    //--------------ADD BOOKCARD TO BOOKSHELF----------------
    // add book to bookshelf
    bookshelf.appendChild(bookCard);
  }
  
  createDeleteBtn(book, bookCard) {
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    const x = document.createTextNode("x");
    deleteBtn.appendChild(x);

    // add delete button to bookshelf
    bookCard.appendChild(deleteBtn);    
    
    // add delete function
    deleteBtn.addEventListener("click", (e) => {
      console.log("Are you sure you want to delete " + this.library.indexOf(book));
      let index = this.library.indexOf(book);
      
      this.library.splice(index, 1);

      let thisBookCard = e.target.parentElement;
      bookshelf.removeChild(thisBookCard);
      //checkIfEmpty();
    });
    
  }
  
  createBookCover(book, bookCard) {
    //----------------CREATE NEW BOOK---------------------

    const newBook = document.createElement("div");
    newBook.classList.add("book");

    // BOOK TITLE
    let title = document.createElement("h4");
    title.classList.add("title");
    newBook.appendChild(title);

    // BOOK TITLE TEXT
    const newBookTitle = document.createTextNode(book.title);
    
    // add title to book
    title.appendChild(newBookTitle);

    // Add author to book ---------------------------------
    // create span author inside book
    let spanAuthor = document.createElement("span");
    spanAuthor.classList.add("author");
    newBook.appendChild(spanAuthor);

    // create author text for book
    let textAuthor = document.createTextNode(book.author);

    // add author to book
    spanAuthor.appendChild(textAuthor);

    // Add pages to book ---------------------------------
    // create span pages inside book
    let spanPages = document.createElement("span");
    spanPages.classList.add("pages");
    newBook.appendChild(spanPages);

    // create pages text for book
    let textPages = document.createTextNode(book.pages + `pgs`);

    // add author to book
    spanPages.appendChild(textPages);

    // add book to book card
    bookCard.appendChild(newBook);
/*
    // display book on sidebar on click
    newBook.addEventListener("click", (e) => {
      displayTitle.innerHTML = book.title;
      displayAuthor.innerHTML = book.author;
      displayPages.innerHTML = book.pages + " pgs";
      //splayRead.innerHTML = book.read;

      if(book.read === false) {
        displayRead.innerHTML = "Unread";
        displayRead.classList.remove("read");
        displayRead.classList.add("unread");
        console.log("FALSE");
      } else if(book.read === true) {
        displayRead.innerHTML = "Read";
        displayRead.classList.remove("unread");
        displayRead.classList.add("read");
        console.log("TRUE");
      }
    //console.log(readBtn.classList);
    });
    */
  }
  
  createReadButton(book, bookCard) {
    //--------------CREATED READ BUTTON----------------------
    let index = this.library.indexOf(book);
    
    let bookIndex = this.library[index];
    let bookReadStatus = this.library[index].read;

    const readBtn = document.createElement("button");
    // set initial book status
    if (bookReadStatus === false) {
      readBtn.classList.add("unread");
      readBtn.innerHTML = "Unread";
      this.library[index].read = false;
    } else {
      readBtn.classList.add("read");
      readBtn.innerHTML = "Read";
      this.library[index].read = true;
    }

    bookCard.appendChild(readBtn);

    readBtn.addEventListener("click", (e) => {
      console.log("I am reading " + book.title);
      if (bookReadStatus === false) {
        bookReadStatus = true;
        this.library[index].read = true;
        console.log("Read Status: " + bookReadStatus);
        console.log(index);
      } else if (bookReadStatus === true) {
        bookReadStatus = false;
        this.library[index].read = false;
        console.log("Read Status: " + bookReadStatus);
        console.log(index);
      }
      readBtn.classList.toggle("read");
      readBtn.classList.toggle("unread");
      this.setReadStatus(readBtn);
    });
    
    bookCard.addEventListener("click", (e) => {
      this.showBookOnDisplay(book, readBtn);
    });
  }

  // set read status of book (read or unread)
  setReadStatus(readBtn) {
    let text = readBtn;
    //console.log(text);
    if (text.innerHTML === "Read") {
      text.innerHTML = "Unread";
    } else {
      text.innerHTML = "Read";
    }
  }

  // display book details on sidebar on click
  showBookOnDisplay(book, readBtn) {
      displayTitle.innerHTML = book.title;
      displayAuthor.innerHTML = book.author;
      displayPages.innerHTML = book.pages + " pgs";

      if(book.read === false) {
        displayRead.innerHTML = readBtn.innerHTML;
        console.log("FALSE");
      } else if(book.read === true) {
        displayRead.innerHTML = readBtn.innerHTML;
        console.log("TRUE");
      }
    displayRead.classList = readBtn.classList;
  }
  
  // remove all books from bookshelf
  removeAllBooks() {
    console.log("It's working!!!");
    while (bookshelf.firstChild) {
      bookshelf.firstChild.remove();
      //this.library.pop();
      //console.log(myLibrary.library);
    }
  }
  
  // sort book titles alphabetically
  sortAlpha() {
    this.library.sort(function (a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  
  // sort book titles reverse alphabetically
  sortReverseAlpha() {
    this.library.sort(function (a, b) {
      if (a.title > b.title) {
        return -1;
      }
      if (a.title < b.title) {
        return 1;
      }
      return 0;
    });
  }
  
  // add sort function
  sortLibrary() {
  // SORT LIBRARY ARRAY----------
  let sort = document.getElementById("sort");

  sort.addEventListener("change", function () {
    if (sort.value == "aToZ") {
      myLibrary.sortAlpha();
    } else if (sort.value == "zToA") {
      console.log("No sort Z to A");
      myLibrary.sortReverseAlpha();
    } else if (sort.value == "dateAdded") {
      console.log("hello date added was today");
      myLibrary.library.sort();
    }
    myLibrary.removeAllBooks();
    myLibrary.displayBooks();
  });
  }
  
  filterBooksUnread() {
    this.library.removeAllBooks();
    console.log(book.read);
    this.library.forEach((book) => {
      this.createBook(book);
    });
    /*
    // Filter books unread
    myLibrary.forEach((book) => {
      bookTitle = book.title;
      bookAuthor = book.author;
      bookPages = book.pages;
      bookRead = book.read;
      if (bookRead === false) {
        createBook(book);
      }
    });*/
  }

}
  
const myLibrary = new Library();

//console.log(myLibrary.checkIfEmpty);
let bookFive = new Book("Frog", "J.R.R.", 1342, false);

 
//myLibrary.checkLibrary(bookFive);
myLibrary.firstBooks();
myLibrary.sortLibrary();
//myLibrary.displayBooks();
//myLibrary.checkLibrary(bookFive);
//console.log(myLibrary.library);
  
  const form = document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.querySelector("#title");
      const author = document.querySelector("#author");
      const pages = document.querySelector("#pages");
      const read = document.querySelector("#read");
    
      // save new book
      const addedBook = new Book(
        title.value,
        author.value,
        pages.value,
        read.checked
      );
    
      myLibrary.checkLibrary(addedBook);
 });
  
}