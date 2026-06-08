# Code Challenge: Build a Responsive Services Layout

## Challenge Overview

In this challenge, you will improve an existing company services page
by creating responsive layouts using CSS Media Queries.

The HTML structure and base CSS styles are already provided. Your task
is to create the media queries that adapt the layout for mobile,
tablet, laptop, and desktop devices.

This challenge focuses on responsive design, Flexbox layouts, and
mobile-first development.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating responsive layouts
* Using CSS Media Queries
* Working with Flexbox
* Creating multi-column layouts
* Adapting content for different screen sizes
* Following mobile-first design principles
* Improving user experience across devices

---

## Provided Files

You will receive:

```text
index.html
challenge-15.css
```

The HTML structure and base CSS have already been completed.

Do not modify the HTML structure.

---

## Your Task

Create the media queries required to make the layout responsive across
multiple screen sizes.

The page contains:

* A header
* A sidebar navigation menu
* A services section
* A footer

Your goal is to adjust the layout and spacing based on the screen size.

---

## Responsive Requirements

### Mobile Devices

Create a media query for screens with a maximum width of:

```css
30rem
```

Inside this breakpoint:

1. Reduce the size of the main heading.
2. Reduce the padding inside service cards.
3. Reduce the font size inside service cards.

Expected behavior:

* Better readability on small screens.
* Compact card layout.

---

### Large Mobile Devices

Create a media query for screen sizes between:

```css
30.1rem and 60rem
```

Inside this breakpoint:

1. Increase the spacing between service cards.

Expected behavior:

* Improved visual separation between cards.

---

### Tablets and Small Laptops

Create a media query for screen sizes between:

```css
60.1rem and 90rem
```

Inside this breakpoint:

1. Display the sidebar and content side by side.
2. Set a fixed width for the sidebar.
3. Display service cards in rows.
4. Allow cards to wrap onto new lines.
5. Make each card take approximately 45% of the available width.

Expected behavior:

* Two-column page layout.
* Service cards displayed in multiple rows.

---

### Desktop Devices

Create a media query for screen sizes larger than:

```css
90.1rem
```

Inside this breakpoint:

1. Display the sidebar and content side by side.
2. Increase the sidebar width.
3. Display all service cards in a horizontal row.
4. Allow cards to grow evenly.
5. Increase the card font size.

Expected behavior:

* Full desktop dashboard layout.
* Cards distributed evenly across the content area.

---

## Hints

You may need to use:

```css
@media
flex-direction
flex-wrap
flex
gap
width
font-size
padding
```

---

## Technical Requirements

Your solution must include:

* Four media queries
* Mobile-first approach
* Responsive Flexbox layouts
* Responsive typography
* Responsive spacing

Do not modify:

* HTML structure
* Existing class names
* Existing CSS rules outside media queries

---

## Expected Outcome

### Mobile

* Single-column layout
* Compact cards
* Smaller typography

### Large Mobile

* Single-column layout
* Increased spacing between cards

### Tablets and Small Laptops

* Sidebar displayed beside content
* Cards arranged in multiple rows
* Responsive card widths

### Desktop

* Full horizontal layout
* Wider sidebar
* Cards distributed evenly
* Larger typography

---

## Submission Instructions

1. Open the provided CSS file.
2. Create all required media queries.
3. Test the layout using browser developer tools.
4. Verify all breakpoints work correctly.
5. Validate your CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria            | Points |
| ------------------- | ------ |
| Mobile Layout       | 20     |
| Large Mobile Layout | 15     |
| Tablet Layout       | 25     |
| Desktop Layout      | 25     |
| Media Query Syntax  | 10     |
| Code Organization   | 5      |
| Total               | 100    |

## Goal

Create a fully responsive services page using CSS Media Queries and
Flexbox while following modern responsive web design best practices.
