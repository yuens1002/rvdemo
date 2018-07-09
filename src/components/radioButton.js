import { Base } from '../helper.js'
import { $commit } from '../store.js'

class Radio extends Base {
  constructor(props) {
    super('div', {className:'form-control'})
    this.radios = props.radios
    this.title = props.title
    this.value = props.value
    this.template = `<span class="form-control__label">${props.title}</span>`
    this.element.innerHTML = this.innerHTML
  }
  get innerHTML () {
    let innerHTML = this.template
    this.radios.forEach(radio => {
      innerHTML += `<input
        class="form-control__radio"
        id=${radio.id}
        type="radio"
        name=${radio.name}
        ${radio.value ==='Yes' ? 'checked' : ''}
      >
      <label
      class="form-control__label--radio"
      for=${radio.id}>${radio.value}</label>
      `
    })
    return innerHTML
  }
}

export default Radio
