<script setup>
import "../styles/SkillCard.css"
defineProps({
    skill: {
        type: Object,
        required: true
    }
});

function getLevelClass(level) {

    switch (level) {

        case "Advanced":
            return "advanced";

        case "Intermediate":
            return "intermediate";

        default:
            return "beginner";

    }

}
</script>

<template>

    <article class="skill-card">

        <h2>{{ skill.name }}</h2>

        <p>

            <strong>Category:</strong>

            {{ skill.category }}

        </p>

        <p>

            <strong>Level:</strong>

        </p>

        <span
            class="level-badge"
            :class="getLevelClass(skill.level)"
        >
            {{ skill.level }}
        </span>

    </article>

</template>