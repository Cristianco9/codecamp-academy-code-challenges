# Code Challenge: Responsive Flexbox Layout with Media Queries

## Challenge Overview

In this challenge, you will create responsive layouts using Flexbox,
CSS Variables, and Media Queries.

The HTML structure and base CSS have already been provided. Your task
is to create the media queries that modify the layout, colors, and box
sizes based on the screen size.

This challenge focuses on understanding responsive design and how
different breakpoints can completely change the appearance of a page.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating Media Queries
* Working with CSS Variables
* Building responsive Flexbox layouts
* Modifying layouts at different breakpoints
* Changing colors based on screen size
* Adjusting component sizes responsively
* Following mobile-first design concepts

---

## Provided Files

You will receive:

```text
index.html
challenge-17.css
```

The HTML structure and base CSS have already been completed.

Do not modify the HTML file.

---

## Your Task

Create Media Queries that modify:

* Page background colors
* Container layout direction
* Box dimensions
* Box colors

The page contains:

* A container
* Four boxes
* CSS Variables defined inside `:root`

Your goal is to make the page look different at each breakpoint.

---

## Breakpoint 1: Small Devices

Create a media query for screen sizes between:

```css
300px and 600px
```

### Requirements

Change the page background color.

Resize all boxes to:

```css
width: 30rem;
height: 10rem;
```

Assign the following colors:

| Box   | Variable    |
| ----- | ----------- |
| Box 1 | `--color-1` |
| Box 2 | `--color-2` |
| Box 3 | `--color-3` |
| Box 4 | `--color-4` |

Expected layout:

* Vertical arrangement
* Large horizontal boxes
* Dark page background

---

## Breakpoint 2: Medium Devices

Create a media query for screen sizes between:

```css
601px and 900px
```

### Requirements

Change the page background color.

Change the container layout to:

```css
flex-direction: row;
```

Resize all boxes to:

```css
width: 20rem;
height: 20rem;
```

Assign the following colors:

| Box   | Variable    |
| ----- | ----------- |
| Box 1 | `--color-5` |
| Box 2 | `--color-8` |
| Box 3 | `--color-3` |
| Box 4 | `--color-7` |

Expected layout:

* Horizontal arrangement
* Medium-sized squares
* Light page background

---

## Breakpoint 3: Large Devices

Create a media query for screen sizes between:

```css
901px and 1200px
```

### Requirements

Change the page background color.

Keep the container in:

```css
flex-direction: row;
```

Resize all boxes to:

```css
width: 25rem;
height: 25rem;
```

Assign the following colors:

| Box   | Variable    |
| ----- | ----------- |
| Box 1 | `--color-1` |
| Box 2 | `--color-3` |
| Box 3 | `--color-5` |
| Box 4 | `--color-8` |

Expected layout:

* Horizontal arrangement
* Larger square boxes
* Red page background

---

## Breakpoint 4: Extra Large Devices

Create a media query for screen sizes larger than:

```css
1201px
```

### Requirements

Change the page background color.

Keep the container in:

```css
flex-direction: row;
```

Resize all boxes to:

```css
width: 30rem;
height: 30rem;
```

Assign the following colors:

| Box   | Variable    |
| ----- | ----------- |
| Box 1 | `--color-8` |
| Box 2 | `--color-2` |
| Box 3 | `--color-1` |
| Box 4 | `--color-3` |

Expected layout:

* Horizontal arrangement
* Very large square boxes
* Green page background

---

## CSS Variables

The following variables are already available:

```css
--color-1
--color-2
--color-3
--color-4
--color-5
--color-6
--color-7
--color-8
```

Use these variables when assigning colors.

Do not use hardcoded color values.

---

## Technical Requirements

Your solution must include:

### CSS Concepts

* CSS Variables
* Media Queries
* Flexbox
* `flex-direction`
* `background-color`
* `width`
* `height`
* `gap`

### Responsive Design

* Four breakpoints
* Different layouts per breakpoint
* Different color schemes per breakpoint

---

## Expected Outcome

### Small Devices

* Vertical layout
* Wide horizontal boxes
* Dark background

### Medium Devices

* Horizontal layout
* Medium square boxes
* Light background

### Large Devices

* Horizontal layout
* Large square boxes
* Red background

### Extra Large Devices

* Horizontal layout
* Extra large square boxes
* Green background

---

## Submission Instructions

1. Open the provided CSS file.
2. Create all required Media Queries.
3. Apply the correct colors using CSS Variables.
4. Test each breakpoint using browser developer tools.
5. Validate your CSS code.
6. Upload your solution to GitHub.
7. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria                  | Points |
| ------------------------- | ------ |
| Small Device Layout       | 20     |
| Medium Device Layout      | 20     |
| Large Device Layout       | 20     |
| Extra Large Device Layout | 20     |
| CSS Variables Usage       | 10     |
| Code Organization         | 10     |
| Total                     | 100    |

## Goal

Build a fully responsive Flexbox layout that changes size, colors, and
structure across multiple screen sizes while practicing Media Queries
and CSS Variables.
