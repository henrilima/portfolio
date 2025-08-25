<template>
  <div>
    <div class="btt" @click="scrollToView('home')">
      <v-icon name="md-arrowcircleup-round" scale="1.5"></v-icon>
    </div>

    <div class="bg-circles">
      <div class="blur-circle primary"
        style="bottom: 100%; left: 0%; transform: translate(-50%, 50%); width: 600px; height: 600px;"></div>
      <div class="blur-circle secondary"
        style="top: 100%; right: 0%; transform: translate(0%, 0%); width: 400px; height: 400px;"></div>
    </div>

    <header id="home">
      <a><v-icon name="co-dev-to" scale="2" data-aos="fade-down" data-aos-duration="800" data-aos-delay="1600"></v-icon>
        Henrique Lima</a>
      <nav>
        <ul>
          <li><a @click.prevent="scrollToView('home')">Início</a></li>
          <li><a @click.prevent="scrollToView('projects')">Projetos</a></li>
          <li><a @click.prevent="scrollToView('aboutme')">Sobre mim</a></li>
          <li><a @click.prevent="scrollToView('contactme')">Contato</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="texts">
        <div class="_badge" data-aos="fade-right" data-aos-duration="800">
          <v-icon name="bi-globe" scale="1" class="_icon"></v-icon>
          <p>Desenvolvedor Web Full-Stack</p>
        </div>
        <h2 class="_title" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">Aplicações Modernas, do
          Front-end ao Back-end</h2>
        <p class="_p" data-aos="fade-right" data-aos-duration="800" data-aos-delay="800">Transformo conceitos em
          realidade digital utilizando o ecossistema JavaScript. Sou proficiente em criar experiências de usuário
          dinâmicas com Vue.js e em construir APIs eficientes e escaláveis com Node.js, entregando produtos completos e
          modernos.</p>
        <div class="buttons">
          <button class="_button _primary" @click.prevent="scrollToView('projects')">Veja meus projetos</button>
          <button class="_button" @click.prevent="scrollToView('aboutme')">Me conheça</button>
        </div>
      </div>
      <img :src="me" class="img-me" :draggable="false" data-aos="fade-left" data-aos-duration="800"
        data-aos-delay="1200">
    </main>

    <div class="_slider bg-color" style="
      --width: 280px;
      --height: 56px;
      --quantity: 6;
    ">
      <div class="list">
        <div class="item" style="--position: 1;">
          <p>Estudante de EGS</p>
        </div>
        <div class="item" style="--position: 2;">
          <p>Ecossistema JavaScript</p>
        </div>
        <div class="item" style="--position: 3;">
          <p>Soluções Escaláveis</p>
        </div>
        <div class="item" style="--position: 4;">
          <p>Estudante de EGS</p>
        </div>
        <div class="item" style="--position: 5;">
          <p>Ecossistema JavaScript</p>
        </div>
        <div class="item" style="--position: 6;">
          <p>Soluções Escaláveis</p>
        </div>
      </div>
    </div>

    <section class="projects" id="projects">
      <h2 class="_title">Conheça Meus Principais Projetos</h2>
      <div class="carrossel-left" @click="previousItem()">
        <div class="hint">
          <v-icon name="gi-click" scale="2"></v-icon>
          <p class="_p">Clique para voltar</p>
        </div>
      </div>
      <div class="cards" data-aos="fade-down" data-aos-duration="800" data-aos-delay="200">
        <div v-for="p in projects" :key="p.name" class="_card card-animation"
          :class="{ scale: p?.main === true, hasImage: p?.image !== undefined }">
          <img v-if="p?.image" :src="require(`@/${p.image}`)" :alt="p.name">
          <v-icon v-else :name="p.icon" scale="4"></v-icon>
          <div class="content">
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">{{ p.displayName }}</h2>
            <p class="_p" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">{{ p.description }}</p>
            <div class="buttons" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <button class="_button _primary">Github</button>
              <button v-if="p.homepage" class="_button">Acessar projeto</button>
            </div>
            <div class="_badges" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
              <div class="_badge" v-for="l in p.technologies" :key="l">
                <v-icon :name="getLanguageData(l).icon" scale="0.75" class="_icon"></v-icon>
                <p>{{ getLanguageData(l).displayName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carrossel-right" @click="nextItem()">
        <div class="hint">
          <v-icon name="gi-click" scale="2"></v-icon>
          <p class="_p">Clique para avançar</p>
        </div>
      </div>
      <div class="projects-indicator">
        <div v-for="(i, index) in projects" class="indicator"></div>
      </div>
    </section>

    <section class="aboutme" id="aboutme">
      <div class="about">
        <img src="@/assets/image/me_circle.png" class="img-me-circle" alt="Henri Lima | Image" :draggable="false"
          data-aos="fade-right" data-aos-duration="800">
        <div class="me">
          <div class="_badge" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
            <v-icon name="bi-gear-wide-connected" scale="1" class="_icon"></v-icon>
            <p>Estudante de engenharia de software</p>
          </div>
          <h2 class="_title" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">José Henrique da Silva
            Lima</h2>
          <p class="_p" style="color: var(--color-alt);" data-aos="fade-left" data-aos-duration="800"
            data-aos-delay="800">Estudante de Engenharia de Software e técnico em
            Desenvolvimento de Sistemas, com foco em programação web. Tenho experiência com JavaScript/TypeScript,
            Node.js e Vue.js, além de estar em constante aprimoramento. Atualmente estou estudando Flutter. Sou
            apaixonado por criar interfaces funcionais e desenvolver soluções criativas, como bots para Discord, sempre
            buscando desafios que unam tecnologia e inovação.</p>
          <div class="statistics">
            <div class="stat-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              <span class="stat-value">+110h</span>
              <span class="stat-label">De aprendizado</span>
              <button class="_button stat-button">
                <v-icon name="la-certificate-solid" scale="0.8" class="_icon"></v-icon>
                <p>Meus certificados</p>
              </button>
            </div>
            <div class="stat-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              <span class="stat-value">+16</span>
              <span class="stat-label">Projetos</span>
              <button class="_button stat-button" @click="openLink(links.github)">
                <v-icon name="fa-github-alt" scale="0.8" class="_icon"></v-icon>
                <p>Github</p>
              </button>
            </div>
            <div class="stat-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
              <span class="stat-value">+3 anos</span>
              <span class="stat-label">Desenvolvendo</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="_slider language-color" :style="{
      '--width': '86px',
      '--height': '86px',
      '--quantity': usedLanguages.length

    }
      ">
      <div class="list">
        <div v-for="(l, index) in usedLanguages" :key="l" class="item"
          :style="{ '--position': (index + 1), '--title': `'${languages[l].displayName}'` }">
          <v-icon :name="languages[l].icon" scale="2.5" class="slider-language"
            :style="{ '--color-lang': languages[l].color }"></v-icon>
        </div>
      </div>
    </div>

    <section class="contactme" id="contactme">
      <div class="contact">
        <div>
          <h2 class="_title" data-aos="fade-up" data-aos-duration="800">Vamos Conversar!</h2>
          <p class="_subtitle" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Entre em contato para
            colaborações, dúvidas ou oportunidades.</p>
          <p class="_p" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            Caso queira conversar sobre tecnologia, projetos ou oportunidades, estou sempre aberto para novas conexões!
            Você pode me encontrar nas redes sociais ao lado ou enviar um e-mail diretamente para <a
              href="mailto:henrilima.me@outlook.com" class="_link">henrilima.me@outlook.com</a>. <br><br>Fique à vontade
            para tirar dúvidas, propor parcerias ou apenas trocar ideias sobre desenvolvimento web e de
            software.<br><br>Responderei o mais rápido possível!
          </p>
        </div>
        <div class="_social">
          <div class="_social-item" data-aos="fade-left" data-aos-duration="800">
            <h2 class="_title">Linkedin</h2>
            <p class="_p">
              Conecte-se comigo para acompanhar novidades, compartilhar experiências e expandir sua rede profissional.
            </p>
            <button class="_button hasIcon" @click="openLink(links.linkedin)">
              <v-icon name="si-linkedin" scale="1" class="_icon"></v-icon>
              <p>Me siga no LinkedIn</p>
            </button>
          </div>

          <div class="_social-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
            <h2 class="_title">Github</h2>
            <p class="_p">
              Confira meus repositórios, contribuições e projetos open source no Github.
            </p>
            <button class="_button hasIcon" @click="openLink(links.github)">
              <v-icon name="fa-github-alt" scale="1" class="_icon"></v-icon>
              <p>Ver meu Github</p>
            </button>
          </div>

          <div class="_social-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
            <h2 class="_title">Instagram</h2>
            <p class="_p">
              Siga-me no Instagram.
            </p>
            <button class="_button hasIcon" @click="openLink(links.instagram)">
              <v-icon name="bi-instagram" scale="1" class="_icon"></v-icon>
              <p>Me siga no Instagram</p>
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <p>© {{ new Date().getFullYear() }} José Henrique. Todos os direitos reservados.</p>
      <p>Feito com 💜</p>
    </footer>
  </div>
</template>

<script setup>
import me from "@/assets/image/me.png";
import projectsData from "@/assets/data/projects.json";
import languages from "@/assets/data/languages.json";
import { ref } from "vue";

const links = {
  github: 'https://github.com/henrilima',
  linkedin: 'https://www.linkedin.com/in/josehlima/',
  instagram: 'https://www.instagram.com/henrilima.llsh/'
};

const projects = ref([]);

for (let p in projectsData) {
	projects.value.push(projectsData[p]);
}

function previousItem() {
	projects.value.unshift(projects.value[4]);
	projects.value.pop();
	findAndRemoveHints();
}

function nextItem() {
	projects.value.push(projects.value[0]);
	projects.value.shift();
	findAndRemoveHints();
}

function getLanguageData(name) {
	return languages[name];
}

const usedLanguages = [];

for (let i in languages) {
	if (languages[i]?.used === true) {
		usedLanguages.push(i);
	}
}

function scrollToView(id) {
	if (!id) return;
	const el = document.getElementById(id);
	if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function findAndRemoveHints() {
	document.querySelectorAll(".hint").forEach((el) => {
		if (el) {
			el.style.animation = "fade-out 1s ease forwards";
		}
	});
}

function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
</script>
