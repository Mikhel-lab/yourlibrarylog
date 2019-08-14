class Store {
  constructor() {
    this._books = [];
  }
  // --> Save book Method
  save(book) {
    // --> Handle first book added
    if (this._books.length <= 0) {
      this._books.push(book);
    } else {
      // --> check that incoming book is not already logged
      for (let bk of this._books) {
        if (bk.isbn !== book.isbn) {
          this._books.push(book);
        }
      }
    }
    // --> Save book to local storage
    localStorage.setItem("books", JSON.stringify(this._books));
  }
  // --> Setter for books should it need to be set or cleared externally
  set books(books) {
    this._books = books;
  }
  // --> getter for books to retrieve outside
  get books() {
    if (localStorage.getItem("books") === null) {
      this._books = [];
    } else {
      this._books = JSON.parse(localStorage.getItem("books"));
    }
    // --> return a copy of the current book list
    return [...this._books];
  }
  // -->  Remove Book Method
  removeBook(isbn) {
    // --> Filter books that do not match incoming isbn
    this._books = this._books.filter(book => {
      return book.isbn !== isbn;
    });
    // --> Set books in local storage to updated list
    localStorage.setItem("books", JSON.stringify(this._books));
  }
}
