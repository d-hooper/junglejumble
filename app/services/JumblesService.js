import { AppState } from "../AppState.js"

class JumblesService {
  verifyTextEntry(textEntryContent) {
    const jumble = AppState.activeJumble
    if (textEntryContent == jumble.body) {
      this.endTime()
      window.alert('You win!')
      return
    }
  }

  setActiveJumble(jumbleId) {
    const jumbles = AppState.jumbles
    const foundJumble = jumbles.find(jumble => jumble.id == jumbleId)
    AppState.activeJumble = foundJumble
  }

  startTime() {
    const jumble = AppState.activeJumble
    jumble.startTime = new Date().getTime()
    
    console.log('start', jumble.startTime);
  }

  endTime() {
    const jumble = AppState.activeJumble
    jumble.endTime = new Date().getTime()
    console.log('end', jumble.endTime);
    const timeBetween = (jumble.endTime / 1000) - (jumble.startTime / 1000)
    console.log('time between:', timeBetween);
  }

}

export const jumblesServices = new JumblesService()