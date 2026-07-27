# Code Challenge 4: Build a Smart Fitness Dashboard

---

## Challenge Overview

Your company has been hired to develop a **Smart Fitness Dashboard**
for a gym management platform. The application will help users monitor
their fitness progress and display personalized workout information.

Your task is to expand the existing React application by creating **two
new reusable React components** using **React**, **TypeScript**, and
**Tailwind CSS**.

Focus on building a modern, responsive interface using reusable
components and utility-first CSS.

---

# Part 1 — Create the `WorkoutCard` Component

Create a new component named:

```text
WorkoutCard.tsx
```

The component should receive its information through **TypeScript props**.

The card must display:

- Workout name
- Category
- Duration
- Difficulty level
- Calories burned
- Action button

Example information:

```text
Workout Name

Strength Training

Category

Upper Body

Duration

45 Minutes

Difficulty

Intermediate

Calories

420 kcal

[Start Workout]
```

Style the component using Tailwind CSS.

---

# Part 2 — Create the `WorkoutSection` Component

Create another component named:

```text
WorkoutSection.tsx
```

Requirements:

- Add a professional section title.
- Add a short description.
- Display **four WorkoutCard components**.
- Organize the cards using a responsive CSS Grid layout.

Example:

```text
Workout Programs

Choose your next workout session.

+-------------+-------------+

+-------------+-------------+
```

---

# Part 3 — Improve the Design

Apply modern Tailwind CSS utilities to both components.

Practice using:

- Rounded corners
- Shadows
- Gradients
- Hover animations
- Smooth transitions
- Responsive spacing
- Modern typography

---

# Part 4 — Update the Application

Import the new component into `App.tsx`.

Place it below the Hero section.

Example:

```text
Header

↓

Hero

↓

Workout Section

↓

Statistics

↓

Footer
```

---

# Tailwind CSS Concepts

Practice using the following utilities:

## Layout

- `flex`
- `grid`
- `justify-between`
- `items-center`
- `gap-*`

## Spacing

- `p-*`
- `px-*`
- `py-*`
- `m-*`
- `mt-*`
- `mb-*`

## Typography

- `text-*`
- `font-bold`
- `font-semibold`
- `tracking-wide`

## Colors

- `bg-*`
- `text-*`
- `from-*`
- `to-*`

## Effects

- `shadow-lg`
- `shadow-xl`
- `rounded-xl`
- `rounded-2xl`
- `hover:scale-105`
- `hover:-translate-y-2`
- `transition`
- `duration-300`

## Responsive Design

- `sm:*`
- `md:*`
- `lg:*`
- `xl:*`

---

# Requirements

- Create **two new React components**.
- Use **TypeScript props** in `WorkoutCard`.
- Reuse the `WorkoutCard` component four times.
- Style everything using **Tailwind CSS**.
- Keep the application responsive.
- Do not use external UI libraries.
- Do not write custom CSS.

---

# Expected Learning Outcomes

By completing this challenge, you will practice creating reusable React
components with TypeScript, passing data through props, composing
components into larger interfaces, and building responsive layouts with
Tailwind CSS. You will also reinforce modern frontend development
practices by designing a clean and professional dashboard interface.