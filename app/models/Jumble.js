import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null 
    this.latestTime = null
    this.startTime = null
    this.endTime = null
  }

  get formattedLatestTime() {
    const formattedTime = this.latestTime ? this.latestTime.toFixed(2) : 0
    return formattedTime.toString()
  }

  get formattedFastestTime() {
    const formattedTime = this.fastestTime ? this.fastestTime.toFixed(2) : 0
    return formattedTime
  }

  get listTemplate() {
    return `
    <li class="px-3">
    <div class="d-flex justify-content-between align-items-center">
    <div class="d-flex align-items-center">
      <button onclick="app.jumbleController.selectJumble('${this.id}')" class="btn btn-outline-success fw-bold">Start</button>
      <p class="ms-3 mb-0">${this.name}</p>
      </div>
      <div class="d-flex gap-1 fw-bold">
      <span>Fastest Time:</span>
      <p class="text-end mb-0">${this.formattedFastestTime} s</p>
    </div>
    </div>  
      <hr>
    </li>
    `
  }

  get activeTemplate() {
    return `
    <div class="bg-light bg-opacity-75 border border-outline-warning rounded-3 shadow px-4 py-2">
      <div class="d-flex align-items-center justify-content-between">
        <h3>${this.name}</h3>
        <p class="mb-0">${this.formattedLatestTime} seconds</p>
      </div>
      <div>
        <p>${this.body}</p>
      </div>
    </div>
    <div class="bg-light bg-opacity-75 p-3 mt-3 border border-outline-success rounded-3 shadow">
      <form onsubmit="app.jumbleController.checkText()">
        <label for="typingArea" class="fs-5 mb-1">
          Start Typing
        </label>
        <textarea class="w-100" id="typingArea" name="textEntry" required></textarea>
      <div class="text-end mt-2">
        <button class="btn btn-success" type="submit">Submit</button>
      </div>
      </form>
    </div>
    `
  }

}