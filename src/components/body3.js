import { Base } from './base.js'
import Card from './card.js'
import { DEALERS, PROVIDER, BREAKPOINTS } from '../store.js'
import phoneURL from '../img/phone-icon-desktop.png'

class Body extends Base {
  constructor() {
    super('main', {template: '<div class="container"></div>', className:'main flex--column__main'})
    this.columns = Base.columns()
    this.container = this.element.querySelector('.container')
    this.init(this.createDeck())
  }
  init(deck) {
    this.container.appendChild(this.mountDeck(deck))
  }
  rebuild () {
    return this.mountDeck(this.createDeck())
  }
  // handler () {
  //   window.onresize = () => {
  //     this.cardInRow !== this.columns &&
  //   }
  // }
  templateCell (index) {
    return index === 0 ?
    `<div class="flex--lg-3__cell flex--lg-3__cell--first"></div>` :
    `<div class="flex--lg-3__cell"></div>`
  }
  get rows () {

    if (this.columns === 1) {
      this.columns = DEALERS.dealers.length
      return 1
    } else {
      return Math.ceil(DEALERS.dealers.length/this.columns)
    }
  }
  createDeck () {
    const deck = new Array()
    let cardIndex = 0

    const cards = DEALERS.dealers.map(dealer => {
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
      return card.element
    })
    for (let r = 0; r < this.rows; r++) {
      deck[r] = new Array()
      for (let c = 0; c < this.columns; c++) {
        deck[r][c] = cards[cardIndex] || ''
        cardIndex++
      }
    }
    console.log('number of rows: ' + this.rows)
    return deck
  }
  mountDeck(cards) {
    const deck = document.createDocumentFragment()
    cards.forEach(set => {
      const row = new Base('div', {className: 'flex flex--lg-3'})
      set.forEach((card, index) => {
        let cell = null
        if (index === 0) {
          cell = new Base('div', {className: 'flex--lg-3__cell flex--lg-3__cell--first'})
        } else {
          cell = new Base('div', {className: 'flex--lg-3__cell'})
        }
        if (card) {
          cell.element.appendChild(card)
          row.element.appendChild(cell.element)
        }
      })
      deck.appendChild(row.element)
    })
    return deck
  }
}
const body = new Body()
const main = body.element
export {
  body,
  main
}
