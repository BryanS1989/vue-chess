<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import NavBar from '@/components/shared/navbarComponent.vue';
</script>

<template>
    <header>
        <h1>
            <font-awesome-icon icon="fa-solid fa-chess" />
        </h1>
        <NavBar />
    </header>

    <RouterView />
</template>

<style scoped></style>
