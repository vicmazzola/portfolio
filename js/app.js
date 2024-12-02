function navigateTo(sectionId) {
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('d-none'));

    // Mostrar apenas a seção clicada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('d-none');
    }
}

// Mostrar Home por padrão ao carregar a página
navigateTo('home');

// AOS.js
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000, // Duração das animações em ms (ajustável)
        once: true      // Executar animação apenas uma vez (ou false para repetir ao scroll)
    });
});
