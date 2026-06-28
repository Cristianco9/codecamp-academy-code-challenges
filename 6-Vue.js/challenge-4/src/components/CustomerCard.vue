<script setup>

import "../styles/CustomerCard.css";

const props = defineProps({
    customer: {
        type: Object,
        required: true
    }
});

function getStatusClass(status) {

    switch (status) {

        case "Active":
            return "active";

        case "Prospect":
            return "prospect";

        default:
            return "inactive";

    }

}

function getStatusLabel(status) {

    switch (status) {

        case "Active":
            return "✅ Active";

        case "Prospect":
            return "🟡 Prospect";

        default:
            return "🔴 Inactive";

    }

}

const initials = props.customer.name
    .split(" ")
    .map((word) => word[0])
    .join("");

</script>

<template>

    <article class="customer-card">

        <header class="card-header">

            <div class="avatar">

                {{ initials }}

            </div>

            <div class="customer-info">

                <h2>

                    {{ customer.name }}

                </h2>

                <p class="company">

                    {{ customer.company }}

                </p>

            </div>

        </header>

        <section class="customer-details">

            <p>

                <strong>Industry:</strong>

                {{ customer.industry }}

            </p>

            <p>

                <strong>Country:</strong>

                {{ customer.country }}

            </p>

            <p>

                <strong>Total Purchases:</strong>

                ${{ customer.totalPurchases.toLocaleString() }}

            </p>

        </section>

        <footer class="card-footer">

            <span
                class="status-badge"
                :class="
                    getStatusClass(
                        customer.status
                    )
                "
            >

                {{ getStatusLabel(customer.status) }}

            </span>

            <span
                v-if="customer.premium"
                class="premium-badge"
            >

                ⭐ Premium Customer

            </span>

        </footer>

    </article>

</template>