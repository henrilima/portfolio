<template>
    <section class="flex-column portfolio" id="portfolio">
        <p class="main-text">Portfólio</p>
        <div class="boxies">
            <div class="box" v-for="box in boxes" :key="box.title">
                <v-icon
                    :name="box.emoji"
                    class="emoji-grey icon-bottom"
                    scale="1.6"
                />
                <p class="emphasize">{{ box.title }}</p>
                <p>{{ box.description }}</p>
                <div class="tags">
                    <span
                        v-for="tag in box.tags"
                        :key="tag.id"
                        :class="['tag', tag.color, tag.id]"
                        ><p>{{ tag.name }}</p></span
                    >
                </div>
                <div class="buttons">
                    <button
                        v-for="btn in box.butons"
                        :key="btn.id"
                        class="button"
                        @click="openLink(btn.link)"
                        :disabled="btn.disabled"
                    >
                        {{ btn.text }} <v-icon :name="btn.emoji" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import boxesData from "@/data/portfolio.json";

export default {
    name: 'PortfolioPage',
    data() {
        return {
            boxes: boxesData
        }
    },
    methods: {
        openLink(link) {
            window.open(link, '_blank');
        }
    }
}
</script>

<style scoped>
section.portfolio {
    flex-grow: 1;
    height: auto;
    padding: 4rem 0;

    align-items: center;
    justify-content: center;
    gap: 2rem;
    border-top: 2px solid var(--semidarkgrey);
    border-bottom: 2px solid var(--semidarkgrey);
}

section.portfolio div.boxies {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
}

section.portfolio div.box {
    width: 260px;
    height: auto;
    min-height: 440px;
    border-radius: 5px;
    background-color: var(--darkgrey);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 1.4rem;
    transition: all 0.4s ease;
}

section.portfolio div.box:hover {
    scale: 1.05;
}

section.portfolio div.box p:nth-of-type(2) {
    font-weight: 400;
    color: var(--lightgrey);
    text-align: left;
    margin-top: 0.5rem;
}

.tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.tag {
    font-size: 0.8rem;
    background-color: transparent;
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
    border: solid 1.4px var(--lightgrey);
}

.tag p {
    color: var(--lightgrey);
    font-size: 0.8rem;
    margin: 0;
}

.tag p::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 1rem;
    background-color: currentColor;
    margin-right: 0.4rem;
}

.python {
    background-color: var(--python);
    border-color: var(--python);
}

.executavel {
    background-color: var(--tag);
    border-color: var(--tag);
}

.vue {
    background-color: var(--vue);
    border-color: var(--vue);
}

.node {
    background-color: var(--node);
    border-color: var(--node);
}

.yarn {
    background-color: var(--yarn);
    border-color: var(--yarn);
}

.python p, .executavel p, .vue p, .node p, .yarn p {
    font-weight: 700;
}

.white p {
    color: var(--white) !important;
}

.black p {
    color: var(--black) !important;
}

.buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1.6rem;
    gap: 0.4rem;
}

.buttons button {
    width: 100%;
    background-color: var(--semidarkgrey);
    border: none;
    border-radius: 5px;
    color: var(--white);
    padding: 0.4rem;
    transition: all 0.4s ease;
    font-weight: 700;
}

.buttons button:nth-of-type(1):hover {
    background-color: var(--btn-blurple);
    cursor: pointer;
    color: var(--black);
}

.buttons button:nth-of-type(2):hover {
    background-color: var(--btn-orange);
    cursor: pointer;
    color: var(--black);
}

.buttons button:nth-of-type(3):hover {
    background-color: var(--btn-green);
    cursor: pointer;
    color: var(--white);
}

.buttons button:nth-of-type(2):disabled:hover {
    background-color: var(--grey);
    cursor: default;
    color: var(--black);
}
</style>