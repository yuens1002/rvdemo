import { Base } from './base.js'
import Card from './card.js'
import { DEALERS, PROVIDER } from '../store.js'
import phoneURL from '../img/phone-icon-desktop.png'


const template = `
  <div class="container">
    <div class="flexGrid"></div>
  </div>
`

const body = new Base('main', {template, className: 'main'})
const bodyElm = body.element
const bodyElm__flexGrid = bodyElm.querySelector('.flexGrid')
let flexGridHTML = ''
DEALERS.dealers.forEach((dealer)=> {
  let props = {
    title: dealer.data.name,
    phoneIcon: phoneURL,
    phone: dealer.data.phone1,
    subtitle: PROVIDER.subtitle,
    cta: PROVIDER.cta,
    hours: dealer.data.weekHours,
    hoursText: PROVIDER.hours,
    certs: dealer.data.certifications
  }
  let card = new Card(props)
  const cardShell = document.createElement('div')
  cardShell.className = 'flexGrid__cell'
  cardShell.appendChild(card.element)
  bodyElm__flexGrid.appendChild(cardShell)
})

export default bodyElm
