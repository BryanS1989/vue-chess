<script setup lang="ts">
import type { Coordinate } from '@/interfaces/coordinate.interface';
import type { Piece } from '@/interfaces/piece.interface';
import { computed } from 'vue';

const props = defineProps<{
    coordinate: Coordinate;
    piece: Piece | undefined;
}>();

const emit = defineEmits(['selectedPiece', 'selectedSquare']);

const cellColor = computed((): string => {
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'square--white'
        : 'square--black';
});

const pieceColor = computed((): string => {
    return (props.coordinate.x + props.coordinate.y) % 2 === 0
        ? 'piece--black'
        : 'piece--white';
    //return props.piece !== undefined ? `piece--${props.piece.team}` : '';
});

const pieceShadow = computed((): string => {
    return '';
    //return (props.coordinate.x + props.coordinate.y) % 2 === 0 ? 'shadow--black' : 'shadow--white';
});

const pieceIcon = computed((): string => {
    return props.piece !== undefined ? props.piece.icon : '';
});

const pieceIconStyle = computed((): string => {
    return props.piece !== undefined
        ? props.piece.team === 'white'
            ? 'fa-regular'
            : 'fa-solid'
        : '';
});

const selectThis = (): void => {
    if (props.piece !== undefined) {
        emit('selectedPiece', props.piece);
    } else {
        emit('selectedSquare', props.coordinate);
    }
};
</script>

<template>
    <td
        class="board_square"
        :class="cellColor"
        @click="selectThis()"
    >
        <p>
            <small :class="pieceColor">{{
                coordinate.x + ' - ' + coordinate.y
            }}</small>
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
    /* visibility: hidden; */
}
</style>
