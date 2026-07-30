<script setup>
import { computed } from "vue";

import "../styles/LeadCard.css";

const props = defineProps({
    lead: Object
});

const statusClass = computed(() => {
    return {
        new: props.lead.status === "New",
        contacted: props.lead.status === "Contacted",
        qualified: props.lead.status === "Qualified",
        proposal: props.lead.status === "Proposal",
        won: props.lead.status === "Won",
        lost: props.lead.status === "Lost"
    };
});
</script>

<template>
    <div class="card" :class="statusClass">
        <h3>{{ lead.name }}</h3>

        <p>{{ lead.email }}</p>
        <p>{{ lead.phone }}</p>

        <p><b>Source:</b> {{ lead.source }}</p>
        <p><b>Assigned:</b> {{ lead.assignedTo }}</p>

        <p><b>Status:</b> {{ lead.status }}</p>

        <p><b>Value:</b> ${{ lead.value }}</p>
    </div>
</template>