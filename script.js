const navLinks = document.querySelectorAll('nav a');
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('nav ul');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(item => {
            item.classList.remove('active');
        });
        link.classList.add('active');
        navList.classList.remove('open');
    });
});

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
});