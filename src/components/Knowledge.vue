<template>
    <div class="domain flex-column" id="conhecimento">
        <p class="main-text">Conhecimento</p>
        <div class="languages">
            <div class="languages-icons">
                <v-icon
                    :name="lang.icon"
                    :scale="lang.scale || 3"
                    :style="{ color: lang.color }"
                    @click="showBox(lang.name, lang.description, lang.color, lang.studyTime)"
                    v-for="lang in linguagens"
                    :key="lang.name"
                />
            </div>
            <div
                class="description-box"
                v-if="descricaoVisivel && tituloVisivel && color"
            >
                <p
                    id="title"
                    class="main-text main-text-min"
                    :style="{
                        backgroundImage: `linear-gradient(to right, ${color},  ${color})`,
                    }"
                >
                    {{ tituloVisivel }}
                </p>
                <p id="description">{{ descricaoVisivel }}</p>
                <p id="studytime">{{ tempoVisivel }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import linguagens from "@/data/linguagens.json";

export default {
    name: "KnowledgeComponent",
    data() {
        return {
            linguagens,
            tituloVisivel: "Olá!",
            descricaoVisivel:
                "Para informações sobre a linguagem, clique em cima dela.",
            color: "#707070",
            tempoVisivel: "",
        };
    },
    methods: {
        showBox(titulo, descricao, color, tempo) {
            this.tituloVisivel = titulo;
            this.descricaoVisivel = descricao;
            this.color = color;
            this.tempoVisivel = `Tempo de estudo: ${(new Date().getFullYear() - Number(tempo)) + 1} ano(s)`;
        },
    },
};
</script>

<style scoped>
div.domain {
    flex-grow: 1;
    height: auto;
    padding: 4rem 0;

    align-items: center;
    justify-content: center;
    gap: 2rem;
    border-bottom: 2px solid var(--semidarkgrey);
}

div.domain > div.languages {
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-top: 2rem;
}

div.domain > div.languages .languages-icons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    flex-grow: 1;

    gap: 1rem;
    max-width: 280px;
}

div.domain > div.languages div.description-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 500px;
    background-color: var(--darkgrey);
    border-radius: 5px;
    padding: 2rem;
}
div.domain > div.languages div.description-box p#description {
    color: var(--lightgrey);
}

div.domain > div.languages div.description-box p#studytime {
    color: var(--lightgrey);
    margin-top: 1rem;
}

@media screen and (max-width: 768px) {
    div.domain > div.languages {
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }
    div.domain > div.languages div.description-box {
        max-width: 100%;
        margin: 0 2rem;
        padding: 2rem;
    }
}
</style>