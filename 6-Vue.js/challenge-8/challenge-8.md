# Vue.js Code Challenge 8 - CRM Leads Management Dashboard

## Challenge Overview

Modern companies rely on Customer Relationship Management (CRM) systems to
track leads, manage customer interactions, and improve sales performance.

In this challenge, you will build a **CRM Leads Management Dashboard**
using Vue.js that simulates a real sales pipeline system.

This project focuses on real business workflows such as:
- Lead tracking
- Sales pipeline stages
- Customer interaction data
- Performance analytics
- Dynamic filtering
- Status-based organization

---

## Challenge Objective

Create a new page called:

LeadsView

and integrate it into your Vue.js application navigation.

The system must allow users to manage and track sales leads in a structured
CRM pipeline.

---

## Step 1 - Create Route

Create the page:

src/pages/LeadsView.vue

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

---

## Step 2 - Create Leads Data

Create:

src/data/leads.js

Each lead must include:

{
    id: 1,
    name: "Carlos Ramirez",
    email: "carlos@email.com",
    phone: "+57 300 123 4567",
    source: "Website",
    status: "New",
    value: 1200,
    assignedTo: "Sales Rep A"
}

Required fields:

id
name
email
phone
lead source
status
deal value
assigned sales rep

Create at least 25 leads.

Include sources such as:

Website
Referral
Social Media
Cold Call
Email Campaign

---

## Step 3 - Create Lead Card Component

Create:

src/components/LeadCard.vue

Each card must display:

- Lead name
- Email
- Phone
- Source
- Status
- Deal value
- Assigned salesperson

---

## Step 4 - Display Leads List

Render leads using:

v-for

Each lead must use the LeadCard component.

---

## Step 5 - Search Leads

Add a search input:

<input type="text">

Search must work on:

Name
Email
Phone

Use:

v-model

---

## Step 6 - Status Filter

Create dropdown:

All Leads
New
Contacted
Qualified
Proposal
Won
Lost

---

## Step 7 - Lead Source Filter

Create filter options:

All Sources
Website
Referral
Social Media
Cold Call
Email Campaign

---

## Step 8 - Assigned Sales Rep Filter

Generate sales rep list dynamically using computed properties.

---

## Step 9 - CRM Analytics Dashboard

Create KPI statistics:

Total Leads
New Leads
Qualified Leads
Won Deals
Lost Leads
Total Pipeline Value
Average Deal Value

All values must update dynamically.

---

## Step 10 - Advanced Filtering Logic

Use a single computed property that combines:

Search filter
Status filter
Source filter
Assigned rep filter

The leads list must update automatically.

---

## Step 11 - Dynamic Status Styling

Apply color coding:

New → Blue
Contacted → Purple
Qualified → Orange
Proposal → Yellow
Won → Green
Lost → Red

Use dynamic class binding.

---

## Step 12 - Deal Value Calculation

Each lead must display:

Formatted currency value

Example:

$1,200

---

## Step 13 - Conditional Rendering

If no leads match filters show:

No leads found matching your criteria.

Use:

v-if
v-else

---

## Step 14 - UI Requirements

Design a professional CRM dashboard:

Include:

Page title
KPI cards
Search bar
Filter dropdowns
Leads pipeline grid
Status badges
Hover effects
Responsive layout

---

## Step 15 - Bonus Features

If you finish early, add:

Drag and drop pipeline columns
Lead conversion modal (UI only)
Sorting (value, name, status)
Activity timeline per lead
Dark mode support
Export leads (UI mock only)

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
- CRM system design
- Pipeline-based UI thinking
- Array filtering & aggregation
- Real-world dashboard architecture

---

## Expected Outcome

By completing this challenge, you will build a fully functional:

CRM Leads Management Dashboard

This system behaves like real-world tools used in:

Sales departments
SaaS platforms
Marketing teams
Customer success systems

Students will gain experience building production-style dashboards
with complex filtering and business logic.