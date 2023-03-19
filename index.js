const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = false;

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "#000";
  } else {
    bodyEl.style.background = "#fff";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});
