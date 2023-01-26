import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';

/*
    ====================
        FONTAWESOME
    ====================
*/
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import {
    faBorderTopLeft,
    faChess,
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    fa6,
    fa7,
    fa8,
    faA,
    faB,
    faC,
    faD,
    faE,
    faF,
    faG,
    faH,
    faChessPawn as fasChessPawn,
    faChessRook as fasChessRook,
    faChessKnight as fasChessKnight,
    faChessBishop as fasChessBishop,
    faChessQueen as fasChessQueen,
    faChessKing as fasChessKing,
} from '@fortawesome/free-solid-svg-icons';

import {
    faChessPawn as farChessPawn,
    faChessRook as farChessRook,
    faChessKnight as farChessKnight,
    faChessBishop as farChessBishop,
    faChessQueen as farChessQueen,
    faChessKing as farChessKing,
} from '@fortawesome/free-regular-svg-icons';
/* add icons to the library */
library.add(
    faBorderTopLeft,
    faChess,
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    fa6,
    fa7,
    fa8,
    faA,
    faB,
    faC,
    faD,
    faE,
    faF,
    faG,
    faH,
    fasChessPawn,
    farChessPawn,
    fasChessRook,
    farChessRook,
    fasChessKnight,
    farChessKnight,
    fasChessBishop,
    farChessBishop,
    fasChessQueen,
    farChessQueen,
    fasChessKing,
    farChessKing
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon); //  FONTAWESOME

app.mount('#app');
