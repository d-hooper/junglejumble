import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }

  get listTemplate() {
    return `
    <li class="px-3">
      <div class="d-flex align-items-center">
        <button onclick="app.jumbleController.selectJumble('${this.id}')" class="btn btn-warning">Start</button>
        <p class="ms-3 mb-0">${this.name}</p>
      </div>
      <hr>
    </li>
    `
  }
  get activeTemplate() {
    return `
    <div class="border border-outline-warning rounded-3 shadow">
       <div class="d-flex align-items-center justify-content-between">
           <h3>${this.name}</h3>
           <p class="mb-0">${this.endTime}</p>
        </div>
        <div>
          <p>${this.body}</p>
        </div>
    </div>
    `
  }
}