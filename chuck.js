const boutonChuck = document.querySelector('.boutonChuck')
const boutonRéinit = document.querySelector(".boutonRéinit")
const texteBlague = document.querySelector('.chuck')

async function vaChercherUneBlagueSurChuckNorris()
{
    return await fetch("https://api.chucknorris.io/jokes/random")
        .then(response=>response.json())
        .then(data=>{
            return data
        })
}

boutonChuck.addEventListener("click",()=>{
    vaChercherUneBlagueSurChuckNorris().then(data=> {
        let template = `<h3 class="p-2 text-center">${data.value}</h3>`
        texteBlague.innerHTML += template
    })
})

boutonRéinit.addEventListener("click", ()=>{
    texteBlague.innerHTML = ""
})

const divButtons = document.querySelector('.boutonsCategories')

fetch("https://api.chucknorris.io/jokes/categories")
    .then(response=>response.json())
    .then(data=> {

        data.forEach((category)=>{
            console.log(category)
            let templateButton = `
        <button class="btn btn-primary boutonCategorie" id="${category}">${category}</button>
        `
            divButtons.innerHTML += templateButton
        })

        let boutons = document.querySelectorAll('.boutonCategorie')

        boutons.forEach((bouton)=>{

            bouton.addEventListener("click", ()=>{

                fetch(`https://api.chucknorris.io/jokes/random?category=${bouton.id}`)
                    .then(response=>response.json())
                    .then(data =>{
                        let template = `<h3 class="p-2 text-center">${data.value}</h3>`
                        texteBlague.innerHTML += template
                    })
            })
        })
    })