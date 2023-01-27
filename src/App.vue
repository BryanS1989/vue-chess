<script setup lang="ts">
import { RouterView } from 'vue-router';

import Header from '@/components/shared/HeaderComponent.vue';
</script>

<template>
    <Header />

    <main>
        <RouterView />
    </main>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
}
</style>
