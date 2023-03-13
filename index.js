const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");

let errorTime;
let resultTime;

function updateResult() {
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerText = `${inputEl.value} is invalid input`;
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = " ";
      inputEl.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (+inputEl.value / 2.2).toFixed(1);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      inputEl.value = "";
    }, 1000);
  }
}

inputEl.addEventListener("input", updateResult);
