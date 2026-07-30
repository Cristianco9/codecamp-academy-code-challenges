// Challenge 24: Temperature Converter (Celsius to Fahrenheit)

// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

/**
 * Converts Celsius to Fahrenheit
 * @param {number} celsius
 * @returns {number} fahrenheit
 */
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// ---------------------
// Desktop test
// ---------------------

const celsius = 0;
const fahrenheit = convertToFahrenheit(celsius);

console.log("fahrenheit =", fahrenheit);

/*
---------------------
Step-by-step
---------------------
celsius = 0

fahrenheit = (0 * 9/5) + 32
fahrenheit = 0 + 32
fahrenheit = 32

Output:
fahrenheit = 32
---------------------
*/