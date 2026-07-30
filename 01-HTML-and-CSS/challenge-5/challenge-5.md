# Code Challenge: Build a Personal Developer Portfolio

## Challenge Overview

In this challenge, you will create a personal portfolio website using
HTML.

The goal is to practice building a complete web page using semantic
HTML elements, navigation menus, images, videos, tables, links, and
embedded content.

You will create a portfolio that introduces yourself, showcases your
projects, presents your services, and provides contact information.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating a complete HTML document
* Using semantic HTML elements
* Creating navigation menus
* Working with images and videos
* Embedding external content using iframes
* Building tables
* Creating hyperlinks
* Organizing content into sections and articles

---

## Requirements

Create a file named:

```text
index.html
```

Build a personal portfolio website containing the following sections.

---

## Header Section

Inside the `<header>` element, add:

1. Your full name.
2. Your professional title.

Example:

```text
Cristian Camilo
Senior Software Developer
```

3. A navigation menu containing links to:

* About
* Projects
* Services
* Contact

Use:

```html
<nav>
    <ul>
        <li>
            <a href="">
            </a>
        </li>
    </ul>
</nav>
```

---

## About Section

Create a section with the id:

```html
about
```

The section must contain:

1. A heading titled:

```text
About Me
```

2. A short paragraph introducing yourself.

Include information such as:

* Who you are
* What you do
* Your interests in technology

3. An image related to software development.

Use:

```html
<picture>
    <img>
</picture>
```

---

## Projects Section

Create a section with the id:

```html
projects
```

Add at least two projects.

### Project 1

Include:

* Project title
* Project description
* Embedded video using:

```html
<video controls>
    <source>
</video>
```

### Project 2

Include:

* Project title
* Project description
* Embedded map using:

```html
<iframe>
</iframe>
```

---

## Services Section

Create a section with the id:

```html
services
```

Add:

1. A heading titled:

```text
Services and Pricing
```

2. A short description.

3. A table displaying available services.

The table must contain:

| Service | Type | Monthly Cost |
| ------- | ---- | ------------ |

Include at least two services.

Use:

* `<table>`
* `<caption>`
* `<thead>`
* `<tbody>`
* `<tfoot>`

The footer should contain a note about pricing.

Example:

```text
Prices in USD
```

---

## Footer Section

Create a footer containing:

1. Your name.
2. Links to professional profiles.

Examples:

* GitHub
* LinkedIn

Use:

```html
<a href="">
</a>
```

for each link.

---

## Technical Requirements

Your solution must use:

* `<html>`
* `<head>`
* `<body>`
* `<header>`
* `<main>`
* `<section>`
* `<article>`
* `<footer>`
* `<nav>`
* `<ul>`
* `<li>`
* `<a>`
* `<h1>` to `<h3>`
* `<p>`
* `<picture>`
* `<img>`
* `<video>`
* `<source>`
* `<iframe>`
* `<table>`
* `<caption>`
* `<thead>`
* `<tbody>`
* `<tfoot>`
* `<tr>`
* `<th>`
* `<td>`

---

## Expected Outcome

When the page is opened in the browser, users should see:

* A professional portfolio homepage
* A navigation menu
* An About Me section
* A Projects section with media content
* A Services and Pricing table
* Social profile links
* A well-organized page structure

---

## Submission Instructions

1. Create the file `index.html`.
2. Implement all required sections.
3. Verify that all links work correctly.
4. Verify that media elements are displayed correctly.
5. Validate your HTML code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria         | Points |
| ---------------- | ------ |
| HTML Structure   | 20     |
| Navigation Menu  | 15     |
| About Section    | 15     |
| Projects Section | 20     |
| Services Table   | 15     |
| Footer Links     | 15     |
| Total            | 100    |

## Goal

Build a complete personal developer portfolio that demonstrates your
understanding of semantic HTML, multimedia elements, navigation menus,
tables, and page organization.
