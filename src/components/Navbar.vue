<template>
    <header>
        <div>
            <router-link to="/">
                <div>
                    <div class="circle">
                        <p>HS</p>
                    </div>
                    <p>Henrique Silva</p>
                </div>
                <nav></nav>
            </router-link>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#portfolio"><p>Portfólio</p></a>
                </li>
                <li>
                    <a href="#sobremim"><p>Sobre mim</p></a>
                </li>
                <li>
                    <a href="#conhecimento"><p>Conhecimento</p></a>
                </li>
                <li>
                    <a href="#contato"><p>Contato</p></a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "NavbarComponent",
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.4rem 0;
}

header nav,
header nav ul,
header div {
    display: flex;
    justify-content: center;
    align-items: center;
}

header div:nth-child(1):is(div) {
    gap: 1rem;
    color: var(--grey);
}

header div:nth-child(1):is(div) > div {
    padding: 0.4rem;
    border: solid 2px var(--semidarkgrey);
    border-radius: 50%;
    height: 36px;
    max-width: 36px;
}

header div:nth-child(1):is(div) p {
    font-weight: 700;
}

header nav ul {
    gap: 1rem;
}

header nav ul li::after {
    content: "/";
    margin-left: 1rem;
}

header nav ul li:last-child::after {
    content: "" !important;
    margin: 0;
}

header nav ul li,
header nav ul li p {
    color: var(--grey);
    font-weight: 700;
    transition: all 0.4s ease;
}

header nav ul li p:hover {
    color: var(--orange);
    font-weight: 700;
}
</style>