# Vue.js Code Challenge 9 - E-Learning Course Platform Dashboard

## Challenge Overview

Modern education platforms such as Udemy, Coursera, and
LinkedIn Learning manage thousands of courses, instructors,
students, and progress tracking systems in real time.

In this challenge, you will build an **E-Learning Course
Platform Dashboard** using Vue.js that simulates a real
online education management system.

This project focuses on:
- Course management
- Student enrollment tracking
- Progress monitoring
- Category-based organization
- Instructor assignment
- Dynamic analytics dashboards

---

## Challenge Objective

Create a new page called:

CourseDashboardView

and integrate it into your Vue.js application navigation.

The system must allow users to manage courses, track
student progress, and analyze learning activity.

---

## Step 1 - Create Route

Create the page:

src/pages/CourseDashboardView.vue

Register it in Vue Router.

Add it to navigation:

Dashboard
Projects
Skills
Employees
Inventory
Customers
Courses
Analytics
Products
Leads
Learning

---

## Step 2 - Create Course Data

Create:

src/data/courses.js

Each course must include:

{
    id: 1,
    title: "Vue.js Fundamentals",
    category: "Frontend",
    instructor: "John Doe",
    students: 120,
    completionRate: 65,
    level: "Beginner",
    price: 49
}

Required Fields:

id
title
category
instructor
number of students
completion rate
level
price

Create at least 20 courses.

Include categories such as:

Frontend
Backend
Full Stack
DevOps
Cybersecurity
Data Science

---

## Step 3 - Create Course Card Component

Create:

src/components/CourseCard.vue

Each card must display:

- Course title
- Category
- Instructor
- Level
- Number of students
- Completion rate
- Price

---

## Step 4 - Display Courses List

Render courses using:

v-for

Each course must use the CourseCard component.

---

## Step 5 - Search Courses

Add a search input:

<input type="text">

Search must work on:

Course title
Instructor name

Use:

v-model

---

## Step 6 - Category Filter

Create dropdown:

All Categories
Frontend
Backend
Full Stack
DevOps
Cybersecurity
Data Science

---

## Step 7 - Level Filter

Create filter options:

All Levels
Beginner
Intermediate
Advanced

---

## Step 8 - Instructor Filter

Generate instructor list dynamically using computed properties.

---

## Step 9 - Learning Analytics Dashboard

Create KPI statistics:

Total Courses
Total Students
Average Completion Rate
Beginner Courses
Advanced Courses
Total Revenue (price × students estimate)

All values must update dynamically.

---

## Step 10 - Advanced Filtering Logic

Use a single computed property that combines:

Search filter
Category filter
Level filter
Instructor filter

The course list must update automatically.

---

## Step 11 - Dynamic Completion Styling

Apply color coding:

0–40% → Red
41–70% → Orange
71–100% → Green

Use dynamic class binding.

---

## Step 12 - Revenue Calculation

Each course must display:

Estimated Revenue = price × number of students

---

## Step 13 - Conditional Rendering

If no courses match filters show:

No courses found matching your criteria.

Use:

v-if
v-else

---

## Step 14 - UI Requirements

Design a professional learning platform dashboard:

Include:

Page title
KPI cards
Search bar
Filter dropdowns
Course grid
Progress indicators
Instructor tags
Responsive layout

---

## Step 15 - Bonus Features

If you finish early, add:

Progress bars for completion rate
Sorting (students, price, completion rate)
Course enrollment modal (UI only)
Dark mode support
Category icons
Export course report (UI mock only)

---

## Concepts Practiced

This challenge reinforces:

- Vue Router
- Component architecture
- Props
- Computed properties
- Reactive state (ref)
- v-for
- v-if / v-else
- v-model
- Business logic in frontend
- Dashboard analytics
- Educational platform design
- Data aggregation and filtering
- Real-world SaaS UI patterns

---

## Expected Outcome

By completing this challenge, you will build a fully functional:

E-Learning Course Platform Dashboard

This system behaves like real-world platforms such as:

Udemy
Coursera
LinkedIn Learning

Students will gain experience building scalable dashboards
with real business logic, filtering systems, and analytics.