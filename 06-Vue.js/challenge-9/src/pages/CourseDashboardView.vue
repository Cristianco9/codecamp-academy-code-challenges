<script setup>
import { ref, computed } from "vue";
import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard.vue";

const search = ref("");
const category = ref("All");
const level = ref("All");
const instructor = ref("All");

const uniqueInstructors = computed(() => {
    return [...new Set(
        courses.map(c => c.instructor)
    )];
});

const filteredCourses = computed(() => {
    return courses.filter(c => {

        const matchSearch =
            c.title.toLowerCase()
                .includes(search.value.toLowerCase()) ||
            c.instructor.toLowerCase()
                .includes(search.value.toLowerCase());

        const matchCategory =
            category.value === "All" ||
            c.category === category.value;

        const matchLevel =
            level.value === "All" ||
            c.level === level.value;

        const matchInstructor =
            instructor.value === "All" ||
            c.instructor === instructor.value;

        return (
            matchSearch &&
            matchCategory &&
            matchLevel &&
            matchInstructor
        );
    });
});

const totalStudents = computed(() =>
    courses.reduce((sum, c) =>
        sum + c.students, 0)
);

const avgCompletion = computed(() => {
    const total = courses.reduce(
        (sum, c) => sum + c.completionRate,
        0
    );
    return (total / courses.length).toFixed(1);
});

const totalRevenue = computed(() =>
    courses.reduce(
        (sum, c) =>
            sum + (c.price * c.students),
        0
    )
);
</script>

<template>
    <div class="page">

        <h1>Course Dashboard</h1>

        <!-- Filters -->
        <input v-model="search" placeholder="Search courses" />

        <select v-model="category">
            <option>All</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full Stack</option>
            <option>DevOps</option>
            <option>Cybersecurity</option>
            <option>Data Science</option>
        </select>

        <select v-model="level">
            <option>All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
        </select>

        <select v-model="instructor">
            <option>All</option>
            <option v-for="i in uniqueInstructors" :key="i">
                {{ i }}
            </option>
        </select>

        <!-- KPI -->
        <div class="kpi">
            <p>Total Courses: {{ courses.length }}</p>

            <p>Total Students:
                {{ totalStudents }}</p>

            <p>Avg Completion:
                {{ avgCompletion }}%</p>

            <p>Total Revenue:
                ${{ totalRevenue }}</p>
        </div>

        <!-- List -->
        <div v-if="filteredCourses.length > 0" class="grid">

            <CourseCard v-for="c in filteredCourses" :key="c.id" :course="c" />
        </div>

        <p v-else class="empty">
            No courses found matching your criteria.
        </p>

    </div>
</template>