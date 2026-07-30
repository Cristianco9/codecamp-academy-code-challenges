// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Delivery cost constants
const BASE_FEE = 5;
const COST_PER_KM = 2;

/**
 * Calculates total delivery cost based on distance
 * @param {number} distance - Distance in kilometers
 * @returns {number} total cost
 */
function calculateDeliveryCost(distance) {
    return BASE_FEE + (COST_PER_KM * distance);
}

// Example usage (desktop test)
const distance = 10;
const totalCost = calculateDeliveryCost(distance);

console.log("Total cost:", totalCost);

/*
-------------------------------------------------
DESKTOP TEST
-------------------------------------------------
distance = 10

totalCost = 5 + (2 * 10)
totalCost = 5 + 20
totalCost = 25

Output:
Total cost: 25
-------------------------------------------------
*/