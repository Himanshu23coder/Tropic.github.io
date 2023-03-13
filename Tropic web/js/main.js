// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};
// Nav Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapes = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {
  e.addEventListener("click", function () {
    navCollapes.classList.remove("show");
  });
});
