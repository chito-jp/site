const loadElement = async (selector, file) => {
  if(!document.querySelector(selector))return console.warn(`${selector} was not found.`);
  fetch(file)
  .then(response => {if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
  return response.text();
})
.then(html => {
  document.querySelector(selector).innerHTML = html;
});
};
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "common/css/defer.css";
document.head.appendChild(stylesheet);
loadElement("header", "header.html")
.then(() => {
  const hamburger = document.querySelector("header .hamburger");
  const hamburgerMenu = document.querySelector("header .menu");
  console.log(document.body.innerHTML);
  if (hamburger && hamburgerMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      hamburgerMenu.classList.toggle("open");
    });
  }else{
    console.warn("要素が見つかりません");
  }
});
const main = document.createElement("main");
document.body.appendChild(main);
main.innerHTML = ``;
const footer = document.createElement("footer");
document.body.appendChild(footer);
footer.innerHTML = ``;