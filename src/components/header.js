import logoURL from '../img/pool-pros-logo.png'
import menuIconURL from '../img/menu-icon-mobile.png'
import topBar from './topBar'
import { PROBUTTON } from '../store'

function getProBtnTxt () {
  return window.innerWidth > 768 ? PROBUTTON.tabletUp : PROBUTTON.mobile
}

const header = document.createElement('section')
header.className = 'navbar flex--column__notMain'
header.appendChild(topBar)

const nav = document.createElement('nav')
nav.className = 'container'
nav.innerHTML = `
<nav class="navbar__items">
  <div class="navbar__brand"><img class="img-responsive" src=${logoURL} alt="pool pros logo" title="Pool Pros"></div>
  <div class="navbar__item"><a href="#">Pool & Spas</a></div>
  <div class="navbar__item"><a href="#">Supplies</a></div>
  <div class="navbar__item"><a href="#">Resources</a></div>
  <div class="navbar__item"><a href="#">Services</a></div>
  <div class="navbar__btn"><button class="btn btn--primary"><i class="ss-icon">location</i><span id="proBtn">${getProBtnTxt()}</span></button></div>
</nav>
<nav class="navbar__menu">
  <img class="img-responsive" src=${menuIconURL} alt="menu" title="menu">
</nav>
`

header.appendChild(nav)

export default header
