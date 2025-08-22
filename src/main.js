import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Aos from "aos";

import "./assets/ui/style.scss";
import "./assets/ui/_ui.scss";
import "aos/dist/aos.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoDevTo, BiBatteryFull } from "oh-vue-icons/icons";

addIcons(CoDevTo, BiBatteryFull);

const app = createApp(App);
app.use(store);
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");

Aos.init();
