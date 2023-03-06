import { generateArticle } from "./script.js";
import { articles } from "./articles.js";

window.addEventListener("DOMContentLoaded", function () {
  const article = document.getElementById("article");
  const currentPath = window.location.href;
  let articlePage;

  if (currentPath.includes("summer")) {
    articlePage = articles.summer;
  } else {
    articlePage = articles.winter;
  }
  generateArticle(article, articlePage);
});
