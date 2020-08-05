const navSlide = () => {
    const togglerMenu = document.querySelector('.toggler-menu');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    togglerMenu.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s forwards ${
                    index / 5 + 0.3
                }s`;
            }
        });
        // Toggler Menu Animation
        togglerMenu.classList.toggle('toggle-menu');
    });
};

const app = () => {
    navSlide();
};
app();
