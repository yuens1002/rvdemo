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
}

export {
  Base
}
