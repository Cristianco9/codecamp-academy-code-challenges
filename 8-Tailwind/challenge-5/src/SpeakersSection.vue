<script setup lang="ts">
import SpeakerCard from "./SpeakerCard.vue";
</script>

<template>
    <section class="py-20 bg-slate-100">
        <div class="max-w-7xl mx-auto px-8">
            <div class="text-center mb-14">
                <h2 class="text-5xl font-black text-slate-900">
                    Featured Speakers
                </h2>
                <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                    Meet industry professionals sharing their experience in
                    software engineering, cloud computing, artificial
                    intelligence, and cybersecurity.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                <SpeakerCard
                    photo="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600"
                    name="Sarah Johnson"
                    role="Senior Software Engineer"
                    company="Google"
                    topic="Modern Web Architecture"
                    time="10:30 AM"
                />
                <SpeakerCard
                    photo="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
                    name="Michael Davis"
                    role="Cloud Solutions Architect"
                    company="Microsoft"
                    topic="Cloud Native Applications"
                    time="11:45 AM"
                />
                <SpeakerCard
                    photo="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600"
                    name="Emily Wilson"
                    role="AI Research Engineer"
                    company="OpenAI"
                    topic="Generative AI in Software"
                    time="2:00 PM"
                />
                <SpeakerCard
                    photo="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600"
                    name="Daniel Martinez"
                    role="Cybersecurity Consultant"
                    company="Cisco"
                    topic="Zero Trust Security"
                    time="3:30 PM"
                />
            </div>
        </div>
    </section>
</template>