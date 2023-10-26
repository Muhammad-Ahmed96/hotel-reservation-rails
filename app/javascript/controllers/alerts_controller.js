import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="alerts"
export default class extends Controller {
  static targets = ["message"]
  connect() {
    setTimeout(() => {
      this.messageTarget.remove();
    }, 2000);
  }
}
