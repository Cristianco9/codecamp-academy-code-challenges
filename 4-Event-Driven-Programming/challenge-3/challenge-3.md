# Challenge 3: Interactive Counter

## Introduction

Interactive counters are common components in modern web applications. They are
used in shopping carts, voting systems, inventory management, scoreboards, and
many other interfaces where users need to increase or decrease a value.

In Event-Driven Programming, counters are implemented by listening for user
actions and updating the page dynamically without reloading it.

In this challenge, you will build a simple interactive counter using JavaScript,
DOM manipulation, and multiple event listeners.

---

# Problem Description

You are developing a small web application that keeps track of a numeric value.

The page contains:

- A heading
- A paragraph displaying the current counter value
- An **Increase** button
- A **Decrease** button

The counter starts at **0**.

When the user interacts with the buttons, the displayed value must update
immediately.

---

# Requirements

Create the JavaScript code that satisfies the following requirements.

1. Select all required HTML elements using the DOM.
2. Create a variable to store the current counter value.
3. Register a **click** event for the **Increase** button.
4. Register a **click** event for the **Decrease** button.
5. When the **Increase** button is clicked:
   - Increase the counter by **1**.
   - Update the displayed value.
6. When the **Decrease** button is clicked:
   - Decrease the counter by **1**.
   - Update the displayed value.
7. The counter must continue updating correctly regardless of how many times the
   buttons are clicked.

---

# HTML Provided

The HTML and CSS files are already provided.

Students only need to implement the JavaScript solution.

---

# Expected Behavior

Initial state:

```
Counter: 0
```

User clicks **Increase**:

```
Counter: 1
```

User clicks **Increase** again:

```
Counter: 2
```

User clicks **Decrease**:

```
Counter: 1
```

User clicks **Decrease** twice:

```
Counter: -1
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
- Registering multiple event listeners
- Updating HTML content dynamically
- Using variables to store application state
- Increment (`++`) and decrement (`--`) operators
- Modifying text using `textContent`
- Connecting user interactions with DOM updates