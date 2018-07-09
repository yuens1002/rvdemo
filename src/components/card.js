import { Base } from './base.js'
import { DEALERS } from '../store.js'

const template = `
  <div class="options__container container">
    <div class="options__header med-hidden">
      <div class="options-results">${OPTIONS.result}</div>
      <div class="options-filter"></div>
    </div>
    <div class="options__body">
      <div class="options__list">
          <div class="options__list__item">${OPTIONS.items[0]}</div>
          <div class="options__list__item">${OPTIONS.items[1]}</div>
          <div class="options__list__item">${OPTIONS.items[2]}</div>
          <div class="options__list__item">${OPTIONS.items[3]}</div>
      </div>
    </div>
  </div>
`

const options = new Base('section', {template, className: 'options'})
const filter = options.element
export default filter
