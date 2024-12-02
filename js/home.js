    // SweetAlert2: Custom Alert for Navigation
    function showCustomAlert(section) {
    const messages = {
    projects: 'Dive into my portfolio to explore the projects I’ve worked on!',
    resume: 'Discover my journey, skills, and achievements in detail!'
};

    Swal.fire({
    title: section === 'projects' ? 'Explore Projects' : 'View Resume',
    text: messages[section],
    icon: 'info',
    confirmButtonText: 'Let’s Go!',
    confirmButtonColor: '#3085d6',
    showCancelButton: true,
    cancelButtonText: 'Not Now',
    cancelButtonColor: '#d33',
}).then((result) => {
    if (result.isConfirmed) {
    navigateTo(section);
}
});
}
