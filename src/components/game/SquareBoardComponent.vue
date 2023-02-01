<script setup lang="ts">
import { computed, onMounted, onUpdated } from 'vue';

import type { Coordinate } from '@/interfaces/coordinate.interface';
import type { Piece } from '@/interfaces/piece.interface';

const props = defineProps<{
    coordinate: Coordinate;
    board: Piece[][];
}>();

const showCoordinates = true;

//const emit = defineEmits(['selected']);
const emit = defineEmits<{
    (e: 'selected', item: Piece | Coordinate): void;
}>();

const hasPiece = computed(() => {
    return 'id' in props.board[props.coordinate.x][props.coordinate.y];
});

const piece = computed(() => {
    if (hasPiece.value) {
        return props.board[props.coordinate.x][props.coordinate.y];
    } else {
        return {} as Piece;
    }
});

const cellColor = computed((): string => {
    console.log(
        '[SquareBoardComponent ' +
            props.coordinate.x +
            '-' +
            props.coordinate.y +
            '] [computed] [cellColor]'
    );
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'square--white'
        : 'square--black';
});

const pieceIcon = computed((): string => {
    return hasPiece.value ? piece.value.icon : '';
});

const pieceStyle = computed((): string => {
    return hasPiece.value
        ? piece.value.team === 'white'
            ? 'fa-regular'
            : 'fa-solid'
        : '';
});

const squarePieceIcon = computed((): string => {
    console.log(
        '[SquareBoardComponent ' +
            props.coordinate.x +
            '-' +
            props.coordinate.y +
            '] [computed] [squarePieceIcon]'
    );
    return pieceStyle.value + ' ' + pieceIcon.value;
});

const pieceColor = computed((): string => {
    if (hasPiece.value) {
        if (!piece.value.selected) {
            return `piece--${piece.value.team}`;
        } else {
            return 'piece--selected';
        }
    } else {
        return '';
    }
});

const pieceShadow = computed((): string => {
    let shadow = '';

    if (!hasPiece.value) {
        // No piece = no shadow
        return shadow;
    }

    if (
        (props.coordinate.x + props.coordinate.y) % 2 === 0 && // White Square
        piece.value.team === 'white'
    ) {
        // White Square then Black Shadow
        return 'shadow--black';
    } else if (piece.value.team !== 'white') {
        // Black Square then White Shadow
        return 'shadow--white';
    }

    return shadow;
});

const squareClassIcon = computed((): string => {
    console.log(
        '[SquareBoardComponent ' +
            props.coordinate.x +
            '-' +
            props.coordinate.y +
            '] [computed] [squareClassIcon]'
    );
    return 'fa-5x ' + pieceColor.value + ' ' + pieceShadow.value;
});

const coordinateColor = computed((): string => {
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'piece--black'
        : 'piece--white';
});

const selectThis = (): void => {
    console.log(
        '[SquareBoardComponent ' +
            props.coordinate.x +
            '-' +
            props.coordinate.y +
            '] [selectThis()]'
    );
    if (hasPiece.value) {
        emit('selected', piece.value);
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
            v-if="hasPiece"
            :icon="squarePieceIcon"
            :class="squareClassIcon"
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
