<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

import type { Coordinate } from '@/interfaces/coordinate.interface';
import type { Piece } from '@/interfaces/piece.interface';

const props = defineProps<{
    coordinate: Coordinate;
    piece: Piece | undefined;
}>();

const showCoordinates = ref<boolean>(false);

const emit = defineEmits(['selected-piece', 'selected-square']);

const cellColor = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [cellColor]');
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'square--white'
        : 'square--black';
});

const pieceIcon = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [pieceIcon]');
    return props.piece !== undefined ? props.piece.icon : '';
});

const pieceIconStyle = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [pieceIconStyle]');
    return props.piece !== undefined
        ? props.piece.team === 'white'
            ? 'fa-regular'
            : 'fa-solid'
        : '';
});

const pieceColor = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [pieceColor]');
    if (props.piece !== undefined) {
        if (!props.piece.selected) {
            return `piece--${props.piece.team}`;
        } else {
            return 'piece--selected';
        }
    } else {
        return '';
    }
});

const pieceShadow = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [pieceShadow]');
    if ((props.coordinate.x + props.coordinate.y) % 2 === 0) {
        // White Square
        if (props.piece !== undefined && props.piece.team === 'white') {
            return 'shadow--black';
        }
    } else {
        // Black Square
        if (props.piece !== undefined && props.piece.team !== 'white') {
            return 'shadow--white';
        }
    }

    return '';
});

const coordinateColor = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [coordinateColor]');
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'piece--black'
        : 'piece--white';
});

const selectThis = (): void => {
    console.log('[SquareBoardComponent] [selectThis()]');
    if (props.piece !== undefined) {
        emit('selected-piece', props.piece);
    } else {
        emit('selected-square', props.coordinate);
    }
};

onMounted(() => {
    console.log('[SquareBoardComponent] [onMounted()]');
});
</script>

<template>
    <td
        class="board_square"
        :class="cellColor"
        @click="selectThis()"
    >
        <p>
            <small
                v-if="showCoordinates"
                :class="coordinateColor"
                >{{ coordinate.x + ' - ' + coordinate.y }}</small
            >
        </p>
        <font-awesome-icon
            v-if="piece !== undefined"
            :icon="pieceIconStyle + ' ' + pieceIcon"
            :class="'fa-4x ' + pieceColor + ' ' + pieceShadow"
        />
    </td>
</template>

<style scoped>
p {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
}
</style>
