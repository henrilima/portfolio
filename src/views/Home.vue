<template>
    <div>
        <main>
            <Navbar />
            <div class="main-body flex-column">
                <div class="flex-column">
                    <img :src="photo" :draggable="false" alt="José Henrique">
                    <p>Olá, meu nome é <span class="emphasize">Henrique Silva</span> <v-icon name="md-wavinghand-round" class="emoji-orange" /></p>
                </div>
                <div class="flex-column">
                    <p class="main-text">Criando produtos: Softwares, designs e experiências.</p>
                    <button @click="scrollToSection('sobremim')" class="call-to-action">Veja mais <v-icon name="bi-box-arrow-in-up-right" /></button>
                </div>
            </div>
            <Portfolio />
            <Sobremim />
            <Dominio />
            <Contato />
            
            <Rodape />
        </main>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import Sobremim from '@/components/Aboutme';
import Dominio from '@/components/Knowledge';
import Contato from '@/components/Contact';
import Rodape from '@/components/Footer';

import photo from '@/assets/images/photo.jpeg';

export default {
    name: 'HomePage',
    components: {
        Navbar,
        Portfolio,
        Sobremim,
        Dominio,
        Contato,
        Rodape,
    },
    data() {
        return {
            photo
        };
    },
    methods: {
        scrollToSection(sectionId = null) {
            if (sectionId) {
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior:'smooth' });
                }
            } else {
                return null;
            }
        }
    }
}
</script>

<style scoped>
main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
}

main .main-body {
    flex-grow: 1;
    height: 100%;
    min-height: 100vh;

    align-items: center;
    justify-content: center;
    gap: 1rem;
}

main .main-body div:nth-of-type(1) {
    gap: 1rem;
    height: auto;
    align-items: center;
    justify-content: center;
}

main .main-body div:nth-of-type(1) p {
    color: var(--grey);
}

main .main-body div:nth-of-type(1) img {
    height: 160px;
    width: 160px;
    object-fit: cover;
    border-radius: 50%;
}

main .main-body div:nth-of-type(2) {
    align-items: center;
    justify-content: center;
    max-width: 540px;
    gap: 2rem;
}

@media screen and (max-width: 768px) {
    header {
        display: none;
    }
}
</style>