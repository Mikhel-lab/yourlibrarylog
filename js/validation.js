class Validation {
  static validate(title, author, isbn) {
    let error;
    let issue;
    // --> check if input is empty if it is error is true and issue is set to
    // --> element that is empty.
    if (title === "") {
      error = true;
      issue = "title";
    } else if (author === "") {
      error = true;
      issue = "author";
    } else if (isbn === "") {
      error = true;
      issue = "isbn";
    } else {
      error = false;
    }
    return {
      error,
      issue
    };
  }
}
