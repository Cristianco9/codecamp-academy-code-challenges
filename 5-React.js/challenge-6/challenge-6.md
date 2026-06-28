# React.js Practice Challenge 6: Course Enrollment Dashboard

## Objective

In this challenge, you will build a **Course Enrollment Dashboard** that allows
students to browse available courses and manage their enrollment status.

This exercise is designed to strengthen your understanding of React by combining
multiple concepts into a realistic educational application.

By completing this challenge, you will practice:

- Functional Components
- JSX
- Props
- Arrays of Objects
- Rendering Lists with `.map()`
- React State (`useState`)
- Event Handling
- Conditional Rendering
- Component Composition
- Responsive CSS Styling

---

# Scenario

An online learning platform needs a dashboard where students can view the
available courses and decide whether they want to enroll.

Each course displays its basic information and whether the student is currently
enrolled.

Students should be able to enroll in or leave a course directly from the
dashboard.

---

# Requirements

## 1. Create a New Component

Create the following component:

```text
src/components/CourseCard.jsx
```

This component must receive a single `course` object as a prop.

---

## 2. Create the Course Data

Inside `App.jsx`, create an array containing at least **six courses**.

Example:

```javascript
const courses = [
    {
        id: 1,
        title: "React Fundamentals",
        instructor: "John Smith",
        duration: "8 Weeks",
        level: "Beginner",
        enrolled: true
    }
];
```

Each course must contain:

- id
- title
- instructor
- duration
- level
- enrolled

---

## 3. Display the Course Information

Each CourseCard must display:

- Course title
- Instructor
- Duration
- Difficulty level
- Enrollment status

Example:

```
React Fundamentals

Instructor: John Smith
Duration: 8 Weeks
Level: Beginner

Status:
Enrolled
```

---

## 4. Manage Local State

Inside `CourseCard`, use `useState()` to manage the enrollment status.

Initialize the state using the value received from the `course` prop.

Example:

```javascript
const [enrolled, setEnrolled] = useState(course.enrolled);
```

---

## 5. Toggle Enrollment

Each card must include a button.

When clicked:

If the student is enrolled:

```
Leave Course
```

Otherwise:

```
Enroll Now
```

The enrollment status must update immediately.

---

## 6. Conditional Rendering

Display different labels depending on the current enrollment state.

When enrolled:

```
✅ Enrolled
```

When not enrolled:

```
📚 Not Enrolled
```

Use different CSS classes for each status.

---

## 7. Display All Courses

Inside `App.jsx`, render every course using `.map()`.

Example:

```jsx
<CourseCard
    key={course.id}
    course={course}
/>
```

---

## 8. Create a Dashboard Summary

At the top of the page display:

```
Course Enrollment Dashboard

Total Courses: 6

Beginner Courses: 2

Intermediate Courses: 2

Advanced Courses: 2
```

The totals must be calculated from the array.

---

## 9. Responsive Layout

Display the courses inside a responsive grid.

Each card should have:

- White background
- Rounded corners
- Box shadow
- Hover animation
- Colored status badge
- Modern button styles

Use your own creativity to improve the interface.

---

# Example Layout

```
------------------------------------------------------------
Course Enrollment Dashboard

Total Courses: 6
Beginner Courses: 2
Intermediate Courses: 2
Advanced Courses: 2
------------------------------------------------------------

------------------------------------------------------------
React Fundamentals

Instructor: John Smith
Duration: 8 Weeks
Level: Beginner

✅ Enrolled

[ Leave Course ]
------------------------------------------------------------

------------------------------------------------------------
Node.js Essentials

Instructor: Sarah Johnson
Duration: 10 Weeks
Level: Intermediate

📚 Not Enrolled

[ Enroll Now ]
------------------------------------------------------------
```

---

# Rules

- Do not modify the original array after it is created.
- Each CourseCard manages its own enrollment state.
- Use `.map()` to render the cards.
- Use `key={course.id}`.
- Do not use inline CSS.
- Keep the project organized by separating components and styles.

---

# Student Tasks

For this challenge, you must create:

- `CourseCard.jsx`
- `CourseCard.css`
- Update `App.jsx`
- Render all courses dynamically
- Implement local state using `useState`
- Toggle enrollment status
- Create a responsive dashboard layout

---

# Learning Objectives

By completing this challenge, you will strengthen your understanding of:

- React Components
- JSX
- Props
- State Management with `useState`
- Event Handling
- Conditional Rendering
- Rendering Lists with `.map()`
- Arrays of Objects
- Component Composition
- Responsive UI Design
- Reusable Components
- Organizing React Applications

This challenge continues building your React development skills by creating a
realistic educational dashboard that combines reusable components, state
management, dynamic rendering, and responsive design.