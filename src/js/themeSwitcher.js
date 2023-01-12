import LocalStorage from "./localStorage.js";
import { themeMode } from "./constants.js";

const themeSwitch = () => {
  document.body.classList.toggle("light-mode");
  const isLightMode = document.body.classList.contains("light-mode");

  if (isLightMode) {
    LocalStorage.setItem(themeMode, "light-mode");
  } else {
    LocalStorage.setItem(themeMode, "dark-mode");
  }

  return isLightMode;
};

export default themeSwitch;
