const SpanOpenModalMenu = document.getElementById('SpanOpenModalMenu')
const MenuFloat = document.getElementById('MenuFloat')
const ContainerCard = document.getElementById("ContainerCard")
const ProjetosContainer = document.getElementById('Projetos')

function CreateCardProjects() {
    // Home
    for (let i = 0; i < ListaProjetos.length; i++) {
        const CardProjetos = `<div class="CardProjetos">
                                <img src="${ListaProjetos[i].Img}" alt="">
                                <span>${ListaProjetos[i].Nome}</span>

                                <div class="Controls">
                                    <button>Acessar</button>
                                    <button>Github</button>
                                </div>
                            </div>`

        ContainerCard.innerHTML += CardProjetos
    }

    // Projetos
    for (let j = 0; j < ListaProjetos.length; j++) {
        const CardProjetos = `<div class="CardProjetos">
                                <img src="${ListaProjetos[j].Img}" alt="">
                                <span>${ListaProjetos[j].Nome}</span>

                                <div class="Controls">
                                    <button>Acessar</button>
                                    <button>Github</button>
                                </div>
                            </div>`

        ProjetosContainer.innerHTML += CardProjetos
    }
}

CreateCardProjects()

SpanOpenModalMenu.click = () => {
    MenuFloat.classList.toggle('ActiveMenuFloat')
}
SpanOpenModalMenu.onmouseover = () => {
    MenuFloat.classList.toggle('ActiveMenuFloat')
}


