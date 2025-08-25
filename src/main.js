import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Aos from "aos";

import "./assets/ui/style.scss";
import "./assets/ui/_ui.scss";
import "aos/dist/aos.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
	CoDevTo, BiGlobe, BiStar, BiRobot, BiMusicNoteList, BiMouse, BiBag, BiGearWideConnected, LaCertificateSolid, GiClick, FaGithubAlt, SiLinkedin, BiInstagram, MdArrowcircleupRound, SiC, SiCplusplus, SiCsharp, SiCmake, SiCsswizardry, SiSass,  SiJavascript, SiTypescript, IoLogoNodejs, IoLogoReact, IoLogoVue, IoLogoPython, SiDart, SiFlutter, SiMysql, SiPostgresql, SiMongodb, SiHtml5
} from "oh-vue-icons/icons";

addIcons(CoDevTo, BiGlobe, BiStar, BiRobot, BiMusicNoteList, BiMouse, BiBag, BiGearWideConnected, LaCertificateSolid, GiClick, FaGithubAlt, SiLinkedin, BiInstagram, MdArrowcircleupRound, SiC, SiCplusplus, SiCsharp, SiCmake, SiCsswizardry, SiSass, SiJavascript, SiTypescript, IoLogoNodejs, IoLogoReact, IoLogoVue, IoLogoPython, SiDart, SiFlutter, SiMysql, SiPostgresql, SiMongodb, SiHtml5);

const app = createApp(App);
app.use(store);
app.use(router);
app.component("v-icon", OhVueIcon);

app.mount("#app");

Aos.init();
