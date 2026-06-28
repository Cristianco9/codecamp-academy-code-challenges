# Vue.js Code Challenge 10 - Job Board & Recruitment Dashboard

## Challenge Overview

Modern companies like LinkedIn, Indeed, and Glassdoor rely on
job board systems to manage job postings, applications, and
candidate tracking in real time.

In this challenge, you will build a **Job Board & Recruitment
Dashboard** using Vue.js that simulates a real hiring platform
used by HR teams and recruitment agencies.

This project focuses on:
- Job posting management
- Candidate tracking
- Application filtering
- Job category organization
- Hiring status pipelines
- Recruitment analytics

---

## Challenge Objective

Create a new page called:

JobBoardView

and integrate it into your Vue.js application navigation.

The system must allow users to manage job listings and track
candidate applications efficiently.

---

## Step 1 - Create Route

Create the page:

src/pages/JobBoardView.vue

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
Jobs

---

## Step 2 - Create Job Data

Create:

src/data/jobs.js

Each job must include:

{
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-Time",
    salary: 2500,
    category: "Frontend",
    status: "Open",
    applications: 32
}

Required Fields:

id
job title
company name
location
job type
salary
category
status
number of applications

Create at least 20 job postings.

Include categories such as:

Frontend
Backend
Full Stack
DevOps
Cybersecurity
Data Science

---

## Step 3 - Create Job Card Component

Create:

src/components/JobCard.vue

Each card must display:

- Job title
- Company
- Location
- Type
- Salary
- Category
- Status
- Applications count

---

## Step 4 - Display Job Listings

Render jobs using:

v-for

Each job must use the JobCard component.

---

## Step 5 - Search Jobs

Add a search input:

<input type="text">

Search must work on:

Job title
Company name

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

## Step 7 - Job Type Filter

Create filter options:

All Types
Full-Time
Part-Time
Contract
Internship

---

## Step 8 - Status Filter

Create filters:

All Jobs
Open
Closed

---

## Step 9 - Company Filter

Generate company list dynamically using computed properties.

---

## Step 10 - Recruitment Analytics Dashboard

Create KPI statistics:

Total Jobs
Open Jobs
Closed Jobs
Total Applications
Average Applications per Job
Highest Applications Job

All values must update dynamically.

---

## Step 11 - Advanced Filtering Logic

Use a single computed property that combines:

Search filter
Category filter
Type filter
Status filter
Company filter

The job list must update automatically.

---

## Step 12 - Dynamic Status Styling

Apply color coding:

Open → Green
Closed → Red

Use dynamic class binding.

---

## Step 13 - Application Metrics

Each job must display:

Application density indicator (UI bar or percentage)

---

## Step 14 - Conditional Rendering

If no jobs match filters show:

No jobs found matching your criteria.

Use:

v-if
v-else

---

## Step 15 - UI Requirements

Design a professional recruitment dashboard:

Include:

Page title
KPI cards
Search bar
Filter dropdowns
Job grid
Status badges
Application indicators
Responsive layout

---

## Step 16 - Bonus Features

If you finish early, add:

Job application modal (UI only)
Sorting (salary, applications, title)
Save job feature (wishlist UI)
Dark mode support
Recruiter notes section
Export job report (UI mock only)

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
- Recruitment system design
- Filtering pipelines
- Data aggregation & analytics
- Real-world SaaS dashboard UI

---

## Expected Outcome

By completing this challenge, you will build a fully functional:

Job Board & Recruitment Dashboard

This system behaves like real platforms such as:

LinkedIn Jobs
Indeed
Glassdoor

Students will gain experience building production-level dashboards
with complex filtering, analytics, and real business logic.