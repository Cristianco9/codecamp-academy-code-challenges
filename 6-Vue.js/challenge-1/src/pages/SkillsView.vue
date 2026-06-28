<script setup>

import "../styles/SkillsView.css";

import { ref, computed } from "vue";

import SkillCard from "../components/SkillCard.vue";

import { skills } from "../data/skills";

const search = ref("");

const selectedCategory = ref("All Categories");

const categories = [

    "All Categories",

    "Frontend",

    "Backend",

    "Database",

    "DevOps"

];

const filteredSkills = computed(() => {

    return skills.filter((skill) => {

        const matchesSearch = skill.name
            .toLowerCase()
            .includes(search.value.toLowerCase());

        const matchesCategory =
            selectedCategory.value === "All Categories"
            || skill.category === selectedCategory.value;

        return matchesSearch && matchesCategory;

    });

});

</script>

<template>

    <section class="skills-page">

        <header class="page-header">

            <h1>Professional Skills</h1>

            <p>

                Explore technical skills by searching
                and filtering different categories.

            </p>

        </header>

        <section class="filters">

            <input
                v-model="search"
                type="text"
                placeholder="Search a skill..."
            >

            <select v-model="selectedCategory">

                <option
                    v-for="category in categories"
                    :key="category"
                    :value="category"
                >
                    {{ category }}
                </option>

            </select>

        </section>

        <section
            v-if="filteredSkills.length"
            class="skills-grid"
        >

            <SkillCard

                v-for="skill in filteredSkills"

                :key="skill.id"

                :skill="skill"

            />

        </section>

        <section
            v-else
            class="empty-state"
        >

            <h2>No skills found.</h2>

            <p>

                Try changing the search text or
                selecting another category.

            </p>

        </section>

    </section>

</template>