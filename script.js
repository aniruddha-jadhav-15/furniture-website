const menu = document.getElementById("menu");
const list = document.getElementById("list");

menu.addEventListener("click", () => {
  list.classList.toggle("nav-list-active");
});
