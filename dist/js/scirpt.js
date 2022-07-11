// preload
var preload = document.querySelector(".preload");
var main = document.querySelector("main");
window.addEventListener("load", () => {
  preload.style.display = "none";
  main.style.display = "block";
});

let checkbox = document.querySelector("#toggle");
let checkbox2 = document.querySelector("#toggle2");
let html = document.querySelector("html");

checkbox.addEventListener("click", () => {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

checkbox2.addEventListener("click", () => {
  checkbox2.checked
    ? html.classList.add("dark")
    : html.classList.remove("dark");
});

let header = document.querySelector("header");
const animasi = document.querySelector("#animasi");
window.addEventListener("scroll", () => {
  let pos = window.scrollY > 0;
  header.classList.toggle("nav-fixed", pos);
  animasi.classList.toggle("fixed", pos);
});

// Hamburger
const menu = document.querySelector(".menu");
const navMobile = document.querySelector(".navMobile");
menu.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
  navMobile.classList.toggle("show");
});
