const BtnHome = document.getElementById('BtnHome')
const BtnProjetos = document.getElementById('BtnProjetos')
const BtnContato = document.getElementById('BtnContato')

const BtnOpenMenuMobile = document.getElementById('BtnOpenMenuMobile')
const HomeMobile = document.getElementById("HomeMobile")
const ProjetosMobile = document.getElementById("ProjetosMobile")
const ContatoMobile = document.getElementById("ContatoMobile")

const TelaInicial = document.getElementById('TelaInicial')

const MenuFloatMobile = document.getElementById('MenuFloatMobile')

const HomeContainer = document.getElementById('HomeContainer')
const Projetos = document.getElementById('Projetos')

// Desktop
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

// Mobile
BtnOpenMenuMobile.onclick = () => {
    MenuFloatMobile.classList.toggle('toggleMenuFloatMobile')
}

HomeMobile.onclick = () => {
    HomeMobile.classList.add('NavMenuActiveMobile')
    ProjetosMobile.classList.remove('NavMenuActiveMobile')

    TelaInicial.style.display = 'none'
    HomeContainer.style.display = 'block'
    Projetos.style.display = 'none'
}

ProjetosMobile.onclick = () => {
    HomeMobile.classList.remove('NavMenuActiveMobile')
    ProjetosMobile.classList.add('NavMenuActiveMobile')

    TelaInicial.style.display = 'none'
    HomeContainer.style.display = 'none'
    Projetos.style.display = 'flex'
}