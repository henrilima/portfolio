document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselItems = document.querySelectorAll(".carousel-item");

    // Obtenha a largura real do contêiner
    const containerWidth = carouselContainer.clientWidth;

    // Defina a largura do carrossel com base na largura do contêiner
    carouselSlide.style.width = `calc(${containerWidth}px * ${carouselItems.length})`;

    // Restante do código JavaScript para o carrossel (não alterado)

    // Botões de navegação
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    // Contador de item
    let counter = 1;
    const size = carouselItems[0].clientWidth + 20;

    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

    // Botões de navegação
    nextBtn.addEventListener("click", () => {
        if (counter >= carouselItems.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    prevBtn.addEventListener("click", () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    // Verifica se chegou ao final e início do slide
    carouselSlide.addEventListener("transitionend", () => {
        if (carouselItems[counter].id === "lastClone") {
            carouselSlide.style.transition = "none";
            counter = carouselItems.length - 2;
            carouselSlide.style.transform =
                "translateX(" + -size * counter + "px)";
        }
        if (carouselItems[counter].id === "firstClone") {
            carouselSlide.style.transition = "none";
            counter = carouselItems.length - counter;
            carouselSlide.style.transform =
                "translateX(" + -size * counter + "px)";
        }
    });

    function start() {
        if (counter >= carouselItems.length - 1) return;
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    }
    start();
});
