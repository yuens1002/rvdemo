import { Base } from '../helper.js'
import { $commit } from '../store.js'

class TextArea extends Base {
  constructor(props) {
    super('div', {className:'form-control'})
    this.id = props.id
    this.title = props.title
    this.template = `
      <span class="form-field-optional">optional</span>
      <label
      class="form-control__label"
      for=${this.id}>${this.title}</label>
      <textarea
        class="form-control__field"
        id=${this.id}
        name=${this.id}
        rows="4"
      ></textarea>
    `
    this.element.innerHTML = this.template
    this.handler()
  }
  get textAreaElm () {
    return this.element.getElementsByTagName('textarea')[0]
  }
  handler () {
    this.textAreaElm.onchange = (e) => {
      $commit('setTextAreaVal', this.textAreaElm.value)
    }
  }
}

export default TextArea
