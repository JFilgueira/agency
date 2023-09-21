const hamburguer = document.querySelector('.fa-bars');
const menuMobile = document.querySelector('.lista-menu-mobile');
console.log(menuMobile);

hamburguer.addEventListener('click', () => {
    menuMobile.classList.toggle('lista-menu-mobile-ok');
})