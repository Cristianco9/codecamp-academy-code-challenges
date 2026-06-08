# Programming Exercise: Movie Rating Classification Using `switch`

## Introduction

Many real-world applications classify information into predefined categories.
Streaming platforms, cinemas, and content providers use movie ratings to help
viewers understand the intended audience for a film.

When a program needs to evaluate multiple possible values of the same variable,
using a long chain of `if...else if...else` statements can become difficult to
read and maintain.

JavaScript provides the **`switch` statement**, which is designed to handle
multiple discrete cases in a clear and organized way.

In this exercise, you will build a simple movie rating classification system
that uses a `switch` statement to determine the meaning of a movie rating code.

---

## Problem Description

Create a JavaScript program that asks the user to enter a movie rating and then
displays the corresponding classification message.

The program must evaluate the rating using a **`switch` statement**.

### Supported Ratings

| Rating | Description |
|----------|-------------|
| G | General audiences |
| PG | Parental guidance suggested |
| PG-13 | Parents strongly cautioned |
| R | Restricted |
| NC-17 | Adults only |

If the entered rating does not match any valid option, the program must display:

```text
Invalid movie rating.
```

---

## Input

The program must ask the user to enter a movie rating.

### Example Inputs

```text
G
```

```text
PG
```

```text
PG-13
```

```text
R
```

```text
NC-17
```

```text
X
```

---

## Expected Output

### Example 1

**Input**

```text
G
```

**Output**

```text
General audiences.
```

---

### Example 2

**Input**

```text
PG
```

**Output**

```text
Parental guidance suggested.
```

---

### Example 3

**Input**

```text
PG-13
```

**Output**

```text
Parents strongly cautioned.
```

---

### Example 4

**Input**

```text
R
```

**Output**

```text
Restricted.
```

---

### Example 5

**Input**

```text
NC-17
```

**Output**

```text
Adults only.
```

---

### Example 6

**Input**

```text
X
```

**Output**

```text
Invalid movie rating.
```

---

## Requirements

Your solution must:

- Create the algorithm before coding.
- Create the flowchart.
- Be implemented in JavaScript.
- Use a `switch` statement.
- Include a `default` case.
- Store the result in a variable.
- Display the result using `console.log()` or `alert()`.
- Follow proper code formatting and commenting practices.

---

## Desktop Test

Test your program with the following values:

```text
rating = "G"
=> General audiences.
```

```text
rating = "PG"
=> Parental guidance suggested.
```

```text
rating = "PG-13"
=> Parents strongly cautioned.
```

```text
rating = "R"
=> Restricted.
```

```text
rating = "NC-17"
=> Adults only.
```

```text
rating = "X"
=> Invalid movie rating.
```

```text
rating = "hello"
=> Invalid movie rating.
```

```text
rating = 123
=> Invalid movie rating.
```

---

## Learning Objectives

By completing this exercise, students will practice:

- Using the `switch` statement.
- Working with multiple decision branches.
- Using the `default` case.
- Storing results in variables.
- Displaying output to the user.
- Designing algorithms and flowcharts before implementation.