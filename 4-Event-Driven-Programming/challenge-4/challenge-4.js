// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// DOM elements
const message = document.getElementById("message");

const increaseButton = document.getElementById("increase-btn");
const decreaseButton = document.getElementById("decrease-btn");
const resetButton = document.getElementById("reset-btn");

const sizeValue = document.getElementById("size-value");

// Initial font size
let fontSize = 16;

// Function to update the UI
function updateFontSize() {
    message.style.fontSize = fontSize + "px";
    sizeValue.textContent = fontSize;
}

// Increase button
increaseButton.addEventListener("click", function () {
    if (fontSize < 40) {
        fontSize++;
        updateFontSize();
    }
});

// Decrease button
decreaseButton.addEventListener("click", function () {
    if (fontSize > 10) {
        fontSize--;
        updateFontSize();
    }
});

// Reset button
resetButton.addEventListener("click", function () {
    fontSize = 16;
    updateFontSize();
});

// Initialize the page
updateFontSize();