<script setup>
import { ref, computed } from "vue";
import { jobs } from "@/data/jobs";
import JobCard from "@/components/JobCard.vue";
import "@/styles/JobBoardView.css";

const search = ref("");
const category = ref("All");
const type = ref("All");
const status = ref("All");
const company = ref("All");

const uniqueCompanies = computed(() => {
    return [...new Set(
        jobs.map(j => j.company)
    )];
});

const filteredJobs = computed(() => {
    return jobs.filter(j => {

        const matchSearch =
            j.title.toLowerCase()
                .includes(search.value.toLowerCase()) ||
            j.company.toLowerCase()
                .includes(search.value.toLowerCase());

        const matchCategory =
            category.value === "All" ||
            j.category === category.value;

        const matchType =
            type.value === "All" ||
            j.type === type.value;

        const matchStatus =
            status.value === "All" ||
            j.status === status.value;

        const matchCompany =
            company.value === "All" ||
            j.company === company.value;

        return (
            matchSearch &&
            matchCategory &&
            matchType &&
            matchStatus &&
            matchCompany
        );
    });
});

const openJobs = computed(() =>
    jobs.filter(j => j.status === "Open").length
);

const closedJobs = computed(() =>
    jobs.filter(j => j.status === "Closed").length
);

const totalApplications = computed(() =>
    jobs.reduce((sum, j) =>
        sum + j.applications, 0)
);

const avgApplications = computed(() => {
    return (
        totalApplications.value / jobs.length
    ).toFixed(1);
});

const topJob = computed(() => {
    return jobs.reduce((max, job) =>
        job.applications > (max?.applications || 0)
            ? job
            : max,
        null
    );
});
</script>

<template>
    <div class="page">

        <h1>Job Board Dashboard</h1>

        <!-- Filters -->
        <input v-model="search" placeholder="Search jobs" />

        <select v-model="category">
            <option>All</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full Stack</option>
            <option>DevOps</option>
            <option>Cybersecurity</option>
            <option>Data Science</option>
        </select>

        <select v-model="type">
            <option>All</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Contract</option>
            <option>Internship</option>
        </select>

        <select v-model="status">
            <option>All</option>
            <option>Open</option>
            <option>Closed</option>
        </select>

        <select v-model="company">
            <option>All</option>
            <option v-for="c in uniqueCompanies" :key="c">
                {{ c }}
            </option>
        </select>

        <!-- KPI -->
        <div class="kpi">
            <p>Total Jobs: {{ jobs.length }}</p>
            <p>Open Jobs: {{ openJobs }}</p>
            <p>Closed Jobs: {{ closedJobs }}</p>
            <p>Total Applications:
                {{ totalApplications }}</p>
            <p>Avg Applications:
                {{ avgApplications }}</p>
            <p>Top Job:
                {{ topJob?.title }}</p>
        </div>

        <!-- LIST -->
        <div v-if="filteredJobs.length > 0" class="grid">

            <JobCard v-for="j in filteredJobs" :key="j.id" :job="j" />
        </div>

        <p v-else class="empty">
            No jobs found matching your criteria.
        </p>

    </div>
</template>