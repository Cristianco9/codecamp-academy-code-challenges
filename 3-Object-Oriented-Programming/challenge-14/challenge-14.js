// Challenge 14: Online Store Product Catalog

// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Product object
const product = {
    productId: "PRD-5001",
    productName: "UltraBook Pro 14",
    brand: "TechVision",
    category: "Laptop",
    model: "TBP-14X",
    priceUSD: 1299.99,
    discountPercentage: 10,
    currency: "USD",
    stockQuantity: 35,
    isAvailable: true,
    averageRating: 4.8,
    reviewCount: 284,

    features: [
        "14-inch IPS Display",
        "Intel Core i7 Processor",
        "16GB RAM",
        "512GB SSD",
        "Backlit Keyboard"
    ],

    specifications: {
        processor: "Intel Core i7-13700H",
        memoryGB: 16,
        storageGB: 512,
        operatingSystem: "Windows 11 Pro"
    },

    dimensions: {
        widthCm: 31.5,
        depthCm: 22.3,
        thicknessCm: 1.7,
        weightKg: 1.45
    },

    shippingInformation: {
        freeShipping: true,
        estimatedDeliveryDays: 3,
        shippingProvider: "Express Logistics"
    },

    seller: {
        companyName: "TechVision Store",
        country: "United States",
        sellerRating: 4.9
    },

    getProductSummary: function () {
        return (
            this.brand +
            " " +
            this.productName +
            " - $" +
            this.priceUSD +
            " (" +
            this.discountPercentage +
            "% off)"
        );
    }
};

// ---------------------
// Desktop Test
// ---------------------

console.log(product);

console.log("Product ID:", product.productId);
console.log("Product Name:", product.productName);
console.log("Brand:", product.brand);
console.log("Category:", product.category);
console.log("Price: $" + product.priceUSD);
console.log("Available:", product.isAvailable);

console.log("Features:");
console.log(product.features);

console.log("Specifications:");
console.log(product.specifications);

console.log("Shipping Information:");
console.log(product.shippingInformation);

console.log("Seller Information:");
console.log(product.seller);

console.log("Product Summary:");
console.log(product.getProductSummary());

/*
-------------------------------------------------
DESKTOP TEST (EXPECTED OUTPUT)
-------------------------------------------------

Print complete product object.

Product ID: PRD-5001
Product Name: UltraBook Pro 14
Brand: TechVision
Category: Laptop
Price: $1299.99
Available: true

Features:
[
  "14-inch IPS Display",
  "Intel Core i7 Processor",
  "16GB RAM",
  "512GB SSD",
  "Backlit Keyboard"
]

Specifications:
{
  processor: "Intel Core i7-13700H",
  memoryGB: 16,
  storageGB: 512,
  operatingSystem: "Windows 11 Pro"
}

Shipping Information:
{
  freeShipping: true,
  estimatedDeliveryDays: 3,
  shippingProvider: "Express Logistics"
}

Seller Information:
{
  companyName: "TechVision Store",
  country: "United States",
  sellerRating: 4.9
}

Product Summary:
TechVision UltraBook Pro 14 - $1299.99 (10% off)

-------------------------------------------------
*/