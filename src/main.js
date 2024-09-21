import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as IconsFa from "oh-vue-icons/icons/fa";
import * as IconsMd from "oh-vue-icons/icons/md";
import * as IconsBi from "oh-vue-icons/icons/bi";
import * as IconsGi from "oh-vue-icons/icons/gi";
import * as IconsHi from "oh-vue-icons/icons/hi";
import * as IconsAi from "oh-vue-icons/icons/ai";
import * as IconsLa from "oh-vue-icons/icons/la";
import * as IconsCo from "oh-vue-icons/icons/co";
import * as IconsSi from "oh-vue-icons/icons/si";

const iconSets = [
    IconsFa,
    IconsMd,
    IconsBi,
    IconsGi,
    IconsHi,
    IconsAi,
    IconsLa,
    IconsCo,
    IconsSi
];

const Icons = iconSets.flatMap(Object.values);

import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';

import './assets/style.css';

const Icon = Object.values({ ...Icons });
addIcons(...Icon);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount('#app');
