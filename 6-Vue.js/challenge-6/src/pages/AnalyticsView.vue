<script setup>
import "../styles/AnalyticsView.css";
import { ref, computed } from "vue";
import { tasks } from "../data/tasks";
import TaskCard from "../components/TaskCard.vue";

const search = ref("");
const selectedPriority = ref("All");
const selectedStatus = ref("All");
const selectedAssignee = ref("All");

const priorities = ["All", "Low", "Medium", "High"];
const statuses = ["All", "Completed", "In Progress", "Pending"];

const assignees = computed(() => {
    const unique = new Set(tasks.map(t => t.assignee));
    return ["All", ...unique];
});

const filteredTasks = computed(() => {
    return tasks.filter(task => {

        const matchesSearch =
            task.title.toLowerCase().includes(search.value.toLowerCase()) ||
            task.assignee.toLowerCase().includes(search.value.toLowerCase());

        const matchesPriority =
            selectedPriority.value === "All" ||
            task.priority === selectedPriority.value;

        const matchesStatus =
            selectedStatus.value === "All" ||
            task.status === selectedStatus.value;

        const matchesAssignee =
            selectedAssignee.value === "All" ||
            task.assignee === selectedAssignee.value;

        return matchesSearch && matchesPriority && matchesStatus && matchesAssignee;
    });
});

const totalTasks = computed(() => tasks.length);

const completedTasks = computed(() =>
    tasks.filter(t => t.status === "Completed").length
);

const pendingTasks = computed(() =>
    tasks.filter(t => t.status === "Pending").length
);

const inProgressTasks = computed(() =>
    tasks.filter(t => t.status === "In Progress").length
);

const totalHours = computed(() =>
    tasks.reduce((sum, t) => sum + t.hours, 0)
);

const avgHours = computed(() =>
    (totalHours.value / tasks.length).toFixed(1)
);

const completionRate = computed(() =>
    ((completedTasks.value / tasks.length) * 100).toFixed(1)
);
</script>

<template>
    <section class="analytics">

        <h1>Task Analytics Dashboard</h1>

        <!-- KPI -->
        <div class="kpi">
            <div>Total: {{ totalTasks }}</div>
            <div>Completed: {{ completedTasks }}</div>
            <div>Pending: {{ pendingTasks }}</div>
            <div>In Progress: {{ inProgressTasks }}</div>
            <div>Total Hours: {{ totalHours }}</div>
            <div>Avg Hours: {{ avgHours }}</div>
            <div>Completion: {{ completionRate }}%</div>
        </div>

        <!-- Filters -->
        <input v-model="search" placeholder="Search tasks..." />

        <select v-model="selectedPriority">
            <option v-for="p in priorities" :key="p">{{ p }}</option>
        </select>

        <select v-model="selectedStatus">
            <option v-for="s in statuses" :key="s">{{ s }}</option>
        </select>

        <select v-model="selectedAssignee">
            <option v-for="a in assignees" :key="a">{{ a }}</option>
        </select>

        <!-- Tasks -->
        <div v-if="filteredTasks.length" class="grid">
            <TaskCard v-for="task in filteredTasks" :key="task.id" :task="task" />
        </div>

        <p v-else>No tasks found.</p>

    </section>
</template>