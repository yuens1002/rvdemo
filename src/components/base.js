import { PROBUTTON, BREAKPOINTS, $commit } from '../store'

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
  static columns () {
    if (window.innerWidth >= BREAKPOINTS.med) {
      return 3
    } else {
      if (window.innerWidth >= BREAKPOINTS.sm) {
        return 2
      } else {
        return 1
      }
    }
  }
  static init(components, root, body) {
    let resizeTimer
    components.forEach(component => {
      root.append(component)
    });
    window.onresize = () => {
      // get new window width
      const newColumns = Base.columns()
      // replace find pro text if
      const btnEl = document.getElementById('proBtn')
      if (window.innerWidth > 768) {
        btnEl.innerText = PROBUTTON.tabletUp
      } else {
        btnEl.innerText = PROBUTTON.mobile
      }
      clearTimeout(resizeTimer)
      // deboucing during window resize
      resizeTimer = setTimeout(() => {
        /**************************************
        only rebuild deck if bkpt is different
        from when the deck was built
        ***************************************/
        if (body.columns !== newColumns) {
            // console.log('old columns: ' + oldColumns)
            // console.log('new columns: ' + newColumns)
            // set value of columns in body to build a new deck
            body.columns = newColumns
            const parent = document.querySelector('.main')
            const content = document.createElement('div')
            content.className = 'container'
            content.appendChild(body.rebuild())
            parent.replaceChild(content, parent.firstChild)
        }
      }, 300)
    }
  }
}


export {
  Base
}
