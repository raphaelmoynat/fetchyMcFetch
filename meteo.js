
let apiKey = "ce0a228962dfaac649ae269ce87307ac"

const ville = document.querySelector('.nomVille')
const temp = document.querySelector('.temp')
const description = document.querySelector('.description')
const formulaire = document.querySelector('form')

function apiCall (city){
    let url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`

    fetch(url)
    .then(response => response.json())
    .then(data=>{
        ville.innerHTML = "Ville : " + data.name
        temp.innerHTML = "Température : " + data.main.temp + " °"
        description.innerHTML = "Etat : " + data.weather[0].description

    })

}

formulaire.addEventListener('submit', function (e){
    e.preventDefault()
    const ville = document.getElementById('city').value
    apiCall(ville)

})