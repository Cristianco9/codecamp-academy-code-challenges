# Code Challenge: Responsive Product Landing Page

## Challenge Overview

In this challenge, you will improve an existing product landing page by
adding responsive behavior using CSS Media Queries.

The HTML structure and base CSS styles are already provided. Your task
is to create the media queries that adapt the layout to different screen
sizes.

This challenge focuses on responsive web design, Flexbox, breakpoints,
and mobile-first development.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating responsive layouts
* Using CSS Media Queries
* Working with breakpoints
* Adapting Flexbox layouts for different devices
* Building mobile-friendly interfaces
* Applying mobile-first design principles

---

## Provided Files

You will receive:

```text
index.html
challenge-14.css
```

The HTML structure and base CSS have already been completed.

Do not modify the HTML structure.

---

## Your Task

Create the media queries needed to make the page responsive across
different screen sizes.

The page contains:

* A Hero section
* A Features section
* A Call-To-Action section
* A Footer

Your job is to adjust the layout and typography at different
breakpoints.

---

## Responsive Requirements

### Small Devices

Create a media query for screens with a minimum width of:

```css
300px
```

Inside this breakpoint:

1. Increase the hero title size.
2. Reduce the padding of feature cards.

Expected behavior:

* Hero title becomes larger.
* Feature cards use slightly less padding.

---

### Large Mobile and Tablet Devices

Create a media query for screen sizes between:

```css
301px and 600px
```

Inside this breakpoint:

1. Display feature cards in rows.
2. Allow cards to wrap to the next line.
3. Center the cards horizontally.
4. Make each card approximately 45% of the available width.

Expected behavior:

* Two cards per row.
* Cards wrap automatically when needed.

---

### Desktop Devices

Create a media query for screen sizes between:

```css
601px and 900px
```

Inside this breakpoint:

1. Display all feature cards in a single row.
2. Distribute cards evenly across the container.
3. Make each card flexible.
4. Limit each card to approximately 24% width.
5. Increase the hero title size.
6. Increase the Call-To-Action heading size.

Expected behavior:

* Four cards displayed side by side.
* Larger typography for desktop users.

---

## Hints

You may need to use:

```css
@media
flex-direction
flex-wrap
justify-content
flex-grow
flex-shrink
flex-basis
flex
max-width
font-size
padding
```

---

## Technical Requirements

Your solution must include:

* Three media queries
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

### Small Screens

* Features displayed vertically
* Comfortable reading experience
* Optimized spacing

### Tablets

* Features displayed in two columns
* Responsive card sizing
* Better use of screen space

### Desktop

* Features displayed in a single row
* Larger headings
* Professional landing page layout

---

## Submission Instructions

1. Open the provided CSS file.
2. Create all required media queries.
3. Test the page using browser developer tools.
4. Verify the layout at different screen sizes.
5. Validate your CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria              | Points |
| --------------------- | ------ |
| Small Device Layout   | 20     |
| Tablet Layout         | 25     |
| Desktop Layout        | 25     |
| Media Query Syntax    | 15     |
| Responsive Typography | 10     |
| Code Organization     | 5      |
| Total                 | 100    |

## Goal

Create a fully responsive product landing page using CSS Media Queries
and Flexbox while following responsive web design best practices.
