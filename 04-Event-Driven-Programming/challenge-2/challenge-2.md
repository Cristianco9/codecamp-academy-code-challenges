# Challenge 2: Change the Background Color

## Introduction

One of the most common tasks in Event-Driven Programming is responding to user
actions by updating the appearance of a web page.

JavaScript can interact with CSS by modifying an element's style when an event
occurs. This allows developers to create dynamic and interactive user
interfaces.

In this challenge, you will practice listening for a button click and changing
the background color of the page.

---

# Problem Description

You are creating a simple web page that allows users to customize its
appearance.

The page contains:

- A heading
- A short paragraph
- A button labeled **"Change Background"**

When the user clicks the button, the background color of the entire page should
change to a different color.

---

# Requirements

Create the JavaScript code that satisfies the following requirements.

1. Select the button using the DOM.
2. Register a **click** event using `addEventListener()`.
3. When the button is clicked:
   - Change the background color of the `<body>`.
   - Change the text color so it remains easy to read.
4. The new colors should remain after the click.

---

# HTML Provided

The HTML file is already provided.

Students only need to create the JavaScript solution.

---

# Expected Behavior

Before clicking:

- Light background
- Dark text

After clicking the button:

- The page background changes to a different color.
- The text color changes to improve readability.

Example:

Before:

```
Background: White
Text: Black
```

After clicking:

```
Background: Dark Blue
Text: White
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

- Selecting HTML elements with the DOM
- Using `addEventListener()`
- Handling the `click` event
- Modifying CSS properties with JavaScript
- Accessing the `document.body` element
- Changing styles dynamically