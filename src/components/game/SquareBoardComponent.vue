<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    x: number;
    y: number;
    piece: string;
}>();

const cellColor = computed((): string => {
    return (props.x + props.y) % 2 === 0 ? 'square--white' : 'square--black';
});

const pieceColor = computed((): string => {
    return (props.x + props.y) % 2 === 0 ? 'piece--black' : 'piece--white';
});
</script>

<template>
    <td
        class="board_square"
        :class="cellColor"
    >
        <font-awesome-icon
            v-show="piece !== ''"
            :icon="props.piece"
            :class="'fa-4x ' + pieceColor"
        />
    </td>
</template>

<style scoped></style>
