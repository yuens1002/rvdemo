import { groupBy } from "lodash-es"
import people from "./people"
import name from "./lodashTest"
import './scss/style.scss'
import header from './components/header'
import hero from './components/hero'

const app = document.getElementById('app')
// app.style="position:relative"
app.appendChild(header)
app.appendChild(hero)
