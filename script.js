"use strict";
// Get the header element
const header = document.querySelector(".header");

// Get the initial offset position of the header
const sticky = header.offsetTop;

// Function to make header sticky on scroll
function makeHeaderSticky() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Add scroll event listener
window.addEventListener("scroll", makeHeaderSticky);

////////////////////////////////////////////////

const modal__1 = document.querySelector(".modal__1");
const modal__1_button = document.querySelector(".modal__1-button");
const modal__2 = document.querySelector(".modal__2");
const modal__2_button = document.querySelector(".modal__2-button");
const modal__3 = document.querySelector(".modal__3");
const modal__3_button = document.querySelector(".modal__3-button");
const overlay = document.querySelector(".overlay");
const close = document.querySelectorAll(".ri-close-large-line");
const menu__close__line = document.querySelector(".menu__close__line");

const show__button = document.querySelector(".ri-menu-line");
const class__to__show = document.querySelector(".class__to__show");

const show__menu = document.querySelector(".show__menu");

show__button.addEventListener("click", function () {
  show__menu.classList.add("class__to__show");
});

menu__close__line.addEventListener("click", function () {
  show__menu.classList.remove("class__to__show");
});

modal__1_button.addEventListener("click", function () {
  modal__1.classList.add("show_modals");
  overlay.classList.add("show_overlay");
});

overlay.addEventListener("click", function () {
  modal__1.classList.remove("show_modals");
  modal__2.classList.remove("show_modals");
  modal__3.classList.remove("show_modals");
  overlay.classList.remove("show_overlay");
});

close.forEach((icon) => {
  icon.addEventListener("click", function () {
    modal__1.classList.remove("show_modals");
    modal__2.classList.remove("show_modals");
    modal__3.classList.remove("show_modals");
    overlay.classList.remove("show_overlay");
  });
});

modal__2_button.addEventListener("click", function () {
  modal__2.classList.add("show_modals");
  overlay.classList.add("show_overlay");
});

modal__3_button.addEventListener("click", function () {
  modal__3.classList.add("show_modals");
  overlay.classList.add("show_overlay");
});
