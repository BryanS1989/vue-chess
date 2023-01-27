<script setup lang="ts">
import NavBar from '@/components/shared/NavbarComponent.vue';
</script>

<template>
    <header class="flex-1 flex flex--col p-1">
        <h1 class="flex flex--col">
            <font-awesome-icon
                icon="fa-solid fa-chess"
                class="fa-3x"
            />
            <p>VUE Chess</p>
        </h1>
        <NavBar />
    </header>
</template>

<style scoped>
header {
    height: 100vh;
}
</style>
