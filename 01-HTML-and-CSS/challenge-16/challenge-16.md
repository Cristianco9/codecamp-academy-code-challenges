# Code Challenge: Create a Color Palette Using CSS Variables

## Challenge Overview

In this challenge, you will learn how to use CSS Variables
(Custom Properties) to create reusable and maintainable styles.

The HTML structure and most of the CSS are already provided. Your task
is to define CSS variables and use them throughout the stylesheet to
control colors, shadows, and visual consistency.

This challenge focuses on understanding how CSS variables help reduce
repetition and make styles easier to maintain.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating CSS variables
* Using the `:root` selector
* Accessing variables with `var()`
* Creating reusable color systems
* Applying variables to backgrounds and shadows
* Building maintainable CSS code

---

## Provided Files

You will receive:

```text
index.html
challenge-16.css
```

The HTML structure has already been completed.

Do not modify the HTML file.

---

## Your Task

Create CSS variables inside the `:root` selector and use them
throughout the stylesheet.

The page contains:

* A gradient background
* A main container
* Eight colored boxes
* Shared shadow styles

Your goal is to replace repeated values with CSS variables.

---

## Step 1: Create Global Variables

Inside the `:root` selector, create variables for:

### Main Colors

Create variables for:

```text
Main Blue
Main Purple
```

These colors will be used in the page background gradient.

---

### Shadow Variable

Create a variable for the box shadow.

Example:

```css
--main-shadow
```

This variable will be used by:

* The main container
* The colored boxes

---

### Box Colors

Create eight color variables:

```css
--b-color-1
--b-color-2
--b-color-3
--b-color-4
--b-color-5
--b-color-6
--b-color-7
--b-color-8
```

Each variable should contain a different color.

---

## Step 2: Apply Variables

Use the variables inside the stylesheet.

---

### Body Background

Apply the color variables inside a linear gradient.

Use:

```css
var(--main-blue)
var(--main-purple)
```

Expected result:

* A gradient background using variables.

---

### Main Container

Apply the shadow variable.

Use:

```css
var(--main-shadow)
```

Expected result:

* Consistent shadow styling.

---

### Boxes

Apply:

```css
var(--main-shadow)
```

to every box.

Expected result:

* All boxes share the same shadow style.

---

## Step 3: Assign Colors to Each Box

Use the color variables for the following classes:

```css
.b-1
.b-2
.b-3
.b-4
.b-5
.b-6
.b-7
.b-8
```

Example:

```css
background-color: var(--b-color-1);
```

Each box should use its corresponding variable.

---

## Technical Requirements

Your solution must use:

### CSS Concepts

* `:root`
* CSS Variables
* `var()`
* `background-color`
* `linear-gradient`
* `box-shadow`

### HTML Elements

* `<html>`
* `<head>`
* `<body>`
* `<main>`
* `<div>`

---

## Expected Outcome

When the page is opened in the browser, users should see:

* A gradient page background
* A centered white container
* Eight colored boxes
* Consistent shadows
* Colors controlled through CSS variables

---

## Benefits of CSS Variables

Using CSS variables allows developers to:

* Reuse values throughout a project
* Update styles from a single location
* Create design systems
* Improve code maintainability
* Reduce duplicated code

---

## Submission Instructions

1. Open the provided CSS file.
2. Create all required variables inside `:root`.
3. Replace repeated values with variables.
4. Verify that all boxes display correctly.
5. Validate your CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria              | Points |
| --------------------- | ------ |
| CSS Variables Created | 30     |
| Correct Use of var()  | 25     |
| Gradient Variables    | 15     |
| Shadow Variables      | 15     |
| Box Color Variables   | 10     |
| Code Organization     | 5      |
| Total                 | 100    |

## Goal

Build a colorful layout using CSS Variables while learning how to
create reusable, maintainable, and scalable CSS code.
