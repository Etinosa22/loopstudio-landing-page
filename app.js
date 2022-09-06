const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
});