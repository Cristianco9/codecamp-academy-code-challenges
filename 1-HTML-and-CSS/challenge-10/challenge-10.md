# Code Challenge: Create a Photo Gallery Website

## Challenge Overview

In this challenge, you will create a photo gallery website using HTML
and CSS.

The goal is to practice working with images, CSS styling, Flexbox,
layout organization, shadows, colors, and responsive image galleries.

You will build a gallery page that displays multiple images and
includes information about the gallery.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating a complete HTML document
* Linking an external CSS file
* Working with images
* Using Flexbox layouts
* Applying shadows and colors
* Creating reusable CSS classes
* Building a horizontal image gallery
* Organizing content into sections

---

## Requirements

Create the following files:

```text id="7q6s8p"
index.html
challenge-10.css
```

---

## HTML Structure

Build a photo gallery website containing the following sections.

### Header

The header must contain:

1. A page title

Example:

```text id="x0e7np"
Photo Gallery
```

2. A short description

Example:

```text id="7m8jwv"
A collection of random moments and scenes
```

Use the following classes:

```text id="zv7x1s"
header
title
subtitle
```

---

## Main Content

Create a `<main>` element containing two sections.

---

### Section 1: Image Collection

Create a section containing:

1. A heading titled:

```text id="y1f2dn"
Image Collection
```

2. A paragraph describing the gallery.

3. A gallery container using:

```html id="f1f4rj"
<div class="gallery">
</div>
```

4. Add six images inside the gallery.

Use the following image URLs:

```text id="5b8jkh"
https://picsum.photos/id/180/200/140
https://picsum.photos/id/250/200/140
https://picsum.photos/id/300/200/140
https://picsum.photos/id/400/200/140
https://picsum.photos/id/450/200/140
https://picsum.photos/id/500/200/140
```

Each image must use:

```html id="0t8kqj"
<img
    class="product-image"
    src=""
    alt="Random photo"
>
```

---

### Section 2: About This Gallery

Create a section containing:

1. A heading titled:

```text id="f8s5lm"
About This Gallery
```

2. Two paragraphs explaining:

* The purpose of the gallery
* How the images are used for learning
* Why image galleries are useful in web development

Use the classes:

```text id="8v5txm"
content
section-title
text
```

---

## Footer

Create a footer containing:

```text id="k7q2rm"
© 2026 Photo Gallery
```

Use the classes:

```text id="g5r9wy"
footer
footer-text
```

---

## CSS Requirements

Inside the `challenge-10.css` file, add styles for the following
selectors.

### Universal Selector

Apply:

* `box-sizing: border-box`
* `margin: 0`
* `padding: 0`

---

### Body

Apply:

* Verdana font
* Light blue background color
* Width of 900px
* Center the page horizontally

---

### Header

Apply:

* Dark blue background color
* White text color
* Center-aligned text
* Height of 70px
* Box shadow

---

### Title

Apply:

* Font size of 30px

---

### Subtitle

Apply:

* Top margin of 5px
* Font size of 14px
* Light blue text color

---

### Content Section

Apply:

* White background color
* Top margin
* Box shadow

---

### Section Title

Apply:

* Font size of 20px
* Dark blue text color

---

### Text

Apply:

* Font size of 14px
* Dark gray text color

---

### Gallery

Apply:

* Flexbox layout
* Horizontal scrolling
* Gap between images

---

### Product Image

Apply:

* Box shadow

---

### Footer

Apply:

* Dark blue background color
* White text color
* Center-aligned text
* Height of 20px
* Box shadow

---

### Footer Text

Apply:

* Font size of 16px

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
* `<div>`
* `<img>`
* `<footer>`
* `<h1>`
* `<h2>`
* `<p>`

### CSS Concepts

* Universal selector (`*`)
* Class selectors
* Flexbox
* `box-sizing`
* `margin`
* `padding`
* `width`
* `display: flex`
* `gap`
* `overflow-x`
* `box-shadow`
* `background-color`
* `font-size`
* `color`
* `text-align`

---

## Expected Outcome

When the page is opened in the browser, users should see:

* A styled gallery header
* A horizontal image gallery
* Six images displayed in a row
* Information about the gallery
* Consistent styling throughout the page
* A styled footer

---

## Submission Instructions

1. Create the files `index.html` and `challenge-10.css`.
2. Link the CSS file to the HTML document.
3. Add all six images using the provided URLs.
4. Verify that the gallery scrolls horizontally.
5. Validate your HTML and CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria            | Points |
| ------------------- | ------ |
| HTML Structure      | 20     |
| CSS Styling         | 25     |
| Image Gallery       | 20     |
| Flexbox Usage       | 15     |
| External Stylesheet | 10     |
| Code Organization   | 10     |
| Total               | 100    |

## Goal

Build a complete photo gallery website while practicing HTML images,
Flexbox layouts, CSS styling, shadows, colors, and content
organization.
