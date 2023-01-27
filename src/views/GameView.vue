<script setup lang="ts">
import Board from '@/components/game/BoardComponent.vue';
import Aside from '@/components/shared/AsideComponent.vue';
</script>

<template>
    <article class="flex flex--column">
        <article class="flex flex-4">
            <section>
                <Board />
            </section>
        </article>
        <Aside />
    </article>
</template>

<style></style>
