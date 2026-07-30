# Challenge 6 - University Course Grading System

## Problem Description

You are developing a grading system for a university course.

The system must determine whether a student:

- Passes the course
- Fails the course
- Must take a remedial exam

The decision depends on three factors:

1. Final grade
2. Attendance percentage
3. Final project submission

---

## Grade Evaluation Rules

| Grade Range | Status |
|------------|----------|
| 90 - 100 | Excellent |
| 70 - 89 | Pass |
| 50 - 69 | Remedial Exam |
| 0 - 49 | Fail |

---

## Attendance Requirement

Students must have at least **75% attendance**.

If attendance is below 75%, the student automatically fails regardless of
their grade.

---

## Final Project Rule

Students with grades between **70 and 89** must submit the final project.

If the project was not submitted, the student must take a remedial exam.

---

## Validation Rules

Before evaluating the student, validate the following:

### Grade

- Must be a numeric value.
- Must be between 0 and 100.

### Attendance

- Must be a numeric value.
- Must be between 0 and 100.

### Project Submission

- Must be either:
  - `yes`
  - `no`

---

## Required Inputs

The program must ask the user to enter:

1. Final grade
2. Attendance percentage
3. Final project submitted (`yes` or `no`)

---

## Expected Output

Example:

```text
Student grade: 82
Attendance: 90%
Final project submitted: yes

Result: PASS
Performance level: Good
```

---

## Student Tasks

### Task 1

Create the JavaScript algorithm that solves the problem.

### Task 2

Create a flowchart representing the program logic.

### Task 3

Implement all validation rules.

### Task 4

Use conditional statements and nested conditionals when necessary.

### Task 5

Display the final result and performance level when applicable.

---

## Desktop Test

Use the following test cases to verify your solution.

### Test Case 1

```text
grade = 95
attendance = 90
project = yes
```

Expected Result:

```text
PASS
Performance: Excellent
```

---

### Test Case 2

```text
grade = 85
attendance = 80
project = yes
```

Expected Result:

```text
PASS
Performance: Good
```

---

### Test Case 3

```text
grade = 85
attendance = 80
project = no
```

Expected Result:

```text
REMEDIAL EXAM REQUIRED
```

---

### Test Case 4

```text
grade = 60
attendance = 85
project = yes
```

Expected Result:

```text
REMEDIAL EXAM REQUIRED
```

---

### Test Case 5

```text
grade = 40
attendance = 90
project = yes
```

Expected Result:

```text
FAIL
```

---

### Test Case 6

```text
grade = 95
attendance = 60
project = yes
```

Expected Result:

```text
FAIL (insufficient attendance)
```

---

### Test Case 7

```text
grade = 120
attendance = 90
project = yes
```

Expected Result:

```text
The grade should be between 0 - 100.
```

---

### Test Case 8

```text
grade = 80
attendance = 150
project = yes
```

Expected Result:

```text
The attendance should be between 0 - 100.
```

---

### Test Case 9

```text
grade = 80
attendance = 90
project = maybe
```

Expected Result:

```text
The final project should be yes or no.
```

---

## Learning Objectives

By completing this challenge, students will practice:

- Variables
- User input with `prompt()`
- Data validation
- Conditional statements (`if`, `else if`, `else`)
- Nested conditionals
- Algorithm design
- Flowchart creation
- Program testing using desktop test cases