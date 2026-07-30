# Challenge 4: Text Color Changer

## Introduction

Interactive web applications often allow users to customize the appearance of
their interface. A common way to accomplish this is by responding to events and
modifying CSS properties dynamically with JavaScript.

In this challenge, you will continue practicing Event-Driven Programming by
changing the color of a text element based on which button the user clicks.

Unlike the previous challenges, this exercise requires handling **multiple
buttons that perform different actions on the same element**.

---

# Problem Description

You are developing a simple web page that lets users change the color of a
message.

The page contains:

- A heading
- A paragraph containing a message
- Four buttons:
  - Blue
  - Green
  - Red
  - Reset

Each button changes the color of the message.

---

# Requirements

Create the JavaScript code that satisfies the following requirements.

1. Select all required HTML elements using the DOM.
2. Register a **click** event for each button.
3. When the **Blue** button is clicked:
   - Change the text color to blue.
4. When the **Green** button is clicked:
   - Change the text color to green.
5. When the **Red** button is clicked:
   - Change the text color to red.
6. When the **Reset** button is clicked:
   - Restore the original text color.
7. The user must be able to click the buttons in any order, and the text color
   should always update correctly.

---

# HTML Provided

The HTML and CSS files are already provided.

Students only need to implement the JavaScript solution.

---

# Expected Behavior

Initial state:

```
Message color: Black
```

User clicks **Blue**:

```
Message color: Blue
```

User clicks **Green**:

```
Message color: Green
```

User clicks **Red**:

```
Message color: Red
```

User clicks **Reset**:

```
Message color: Black
```

The process can be repeated as many times as desired.

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
- Responding to several user actions
- Dynamically modifying CSS properties
- Updating the same element from different events
- Writing organized and reusable event-driven code