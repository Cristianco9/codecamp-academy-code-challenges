# Code Challenge: Build a Web Application Dashboard with Flexbox

## Challenge Overview

In this challenge, you will create a dashboard layout using HTML and
CSS Flexbox.

The goal is to practice building multi-section layouts, working with
sidebars, navigation menus, content cards, and dashboard panels using
Flexbox.

You will create a web application dashboard that displays navigation
options, project information, active tasks, system alerts, and summary
cards.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating complex page layouts with Flexbox
* Building sidebars and navigation menus
* Organizing content into reusable cards
* Using nested Flexbox containers
* Applying shadows and border radius
* Working with lists and sections
* Creating dashboard-style interfaces

---

## Requirements

Create the following files:

```text
index.html
challenge-13.css
```

---

## HTML Structure

Build a dashboard page containing:

1. Header
2. Main Content Area
3. Footer

---

## Header Section

Create a header containing:

```text
Web App Dashboard
```

Use:

```html
<header class="header">
</header>
```

---

## Main Content

Create a main container using:

```html
<main class="main">
</main>
```

Inside the main container create:

```html
<section class="top-section">
</section>

<section class="bottom-section">
</section>
```

---

## Top Section

The top section must contain:

### Sidebar

Create a sidebar using:

```html
<aside class="sidebar">
</aside>
```

Add the following heading:

```text
Navigation
```

Create an unordered list containing:

```text
Dashboard
Users
Reports
Settings
```

Use:

```html
<ul class="menu">
</ul>
```

---

### Content Area

Create a content section using:

```html
<section class="content">
</section>
```

Inside the content area create three content boxes.

Use:

```html
<div class="content-box">
</div>
```

---

### Content Box 1

Add:

```text
Project Overview
```

Include a paragraph describing project progress and performance.

---

### Content Box 2

Add:

```text
Active Tasks
```

Include a paragraph describing current tasks and deadlines.

---

### Content Box 3

Add:

```text
System Alerts
```

Include a paragraph describing notifications and updates.

---

## Bottom Section

Create three dashboard cards.

Use:

```html
<div class="bottom-box">
</div>
```

---

### Bottom Box 1

Add:

```text
Recent Activity
```

Include a short description about recent user actions.

---

### Bottom Box 2

Add:

```text
Performance
```

Include a short description about system performance.

---

### Bottom Box 3

Add:

```text
Upcoming Releases
```

Include a short description about future releases.

---

## Footer Section

Create a footer containing:

```text
© 2026 Internal Dashboard System
```

Use:

```html
<footer class="footer">
</footer>
```

---

## CSS Requirements

Inside the `challenge-13.css` file, add the following styles.

### Universal Selector

Apply:

* `box-sizing: border-box`
* `margin: 0`
* `padding: 0`

---

### Body

Apply:

* Light gray background color
* Segoe UI font family
* Flexbox layout
* Center the page horizontally

---

### Container

Apply:

* Width of 900px
* Vertical Flexbox layout
* Gap between sections

Use:

```css
.container
```

---

### Header

Apply:

* Teal background color
* White text color
* Padding
* Rounded corners

Use:

```css
.header
```

---

### Main

Apply:

* Vertical Flexbox layout
* Gap between sections

Use:

```css
.main
```

---

### Top Section

Apply:

* Horizontal Flexbox layout
* Gap between items

Use:

```css
.top-section
```

---

### Sidebar

Apply:

* Width of 220px
* Dark blue-gray background color
* White text color
* Padding
* Rounded corners

Use:

```css
.sidebar
```

---

### Menu

Apply:

* Remove list bullets

Use:

```css
.menu
```

---

### Menu Items

Apply:

* Vertical padding
* Bottom border

Use:

```css
.menu li
```

---

### Content Area

Apply:

* Flexbox layout
* Gap between cards
* Flexible width

Use:

```css
.content
```

---

### Content Boxes

Apply:

* White background color
* Padding
* Rounded corners
* Box shadow
* Vertical Flexbox layout

Use:

```css
.content-box
```

---

### Bottom Section

Apply:

* Horizontal Flexbox layout
* Gap between cards

Use:

```css
.bottom-section
```

---

### Bottom Boxes

Apply:

* White background color
* Padding
* Rounded corners
* Box shadow
* Vertical Flexbox layout

Use:

```css
.bottom-box
```

---

### Footer

Apply:

* Center-aligned text
* Padding
* Light gray background color
* Rounded corners

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
* `<aside>`
* `<footer>`
* `<ul>`
* `<li>`
* `<div>`
* `<h1>`
* `<h2>`
* `<h3>`
* `<p>`

### CSS Concepts

* Flexbox
* Nested Flexbox layouts
* `display: flex`
* `flex-direction`
* `gap`
* `padding`
* `border-radius`
* `box-shadow`
* `list-style`
* `background-color`
* `color`

---

## Expected Outcome

When the page is opened in the browser, users should see:

* A dashboard header
* A navigation sidebar
* Three content cards
* Three summary cards
* A footer
* Consistent spacing and alignment
* A professional dashboard layout

---

## Submission Instructions

1. Create the files `index.html` and `challenge-13.css`.
2. Link the CSS file to the HTML document.
3. Implement all required sections.
4. Verify that all Flexbox layouts work correctly.
5. Validate your HTML and CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria               | Points |
| ---------------------- | ------ |
| HTML Structure         | 20     |
| Sidebar Navigation     | 15     |
| Content Cards          | 20     |
| Bottom Dashboard Cards | 15     |
| Flexbox Layout         | 20     |
| Code Organization      | 10     |
| Total                  | 100    |

## Goal

Build a professional dashboard interface while practicing Flexbox,
nested layouts, reusable components, navigation menus, and content
organization.
