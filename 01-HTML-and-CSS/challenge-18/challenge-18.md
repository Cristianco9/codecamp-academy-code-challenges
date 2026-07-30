# Code Challenge: Responsive Dashboard with CSS Grid

## Challenge Overview

In this challenge, you will create responsive layouts using CSS Grid
and Media Queries.

The HTML structure and base CSS styles have already been provided.
Your task is to create the media queries that adapt the dashboard to
different screen sizes.

This challenge focuses on responsive design, CSS Grid layouts,
breakpoints, and dashboard development.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating responsive layouts with CSS Grid
* Using Media Queries
* Working with Grid Template Areas
* Creating adaptive dashboard layouts
* Managing content across multiple breakpoints
* Following mobile-first development principles

---

## Provided Files

You will receive:

```text
index.html
challenge-18.css
```

The HTML structure and base CSS have already been completed.

Do not modify the HTML file.

---

## Your Task

Create the media queries required to make the dashboard responsive.

The page contains:

* Header
* Sidebar
* Main dashboard area
* Footer
* Analytics cards

Your goal is to adjust the grid layout and card distribution based on
screen size.

---

## Responsive Requirements

### Breakpoint 1: Small Devices

Create a media query for screen sizes between:

```css
300px and 600px
```

### Requirements

Modify the main dashboard section so that:

* The cards are displayed in two columns.
* The layout automatically adjusts card placement.

Expected result:

* Two cards per row.
* Better use of horizontal space.

---

## Breakpoint 2: Tablets

Create a media query for screen sizes between:

```css
601px and 900px
```

### Requirements

Modify the application layout:

* Create a sidebar with a fixed width of `22rem`.
* Place the sidebar beside the main content.
* Keep the header at the top.
* Keep the footer at the bottom.

Use Grid Template Areas to create the layout.

Expected structure:

```text
+-------------------------+
|         Header          |
+-----------+-------------+
| Sidebar   |    Main     |
|           |             |
+-----------+-------------+
|         Footer          |
+-------------------------+
```

Also:

* Display dashboard cards in two columns.

---

## Breakpoint 3: Laptops

Create a media query for screen sizes between:

```css
901px and 1200px
```

### Requirements

Modify the main dashboard section so that:

* Cards are displayed in three columns.

Increase the header title size.

Expected result:

* Three cards per row.
* Larger dashboard title.

---

## Breakpoint 4: Desktop

Create a media query for screen sizes larger than:

```css
1201px
```

### Requirements

Center the dashboard on the page.

Apply:

```css
max-width: 120rem;
margin: 0 auto;
```

Modify the dashboard cards so that:

* Four cards are displayed per row.

Increase the header title size again.

Expected result:

* Full desktop dashboard layout.
* Four cards displayed in a single row.
* Centered application container.

---

## Hints

You may need to use:

```css
@media
grid-template-columns
grid-template-areas
repeat()
max-width
margin
font-size
```

---

## Technical Requirements

Your solution must include:

### CSS Concepts

* CSS Grid
* Media Queries
* Grid Template Areas
* Responsive Layouts
* Mobile-First Design

### Responsive Features

* Four breakpoints
* Adaptive card layouts
* Sidebar repositioning
* Responsive typography

---

## Expected Outcome

### Small Devices

* Single-page dashboard
* Two-column card layout

### Tablets

* Sidebar beside content
* Two-column cards

### Laptops

* Three-column cards
* Larger header title

### Desktop

* Four-column cards
* Centered dashboard
* Largest header title

---

## Important Rules

Do not modify:

* HTML structure
* Existing class names
* Base CSS rules

Only create the required Media Queries.

---

## Submission Instructions

1. Open the provided CSS file.
2. Create all required Media Queries.
3. Test each breakpoint using browser developer tools.
4. Verify that the layout changes correctly.
5. Validate your CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria            | Points |
| ------------------- | ------ |
| Small Device Layout | 20     |
| Tablet Layout       | 25     |
| Laptop Layout       | 20     |
| Desktop Layout      | 20     |
| CSS Grid Usage      | 10     |
| Code Organization   | 5      |
| Total               | 100    |

## Goal

Build a fully responsive analytics dashboard using CSS Grid and Media
Queries while practicing adaptive layouts, Grid Template Areas, and
mobile-first responsive design.
