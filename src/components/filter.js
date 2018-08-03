import { Base } from './base.js'
import Checkbox from './checkbox.js'
import { FILTER } from '../store.js'
import '../wrist'



const template =
`<div class="filter__container container">
  <div class="filter__header">
    <div class="filter__header__title">${FILTER.result}</div>
    <div class="filter__header__body">
        <div class="filter__header__body__title">${FILTER.filter}</div>
        <div class="filter__header__body__dropdown"><div class="--arrow-down"></div></div>
    </div>
  </div>
  <div class="filter__body">
    <div class="filter__body__items">
      <div class="filter__title">
        <div class="filter__title__left">${FILTER.result}</div>
        <div class="filter__title__right">${FILTER.filter}</div>
      </div>
    </div>
  </div>
</div>`

class Filter extends Base {
  constructor(props) {
    super('section', {
      template,
      className: 'filter flex--column__notMain'
    })
    this.filterList = props.selected
    this.filters = props.items
    this.init()
    // this.proxy = this.handler()
  }
  init () {
    this.filters.forEach(item => {
      let checkbox = new Checkbox({
        checked: false,
        title: item
      })
      this.element.querySelector(
        '.filter__body__items'
      ).appendChild(checkbox.element)
    })
  }
  // handler (callback) {
  //   return new Proxy(FILTER.selected, {
  //     set (target, prop, val) {
  //       console.log('updated!')
  //       return Reflect.set(target, prop, val)
  //     }
  //   })
  //   // return filters
  // }
  // //
  // //   return new Proxy(FILTER.selected, {
  // //     set(target, proertyKey, value, receiver) {
  // //       callback(propertyKey, value)
  // //       return Reflect.set(target, propertyKey, value, receiver)
  // //     }
  // //   })
  // // }
  // // callback (key, value) {
  // //   console.log(`${key}=${value}`)
  // // }
}
const filter = new Filter(FILTER)

export default filter.element
