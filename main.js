const burger = document.querySelector('.burger')
const boutonMenu = document.querySelector('.boutonMenu')
const menu = document.querySelector('.menu')
const navbar = document.querySelector(".navbar")


burger.addEventListener('click', () => {
    if (menu.classList.contains('ouvert')) {
        menu.classList.remove('ouvert')
    } else {
        menu.classList.add('ouvert')
    }
})
