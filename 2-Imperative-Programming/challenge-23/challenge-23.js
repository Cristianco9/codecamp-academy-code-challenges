// Challenge 23: Rectangle Area Calculator

// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

/**
 * Calculates the area of a rectangle
 * @param {number} width
 * @param {number} height
 * @returns {number} area
 */
function calculateArea(width, height) {
    return width * height;
}

// ---------------------
// Desktop test
// ---------------------

const width = 5;
const height = 3;

const area = calculateArea(width, height);

console.log("area =", area);

/*
---------------------
Step-by-step
---------------------
width = 5
height = 3

area = 5 * 3
area = 15

Output:
area = 15
---------------------
*/