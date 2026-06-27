# Challenge 8: Interactive Shopping Cart

## Introduction

Shopping carts are one of the most important features of modern e-commerce
applications. They allow customers to add products, review their selections,
update quantities, and calculate the total cost before completing a purchase.

Every time a user clicks an **Add to Cart** button, the application responds to
that event by updating the interface immediately. This behavior is a perfect
example of **Event-Driven Programming**, where user actions trigger changes in
the application state and the Document Object Model (DOM).

In this challenge, you will build a simplified shopping cart that allows users
to add products and keeps track of the number of selected items and the total
purchase amount.

---

# Problem Description

You are developing the product page of an online store.

The page displays several products. Each product contains:

- The product name
- The product price
- An **Add to Cart** button

Initially, the shopping cart is empty.

Each time the user clicks an **Add to Cart** button:

- The selected product is added to the shopping cart.
- The total number of items in the cart increases.
- The total purchase price is recalculated.
- The shopping cart displayed on the page is updated immediately.

The application must continue working correctly regardless of how many products
the user adds.

---

# HTML Provided

The HTML and CSS files are already provided.

Each product button includes two custom data attributes:

```html
<button
    class="add-btn"
    data-name="Wireless Mouse"
    data-price="25">
    Add to Cart
</button>
```

These attributes contain the information required to build the shopping cart.

---

# Requirements

Create the JavaScript code that satisfies the following requirements.

1. Select all required DOM elements.
2. Register a click event for every **Add to Cart** button.
3. When a product is added:
   - Read the product name from the button.
   - Read the product price from the button.
   - Store the product inside a JavaScript array.
4. Update the shopping cart displayed on the page.
5. Update the total number of products.
6. Update the total purchase price.
7. Format prices using two decimal places.
8. The shopping cart must continue updating correctly after every click.

---

# Expected Behavior

Initial state:

```
Items in cart: 0

Total:
$0.00
```

User clicks **Add to Cart** on:

```
Wireless Mouse ($25)
```

Result:

```
Items in cart: 1

Wireless Mouse - $25.00

Total:
$25.00
```

User clicks **Add to Cart** on:

```
Mechanical Keyboard ($80)
```

Result:

```
Items in cart: 2

Wireless Mouse - $25.00
Mechanical Keyboard - $80.00

Total:
$105.00
```

If the same product is added multiple times, it should appear multiple times in
the shopping cart and its price should be included each time in the total.

---

# Student Tasks

For this challenge, you must create:

- The algorithm
- The flowchart
- The JavaScript implementation

---

# Learning Objectives

By completing this challenge, you will practice:

- Selecting multiple DOM elements
- Registering event listeners for multiple buttons
- Reading custom HTML data using `dataset`
- Working with JavaScript arrays
- Dynamically creating HTML elements
- Updating lists in the DOM
- Calculating totals
- Formatting numbers with `toFixed()`
- Managing application state through user interactions

---

# Bonus Challenges

After completing the basic solution, try implementing one or more of the
following improvements:

1. Add a **Clear Cart** button.
2. Display a message when the cart is empty.
3. Show the average price of the products in the cart.
4. Prevent duplicate products from being added.
5. Display the time when the last product was added.
6. Highlight the newest product added to the cart for two seconds.

---

# Real-World Connection

This challenge models a simplified version of the shopping cart systems used by
online stores such as Amazon, eBay, Shopify, Walmart, and thousands of other
e-commerce platforms. It combines DOM manipulation, arrays, events, and dynamic
user interface updates to simulate a realistic web application feature.