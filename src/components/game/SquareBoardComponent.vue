<script setup lang="ts">
import { computed, onMounted, onUpdated } from 'vue';

import type { Coordinate } from '@/interfaces/coordinate.interface';
import type { Piece } from '@/interfaces/piece.interface';

const props = defineProps<{
    coordinate: Coordinate;
    piece: Piece;
}>();

const showCoordinates = false;

// Make visible this props to parent if he acces via refs
defineExpose({
    coordinate: props.coordinate,
    piece: props.piece,
});

//const emit = defineEmits(['selected']);
const emit = defineEmits<{
    (e: 'selected', item: Piece | Coordinate): void;
}>();

const cellColor = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [cellColor]');
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'square--white'
        : 'square--black';
});

const pieceIcon = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [pieceIcon]');
    return props.piece ? props.piece.icon : '';
});

const pieceStyle = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [pieceStyle]');
    return props.piece
        ? props.piece.team === 'white'
            ? 'fa-regular'
            : 'fa-solid'
        : '';
});

const pieceColor = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [pieceColor]');
    if (props.piece) {
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

    let shadow = '';

    if (!props.piece) {
        // No piece = no shadow
        return shadow;
    }

    if (
        (props.coordinate.x + props.coordinate.y) % 2 === 0 && // White Square
        props.piece.team === 'white'
    ) {
        // White Square then Black Shadow
        return 'shadow--black';
    } else if (props.piece.team !== 'white') {
        // Black Square then White Shadow
        return 'shadow--white';
    }

    return shadow;
});

const coordinateColor = computed((): string => {
    console.log('[SquareBoardComponent] [computed] [coordinateColor]');
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'piece--black'
        : 'piece--white';
});

const selectThis = (): void => {
    console.log('[SquareBoardComponent] [selectThis()]');
    if (props.piece.icon) {
        emit('selected', props.piece);
    } else {
        emit('selected', props.coordinate);
    }
};

onMounted(() => {
    console.log('[SquareBoardComponent] [onMounted()]');
});

onUpdated(() => {
    console.log(
        '[SquareBoardComponent] [onUpdated()] Square: ',
        props.coordinate
    );
});
</script>

<template>
    <td
        :class="'board_square ' + cellColor"
        @click="selectThis()"
    >
        <p class="coordinate">
            <small
                v-if="showCoordinates"
                :class="coordinateColor"
                >{{ coordinate.x + ' - ' + coordinate.y }}</small
            >
        </p>
        <font-awesome-icon
            v-if="piece.name"
            :icon="pieceStyle + ' ' + pieceIcon"
            :class="'fa-5x ' + pieceColor + ' ' + pieceShadow"
        />
    </td>
</template>

<style scoped>
.coordinate {
    position: absolute;
    top: 0;
    text-align: center;
    width: 100%;
    z-index: 1;
}
</style>
