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
