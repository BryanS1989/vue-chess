<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="flex flex--col justify--evenly">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/game">Game</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    height: 100%;
}
</style>
