# Vue.js Code Challenge 4 - Customer Relationship Management (CRM)

## Challenge Overview

Congratulations! Your Vue.js application is growing into a complete business
dashboard.

In this challenge, you will build a **Customer Relationship Management (CRM)**
module similar to those used by companies to manage customers, monitor customer
status, and organize client information.

You will continue practicing Vue.js fundamentals while building another
professional feature for your Single Page Application.

---

# Challenge Objective

Create a new page called:

```text
Customers
```

and integrate it into your existing Vue.js application.

The page should allow users to browse customers, search, filter, and analyze
customer information using a responsive dashboard.

---

# Step 1 - Create a New Route

Create:

```text
src/pages/CustomersView.vue
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
```

Navigation must continue working without reloading the browser.

---

# Step 2 - Create Customer Data

Create:

```text
src/data/customers.js
```

Store at least **15 customers**.

Each customer should contain:

```javascript
{
    id: 1,
    name: "John Smith",
    company: "Tech Solutions",
    industry: "Technology",
    country: "United States",
    totalPurchases: 18500,
    status: "Active",
    premium: true
}
```

Each customer must include:

- id
- name
- company
- industry
- country
- totalPurchases
- status
- premium

Possible industries:

- Technology
- Healthcare
- Finance
- Education
- Retail

Status values:

- Active
- Prospect
- Inactive

---

# Step 3 - Create a Reusable Component

Create:

```text
src/components/CustomerCard.vue
```

Each card should display:

- Customer name
- Company
- Industry
- Country
- Total purchases
- Customer status
- Premium badge

Example:

```text
---------------------------------------

John Smith

Tech Solutions

Technology

United States

Purchases:
$18,500

✅ Active

⭐ Premium Customer

---------------------------------------
```

Receive the customer object using Props.

---

# Step 4 - Display Customers

Use:

```vue
v-for
```

to render every customer.

Each customer must appear inside the reusable CustomerCard component.

---

# Step 5 - Search Customers

Create a search box.

Use:

```vue
v-model
```

Users should be able to search customers by:

- Customer name
- Company name

---

# Step 6 - Industry Filter

Create a dropdown.

Options:

```
All Industries

Technology

Healthcare

Finance

Education

Retail
```

Store the selected value using:

```vue
v-model
```

---

# Step 7 - Status Filter

Create another dropdown.

Options:

```
All Statuses

Active

Prospect

Inactive
```

Use:

```vue
v-model
```

---

# Step 8 - Premium Filter

Create another dropdown.

Options:

```
All Customers

Premium

Standard
```

Store the value using:

```vue
v-model
```

---

# Step 9 - Create Computed Filtering

Use one computed property to combine:

- Search
- Industry
- Status
- Premium

The customer list should automatically update whenever any filter changes.

---

# Step 10 - Dashboard Statistics

Display the following dashboard cards.

```
Total Customers

Premium Customers

Active Customers

Prospects

Inactive Customers

Average Purchase Value

Total Revenue
```

All values must be calculated dynamically using computed properties.

---

# Step 11 - Dynamic Status Badge

Display different badge colors using Vue dynamic classes.

```
Active

✅ Active

Prospect

🟡 Prospect

Inactive

🔴 Inactive
```

Use:

```vue
:class=""
```

Students may choose their own colors.

---

# Step 12 - Premium Badge

Display a premium badge only when:

```javascript
premium === true
```

Example:

```
⭐ Premium Customer
```

Use:

```vue
v-if
```

---

# Step 13 - Conditional Rendering

If no customers satisfy the filters display:

```
No customers found.
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

# Step 14 - Professional Dashboard Layout

Design a modern CRM interface.

Include:

- Dashboard title
- Statistics cards
- Search bar
- Industry filter
- Status filter
- Premium filter
- Responsive customer grid
- Professional customer cards
- Rounded corners
- Hover effects
- Mobile-friendly design

---

# Example Layout

```
----------------------------------------------------------

Customer Relationship Management

Total Customers

15

Premium Customers

7

Active Customers

10

Prospects

3

Inactive

2

Average Purchases

$24,500

Total Revenue

$367,500

----------------------------------------------------------

Search Customers

[_____________________]

Industry

[Technology ▼]

Status

[Active ▼]

Premium

[Premium ▼]

----------------------------------------------------------

+----------------------------------+

John Smith

Tech Solutions

Technology

United States

Purchases

$18,500

✅ Active

⭐ Premium Customer

+----------------------------------+

+----------------------------------+

Sarah Johnson

Future Retail

Retail

Canada

Purchases

$6,800

🟡 Prospect

+----------------------------------+
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
- Dynamic Class Binding
- Computed Dashboard Statistics
- Array Filtering
- Array Reduction
- Responsive CSS Grid
- Professional UI Design

---

# Rules

- Use reusable components.
- Keep customer data in a separate file.
- Do not modify the original customer array.
- Use computed properties for all statistics and filtering.
- Keep the application responsive.
- Follow the component-based architecture used throughout the course.

---

# Expected Outcome

By completing this challenge, your Vue.js application will now include:

- Dashboard
- Projects
- Skills
- Employees
- Inventory
- Customers

The new **Customers** page should resemble a real Customer Relationship
Management (CRM) dashboard, allowing users to search, filter, and analyze
customer information while viewing real-time business statistics.

This challenge reinforces the core Vue.js concepts introduced throughout the
course and provides additional practice building realistic business
applications using reusable components, reactive state, computed properties,
and modern Single Page Application architecture.