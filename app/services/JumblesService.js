import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"

class JumblesService {
  verifyTextEntry(textEntryContent) {
    const jumble = AppState.activeJumble
    if (textEntryContent == jumble.body) {
      this.endTime()
      Pop.toast('Success!')
      this.resetTimeProperties()
      return
    }
    Pop.toast('Try again')
  }

  resetTimeProperties() {
    const jumble = AppState.activeJumble
    jumble.startTime = null
    jumble.endTime = null
    console.log(jumble.fastestTime);
    if (jumble.fastestTime == null || jumble.latestTime < jumble.fastestTime) {
      jumble.fastestTime = jumble.latestTime
    }
    AppState.emit('activeJumble')
    AppState.emit('jumbles')
  }

  setActiveJumble(jumbleId) {
    const jumbles = AppState.jumbles
    const foundJumble = jumbles.find(jumble => jumble.id == jumbleId)
    AppState.activeJumble = foundJumble
  }

  startTime() {
    const jumble = AppState.activeJumble
    jumble.startTime = new Date().getTime()
  }

  endTime() {
    const jumble = AppState.activeJumble
    jumble.endTime = new Date().getTime()
    const timeBetween = (jumble.endTime / 1000) - (jumble.startTime / 1000)
    jumble.latestTime = timeBetween
  }


}

export const jumblesServices = new JumblesService()