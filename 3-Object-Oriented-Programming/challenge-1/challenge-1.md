# Challenge 1: Introduction to Classes and Objects in JavaScript

## Introduction

Object-Oriented Programming (OOP) is one of the most widely used programming
paradigms in modern software development. Instead of writing programs only as a
sequence of instructions, OOP organizes code into **objects** that represent
real-world entities.

In JavaScript, a **class** serves as a blueprint for creating objects. A class
defines the **properties (attributes)** and **methods (behaviors)** that every
object created from it will have.

For example, every dog has characteristics such as:

- Name
- Breed
- Age
- Color
- Energy level

Additionally, every dog can perform actions such as:

- Barking
- Eating
- Playing
- Displaying its information

By modeling these characteristics and behaviors inside a class, we can create
multiple dog objects that share the same structure while maintaining their own
individual data.

This approach makes programs easier to organize, reuse, maintain, and extend.

---

## Problem Description

Create a JavaScript class named `Dog` that models the behavior of a real dog.

Each dog object must store its own information and be able to perform several
actions that affect its internal state.

Your program must create **two different dog objects** and demonstrate how each
object maintains its own independent data while sharing the same methods defined
in the class.

---

## Requirements

### 1. Create the `Dog` class

The class must include the following properties:

- `name`
- `breed`
- `age`
- `color`
- `energy`

The `energy` property should start with a value of **100** when a new dog is
created.

---

### 2. Create a constructor

The constructor must receive the following parameters:

- `name`
- `breed`
- `age`
- `color`

Initialize the `energy` property inside the constructor.

---

### 3. Implement the following methods

#### `bark()`

Print a message indicating that the dog is barking.

Example:

```
Max says: Woof! Woof!
```

---

#### `eat()`

The dog regains energy after eating.

Rules:

- If the energy is between **0 and 90**, increase the energy by **10**.
- If the energy is greater than **90**, indicate that the dog is already full.
- If the energy is below **0**, indicate that the dog can no longer eat.

---

#### `play()`

Playing consumes energy.

Rules:

- If the dog has at least **10 energy points**, reduce the energy by **20**.
- If the dog has less than **10 energy points**, indicate that it is too tired
  to play.

---

#### `showInfo()`

Display all information about the dog, including:

- Name
- Breed
- Age
- Color
- Current energy level

---

### 4. Create Objects

Create two different dog objects, for example:

- Max
- Tony

Use different values for their properties.

---

### 5. Test the Methods

Call each method several times to observe how the energy changes.

Example sequence:

- Eat
- Play multiple times
- Eat again
- Bark several times
- Display the final information

---

## Expected Concepts

By completing this challenge, you will practice:

- Classes
- Objects
- Constructors
- Properties
- Methods
- The `this` keyword
- Object instantiation using `new`
- State changes inside an object
- Encapsulation of data and behavior

---

## Bonus Challenge

Modify the `play()` method so that if the dog's energy becomes less than **0**,
the program displays a special message indicating that the dog has no energy
remaining.

You may also add new methods such as:

- `sleep()`
- `run()`
- `drinkWater()`
- `takeBath()`

that modify the dog's internal state.

---

## Learning Outcome

After completing this challenge, you should be able to:

- Design your own JavaScript classes.
- Create multiple objects from the same class.
- Understand how each object stores its own data.
- Implement methods that modify an object's internal state.
- Model real-world entities using Object-Oriented Programming principles.