# Challenge: Convert `if...else` Statements to the Ternary Operator

## Objective

In this exercise, you will practice replacing traditional
`if...else` statements with the JavaScript **ternary operator**.

The ternary operator allows you to write simple conditional logic in a
more concise and readable way when assigning values based on a condition.

---

## Instructions

For each exercise below:

1. Analyze the existing `if...else` statement.
2. Identify the condition being evaluated.
3. Rewrite the code using the **ternary operator (`? :`)**.
4. Store the result in the same variable shown in the original example.
5. Do not use `if`, `else if`, or `else` in your solution.

---

## Exercise 1 — Password Validation

A website validates whether a user's password meets the minimum length
requirement.

### Original Code

```javascript
let passwordLength = 10;
let validation;

if (passwordLength >= 8) {
  validation = "Strong password";
} else {
  validation = "Password too short";
}
```

### Your Task

Convert the conditional logic above into a single ternary expression.

---

## Exercise 2 — Free Shipping

An online store offers free shipping for purchases of $100 or more.

### Original Code

```javascript
let purchaseAmount = 120;
let shipping;

if (purchaseAmount >= 100) {
  shipping = "Free shipping";
} else {
  shipping = "Shipping cost applies";
}
```

### Your Task

Rewrite this logic using the ternary operator.

---

## Exercise 3 — Access Permission

A system checks whether a user has permission to access a protected
resource.

### Original Code

```javascript
let hasPermission = false;
let access;

if (hasPermission) {
  access = "Access granted";
} else {
  access = "Access denied";
}
```

### Your Task

Replace the `if...else` statement with a ternary operator.

---

## Exercise 4 — Battery Status

A mobile application displays a warning when the battery level becomes
too low.

### Original Code

```javascript
let batteryLevel = 15;
let status;

if (batteryLevel <= 20) {
  status = "Low battery";
} else {
  status = "Battery level OK";
}
```

### Your Task

Rewrite this algorithm using a ternary operator.

---

## Exercise 5 — Online Status

A messaging application displays whether a user is currently connected.

### Original Code

```javascript
let isOnline = false;
let connection;

if (isOnline) {
  connection = "User is online";
} else {
  connection = "User is offline";
}
```

### Your Task

Convert this conditional statement into a ternary expression.

---

## Ternary Operator Syntax

Use the following structure:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
let age = 20;

let category =
  age >= 18 ? "Adult" : "Minor";
```

---

## Expected Learning Outcomes

By completing this challenge, you will practice:

* Conditional logic
* Boolean expressions
* Variable assignment
* JavaScript ternary operators
* Writing shorter and cleaner code
* Refactoring existing algorithms

---

## Bonus Challenge

Create your own example using an `if...else` statement and then rewrite
it using a ternary operator.
