<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from '@/components/shared/HeaderComponent.vue';
</script>

<template>
    <Header />

    <main class="flex-5">
        <RouterView />
    </main>
</template>

<style scoped>
main {
    height: 100vh;
}
</style>
