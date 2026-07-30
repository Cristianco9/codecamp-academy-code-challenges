<script setup lang="ts">
import StatisticCard from './StatisticCard.vue';
</script>

<template>
    <section class="max-w-7xl mx-auto px-8 py-12">
        <div class="bg-gray-100 rounded-2xl p-8">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">
                Workspace Statistics
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="hover:scale-105 transition duration-300">
                    <StatisticCard
                        title="AI Tools"
                        :value="12"
                        color="bg-blue-600"
                    />
                </div>
                <div class="hover:scale-105 transition duration-300">
                    <StatisticCard
                        title="Favorites"
                        :value="5"
                        color="bg-green-600"
                    />
                </div>
                <div class="hover:scale-105 transition duration-300">
                    <StatisticCard
                        title="Prompts"
                        :value="128"
                        color="bg-purple-600"
                    />
                </div>
            </div>
        </div>
    </section>
</template>