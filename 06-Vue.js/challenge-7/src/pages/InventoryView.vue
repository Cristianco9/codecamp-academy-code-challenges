<script setup>
import { ref, computed } from "vue";
import "../styles/InventoryView.css";
import { inventory } from "../data/inventory";
import InventoryCard from "../components/InventoryCard.vue";

const search = ref("");
const selectedCategory = ref("All");
const selectedStock = ref("All");
const selectedSupplier = ref("All");

const categories = [
    "All",
    "Electronics",
    "Office Supplies",
    "Furniture",
    "Clothing",
    "Hardware"
];

const stockOptions = [
    "All",
    "In Stock",
    "Low Stock",
    "Out of Stock"
];

const suppliers = computed(() => {
    const set = new Set(inventory.map(i => i.supplier));
    return ["All", ...set];
});

const filteredInventory = computed(() => {
    return inventory.filter(item => {

        const matchesSearch =
            item.name.toLowerCase().includes(search.value.toLowerCase()) ||
            item.supplier.toLowerCase().includes(search.value.toLowerCase());

        const matchesCategory =
            selectedCategory.value === "All" ||
            item.category === selectedCategory.value;

        let matchesStock = true;

        if (selectedStock.value === "In Stock") {
            matchesStock = item.stock > item.minStock;
        }

        if (selectedStock.value === "Low Stock") {
            matchesStock =
                item.stock <= item.minStock &&
                item.stock > 0;
        }

        if (selectedStock.value === "Out of Stock") {
            matchesStock = item.stock === 0;
        }

        const matchesSupplier =
            selectedSupplier.value === "All" ||
            item.supplier === selectedSupplier.value;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesStock &&
            matchesSupplier
        );
    });
});

/* KPI */
const totalItems = computed(() => inventory.length);

const totalStock = computed(() =>
    inventory.reduce((sum, i) => sum + i.stock, 0)
);

const lowStock = computed(() =>
    inventory.filter(i => i.stock > 0 && i.stock <= i.minStock).length
);

const outOfStock = computed(() =>
    inventory.filter(i => i.stock === 0).length
);

const totalValue = computed(() =>
    inventory.reduce((sum, i) => sum + i.stock * i.price, 0)
);

const avgPrice = computed(() =>
    (inventory.reduce((sum, i) => sum + i.price, 0) / inventory.length).toFixed(2)
);
</script>

<template>
<section class="inventory">

    <h1>Inventory Management System</h1>

    <!-- KPI -->
    <div class="kpi">
        <div>Total Items: {{ totalItems }}</div>
        <div>Total Stock: {{ totalStock }}</div>
        <div>Low Stock: {{ lowStock }}</div>
        <div>Out of Stock: {{ outOfStock }}</div>
        <div>Total Value: ${{ totalValue }}</div>
        <div>Avg Price: ${{ avgPrice }}</div>
    </div>

    <!-- Filters -->
    <input v-model="search" placeholder="Search inventory..." />

    <select v-model="selectedCategory">
        <option v-for="c in categories" :key="c">{{ c }}</option>
    </select>

    <select v-model="selectedStock">
        <option v-for="s in stockOptions" :key="s">{{ s }}</option>
    </select>

    <select v-model="selectedSupplier">
        <option v-for="s in suppliers" :key="s">{{ s }}</option>
    </select>

    <!-- Grid -->
    <div v-if="filteredInventory.length" class="grid">
        <InventoryCard
            v-for="item in filteredInventory"
            :key="item.id"
            :item="item"
        />
    </div>

    <p v-else>No inventory items found.</p>

</section>
</template>