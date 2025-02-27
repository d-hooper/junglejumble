import { JumbleController } from "./controllers/JumbleController.js"

class App {

  jumbleController = new JumbleController()

}

window['app'] = new App()


