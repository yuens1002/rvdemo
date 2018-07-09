import { Base } from '../helper.js'
import { $commit } from '../store.js'

class InputField extends Base {
  constructor(props) {
    super('div', {className:'form-control'})
    this.id = props.id
    this.notchecked = props.notchecked
    this.checked = props.checked
    this.title = props.title
    this.isRequired = props.isRequired
    this.template = `
      <img class="form-field-indicator" src=${this.notchecked}>
      <label
      class="form-control__label"
      for=${this.id}>${this.title}</label>
      <input
        class="form-control__field"
        id=${this.id}
        type="text"
        name=${this.id}
        required
      >
    `
    this.element.innerHTML = this.template
    this.handler()
  }
  get inputElm () {
    return this.element.getElementsByTagName('input')[0]
  }
  get icon () {
    return this.element.getElementsByTagName('img')[0]
  }
  handler () {
    this.inputElm.onchange = (e) => {
      $commit('setInputVal', {id: e.target.id, value: e.target.value})
      if (e.target.value) {
        this.icon.setAttribute('src', this.checked)
      } else {
        this.icon.setAttribute('src', this.notchecked)
      }
    }
  }
}

export default InputField
