function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

let bookOne = new Book("Book One", "JKR", 53, "yes");
let bookTwo = new Book("Book Two", "Author Two", 23, "no");
let bookThree = new Book("Book Three", "Author Three", 103, "yes");

let myLibrary = [bookOne, bookTwo, bookThree];

function displayBook(book) {
  const table = document.querySelector('#table')
  const tr = document.createElement('tr')
  const title = document.createElement('td')
  const author = document.createElement('td')
  const pages = document.createElement('td')
  const read = document.createElement('td')

  title.textContent = book.title
  author.textContent = book.author
  pages.textContent = book.pages
  read.textContent = book.read

  tr.appendChild(title)
  tr.appendChild(author)
  tr.appendChild(pages)
  tr.appendChild(read)
  table.appendChild(tr)
}

function eachBook(library) {
  for (let i = 0; i < library.length; i++) {
    displayBook(library[i])
  }
}

eachBook(myLibrary)

function displayForm() {
  document.getElementById("newBookForm").style.display = "block";
}

newBookForm = document.forms.newBookForm
newBookForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const title = newBookForm.querySelector('input[name="title"').value
  const author = newBookForm.querySelector('input[name="author"').value
  const pages = newBookForm.querySelector('input[name="pages"').value
  const possibleReadValues = newBookForm.querySelectorAll('input[name="read"]')
  let read
  if (possibleReadValues[0].checked) {
    read = 'Yes'
  } else {
    read = 'No'
  }

  book = new Book(title, author, pages, read)
  displayBook(book)
  addBookToLibrary(book)
})