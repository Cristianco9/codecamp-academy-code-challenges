# Challenge 10: Book Collection Manager

## Introduction

Many web applications allow users to manage collections of items, such as books,
movies, songs, or games. These applications let users add new items, organize
their collections, and quickly view important information.

In this challenge, you will build a **Book Collection Manager**, a small web
application that allows users to register books and display them on the page.

This project combines many of the concepts learned throughout the
Event-Driven Programming course, including DOM manipulation, event listeners,
functions, arrays, objects, loops, conditionals, and dynamic page updates.

Unlike previous challenges, this application stores multiple objects inside an
array and generates HTML elements dynamically for each registered book.

---

# Problem Description

You are developing a simple web application for a small library.

The application allows users to register books and display them in a collection.

Each book contains the following information:

- Title
- Author
- Number of pages
- Reading status
    - Read
    - Not Read

When the user adds a new book, it should immediately appear in the collection
without reloading the page.

---

# Application Interface

The HTML and CSS files are already provided.

The page contains:

- A text input for the book title
- A text input for the author
- A numeric input for the number of pages
- A select element with:
    - Read
    - Not Read
- An **Add Book** button

Below the form, the application displays:

- Total number of books
- A list of all registered books

---

# Functional Requirements

Implement the JavaScript code that satisfies the following requirements.

## 1. Read Form Data

When the user clicks **Add Book**, obtain:

- Title
- Author
- Number of pages
- Reading status

---

## 2. Validate the Input

Before creating a book, validate the information.

The following rules apply:

- Title cannot be empty.
- Author cannot be empty.
- Pages must be a valid number.
- Pages must be greater than zero.
- Reading status must be selected.

If any validation fails, display an appropriate error message and do not add
the book to the collection.

---

## 3. Create a Book Object

Each registered book must be represented by a JavaScript object.

Example:

```javascript
{
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    status: "Read"
}
```

---

## 4. Store the Books

Create an array that stores every registered book.

Each new book should be added to the end of the array.

---

## 5. Display the Collection

Whenever a new book is successfully added:

- Clear the current list.
- Generate the entire collection again.
- Display every registered book.

Each book should show:

- Title
- Author
- Number of pages
- Reading status

Example:

```
Clean Code

Author:
Robert C. Martin

Pages:
464

Status:
Read
```

---

## 6. Update the Book Counter

The application must display the total number of books currently stored.

Example:

```
Total Books: 5
```

This value must update automatically every time a new book is added.

---

## 7. Color Coding

Display the reading status using different colors.

- **Read** → Green
- **Not Read** → Red

---

## 8. Clear the Form

After successfully adding a book:

- Clear every input field.
- Return the cursor to the Title field.

---

# Expected Behavior

The user enters:

```
Title:
The Hobbit

Author:
J.R.R. Tolkien

Pages:
310

Status:
Read
```

The page updates automatically.

```
Total Books: 1

--------------------------------

The Hobbit

Author:
J.R.R. Tolkien

Pages:
310

Status:
Read
```

The user adds another book.

```
Title:
The Pragmatic Programmer

Author:
Andrew Hunt

Pages:
352

Status:
Not Read
```

The collection is updated immediately.

```
Total Books: 2

--------------------------------

The Hobbit
...

--------------------------------

The Pragmatic Programmer
...
```

---

# Student Tasks

Before writing the JavaScript solution, complete the following activities:

- Design the algorithm.
- Create the flowchart.
- Identify the required DOM elements.
- Identify the application state.
- Implement the complete JavaScript solution.

---

# Technical Requirements

Your solution must demonstrate the use of:

- Variables
- Arrays
- Objects
- Functions
- Event listeners
- DOM selection
- DOM manipulation
- Conditional statements
- Loops
- Form validation
- Dynamic element creation
- `push()`
- `textContent`
- `innerHTML`
- `createElement()`
- `appendChild()`
- `focus()`

---

# Bonus Challenges (Optional)

For additional practice, implement one or more of the following features.

### Bonus 1

Allow users to remove a book from the collection.

---

### Bonus 2

Display the books in alphabetical order by title.

---

### Bonus 3

Prevent duplicate books with the same title and author.

---

### Bonus 4

Display separate counters for:

- Read books
- Not Read books

---

# Learning Objectives

By completing this challenge, you will practice how to:

- Build a realistic event-driven web application.
- Store multiple objects inside an array.
- Create HTML elements dynamically.
- Validate form data.
- Update the DOM after user interactions.
- Organize code into reusable functions.
- Manage application state using JavaScript arrays and objects.

This challenge serves as the final project of the Event-Driven Programming
course and combines the major concepts covered throughout the module into a
single practical application.