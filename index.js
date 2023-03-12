const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI(event) {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = Math.floor(weightValue / (heightValue * heightValue));
  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "over weight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
