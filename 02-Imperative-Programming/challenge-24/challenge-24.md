# Challenge 24: Temperature Converter (Celsius to Fahrenheit)

## Introduction

Temperature conversion is a common requirement in real-world applications such
as weather apps, travel platforms, and scientific tools.

Different countries and systems use different temperature scales, so software
must often convert values between them.

In this challenge, you will implement a function that converts a temperature
from **Celsius to Fahrenheit**, using a mathematical formula.

---

## Problem Description

You are building a feature for a weather application that must display
temperatures in different units depending on user preferences.

Your task is to convert a temperature value from **Celsius to Fahrenheit**.

The conversion formula is:

F = (C × 9/5) + 32

---

## Requirements

1. Create a function named `convertToFahrenheit`.
2. The function must receive one parameter:
   - `celsius` (number)

3. The function must:
   - Apply the conversion formula
   - Return the result in Fahrenheit

---

## Input Example

```javascript
celsius = 0;
```
---

## Output Example

```
fahrenheit = 32;
```
---

## Expected Behavior

When the function receives a Celsius value, it should return the correct
Fahrenheit equivalent.

Example:

```javascript
convertToFahrenheit(0); // 32
convertToFahrenheit(25); // 77
convertToFahrenheit(100); // 212
```
---

## Notes

- Do not use user input functions (prompt, alert, readline)
- All values must be passed directly to the function
- Focus on correct formula implementation and return values