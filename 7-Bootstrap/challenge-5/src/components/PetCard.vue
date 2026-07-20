<script setup>

defineProps({
    pet: Object
});

</script>

<template>
    <div class="col-md-4 d-flex">
        <div class="card shadow h-100 w-100">
            <img :src="pet.image" :alt="pet.name" class="card-img-top">
            <div class="card-body d-flex flex-column">
                <h4 class="card-title">
                    {{ pet.name }}
                </h4>
                <p class="text-muted">
                    {{ pet.breed }}
                </p>
                <p>
                    <strong>Age:</strong>
                    {{ pet.age }}
                </p>
                <button class="btn btn-outline-primary mt-auto">
                    Adopt Me
                </button>
            </div>
        </div>
    </div>
</template>