# React.js Practice Challenge 8: Product Inventory Dashboard

## Objective

In this challenge, you will build a **Product Inventory Dashboard** similar to
those used by e-commerce platforms, warehouses, and retail management systems.

You will create reusable React components that display product information and
allow inventory managers to control whether a product is available for sale.

This challenge combines many of the React concepts learned throughout the course
and introduces additional data analysis using JavaScript array methods.

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
- Array Mapping
- Array Reduction (`reduce()`)
- Derived Data
- Responsive CSS Grid Layouts

---

# Scenario

A technology store wants to build an internal inventory management dashboard.

Employees should be able to view all available products, inspect product
information, and quickly enable or disable products for sale.

The dashboard must also provide useful inventory statistics that are calculated
automatically.

---

# Requirements

## 1. Create a New Component

Create the following component:

```text
src/components/ProductCard.jsx
```

The component must receive a single `product` object as a prop.

---

## 2. Create the Product Data

Inside `App.jsx`, create an array containing at least **10 products**.

Each product must follow this structure:

```javascript
{
    id: 1,
    name: "Mechanical Keyboard",
    category: "Accessories",
    brand: "Logitech",
    price: 129.99,
    stock: 35,
    featured: true,
    available: true
}
```

Each product must include:

- id
- name
- category
- brand
- price
- stock
- featured
- available

Use multiple categories such as:

- Laptops
- Smartphones
- Accessories
- Monitors
- Audio

---

## 3. Display Product Information

Each ProductCard must display:

- Product name
- Brand
- Category
- Price
- Units in stock
- Featured badge (if applicable)
- Availability status

Example:

```
Mechanical Keyboard

Brand:
Logitech

Category:
Accessories

Price:
$129.99

Stock:
35 Units

⭐ Featured

✅ Available
```

If the product is not featured, do not display the featured badge.

---

## 4. Manage Local State

Each ProductCard must manage its own availability using `useState`.

Initialize the state using:

```javascript
const [available, setAvailable] = useState(product.available);
```

---

## 5. Toggle Product Availability

Each card must contain a button.

When the product is available:

```
Disable Product
```

When unavailable:

```
Enable Product
```

The availability badge must update immediately.

---

## 6. Conditional Rendering

Display different status badges.

Available:

```
✅ Available
```

Unavailable:

```
❌ Unavailable
```

Use different CSS classes for each state.

---

## 7. Inventory Dashboard Statistics

At the top of the page display:

```
Inventory Dashboard

Total Products: 10

Available Products: ...

Unavailable Products: ...

Featured Products: ...

Average Price: ...

Total Inventory Value: ...
```

The statistics must be calculated dynamically.

The inventory value should be calculated using:

```
price × stock
```

for every product.

---

## 8. Display All Products

Render every product using `.map()`.

Example:

```jsx
<ProductCard

    key={product.id}

    product={product}

/>
```

---

## 9. Responsive Layout

Display all products inside a responsive CSS Grid.

Each card should include:

- White background
- Rounded corners
- Box shadow
- Hover animation
- Status badges
- Featured badge
- Professional buttons

Design the interface as if it were a real inventory management system.

---

# Example Layout

```
------------------------------------------------------------
Inventory Dashboard

Total Products: 10

Available Products: 8

Unavailable Products: 2

Featured Products: 4

Average Price: $845.70

Total Inventory Value: $58,900.25
------------------------------------------------------------

------------------------------------------------------------
Mechanical Keyboard

Brand:
Logitech

Category:
Accessories

Price:
$129.99

Stock:
35 Units

⭐ Featured

✅ Available

[ Disable Product ]
------------------------------------------------------------
```

---

# Rules

- Do not modify the original products array.
- Each ProductCard manages its own availability state.
- Use `.map()` to render all products.
- Use `key={product.id}`.
- Do not use inline CSS.
- Keep the project organized using reusable components.

---

# Bonus Challenge

If you finish early, implement one or more of the following features:

- Display a "Low Stock" warning when stock is below 10 units.
- Add a category badge with different colors.
- Format prices using:

```javascript
toLocaleString()
```

- Display a progress bar representing inventory stock.
- Highlight products worth more than $1000.

---

# Student Tasks

For this challenge, you must create:

- `ProductCard.jsx`
- `ProductCard.css`
- Update `App.jsx`
- Render all products dynamically
- Implement local state using `useState`
- Calculate all dashboard statistics
- Build a responsive inventory management interface

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

This challenge closely resembles a real inventory management system used by
technology stores and e-commerce companies. It encourages you to combine React
components, state management, JavaScript array methods, and responsive layouts
to create a professional dashboard application.