import { AppState } from "../AppState.js";
import { jumblesServices } from "../services/JumblesService.js";


export class JumbleController {

  constructor() {
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
  
}