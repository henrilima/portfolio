<template>
    <section class="aboutme" id="sobremim">
        <div class="flex-column hl">
            <img :src="photo" alt="José Henrique" :draggable="false" />
            <h2>José Henrique</h2>
            <p>
                Sou técnico em Desenvolvimento de Sistemas e atualmente estou
                cursando Engenharia de Software. Tenho um grande interesse por
                programação e estou sempre explorando novas tecnologias e
                habilidades. Além de criar interfaces gráficas e desenvolver
                bots para Discord, também sou apaixonado por histórias macabras
                japonesas e por descobrir curiosidades sobre biologia. Meu
                objetivo é aplicar minhas habilidades em projetos desafiadores,
                explorar novas tecnologias e colaborar com pessoas ao redor do
                mundo. Se você tem alguma ideia interessante ou um projeto em
                mente, adoraria conversar!
            </p>
        </div>
        <div class="info-section">
            <div class="actions">
                <p class="main-text">
                    Criando produtos: Softwares, designs e experiências.
                </p>
                <div class="buttons-box">
                    <button class="call-to-action" @click="downloadFile">
                        Currículo <v-icon name="ai-cv-square" />
                    </button>
                    <button class="call-to-action" disabled>
                        Serviços <v-icon name="md-miscellaneousservices" />
                    </button>
                </div>
            </div>
            <div class="courses">
                <p class="main-text main-text-min">Formação:</p>
                <div class="box-course">
                    <v-icon name="md-school-round" scale="1.5" />
                    <div class="course-info">
                        <h3>Técnico em Desenvolvimento de Sistemas</h3>
                        <p>
                            Instituição: Escola Técnica Antônio Arruda de Farias
                        </p>
                        <p>Período: 2021 - 2023</p>
                    </div>
                </div>
                <div class="box-course">
                    <v-icon name="md-school-round" scale="1.5" />
                    <div class="course-info">
                        <h3>Engenharia de Software</h3>
                        <p>Instituição: Universidade Estácio de Sã</p>
                        <p>Período: 2024 - Atual</p>
                    </div>
                </div>
            </div>
            <div class="courses">
                <p class="main-text main-text-min">Certificações:</p>
                <div class="box-course">
                    <v-icon name="la-certificate-solid" scale="1.5" />
                    <div class="course-info">
                        <h3>Curso de Informática</h3>
                        <p>Local de ensino: INSC</p>
                        <p>Professora: Tarciana Silva</p>
                        <p>Período: 2016</p>
                    </div>
                </div>
                <div class="box-course">
                    <v-icon name="la-certificate-solid" scale="1.5" />
                    <div class="course-info">
                        <h3>Curso de Desenvolvimento Web Completo</h3>
                        <p>Instituição: Udemy Academy</p>
                        <p>Professor: Leonardo Moura Leitão</p>
                        <p>Período: 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import photo from "@/assets/images/photo.jpeg";

export default {
    name: "AboutmeComponent",
    data() {
        return {
            photo,
        };
    },
    methods: {
        downloadFile() {
            const link = document.createElement("a");
            link.href = "/docs/cv.pdf";
            link.download = "cv.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
    },
};
</script>

<style scoped>
section.aboutme {
    width: 100%;
    flex-grow: 1;
    height: auto;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 8rem;
    padding: 4rem 0;
    border-bottom: 2px solid var(--semidarkgrey);
}

section.aboutme > div {
    max-width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
}

section.aboutme div:nth-of-type(1) img {
    width: calc(256px / 4 * 2.5) !important;
    height: auto;
    border-radius: 25%;
}

section.aboutme div:nth-of-type(1) h2 {
    font-weight: 800;
    font-size: 2rem;
    color: var(--lightgrey);
}

section.aboutme div:nth-of-type(1) p {
    color: var(--grey);
    text-align: justify;
    max-width: 420px;
}

section.aboutme div.info-section {
    max-width: 420px;
    display: flex;
    gap: 1rem;

    display: flex;
    align-items: flex-start;
    justify-content: center;
}

section.aboutme div.info-section div.actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--semidarkgrey);
}

section.aboutme div.info-section p {
    text-align: left;
}
section.aboutme div.info-section div.buttons-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
}

section.aboutme div.info-section div.buttons-box button {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

section.aboutme div.info-section div.courses {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    border-bottom: 2px solid var(--semidarkgrey);
}

section.aboutme div.info-section div.courses div.box-course {
    display: flex;
    gap: 1rem;
}

section.aboutme div.info-section div.courses div.box-course div {
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
}

section.aboutme div.info-section div.courses div.box-course div h3 {
    font-weight: 700;
}

@media screen and (max-width: 768px) {
    section.aboutme {
        flex-direction: column;
        padding: 4rem 2rem;
        justify-content: center;
        align-items: center;
    }

    section.aboutme > div {
        max-width: 100%;
        width: 100%;
    }
}
</style>