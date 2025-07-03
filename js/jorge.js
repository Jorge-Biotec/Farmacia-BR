function iniciarCarrossel(carrossel) {
    const slides = carrossel.querySelectorAll(".slide");
    const bolinhasContainer = carrossel.querySelector(".bolinhas");
    const esquerda = carrossel.querySelector(".seta.esquerda");
    const direita = carrossel.querySelector(".seta.direita");
    let index = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove("ativo"));
        bolinhasContainer.querySelectorAll("span").forEach(b => b.classList.remove("ativa"));
        slides[i].classList.add("ativo");
        bolinhasContainer.children[i].classList.add("ativa");
    }

    function criarBolinhas() {
        slides.forEach((_, i) => {
            const bolinha = document.createElement("span");
            bolinha.addEventListener("click", () => {
                index = i;
                mostrarSlide(index);
            });
            bolinhasContainer.appendChild(bolinha);
        });
    }

    esquerda.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        mostrarSlide(index);
    });

    direita.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    });

    setInterval(() => {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    }, 5000);

    criarBolinhas();
    mostrarSlide(index);
}

// Iniciar todos os carrosseis da página
document.querySelectorAll(".carrossel").forEach(carrossel => iniciarCarrossel(carrossel));