const themeSwitchBtn = document.querySelector(".theme-switcher");

themeSwitchBtn.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
