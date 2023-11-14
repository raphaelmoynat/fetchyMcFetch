const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')



burger.addEventListener('click', () => {
    if (menu.classList.contains('ouvert')) {
        menu.classList.remove('ouvert')
    } else {
        menu.classList.add('ouvert')
    }
})
