<template>
  <div class="certificates" data-aos="fade-up" data-aos-duration="500">
    <h2 class="_title">Certificados Profissionais</h2>
    <p class="_subtitle">
      Confira abaixo os certificados que comprovam minha qualificação e experiência. Clique na imagem para visualizá-la em tela cheia.
    </p>
    <button class="_button _primary" @click="toggleCertificatesComponent">Voltar ao início</button>
    <hr class="_hr">
    <div class="certificates_cards">
      <div
        class="certificates_card"
        v-for="(certificate, index) in certificates"
        :key="index"
      >
        <viewer :options="viewerOptions">
          <img
            :src="certificate.img"
            :alt="certificate.title"
            class="certificate"
          />
        </viewer>
        <div>
          <h2 class="_title">{{ certificate.title }}</h2>
          <p class="_subtitle">{{ certificate.platform }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";

const certificates = [
  {
    title: "Curso Web Moderno",
    platform: "Cod3r",
    img: require("@/assets/documents/1_web_coder.jpg"),
  },
  {
    title: "Imersão Mobile",
    platform: "Alura",
    img: require("@/assets/documents/2_mobile_alura.jpg"),
  },
  {
    title: "NLW Agents - Avançado",
    platform: "Rockeseat",
    img: require("@/assets/documents/3_nlw_rocketseat.jpg"),
  },
  {
    title: "Imersão Dados com Python",
    platform: "Alura",
    img: require("@/assets/documents/4_dados_python.jpg"),
  },
  {
    title: "Imersão IA 3ª Geração",
    platform: "Alura",
    img: require("@/assets/documents/5_gemini_alura.jpg"),
  },
];

const viewerOptions = {
  navbar: false,
  toolbar: false,
  title: true,
  movable: false,
  zoomable: true,
  rotatable: false,
  scalable: false,
  fullscreen: true,
  transition: true,
  keyboard: false,
  backdrop: true,
};

function toggleCertificatesComponent() {
  store.dispatch("toggleCertificates");
}
</script>