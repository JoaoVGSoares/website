const eventsBtn = document.getElementById("botao-veja-mais");
const eventsSection = document.getElementById("secao-eventos");
const artigosGrid2 = document.getElementById("artigos-grid-2");

function displayContent() {
  toggleClass(artigosGrid2, "hide");
  changeBtnText(eventsSection, eventsBtn);
}

function toggleClass(elem, className) {
  return elem.classList.toggle(className);
}

function changeBtnText(elem, btn) {
  return elem.querySelector(".hide")
    ? (btn.innerText = "Veja mais")
    : (btn.innerText = "Veja menos");
}

eventsBtn.addEventListener("click", () => displayContent());
