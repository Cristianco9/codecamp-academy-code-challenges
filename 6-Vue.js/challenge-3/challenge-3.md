# Vue.js Code Challenge 3 - Product Inventory Dashboard

## Challenge Overview

Your company has been asked to build a small inventory management system for a
retail business.

The application should allow employees to browse products, search by name,
filter by category, and quickly identify products that are running low on stock.

In this challenge, you will continue practicing the most important Vue.js
concepts by building another realistic Single Page Application (SPA) feature.

---

# Challenge Objective

Create a new page called:

```text
Inventory
```

and integrate it into your existing Vue.js application.

The page should display product information, provide search and filtering
capabilities, and present useful inventory statistics.

---

# Step 1 - Create a New Route

Create:

```text
src/pages/InventoryView.vue
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
```

Navigation should continue working without refreshing the browser.

---

# Step 2 - Create Product Data

Create:

```text
src/data/products.js
```

Store at least **15 products**.

Each product should include:

```javascript
{
    id: 1,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 89.99,
    stock: 42,
    supplier: "Tech Supplies Ltd.",
    featured: true
}
```

Each product must contain:

- id
- name
- category
- price
- stock
- supplier
- featured

Possible categories:

- Laptops
- Accessories
- Monitors
- Networking
- Storage

---

# Step 3 - Create a Reusable Component

Create:

```text
src/components/ProductCard.vue
```

Each card should display:

- Product name
- Category
- Supplier
- Price
- Stock quantity
- Featured badge

Example:

```text
-------------------------------------

Mechanical Keyboard

Accessories

Supplier:
Tech Supplies Ltd.

Price:
$89.99

Stock:
42 Units

⭐ Featured

-------------------------------------
```

Receive the product object using Props.

---

# Step 4 - Display Products

Render every product using:

```vue
v-for
```

Each product must be displayed inside the reusable ProductCard component.

---

# Step 5 - Search Products

Create a search input.

Use:

```vue
v-model
```

Users should be able to search products by name.

Example:

```
Search:

Key
```

Results:

```
Mechanical Keyboard
```

---

# Step 6 - Filter by Category

Create a dropdown menu.

Options:

```
All Categories

Laptops

Accessories

Monitors

Networking

Storage
```

Store the selected category using:

```vue
v-model
```

---

# Step 7 - Filter by Featured Products

Create another dropdown.

Options:

```
All Products

Featured

Regular
```

Use:

```vue
v-model
```

---

# Step 8 - Create Computed Filtering

Use a computed property to combine:

- Search filter
- Category filter
- Featured filter

The product list should update automatically whenever any filter changes.

---

# Step 9 - Inventory Statistics

Display dashboard cards showing:

```
Total Products

Featured Products

Low Stock Products

Average Price

Total Inventory Units
```

Definitions:

- Low Stock = stock less than 10 units
- Average Price = average price of all products
- Total Inventory Units = sum of every product's stock

All statistics must be calculated dynamically using computed properties.

---

# Step 10 - Dynamic Stock Badge

Use Vue dynamic class binding.

Products should display different stock colors.

```
Stock > 30

🟢 In Stock

Stock 10–30

🟡 Limited Stock

Stock < 10

🔴 Low Stock
```

Students may choose their own colors.

---

# Step 11 - Featured Badge

Display a badge only when:

```javascript
featured === true
```

Example:

```
⭐ Featured Product
```

Use:

```vue
v-if
```

---

# Step 12 - Conditional Rendering

If no products match the selected filters display:

```
No products found.
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

# Step 13 - Professional Dashboard Layout

Design a modern inventory dashboard.

Include:

- Page title
- Dashboard statistics
- Search bar
- Category filter
- Featured filter
- Responsive product grid
- Hover animations
- Modern product cards
- Rounded corners
- Consistent spacing
- Mobile-friendly design

---

# Example Layout

```
------------------------------------------------------

Inventory Dashboard

Total Products

15

Featured Products

6

Low Stock

3

Average Price

$312.40

Inventory Units

482

------------------------------------------------------

Search

[________________]

Category

[Accessories ▼]

Featured

[Featured ▼]

------------------------------------------------------

+--------------------------------+

Mechanical Keyboard

Accessories

Supplier:
Tech Supplies Ltd.

Price:
$89.99

Stock:
42 Units

🟢 In Stock

⭐ Featured Product

+--------------------------------+

+--------------------------------+

Gaming Mouse

Accessories

Supplier:
PC World

Price:
$59.99

Stock:
6 Units

🔴 Low Stock

+--------------------------------+
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
- Modern UI Design

---

# Rules

- Use reusable components.
- Keep the product data separate from the page.
- Do not modify the original product array.
- Use computed properties for all filtering and statistics.
- Keep the layout responsive.
- Follow the component-based architecture used throughout the course.

---

# Expected Outcome

At the end of this challenge, your Vue.js application will include:

- Dashboard
- Projects
- Skills
- Employees
- Inventory

The Inventory page should behave like a real inventory management system,
allowing users to search products, filter data, monitor stock levels, and
analyze inventory statistics in real time.

This challenge continues building your experience with modern Vue.js
development by combining reusable components, reactive state, computed
properties, and responsive user interface design in a realistic business
application.