import { Base } from './base'
import filterIcon from '../img/tool-tip-icon-filtering.png'
import { OPTIONS, $commit } from '../store'


function insertIcon(title) {

}

class Checkbox extends Base {
  constructor(props) {
    super('label', {className: 'checkbox', forAttribute: props.title})
    this.title = props.title
    this.checked = props.checked
    this.template = `${this.title} ${this.insertIcon(this.title)}
      <input id=${this.title} type="checkbox" name="filter" value=${this.title} ${this.checked ? 'checked' : ''}>
      <span class="checkbox__checkmark"></div>`
    this.element.innerHTML = this.template
    this.handler()
  }
  insertIcon () {
    return this.title === 'Commercial' ?
        `<img src=${filterIcon} title="tool-tip" alt="tool-tip" width="19" style="padding-left: 0.5rem; vertical-align:middle">`
    : ''
  }
  handler () {
    this.element.querySelector("input").onchange = (e) => {
      e.target.checked ?
        $commit('setSelectedOption', {value: e.target.value, selected: true})
        : $commit('setSelectedOption', {value: e.target.value, selected: false})
    }
  }
}

export default Checkbox
