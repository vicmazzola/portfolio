// Configurar o Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target); // Para evitar que a animação seja repetida
        }
    });
});

// Observar elementos animados nas seções
function observeVisibleElements(section) {
    const animatedElements = section.querySelectorAll('.animate-on-view'); // Adicione esta classe nos elementos que deseja animar
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}

// Navegação SPA com animação
function navigateTo(sectionId) {
    // Ocultar todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('d-none'));

    // Mostrar apenas a seção clicada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('d-none');

        // Observar os elementos visíveis na seção atual
        observeVisibleElements(targetSection);
    }
}

// Mostrar Home por padrão ao carregar a página
navigateTo('home');
