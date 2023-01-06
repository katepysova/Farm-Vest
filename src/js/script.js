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
