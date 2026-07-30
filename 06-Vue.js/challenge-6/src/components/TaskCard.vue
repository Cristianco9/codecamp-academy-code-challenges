<script setup>

import "../styles/TaskCard.css";

defineProps({
    task: Object
});

function priorityClass(priority) {
    if (priority === "High") return "high";
    if (priority === "Medium") return "medium";
    return "low";
}

function statusClass(status) {
    if (status === "Completed") return "completed";
    if (status === "In Progress") return "progress";
    return "pending";
}
</script>

<template>
    <article class="task-card">
        <h3>{{ task.title }}</h3>

        <p><strong>Assignee:</strong> {{ task.assignee }}</p>
        <p><strong>Hours:</strong> {{ task.hours }}</p>

        <span :class="priorityClass(task.priority)">
            {{ task.priority }}
        </span>

        <span :class="statusClass(task.status)">
            {{ task.status }}
        </span>
    </article>
</template>