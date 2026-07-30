<script setup>

import { ref, computed } from "vue";

import "../styles/CoursesView.css";

import CourseCard from "../components/CourseCard.vue";

import { courses } from "../data/courses";

const search = ref("");

const selectedDepartment = ref("All Departments");

const selectedLevel = ref("All Levels");

const selectedAvailability = ref("All Courses");

const departments = [
    "All Departments",
    "Computer Science",
    "Business",
    "Mathematics",
    "Design",
    "Cybersecurity"
];

const levels = [
    "All Levels",
    "Beginner",
    "Intermediate",
    "Advanced"
];

const availabilityOptions = [
    "All Courses",
    "Open",
    "Full"
];

const filteredCourses = computed(() => {

    return courses.filter((course) => {

        const searchText =
            search.value.toLowerCase();

        const matchesSearch =
            course.title
                .toLowerCase()
                .includes(searchText)
            ||
            course.instructor
                .toLowerCase()
                .includes(searchText);

        const matchesDepartment =
            selectedDepartment.value ===
                "All Departments"
            ||
            course.department ===
                selectedDepartment.value;

        const matchesLevel =
            selectedLevel.value ===
                "All Levels"
            ||
            course.level ===
                selectedLevel.value;

        let matchesAvailability = true;

        const isOpen =
            course.enrolledStudents <
            course.maxStudents;

        if (
            selectedAvailability.value ===
            "Open"
        ) {

            matchesAvailability = isOpen;

        }

        if (
            selectedAvailability.value ===
            "Full"
        ) {

            matchesAvailability = !isOpen;

        }

        return (
            matchesSearch &&
            matchesDepartment &&
            matchesLevel &&
            matchesAvailability
        );

    });

});

const totalCourses = computed(() => {

    return courses.length;

});

const openCourses = computed(() => {

    return courses.filter((c) => {

        return (
            c.enrolledStudents <
            c.maxStudents
        );

    }).length;

});

const fullCourses = computed(() => {

    return courses.filter((c) => {

        return (
            c.enrolledStudents ===
            c.maxStudents
        );

    }).length;

});

const totalStudents = computed(() => {

    return courses.reduce(
        (sum, c) => sum + c.enrolledStudents,
        0
    );

});

const averageDuration = computed(() => {

    const total = courses.reduce(
        (sum, c) => sum + c.duration,
        0
    );

    return (total / courses.length).toFixed(1);

});

const averageEnrollment = computed(() => {

    const totalPercentage = courses.reduce(
        (sum, c) => {

            return (
                sum +
                (c.enrolledStudents /
                    c.maxStudents) *
                    100
            );

        },
        0
    );

    return (
        totalPercentage /
        courses.length
    ).toFixed(1);

});

</script>

<template>

<section class="courses-page">

    <header class="page-header">

        <h1>

            Student Course Enrollment Portal

        </h1>

        <p>

            Browse courses, filter by department, level, and availability,
            and track enrollment progress in real time.

        </p>

    </header>

    <section class="stats-grid">

        <div class="stat-card">

            <h3>Total Courses</h3>

            <p>{{ totalCourses }}</p>

        </div>

        <div class="stat-card">

            <h3>Open Courses</h3>

            <p>{{ openCourses }}</p>

        </div>

        <div class="stat-card">

            <h3>Full Courses</h3>

            <p>{{ fullCourses }}</p>

        </div>

        <div class="stat-card">

            <h3>Total Students</h3>

            <p>{{ totalStudents }}</p>

        </div>

        <div class="stat-card">

            <h3>Avg Duration</h3>

            <p>{{ averageDuration }} weeks</p>

        </div>

        <div class="stat-card">

            <h3>Avg Enrollment</h3>

            <p>{{ averageEnrollment }}%</p>

        </div>

    </section>

    <section class="filters">

        <input
            v-model="search"
            type="text"
            placeholder="Search courses..."
        />

        <select v-model="selectedDepartment">

            <option
                v-for="d in departments"
                :key="d"
                :value="d"
            >

                {{ d }}

            </option>

        </select>

        <select v-model="selectedLevel">

            <option
                v-for="l in levels"
                :key="l"
                :value="l"
            >

                {{ l }}

            </option>

        </select>

        <select v-model="selectedAvailability">

            <option
                v-for="a in availabilityOptions"
                :key="a"
                :value="a"
            >

                {{ a }}

            </option>

        </select>

    </section>

    <section
        v-if="filteredCourses.length"
        class="courses-grid"
    >

        <CourseCard
            v-for="course in filteredCourses"
            :key="course.id"
            :course="course"
        />

    </section>

    <section
        v-else
        class="empty-state"
    >

        <h2>No courses found.</h2>

        <p>
            Try adjusting your search or filters.
        </p>

    </section>

</section>

</template>