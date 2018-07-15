import { Base } from './base.js'
import Card from './card.js'
import { DEALERS, PROVIDER } from '../store.js'
import phoneURL from '../img/phone-icon-desktop.png'


const template = `
<div class="main flex flex--lg-3 container">
  <div class="flex--lg-3__cell flex--lg-3__cell--first">
    <p>adfasdf</p>
  </div>
  <div class="flex--lg-3__cell">
    <p>adfasdf</p>
  </div>

</div>
`

const body = new Base('main', {template, className: 'flex--column__main'})
// const bodyElm = body.element
// const bodyElm__flexGrid = bodyElm.querySelector('.flexGrid')
// let flexGridHTML = ''
// DEALERS.dealers.forEach((dealer)=> {
//   let props = {
//     title: dealer.data.name,
//     phoneIcon: phoneURL,
//     phone: dealer.data.phone1,
//     subtitle: PROVIDER.subtitle,
//     cta: PROVIDER.cta,
//     hours: dealer.data.weekHours,
//     hoursText: PROVIDER.hours,
//     certs: dealer.data.certifications
//   }
//   let card = new Card(props)
//   const cardShell = document.createElement('div')
//   cardShell.className = 'flexGrid__cell'
//   cardShell.appendChild(card.element)
//   bodyElm__flexGrid.appendChild(cardShell)
// })
export default body.element
