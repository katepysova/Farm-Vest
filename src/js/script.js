import { checkEmail } from "./formValidation.js";
import { parallaxWindowScroll, parallaxMouseMove } from "./parallax.js";
import { headerScroll, headerCollapse } from "./header.js";
import { themeMode } from "./constants.js";
import LocalStorage from "./localStorage.js";
import themeSwitch from "./themeSwitcher.js";

const themeSwitchBtn = document.querySelector(".theme-switcher__input");

themeSwitchBtn.addEventListener("click", () => {
  const isLightMode = themeSwitch();
  const darkImagesFolderName = "dark";
  const lightImagesFolderName = "light";
  const colorChangedImages = document.querySelectorAll(".img-color-change");
  colorChangedImages.forEach((logo) => {
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

const currentTheme = LocalStorage.getItem(themeMode);
if (currentTheme === "light-mode") {
  themeSwitchBtn.click();
}

const headerCollapseBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");
headerCollapseBtn.addEventListener("click", () => {
  header.classList.toggle("collapsed");
});

window.addEventListener("resize", () => {
  headerCollapse(header);
});

window.addEventListener("scroll", () => {
  parallaxWindowScroll(".parallax-item");
  headerScroll(header);
});

window.addEventListener("mousemove", (event) =>
  parallaxMouseMove(event, ".parallax-item")
);

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

const spoilers = document.querySelectorAll(".spoiler");

spoilers.forEach((spoiler) => {
  const spoilerBtn = spoiler.querySelector(".spoiler__btn");
  spoilerBtn.addEventListener("click", () => {
    spoiler.classList.toggle("opened");
  });
});

const year = document.querySelector(".copyright__year");
const date = new Date();
year.textContent = date.getFullYear();

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (header.classList.contains("collapsed")) {
      header.classList.remove("collapsed");
    }
  });
});
