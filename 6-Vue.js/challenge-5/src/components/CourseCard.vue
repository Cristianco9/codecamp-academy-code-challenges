<script setup>

import "../styles/CourseCard.css";

const props = defineProps({
    course: {
        type: Object,
        required: true
    }
});

function getLevelClass(level) {

    switch (level) {

        case "Beginner":
            return "beginner";

        case "Intermediate":
            return "intermediate";

        default:
            return "advanced";

    }

}

function getAvailabilityClass() {

    if (
        props.course.enrolledStudents <
        props.course.maxStudents
    ) {

        return "open";

    }

    return "full";

}

function getAvailabilityLabel() {

    if (
        props.course.enrolledStudents <
        props.course.maxStudents
    ) {

        return "🟢 Open";

    }

    return "🔴 Full";

}

const enrollmentPercentage = Math.round(

    (
        props.course.enrolledStudents /
        props.course.maxStudents
    ) * 100

);

</script>

<template>

    <article class="course-card">

        <header class="course-header">

            <h2>

                {{ course.title }}

            </h2>

            <p>

                {{ course.instructor }}

            </p>

        </header>

        <section class="course-details">

            <p>

                <strong>
                    Department:
                </strong>

                {{ course.department }}

            </p>

            <p>

                <strong>
                    Duration:
                </strong>

                {{ course.duration }}
                Weeks

            </p>

            <p>

                <strong>
                    Enrollment:
                </strong>

                {{ course.enrolledStudents }}
                /
                {{ course.maxStudents }}

            </p>

        </section>

        <section class="progress-section">

            <div class="progress-bar">

                <div
                    class="progress-fill"
                    :style="{
                        width:
                        enrollmentPercentage
                        + '%'
                    }"
                ></div>

            </div>

            <p class="progress-text">

                {{ enrollmentPercentage }}%

            </p>

        </section>

        <footer class="course-footer">

            <span

                class="level-badge"

                :class="
                    getLevelClass(
                        course.level
                    )
                "

            >

                {{ course.level }}

            </span>

            <span

                class="status-badge"

                :class="
                    getAvailabilityClass()
                "

            >

                {{ getAvailabilityLabel() }}

            </span>

        </footer>

    </article>

</template>