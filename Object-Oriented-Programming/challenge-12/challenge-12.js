// Challenge 12: Library Book Catalog

// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Library book object
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    publisher: "Prentice Hall",
    publicationYear: 2008,
    genre: "Software Engineering",
    language: "English",
    pageCount: 464,
    isbn: "9780132350884",
    priceUSD: 42.99,
    isAvailable: true,
    averageRating: 4.8,

    keywords: [
        "programming",
        "clean code",
        "software engineering",
        "best practices"
    ],

    location: {
        library: "Central Library",
        floor: 2,
        section: "Technology",
        shelf: "T-15"
    },

    borrowingHistory: [
        "2026-01-15",
        "2026-03-02",
        "2026-05-18"
    ],

    dimensions: {
        widthCm: 18,
        heightCm: 23,
        thicknessCm: 3
    },

    getBookDescription: function () {
        return (
            this.title +
            " by " +
            this.author +
            " (" +
            this.publicationYear +
            ") - " +
            this.genre
        );
    }
};

// ---------------------
// Desktop Test
// ---------------------

console.log(book);

console.log("Title:", book.title);
console.log("Author:", book.author);
console.log("Publisher:", book.publisher);
console.log("ISBN:", book.isbn);

console.log(
    "Library Location:",
    book.location.library,
    "- Floor",
    book.location.floor,
    "- Shelf",
    book.location.shelf
);

console.log("Keywords:", book.keywords);

console.log("Description:");
console.log(book.getBookDescription());

/*
-------------------------------------------------
DESKTOP TEST (EXPECTED OUTPUT)
-------------------------------------------------

Print complete object.

Title: Clean Code
Author: Robert C. Martin
Publisher: Prentice Hall
ISBN: 9780132350884

Library Location:
Central Library - Floor 2 - Shelf T-15

Keywords:
[
  "programming",
  "clean code",
  "software engineering",
  "best practices"
]

Description:
Clean Code by Robert C. Martin (2008) -
Software Engineering

-------------------------------------------------
*/