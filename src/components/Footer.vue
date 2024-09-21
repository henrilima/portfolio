<template>
    <footer class="footer-content">
        <div class="social-media">
            <a href="https://github.com/henrilima" target="_blank">
                <v-icon name="la-github-alt" scale="2" />
                <span class="social-media-label">GitHub</span>
            </a>
            <!-- <a href="https://linkedin.com/in/yourusername" target="_blank">
                <v-icon name="fa-linkedin" scale="2" />
                <span class="social-media-label">LinkedIn</span>
            </a> -->
        </div>
        <div class="footer-text">
            <p>&copy; 2024 Henri Silva. Todos os direitos reservados.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponent",
};
</script>

<style scoped>
footer {
    background-color: var(--blurple);
    width: 100%;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.social-media {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.social-media a {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    color: var(--black);
}
.social-media a:hover {
    scale: 1.1;
}

.footer-text p {
    text-align: center;
    color: var(--black);
    font-weight: 800;
}

@media (max-width: 600px) {
    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-text {
        margin-top: 1rem;
    }
}
</style>