
let apiKey = "ce0a228962dfaac649ae269ce87307ac"

const ville = document.querySelector('.nomVille')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const button = document.querySelector('#submit')
const fondMeteo = document.querySelector('.fondMeteo')

async function apiCall (city){
    let url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`

    await fetch(url)
    .then(response => response.json())
    .then(data=>{
        ville.innerHTML = "Ville : " + data.name
        temp.innerHTML = "Température : " + data.main.temp + " °"
        description.innerHTML = "Etat : " + data.weather[0].description
        console.log(data.weather[0].description)
        changeFond(data.weather[0].description)

    })

}

function changeFond(description){
    fondMeteo.classList.remove("fondSoleil", "fondNuage", "fondPluie", "fondOrage")
    if (description.includes("soleil")
        || description.includes("ciel dégagé")) {
        fondMeteo.classList.add("fondSoleil")
    } else if (description.includes("nuageux")
        || description.includes("couvert")
        || description.includes("brume")) {
        fondMeteo.classList.add("fondNuage")
    } else if (description.includes("pluie")
        || description.includes("légère pluie")
        || description.includes("petites averses")) {
        fondMeteo.classList.add("fondPluie")
    } else if (description.includes("orage")) {
        fondMeteo.classList.add("fondOrage")
    }
}

button.addEventListener('click', function (){
    const ville = document.querySelector('#city').value
    apiCall(ville)

})

apiCall("Lyon")