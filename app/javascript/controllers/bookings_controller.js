import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="bookings"
export default class extends Controller {
  static targets = ["tables", 'form', 'capacity'];
  totalCapacity = 0;
  connect() {
    console.log('bookings connected')
  }

  showCapacity(event) {
    if(document.getElementById('tables-capacities')) {
      document.getElementById('tables-capacities').remove();
    }
    let html = document.createElement('div');
    html.id = 'tables-capacities';
    [...this.tablesTarget.children].forEach(function(child) {
      if(child.selected) {
        let c = document.createElement('div')
        c.append(`${child.innerHTML} Capacity = ${child.dataset['capacity']}`);
        html.appendChild(c);
      }
    })
    this.tablesTarget.parentElement.appendChild(html);
  }

  getCapacity() {
    let capacity = 0;
    [...this.tablesTarget.children].forEach(function(child) {
      if(child.selected) {
        capacity += parseInt(child.dataset['capacity'])
      }
    })
    return capacity;
  }

  submitForm(event) {
    console.log(this.getCapacity());
    if(this.getCapacity() < (parseInt(this.capacityTarget.value) || 0)) {
      event.preventDefault();
      alert('Capacity is greater than selected tables')
    }
  }
}
