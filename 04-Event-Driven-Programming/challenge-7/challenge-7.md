# Challenge 7: User Registration Form Validation

## Introduction

User registration forms are one of the most common features in modern web
applications. Before creating an account, websites must validate the information
entered by the user to ensure it is complete, consistent, and follows basic
business rules.

This validation happens immediately when the user submits the form, providing
instant feedback without reloading the page. This is a practical example of
**event-driven programming**, where the application reacts to user actions by
executing JavaScript code in response to events.

In this challenge, you will build the client-side logic for a **user
registration form**, validating multiple fields before allowing the registration
to continue.

This challenge combines everything you have learned so far about DOM
manipulation, event listeners, conditional statements, and dynamic updates.

---

# Problem Description

You are developing the registration page for a new web application.

The HTML and CSS have already been created.

The page contains a registration form with the following fields:

- Full Name
- Email Address
- Password
- Confirm Password

The page also contains:

- A **Register** button
- A paragraph for displaying validation messages

When the user clicks the **Register** button, your JavaScript code must validate
all fields before displaying a success message.

---

# Validation Rules

Your program must validate the fields in the following order.

## 1. Full Name

The full name:

- cannot be empty
- must contain at least **3 characters**

If invalid, display:

```
Full name must contain at least 3 characters.
```

---

## 2. Email Address

The email:

- cannot be empty
- must contain both:
  - `@`
  - `.`

If invalid, display:

```
Please enter a valid email address.
```

---

## 3. Password

The password:

- cannot be empty
- must contain at least **8 characters**

If invalid, display:

```
Password must contain at least 8 characters.
```

---

## 4. Confirm Password

The confirmation password must exactly match the original password.

If they do not match, display:

```
Passwords do not match.
```

---

# Successful Registration

If every validation passes:

- Display:

```
Registration completed successfully!
```

- Clear every input field.
- Place the cursor back inside the **Full Name** field.

---

# Message Styling

The CSS already provides two classes.

```css
.success
.error
```

When displaying:

- an error message → use the `.error` class.
- a success message → use the `.success` class.

Only one message should be displayed at a time.

---

# HTML and CSS

The HTML structure and CSS styles are already provided.

Students only need to implement the JavaScript solution.

---

# Expected Behavior

Example 1

```
Full Name:
Jo

↓

Full name must contain at least 3 characters.
```

---

Example 2

```
Email:
john@email

↓

Please enter a valid email address.
```

---

Example 3

```
Password:
abc123

↓

Password must contain at least 8 characters.
```

---

Example 4

```
Password:
password123

Confirm Password:
password

↓

Passwords do not match.
```

---

Example 5

```
Full Name:
John Smith

Email:
john@email.com

Password:
password123

Confirm Password:
password123

↓

Registration completed successfully!
```

The form is cleared and the cursor returns to the first input field.

---

# Student Tasks

For this challenge, you must create:

- The algorithm
- The flowchart
- The JavaScript implementation

---

# Learning Objectives

By completing this challenge, you will practice:

- Selecting multiple form elements
- Reading user input with `value`
- Registering click events
- Preventing invalid form submissions
- Validating multiple fields
- Using string methods
- Updating HTML dynamically
- Managing CSS classes
- Clearing form inputs
- Setting focus with `focus()`
- Building a realistic registration workflow similar to those found in modern web applications