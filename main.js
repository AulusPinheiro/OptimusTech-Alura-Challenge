const botaoMenu = document.querySelector('.menuHamburguer');
const menu = document.querySelector('.menu__mobile');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__mobile--ativo');
})

document.querySelectorAll(".menu__link").forEach(n => n.addEventListener('click', () => {
    menu.classList.remove('menu__mobile--ativo');
}))