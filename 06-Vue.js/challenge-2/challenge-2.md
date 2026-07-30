# Vue.js Code Challenge 2 - Employee Directory Dashboard

## Challenge Overview

Now that you have successfully created the **Skills** page, it's time to
continue expanding your Vue.js Single Page Application.

In this challenge, you will build an **Employee Directory Dashboard** that
allows users to browse employees, search by name, filter by department,
and display useful company statistics.

This project resembles a feature commonly found in Human Resources (HR)
management systems.

Throughout this challenge, you will continue strengthening your knowledge of
Vue.js while building a professional and interactive user interface.

---

# Challenge Objective

Create a new page called:

```text
Employees
```

and integrate it into your existing application.

The page should display a list of employees and provide tools to search,
filter, and analyze the data dynamically.

---

# Step 1 - Create a New Route

Create:

```text
src/pages/EmployeesView.vue
```

Register the route inside Vue Router.

Update the navigation menu.

Example:

```text
Dashboard
Projects
Skills
Employees
```

Navigation should continue working without reloading the page.

---

# Step 2 - Create Employee Data

Create:

```text
src/data/employees.js
```

Store at least **12 employees**.

Each employee should include:

```javascript
{
    id: 1,
    name: "Alice Johnson",
    position: "Frontend Developer",
    department: "Engineering",
    experience: 5,
    status: "Active"
}
```

Required properties:

- id
- name
- position
- department
- experience
- status

Departments may include:

- Engineering
- Marketing
- Human Resources
- Finance
- Sales

Status values:

- Active
- On Leave

---

# Step 3 - Create a Reusable Component

Create:

```text
src/components/EmployeeCard.vue
```

Each card should display:

- Employee name
- Job position
- Department
- Years of experience
- Employment status

Example:

```text
--------------------------------
Alice Johnson

Frontend Developer

Engineering

Experience:
5 Years

✅ Active
--------------------------------
```

Receive the employee object using Props.

---

# Step 4 - Display Employees

Render every employee using:

```vue
v-for
```

Each employee should appear inside an EmployeeCard component.

---

# Step 5 - Search Employees

Create a search input.

Use:

```vue
v-model
```

Users should be able to search employees by name.

Example:

```
Search:

Ali
```

Results:

```
Alice Johnson
```

---

# Step 6 - Department Filter

Create a dropdown menu.

Options:

```
All Departments

Engineering

Marketing

Human Resources

Finance

Sales
```

Store the selected department using:

```vue
v-model
```

---

# Step 7 - Status Filter

Add another dropdown.

Options:

```
All Statuses

Active

On Leave
```

This filter should also use:

```vue
v-model
```

---

# Step 8 - Create Computed Filtering

Create a computed property that combines:

- Search text
- Department
- Status

The employee list should update automatically whenever any filter changes.

---

# Step 9 - Company Statistics

Above the employee grid display:

```
Total Employees

Active Employees

Employees On Leave

Average Years of Experience
```

Calculate these values dynamically using computed properties.

---

# Step 10 - Dynamic Status Badge

Use Vue dynamic class binding.

Example:

```vue
:class=""
```

Display different badge colors.

Active

```
✅ Active
```

On Leave

```
🟡 On Leave
```

Students may choose their own colors.

---

# Step 11 - Conditional Rendering

If no employees match the filters display:

```
No employees found.
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

# Step 12 - Responsive Layout

Create a professional HR dashboard.

Include:

- Page title
- Statistics cards
- Search input
- Department filter
- Status filter
- Responsive employee grid
- Hover animations
- Modern card design
- Consistent spacing
- Mobile-friendly layout

---

# Example Layout

```
--------------------------------------------------

Employee Directory

Total Employees

12

Active Employees

10

Employees On Leave

2

Average Experience

6 Years

--------------------------------------------------

Search

[_______________]

Department

[Engineering ▼]

Status

[Active ▼]

--------------------------------------------------

+------------------------+

Alice Johnson

Frontend Developer

Engineering

Experience:
5 Years

✅ Active

+------------------------+

+------------------------+

David Smith

Backend Developer

Engineering

Experience:
8 Years

🟡 On Leave

+------------------------+
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
- Computed Dashboard Statistics
- Responsive CSS Grid
- Custom CSS Styling

---

# Rules

- Use reusable components.
- Do not duplicate card layouts.
- Do not mutate the employee dataset.
- All filtering must use computed properties.
- All statistics must update automatically.
- Keep the application responsive.

---

# Expected Outcome

By completing this challenge, your Vue.js application will now include:

- Dashboard Page
- Projects Page
- Skills Page
- Employee Directory Page

The Employee Directory should behave like a real Human Resources dashboard,
allowing users to search, filter, and analyze employee information in real
time.

This challenge introduces a more realistic business scenario and provides
additional practice with reactive state, computed properties, reusable
components, and professional Single Page Application architecture.