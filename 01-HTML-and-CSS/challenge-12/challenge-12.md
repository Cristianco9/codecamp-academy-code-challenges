# Code Challenge: Build a Blog Layout with Flexbox

## Challenge Overview

In this challenge, you will create a blog layout using HTML and CSS
Flexbox.

The goal is to practice creating multi-column layouts, organizing
content with Flexbox containers, and styling page sections using CSS.

You will build a simple blog page that contains a header, sidebar,
content area, and footer.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating page layouts with Flexbox
* Building a sidebar and content area
* Working with Flexbox containers
* Using spacing and alignment properties
* Applying colors and shadows
* Organizing content into sections
* Creating reusable CSS classes

---

## Requirements

Create the following files:

```text
index.html
challenge-12.css
```

---

## HTML Structure

Build a blog layout containing the following sections:

1. Header
2. Sidebar
3. Content Area
4. Footer

---

## Header Section

Create a header containing:

```text
My Blog
```

Use the following classes:

```text
header
title
```

---

## Main Section

Create a main container using:

```html
<main class="main">
</main>
```

Inside the main container create two sections:

### Sidebar

Create a sidebar using:

```html
<section class="sidebar">
</section>
```

Inside the sidebar add three boxes:

```text
Profile
Categories
Archives
```

Each box must use:

```html
<div class="box"></div>
```

---

### Content Area

Create a content section using:

```html
<section class="content">
</section>
```

Inside the content area add three article cards:

```text
Article 1
Article 2
Article 3
```

Each article must use:

```html
<div class="card"></div>
```

---

## Footer Section

Create a footer containing:

```text
© 2026 Blog Layout
```

Use:

```html
<footer class="footer">
</footer>
```

---

## CSS Requirements

Inside the `challenge-12.css` file, create the following styles.

---

### Universal Selector

Apply:

* `box-sizing: border-box`
* `margin: 0`
* `padding: 0`

---

### Body

Apply:

* Segoe UI font family
* Light gray background color
* Width of 900px
* Height of 900px
* Flexbox layout
* Vertical direction
* Center the page
* Gap between sections

Use:

```css
body
```

---

### Header

Apply:

* Dark blue background color
* White text color
* Width of 900px
* Height of 90px
* Flexbox layout
* Center alignment

Use:

```css
.header
```

---

### Main Container

Apply:

* Width of 900px
* Height of 300px
* Horizontal Flexbox layout
* Even spacing between sections
* Center alignment
* Gap between sections

Use:

```css
.main
```

---

### Sidebar

Apply:

* Light gray background color
* Width of 300px
* Flexbox layout
* Vertical direction
* Space between items
* Gap between boxes

Use:

```css
.sidebar
```

---

### Content Area

Apply:

* Light blue-gray background color
* Width of 600px
* Flexbox layout
* Vertical direction
* Gap between cards

Use:

```css
.content
```

---

### Sidebar Boxes

Apply:

* Gray background color
* White text color
* Center-aligned text
* Width of 300px
* Height of 90px

Use:

```css
.box
```

---

### Content Cards

Apply:

* White background color
* Dark text color
* Center-aligned text
* Height of 90px
* Box shadow

Use:

```css
.card
```

---

### Footer

Apply:

* Dark blue background color
* White text color
* Width of 900px
* Height of 60px
* Flexbox layout
* Center alignment

Use:

```css
.footer
```

---

## Technical Requirements

Your solution must use:

### HTML Elements

* `<html>`
* `<head>`
* `<body>`
* `<header>`
* `<main>`
* `<section>`
* `<footer>`
* `<div>`
* `<h1>`
* `<p>`

### CSS Concepts

* Flexbox
* `display: flex`
* `flex-direction`
* `justify-content`
* `align-items`
* `gap`
* `width`
* `height`
* `background-color`
* `color`
* `box-shadow`

---

## Expected Outcome

When the page is opened in the browser, users should see:

* A dark header with the blog title
* A sidebar containing three navigation boxes
* A content area containing three article cards
* A dark footer
* Consistent spacing and alignment throughout the page

---

## Submission Instructions

1. Create the files `index.html` and `challenge-12.css`.
2. Link the CSS file to the HTML document.
3. Implement all required sections and classes.
4. Verify that the Flexbox layout works correctly.
5. Validate your HTML and CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria          | Points |
| ----------------- | ------ |
| HTML Structure    | 20     |
| Flexbox Layout    | 30     |
| Sidebar Section   | 15     |
| Content Section   | 15     |
| CSS Styling       | 10     |
| Code Organization | 10     |
| Total             | 100    |

## Goal

Build a complete blog layout using Flexbox while practicing page
structure, alignment, spacing, reusable components, and CSS styling.
