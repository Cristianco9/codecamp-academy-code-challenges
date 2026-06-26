# Challenge 10: Electricity Bill Calculator (Using `switch` in JavaScript)

## Introduction

In real-world systems, pricing often depends on categories or user types.
For example, electricity companies charge different rates depending on the
type of customer.

To handle multiple predefined options in a clean and structured way,
JavaScript provides the **`switch` statement**, which is ideal when working
with fixed numeric or string cases.

In this challenge, you will build a program that calculates an electricity
bill based on the **customer type code** and the **amount of energy consumed**.

This exercise will help you practice:

- Using `switch` statements with numeric cases
- Performing mathematical operations in JavaScript
- Structuring clean decision-making logic
- Handling default (invalid) cases properly

---

## Problem Description

An electricity provider applies different rates per kilowatt-hour (kWh)
depending on the type of customer.

Your task is to calculate the **total electricity bill** using the provided
variables and rules.

---

## Customer Type Pricing Table

| Code | Customer Type | Price per kWh |
|------|---------------|----------------|
| 1    | Residential   | $0.12          |
| 2    | Commercial    | $0.20          |
| 3    | Industrial    | $0.35          |

If the customer type code is not valid, the program must handle it as an
error case.

---

## Given Data

```javascript
const kwhUsed = 350;
const customerType = 2;
```

- `kwhUsed` represents the total electricity consumption in kilowatt-hours.
- `customerType` represents the numeric category of the customer.

---

## Expected Behavior

Your program must:

1. Use a `switch` statement based on `customerType`.
2. Assign the correct price per kWh depending on the case.
3. Calculate the total bill using the formula:

   ```
   totalBill = kwhUsed * pricePerkWh
   ```

4. Display the final result using `console.log()`.
5. Handle invalid customer types using a `default` case.

---

## Example

### Input

```javascript
kwhUsed = 350;
customerType = 2;
```

### Process

- Customer Type: Commercial
- Price per kWh: $0.20

```
350 × 0.20 = 70
```

### Output

```
Total Bill: $70 USD
```

---

## Invalid Case Example

### Input

```javascript
kwhUsed = 200;
customerType = 5;
```

### Output

```
Invalid customer type. Unable to calculate bill.
```

---

## Requirements

Your solution must:

- Be implemented in JavaScript
- Use a `switch` statement
- Include a `default` case
- Not use user input (`prompt` or CLI input is not allowed)
- Use only the provided variables
- Display output using `console.log()`
- Create a flowchart before implementing the solution

---

## Learning Objectives

By completing this challenge, students will practice:

- Using `switch` for multi-case decision logic
- Performing arithmetic operations in JavaScript
- Handling invalid input using `default`
- Structuring real-world pricing logic
- Translating business rules into code