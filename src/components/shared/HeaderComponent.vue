<script setup lang="ts">
import NavBar from '@/components/shared/NavbarComponent.vue';
</script>

<template>
    <header>
        <h1 class="flex flex--col">
            <font-awesome-icon icon="fa-solid fa-chess" />
            <p>VUE Chess</p>
        </h1>
        <NavBar />
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 1rem;
}
</style>
