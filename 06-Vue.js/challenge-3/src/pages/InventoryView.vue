<script setup>

import { ref, computed } from "vue";

import "../styles/InventoryView.css";

import ProductCard from "../components/ProductCard.vue";

import { products } from "../data/products";

const search = ref("");

const selectedCategory = ref("All Categories");

const selectedFeatured = ref("All Products");

const categories = [

    "All Categories",

    "Laptops",

    "Accessories",

    "Monitors",

    "Networking",

    "Storage"

];

const featuredOptions = [

    "All Products",

    "Featured",

    "Regular"

];

const filteredProducts = computed(() => {

    return products.filter((product) => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(
                    search.value.toLowerCase()
                );

        const matchesCategory =
            selectedCategory.value ===
                "All Categories"
            ||
            product.category ===
                selectedCategory.value;

        let matchesFeatured = true;

        if (
            selectedFeatured.value ===
            "Featured"
        ) {

            matchesFeatured =
                product.featured;

        }

        if (
            selectedFeatured.value ===
            "Regular"
        ) {

            matchesFeatured =
                !product.featured;

        }

        return (
            matchesSearch &&
            matchesCategory &&
            matchesFeatured
        );

    });

});

const totalProducts = computed(() => {

    return products.length;

});

const featuredProducts = computed(() => {

    return products.filter((product) => {

        return product.featured;

    }).length;

});

const lowStockProducts = computed(() => {

    return products.filter((product) => {

        return product.stock < 10;

    }).length;

});

const averagePrice = computed(() => {

    const total =
        products.reduce((sum, product) => {

            return sum + product.price;

        }, 0);

    return (
        total / products.length
    ).toFixed(2);

});

const totalInventoryUnits = computed(() => {

    return products.reduce(

        (sum, product) => {

            return sum + product.stock;

        },

        0

    );

});

</script>

<template>

    <section class="inventory-page">

        <header class="page-header">

            <h1>

                Inventory Dashboard

            </h1>

            <p>

                Monitor inventory, search
                products, and analyze
                stock information in
                real time.

            </p>

        </header>

        <section class="statistics-grid">

            <div class="stat-card">

                <h3>

                    Total Products

                </h3>

                <p>

                    {{ totalProducts }}

                </p>

            </div>

            <div class="stat-card">

                <h3>

                    Featured Products

                </h3>

                <p>

                    {{ featuredProducts }}

                </p>

            </div>

            <div class="stat-card">

                <h3>

                    Low Stock

                </h3>

                <p>

                    {{ lowStockProducts }}

                </p>

            </div>

            <div class="stat-card">

                <h3>

                    Average Price

                </h3>

                <p>

                    ${{ averagePrice }}

                </p>

            </div>

            <div class="stat-card">

                <h3>

                    Inventory Units

                </h3>

                <p>

                    {{ totalInventoryUnits }}

                </p>

            </div>

        </section>

        <section class="filters">

            <input
                v-model="search"
                type="text"
                placeholder="Search products..."
            >

            <select
                v-model="selectedCategory"
            >

                <option
                    v-for="category
                        in categories"
                    :key="category"
                    :value="category"
                >

                    {{ category }}

                </option>

            </select>

            <select
                v-model="selectedFeatured"
            >

                <option
                    v-for="option
                        in featuredOptions"
                    :key="option"
                    :value="option"
                >

                    {{ option }}

                </option>

            </select>

        </section>

        <section
            v-if="filteredProducts.length"
            class="products-grid"
        >

            <ProductCard

                v-for="product
                    in filteredProducts"

                :key="product.id"

                :product="product"

            />

        </section>

        <section
            v-else
            class="empty-state"
        >

            <h2>

                No products found.

            </h2>

            <p>

                Try modifying your search
                or filter settings.

            </p>

        </section>

    </section>

</template>
