const SpanOpenModalMenu = document.getElementById('SpanOpenModalMenu')
const MenuFloat = document.getElementById('MenuFloat')
const ContainerCard = document.getElementById("ContainerCard")
const ProjetosContainer = document.getElementById('Projetos')

const IconTitle = document.getElementById("IconTitle")

if (innerWidth <= 430) IconTitle.setAttribute("href", 'assets/Icon/curriculo-mobile.png')
else IconTitle.setAttribute("href", 'assets/Icon/curriculo-pc.png')

function CreateCardProjects() {
    // Seção do Home e Projetos
    for (let i = 0; i < ListaProjetos.length; i++) {
        const CardProjetos = `<div class="CardProjetos">
                                <img src="${ListaProjetos[i].Img}">
                                <span>${ListaProjetos[i].Nome}</span>

                                <div class="Controls">
                                    <button>Acessar</button>
                                    <button>Github</button>
                                </div>
                            </div>`

        ContainerCard.innerHTML += CardProjetos
        ProjetosContainer.innerHTML += CardProjetos
    }

    // Projetos
    /*for (let j = 0; j < ListaProjetos.length; j++) {
        const CardProjetos = `<div class="CardProjetos">
                                <img src="${ListaProjetos[j].Img}">
                                <span>${ListaProjetos[j].Nome}</span>

                                <div class="Controls">
                                    <button>Acessar</button>
                                    <button>Github</button>
                                </div>
                            </div>`

        ProjetosContainer.innerHTML += CardProjetos
    }*/
}

CreateCardProjects()

SpanOpenModalMenu.click = () => {
    MenuFloat.classList.toggle('ActiveMenuFloat')
}
SpanOpenModalMenu.onmouseover = () => {
    MenuFloat.classList.toggle('ActiveMenuFloat')
}

const ExperienciaHTML = document.getElementById('ExperienciaHTML')
const ExperienciaCSS = document.getElementById('ExperienciaCSS')
const ExperienciaJAVASCRIPT = document.getElementById('ExperienciaJAVASCRIPT')

const CountExperienciasHTML = document.getElementById('CountExperienciasHTML')
const CountExperienciaCSS = document.getElementById('CountExperienciaCSS')
const CountExperienciasJAVASCRIPT = document.getElementById('CountExperienciasJAVASCRIPT')

let HTMLEx = 25
let CSSEx = 78
let JAVASCRIPTEx = 35

ExperienciaHTML.style.strokeDashoffset = 440 - (440 * HTMLEx) / 100
ExperienciaCSS.style.strokeDashoffset = 440 - (440 * CSSEx) / 100
ExperienciaJAVASCRIPT.style.strokeDashoffset = 440 - (440 * JAVASCRIPTEx) / 100

CountExperienciasHTML.textContent = `${HTMLEx}%`
CountExperienciaCSS.textContent = `${CSSEx}%`
CountExperienciasJAVASCRIPT.textContent = `${JAVASCRIPTEx}%`
