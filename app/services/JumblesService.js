import { AppState } from "../AppState.js"

class JumblesService {
  verifyTextEntry(textEntryContent) {
    const jumble = AppState.activeJumble
    if (textEntryContent == jumble.body) {
      window.alert('You win!')
      return
    }
    window.alert('You lose...')
  }

  setActiveJumble(jumbleId) {
    const jumbles = AppState.jumbles
    const foundJumble = jumbles.find(jumble => jumble.id == jumbleId)
    AppState.activeJumble = foundJumble
  }

}

export const jumblesServices = new JumblesService()