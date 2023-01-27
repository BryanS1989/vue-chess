<script setup lang="ts">
import Board from '@/components/game/BoardComponent.vue';
import Aside from '@/components/shared/AsideComponent.vue';
</script>

<template>
    <article class="flex flex--column">
        <section class="flex flex-4">
            <Board />
        </section>
        <Aside />
    </article>
</template>

<style scoped></style>
