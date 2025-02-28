import { AppState } from "../AppState.js";
import { jumblesServices } from "../services/JumblesService.js";


export class JumbleController {

  constructor() {
    AppState.on('activeJumble', this.drawActiveJumble)
    AppState.on('jumbles', this.drawJumbleList)

    this.drawJumbleList()
  }

  selectJumble(jumbleId) {
    jumblesServices.setActiveJumble(jumbleId)

  }

  drawJumbleList() {
    const jumbles = AppState.jumbles
    let jumblesListContent = ''
    jumbles.forEach(jumble => jumblesListContent += jumble.listTemplate)
    const jumblesListElem = document.getElementById('jumbleList')
    jumblesListElem.innerHTML = jumblesListContent
  }


  drawActiveJumble() {
    const jumble = AppState.activeJumble
    // const activeJumbleContent = ''
    const activeJumbleElem = document.getElementById('activeJumbleArea')
    activeJumbleElem.innerHTML = jumble.activeTemplate    
    jumble.startTime ?? jumblesServices.startTime()
    console.log('start:', jumble.startTime)
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