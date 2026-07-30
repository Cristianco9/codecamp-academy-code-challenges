// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Select the elements
const changeBackgroundButton = document.getElementById(
    "changeBackgroundButton"
);

const container = document.querySelector(".container");

// Variable to keep track of the current theme
let darkMode = false;

// Register the click event
changeBackgroundButton.addEventListener("click", function () {

    if (darkMode === false) {

        // Dark theme
        document.body.style.backgroundColor = "#1e3a8a";
        document.body.style.color = "#ffffff";

        container.style.backgroundColor = "#0f172a";
        container.style.color = "#ffffff";

        darkMode = true;

    } else {

        // Light theme
        document.body.style.backgroundColor = "#f3f4f6";
        document.body.style.color = "#111827";

        container.style.backgroundColor = "#ffffff";
        container.style.color = "#111827";

        darkMode = false;

    }

});

/*
---------------------------------------
Desktop Test
---------------------------------------

Initial State

darkMode = false

Body
Background: #f3f4f6
Text: #111827

Container
Background: #ffffff
Text: #111827

---------------------------------------

Click #1

darkMode = true

Body
Background: #1e3a8a
Text: #ffffff

Container
Background: #0f172a
Text: #ffffff

---------------------------------------

Click #2

darkMode = false

Body
Background: #f3f4f6
Text: #111827

Container
Background: #ffffff
Text: #111827

---------------------------------------

Click #3

darkMode = true

Body
Background: #1e3a8a
Text: #ffffff

Container
Background: #0f172a
Text: #ffffff

---------------------------------------

The colors alternate every time the user clicks
the button.

---------------------------------------
*/