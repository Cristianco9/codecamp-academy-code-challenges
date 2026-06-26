// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// ==============================
// Parent Class
// ==============================
class Meal {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    showInformation() {
        console.log(`
==============================
Meal Information
==============================
Name: ${this.name}
Category: ${this.category}
Price: $${this.price}
`);
    }

    prepareMeal() {
        console.log("Preparing meal...");
    }
}

// ==============================
// Burger Class
// ==============================
class Burger extends Meal {
    constructor(name, price, hasCheese) {
        super(name, price, "Burger");
        this.hasCheese = hasCheese;
    }

    prepareMeal() {
        console.log("Grilling the burger and preparing ingredients.");

        if (this.hasCheese) {
            console.log("Adding cheese to the burger.");
        } else {
            console.log("Preparing burger without cheese.");
        }
    }
}

// ==============================
// Pizza Class
// ==============================
class Pizza extends Meal {
    constructor(name, price, size) {
        super(name, price, "Pizza");
        this.size = size;
    }

    prepareMeal() {
        console.log(
            `Baking the ${this.size.toLowerCase()} pizza in the oven.`
        );
    }
}

// ==============================
// Salad Class
// ==============================
class Salad extends Meal {
    constructor(name, price, dressing) {
        super(name, price, "Salad");
        this.dressing = dressing;
    }

    prepareMeal() {
        console.log(
            `Preparing fresh vegetables and adding ${this.dressing} dressing.`
        );
    }
}

// ==============================
// Create Objects
// ==============================
const burger = new Burger(
    "Classic Cheeseburger",
    12.99,
    true
);

const pizza = new Pizza(
    "Pepperoni Pizza",
    18.50,
    "Large"
);

const salad = new Salad(
    "Caesar Salad",
    9.75,
    "Caesar"
);

// ==============================
// Store Objects in an Array
// ==============================
const menu = [burger, pizza, salad];

// ==============================
// Demonstrate Polymorphism
// ==============================
console.log("==================================");
console.log("RESTAURANT MENU");
console.log("==================================");

for (const meal of menu) {
    meal.showInformation();
    meal.prepareMeal();
    console.log("----------------------------------");
}

/*
==================================
Expected Output
==================================

Meal Information
Name: Classic Cheeseburger
Category: Burger
Price: $12.99

Grilling the burger and preparing ingredients.
Adding cheese to the burger.

----------------------------------

Meal Information
Name: Pepperoni Pizza
Category: Pizza
Price: $18.5

Baking the large pizza in the oven.

----------------------------------

Meal Information
Name: Caesar Salad
Category: Salad
Price: $9.75

Preparing fresh vegetables and adding Caesar dressing.

----------------------------------

Notice that the same method call:

meal.prepareMeal();

produces different behavior depending on the object's class.
This is polymorphism.
*/