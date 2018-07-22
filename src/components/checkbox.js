import { Base } from './base'
import filterIcon from '../img/tool-tip-icon-filtering.png'


function insertIcon(title) {
  if (title === 'Commercial') {
    return (
      `<img src=${filterIcon} title="tool-tip" alt="tool-tip" width="19" style="padding-left: 0.5rem; vertical-align:middle">`
    )
  } else {
    return ''
  }
}

class Checkbox extends Base {
  constructor(props) {
    super('label', {className: 'checkbox'})
    this.title = props.title
    this.checked = props.checked
    this.template = `${this.title} ${insertIcon(this.title)}
      <input type="checkbox" ${this.checked ? 'checked' : ''}>
      <span class="checkbox__checkmark"></div>`
    this.element.innerHTML = this.template
  }
}

export default Checkbox
