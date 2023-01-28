<script setup lang="ts">
import { computed } from 'vue';
import SquareBoard from '@/components/game/SquareBoardComponent.vue';
import type { Piece } from '@/interfaces/piece.interface';
import type { Coordinate } from '@/interfaces/coordinate.interface';

export interface BoardProps {
    pieces: Piece[];
}

const props = withDefaults(defineProps<BoardProps>(), {
    pieces: () => [] as Piece[],
});

const boardDimensions: number[] = [8, 8];

const ROWS = computed((): number[] => {
    let rows = Array();

    for (let index = boardDimensions[0]; index > 0; index--) {
        rows.push(index);
    }
    return rows;
});

const COLUMNS = computed((): string[] => {
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let columns = Array();

    for (let index = 0; index < boardDimensions[1]; index++) {
        columns.push(ALPHABET[index]);
    }
    return columns;
});

function getPiece(x: number, y: number): Piece | undefined {
    let piece = props.pieces.filter(
        (piece) =>
            piece.alive &&
            piece.currentCoordinate.x === x &&
            piece.currentCoordinate.y === y
    );

    return piece.length > 0 ? piece[0] : undefined;
}

function selectedPiece(piece: Piece) {
    console.log(piece);
}

function selectedSquare(coordinate: Coordinate) {
    console.log(coordinate);
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>
                    <font-awesome-icon
                        icon="fa-solid fa-border-top-left"
                        class="fa-2xl"
                    />
                </th>
                <th
                    v-for="boardColumn in COLUMNS"
                    :key="boardColumn"
                >
                    <font-awesome-icon
                        :icon="'fa-solid fa-' + boardColumn.toLowerCase()"
                        class="fa-2xl"
                    />
                </th>
                <th>
                    <font-awesome-icon
                        icon="fa-solid fa-border-top-left"
                        class="fa-rotate-90 fa-2xl"
                    />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="boardRow in ROWS"
                :key="boardRow"
            >
                <th>
                    <font-awesome-icon
                        :icon="'fa-solid fa-' + boardRow"
                        class="fa-2xl"
                    />
                </th>

                <SquareBoard
                    v-for="(boardColumn, indexCol) in COLUMNS"
                    :key="boardRow - 1 + ' - ' + indexCol"
                    :piece="getPiece(indexCol, boardRow - 1)"
                    :coordinate="{ x: indexCol, y: boardRow - 1 }"
                    @selected-piece="selectedPiece"
                    @selected-square="selectedSquare"
                />

                <th>
                    <font-awesome-icon
                        :icon="'fa-solid fa-' + boardRow"
                        class="fa-2xl"
                    />
                </th>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>
                    <font-awesome-icon
                        icon="fa-solid fa-border-top-left"
                        class="fa-rotate-270 fa-2xl"
                    />
                </th>
                <th
                    v-for="boardColumn in COLUMNS"
                    :key="boardColumn"
                >
                    <font-awesome-icon
                        :icon="'fa-solid fa-' + boardColumn.toLowerCase()"
                        class="fa-2xl"
                    />
                </th>
                <th>
                    <font-awesome-icon
                        icon="fa-solid fa-border-top-left"
                        class="fa-rotate-180 fa-2xl"
                    />
                </th>
            </tr>
        </tfoot>
    </table>
</template>

<style scoped>
table {
    border-collapse: collapse;
    height: 100vh;
}

th {
    width: 6rem;
    height: 6rem;
    font-weight: bolder;
}

td {
    text-align: center;
    width: 6rem;
    height: 6rem;
    padding: 0;
}
</style>
