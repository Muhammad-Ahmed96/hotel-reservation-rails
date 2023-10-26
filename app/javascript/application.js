// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"


function showCapacity() {
  select = document.getElementById('reservation_number_of_tables')
  console.log(select.getElementsByTagName('option').length);
}