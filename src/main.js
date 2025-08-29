<<<<<<< HEAD
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
=======
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Styles
import "./assets/ui/style.scss";
import "./assets/ui/_ui.scss";
import "aos/dist/aos.css";
import "viewerjs/dist/viewer.css";

// Plugins
import Aos from "aos";
import VueViewer from "v-viewer";

// Icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as icons from "oh-vue-icons/icons";
addIcons(
	icons.CoDevTo,
	icons.BiGlobe,
	icons.BiStar,
	icons.BiRobot,
	icons.BiMusicNoteList,
	icons.BiMouse,
	icons.BiBag,
	icons.BiGearWideConnected,
	icons.LaCertificateSolid,
	icons.GiClick,
	icons.FaGithubAlt,
	icons.SiLinkedin,
	icons.BiInstagram,
	icons.MdArrowcircleupRound,
	icons.SiC,
	icons.SiCplusplus,
	icons.SiCsharp,
	icons.SiCmake,
	icons.SiCsswizardry,
	icons.SiSass,
	icons.SiJavascript,
	icons.SiTypescript,
	icons.IoLogoNodejs,
	icons.IoLogoReact,
	icons.IoLogoVue,
	icons.IoLogoPython,
	icons.SiDart,
	icons.SiFlutter,
	icons.SiMysql,
	icons.SiPostgresql,
	icons.SiMongodb,
	icons.SiHtml5,
);

// App initialization
const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueViewer);
app.component("v-icon", OhVueIcon);

app.mount("#app");

// Initialize AOS
Aos.init();
>>>>>>> master
