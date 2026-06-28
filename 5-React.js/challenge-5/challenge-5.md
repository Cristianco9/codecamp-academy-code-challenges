# React.js Practice Challenge 5: Favorite Movies Dashboard

## Objective

In this challenge, you will continue developing your React skills by creating a
small dashboard that allows users to manage a collection of favorite movies.

This exercise combines many of the concepts covered throughout the course and
reinforces the idea of building applications using reusable components and
React's component-based architecture.

By completing this challenge, you will practice:

- Functional Components
- JSX
- Props
- Component Composition
- React State (`useState`)
- Event Handling
- Conditional Rendering
- Rendering Lists with `.map()`
- Arrays of Objects
- CSS Styling
- Reusable Components

---

# Scenario

You have been hired to build part of a movie streaming platform.

The platform allows users to keep track of their favorite movies. Each movie
contains information such as its title, genre, release year, rating, and whether
the user has already watched it.

Users should also be able to mark movies as watched or not watched directly from
the dashboard.

---

# Requirements

## 1. Create a New Component

Create the following component:

```text
src/components/MovieCard.jsx
```

The component must receive a movie object as a prop.

---

## 2. Create the Movies Data

Inside `App.jsx`, create an array containing at least six movies.

Example:

```javascript
const movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Science Fiction",
        year: 2010,
        rating: 8.8,
        watched: true
    }
];
```

Each movie must contain:

- id
- title
- genre
- year
- rating
- watched

---

## 3. Display the Movie Information

Each MovieCard must display:

- Movie title
- Genre
- Release year
- Rating
- Watch status

Example:

```
Inception

Genre: Science Fiction
Year: 2010
Rating: 8.8/10

Status:
Watched
```

---

## 4. Manage Local State

Each MovieCard should manage its own watched status using `useState`.

The initial state must come from the `watched` property received through props.

Example:

```javascript
const [watched, setWatched] = useState(movie.watched);
```

---

## 5. Toggle Watch Status

Each card must include a button.

When clicked:

If the movie is currently watched:

```
Mark as Not Watched
```

Otherwise:

```
Mark as Watched
```

The displayed status should update immediately.

---

## 6. Conditional Rendering

Display different labels depending on the current state.

When watched:

```
✅ Watched
```

When not watched:

```
📺 Not Watched
```

Use different CSS classes for each status.

---

## 7. Display All Movies

Inside `App.jsx`, render all movies using `.map()`.

Each MovieCard must receive:

```jsx
<MovieCard
    key={movie.id}
    movie={movie}
/>
```

---

## 8. Create a Dashboard Summary

Above the movie list, display the following information:

```
Favorite Movies Dashboard

Total Movies: 6

Average Rating: 8.5
```

The average rating should be calculated from the array.

---

## 9. Styling

Create:

```text
src/components/MovieCard.css
```

Your design should include:

- Modern card layout
- Rounded corners
- Box shadow
- Hover animation
- Responsive grid
- Colored status badges
- Styled buttons

Be creative and improve the user interface.

---

# Expected Layout

```
---------------------------------------------------------
Favorite Movies Dashboard

Total Movies: 6
Average Rating: 8.5
---------------------------------------------------------

---------------------------------------------------------
| Inception                                        |
| Genre: Science Fiction                           |
| Year: 2010                                       |
| Rating: 8.8                                      |
|                                                  |
| ✅ Watched                                       |
|                                                  |
| [Mark as Not Watched]                            |
---------------------------------------------------------

---------------------------------------------------------
| Interstellar                                     |
| Genre: Science Fiction                           |
| Year: 2014                                       |
| Rating: 8.7                                      |
|                                                  |
| 📺 Not Watched                                   |
|                                                  |
| [Mark as Watched]                                |
---------------------------------------------------------
```

---

# Rules

- Do not modify the movie array after it is created.
- The watched state must be managed inside each MovieCard.
- Use `.map()` to render all movies.
- Use `key={movie.id}`.
- Do not use inline CSS.
- Organize your files following the project structure used throughout the
  course.

---

# Student Tasks

For this challenge, you must create:

- `MovieCard.jsx`
- `MovieCard.css`
- Update `App.jsx`
- Render all movies dynamically
- Implement local state using `useState`
- Implement conditional rendering
- Build a responsive movie dashboard

---

# Learning Objectives

By completing this challenge, you will strengthen your understanding of:

- React Components
- JSX
- Props
- State Management with `useState`
- Event Handling
- Rendering Dynamic Lists
- Conditional Rendering
- Component Composition
- Responsive UI Design
- Building reusable React components

This challenge brings together many of the core concepts covered in the course
and prepares you for building larger React applications with interactive user
interfaces.