<script setup lang="ts">
interface Props {
    photo:      string;
    name:       string;
    role:       string;
    company:    string;
    topic:      string;
    time:       string;
}

defineProps<Props>();
</script>

<template>
    <article class="
        bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300 overflow-hidden
        "
    >
        <img :src="photo" :alt="name" class="w-full h-64 object-cover">
        <div class="p-6">
            <h3 class="text-2xl font-bold text-slate-900">{{ name }}</h3>
            <p class="text-slate-500 mt-1">{{ role }}</p>
            <p class="text-sky-600 font-semibold mt-2">{{ company }}</p>
            <div class="mt-6 space-y-2">
                <p><span class="font-semibold">Topic:</span> {{ topic }}</p>
                <p><span class="font-semibold">Time:</span> {{ time }}</p>
            </div>
            <button class="
                w-full mt-8 bg-sky-600 hover:bg-sky-700 text-white font-semibold 
                py-3 rounded-xl transition
                "
            >
                View Profile
            </button>
        </div>
    </article>
</template>