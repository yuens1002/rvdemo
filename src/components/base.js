import { PROBUTTON } from '../store'

class Base {
  constructor(element, {template, className, id} = {}) {
    // this.template = template
    this.className = className
    this.id = id
    this.element = this.createElm(element)
    this.element.innerHTML = template
    this.setId()
    this.setClassName()
  }
  setId() {
    if (this.id) this.element.setAttribute('id', this.id)
  }
  setClassName() {
    if (this.className) {
      this.element.className = this.className
    }
  }
  createElm(elm) {
    return document.createElement(elm)
  }
  static init(components, app) {
    components.forEach(component => {
      app.append(component)
    })
    window.onresize = ()=> {
      const btnEl = document.getElementById('proBtn')
      if (window.innerWidth > 768) {
        btnEl.innerText = PROBUTTON.tabletUp
      } else {
        btnEl.innerText = PROBUTTON.mobile
      }
    }
  }
}

export {
  Base
}
