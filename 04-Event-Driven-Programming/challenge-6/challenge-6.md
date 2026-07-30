# Challenge 6: Live Character Counter with Input Validation

## Introduction

Modern web applications often provide users with immediate feedback while they
type. Social media platforms, messaging applications, and online forms display
the number of characters entered, enforce maximum limits, and notify users when
their input is invalid.

This type of functionality is a classic example of **event-driven programming**,
where the application continuously responds to user actions through events such
as keyboard input.

In this challenge, you will build a **live character counter** that updates in
real time, validates user input, and dynamically changes the appearance of the
page based on the current state.

Unlike previous challenges, this exercise introduces the **`input` event**,
real-time validation, multiple DOM updates, and dynamic CSS class management.

---

# Problem Description

You are developing the message editor for a messaging application.

The page already contains:

- A heading
- A `<textarea>` where users can type a message
- A paragraph showing the current number of characters
- A paragraph displaying the current status

The application allows a maximum of **100 characters**.

As the user types, the page must immediately update the character counter and
display the appropriate status message.

---

# Requirements

Create the JavaScript code that satisfies the following requirements.

## 1. DOM Selection

Select all required HTML elements using the DOM.

---

## 2. Register the Event

Register an **input** event on the `<textarea>`.

The application must respond every time the user:

- types
- deletes characters
- pastes text
- cuts text

---

## 3. Character Counter

Whenever the content changes:

- Count the number of characters currently written.
- Update the counter on the page.

Example:

```
Characters: 42 / 100
```

---

## 4. Status Messages

Display one of the following messages depending on the current number of
characters.

| Characters | Status |
|------------|--------|
| 0 | Start typing... |
| 1–80 | Looking good |
| 81–100 | Almost at the limit |
| More than 100 | Character limit exceeded |

---

## 5. Dynamic Styling

The CSS already provides the following classes:

```css
.normal
.warning
.error
```

Your program must:

- Apply the correct class according to the current state.
- Remove the previous class before applying a new one.

---

## 6. Validation

If the user exceeds **100 characters**:

- The status message must become:

```
Character limit exceeded
```

- The status paragraph must receive the `.error` class.

---

## 7. Empty Message

If the textarea becomes empty:

- Display:

```
Start typing...
```

- Reset the styling to `.normal`.

---

# HTML and CSS

The HTML and CSS files are already provided.

Students only need to implement the JavaScript solution.

---

# Expected Behavior

Initial page:

```
Characters: 0 / 100

Status:
Start typing...
```

User types:

```
Hello everyone!
```

Display:

```
Characters: 15 / 100

Status:
Looking good
```

User reaches 92 characters:

```
Characters: 92 / 100

Status:
Almost at the limit
```

User reaches 108 characters:

```
Characters: 108 / 100

Status:
Character limit exceeded
```

User deletes everything:

```
Characters: 0 / 100

Status:
Start typing...
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

- The `input` event
- Reading user input with `value`
- Using the `length` property
- Real-time DOM updates
- Conditional logic
- Updating multiple HTML elements
- Managing CSS classes dynamically
- Using `classList.add()`
- Using `classList.remove()`
- Building responsive user interfaces with JavaScript