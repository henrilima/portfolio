<template>
    <section class="contactme flex-column" id="contato">
        <p class="main-text">Contato</p>
        <div class="contact-container">
            <div>
                <form @submit.prevent="validateForm">
                    <div class="title">
                        <h2>Entre em contato comigo.</h2>
                        <p v-if="errors.message" class="messages">
                            {{ errors.message }}
                        </p>
                    </div>
                    <div>
                        <label for="name">Nome:</label>
                        <input
                            type="text"
                            v-model="name"
                            id="name"
                            placeholder="Seu nome"
                        />
                        <p v-if="errors.name">{{ errors.name }}</p>
                    </div>

                    <div>
                        <label for="email">E-mail:</label>
                        <input
                            type="email"
                            v-model="email"
                            id="email"
                            placeholder="Seu melhor email"
                        />
                        <p v-if="errors.email">{{ errors.email }}</p>
                    </div>

                    <div>
                        <label for="message">Mensagem:</label>
                        <textarea
                            v-model="message"
                            id="message"
                            placeholder="Escreva aqui sua mensagem"
                        ></textarea>
                    </div>

                    <button type="submit" class="call-to-action cta-btn">
                        Enviar
                    </button>
                </form>
            </div>
            <div>
                <img :src="image" alt="image" :draggable="false" />
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from "emailjs-com";
import image from "@/assets/images/gmail.svg";

export default {
    name: "ContactComponent",
    data() {
        return {
            name: "",
            email: "",
            message: "",
            errors: {
                message: "",
            },
            image,
        };
    },
    methods: {
        validateForm() {
            console.log(process.env.VUE_APP_EMAILJS_SERVICE_ID);
            this.errors = {};

            if (!this.name) {
                return (this.errors.message = "O nome é obrigatório.");
            }

            const emailPattern =
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            if (!this.email) {
                return (this.errors.message = "O email é obrigatório.");
            } else if (!emailPattern.test(this.email)) {
                return (this.errors.message =
                    "Por favor, insira um email válido.");
            }

            if (!this.message) {
                return (this.errors.message = "A mensagem é obrigatória.");
            }

            // Retorna true se não houver erros
            if ((Object.keys(this.errors).length === 0) == true) {
                this.submitForm();
            }
        },
        submitForm() {
            // Enviar email com emailjs
            this.sendEmail();
        },
        sendEmail() {
            const templateParams = {
                name: this.name,
                email: this.email,
                message: this.message,
            };

            emailjs
                .send(
                    process.env.VUE_APP_EMAILJS_SERVICE_ID,
                    process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    process.env.VUE_APP_EMAILJS_USER_ID
                )
                .then(
                    (response) => {
                        console.log(
                            "Email enviado com sucesso!",
                            response.status,
                            response.text
                        );

                        this.errors.message = "Email enviado com sucesso!";
                        this.name = "";
                        this.email = "";
                        this.message = "";
                    },
                    (error) => {
                        console.error("Erro ao enviar o email:", error);
                        this.errors.message =
                            "Erro ao enviar o email. Tente novamente.";
                    }
                );
        },
    },
};
</script>

<style scoped>
section.contactme {
    flex-grow: 1;
    height: auto;
    padding: 4rem 0;

    align-items: center;
    justify-content: center;
    gap: 2rem;
    border-top: 2px solid var(--semidarkgrey);
    border-bottom: 2px solid var(--semidarkgrey);
}

section.contactme > div.contact-container {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 8rem;
}

section.contactme > div.contact-container > div {
    display: flex;
    align-content: center;
    justify-content: center;
}

section.contactme > div.contact-container > div:nth-of-type(1) {
    max-width: 460px;
    background-color: var(--darkgrey);
    border-radius: 5px;
    padding: 1rem 0.5rem;
}

section.contactme > div.contact-container > div:nth-of-type(1) h2 {
    font-weight: 700;
    color: var(--lightgrey);
    font-size: 2rem;
}

form {
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
}

form div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

form div label {
    margin-bottom: 0.25rem;
}

form div input {
    width: 100%;
}

form div textarea {
    width: 100%;
    resize: none;
    min-height: 100px;
}

form button.cta-btn {
    color: var(--black);
    background-color: var(--grey);
    font-weight: 700;
}
form button.cta-btn:hover {
    background-color: var(--blurple);
}

form div input,
form div textarea {
    border: 1px solid var(--darkgrey);
    padding: 0.5rem;
    border-radius: 4px;
    outline: none;
    background-color: var(--semidarkgrey);
    color: var(--lightgrey);
}

form p.messages {
    width: 100%;
    color: var(--orange);
    font-size: 0.8rem;
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: var(--semidarkgrey);
}

section.contactme > div.contact-container div:nth-of-type(2) img {
    height: auto;
    width: 360px;
}

@media screen and (max-width: 768px) {
    section.contactme > div.contact-container {
        flex-direction: column;
        gap: 2rem;
    }

    form {
        width: 100%;
        max-width: none;
        padding: 1.6rem;
    }

    section.contactme > div.contact-container > div:nth-of-type(1) {
        margin: 0.5rem 2rem;
    }

    section.contactme > div.contact-container div:nth-of-type(2) img {
        height: auto;
        width: 280px;
    }
}
</style>