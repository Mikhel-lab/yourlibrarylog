// --> Event: Display Books
document.addEventListener("DOMContentLoaded", UI.displayBooks());

// --> Event: Add Book
document.querySelector("#book-form").addEventListener("submit", e => {
  e.preventDefault();
  // --> Get values
  const title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    ISBN = document.querySelector("#isbn").value;

  const { error, issue } = Validation.validate(title, author, ISBN);
  if (error) {
    if (issue === "title") {
      UI.alertMesage(issue, "Please add a valid title");
    } else if (issue === "author") {
      UI.alertMesage(issue, "Please add a valid author");
    } else {
      UI.alertMesage(issue, "Please add a valid isbn");
    }
  } else {
    // --> create new book
    const book = new Book(title, author, `#${ISBN}`);
    // --> add it to Storage
    store.save(book);
    // --> add book to UI
    UI.addBook(book);
    // --> clear form fields
    UI.clearFields(["#title", "#author", "#isbn"]);
  }
});

// --> Event: Remove a Book
document.querySelector("#book-list").addEventListener("click", e => {
  e.preventDefault();
  // --> Remove book from UI
  UI.removeBook(e.target);
});
