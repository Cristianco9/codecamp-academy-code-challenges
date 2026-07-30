# React.js Practice Challenge 9: Customer Support Ticket Dashboard

## Objective

In this challenge, you will build a **Customer Support Ticket Dashboard**, a
realistic application inspired by help desk platforms such as Zendesk,
Freshdesk, and Jira Service Management.

The application will display a list of support tickets submitted by customers.
Each ticket contains information about the customer, the issue, its priority,
and its current status.

Support agents should be able to mark tickets as resolved or reopen them
directly from the dashboard.

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

---

# Scenario

A software company receives dozens of customer support requests every day.

The company needs an internal dashboard where support agents can quickly review
tickets and update their resolution status.

The dashboard should also provide useful statistics that summarize the current
state of the support queue.

---

# Requirements

## 1. Create a New Component

Create the following component:

```text
src/components/TicketCard.jsx
```

The component must receive a single `ticket` object as a prop.

---

## 2. Create the Ticket Data

Inside `App.jsx`, create an array containing at least **10 support tickets**.

Each ticket must have the following structure:

```javascript
{
    id: 1,
    customer: "Alice Johnson",
    subject: "Cannot reset my password",
    category: "Authentication",
    priority: "High",
    assignedTo: "David Smith",
    resolved: false
}
```

Each ticket must include:

- id
- customer
- subject
- category
- priority
- assignedTo
- resolved

Use multiple categories, such as:

- Authentication
- Billing
- Technical Support
- Bug Report
- Feature Request

Use different priorities:

- Low
- Medium
- High

---

## 3. Display Ticket Information

Each TicketCard must display:

- Customer name
- Subject
- Category
- Priority
- Assigned support agent
- Current status

Example:

```
Alice Johnson

Subject:
Cannot reset my password

Category:
Authentication

Priority:
High

Assigned To:
David Smith

❌ Open
```

---

## 4. Manage Local State

Each TicketCard must manage its own resolution status using `useState`.

Initialize the state using:

```javascript
const [resolved, setResolved] =
    useState(ticket.resolved);
```

---

## 5. Toggle Resolution Status

Each card must contain a button.

When the ticket is open:

```
Mark as Resolved
```

When the ticket has already been resolved:

```
Reopen Ticket
```

The displayed status must update immediately.

---

## 6. Conditional Rendering

Display different status badges.

When resolved:

```
✅ Resolved
```

When unresolved:

```
❌ Open
```

Use different CSS classes for each state.

---

## 7. Priority Badge

Display a colored badge according to the ticket priority.

Example:

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

Use different CSS classes for each priority level.

---

## 8. Dashboard Statistics

At the top of the application display:

```
Customer Support Dashboard

Total Tickets: 10

Open Tickets: ...

Resolved Tickets: ...

High Priority Tickets: ...

Medium Priority Tickets: ...

Low Priority Tickets: ...
```

All statistics must be calculated dynamically from the array.

---

## 9. Display All Tickets

Render every ticket using `.map()`.

Example:

```jsx
<TicketCard

    key={ticket.id}

    ticket={ticket}

/>
```

---

## 10. Responsive Layout

Display the tickets using a responsive CSS Grid.

Each card should include:

- White background
- Rounded corners
- Box shadow
- Hover animation
- Status badge
- Priority badge
- Professional action button

Design the interface to resemble a modern customer support dashboard.

---

# Example Layout

```
-------------------------------------------------------------
Customer Support Dashboard

Total Tickets: 10

Open Tickets: 6

Resolved Tickets: 4

High Priority: 3

Medium Priority: 4

Low Priority: 3
-------------------------------------------------------------

-------------------------------------------------------------
Alice Johnson

Subject:
Cannot reset my password

Category:
Authentication

Assigned To:
David Smith

🔴 High

❌ Open

[ Mark as Resolved ]
-------------------------------------------------------------
```

---

# Rules

- Do not modify the original tickets array.
- Each TicketCard manages its own resolution state.
- Use `.map()` to render every ticket.
- Use `key={ticket.id}`.
- Do not use inline CSS.
- Organize the project using reusable React components.

---

# Bonus Challenge

If you finish early, implement one or more of the following features:

- Display customer initials inside an avatar.
- Highlight unresolved High Priority tickets.
- Display the number of words in each ticket subject.
- Sort tickets alphabetically before rendering.
- Display an icon based on the ticket category.

---

# Student Tasks

For this challenge, you must create:

- `TicketCard.jsx`
- `TicketCard.css`
- Update `App.jsx`
- Render all tickets dynamically
- Implement local state using `useState`
- Calculate dashboard statistics
- Build a responsive customer support dashboard

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
- Rendering Lists using `.map()`
- Arrays of Objects
- Array Filtering with `.filter()`
- Array Reduction with `.reduce()`
- Derived Data
- Responsive CSS Grid Layouts
- Reusable Component Design
- Building realistic business applications

This challenge closely resembles a real customer support management system used
by software companies and SaaS platforms. It combines reusable React
components, local state, JavaScript array methods, and responsive design to
create a professional dashboard application.