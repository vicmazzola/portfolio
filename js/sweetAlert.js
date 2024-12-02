    // Function to handle SweetAlert2 for social media links
    function showAlert(platform, message) {
    Swal.fire({
        title: platform,
        text: message,
        icon: 'info',
        confirmButtonText: 'Visit',
        showCancelButton: true,
        cancelButtonText: 'Close',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        preConfirm: () => {
            switch (platform) {
                case 'GitHub':
                    window.open('https://github.com/vicmazzola', '_blank');
                    break;
                case 'LinkedIn':
                    window.open('https://www.linkedin.com/in/victor-mazzola-59aa291a0/', '_blank');
                    break;
                case 'Instagram':
                    window.open('https://instagram.com/mazzola_', '_blank');
                    break;
            }
        }
    });
}
