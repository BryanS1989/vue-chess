<script setup lang="ts">
import Board from '@/components/game/BoardComponent.vue';
import Aside from '@/components/shared/AsideComponent.vue';
import type { Piece } from '@/interfaces/piece.interface';

let pieces: Piece[] = [
    {
        id: 0,
        name: 'Rook',
        icon: 'fa-chess-rook',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 0,
            y: 7,
        },
        currentCoordinate: {
            x: 0,
            y: 7,
        },
        previousCoordinate: {
            x: 0,
            y: 7,
        },
        move: {
            normal: 7,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 1,
        name: 'Knight',
        icon: 'fa-chess-knight',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 1,
            y: 7,
        },
        currentCoordinate: {
            x: 1,
            y: 7,
        },
        previousCoordinate: {
            x: 1,
            y: 7,
        },
        move: {
            normal: 3,
            additional: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
            additionalStyle: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 2,
        name: 'Bishop',
        icon: 'fa-chess-bishop',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 2,
            y: 7,
        },
        currentCoordinate: {
            x: 2,
            y: 7,
        },
        previousCoordinate: {
            x: 2,
            y: 7,
        },
        move: {
            normal: 1,
            style: [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ],
        },
    },
    {
        id: 3,
        name: 'Queen',
        icon: 'fa-chess-queen',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 2,
            y: 7,
        },
        currentCoordinate: {
            x: 3,
            y: 7,
        },
        previousCoordinate: {
            x: 3,
            y: 7,
        },
        move: {
            normal: 7,
            style: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
        },
    },
    {
        id: 4,
        name: 'King',
        icon: 'fa-chess-king',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 4,
            y: 7,
        },
        currentCoordinate: {
            x: 4,
            y: 7,
        },
        previousCoordinate: {
            x: 4,
            y: 7,
        },
        move: {
            normal: 1,
            style: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
        },
    },
    {
        id: 5,
        name: 'Bishop',
        icon: 'fa-chess-bishop',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 5,
            y: 7,
        },
        currentCoordinate: {
            x: 5,
            y: 7,
        },
        previousCoordinate: {
            x: 5,
            y: 7,
        },
        move: {
            normal: 1,
            style: [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ],
        },
    },
    {
        id: 6,
        name: 'Knight',
        icon: 'fa-chess-knight',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 6,
            y: 7,
        },
        currentCoordinate: {
            x: 6,
            y: 7,
        },
        previousCoordinate: {
            x: 6,
            y: 7,
        },
        move: {
            normal: 3,
            additional: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
            additionalStyle: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 7,
        name: 'Rook',
        icon: 'fa-chess-rook',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 7,
            y: 7,
        },
        currentCoordinate: {
            x: 7,
            y: 7,
        },
        previousCoordinate: {
            x: 7,
            y: 7,
        },
        move: {
            normal: 7,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 8,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 0,
            y: 6,
        },
        currentCoordinate: {
            x: 0,
            y: 6,
        },
        previousCoordinate: {
            x: 0,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 9,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 1,
            y: 6,
        },
        currentCoordinate: {
            x: 1,
            y: 6,
        },
        previousCoordinate: {
            x: 1,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 10,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 2,
            y: 6,
        },
        currentCoordinate: {
            x: 2,
            y: 6,
        },
        previousCoordinate: {
            x: 2,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 11,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 3,
            y: 6,
        },
        currentCoordinate: {
            x: 3,
            y: 6,
        },
        previousCoordinate: {
            x: 3,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 12,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 4,
            y: 6,
        },
        currentCoordinate: {
            x: 4,
            y: 6,
        },
        previousCoordinate: {
            x: 4,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 13,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 5,
            y: 6,
        },
        currentCoordinate: {
            x: 5,
            y: 6,
        },
        previousCoordinate: {
            x: 5,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 14,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 6,
            y: 6,
        },
        currentCoordinate: {
            x: 6,
            y: 6,
        },
        previousCoordinate: {
            x: 6,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 15,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'black',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 7,
            y: 6,
        },
        currentCoordinate: {
            x: 7,
            y: 6,
        },
        previousCoordinate: {
            x: 7,
            y: 6,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },

    {
        id: 16,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 0,
            y: 1,
        },
        currentCoordinate: {
            x: 0,
            y: 1,
        },
        previousCoordinate: {
            x: 0,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 17,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 1,
            y: 1,
        },
        currentCoordinate: {
            x: 1,
            y: 1,
        },
        previousCoordinate: {
            x: 1,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 18,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 2,
            y: 1,
        },
        currentCoordinate: {
            x: 2,
            y: 1,
        },
        previousCoordinate: {
            x: 2,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 19,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 3,
            y: 1,
        },
        currentCoordinate: {
            x: 3,
            y: 1,
        },
        previousCoordinate: {
            x: 3,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 20,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 4,
            y: 1,
        },
        currentCoordinate: {
            x: 4,
            y: 1,
        },
        previousCoordinate: {
            x: 4,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 21,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 5,
            y: 1,
        },
        currentCoordinate: {
            x: 5,
            y: 1,
        },
        previousCoordinate: {
            x: 5,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 22,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 6,
            y: 1,
        },
        currentCoordinate: {
            x: 6,
            y: 1,
        },
        previousCoordinate: {
            x: 6,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 23,
        name: 'Pawn',
        icon: 'fa-chess-pawn',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 7,
            y: 1,
        },
        currentCoordinate: {
            x: 7,
            y: 1,
        },
        previousCoordinate: {
            x: 7,
            y: 1,
        },
        move: {
            first: 2,
            normal: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 24,
        name: 'Rook',
        icon: 'fa-chess-rook',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 0,
            y: 0,
        },
        currentCoordinate: {
            x: 0,
            y: 0,
        },
        previousCoordinate: {
            x: 0,
            y: 0,
        },
        move: {
            normal: 7,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 25,
        name: 'Knight',
        icon: 'fa-chess-knight',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 1,
            y: 0,
        },
        currentCoordinate: {
            x: 1,
            y: 0,
        },
        previousCoordinate: {
            x: 1,
            y: 0,
        },
        move: {
            normal: 3,
            additional: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
            additionalStyle: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 26,
        name: 'Bishop',
        icon: 'fa-chess-bishop',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 2,
            y: 0,
        },
        currentCoordinate: {
            x: 2,
            y: 0,
        },
        previousCoordinate: {
            x: 2,
            y: 0,
        },
        move: {
            normal: 1,
            style: [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ],
        },
    },
    {
        id: 27,
        name: 'Queen',
        icon: 'fa-chess-queen',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 2,
            y: 0,
        },
        currentCoordinate: {
            x: 3,
            y: 0,
        },
        previousCoordinate: {
            x: 3,
            y: 0,
        },
        move: {
            normal: 7,
            style: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
        },
    },
    {
        id: 28,
        name: 'King',
        icon: 'fa-chess-king',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 4,
            y: 0,
        },
        currentCoordinate: {
            x: 4,
            y: 0,
        },
        previousCoordinate: {
            x: 4,
            y: 0,
        },
        move: {
            normal: 1,
            style: [
                [1, 1, 1],
                [1, 0, 1],
                [1, 1, 1],
            ],
        },
    },
    {
        id: 29,
        name: 'Bishop',
        icon: 'fa-chess-bishop',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 5,
            y: 0,
        },
        currentCoordinate: {
            x: 5,
            y: 0,
        },
        previousCoordinate: {
            x: 5,
            y: 0,
        },
        move: {
            normal: 1,
            style: [
                [1, 0, 1],
                [0, 0, 0],
                [1, 0, 1],
            ],
        },
    },
    {
        id: 30,
        name: 'Knight',
        icon: 'fa-chess-knight',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 6,
            y: 0,
        },
        currentCoordinate: {
            x: 6,
            y: 0,
        },
        previousCoordinate: {
            x: 6,
            y: 0,
        },
        move: {
            normal: 3,
            additional: 1,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
            additionalStyle: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
    {
        id: 31,
        name: 'Rook',
        icon: 'fa-chess-rook',
        team: 'white',
        selected: false,
        alive: true,
        jump: false,
        initialCoordinate: {
            x: 7,
            y: 0,
        },
        currentCoordinate: {
            x: 7,
            y: 0,
        },
        previousCoordinate: {
            x: 7,
            y: 0,
        },
        move: {
            normal: 7,
            style: [
                [0, 1, 0],
                [1, 0, 1],
                [0, 1, 0],
            ],
        },
    },
];
</script>

<template>
    <article class="flex flex--column">
        <section class="flex flex-4">
            <Board :pieces="pieces" />
        </section>
        <Aside />
    </article>
</template>

<style scoped></style>
