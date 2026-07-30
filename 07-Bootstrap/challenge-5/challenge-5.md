# Code Challenge: Build the Happy Paws Adoption Center

---

# Objective

In this challenge, you will build part of the **Happy Paws Adoption Center**, 
a website that helps people find pets available for adoption.

Instead of following a tutorial, you will analyze the provided design and 
recreate it using **Vue.js** and **Bootstrap 5**.

This activity simulates a real software development scenario where developers 
receive a design mockup and are responsible for implementing it.

---

# Scenario

The design team has completed the homepage of the Happy Paws website.

However, two important sections are still missing from the application.

Your task is to recreate these sections using reusable Vue components.

---

# Your Mission

Create the following components:

* **Pets.vue**
* **PetCard.vue**
* **Services.vue**

The application should match the reference image as closely as possible while 
remaining responsive on different screen sizes.

---

# Requirements

## Pets Component

Create a section that displays the pets available for adoption.

The component should:

* Display a section title.
* Import the data from `pets.js`.
* Render the pets dynamically using `v-for`.
* Pass each pet object as a prop to the `PetCard` component.
* Use Bootstrap's responsive Grid System.

---

## PetCard Component

Create a reusable card that displays the information for a single pet.

Each card should include:

* Pet image
* Pet name
* Breed
* Age
* "Adopt Me" button

Use Bootstrap Cards and Buttons.

---

## Services Component

Create a section presenting three services offered by the adoption center.

Each card should contain:

* A Bootstrap Icon
* Service title
* Short description

Suggested services:

* Veterinary Care
* Pet Training
* Adoption Support

---

# Bootstrap Concepts to Practice

Your solution should demonstrate the correct use of the following Bootstrap classes.

## Layout

* `container`
* `row`
* `col-md-*`
* `g-*`

## Components

* `card`
* `card-body`
* `card-img-top`
* `btn`
* `shadow`
* `h-100`

## Utilities

* `text-center`
* `fw-bold`
* `py-*`
* `mb-*`
* `d-flex`
* `flex-column`
* `mt-auto`

## Bootstrap Icons

Choose icons that best represent each service.

---

# Vue.js Concepts to Practice

Your implementation should demonstrate:

* Creating reusable Vue components
* Importing components
* Importing data
* Rendering lists with `v-for`
* Passing props
* Dynamic data binding
* Organizing components inside `App.vue`

---

# Learning Objectives

By completing this challenge, you will practice:

* Building reusable Vue components
* Rendering dynamic data using `v-for`
* Passing data with props
* Using Bootstrap to create responsive layouts
* Translating a UI design into code
* Organizing a Vue project using reusable components

---

# Submission Checklist

Before submitting your project, verify that:

* `Pets.vue` has been created.
* `PetCard.vue` is reusable.
* Pets are rendered dynamically using `v-for`.
* Data is imported correctly from `pets.js`.
* `Services.vue` has been completed.
* Bootstrap classes are used appropriately.
* The application is responsive.
* All components are imported correctly into `App.vue`.

---

# Evaluation Criteria

| Criterion                |  Points |
| ------------------------ | ------: |
| Pets component           |      30 |
| PetCard component        |      25 |
| Services component       |      25 |
| Bootstrap implementation |      10 |
| Vue.js implementation    |      10 |
| **Total**                | **100** |

---

# Professional Tip

Professional front-end developers are often provided with a design rather than 
implementation details. They must analyze the layout, identify the required 
components, and recreate the interface using the framework and tools available.

This challenge is designed to strengthen your ability to build reusable Vue 
components, work with dynamic data, and create responsive interfaces using 
Bootstrap—skills you will use in real-world software development projects.
