// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// =============================
// DOM Elements
// =============================
const addButtons = document.querySelectorAll(".add-btn");
const cartList = document.getElementById("cart-list");
const itemsCount = document.getElementById("items-count");
const total = document.getElementById("total");

// =============================
// Application State
// =============================
const cart = [];

let totalPrice = 0;

// =============================
// Register Events
// =============================
for (let i = 0; i < addButtons.length; i++) {

    addButtons[i].addEventListener("click", function () {

        // Read button data
        const productName = this.dataset.name;
        const productPrice = Number(this.dataset.price);

        // Store product
        cart.push({
            name: productName,
            price: productPrice
        });

        // Update total
        totalPrice += productPrice;

        // Refresh interface
        updateCart();

    });

}

// =============================
// Update Interface
// =============================
function updateCart() {

    // Remove old items
    cartList.innerHTML = "";

    // Create new list
    for (let i = 0; i < cart.length; i++) {

        const item = document.createElement("li");

        item.textContent =
            cart[i].name +
            " - $" +
            cart[i].price.toFixed(2);

        cartList.appendChild(item);

    }

    // Update item count
    itemsCount.textContent =
        "Items in cart: " + cart.length;

    // Update total
    total.textContent =
        "Total: $" + totalPrice.toFixed(2);

}