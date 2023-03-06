import { generateArticle } from "./script.js";
import { articles } from "./articles.js";

const article = document.getElementById("article");
const currentPath = window.location.pathname;

let articlePage;
if (currentPath === "/summer.html") {
  articlePage = articles.summer;
} else {
  articlePage = articles.winter;
}

window.addEventListener("DOMContentLoaded", function () {
  generateArticle(article, articlePage);
});
