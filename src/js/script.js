import { checkEmail } from "./formValidation.js";
import { parallaxWindowScroll, parallaxMouseMove } from "./parallax.js";
import LocalStorage from "./localStorage.js";

const themeSwitchBtn = document.querySelector(".theme-switcher__input");

const themeKey = "theme";

themeSwitchBtn.addEventListener("click", () => {
  const partnerLogos = document.querySelectorAll(".partners__logo");
  const lightImagesFolderName = "light";
  const darkImagesFolderName = "dark";

  document.body.classList.toggle("light-mode");

  const isLightMode = document.body.classList.contains("light-mode");

  if (isLightMode) {
    LocalStorage.setItem(themeKey, "light-mode");
  } else {
    LocalStorage.setItem(themeKey, "dark-mode");
  }

  partnerLogos.forEach((logo) => {
    if (isLightMode) {
      logo.setAttribute(
        "src",
        logo
          .getAttribute("src")
          .replace(darkImagesFolderName, lightImagesFolderName)
      );
    } else {
      logo.setAttribute(
        "src",
        logo
          .getAttribute("src")
          .replace(lightImagesFolderName, darkImagesFolderName)
      );
    }
  });
});

const currentTheme = LocalStorage.getItem(themeKey);
if (currentTheme === "light-mode") {
  themeSwitchBtn.click();
}

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

const headerScroll = () => {
  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", () => {
  parallaxWindowScroll();
  headerScroll();
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

window.addEventListener("mousemove", parallaxMouseMove);

const spoilers = document.querySelectorAll(".spoiler");

spoilers.forEach((spoiler) => {
  const spoilerBtn = spoiler.querySelector(".spoiler__btn");
  spoilerBtn.addEventListener("click", () => {
    spoiler.classList.toggle("opened");
  });
});
