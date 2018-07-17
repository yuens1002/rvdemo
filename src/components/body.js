import { Base } from './base.js'
import Card from './card.js'
import { DEALERS, PROVIDER, BREAKPOINTS } from '../store.js'
import phoneURL from '../img/phone-icon-desktop.png'

class Body extends Base {
  constructor() {
    super('main', {template: '<div class="container"></div>', className:'main flex--column__main'})
    // this.columns = Base.columns()
    this.container = this.element.querySelector('.container')
    this.init(this.createDeck())
  }
  init(deck) {
    this.container.appendChild(deck)
  }
  createDeck () {
    const row = new Base('div', {className: 'flex flex--lg-3'})
    DEALERS.dealers.forEach(dealer => {
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
      const card = new Card(props)
      const cell = new Base('div', {className: 'flex--lg-3__cell'})
      cell.element.appendChild(card.element)
      row.element.appendChild(cell.element)
    })
    return row.element
  }
}
const body = new Body()
export default body.element
