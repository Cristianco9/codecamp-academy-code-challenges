# JavaScript Challenge 3: Bank Loan Approval System

## Challenge Overview

In this challenge, you will create a JavaScript program that determines
whether a user qualifies for a bank loan.

You will use variables, user input, conditional statements, logical
operators, and input validation to solve the problem.

---

## Learning Objectives

By completing this challenge, you will practice:

* Using the `prompt()` function
* Storing values in variables
* Converting strings to numbers
* Using `parseFloat()`
* Using `isNaN()`
* Working with logical operators (`&&`, `||`)
* Creating `if`, `else if`, and `else` statements
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
challenge-3.js
```

---

## Problem Description

Create a program that determines whether a person qualifies for a bank
loan.

The program must ask the user to enter:

* Monthly salary
* Credit score

The program must then evaluate the information and determine whether the
loan should be approved or rejected.

---

## Rules

Apply the following conditions:

| Requirement    | Minimum Value |
| -------------- | ------------- |
| Monthly Salary | 2000          |
| Credit Score   | 700           |

The loan is approved only if both conditions are met.

If one or both conditions fail, the loan must be rejected.

---

## Requirements

### Step 1

Ask the user to enter their monthly salary.

Example:

```text
Enter your monthly salary:
```

---

### Step 2

Ask the user to enter their credit score.

Example:

```text
Enter your credit score:
```

---

### Step 3

Convert both values to numeric data.

Hint:

```javascript
parseFloat()
```

---

### Step 4

Validate the input values.

Check if:

* Salary is numeric
* Credit score is numeric

If either value is invalid, display:

```text
Invalid input. Please enter numeric values.
```

---

### Step 5

Evaluate the loan conditions.

Possible outcomes:

#### Approved

```text
Loan Approved
```

#### Rejected - Credit Score Too Low

```text
Loan Rejected. Your credit score is too low.
```

#### Rejected - Salary Too Low

```text
Loan Rejected. Your salary does not meet the minimum requirement.
```

#### Rejected - Both Conditions Fail

```text
Loan Rejected. Both salary and credit score do not meet the
requirements.
```

---

## Desktop Test

After writing your solution, create a desktop test.

| Salary | Credit Score | Expected Output                                                           |
| ------ | ------------ | ------------------------------------------------------------------------- |
| 1900   | 690          | Loan Rejected. Both salary and credit score do not meet the requirements. |
| 3000   | 500          | Loan Rejected. Your credit score is too low.                              |
| 1900   | 800          | Loan Rejected. Your salary does not meet the minimum requirement.         |
| 2200   | 720          | Loan Approved.                                                            |
| hello  | 800          | Invalid input. Please enter numeric values.                               |
| 2700   | hello        | Invalid input. Please enter numeric values.                               |

You may add additional test cases.

---

## Flowchart

Create a flowchart representing the program logic.

Example structure:

```text
Start
↓
Ask for salary
↓
Ask for credit score
↓
Convert values to numbers
↓
Are values numeric?
├─ No → Invalid input
└─ Yes
     ↓
Salary >= 2000 AND Credit Score >= 700?
├─ Yes → Loan Approved
└─ No
     ↓
Credit Score < 700?
├─ Yes → Credit score too low
└─ No
     ↓
Salary < 2000?
├─ Yes → Salary too low
└─ No
     ↓
Both conditions failed
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
* `parseFloat()`
* `isNaN()`
* `if`
* `else if`
* `else`
* Comparison operators
* Logical operators (`&&`, `||`)

---

## Expected Example

### Input

```text
Salary: 2500
Credit Score: 720
```

### Output

```text
Loan Approved
```

---

### Input

```text
Salary: 1800
Credit Score: 730
```

### Output

```text
Loan Rejected. Your salary does not meet the minimum requirement.
```

---

### Input

```text
Salary: 3000
Credit Score: 650
```

### Output

```text
Loan Rejected. Your credit score is too low.
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

| Criteria           | Points |
| ------------------ | ------ |
| Variable Usage     | 10     |
| User Input         | 10     |
| Numeric Conversion | 15     |
| Input Validation   | 15     |
| Conditional Logic  | 25     |
| Correct Output     | 10     |
| Desktop Test       | 10     |
| Flowchart          | 5      |
| Total              | 100    |

## Goal

Build a JavaScript program that simulates a bank loan approval system
while practicing input validation, logical operators, conditional
statements, desktop testing, and flowchart design.
