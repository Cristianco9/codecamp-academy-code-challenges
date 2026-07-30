// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Select the HTML elements
const counter = document.getElementById("counter");

const increaseButton = document.getElementById(
    "increaseButton"
);

const decreaseButton = document.getElementById(
    "decreaseButton"
);

// Counter variable
let count = 0;

// Increase event
increaseButton.addEventListener("click", function () {

    count++;

    counter.textContent = "Counter: " + count;

});

// Decrease event
decreaseButton.addEventListener("click", function () {

    count--;

    counter.textContent = "Counter: " + count;

});

/*
---------------------------------------
Desktop Test
---------------------------------------

Initial State

count = 0

Screen:
Counter: 0

---------------------------------------
*/