// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// DOM elements
const searchInput = document.getElementById("search-input");
const productList = document.getElementById("product-list");
const resultCount = document.getElementById("result-count");

// Get all product elements
const products = productList.getElementsByTagName("li");

// Register input event
searchInput.addEventListener("input", function () {

    // Read the search text
    const searchText = searchInput.value.toLowerCase();

    // Counter for visible products
    let visibleProducts = 0;

    // Iterate through all products
    for (let i = 0; i < products.length; i++) {

        const productName = products[i].textContent.toLowerCase();

        if (productName.includes(searchText)) {

            products[i].style.display = "block";
            visibleProducts++;

        } else {

            products[i].style.display = "none";

        }
    }

    // Update result counter
    resultCount.textContent =
        "Products found: " + visibleProducts;

});