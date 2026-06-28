<script setup>
import { ref, computed } from "vue";
import { leads } from "@/data/leads";
import "@/styles/LeadsView.css";
import LeadCard from "@/components/LeadCard.vue";

const search = ref("");
const status = ref("All");
const source = ref("All");
const assigned = ref("All");

const uniqueAssigned = computed(() => {
    return [...new Set(leads.map(l => l.assignedTo))];
});

const filteredLeads = computed(() => {
    return leads.filter(l => {
        const matchesSearch =
            l.name.toLowerCase().includes(
                search.value.toLowerCase()
            ) ||
            l.email.toLowerCase().includes(
                search.value.toLowerCase()
            ) ||
            l.phone.includes(search.value);

        const matchesStatus =
            status.value === "All" ||
            l.status === status.value;

        const matchesSource =
            source.value === "All" ||
            l.source === source.value;

        const matchesAssigned =
            assigned.value === "All" ||
            l.assignedTo === assigned.value;

        return (
            matchesSearch &&
            matchesStatus &&
            matchesSource &&
            matchesAssigned
        );
    });
});

const wonCount = computed(() =>
    leads.filter(l => l.status === "Won").length
);

const lostCount = computed(() =>
    leads.filter(l => l.status === "Lost").length
);

const totalValue = computed(() =>
    leads.reduce((sum, l) => sum + l.value, 0)
);
</script>

<template>
    <div>
        <h1>CRM Leads Dashboard</h1>

        <!-- Filters -->
        <input v-model="search" placeholder="Search leads" />

        <select v-model="status">
            <option>All</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Qualified</option>
            <option>Proposal</option>
            <option>Won</option>
            <option>Lost</option>
        </select>

        <select v-model="source">
            <option>All</option>
            <option>Website</option>
            <option>Referral</option>
            <option>Social Media</option>
            <option>Cold Call</option>
            <option>Email Campaign</option>
        </select>

        <select v-model="assigned">
            <option>All</option>
            <option v-for="a in uniqueAssigned"
                :key="a">
                {{ a }}
            </option>
        </select>

        <!-- KPI -->
        <div>
            <p>Total Leads: {{ leads.length }}</p>
            <p>Won: {{ wonCount }}</p>
            <p>Lost: {{ lostCount }}</p>
            <p>Total Value: ${{ totalValue }}</p>
        </div>

        <!-- List -->
        <div v-if="filteredLeads.length > 0">
            <LeadCard
                v-for="lead in filteredLeads"
                :key="lead.id"
                :lead="lead"
            />
        </div>

        <p v-else>
            No leads found matching your criteria.
        </p>
    </div>
</template>