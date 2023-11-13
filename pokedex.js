
const img = document.querySelector('.photo')
const name = document.querySelector('.nom')
const hp = document.querySelector('.hp')
const atk = document.querySelector('.atk')
const def = document.querySelector('.def')
const typeNom = document.querySelector('.typeNom')
const typeImg = document.querySelector('.typeImg')
const formulaire = document.querySelector('form')

function apiCall(nom){
    let url = `https://tyradex.tech/api/v1/pokemon/${nom}`
    fetch(url)
        .then(response=>response.json())
        .then(data=> {
            //console.log(data[0].name.fr)
            //console.log(data[0].sprites.regular)
            img.innerHTML = ` <div>
        <img class="container"
          src="${data.sprites.regular}"
          alt="#"
        />
      </div>`
            name.innerHTML = "Nom : " + data.name.fr
            hp.innerHTML = "HP : " + data.stats.hp
            atk.innerHTML = "Attaque : " + data.stats.atk
            def.innerHTML = "Défense : " + data.stats.def
            typeNom.innerHTML = "Type : " + data.types[0].name
            typeImg.innerHTML = ` <div>
        <img class="container"
          src="${data.types[0].image}"
          alt="#"
        />
      </div>`
        })

}



formulaire.addEventListener('submit', function (e){
    e.preventDefault()
    const nomPokemon = document.getElementById('pokemon').value
    apiCall(nomPokemon)

})