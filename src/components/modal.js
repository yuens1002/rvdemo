import { FORM, $commit } from '../store.js'
import { Base } from './base.js'
import closeModalBtn from './closeModal.js'
import InputField from './inputField.js'
import TextArea from './textArea.js'
import Radio from './radioButton.js'

const template = `
<div class="modal__content">
  <div class="modal__header">
    <span class="med-hidden">${FORM.type}</span>
    <h1>${FORM.title}</h1>
  </div>
  <div class="modal__body">
    <p style="padding-bottom:20px">${FORM.subtitle}</p>
  </div>
  <div class="modal__footer">
    <hr class="--style">
    <button class="btn--primary btn--send"><i class="ss-icon">mail</i> Send</button>
  </div>
</div>
`

const modal = new Base('div', {template, className: 'modal', id: 'form-modal'})

//prepend close btn
const modalHeader = modal.element.querySelector('.modal__header')
//suspect firstChild incompatibiilty with safari
modalHeader.insertBefore(closeModalBtn, modalHeader.firstChild)

//construct input fields
let input
FORM.inputs.forEach((field)=> {
  const modalbody = modal.element.querySelector('.modal__body')
  let props = {
    id: field.id,
    notchecked: FORM.icons.notchecked,
    checked: FORM.icons.checked,
    title: field.title,
    isRequired: field.required
  }
  input = new InputField(props)
  modalbody.appendChild(input.element)
})

//construct textarea
const textarea = new TextArea({
  id: FORM.textarea[0].id,
  title: FORM.textarea[0].title,
})
modal.element.querySelector('.modal__body').appendChild(textarea.element)

//construct radio buttons
// mockup shows optional yet defaults to yes...
const radio = new Radio({
  radios: FORM.radio.options,
  title: FORM.radio.title,
})
modal.element.querySelector('.modal__body').appendChild(radio.element)




export default modal.element
