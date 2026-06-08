# Challenge 22: Delivery Cost Calculator (Functions)

## Introduction

In real-world logistics systems, delivery costs are calculated based on a
combination of fixed fees and variable distances. This is a common pattern in
applications such as delivery apps, shipping services, and transportation
platforms.

To model this behavior in JavaScript, we use **functions** to encapsulate
reusable logic and perform calculations in a clean and structured way.

In this challenge, you will create a function that calculates the total cost of
a delivery based on the distance traveled.

---

## Problem Description

A logistics company charges customers based on the following pricing model:

- A **fixed base fee** of **$5** for every delivery
- An additional **$2 per kilometer** traveled

Your task is to implement a function that calculates the total delivery cost
based on the distance provided.

---

## Function Requirements

You must create a function with the following specifications:

### Function Name

```javascript
calculateDeliveryCost
```

### Parameters

- `distance` (number): The total distance of the delivery in kilometers

---

## Business Rules

The total delivery cost must be calculated using the formula:

```
totalCost = baseFee + (costPerKm × distance)
```

Where:

- `baseFee = 5`
- `costPerKm = 2`

---

## Expected Behavior

The function must:

1. Receive a numeric distance value
2. Apply the pricing formula
3. Return the total calculated cost
4. Not print directly inside the function (return only the result)

---

## Example

### Input

```javascript
distance = 10
```

### Calculation

```
totalCost = 5 + (2 × 10)
totalCost = 5 + 20
totalCost = 25
```

### Output

```javascript
25
```

---

## Requirements Summary

Your solution must:

- Be implemented in JavaScript
- Use a function named `calculateDeliveryCost`
- Accept one parameter (`distance`)
- Return the calculated total cost
- Use constants for base fee and cost per kilometer
- Follow clean and readable code structure

---

## Learning Objectives

By completing this challenge, students will practice:

- Creating and using functions in JavaScript
- Working with parameters and return values
- Applying mathematical formulas in code
- Modeling real-world business rules in programming