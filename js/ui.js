const store = new Store();
// --> UI Class: Handles UI tasks (static)
class UI {
  // --> Display: all books
  static displayBooks() {
    const books = store.books;

    books.forEach(book => {
      UI.addBook(book);
    });
  }
  // --> Add: book to UI
  static addBook(book) {
    // --> get reference to html element
    const list = document.querySelector("#book-list");
    // --> create a new row
    const row = document.createElement("tr");
    // --> create columns
    row.innerHTML = `
            <td >${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td ><a href="#" id="${
              book.isbn
            }" class="btn btn-danger btn-sm delete">X</a></td>
        `;
    list.appendChild(row);
  }
  // --> Removing a cook
  static removeBook(el) {
    // --> check if element passed in contains the class (delete)
    if (el.classList.contains("delete")) {
      // --> Remove: element from UI
      el.parentElement.parentElement.remove();
      // --> Remove: book from storage
      store.removeBook(el.id);
    }
  }
  // --> Alert messages for validation
  static alertMesage(parentEl, msg) {
    // --> Get UI element
    const element = document.querySelector(`.${parentEl}`);
    // --> Create child where messages will be in
    const child = document.createElement("p");
    // --> Add: border red to call attention
    child.classList.add("danger-bd");
    // --> Add id to change text color
    child.id = "tx-red";
    // --> Add: message
    child.innerHTML = msg;
    // --> Append the warning message to the affecting element
    element.appendChild(child);
    // --> After 3 seconds remove warning
    setTimeout(() => {
      element.removeChild(child);
    }, 3000);
  }
  // --> Clear: all input fields
  static clearFields(values) {
    for (let val of values) {
      document.querySelector(val).value = "";
    }
  }
}
