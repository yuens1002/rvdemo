import { Base } from './base.js'
import Checkbox from './checkbox.js'
import { OPTIONS } from '../store.js'



const template =
`<div class="options__container container">
  <div class="options__header">
    <div class="options__header__title">${OPTIONS.result}</div>
    <div class="options__header__body">
        <div class="options__header__body__title">${OPTIONS.filter}</div>
        <div class="options__header__body__dropdown"><div class="--arrow-down"></div></div>
    </div>
  </div>
  <div class="options__body">
    <div class="options__body__items">
      <div class="options__title">
        <div class="options__title__left">${OPTIONS.result}</div>
        <div class="options__title__right">${OPTIONS.filter}</div>
      </div>
    </div>
  </div>
</div>`

const filter = new Base('section', {template, className: 'options flex--column__notMain'})
OPTIONS.items.forEach(item => {
  let checkbox = new Checkbox({
    checked: item !== 'Commercial' ? true : false,
    title: item
  })
  filter.element.querySelector('.options__body__items').appendChild(checkbox.element)
})

export default filter.element
