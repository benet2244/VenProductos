const hamburguesa = document.querySelector('.hamburguesa');
const navUl = document.querySelector('nav ul');

hamburguesa.addEventListener('click', () => {
    navUl.classList.toggle('verMenu');
});