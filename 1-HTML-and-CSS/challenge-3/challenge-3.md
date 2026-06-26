# Code Challenge: Create an Internet Plans Comparison Table

## Challenge Overview

In this challenge, you will create a simple web page that displays a
comparison table of home internet plans.

The goal is to practice creating and organizing HTML tables using
semantic table elements such as `<thead>`, `<tbody>`, and `<tfoot>`.

You will build a table that allows users to compare different internet
service providers, their speeds, and monthly costs.

---

## Learning Objectives

By completing this challenge, you will practice:

* Creating HTML tables
* Using table rows and columns
* Organizing data with `<thead>`, `<tbody>`, and `<tfoot>`
* Using table headings
* Using the `colspan` attribute
* Structuring a simple HTML page

---

## Requirements

Create a file named:

```text
index.html
```

Build a web page that contains information about internet plans.

---

## Page Title

Add a main heading with the text:

```text
Internet Plans
```

Below the heading, add a short paragraph explaining the purpose of the
table.

Example:

```text
The table below compares home internet plans.
```

---

## Internet Plans Table

Create a table with three columns:

1. Provider
2. Speed
3. Monthly Cost

---

## Table Header

The table header must contain the following columns:

| Provider | Speed | Monthly Cost |
| -------- | ----- | ------------ |

Use:

```html
<thead>
```

to create the header section.

---

## Table Body

Inside the table body, add at least two internet providers.

Example:

| Provider | Speed    | Monthly Cost |
| -------- | -------- | ------------ |
| FiberNet | 300 Mbps | $40          |
| SpeedWeb | 100 Mbps | $25          |

Use:

```html
<tbody>
```

to organize the data rows.

---

## Table Footer

Create a footer row that displays a note about the plans.

Example:

```text
Installation not included
```

The footer should span across all columns using the `colspan`
attribute.

Use:

```html
<tfoot>
```

for the footer section.

---

## Technical Requirements

Your solution must use:

* `<html>`
* `<head>`
* `<body>`
* `<main>`
* `<section>`
* `<h1>`
* `<p>`
* `<table>`
* `<thead>`
* `<tbody>`
* `<tfoot>`
* `<tr>`
* `<th>`
* `<td>`
* `colspan`

---

## Expected Outcome

When the page is opened in the browser, users should see:

* A page title
* A short description
* A comparison table of internet plans
* Multiple providers and pricing information
* A footer note below the table

---

## Submission Instructions

1. Create the file `index.html`.
2. Add all required elements.
3. Verify that the table is displayed correctly.
4. Validate your HTML code.
5. Upload your solution to GitHub.
6. Share the repository link in the class Discord channel.

---

## Evaluation Criteria

| Criteria          | Points |
| ----------------- | ------ |
| HTML Structure    | 20     |
| Table Header      | 20     |
| Table Body        | 20     |
| Table Footer      | 20     |
| Code Organization | 20     |
| Total             | 100    |

## Goal

Build a well-structured HTML table that compares internet plans while
practicing table elements and data organization.
