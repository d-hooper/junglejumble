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

  checkText() {
    event.preventDefault()
    const typingForm = event.target

    console.log('form', typingForm)
    // @ts-ignore
    const textEntryContent = typingForm.textEntry.value
    console.log('form content', textEntryContent)
    
    jumblesServices.verifyTextEntry(textEntryContent)
    // @ts-ignore
    typingForm.reset()
  }
}