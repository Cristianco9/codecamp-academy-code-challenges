# Code Challenge: Build a Flexbox Layout Dashboard

## Challenge Overview

In this challenge, you will recreate a complete page layout using CSS
Flexbox.

The goal is to practice positioning elements with Flexbox, controlling
alignment, spacing, direction, and creating structured page layouts
using containers and reusable components.

You will build a page that contains a header, a main content area, and
a footer using only HTML and CSS.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating page layouts with Flexbox
* Using flex containers and flex items
* Working with `flex-direction`
* Using `justify-content`
* Using `align-items`
* Applying spacing with `gap`
* Creating reusable CSS classes
* Organizing complex layouts

---

## Requirements

Create the following files:

```text
index.html
challenge-11.css
```

---

## HTML Structure

Build a page containing three main sections:

1. Header
2. Main Content
3. Footer

---

## Header Section

Create a header container using:

```html
<header class="header-container">
</header>
```

Inside the header, add:

* Five empty div elements

Example:

```html
<div class="header-div"></div>
```

The divs should be displayed vertically inside the header.

---

## Main Section

Create a main container using:

```html
<main class="main-container">
</main>
```

Inside the main container, create two sections.

---

### Left Section

Create:

```html
<section class="section-container-left">
</section>
```

Inside this section add:

* Four empty div elements

Example:

```html
<div class="sec-div"></div>
```

The divs should be displayed in a horizontal row.

---

### Right Section

Create:

```html
<section class="section-container-right">
</section>
```

Inside this section add:

* Four empty div elements

Example:

```html
<div class="sec-div"></div>
```

The divs should be displayed in reverse vertical order.

---

## Footer Section

Create a footer container using:

```html
<footer class="footer-container">
</footer>
```

Inside the footer add:

* Five empty div elements

Example:

```html
<div class="footer-div"></div>
```

The divs should be displayed in a horizontal row.

---

## CSS Requirements

Inside the `challenge-11.css` file, add the following styles.

---

### Universal Selector

Apply:

* `box-sizing: border-box`
* `padding: 0`
* `margin: 0`

---

### Body Container

Apply:

* Full viewport width
* Full viewport height
* Dark gray background color
* Flexbox layout
* Vertical direction
* Gap between sections
* Center alignment

Use:

```css
.body-container
```

---

### Header Container

Apply:

* Blue background color
* Width of 900px
* Height of 200px
* Flexbox layout
* Vertical direction
* Center alignment
* Gap between items

Use:

```css
.header-container
```

---

### Header Div

Apply:

* Width of 200px
* Height of 25px
* White background color
* Rounded corners

Use:

```css
.header-div
```

---

### Main Container

Apply:

* White background color
* Width of 900px
* Height of 900px
* Flexbox layout
* Vertical direction
* Even spacing between sections
* Center alignment

Use:

```css
.main-container
```

---

### Left Section

Apply:

* Width of 500px
* Height of 250px
* Blue background color
* Rounded corners
* Horizontal Flexbox layout
* Even spacing between items
* Center alignment

Use:

```css
.section-container-left
```

---

### Right Section

Apply:

* Width of 500px
* Height of 500px
* Blue background color
* Rounded corners
* Vertical reverse Flexbox layout
* Even spacing between items
* Center alignment

Use:

```css
.section-container-right
```

---

### Section Div

Apply:

* Width of 90px
* Height of 90px
* White background color
* Rounded corners

Use:

```css
.sec-div
```

---

### Footer Container

Apply:

* Blue background color
* Width of 900px
* Height of 150px
* Horizontal Flexbox layout
* Even spacing between items
* Center alignment
* Gap between items
* Bottom padding

Use:

```css
.footer-container
```

---

### Footer Div

Apply:

* Width of 80px
* Height of 80px
* White background color
* Rounded corners

Use:

```css
.footer-div
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

### CSS Concepts

* Universal selector
* Flexbox
* `display: flex`
* `flex-direction`
* `justify-content`
* `align-items`
* `gap`
* `width`
* `height`
* `padding`
* `background-color`
* `border-radius`

---

## Expected Outcome

When the page is opened in the browser, users should see:

* A blue header containing five white blocks
* A large main section
* A horizontal Flexbox section
* A reverse vertical Flexbox section
* A blue footer containing five white blocks
* Consistent spacing and alignment throughout the page

---

## Submission Instructions

1. Create the files `index.html` and `challenge-11.css`.
2. Link the CSS file to the HTML document.
3. Implement all required containers and divs.
4. Verify that all Flexbox layouts work correctly.
5. Validate your HTML and CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria          | Points |
| ----------------- | ------ |
| HTML Structure    | 20     |
| Flexbox Layouts   | 30     |
| Header Section    | 10     |
| Main Section      | 20     |
| Footer Section    | 10     |
| Code Organization | 10     |
| Total             | 100    |

## Goal

Build a complete Flexbox layout that demonstrates your understanding of
Flexbox containers, alignment, spacing, direction, and responsive page
structure.
