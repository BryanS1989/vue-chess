<script setup lang="ts">
import { ref } from 'vue';

import { PlayerDefault, type Player } from '@/interfaces/player.interface';

import BaseInput from '@/components/shared/forms/BaseInput.vue';

const emit = defineEmits(['startGame']);

let player1 = ref<Player>({ ...PlayerDefault });
let player2 = ref<Player>({ ...PlayerDefault });
let showError = ref<boolean>(false);

function startNewGame() {
    console.log(
        '[PlayersForm] [startNewGame()] player1: ',
        player1.value,
        ' player2: ',
        player2.value
    );
    if (player1.value.name !== '' && player2.value.name !== '') {
        emit('startGame', true);
    } else {
        showError.value = true;
    }
}
</script>

<template>
    <section class="flex flex--col">
        <form
            @submit.prevent="startNewGame()"
            id="playersForm"
            class="flex flex--col"
        >
            <BaseInput
                :type="'text'"
                :value="player1.name"
                :placeholder="'Name'"
                :label="'Player 1'"
                :required="true"
                :minlength="3"
                :maxlength="10"
                @change-value="(newName) => (player1.name = newName)"
            ></BaseInput>
            <BaseInput
                :type="'text'"
                :value="player2.name"
                :placeholder="'Name'"
                :label="'Player 2'"
                :required="true"
                :minlength="3"
                :maxlength="10"
                @change-value="(newName) => (player2.name = newName)"
            ></BaseInput>
            <p v-show="showError">ERROR!!!</p>
        </form>
        <button
            type="submit"
            form="playersForm"
        >
            START GAME
        </button>
    </section>
</template>

<style scoped>
section {
    height: 100vh;
}
</style>
