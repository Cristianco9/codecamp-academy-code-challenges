<script setup>

import "../styles/EmployeeCard.css";

const props = defineProps({
    employee: {
        type: Object,
        required: true
    }
});

function getStatusClass(status) {

    switch (status) {

        case "Active":
            return "active";

        default:
            return "on-leave";

    }

}

const initials = props.employee.name
    .split(" ")
    .map((word) => word[0])
    .join("");

</script>

<template>

    <article class="employee-card">

        <div class="employee-header">

            <div class="avatar">

                {{ initials }}

            </div>

            <div>

                <h2>{{ employee.name }}</h2>

                <p class="position">

                    {{ employee.position }}

                </p>

            </div>

        </div>

        <div class="employee-details">

            <p>

                <strong>Department:</strong>

                {{ employee.department }}

            </p>

            <p>

                <strong>Experience:</strong>

                {{ employee.experience }}
                Years

            </p>

        </div>

        <span
            class="status-badge"
            :class="getStatusClass(employee.status)"
        >

            <template
                v-if="employee.status === 'Active'"
            >

                ✅ {{ employee.status }}

            </template>

            <template
                v-else
            >

                🟡 {{ employee.status }}

            </template>

        </span>

    </article>

</template>