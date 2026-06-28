# Vue.js Code Challenge 5 - Student Course Enrollment Portal

## Challenge Overview

Universities and online learning platforms often provide portals where
students can browse available courses, search for subjects, filter by
department, and monitor course availability.

In this challenge, you will build a **Student Course Enrollment Portal**,
another realistic feature that demonstrates how Vue.js can be used to create
dynamic and responsive educational applications.

This challenge introduces a new business domain while continuing to reinforce
the Vue.js concepts practiced throughout the course.

---

# Challenge Objective

Create a new page called:

```text
Courses
```

and integrate it into your existing Vue.js application.

The page should allow users to browse available courses, search by title,
filter courses, and display enrollment statistics.

---

# Step 1 - Create a New Route

Create:

```text
src/pages/CoursesView.vue
```

Register the page in Vue Router.

Update the navigation menu.

Example:

```text
Dashboard
Projects
Skills
Employees
Inventory
Customers
Courses
```

Navigation should continue working without refreshing the browser.

---

# Step 2 - Create Course Data

Create:

```text
src/data/courses.js
```

Store at least **15 courses**.

Each course should include:

```javascript
{
    id: 1,
    title: "Advanced JavaScript",
    instructor: "Jane Miller",
    department: "Computer Science",
    duration: 12,
    enrolledStudents: 85,
    maxStudents: 100,
    level: "Advanced"
}
```

Each course must contain:

- id
- title
- instructor
- department
- duration (weeks)
- enrolledStudents
- maxStudents
- level

Departments may include:

- Computer Science
- Business
- Mathematics
- Design
- Cybersecurity

Levels:

- Beginner
- Intermediate
- Advanced

---

# Step 3 - Create a Reusable Component

Create:

```text
src/components/CourseCard.vue
```

Each card should display:

- Course title
- Instructor
- Department
- Course duration
- Enrollment
- Difficulty level
- Availability status

Example:

```text
----------------------------------------

Advanced JavaScript

Instructor:
Jane Miller

Computer Science

12 Weeks

Enrollment:
85 / 100

Advanced

🟢 Open

----------------------------------------
```

Receive the course object using Props.

---

# Step 4 - Display Courses

Render every course using:

```vue
v-for
```

Each course must appear inside the reusable CourseCard component.

---

# Step 5 - Search Courses

Create a search input.

Use:

```vue
v-model
```

Users should be able to search by:

- Course title
- Instructor

---

# Step 6 - Department Filter

Create a dropdown.

Options:

```
All Departments

Computer Science

Business

Mathematics

Design

Cybersecurity
```

Use:

```vue
v-model
```

---

# Step 7 - Level Filter

Create another dropdown.

Options:

```
All Levels

Beginner

Intermediate

Advanced
```

Use:

```vue
v-model
```

---

# Step 8 - Availability Filter

Create another dropdown.

A course is considered:

- Open → enrolledStudents < maxStudents
- Full → enrolledStudents === maxStudents

Options:

```
All Courses

Open

Full
```

Use:

```vue
v-model
```

---

# Step 9 - Create Computed Filtering

Use one computed property that combines:

- Search
- Department
- Level
- Availability

The course list should update automatically whenever any filter changes.

---

# Step 10 - Dashboard Statistics

Display the following statistics:

```
Total Courses

Open Courses

Full Courses

Average Course Duration

Total Students Enrolled

Average Enrollment Percentage
```

All statistics must update automatically using computed properties.

---

# Step 11 - Dynamic Level Badge

Use Vue dynamic class binding.

```
Beginner

🟢 Beginner

Intermediate

🟡 Intermediate

Advanced

🔴 Advanced
```

Use:

```vue
:class=""
```

---

# Step 12 - Dynamic Availability Badge

Display a second badge.

```
🟢 Open

🔴 Full
```

The badge should update automatically according to enrollment.

---

# Step 13 - Enrollment Progress Bar

Each course card must include a visual progress bar representing:

```
enrolledStudents / maxStudents
```

Example:

```
██████████░░

85%
```

The width of the bar must be controlled dynamically using Vue.

Hint:

Use:

```vue
:style=""
```

---

# Step 14 - Conditional Rendering

If no courses satisfy the filters display:

```
No courses found.
```

Use:

```vue
v-if
```

and

```vue
v-else
```

---

# Step 15 - Professional Dashboard Design

Create a modern university dashboard.

Include:

- Page title
- Dashboard statistics
- Search bar
- Department filter
- Level filter
- Availability filter
- Responsive course grid
- Progress bars
- Modern cards
- Hover animations
- Mobile-friendly layout

---

# Example Layout

```
------------------------------------------------------------

Student Course Enrollment Portal

Total Courses

15

Open Courses

12

Full Courses

3

Students Enrolled

1,265

Average Duration

10 Weeks

Enrollment Rate

82%

------------------------------------------------------------

Search Courses

[________________________]

Department

[Computer Science ▼]

Level

[Advanced ▼]

Availability

[Open ▼]

------------------------------------------------------------

+--------------------------------------+

Advanced JavaScript

Jane Miller

Computer Science

12 Weeks

Enrollment

85 / 100

██████████░░

85%

🔴 Advanced

🟢 Open

+--------------------------------------+

+--------------------------------------+

UI Design Fundamentals

Emily Davis

Design

8 Weeks

Enrollment

50 / 50


100%

🟢 Beginner

🔴 Full

+--------------------------------------+
```

---

# Concepts You Must Practice

This challenge must demonstrate the use of:

- Vue Router
- Components
- Props
- Reactive State with `ref()`
- Computed Properties
- Multiple `v-model`
- `v-for`
- `v-if`
- `v-else`
- Dynamic Classes
- Dynamic Inline Styles
- Progress Bars
- Dashboard Statistics
- Array Filtering
- Array Reduction
- Responsive CSS Grid
- Modern UI Design

---

# Rules

- Use reusable components.
- Keep the course dataset separate from the page.
- Do not modify the original course array.
- Use computed properties for filtering and statistics.
- Calculate progress dynamically.
- Keep the application responsive.
- Follow component-based architecture.

---

# Expected Outcome

After completing this challenge, your Vue.js application will include a fully
functional **Student Course Enrollment Portal**.

Users should be able to browse courses, search by title or instructor, filter
by department, difficulty level, and availability, while viewing enrollment
statistics and progress bars that update automatically.

This challenge introduces dynamic inline styling, visual progress indicators,
and more advanced business logic while reinforcing all of the core Vue.js
concepts used to build professional Single Page Applications.