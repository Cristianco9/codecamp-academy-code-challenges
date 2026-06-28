<script setup>
import { computed } from "vue";
import "../styles/CourseCard.css";

const props = defineProps({
    course: Object
});

const completionClass = computed(() => {
    const rate = props.course.completionRate;

    return {
        low: rate <= 40,
        medium: rate > 40 && rate <= 70,
        high: rate > 70
    };
});
</script>

<template>
    <div class="card" :class="completionClass">
        <h3>{{ course.title }}</h3>

        <p><b>Category:</b> {{ course.category }}</p>
        <p><b>Instructor:</b> {{ course.instructor }}</p>
        <p><b>Level:</b> {{ course.level }}</p>

        <p><b>Students:</b> {{ course.students }}</p>
        <p><b>Completion:</b> {{ course.completionRate }}%</p>

        <p><b>Price:</b> ${{ course.price }}</p>

        <p><b>Revenue:</b>
            ${{ course.price * course.students }}
        </p>
    </div>
</template>