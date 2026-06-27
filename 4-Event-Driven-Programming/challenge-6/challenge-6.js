// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// DOM Elements
const message = document.getElementById("message");
const counter = document.getElementById("count");
const status = document.getElementById("status");

// Maximum allowed characters
const MAX_CHARACTERS = 100;

// Register the input event
message.addEventListener("input", updateCounter);

// Function
function updateCounter() {

    // Prevent the user from typing beyond the limit
    if (message.value.length > MAX_CHARACTERS) {
        message.value = message.value.substring(0, MAX_CHARACTERS);
    }

    // Current number of characters
    const characters = message.value.length;

    // Update the counter
    counter.textContent = characters;

    // Remove previous classes
    status.classList.remove(
        "normal",
        "warning",
        "error"
    );

    // Determine the current state
    if (characters === 0) {

        status.textContent = "Start typing...";
        status.classList.add("normal");

    } else if (characters <= 80) {

        status.textContent = "Looking good";
        status.classList.add("normal");

    } else if (characters < MAX_CHARACTERS) {

        status.textContent = "Almost at the limit";
        status.classList.add("warning");

    } else {

        status.textContent = "Maximum character limit reached";
        status.classList.add("error");

    }

}