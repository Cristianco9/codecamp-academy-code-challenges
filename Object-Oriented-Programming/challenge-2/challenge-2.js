// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

class ShoppingCart {

    constructor(customerName, productName, productPrice, stock) {
        this.customerName = customerName;
        this.productName = productName;
        this.productPrice = productPrice;
        this.stock = stock;

        this.quantity = 0;
        this.discount = 0;      // Percentage
        this.taxRate = 19;      // Percentage
    }

    // Add products to the cart
    addProduct(quantity) {

        if (quantity <= 0) {
            console.log("Quantity must be greater than zero.");
            return;
        }

        if (this.quantity + quantity > this.stock) {
            console.log("Not enough stock available.");
            return;
        }

        this.quantity += quantity;

        console.log(
            quantity +
            " product(s) added successfully."
        );
    }

    // Remove products
    removeProduct(quantity) {

        if (quantity <= 0) {
            console.log("Invalid quantity.");
            return;
        }

        if (quantity > this.quantity) {
            console.log("Cannot remove more products than exist in the cart.");
            return;
        }

        this.quantity -= quantity;

        console.log(
            quantity +
            " product(s) removed successfully."
        );
    }

    // Empty the shopping cart
    emptyCart() {
        this.quantity = 0;
        console.log("Shopping cart emptied successfully.");
    }

    // Configure discount
    applyDiscount(discount) {

        if (discount < 0 || discount > 100) {
            console.log("Invalid discount percentage.");
            return;
        }

        this.discount = discount;

        console.log(
            "Discount of " +
            discount +
            "% applied."
        );
    }

    // Calculate subtotal
    calculateSubtotal() {
        return this.productPrice * this.quantity;
    }

    // Calculate discount amount
    calculateDiscount() {
        return this.calculateSubtotal() * (this.discount / 100);
    }

    // Calculate subtotal after discount
    calculateSubtotalAfterDiscount() {
        return this.calculateSubtotal() - this.calculateDiscount();
    }

    // Calculate taxes
    calculateTax() {
        return (
            this.calculateSubtotalAfterDiscount() *
            (this.taxRate / 100)
        );
    }

    // Calculate final total
    calculateTotal() {
        return (
            this.calculateSubtotalAfterDiscount() +
            this.calculateTax()
        );
    }

    // Purchase summary
    purchaseSummary() {

        console.log(`
===========================================
        PURCHASE SUMMARY
===========================================

Customer:
${this.customerName}

Product:
${this.productName}

Unit Price:
$${this.productPrice.toFixed(2)}

Quantity:
${this.quantity}

Subtotal:
$${this.calculateSubtotal().toFixed(2)}

Discount (${this.discount}%):
-$${this.calculateDiscount().toFixed(2)}

Tax (${this.taxRate}%):
+$${this.calculateTax().toFixed(2)}

Final Total:
$${this.calculateTotal().toFixed(2)}

Remaining Stock:
${this.stock - this.quantity}

===========================================
`);
    }

}

// ----------------------------------------------------
// Desktop Test
// ----------------------------------------------------

const cart = new ShoppingCart(
    "Cristian",
    "Mechanical Keyboard",
    120,
    8
);

console.log("--------------------------------");
cart.addProduct(3);

console.log("--------------------------------");
cart.addProduct(10);

console.log("--------------------------------");
cart.applyDiscount(10);

console.log("--------------------------------");
console.log(
    "Subtotal: $" +
    cart.calculateSubtotal().toFixed(2)
);

console.log("--------------------------------");
console.log(
    "Discount: $" +
    cart.calculateDiscount().toFixed(2)
);

console.log("--------------------------------");
console.log(
    "Tax: $" +
    cart.calculateTax().toFixed(2)
);

console.log("--------------------------------");
console.log(
    "Final Total: $" +
    cart.calculateTotal().toFixed(2)
);

console.log("--------------------------------");
cart.purchaseSummary();

console.log("--------------------------------");
cart.removeProduct(1);

console.log("--------------------------------");
cart.purchaseSummary();

console.log("--------------------------------");
cart.emptyCart();

console.log("--------------------------------");
cart.purchaseSummary();

/*
====================================================
DESKTOP TEST
====================================================

Customer:
Cristian

Product:
Mechanical Keyboard

Price:
$120

Stock:
8

--------------------------------

Add 3 products
Quantity = 3

Subtotal:
3 × 120 = 360

--------------------------------

Apply discount = 10%

Discount:
360 × 10% = 36

Subtotal after discount:
324

--------------------------------

Tax (19%)

324 × 19% = 61.56

--------------------------------

Final total

324 + 61.56 = 385.56

--------------------------------

Purchase Summary

Customer: Cristian
Product: Mechanical Keyboard
Quantity: 3
Subtotal: $360
Discount: $36
Tax: $61.56
Final Total: $385.56

--------------------------------

Remove 1 product

Quantity = 2

Subtotal:
240

--------------------------------

Empty cart

Quantity = 0

Subtotal = 0
Discount = 0
Tax = 0
Final Total = 0

====================================================
*/