// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Select the button
const welcomeButton = document.getElementById("welcomeButton");

// Register the click event
welcomeButton.addEventListener("click", function () {
    alert("Welcome to Event-Driven Programming!");
});

/*
---------------------------------------
Desktop Test
---------------------------------------

Initial State:
Page loads successfully.

Action:
User clicks the button.

Expected Result:
Alert appears:

"Welcome to Event-Driven Programming!"

---------------------------------------

Action:
User clicks again.

Expected Result:
The alert appears again.

---------------------------------------
*/