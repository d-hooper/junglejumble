import { AppState } from "../AppState.js";
import { jumblesServices } from "../services/JumblesService.js";


export class JumbleController {

  constructor() {
    AppState.on('activeJumble', this.drawActiveJumble)

    console.log('WE are here!');

    this.drawJumbleList()
  }


  drawJumbleList() {
    const jumbles = AppState.jumbles
    let jumblesListContent = ''
    jumbles.forEach(jumble => jumblesListContent += jumble.listTemplate)
    const jumblesListElem = document.getElementById('jumbleList')
    jumblesListElem.innerHTML = jumblesListContent
  }

  selectJumble(jumbleId) {
    jumblesServices.setActiveJumble(jumbleId)

  }

  drawActiveJumble() {
    const jumble = AppState.activeJumble
    const activeJumbleContent = ''
    const activeJumbleElem = document.getElementById('activeJumbleArea')
    activeJumbleElem.innerHTML = jumble.activeTemplate
  }
}