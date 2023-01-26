<script setup lang="ts">
import { RouterView } from 'vue-router';

import NavBar from '@/components/shared/navbarComponent.vue';
import Footer from '@/components/shared/footerComponent.vue';
</script>

<template>
    <header>
        <h1>
            <font-awesome-icon icon="fa-solid fa-chess" />
            <p>VUE Chess</p>
        </h1>
        <NavBar />
    </header>

    <RouterView />

    <Footer />
</template>

<style scoped></style>
