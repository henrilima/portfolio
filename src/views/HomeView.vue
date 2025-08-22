<template>
  <div>
    <header>
      <a><v-icon name="co-dev-to" scale="2" data-aos="fade-down" data-aos-duration="800" data-aos-delay="1600"></v-icon> Henrique Lima</a>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div class="texts">
        <div class="_badge" data-aos="fade-right" data-aos-duration="800">
          <v-icon name="bi-globe" scale="1" class="_icon"></v-icon><p>Desenvolvedor Web Full-Stack</p>  
        </div>
        <h2 class="_title" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">Aplicações Modernas, do Front-end ao Back-end</h2>
        <p class="_p" data-aos="fade-right" data-aos-duration="800" data-aos-delay="800">Transformo conceitos em realidade digital utilizando o ecossistema JavaScript. Sou proficiente em criar experiências de usuário dinâmicas com Vue.js e em construir APIs eficientes e escaláveis com Node.js, entregando produtos completos e modernos.</p>
        <div class="buttons">
          <button class="_button _primary">Veja meus projetos</button>
          <button class="_button">Me conheça</button>
        </div>
      </div>
      <img :src="me" class="me" :draggable="false" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1200">
    </main>

    <div class="slider" style="
      --width: 280px;
      --height: 56px;
      --quantity: 6;
    ">
      <div class="list">
        <div class="item" style="--position: 1;"><p>Estudante de EGS</p></div>
        <div class="item" style="--position: 2;"><p>Ecossistema JavaScript</p></div>
        <div class="item" style="--position: 3;"><p>Soluções Escaláveis</p></div>
        <div class="item" style="--position: 4;"><p>Estudante de EGS</p></div>
        <div class="item" style="--position: 5;"><p>Ecossistema JavaScript</p></div>
        <div class="item" style="--position: 6;"><p>Soluções Escaláveis</p></div>
      </div>
    </div>

    <section class="projects">
      
    </section>
  </div>
</template>

<script setup>
import me from "@/assets/image/me.png";
</script>