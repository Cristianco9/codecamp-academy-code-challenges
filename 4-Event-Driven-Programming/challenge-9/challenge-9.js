// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// ==========================
// DOM Elements
// ==========================
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const passwordInput = document.getElementById("password");

const registerButton = document.getElementById("register-btn");

const message = document.getElementById("message");
const usersList = document.getElementById("users-list");
const userCount = document.getElementById("user-count");

// ==========================
// Application State
// ==========================
const users = [];

// ==========================
// Event
// ==========================
registerButton.addEventListener("click", registerUser);

// ==========================
// Functions
// ==========================
function registerUser() {

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = Number(ageInput.value);
    const password = passwordInput.value;

    // Validation
    if (name.length < 3) {
        showMessage(
            "The full name must contain at least 3 characters.",
            "red"
        );
        return;
    }

    if (!email.includes("@")) {
        showMessage(
            "Please enter a valid email address.",
            "red"
        );
        return;
    }

    if (age < 18 || isNaN(age)) {
        showMessage(
            "You must be at least 18 years old.",
            "red"
        );
        return;
    }

    if (password.length < 8) {
        showMessage(
            "The password must contain at least 8 characters.",
            "red"
        );
        return;
    }

    // Create object
    const user = {
        name: name,
        email: email,
        age: age,
        password: password
    };

    // Store user
    users.push(user);

    // Success message
    showMessage(
        "Registration completed successfully.",
        "green"
    );

    // Refresh interface
    updateUsers();

    // Clear form
    clearForm();

}

function updateUsers() {

    usersList.innerHTML = "";

    for (let i = 0; i < users.length; i++) {

        const item = document.createElement("li");

        item.textContent =
            (i + 1) +
            ". " +
            users[i].name +
            " (" +
            users[i].age +
            " years old)";

        usersList.appendChild(item);

    }

    userCount.textContent =
        "Total Users: " + users.length;

}

function clearForm() {

    nameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
    passwordInput.value = "";

    nameInput.focus();

}

function showMessage(text, color) {

    message.textContent = text;
    message.style.color = color;

}