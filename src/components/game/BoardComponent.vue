<script setup lang="ts">
import { computed, ref } from 'vue';
import SquareBoard from '@/components/game/SquareBoardComponent.vue';
import type { Piece } from '@/interfaces/piece.interface';
import type { Coordinate } from '@/interfaces/coordinate.interface';

const props = defineProps<{
    pieces: Piece[];
}>();

const boardDimensions: number[] = [8, 8];
let selectedPiece = ref<Piece | undefined>(undefined);
const squareRefs = ref<{ [key: string]: any }>({});

const ROWS = computed((): number[] => {
    console.log('[BoardComponent] [computed] [ROWS]');
    let rows = Array();

    for (let index = boardDimensions[0]; index > 0; index--) {
        rows.push(index);
    }
    return rows;
});

const COLUMNS = computed((): string[] => {
    console.log('[BoardComponent] [computed] [COLUMNS]');
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let columns = Array();

    for (let index = 0; index < boardDimensions[1]; index++) {
        columns.push(ALPHABET[index]);
    }
    return columns;
});

function getPiece(x: number, y: number): Piece {
    console.log('[BoardComponent] [getPiece] x: ', x, 'y: ', y);

    let pieceIndex = props.pieces.findIndex(
        (piece) =>
            piece.alive &&
            piece.currentCoordinate.x === x &&
            piece.currentCoordinate.y === y
    );

    return pieceIndex !== -1 ? props.pieces[pieceIndex] : ({} as Piece);
}

function selected(item: Piece | Coordinate) {
    console.log('[BoardComponent] [selected] item: ', item);

    if ('team' in item) {
        // Piece
        console.log('[BoardComponent] [selected] Piece!!!');
        togglePiece(item);
    } else {
        // Square
        console.log('[BoardComponent] [selected] Square!!!');
        if (selectedPiece.value !== undefined) {
            movePiece(selectedPiece.value, item);
        }
    }
}

function movePiece(pieceToMove: Piece, newCoordinate: Coordinate) {
    console.log(
        '[BoardComponent] [movePiece] pieceToMove: ',
        pieceToMove,
        ' newCoordinate: ',
        newCoordinate
    );

    props.pieces.map((piece) => {
        if (piece.id === pieceToMove.id) {
            // Set previous coordinate
            piece.previousCoordinate = { ...piece.currentCoordinate };
            // move from
            squareRefs.value[
                piece.previousCoordinate.x + '-' + piece.previousCoordinate.y
            ].piece = {} as Piece;

            console.log(
                squareRefs.value[
                    piece.previousCoordinate.x +
                        '-' +
                        piece.previousCoordinate.y
                ]
            );

            piece.currentCoordinate = { ...newCoordinate };

            squareRefs.value[
                piece.currentCoordinate.x + '-' + piece.currentCoordinate.y
            ].piece = piece;

            console.log(
                squareRefs.value[
                    piece.currentCoordinate.x + '-' + piece.currentCoordinate.y
                ]
            );

            togglePiece(pieceToMove);
        }
    });
}

function togglePiece(pieceSelected: Piece) {
    console.log(
        '[BoardComponent] [togglePiece] pieceSelected: ',
        pieceSelected
    );
    props.pieces.map((piece) => {
        if (piece.id === pieceSelected.id) {
            piece.selected = !piece.selected;
            if (piece.selected) {
                selectedPiece.value = pieceSelected;
            } else {
                selectedPiece.value = {} as Piece;
            }
        } else {
            piece.selected = false;
        }
    });
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
                    :key="indexCol + ' - ' + (boardRow - 1)"
                    :piece="getPiece(indexCol, boardRow - 1)"
                    :coordinate="{ x: indexCol, y: boardRow - 1 }"
                    :ref="
                        (el) => (squareRefs[`${indexCol}-${boardRow - 1}`] = el)
                    "
                    @selected="selected"
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
