# React.js Practice Challenge 7: Employee Directory Dashboard

## Objective

In this challenge, you will build an **Employee Directory Dashboard** that allows
users to browse employees in a company and manage their active status.

This project simulates one of the most common interfaces found in Human
Resources (HR) systems and employee management platforms.

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
- Derived Data
- Responsive CSS Design

---

# Scenario

A company wants to build an internal employee directory.

The dashboard should display information about every employee and allow managers
to activate or deactivate employees directly from the interface.

Each employee belongs to a department and has a current employment status.

The application should also display useful company statistics.

---

# Requirements

## 1. Create a New Component

Create the following component:

```text
src/components/EmployeeCard.jsx
```

The component must receive an `employee` object as a prop.

---

## 2. Create the Employee Data

Inside `App.jsx`, create an array containing at least **eight employees**.

Each employee must have the following structure:

```javascript
{
    id: 1,
    name: "Alice Johnson",
    position: "Frontend Developer",
    department: "Engineering",
    yearsOfService: 4,
    salary: 65000,
    active: true
}
```

Each employee must include:

- id
- name
- position
- department
- yearsOfService
- salary
- active

Use different departments such as:

- Engineering
- Marketing
- Human Resources
- Finance

---

## 3. Display Employee Information

Each EmployeeCard must display:

- Employee name
- Job position
- Department
- Years of service
- Annual salary
- Current status

Example:

```
Alice Johnson

Frontend Developer

Department:
Engineering

Years of Service:
4

Salary:
$65,000

✅ Active
```

---

## 4. Manage Local State

Each EmployeeCard must manage its own status using `useState`.

Initialize the state from the employee prop.

Example:

```javascript
const [active, setActive] = useState(employee.active);
```

---

## 5. Toggle Employee Status

Each card must include a button.

When the employee is active:

```
Deactivate Employee
```

When inactive:

```
Activate Employee
```

The displayed status should update immediately.

---

## 6. Conditional Rendering

Display different status badges.

When active:

```
✅ Active
```

When inactive:

```
❌ Inactive
```

Use different CSS classes for each status.

---

## 7. Dashboard Statistics

At the top of the application display:

```
Employee Directory

Total Employees: 8

Engineering: 3

Marketing: 2

Human Resources: 2

Finance: 1

Average Salary: $67,500
```

All statistics must be calculated dynamically from the array.

---

## 8. Display All Employees

Render every employee using `.map()`.

Example:

```jsx
<EmployeeCard

    key={employee.id}

    employee={employee}

/>
```

---

## 9. Responsive Layout

Display the employee cards using a responsive CSS Grid.

Each card should include:

- White background
- Rounded corners
- Soft shadow
- Hover animation
- Colored status badge
- Professional button styling

---

# Example Layout

```
-------------------------------------------------------------
Employee Directory

Total Employees: 8
Engineering: 3
Marketing: 2
Human Resources: 2
Finance: 1
Average Salary: $67,500
-------------------------------------------------------------

-------------------------------------------------------------
Alice Johnson

Frontend Developer

Department:
Engineering

Years of Service:
4

Salary:
$65,000

✅ Active

[ Deactivate Employee ]
-------------------------------------------------------------
```

---

# Rules

- Do not modify the employee array after it is created.
- Each EmployeeCard manages its own state.
- Render employees using `.map()`.
- Use `key={employee.id}`.
- Do not use inline CSS.
- Organize the project into reusable components.

---

# Bonus Challenge

If you finish early, add one or more of the following features:

- Display different badge colors for each department.
- Highlight employees with more than 10 years of service.
- Add an employee avatar using the employee's initials.
- Display salaries using the JavaScript `toLocaleString()` method.
- Add smooth button transition animations.

---

# Student Tasks

For this challenge, you must create:

- `EmployeeCard.jsx`
- `EmployeeCard.css`
- Update `App.jsx`
- Render all employees dynamically
- Implement local state using `useState`
- Calculate dashboard statistics
- Build a responsive employee dashboard

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
- Array Aggregation with `.reduce()`
- Derived Data
- Responsive CSS Grid Layouts
- Reusable Component Design
- Building realistic business dashboards

This challenge closely resembles a real-world HR management interface and
encourages you to combine multiple React concepts into a professional,
interactive dashboard application.