import { Base } from '../helper.js'

class CloseButton extends Base {
  constructor(element, {className}) {
    super(element, {className})
    this.element.innerHTML = '<i class="ss-icon">delete</i>'
    this.element.title = "close"
    this.handler()
    this.windowHandler()
  }
  get modalFromDom () {
    return document.getElementById('form-modal')
  }
  handler () {
    this.element.addEventListener('click', (target)=> {
      target.preventDefault()
      this.modalFromDom.style.display = "none"
    })
  }
  windowHandler () {
    window.onclick = (e) => {
      if (e.target === this.modalFromDom) {
        this.modalFromDom.style.display = "none"
      }
    }
  }
}


const closeModal = new CloseButton ('button', {className: 'btn--close'})
const closeModalElm = closeModal.element
export default closeModalElm
