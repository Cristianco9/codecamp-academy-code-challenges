// ======================================
// Exercise 1 — Password Validation
// ======================================

let passwordLength = 10;

let validation =
    passwordLength >= 8
        ? "Strong password"
        : "Password too short";

console.log(validation);

// ======================================
// Exercise 2 — Free Shipping
// ======================================

let purchaseAmount = 120;

let shipping =
    purchaseAmount >= 100
        ? "Free shipping"
        : "Shipping cost applies";

console.log(shipping);

// ======================================
// Exercise 3 — Access Permission
// ======================================

let hasPermission = false;

let access =
    hasPermission
        ? "Access granted"
        : "Access denied";

console.log(access);

// ======================================
// Exercise 4 — Battery Status
// ======================================

let batteryLevel = 15;

let status =
    batteryLevel <= 20
        ? "Low battery"
        : "Battery level OK";

console.log(status);

// ======================================
// Exercise 5 — Online Status
// ======================================

let isOnline = false;

let connection =
    isOnline
        ? "User is online"
        : "User is offline";

console.log(connection);

/*
======================================
Desktop Test
======================================

Exercise 1
passwordLength = 10
=> Strong password

passwordLength = 5
=> Password too short

--------------------------------------

Exercise 2
purchaseAmount = 120
=> Free shipping

purchaseAmount = 80
=> Shipping cost applies

--------------------------------------

Exercise 3
hasPermission = true
=> Access granted

hasPermission = false
=> Access denied

--------------------------------------

Exercise 4
batteryLevel = 15
=> Low battery

batteryLevel = 75
=> Battery level OK

--------------------------------------

Exercise 5
isOnline = true
=> User is online

isOnline = false
=> User is offline

======================================
*/