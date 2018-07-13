import { Base } from './base.js'
import { DEALERS } from '../store.js'

class Card extends Base {
  constructor(props) {
    super('article', {className: 'card'})
    this.title = props.title
    this.phoneIcon = props.phoneIcon
    this.phone = props.phone
    this.subtitle = props.subtitle
    this.cta = props.cta
    this.hours = props.hours
    this.hoursText = props.hoursText
    this.certs = props.certs
    this.template = `
      <div class="card__body">
        <div class="card__body__title">
          <h2>${this.title}</h2>
        </div>
        <div class="card__body__phone">
           <img src=${this.phoneIcon} width="25px" style="padding-right: 0.5rem">
           <span>${this.phone}</span>
        </div>
        <div class="card__body__subtitle">${this.subtitle}</div>
        <div class="card__body__cta">
          <button class="btn--primary"><i class="ss-icon">mail</i>${this.cta}</button>
        </div>
        <div class="card__body__list">
            <ul class="list--unstyled">
              <li><b>${this.hoursText.title}</b></li>
              <li>${this.hoursText.weekdays} ${this.hours.mon}</li>
              <li>${this.hoursText.saturdays} ${this.hours.sat}</li>
              <li>${this.hoursText.sundays} ${this.sundayHours}</li>
            </ul>
        </div>
        <div class="card__footer">
          <div class="card__footer__items">
            <div class="card__footer__items__item">${this.getCert('Installation Pro')}</div>
            <div class="card__footer__items__item">${this.getCert('Residential Pro')}</div>
          </div>
          <div class="card__footer__items">
            <div class="card__footer__items__item">${this.getCert('Service Pro')}</div>
            <div class="card__footer__items__item">${this.getCert('Commercial Pro')}</div>
          </div>
        </div>
      </div>
    `
    this.element.innerHTML = this.template
    this.handler()
  }
  handler () {
    this.element.querySelector('.btn--primary').onclick = () => {
      document.getElementById('form-modal').style = 'display: block'
      document.body.classList.toggle('overFlow-hidden')
    }
  }
  get sundayHours() {
    return this.hoursText.sun ?
      this.hoursText.sun :
      this.hoursText.noSunday
  }
  makeCert(cert) {
    switch (cert) {
      case 'Installation Pro':
        return (`<i class="ss-icon cardIcon">star</i>${cert}`)
        break;
      case 'Commercial Pro':
        return (`<i class="ss-icon cardIcon">users</i>${cert}`)
        break;
      case 'Residential Pro':
        return (`<i class="ss-icon cardIcon">home</i>${cert}`)
        break;
      default:
        return (`<i class="ss-icon cardIcon">cog</i>${cert}`)
    }
  }
  getCert(name) {
    //does name exist in the certs array
    //if it does, find the item & return it
    return (this.certs.indexOf(name) >= 0 ) ? this.makeCert(name) : ''
  }

}

export default Card
