import './scss/style.scss'
import { Base } from './components/base'
import header from './components/header'
import hero from './components/hero'
import modal from './components/modal'
import filter from './components/options'
import { main, body } from './components/body'
import footer from './components/footer'

const app = document.getElementById('app')
const components = [modal, header, hero, filter, main, footer]

// load components and listener
Base.init(components, app, body)
