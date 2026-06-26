# JavaScript Challenge 2: Age Category Classifier

## Challenge Overview

In this challenge, you will create a JavaScript program that asks the
user for their age and determines their age category.

You will use variables, user input, comparison operators, logical
operators, and conditional statements to solve the problem.

---

## Learning Objectives

By completing this challenge, you will practice:

* Using the `prompt()` function
* Storing data in variables
* Working with comparison operators
* Using logical operators (`&&`)
* Creating `if`, `else if`, and `else` statements
* Displaying messages with `alert()`
* Creating desktop tests
* Designing flowcharts

---

## Provided Files

You will receive:

```text
index.html
```

The HTML file is already complete.

Do not modify the HTML file.

Create a new file named:

```text
challenge-2.js
```

---

## Problem Description

Write a program that asks the user to enter their age.

The program must determine which age category the user belongs to and
display the appropriate message.

---

## Rules

Apply the following conditions:

| Age Range         | Result             |
| ----------------- | ------------------ |
| Less than 13      | You are a child    |
| Between 13 and 17 | You are a teenager |
| 18 or older       | You are an adult   |

Additionally:

* Ages less than 0 are invalid.
* Ages greater than 120 are invalid.
* Non-numeric values are invalid.

---

## Requirements

### Step 1

Ask the user to enter their age.

Example:

```text
Enter your age:
```

---

### Step 2

Store the value in a variable.

Example:

```javascript
var age;
```

---

### Step 3

Validate the user's input.

Check for:

* Negative ages
* Invalid values
* Unrealistic ages

---

### Step 4

Determine the correct category using conditional statements.

Possible outputs:

```text
You are a child
```

```text
You are a teenager
```

```text
You are an adult
```

```text
The user age cannot be less than 0
```

```text
Invalid input. Try again...
```

---

## Desktop Test

After writing your solution, create a desktop test.

| Age Input | Expected Output                    |
| --------- | ---------------------------------- |
| -2        | The user age cannot be less than 0 |
| 4         | You are a child                    |
| 15        | You are a teenager                 |
| 21        | You are an adult                   |
| hello     | Invalid input. Try again...        |

You may add additional test cases.

---

## Flowchart

Create a flowchart representing the program logic.

Example structure:

```text
Start
↓
Ask for age
↓
Store age
↓
Age < 0?
├─ Yes → Display error message
└─ No
     ↓
Age < 13?
├─ Yes → You are a child
└─ No
     ↓
Age <= 17?
├─ Yes → You are a teenager
└─ No
     ↓
Age <= 120?
├─ Yes → You are an adult
└─ No → Invalid input
↓
End
```

You may create the flowchart using:

* Draw.io
* Lucidchart
* Excalidraw
* Hand-drawn diagram

---

## Technical Requirements

Your solution must use:

### JavaScript Concepts

* Variables
* `prompt()`
* `alert()`
* `if`
* `else if`
* `else`
* Comparison operators
* Logical operators (`&&`)

---

## Expected Example

### Input

```text
10
```

### Output

```text
You are a child
```

---

### Input

```text
16
```

### Output

```text
You are a teenager
```

---

### Input

```text
35
```

### Output

```text
You are an adult
```

---

## Submission Instructions

1. Create the JavaScript solution.
2. Complete the desktop test.
3. Create the flowchart.
4. Verify all conditions work correctly.
5. Upload your files to GitHub.
6. Share the repository link in Discord.

---

## Evaluation Criteria

| Criteria          | Points |
| ----------------- | ------ |
| Variable Usage    | 15     |
| User Input        | 15     |
| Conditional Logic | 25     |
| Input Validation  | 20     |
| Correct Output    | 10     |
| Desktop Test      | 10     |
| Flowchart         | 5      |
| Total             | 100    |

## Goal

Build a JavaScript program that classifies users into age categories
while practicing conditional statements, logical operators, input
validation, desktop testing, and flowchart design.
