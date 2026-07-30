# Challenge 9: Interactive User Registration Form

## Introduction

User registration forms are one of the most common features in modern web
applications. Before allowing users to create an account, applications must
verify that all required information is valid.

Instead of waiting until the form is submitted, many websites provide
**real-time validation**, immediately informing users if a field is missing or
contains invalid data. This improves the user experience by helping users
correct mistakes before submitting the form.

In this challenge, you will build a registration form that validates user input
when the **Register** button is clicked. You will combine **DOM manipulation,
form validation, conditional statements, arrays, loops, and event handling** to
create a realistic web application feature.

---

# Problem Description

You are developing the registration page for an online platform.

The page contains a form with the following fields:

- Full Name
- Email Address
- Age
- Password

The page also includes:

- A **Register** button
- An area for displaying validation messages
- An area for displaying successfully registered users

Initially, no users have been registered.

When the user clicks the **Register** button, the application must validate the
information entered into the form.

If every field is valid:

- A new user object must be created.
- The user object must be stored inside an array.
- The list of registered users must update immediately.
- The form must be cleared.

If one or more fields are invalid:

- Registration must be canceled.
- A descriptive validation message must be displayed.
- No user should be added to the array.

The application must continue working correctly regardless of how many users are
registered.

---

# HTML Provided

The HTML and CSS files are already provided.

Students only need to implement the JavaScript solution.

The HTML includes:

- Four input fields
- One Register button
- One validation message element
- One unordered list for registered users

---

# Validation Rules

Your JavaScript program must validate the following rules.

## Full Name

- Cannot be empty.
- Must contain at least 3 characters.

---

## Email

- Cannot be empty.
- Must contain the `@` character.

---

## Age

- Must be a number.
- Must be at least **18** years old.

---

## Password

- Cannot be empty.
- Must contain at least **8 characters**.

---

# Requirements

Create the JavaScript code that satisfies the following requirements.

1. Select all required DOM elements.
2. Create an empty array to store registered users.
3. Register a click event for the **Register** button.
4. Read all values entered by the user.
5. Validate every field.
6. If validation fails:
   - Display an appropriate message.
   - Stop the registration process.
7. If validation succeeds:
   - Create a JavaScript object representing the user.
   - Store the object in the users array.
   - Update the list of registered users.
   - Display a success message.
   - Clear every input field.
8. Continue allowing additional users to register.

---

# Expected Behavior

Initial page:

```
Registered Users

No users registered.
```

User enters:

```
Name:
John Smith

Email:
john@email.com

Age:
24

Password:
mypassword123
```

Clicks **Register**

Result:

```
Registration completed successfully.

Registered Users

1. John Smith (24)
```

User registers another account:

```
Alice Brown
alice@email.com
31
securepass
```

Result:

```
Registered Users

1. John Smith (24)

2. Alice Brown (31)
```

---

# Student Tasks

For this challenge, you must create:

- The algorithm
- The flowchart
- The JavaScript implementation

---

# Learning Objectives

By completing this challenge, you will practice:

- Selecting multiple DOM elements
- Reading user input
- Handling click events
- Validating form data
- Using conditional statements
- Creating JavaScript objects
- Working with arrays of objects
- Updating the DOM dynamically
- Creating HTML elements
- Clearing form fields
- Managing application state

---

# Bonus Challenges

After completing the basic solution, try implementing one or more of the
following improvements.

1. Prevent duplicate email addresses from being registered.
2. Display the total number of registered users.
3. Add a **Delete User** button next to each registered user.
4. Display the registration date for each user.
5. Automatically focus the first input after registration.
6. Validate the email using a regular expression.
7. Add a password strength indicator.
8. Sort the registered users alphabetically.

---

# Real-World Connection

This challenge simulates a simplified version of the registration forms used by
social media platforms, online learning systems, banking applications, and
e-commerce websites.

It combines many of the core concepts of Event-Driven Programming into a single
interactive application and introduces students to the type of client-side
validation performed in professional front-end development.