const celsiusEl = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}
