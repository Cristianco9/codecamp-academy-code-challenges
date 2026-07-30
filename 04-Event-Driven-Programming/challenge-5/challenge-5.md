# Challenge 5: Interactive To-Do List

## Introduction

Task management applications are among the most common examples of
event-driven programming. Every time a user adds, completes, or removes a task,
the application responds immediately without refreshing the page.

In this challenge, you will build a simple **interactive to-do list** that
allows users to create and manage tasks using JavaScript and the DOM.

Unlike previous challenges that only updated existing elements, this exercise
introduces **dynamic DOM creation**, where new HTML elements are generated
entirely through JavaScript in response to user actions.

---

# Problem Description

You are developing a small productivity application that helps users organize
their daily activities.

The page already contains:

- A heading
- A text input
- An **Add Task** button
- An empty unordered list (`<ul>`)

Users can type the name of a task into the input field and click the button to
add it to the list.

Each task displayed in the list must also include a **Complete** button and a
**Delete** button so users can manage their tasks.

---

# Requirements

Create the JavaScript code that satisfies the following requirements.

## Task Creation

1. Select all required HTML elements using the DOM.
2. Register a **click** event for the **Add Task** button.
3. When the button is clicked:
   - Read the text entered by the user.
   - Ignore empty or whitespace-only input.
   - Create a new `<li>` element.
   - Display the task text inside the list item.
   - Create a **Complete** button.
   - Create a **Delete** button.
   - Append both buttons to the task.
   - Add the completed task to the unordered list.
   - Clear the input field.
   - Return the cursor to the input field.

---

## Complete Task

Each task's **Complete** button must:

- Toggle the completed state of the task.
- Apply a CSS class named `completed`.
- Clicking the button again should remove the completed state.

The provided CSS already defines the appearance of the `completed` class.

---

## Delete Task

Each task's **Delete** button must:

- Remove only its corresponding task from the list.

---

## Validation

The program must **not** create tasks when:

- The input is empty.
- The input contains only spaces.

---

# HTML and CSS

The HTML structure and CSS styles are already provided.

Students only need to implement the JavaScript solution.

---

# Expected Behavior

Initial state:

```
Task list:
(empty)
```

User types:

```
Study JavaScript
```

Clicks **Add Task**:

```
• Study JavaScript
  [Complete] [Delete]
```

User clicks **Complete**:

```
✓ Study JavaScript
```

The task appears with the `completed` style.

User clicks **Complete** again:

```
Study JavaScript
```

The completed style is removed.

User clicks **Delete**:

```
Task removed from the list.
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

- DOM selection
- Event-driven programming
- Creating HTML elements dynamically
- Appending elements to the DOM
- Removing DOM elements
- Registering multiple event listeners
- Using `classList.toggle()`
- Validating user input
- Working with parent-child relationships in the DOM
- Building a small interactive application