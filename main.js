const burger = document.querySelector('.burger')
const boutonMenu = document.querySelector('.boutonMenu')
const menu = document.querySelector('.menu')


burger.addEventListener('click',()=>{
    menu.classList.add('ouvert')

})
boutonMenu.addEventListener('click',()=>{
    menu.classList.remove('ouvert')

})
