<script setup lang="ts">
import PlayersForm from '@/components/players/PlayersForm.vue';

function startGame(start: boolean) {
    console.log('[PlayersForm] [startNewGame()] Start game: ', start);
}
</script>

<template>
    <article>
        <h2 class="text--center">WELCOME TO VUE-CHESS!!!</h2>
        <PlayersForm @start-game="startGame" />
    </article>
</template>
