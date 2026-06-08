# CSS Interaction Challenge: Custom Hover Effects

## Challenge Overview

In this challenge, you will work with CSS hover effects and learn how
to override existing styles using more specific selectors.

You are provided with an HTML page containing several feature cards.
Each card uses the `.feature` class and already includes a hover effect
that changes its background color and moves the card upward using:

```css
transform: translateY(-4px);
```

Your task is to create a special card with its own custom hover
behavior.

---

## Learning Objectives

By completing this challenge, you will practice:

- CSS class selectors
- Multiple classes on a single element
- The `:hover` pseudo-class
- CSS transforms
- `translateY()`
- CSS specificity
- Overriding existing styles

---

## Requirements

### Step 1: Create a New Feature Card

Inside the `.features` container, create a new card.

The card must contain two classes:

```html
feature challenge
```

Example:

```html
<div class="feature challenge">Custom Integration</div>
```

You may choose any text you like for the card content.

---

### Step 2: Create a Custom Hover Selector

Create a CSS rule that targets the new card when the mouse pointer is
placed over it.

Use the following selector:

```css
.challenge:hover
```

---

### Step 3: Add Custom Hover Styles

When the user hovers over the new card:

1. Change the background color.
2. Move the card downward using `translateY()`.
3. Override the default hover effect applied by `.feature:hover`.

Your solution must use:

```css
transform: translateY(...);
```

Replace `...` with an appropriate value.

---

## Expected Behavior

### Regular Feature Cards

When hovered:

- Background color changes
- Card moves upward

Example:

```css
transform: translateY(-4px);
```

---

### Challenge Card

When hovered:

- Background color changes to a different color
- Card moves downward
- Default hover behavior is overridden

Example:

```css
transform: translateY(4px);
```

---

## Example Structure

### HTML

```html
<div class="feature challenge">Custom Integration</div>
```

### CSS

```css
.challenge:hover {
    background-color: purple;
    transform: translateY(4px);
}
```

---

## Technical Requirements

Your solution must include:

- A new HTML element
- Two classes on the same element
- A `:hover` selector
- A custom background color
- A `transform` property
- A `translateY()` function

---

## Expected Result

| Element Type | Hover Behavior |
|-------------|----------------|
| `.feature` | Moves up |
| `.feature.challenge` | Moves down |

---

## Goal

Create a custom feature card that behaves differently from the existing
cards by overriding the default hover effect and applying your own
interactive styling.