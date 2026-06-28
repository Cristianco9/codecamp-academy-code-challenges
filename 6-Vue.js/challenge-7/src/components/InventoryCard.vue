<script setup>

import "../styles/InventoryCard.css";

defineProps({
    item: Object
});

function getStatus(item) {
    if (item.stock === 0) return "out";
    if (item.stock <= item.minStock) return "low";
    return "good";
}

function statusLabel(item) {
    if (item.stock === 0) return "Out of Stock";
    if (item.stock <= item.minStock) return "Low Stock";
    return "In Stock";
}

const getTotalValue = (item) => {
    return item.stock * item.price;
};
</script>

<template>
    <div class="card">
        <h3>{{ item.name }}</h3>

        <p>{{ item.category }}</p>

        <p><strong>Supplier:</strong> {{ item.supplier }}</p>

        <p><strong>Stock:</strong> {{ item.stock }}</p>

        <p><strong>Min:</strong> {{ item.minStock }}</p>

        <p><strong>Total Value:</strong> ${{ getTotalValue(item) }}</p>

        <span :class="getStatus(item)">
            {{ statusLabel(item) }}
        </span>
    </div>
</template>