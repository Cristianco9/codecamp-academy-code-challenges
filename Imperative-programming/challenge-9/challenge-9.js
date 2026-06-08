// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Request the movie rating from the user
const rating = "R"; 

// Variable to store the result
let message = "";

// Switch statement
switch (rating) {

    case "G":
        message = "General audiences.";
        break;

    case "PG":
        message = "Parental guidance suggested.";
        break;

    case "PG-13":
        message = "Parents strongly cautioned.";
        break;

    case "R":
        message = "Restricted.";
        break;

    case "NC-17":
        message = "Adults only.";
        break;

    default:
        message = "Invalid movie rating.";
}

// Output
alert(message);

/*
--------------------------------------------------
Desktop Test
Movie Rating Classification
--------------------------------------------------

rating = "G"
=> General audiences.

rating = "PG"
=> Parental guidance suggested.

rating = "PG-13"
=> Parents strongly cautioned.

rating = "R"
=> Restricted.

rating = "NC-17"
=> Adults only.

rating = "X"
=> Invalid movie rating.

rating = "hello"
=> Invalid movie rating.

rating = 123
=> Invalid movie rating.

--------------------------------------------------
*/