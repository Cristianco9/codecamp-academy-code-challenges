# JavaScript Challenge 4: Gym Membership Discount System

## Challenge Overview

In this challenge, you will create a JavaScript program that determines
the discount a customer receives when purchasing a gym membership.

The discount depends on the customer's age and whether they are a
student.

You will use variables, user input, comparison operators, logical
operators, nested conditional statements, and input validation.

---

## Learning Objectives

By completing this challenge, you will practice:

* Using the `prompt()` function
* Storing data in variables
* Working with strings and numbers
* Using the `toLowerCase()` method
* Creating nested conditional statements
* Validating user input
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
challenge-4.js
```

---

## Problem Description

A gym wants to determine the discount a customer receives when
purchasing a membership.

The program must ask the user for:

* Their age
* Whether they are a student

Based on the provided information, the program must display the
appropriate discount.

---

## Rules

Apply the following conditions:

### Age Validation

* If the age is less than 0 → Invalid age
* If the age is greater than 100 → Invalid age
* Non-numeric values are invalid

### Student Validation

* Only "yes" and "no" are valid responses
* Any other value is invalid

### Discount Rules

#### Customers Under 18

| Student Status | Result       |
| -------------- | ------------ |
| yes            | 50% discount |
| no             | 30% discount |

#### Customers 18 or Older

| Student Status | Result       |
| -------------- | ------------ |
| yes            | 20% discount |
| no             | No discount  |

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

Ask the user if they are a student.

Example:

```text
Are you a student? (yes/no)
```

---

### Step 3

Store both values in variables.

Example:

```javascript
const age = ...;
const isStudent = ...;
```

---

### Step 4

Validate the user input.

Check for:

* Invalid ages
* Negative ages
* Ages greater than 100
* Invalid student responses

---

### Step 5

Apply the discount rules using conditional statements.

Possible outputs:

```text
50% discount
```

```text
30% discount
```

```text
20% discount
```

```text
No discount
```

```text
Invalid age.
```

```text
Invalid student status
```

---

## Desktop Test

After writing your solution, create a desktop test.

| Age   | Student | Expected Output        |
| ----- | ------- | ---------------------- |
| 16    | yes     | 50% discount           |
| 16    | no      | 30% discount           |
| 25    | yes     | 20% discount           |
| 25    | no      | No discount            |
| -3    | yes     | Invalid age.           |
| 120   | no      | Invalid age.           |
| hello | yes     | Invalid age.           |
| 17    | maybe   | Invalid student status |
| 30    | student | Invalid student status |

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
Ask for student status
↓
Validate age
├─ Invalid → Display error
└─ Valid
     ↓
Validate student status
├─ Invalid → Display error
└─ Valid
     ↓
Age < 18?
├─ Yes
│   ↓
│ Student?
│ ├─ Yes → 50% discount
│ └─ No  → 30% discount
│
└─ No
    ↓
  Student?
  ├─ Yes → 20% discount
  └─ No  → No discount
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
* Nested conditionals
* Comparison operators
* Logical operators (`&&`)
* String methods (`toLowerCase()`)

---

## Expected Example

### Input

```text
Age: 16
Student: yes
```

### Output

```text
50% discount
```

---

### Input

```text
Age: 22
Student: yes
```

### Output

```text
20% discount
```

---

### Input

```text
Age: 25
Student: no
```

### Output

```text
No discount
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

Build a JavaScript program that calculates gym membership discounts
while practicing nested conditional statements, logical operators,
input validation, desktop testing, and flowchart design.
