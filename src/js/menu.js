let btnMenu = document.getElementById('btn-menu');
let btnFechar = document.querySelector('.btn-fechar');
let menu = document.getElementById('menu-mobile');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
});