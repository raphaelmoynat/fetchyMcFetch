
const etudiants = [
    {
        avatar: "avatar.png",
        github : "raphaelmoynat",
    }
]

const divEtudiants = document.querySelector('.profil')



function makeCardFromStudent(name, avatar)
{

    let cardTemplate = `

<div class="card col-11 col-sm-6 col-md-3 m-3" style="width: 20rem;">
      <img src="${avatar}" class="card-img-top" alt="#">
      <div class="card-body">
        <a href="https://github.com/${name}" target="_blank" class="card-link" style="text-decoration: none; color: inherit;">Profil GitHub de <span>${name}</span></a>
        
      </div>
    </div>

`

    return cardTemplate

}


etudiants.forEach((etudiant)=>{

   replaceAvatar(etudiant)

})


async function replaceAvatar(etudiant){
    let pseudo = etudiant.github
    let url = `https://api.github.com/users/${pseudo}/following`
    return await  fetch(url)
        .then(response=>response.json())
        .then(profilGithub=>{
            for (let followerIndex = 0; followerIndex < profilGithub.length; followerIndex++) {
                const nameFollower = profilGithub[followerIndex].login
                const avatarFollower = profilGithub[followerIndex].avatar_url
                divEtudiants.innerHTML += makeCardFromStudent(nameFollower, avatarFollower)
            }
        })
}