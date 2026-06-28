# Vue.js Code Challenge 6 - Task Analytics Dashboard

## Challenge Overview

Modern productivity platforms like Trello, Jira, and Asana rely on
powerful analytics dashboards to help teams understand their workflow.

In this challenge, you will build a **Task Analytics Dashboard** using
Vue.js that tracks tasks, categorizes them, and visualizes productivity
metrics in real time.

This challenge focuses heavily on:
- Data aggregation
- Filtering systems
- Dashboard statistics
- Dynamic UI updates
- Component-based architecture

---

## Challenge Objective

Create a new page called:

```txt
AnalyticsView
```

and integrate it into your existing Vue.js application.

The page should provide a full analytics overview of task performance.

---

## Step 1 - Create Route

Create:

```txt
src/pages/AnalyticsView.vue
```

Register the route in Vue Router.

Add navigation:

```txt
Dashboard
Projects
Skills
Employees
Inventory
Customers
Courses
Analytics
```

---

## Step 2 - Create Task Data

Create:

```txt
src/data/tasks.js
```

Each task must include:

```javascript
{
    id: 1,
    title: "Fix login bug",
    priority: "High",
    status: "Completed",
    assignee: "John Doe",
    hours: 3
}
```

Required Fields

Each task must have:

id
title
priority (Low, Medium, High)
status (Completed, In Progress, Pending)
assignee
hours spent

Create at least 20 tasks.

---

## Step 3 - Create Task Card Component

Create:

```txt
src/components/TaskCard.vue
```

Each card must display:

Task title
Priority badge
Status badge
Assignee
Hours spent

---

## Step 4 - Display Tasks

Render tasks using:

v-for

Each task must be displayed using TaskCard.

---

## Step 5 - Search Tasks

Add a search input:

<input type="text">

Search must work on:

Task title
Assignee

Use:

v-model

---

## Step 6 - Filter by Priority

Create dropdown:

All Priorities
Low
Medium
High

---

## Step 7 - Filter by Status

Create dropdown:

All Statuses
Completed
In Progress
Pending

---

## Step 8 - Filter by Assignee

Create dropdown based on unique assignees.

Use computed properties to generate the list dynamically.

---

## Step 9 - Analytics Dashboard (Computed Stats)

Create a dashboard with:

Total Tasks
Completed Tasks
Pending Tasks
In Progress Tasks
Total Hours Logged
Average Hours per Task
Completion Rate (%)

All values must update dynamically.

---

## Step 10 - Advanced Computed Filtering

Use a single computed property that combines:

Search filter
Priority filter
Status filter
Assignee filter

The task list must update automatically.

---

## Step 11 - Dynamic Priority Styling

Use dynamic class binding:

High → Red
Medium → Yellow
Low → Green

---

## Step 12 - Dynamic Status Styling
Completed → Green
In Progress → Blue
Pending → Gray

---

## Step 13 - Conditional Rendering

If no tasks match filters show:

No tasks found.

Use:

v-if
v-else

---

## Step 14 - UI Requirements

Design a professional analytics dashboard:

Include:

Page title
KPI cards (statistics)
Search bar
Filter dropdowns
Task grid layout
Clean spacing system
Hover animations
Responsive design

---

## Step 15 - Bonus Features

If you finish early, add:

Progress bar for completion rate
Pie chart (optional mock UI)
Task grouping by status
Color-coded KPI cards
Dark mode styling (optional)

---

## Concepts Practiced

This challenge reinforces:

- Vue Router
- Components
- Props
- Computed properties
- Reactive state (ref)
- v-for
- v-if / v-else
- v-model
- Array filtering
- Array reduction
- Dynamic classes
- Dashboard UI design
- Data analytics logic
- Expected Outcome

By completing this challenge, you will build a fully functional:

Task Analytics Dashboard

This application will behave like a real project management system,
providing insights into productivity, task distribution, and workload
analysis.

Students will gain experience building systems similar to:

Jira dashboards
Trello analytics
Asana reporting systems
Notion task boards