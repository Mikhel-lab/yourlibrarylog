// --> Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.id = Math.floor(Math.random() * 1000000000);
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
