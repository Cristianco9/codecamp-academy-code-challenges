<script setup>

import "../styles/CustomersView.css";

import { ref, computed } from "vue";

import CustomerCard from "../components/CustomerCard.vue";

import { customers } from "../data/customers";

const search = ref("");

const selectedIndustry = ref("All Industries");

const selectedStatus = ref("All Statuses");

const selectedPremium = ref("All Customers");

const industries = [
    "All Industries",
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail"
];

const statuses = [
    "All Statuses",
    "Active",
    "Prospect",
    "Inactive"
];

const premiumOptions = [
    "All Customers",
    "Premium",
    "Standard"
];

const filteredCustomers = computed(() => {

    return customers.filter((customer) => {

        const searchText =
            search.value.toLowerCase();

        const matchesSearch =
            customer.name
                .toLowerCase()
                .includes(searchText)
            ||
            customer.company
                .toLowerCase()
                .includes(searchText);

        const matchesIndustry =
            selectedIndustry.value ===
                "All Industries"
            ||
            customer.industry ===
                selectedIndustry.value;

        const matchesStatus =
            selectedStatus.value ===
                "All Statuses"
            ||
            customer.status ===
                selectedStatus.value;

        let matchesPremium = true;

        if (
            selectedPremium.value ===
            "Premium"
        ) {

            matchesPremium =
                customer.premium;

        }

        if (
            selectedPremium.value ===
            "Standard"
        ) {

            matchesPremium =
                !customer.premium;

        }

        return (
            matchesSearch &&
            matchesIndustry &&
            matchesStatus &&
            matchesPremium
        );

    });

});

const totalCustomers = computed(() => {

    return customers.length;

});

const premiumCustomers = computed(() => {

    return customers.filter((customer) => {

        return customer.premium;

    }).length;

});

const activeCustomers = computed(() => {

    return customers.filter((customer) => {

        return customer.status ===
            "Active";

    }).length;

});

const prospectCustomers = computed(() => {

    return customers.filter((customer) => {

        return customer.status ===
            "Prospect";

    }).length;

});

const inactiveCustomers = computed(() => {

    return customers.filter((customer) => {

        return customer.status ===
            "Inactive";

    }).length;

});

const averagePurchase = computed(() => {

    const total =
        customers.reduce((sum, customer) => {

            return (
                sum +
                customer.totalPurchases
            );

        }, 0);

    return (
        total / customers.length
    ).toFixed(2);

});

const totalRevenue = computed(() => {

    return customers.reduce(

        (sum, customer) => {

            return (
                sum +
                customer.totalPurchases
            );

        },

        0

    );

});

</script>

<template>

<section class="customers-page">

    <header class="page-header">

        <h1>

            Customer Relationship
            Management

        </h1>

        <p>

            Manage customer
            relationships, monitor
            activity, and analyze
            business performance.

        </p>

    </header>

    <section class="statistics-grid">

        <div class="stat-card">

            <h3>Total Customers</h3>

            <p>{{ totalCustomers }}</p>

        </div>

        <div class="stat-card">

            <h3>Premium</h3>

            <p>{{ premiumCustomers }}</p>

        </div>

        <div class="stat-card">

            <h3>Active</h3>

            <p>{{ activeCustomers }}</p>

        </div>

        <div class="stat-card">

            <h3>Prospects</h3>

            <p>{{ prospectCustomers }}</p>

        </div>

        <div class="stat-card">

            <h3>Inactive</h3>

            <p>{{ inactiveCustomers }}</p>

        </div>

        <div class="stat-card">

            <h3>

                Average Purchase

            </h3>

            <p>

                ${{
                    Number(
                        averagePurchase
                    ).toLocaleString()
                }}

            </p>

        </div>

        <div class="stat-card">

            <h3>

                Total Revenue

            </h3>

            <p>

                ${{
                    totalRevenue
                        .toLocaleString()
                }}

            </p>

        </div>

    </section>

    <section class="filters">

        <input
            v-model="search"
            type="text"
            placeholder="Search customers..."
        >

        <select
            v-model="selectedIndustry"
        >

            <option
                v-for="industry
                    in industries"
                :key="industry"
                :value="industry"
            >

                {{ industry }}

            </option>

        </select>

        <select
            v-model="selectedStatus"
        >

            <option
                v-for="status
                    in statuses"
                :key="status"
                :value="status"
            >

                {{ status }}

            </option>

        </select>

        <select
            v-model="selectedPremium"
        >

            <option
                v-for="option
                    in premiumOptions"
                :key="option"
                :value="option"
            >

                {{ option }}

            </option>

        </select>

    </section>

    <section
        v-if="filteredCustomers.length"
        class="customers-grid"
    >

        <CustomerCard

            v-for="customer
                in filteredCustomers"

            :key="customer.id"

            :customer="customer"

        />

    </section>

    <section
        v-else
        class="empty-state"
    >

        <h2>

            No customers found.

        </h2>

        <p>

            Try changing your
            search or filters.

        </p>

    </section>

</section>

</template>