import logoURL from "../img/pool-pros-logo.png"
import menuIconURL from "../img/menu-icon-mobile.png"
import topBar from "./topBar"
import data from "../store"
const text = data.findPro

const header = document.createElement('header')
header.className = 'navbar'
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
  <div class="navbar__btn"><button class="btn btn--primary" class="ss-location"><i class="ss-icon">location</i>${text.mobile}</button></div>
</nav>
<nav class="navbar__menu">
  <img class="img-responsive" src=${menuIconURL} alt="menu" title="menu">
</nav>
`

header.appendChild(nav)

export default header
