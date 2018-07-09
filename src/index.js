import './scss/style.scss'
import header from './components/header'
import hero from './components/hero'
import modal from './components/modal'

const app = document.getElementById('app')
const components = [modal, header, hero]

components.forEach(component => {
  app.append(component)
})
