# Challenge 23: Rectangle Area Calculator

## Introduction

In software systems used in construction, architecture, and engineering, it is
common to perform geometric calculations such as area, perimeter, and volume.

These calculations are typically implemented using **functions**, which allow
us to reuse logic, keep code organized, and return computed results.

In this challenge, you will create a JavaScript function that calculates the
**area of a rectangle**, one of the most fundamental geometric operations in
programming.

---

## Problem Description

You are developing a utility tool for a construction company. The system must
calculate the area of rectangular spaces such as rooms, floors, and land plots.

The formula for the area of a rectangle is:
area = width × height

---

## Requirements

1. Create a function named `calculateArea`.
2. The function must receive two parameters:
   - `width` (number)
   - `height` (number)

3. The function must:
   - Compute the area using the formula
   - Return the resulting value

---

## Input Example

```javascript
width = 5;
height = 3;
```
---

## Output Example

```
area = 15;
```

---

## Expected Behavior

When the function is called with valid numeric inputs, it should return the
correct area of the rectangle.

Example:

```Javascript
calculateArea(5, 3); // 15
```

---

Notes

- Do not use user input functions such as `prompt`, `alert`, or `readline`
- All values must be passed directly as arguments to the function
- Focus on function structure, parameters, and return values