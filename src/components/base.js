import { PROBUTTON } from '../store'

class Base {
  constructor(element, {template, className, id} = {}) {
    this.template = template
    this.className = className
    this.id = id
    this.element = this.createElm(element)
    this.element.innerHTML = template || ''
    this.setIdAttribute()
    this.setClassName()
  }
  setIdAttribute () {
    if (this.id) this.element.setAttribute('id', this.id)
  }
  setClassName () {
    if (this.className) {
      this.element.className = this.className
    }
  }
  createElm (elm) {
    return document.createElement(elm)
  }
  toggleOverFlowClass () {
    document.body.classList.toggle('--overFlow-hidden')
  }
  static init(components, root) {
    components.forEach(component => {
      root.append(component)
    })
    // let groupElm = document.createDocumentFragment()
    // function appendElm (targetElm, element) {
    //   console.log(targetElm)
    //   if (Array.isArray(element)) {
    //     element.forEach(elm => {
    //       groupElm.append(elm)
    //       console.log(groupElm)
    //     })
    //     targetElm.append(groupElm)
    //     // console.log(targetElm )
    //   } else {
    //     targetElm.append(element)
    //   }
    // }
    // const header = new Base('header', {className: 'flex--column__header'})
    // const body = new Base('main', {className: 'flex--column__main'})
    // const footer = new Base('footer', {className: 'flex--column__footer'})
    // const orderedElms = [header, body, footer]
    // components.header.forEach((headerElm)=> {
    //   header.element.append(headerElm)
    // })
    // //append each of the components to consts
    // appendElm(header.element, components.header)
    // console.log(header)
    // body.element.append(components.main)
    // footer.element.append(components.footer)
    // orderedElms.forEach(elm => {
    //   //append each ordered elments to root (doc.body)
    //   appendElm(root, elm.element)
    // })

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
