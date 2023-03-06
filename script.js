import { articles } from "./articles.js";
import { headerContent } from "./header.js";
import { footerContent } from "./footer.js";

const eventsBtn = document.getElementById("botao-veja-mais");
const eventsSection = document.getElementById("secao-eventos");
const artigosGrid2 = document.getElementById("artigos-grid-2");
const header = document.getElementById("header");
const footer = document.getElementById("footer");
const firstArticle = document.getElementById("first");
const secondArticle = document.getElementById("second");
const thirdArticle = document.getElementById("third");
const fourthArticle = document.getElementById("fourth");

setInnerHTML(header, headerContent);
setInnerHTML(footer, footerContent);

generateArticle(firstArticle, articles.summer);
generateArticle(secondArticle, articles.winter);
generateArticle(thirdArticle, articles.paralympics);
generateArticle(fourthArticle, articles.youth);

function generateArticle(articlePosition, articleContent) {
  const { src, alt, title, content } = articleContent;
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("artigo__conteudo");

  const titleEl = document.createElement("h3");
  titleEl.textContent = title;

  const contentEl = document.createElement("p");
  contentEl.textContent = content;

  contentDiv.appendChild(titleEl);
  contentDiv.appendChild(contentEl);
  if (articlePosition) {
    articlePosition.appendChild(img);
    articlePosition.appendChild(contentDiv);
  }
}

function displayContent() {
  toggleClass(artigosGrid2, "hide");
  changeBtnText(eventsSection, eventsBtn);
}

function setInnerHTML(el, content) {
  if (el) {
    return (el.innerHTML += content);
  }
}

function toggleClass(elem, className) {
  return elem.classList.toggle(className);
}

function changeBtnText(elem, btn) {
  return elem.querySelector(".hide")
    ? (btn.innerText = "Veja mais")
    : (btn.innerText = "Veja menos");
}

if (eventsBtn) {
  eventsBtn.addEventListener("click", displayContent);
}
export { generateArticle, setInnerHTML };
