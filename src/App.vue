<script setup lang="ts">
import { RouterView } from 'vue-router';

import NavBar from '@/components/shared/NavbarComponent.vue';
import Footer from '@/components/shared/FooterComponent.vue';
</script>

<template>
    <header>
        <h1 class="flex">
            <font-awesome-icon icon="fa-solid fa-chess" />
            <p>VUE Chess</p>
        </h1>
        <NavBar />
    </header>

    <main>
        <RouterView />
    </main>

    <Footer />
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}
</style>
