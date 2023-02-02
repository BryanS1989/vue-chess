<script setup lang="ts">
import { computed, ref, reactive, onBeforeMount, onMounted } from 'vue';

import SquareBoard from '@/components/game/SquareBoardComponent.vue';

import type { Piece } from '@/interfaces/piece.interface';
import type { Coordinate } from '@/interfaces/coordinate.interface';

const props = defineProps<{
    pieces: Piece[];
}>();

interface BoardState {
    pieces: Piece[];
    board: Array<Piece>[];
}

const state: BoardState = reactive({
    pieces: props.pieces,
    board: [],
});

const boardDimensions: number[] = [8, 8];
let selectedPiece = ref<Piece | undefined>(undefined);
let teamPlaying = ref<string>('white');

function initializeBoard() {
    console.log('[BoardComponent] [initializeBoard()]');
    for (let indexRow: number = 0; indexRow < boardDimensions[0]; indexRow++) {
        state.board[indexRow] = [];
        for (
            let indexCol: number = 0;
            indexCol < boardDimensions[1];
            indexCol++
        ) {
            state.board[indexRow][indexCol] = {} as Piece;
        }
    }

    props.pieces.map((piece) => {
        state.board[piece.initialCoordinate.x][piece.initialCoordinate.y] =
            piece;
    });
}

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

function selected(item: Piece | Coordinate) {
    console.log('[BoardComponent] [selected] item: ', item);

    if ('team' in item) {
        // Piece
        console.log('[BoardComponent] [selected] Piece!!!');
        if (item.team === teamPlaying.value) {
            togglePiece(item);
        }
    } else {
        // Square
        console.log('[BoardComponent] [selected] Square!!!');
        if (selectedPiece.value !== undefined) {
            movePiece(selectedPiece.value, item);
        }
    }
}
/**
 * Select or deselect a piece
 * @param piece piece to toggle
 */
function togglePiece(piece: Piece) {
    console.log('[BoardComponent] [togglePiece] piece: ', { ...piece });

    if (selectedPiece.value !== undefined) {
        // If is there previous selected piece deselect it
        state.board[selectedPiece.value.currentCoordinate.x][
            selectedPiece.value.currentCoordinate.y
        ] = {
            ...state.board[selectedPiece.value.currentCoordinate.x][
                selectedPiece.value.currentCoordinate.y
            ],
            selected: false,
        };
    }

    // Toggle piece
    state.board[piece.currentCoordinate.x][piece.currentCoordinate.y].selected =
        !piece.selected;

    // Save selected piece
    if (
        state.board[piece.currentCoordinate.x][piece.currentCoordinate.y]
            .selected
    ) {
        selectedPiece.value =
            state.board[piece.currentCoordinate.x][piece.currentCoordinate.y];
    } else {
        selectedPiece.value = undefined;
    }
}

/**
 * Move a piece form its current square to a new square
 * @param pieceToMove Piece
 * @param newCoordinate the destination square
 */
function movePiece(pieceToMove: Piece, newCoordinate: Coordinate) {
    console.log(
        '[BoardComponent] [movePiece] pieceToMove: ',
        pieceToMove,
        ' newCoordinate: ',
        newCoordinate
    );

    // Remove piece from its current square
    state.board[pieceToMove.currentCoordinate.x][
        pieceToMove.currentCoordinate.y
    ] = {} as Piece;

    // Set its previoues square
    pieceToMove.previousCoordinate = { ...pieceToMove.currentCoordinate };

    // Set selected piece to its new square
    pieceToMove.currentCoordinate = { ...newCoordinate };
    state.board[newCoordinate.x][newCoordinate.y] = pieceToMove;
}

onBeforeMount(() => {
    console.log('[BoardComponent] [onBeforeMount()]');
    initializeBoard();
});

onMounted(() => {
    console.log('[BoardComponent] [onMounted()]');
});
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
                    :coordinate="{ x: indexCol, y: boardRow - 1 }"
                    :board="state.board"
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
