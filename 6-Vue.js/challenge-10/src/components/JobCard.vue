<script setup>
import { computed } from "vue";
import "../styles/JobCard.css";

const props = defineProps({
    job: Object
});

const statusClass = computed(() => {
    return {
        open: props.job.status === "Open",
        closed: props.job.status === "Closed"
    };
});

const applicationRate = computed(() => {
    return Math.min(
        props.job.applications * 2,
        100
    );
});
</script>

<template>
    <div class="card" :class="statusClass">

        <h3>{{ job.title }}</h3>

        <p><b>Company:</b> {{ job.company }}</p>
        <p><b>Location:</b> {{ job.location }}</p>
        <p><b>Type:</b> {{ job.type }}</p>
        <p><b>Category:</b> {{ job.category }}</p>

        <p><b>Salary:</b> ${{ job.salary }}</p>
        <p><b>Applications:</b>
            {{ job.applications }}</p>

        <p><b>Status:</b> {{ job.status }}</p>

        <div class="bar">
            <div class="fill"
                :style="{ width: applicationRate + '%' }">
            </div>
        </div>

    </div>
</template>