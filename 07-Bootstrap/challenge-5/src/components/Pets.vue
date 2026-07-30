<script setup>

import PetCard from "./PetCard.vue";
import pets from "../data/pets";

</script>

<template>
    <section class="py-5" id="pets">
        <div class="container">
            <h2 class="text-center fw-bold mb-5">
                Pets Available for Adoption
            </h2>
            <div class="row g-4">
                <PetCard 
                    v-for="pet in pets" 
                    :key="pet.id" 
                    :pet="pet" 
                />
            </div>
        </div>
    </section>
</template>