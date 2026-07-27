# Code Challenge 5: Build an Event Schedule Dashboard

---

## Challenge Overview

Your company is developing an **Event Management Dashboard** for a technology 
conference. The dashboard allows attendees to explore the conference schedule 
and discover featured speakers.

Your task is to expand the existing Vue.js application by creating
**two new reusable Vue components** using **Vue.js**, **TypeScript**, and
**Tailwind CSS**.

The objective is to practice component composition, typed props, and responsive 
interface design while building a professional dashboard.

---

# Part 1 — Create the `SpeakerCard` Component

Create a new component named:

```text
SpeakerCard.vue
```

The component must receive its information using `defineProps()` with **TypeScript**.

Each card should display:

- Speaker photo
- Speaker name
- Job title
- Company
- Topic
- Presentation time
- "View Profile" button

Example:

```text
+----------------------------------+

[Photo]

Sarah Johnson

Senior Software Engineer

Google

Modern Web Architecture

10:30 AM

[View Profile]

+----------------------------------+
```

Use Tailwind CSS to create a modern card layout.

---

# Part 2 — Create the `SpeakersSection` Component

Create another component named:

```text
SpeakersSection.vue
```

Requirements:

- Add a professional section title.
- Add a short introduction.
- Display **four SpeakerCard components**.
- Organize the cards using a responsive CSS Grid layout.

Example:

```text
Featured Speakers

Meet industry experts presenting at this year's conference.
```

---

# Part 3 — Improve the Design

Use Tailwind CSS utilities to create a professional interface.

Practice using:

- Rounded corners
- Shadows
- Hover animations
- Smooth transitions
- Responsive spacing
- Modern typography
- Color utilities

---

# Part 4 — Update the Application

Import the new component into `App.vue`.

Place it below the Hero section.

Example:

```text
Header

↓

Hero

↓

Featured Speakers

↓

Statistics

↓

Footer
```

---

# Vue.js Concepts

Practice the following concepts:

- Vue Single File Components (`.vue`)
- `defineProps()`
- TypeScript interfaces
- Component composition
- Importing components
- Template syntax

---

# Tailwind CSS Concepts

## Layout

- `grid`
- `flex`
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

- Create **two new Vue components**.
- Use **TypeScript** with `defineProps()`.
- Reuse the `SpeakerCard` component four times.
- Style everything using **Tailwind CSS**.
- Keep the application fully responsive.
- Do not use external UI libraries.
- Do not write custom CSS.

---

# Expected Learning Outcomes

By completing this challenge, you will practice creating reusable Vue
components with TypeScript, passing data through `defineProps()`,
composing components into a larger application, and designing responsive
user interfaces using Tailwind CSS. You will also reinforce Vue's
component-based architecture and modern frontend development practices.