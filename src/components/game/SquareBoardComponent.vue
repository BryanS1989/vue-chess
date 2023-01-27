<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    x: number;
    y: number;
}>();

const cellColor = computed((): string => {
    return (props.x + props.y) % 2 === 0 ? 'square--white' : 'square--black';
});
</script>

<template>
    <td
        class="board_square"
        :class="cellColor"
    ></td>
</template>

<style scoped></style>
