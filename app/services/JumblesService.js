import { AppState } from "../AppState.js"

class JumblesService {
  verifyTextEntry() {
    throw new Error("Method not implemented.")
  }

  setActiveJumble(jumbleId) {
    const jumbles = AppState.jumbles
    const foundJumble = jumbles.find(jumble => jumble.id == jumbleId)
    AppState.activeJumble = foundJumble
  }

}

export const jumblesServices = new JumblesService()