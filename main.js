const myLibrary = [];
const { newBookForm } = document.forms;

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  addBookToLibrary = (book) => {
    myLibrary.push(book);
  };

  deleteBook = (book, tr) => {
    const createBtn = document.createElement("button");

    createBtn.addEventListener("click", () => {
      if (confirm(alert) === true) {
        tr.parentNode.removeChild(tr);
        if (myLibrary.indexOf(book) !== -1) {
          myLibrary.splice(myLibrary.indexOf(book), 1);
        }
      }
    });

    createBtn.textContent = "Delete";
    createBtn.setAttribute("class", "btn btn-danger mr-2 ml-3");
    tr.appendChild(createBtn);
  };

  displayBook = (book) => {
    const tbody = document.querySelector("#tbody");
    const tr = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const read = document.createElement("td");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(read);
    book.deleteBook(book, tr);
    book.readStatus(book, tr);
    tbody.appendChild(tr);
  };

  readStatus = (book, tr) => {
    const createBtn = document.createElement("button");

    createBtn.addEventListener("click", () => {
      const status = tr.querySelector("td:nth-child(4)");
      if (book.read === "Yes") {
        status.textContent = "No";
        book.read = "No";
      } else {
        status.textContent = "Yes";
        book.read = "Yes";
      }
    });

    createBtn.textContent = "Toggle status";
    createBtn.setAttribute("class", "btn btn-success");
    tr.appendChild(createBtn);
  };
}

document.querySelector("#form-btn").addEventListener("click", () => {
  newBookForm.style.display = "block";
});

document.querySelector("#form-button").addEventListener("click", () => {
  newBookForm.style.display = "none";
});

document.querySelector("#cancel-link").addEventListener("click", () => {
  newBookForm.style.display = "none";
});

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = newBookForm.querySelector('input[name="title"').value;
  const author = newBookForm.querySelector('input[name="author"').value;
  const pages = newBookForm.querySelector('input[name="pages"').value;
  const possibleReadValues = newBookForm.querySelectorAll('input[name="read"]');
  let read;
  if (possibleReadValues[0].checked) {
    read = "Yes";
  } else {
    read = "No";
  }

  const book = new Book(title, author, pages, read);
  book.displayBook(book);
  book.addBookToLibrary(book);
});
