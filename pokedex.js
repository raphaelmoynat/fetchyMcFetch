
const img = document.querySelector('.photo')
const name = document.querySelector('.nom')
const hp = document.querySelector('.hp')
const atk = document.querySelector('.atk')
const def = document.querySelector('.def')
const typeNom = document.querySelector('.typeNom')
const typeImg = document.querySelector('.typeImg')
const button = document.querySelector('#submit')
const nextEv = document.querySelector('.nextEv')
const pokemon = document.querySelector('#pokemon')


async function apiCall(nom){
    let url = `https://tyradex.tech/api/v1/pokemon/${nom}`
    await fetch(url)
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
            if (data.evolution.next == null){
                nextEv.innerHTML = "Ce pokémon n'a pas d'évolution"
            }else{
                nextEv.innerHTML = "Evolution : " + data.evolution.next[0].name
            }
        })

}

button.addEventListener('click', function () {
    const nomPokemon = pokemon.value
    apiCall(nomPokemon)
})

pokemon.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const nomPokemon = pokemon.value
        apiCall(nomPokemon)
    }
})

apiCall("dracaufeu")
