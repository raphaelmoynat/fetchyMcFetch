
const etudiants = [
    {
        avatar: "avatar.png",
        github : "raphaelmoynat",
    }
]

const divEtudiants = document.querySelector('.profil')

function makeCardFromStudent(student)
{

    let cardTemplate = `
<div class="card" style="width: 20rem;">
  <img src="${student.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <a href="https://github.com/${student.github}" target="_blank" class="card-link" style="text-decoration: none; color: inherit;">Profil GitHub de <span>${student.github}</span></a>
  </div>
</div>

`

    return cardTemplate

}

etudiants.forEach((etudiant)=>{

    replaceAvatar(etudiant).then(etudiant=>{
        divEtudiants.innerHTML += makeCardFromStudent(etudiant)
    })

})

async function replaceAvatar(etudiant){
    let pseudo = etudiant.github
    let url = `https://api.github.com/users/${pseudo}`
    return await  fetch(url)
        .then(response=>response.json())
        .then(profilGithub=>{
            etudiant.avatar = profilGithub.avatar_url
            return etudiant
        })
}

const button = document.querySelector('.btn')
const depots = document.querySelector('.depots')

async function addDepots()  {
    let pseudo = etudiants[0].github
    return await fetch(`https://api.github.com/users/${pseudo}/repos`)
        .then(reponseEnJson=> reponseEnJson.json())
        .then((reponsseDeserialisee) => {
            return reponsseDeserialisee
        })
}
let depotIndex = 0

button.addEventListener("click", () => {
    addDepots().then(nameDepots => {
        if (depotIndex < nameDepots.length) {
            const depotName = nameDepots[depotIndex].name
            const linkDepot = nameDepots[depotIndex].html_url
            console.log(linkDepot)
            depots.innerHTML += `<a href="${linkDepot}" target="_blank" class="card-link" style="text-decoration: none; color: inherit;">${depotName}</a>` + `<br>`
            depotIndex++
        } else {
            depots.innerHTML += "Tous les dépôts ont été affichés." + `<br>`
        }
    })
})