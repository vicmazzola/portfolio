// Configure the Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            observer.unobserve(entry.target); // To prevent the animation from repeating
        }
    });
});

// Observe animated elements within sections
function observeVisibleElements(section) {
    const animatedElements = section.querySelectorAll('.animate-on-view'); // Add this class to elements you want to animate
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
}

// SPA navigation with animations
function navigateTo(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('d-none'));

    // Show only the clicked section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('d-none');

        // Observe visible elements in the current section
        observeVisibleElements(targetSection);
    }
}

// Display Home by default when the page loads
navigateTo('home');
