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
} from '@fortawesome/free-solid-svg-icons';
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
    faH
);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon); //  FONTAWESOME

app.mount('#app');
