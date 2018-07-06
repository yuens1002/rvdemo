import { groupBy } from "lodash-es"
import people from "./people"

const managerGroups = groupBy(people, "name")

const name = document.createElement("div")
name.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`

export default name
