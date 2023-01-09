import { checkEmail } from "./formValidation.js";

const themeSwitchBtn = document.querySelector(".theme-switcher");

themeSwitchBtn.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

const headerCollapseBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");
headerCollapseBtn.addEventListener("click", () => {
  header.classList.toggle("collapsed");
});

window.addEventListener("resize", () => {
  if (header.classList.contains("collapsed")) {
    header.classList.toggle("collapsed");
  }
});

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const forms = document.querySelectorAll(".form");
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = form.querySelector(".form__input--email");
    const isEmailValid = checkEmail(email);
    const isFormValid = isEmailValid;

    if (isFormValid) {
      /* submit to the server */
    }
  });
});

let currentX = "";
let currentY = "";

document.addEventListener("mousemove", (event) => {
  const movementConstant = 1.1;
  const parallaxIcons = document.querySelectorAll(".parallax-icon");

  if (currentX === "") {
    currentX = event.pageX;
  }

  if (currentY === "") {
    currentY = event.pageY;
  }

  const diffX = currentX - event.pageX;
  const diffY = currentY - event.pageY;

  currentX = event.pageX;
  currentY = event.pageY;

  parallaxIcons.forEach((icon) => {
    const moveX = diffX * movementConstant;
    const moveY = diffY * movementConstant;

    icon.setAttribute("style", `transform: translate(${moveX}px, ${moveY}px);`);
  });
});
