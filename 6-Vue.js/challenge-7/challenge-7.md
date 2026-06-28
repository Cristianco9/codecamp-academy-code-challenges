# Vue.js Code Challenge 7 - Real-Time Inventory Management System

## Challenge Overview

In real-world businesses such as warehouses, retail stores, and logistics
companies, inventory systems are critical for tracking stock levels,
monitoring product movement, and preventing shortages.

In this challenge, you will build a **Real-Time Inventory Management System**
using Vue.js that simulates how professional warehouse dashboards operate.

This challenge introduces more advanced business logic, including:
- Stock tracking
- Low-stock alerts
- Inventory filtering
- Category-based organization
- Dynamic calculations
- Dashboard analytics

---

## Challenge Objective

Create a new page called:

```text
InventoryView
```

and integrate it into your Vue.js application navigation.

The system must allow users to manage and analyze product inventory in real time.

---

## Step 1 - Create Route

Create the page:

```text
src/pages/InventoryView.vue
```

Register it in Vue Router.

Add it to navigation:

```text
Dashboard
Projects
Skills
Employees
Inventory
Customers
Courses
Analytics
Products
```

---

## Step 2 - Create Inventory Data

Create:

```text
src/data/inventory.js
```

Each inventory item must include:

```javascript
{
    id: 1,
    name: "Laptop Dell XPS 15",
    category: "Electronics",
    stock: 12,
    minStock: 5,
    price: 1500,
    supplier: "Dell Inc"
}
```

Required Fields

Each item must contain:

```text
id
name
category
stock quantity
minimum stock threshold
price
supplier
```

Create at least 20 inventory items.

Include categories such as:

Electronics
Office Supplies
Furniture
Clothing
Hardware

---

## Step 3 - Create Inventory Card Component

Create:

```text
src/components/InventoryCard.vue
```

Each card must display:

- Product name
- Category
- Current stock
- Minimum stock level
- Supplier
- Stock status

---

## Step 4 - Display Inventory Items

Render items using:

```vue
v-for
```

Each item must use the InventoryCard component.

---

## Step 5 - Search Inventory

Add a search input:

<input type="text">

Search must work on:

Product name
Supplier

Use:

```vue
v-model
```

---

## Step 6 - Category Filter

Create dropdown:

```text
All Categories
Electronics
Office Supplies
Furniture
Clothing
Hardware
```

## Step 7 - Stock Status Filter

Create filter options:

```text
All Items
In Stock
Low Stock
Out of Stock
```

Rules:

In Stock → stock > minStock
Low Stock → stock <= minStock AND stock > 0
Out of Stock → stock === 0

---

## Step 8 - Supplier Filter

Generate supplier list dynamically using computed properties.

---

## Step 9 - Inventory Analytics Dashboard

Create KPI statistics:

Total Items
Total Stock Units
Low Stock Items
Out of Stock Items
Total Inventory Value
Average Item Price

All values must update dynamically.

---

## Step 10 - Advanced Filtering Logic

Use a single computed property that combines:

Search filter
Category filter
Stock status filter
Supplier filter

The inventory list must update automatically.

---

## Step 11 - Dynamic Stock Status Styling

Apply color coding:

In Stock → Green
Low Stock → Yellow
Out of Stock → Red

Use dynamic class binding.

---

## Step 12 - Inventory Value Calculation

Each item must display:

Total Value = stock × price

---

## Step 13 - Conditional Rendering

If no items match filters show:

No inventory items found.

Use:

```vue
v-if
v-else
```

---

## Step 14 - UI Requirements

Design a professional warehouse dashboard:

Include:

```text
Page title
KPI cards
Search bar
Filter dropdowns
Inventory grid
Stock indicators
Hover animations
Responsive layout
```

---

## Step 15 - Bonus Features

If you finish early, add:

Stock progress bars (based on minStock)
Warning icons for low stock
Sorting (price, stock, category)
Export inventory (UI mock only)
Dark mode support
Concepts Practiced

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
- Inventory management systems
- Dynamic UI updates
- Array filtering & reduction
- Real-world dashboard design

---

## Expected Outcome

By completing this challenge, you will build a fully functional:

Real-Time Inventory Management System

This system behaves like professional tools used in:

Warehouses
E-commerce platforms
ERP systems
Retail management dashboards

Students will gain experience building scalable systems with real business logic,
preparing them for production-level Vue.js applications.