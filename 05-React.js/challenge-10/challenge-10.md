# React.js Practice Challenge 10: Project Management Dashboard

## Objective

In this challenge, you will build a **Project Management Dashboard** inspired by
popular project management platforms such as Jira, Trello, Monday.com, and
Asana.

The dashboard will display software development projects, allowing project
managers to monitor project progress and change the project's current status.

This challenge serves as the final project of the React Fundamentals module,
bringing together nearly every concept studied throughout the course.

By completing this challenge, you will practice:

- Functional Components
- JSX
- Props
- Component Composition
- Arrays of Objects
- Rendering Lists with `.map()`
- React State (`useState`)
- Event Handling
- Conditional Rendering
- Array Filtering
- Array Reduction (`reduce()`)
- Derived Data
- Responsive CSS Grid Layouts
- Reusable Component Design

---

# Scenario

A software company manages multiple development projects simultaneously.

Project managers need an internal dashboard where they can review the current
status of every project, monitor progress, identify project priorities, and
update whether a project is currently active.

The application should also display key business metrics that summarize the
company's project portfolio.

---

# Requirements

## 1. Create a New Component

Create the following component:

```text
src/components/ProjectCard.jsx
```

The component must receive a single `project` object as a prop.

---

## 2. Create the Project Data

Inside `App.jsx`, create an array containing at least **10 software projects**.

Each project must follow this structure:

```javascript
{
    id: 1,
    name: "Online Banking Platform",
    client: "Global Bank",
    manager: "Alice Johnson",
    priority: "High",
    progress: 75,
    teamSize: 8,
    active: true
}
```

Each project must include:

- id
- name
- client
- manager
- priority
- progress
- teamSize
- active

Use multiple priority levels:

- High
- Medium
- Low

Use different progress percentages between **10% and 100%**.

---

## 3. Display Project Information

Each ProjectCard must display:

- Project name
- Client
- Project manager
- Team size
- Progress percentage
- Priority badge
- Active status

Example:

```
Online Banking Platform

Client:
Global Bank

Manager:
Alice Johnson

Team Size:
8 Developers

Progress:
75%

🔴 High Priority

✅ Active
```

---

## 4. Display a Progress Bar

Each project card must include a visual progress bar.

The width of the filled portion should be based on the project's progress value.

Example:

```
██████████████░░░░░
75%
```

Use CSS to create the progress bar.

---

## 5. Manage Local State

Each ProjectCard must manage its own active status using `useState`.

Initialize the state using:

```javascript
const [active, setActive] =
    useState(project.active);
```

---

## 6. Toggle Project Status

Each card must include a button.

When active:

```
Archive Project
```

When inactive:

```
Reactivate Project
```

The displayed status must update immediately.

---

## 7. Conditional Rendering

Display different status badges.

When active:

```
✅ Active
```

When archived:

```
📦 Archived
```

Use different CSS classes.

---

## 8. Priority Badge

Display a colored badge according to project priority.

High

```
🔴 High
```

Medium

```
🟡 Medium
```

Low

```
🟢 Low
```

Use different CSS classes.

---

## 9. Dashboard Statistics

Display the following information at the top of the dashboard.

```
Project Management Dashboard

Total Projects: ...

Active Projects: ...

Archived Projects: ...

High Priority Projects: ...

Medium Priority Projects: ...

Low Priority Projects: ...

Average Progress: ...

Total Developers: ...
```

All statistics must be calculated dynamically.

The average progress should be calculated using `.reduce()`.

The total number of developers should be calculated by summing all project team
sizes.

---

## 10. Render All Projects

Display every project using `.map()`.

Example:

```jsx
<ProjectCard

    key={project.id}

    project={project}

/>
```

---

## 11. Responsive Layout

Display all project cards inside a responsive CSS Grid.

Each card should include:

- White background
- Rounded corners
- Soft shadow
- Hover animation
- Progress bar
- Priority badge
- Status badge
- Professional action button

The application should resemble a real project management dashboard.

---

# Example Layout

```
-------------------------------------------------------------
Project Management Dashboard

Total Projects: 10

Active Projects: 8

Archived Projects: 2

Average Progress: 67%

Total Developers: 54
-------------------------------------------------------------

-------------------------------------------------------------
Online Banking Platform

Client:
Global Bank

Manager:
Alice Johnson

Team Size:
8 Developers

Progress

██████████████░░░░░

75%

🔴 High Priority

✅ Active

[ Archive Project ]
-------------------------------------------------------------
```

---

# Rules

- Do not modify the original projects array.
- Each ProjectCard manages its own local state.
- Use `.map()` to render all projects.
- Use `key={project.id}`.
- Do not use inline CSS.
- Organize the project using reusable React components.

---

# Bonus Challenge

If you finish early, implement one or more of the following features:

- Display a different progress bar color based on completion percentage.
- Highlight projects with progress above 90%.
- Display the project manager's initials inside a circular avatar.
- Display a "Completed" badge when progress reaches 100%.
- Sort projects alphabetically before rendering.
- Display the estimated number of remaining tasks.

---

# Student Tasks

For this challenge, you must create:

- `ProjectCard.jsx`
- `ProjectCard.css`
- Update `App.jsx`
- Update `App.css`
- Render all projects dynamically
- Build a responsive dashboard
- Implement local state using `useState`
- Calculate all project statistics

---

# Learning Objectives

By completing this challenge, you will strengthen your understanding of:

- Functional Components
- JSX
- Props
- Component Composition
- State Management with `useState`
- Event Handling
- Conditional Rendering
- Rendering Lists with `.map()`
- Arrays of Objects
- Array Filtering with `.filter()`
- Array Reduction with `.reduce()`
- Derived Data
- Responsive CSS Grid Layouts
- CSS Progress Bars
- Reusable Component Design
- Building Professional Dashboard Interfaces

This capstone challenge combines nearly every React concept covered throughout
the course. It closely resembles the dashboards used by modern software
companies to manage large development projects and provides excellent practice
for building professional React applications.