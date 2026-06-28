<script setup>

import "../styles/ProductCard.css";

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

function getStockClass(stock) {

    if (stock > 30) {

        return "in-stock";

    }

    if (stock >= 10) {

        return "limited-stock";

    }

    return "low-stock";

}

function getStockLabel(stock) {

    if (stock > 30) {

        return "🟢 In Stock";

    }

    if (stock >= 10) {

        return "🟡 Limited Stock";

    }

    return "🔴 Low Stock";

}

</script>

<template>

    <article class="product-card">

        <header class="card-header">

            <div>

                <h2>

                    {{ product.name }}

                </h2>

                <p class="category">

                    {{ product.category }}

                </p>

            </div>

            <span
                v-if="product.featured"
                class="featured-badge"
            >

                ⭐ Featured

            </span>

        </header>

        <section class="product-details">

            <p>

                <strong>Supplier:</strong>

                {{ product.supplier }}

            </p>

            <p>

                <strong>Price:</strong>

                ${{ product.price.toFixed(2) }}

            </p>

            <p>

                <strong>Stock:</strong>

                {{ product.stock }} Units

            </p>

        </section>

        <footer class="card-footer">

            <span
                class="stock-badge"
                :class="
                    getStockClass(product.stock)
                "
            >

                {{ getStockLabel(product.stock) }}

            </span>

        </footer>

    </article>

</template>