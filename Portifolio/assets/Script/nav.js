const BtnHome = document.getElementById('BtnHome')
const BtnProjetos = document.getElementById('BtnProjetos')
const BtnContato = document.getElementById('BtnContato')
const TelaInicial = document.getElementById('TelaInicial')

const HomeContainer = document.getElementById('HomeContainer')
const Projetos = document.getElementById('Projetos')


BtnHome.onclick = () => {
    BtnHome.classList.add('NavMenuActive')
    BtnProjetos.classList.remove('NavMenuActive')

    TelaInicial.style.display = 'none'
    HomeContainer.style.display = 'block'
    Projetos.style.display = 'none'
}

BtnProjetos.onclick = () => {
    BtnHome.classList.remove('NavMenuActive')
    BtnProjetos.classList.add('NavMenuActive')

    TelaInicial.style.display = 'none'
    HomeContainer.style.display = 'none'
    Projetos.style.display = 'flex'
}