# JavaScript Challenge 5: Movie Theater Ticket System

## Challenge Overview

In this challenge, you will create a JavaScript program that calculates
the final price of movie tickets based on several business rules.

The program must consider:

* Customer age
* Student status
* Day of the week
* Number of tickets

You will use variables, user input, arithmetic operators, logical
operators, nested conditional statements, and input validation.

---

## Learning Objectives

By completing this challenge, you will practice:

* Using the `prompt()` function
* Storing data in variables
* Working with numbers and strings
* Using arithmetic operators
* Creating nested conditional statements
* Applying multiple business rules
* Validating user input
* Displaying results with `alert()`
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
challenge-5.js
```

---

## Problem Description

A movie theater wants to calculate the final ticket price for customers.

The program must ask the user for:

* Age
* Student status
* Day of the week
* Number of tickets

Based on this information, the program must calculate:

```text
Total Price = Final Ticket Price × Number of Tickets
```

---

## Pricing Rules

### Base Ticket Price

The normal ticket price is:

```text
$12
```

---

### Age Discounts

| Age Range   | Price Per Ticket |
| ----------- | ---------------- |
| Under 12    | $6               |
| 12 to 64    | $12              |
| 65 or older | $7               |

---

### Student Discount

Apply a discount only when:

* The customer is a student
* The age is between 12 and 25

Discount:

```text
$3 off per ticket
```

---

### Day Discount

If the day is:

```text
Wednesday
```

Apply:

```text
$2 off per ticket
```

---

## Input Validation

The program must validate the following:

### Invalid Age

* Less than 0
* Greater than 120
* Non-numeric values

### Invalid Tickets

* Less than 1
* Non-numeric values

### Invalid Student Status

Only the following values are valid:

```text
yes
```

```text
no
```

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
Are you a student? (yes or no)
```

---

### Step 3

Ask the user to enter the day of the week.

Example:

```text
Enter the day of the week:
```

---

### Step 4

Ask the user to enter the number of tickets.

Example:

```text
Enter number of tickets:
```

---

### Step 5

Validate all inputs before applying the business rules.

---

### Step 6

Calculate the ticket price according to:

1. Age discount
2. Student discount
3. Day discount

---

### Step 7

Calculate the total amount to pay.

Formula:

```text
Total Price = Price Per Ticket × Number of Tickets
```

---

### Step 8

Display the result.

Example:

```text
Price per ticket: $9
Tickets: 3
Total to pay: $27
```

---

## Desktop Test

After writing your solution, create a desktop test.

| Age | Student | Day       | Tickets | Expected Result       |
| --- | ------- | --------- | ------- | --------------------- |
| 10  | no      | monday    | 2       | Price $6, Total $12   |
| 20  | yes     | monday    | 3       | Price $9, Total $27   |
| 20  | yes     | wednesday | 3       | Price $7, Total $21   |
| 70  | no      | monday    | 2       | Price $7, Total $14   |
| 70  | no      | wednesday | 2       | Price $5, Total $10   |
| 15  | yes     | wednesday | 1       | Price $7, Total $7    |
| 25  | yes     | friday    | 4       | Price $9, Total $36   |
| -3  | yes     | monday    | 2       | Invalid input         |
| 130 | no      | monday    | 1       | Invalid input         |
| 20  | maybe   | monday    | 2       | Invalid student input |
| 30  | no      | monday    | 0       | Invalid input         |
| 40  | yes     | monday    | -5      | Invalid input         |
| 22  | yes     | wednesday | hello   | Invalid input         |

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
Ask for day
↓
Ask for tickets
↓
Validate inputs
├─ Invalid → Display error
└─ Valid
     ↓
Determine age price
     ↓
Apply student discount
     ↓
Apply Wednesday discount
     ↓
Calculate total
     ↓
Display result
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
* Arithmetic operators
* Comparison operators
* Logical operators (`&&`, `||`)
* Nested conditionals
* `if`
* `else if`
* `else`

---

## Expected Example

### Input

```text
Age: 20
Student: yes
Day: monday
Tickets: 3
```

### Output

```text
Price per ticket: $9
Tickets: 3
Total to pay: $27
```

---

### Input

```text
Age: 70
Student: no
Day: wednesday
Tickets: 2
```

### Output

```text
Price per ticket: $5
Tickets: 2
Total to pay: $10
```

---

## Submission Instructions

1. Create the JavaScript solution.
2. Complete the desktop test.
3. Create the flowchart.
4. Verify all calculations are correct.
5. Upload your files to GitHub.
6. Share the repository link in Discord.

---

## Evaluation Criteria

| Criteria          | Points |
| ----------------- | ------ |
| Variable Usage    | 10     |
| User Input        | 15     |
| Conditional Logic | 25     |
| Price Calculation | 20     |
| Input Validation  | 15     |
| Desktop Test      | 10     |
| Flowchart         | 5      |
| Total             | 100    |

## Goal

Build a JavaScript program that calculates movie ticket prices using
multiple business rules while practicing arithmetic operations,
conditional statements, nested conditionals, input validation,
desktop testing, and flowchart design.
