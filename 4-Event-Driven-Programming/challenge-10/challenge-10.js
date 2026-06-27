// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// =====================================
// DOM ELEMENTS
// =====================================

const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const statusInput = document.getElementById("status");

const addBookButton = document.getElementById("add-book-btn");

const message = document.getElementById("message");

const totalBooks = document.getElementById("total-books");
const booksRead = document.getElementById("books-read");
const booksNotRead = document.getElementById("books-not-read");

const bookList = document.getElementById("book-list");

// =====================================
// APPLICATION STATE
// =====================================

const books = [];

// =====================================
// EVENT LISTENER
// =====================================

addBookButton.addEventListener("click", addBook);

// =====================================
// ADD BOOK
// =====================================

function addBook() {

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const pages = Number(pagesInput.value);
    const status = statusInput.value;

    // Validation

    if (title.length < 3) {
        showMessage(
            "The title must contain at least 3 characters.",
            "red"
        );
        return;
    }

    if (author.length < 3) {
        showMessage(
            "The author name must contain at least 3 characters.",
            "red"
        );
        return;
    }

    if (isNaN(pages) || pages <= 0) {
        showMessage(
            "Please enter a valid number of pages.",
            "red"
        );
        return;
    }

    if (status === "") {
        showMessage(
            "Please select the reading status.",
            "red"
        );
        return;
    }

    // Create object

    const book = {
        title: title,
        author: author,
        pages: pages,
        status: status
    };

    // Save

    books.push(book);

    showMessage(
        "Book added successfully!",
        "green"
    );

    renderBooks();

    updateSummary();

    clearForm();

}

// =====================================
// RENDER BOOKS
// =====================================

function renderBooks() {

    bookList.innerHTML = "";

    if (books.length === 0) {

        bookList.innerHTML = `
            <p class="empty-message">
                No books have been added yet.
            </p>
        `;

        return;
    }

    for (let i = 0; i < books.length; i++) {

        const book = books[i];

        const card = document.createElement("article");

        card.classList.add("book");

        let statusClass = "";

        if (book.status === "Read") {
            statusClass = "status-read";
        } else {
            statusClass = "status-not-read";
        }

        card.innerHTML = `
            <h3>${book.title}</h3>

            <p>
                <strong>Author:</strong>
                ${book.author}
            </p>

            <p>
                <strong>Pages:</strong>
                ${book.pages}
            </p>

            <span class="status ${statusClass}">
                ${book.status}
            </span>
        `;

        bookList.appendChild(card);

    }

}

// =====================================
// UPDATE SUMMARY
// =====================================

function updateSummary() {

    totalBooks.textContent = books.length;

    let readCounter = 0;
    let notReadCounter = 0;

    for (let i = 0; i < books.length; i++) {

        if (books[i].status === "Read") {
            readCounter++;
        } else {
            notReadCounter++;
        }

    }

    booksRead.textContent = readCounter;
    booksNotRead.textContent = notReadCounter;

}

// =====================================
// CLEAR FORM
// =====================================

function clearForm() {

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    statusInput.value = "";

    titleInput.focus();

}

// =====================================
// SHOW MESSAGE
// =====================================

function showMessage(text, color) {

    message.textContent = text;
    message.style.color = color;

}