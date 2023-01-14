/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isDev\": () => (/* binding */ isDev),\n/* harmony export */   \"themeMode\": () => (/* binding */ themeMode)\n/* harmony export */ });\nconst isDev = \"development\" === \"development\";\nconst themeMode = \"theme-mode\";\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/constants.js?");

/***/ }),

/***/ "./src/js/formValidation.js":
/*!**********************************!*\
  !*** ./src/js/formValidation.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkEmail\": () => (/* binding */ checkEmail),\n/* harmony export */   \"hideError\": () => (/* binding */ hideError),\n/* harmony export */   \"isBetween\": () => (/* binding */ isBetween),\n/* harmony export */   \"showError\": () => (/* binding */ showError)\n/* harmony export */ });\nconst isBetween = (value, min, max) =>\n  !(value.length < min || value.length > max);\n\nconst showError = (input, message) => {\n  const formItem = input.parentElement;\n  formItem.classList.add(\"error\");\n  const error = formItem.querySelector(\".form__field-error\");\n  error.textContent = message;\n};\n\nconst hideError = (input) => {\n  const formItem = input.parentElement;\n  formItem.classList.remove(\"error\");\n  const error = formItem.querySelector(\".form__field-error\");\n  error.textContent = \"\";\n};\n\nconst checkEmail = (email, isRequired = true) => {\n  const isEmailValid = (value) => {\n    const re =\n      /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(value);\n  };\n\n  let isValid = false;\n\n  const emailValue = email.value.trim() || \"\";\n\n  if (isRequired && emailValue.length === 0) {\n    showError(email, \"Email is a required field.\");\n  } else if (!isEmailValid(emailValue)) {\n    showError(email, \"Email is not valid.\");\n  } else {\n    isValid = true;\n    hideError(email);\n  }\n\n  return isValid;\n};\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/formValidation.js?");

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"headerCollapse\": () => (/* binding */ headerCollapse),\n/* harmony export */   \"headerScroll\": () => (/* binding */ headerScroll)\n/* harmony export */ });\nconst headerScroll = (headerElem) => {\n  if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {\n    headerElem.classList.add(\"scrolled\");\n  } else {\n    headerElem.classList.remove(\"scrolled\");\n  }\n};\n\nconst headerCollapse = (headerElem) => {\n  if (headerElem.classList.contains(\"collapsed\")) {\n    headerElem.classList.toggle(\"collapsed\");\n  }\n};\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/header.js?");

/***/ }),

/***/ "./src/js/localStorage.js":
/*!********************************!*\
  !*** ./src/js/localStorage.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\n/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ \"./src/js/logger.js\");\n\n\nclass LocalStorage {\n  static setItem(key, item) {\n    try {\n      const stringifiedItem = JSON.stringify(item);\n      localStorage.setItem(key, stringifiedItem);\n      _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(`Added {${key}:\"${item}\"} to localStorage.`);\n    } catch (error) {\n      _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error(error);\n    }\n  }\n\n  static getItem(key) {\n    try {\n      const retrievedItem = localStorage.getItem(key);\n      const item = JSON.parse(retrievedItem);\n      return item;\n    } catch (error) {\n      _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error(error);\n      return null;\n    }\n  }\n\n  static removeItem(key) {\n    try {\n      localStorage.removeItem(key);\n      _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(`Removed item with key = ${key} from localStorage.`);\n    } catch (error) {\n      _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error(error);\n    }\n  }\n\n  static clear() {\n    localStorage.clear();\n    _logger_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].log(\"Local storage was cleared.\");\n  }\n}\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/localStorage.js?");

/***/ }),

/***/ "./src/js/logger.js":
/*!**************************!*\
  !*** ./src/js/logger.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logger)\n/* harmony export */ });\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n\n\nclass Logger {\n  static log(message) {\n    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__.isDev) {\n      // eslint-disable-next-line no-console\n      console.log(message);\n    }\n  }\n\n  static error(message) {\n    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__.isDev) {\n      // eslint-disable-next-line no-console\n      console.error(message);\n    }\n  }\n\n  static warn(message) {\n    if (_constants_js__WEBPACK_IMPORTED_MODULE_0__.isDev) {\n      // eslint-disable-next-line no-console\n      console.warn(message);\n    }\n  }\n}\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/logger.js?");

/***/ }),

/***/ "./src/js/parallax.js":
/*!****************************!*\
  !*** ./src/js/parallax.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parallaxMouseMove\": () => (/* binding */ parallaxMouseMove),\n/* harmony export */   \"parallaxWindowScroll\": () => (/* binding */ parallaxWindowScroll)\n/* harmony export */ });\nconst parallaxWindowScroll = (selector, movementConstant = 5) => {\n  const scrollPosition = document.documentElement.scrollTop;\n  const scrollingItems = document.querySelectorAll(selector);\n  scrollingItems.forEach((item) => {\n    item.setAttribute(\n      \"style\",\n      `transform: translate(0, ${scrollPosition / movementConstant}px)`\n    );\n  });\n};\n\nlet x = \"\";\nlet y = \"\";\n\nconst parallaxMouseMove = (event, selector, movementConstant = 1.1) => {\n  const parallaxIcons = document.querySelectorAll(selector);\n\n  if (x === \"\") {\n    x = event.pageX;\n  }\n\n  if (y === \"\") {\n    y = event.pageY;\n  }\n\n  const diffX = x - event.pageX;\n  const diffY = y - event.pageY;\n\n  x = event.pageX;\n  y = event.pageY;\n\n  parallaxIcons.forEach((icon) => {\n    const moveX = diffX * movementConstant;\n    const moveY = diffY * movementConstant;\n\n    icon.setAttribute(\"style\", `transform: translate(${moveX}px, ${moveY}px);`);\n  });\n};\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/parallax.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formValidation.js */ \"./src/js/formValidation.js\");\n/* harmony import */ var _parallax_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parallax.js */ \"./src/js/parallax.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.js */ \"./src/js/header.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage.js */ \"./src/js/localStorage.js\");\n/* harmony import */ var _themeSwitcher_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./themeSwitcher.js */ \"./src/js/themeSwitcher.js\");\n\n\n\n\n\n\n\nconst themeSwitchBtn = document.querySelector(\".theme-switcher__input\");\n\nthemeSwitchBtn.addEventListener(\"click\", () => {\n  const isLightMode = (0,_themeSwitcher_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const darkImagesFolderName = \"dark\";\n  const lightImagesFolderName = \"light\";\n  const colorChangedImages = document.querySelectorAll(\".img-color-change\");\n  colorChangedImages.forEach((logo) => {\n    if (isLightMode) {\n      logo.setAttribute(\n        \"src\",\n        logo\n          .getAttribute(\"src\")\n          .replace(darkImagesFolderName, lightImagesFolderName)\n      );\n    } else {\n      logo.setAttribute(\n        \"src\",\n        logo\n          .getAttribute(\"src\")\n          .replace(lightImagesFolderName, darkImagesFolderName)\n      );\n    }\n  });\n});\n\nconst currentTheme = _localStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getItem(_constants_js__WEBPACK_IMPORTED_MODULE_3__.themeMode);\nif (currentTheme === \"light-mode\") {\n  themeSwitchBtn.click();\n}\n\nconst headerCollapseBtn = document.querySelector(\".menu-btn\");\nconst header = document.querySelector(\".header\");\nheaderCollapseBtn.addEventListener(\"click\", () => {\n  header.classList.toggle(\"collapsed\");\n});\n\nwindow.addEventListener(\"resize\", () => {\n  (0,_header_js__WEBPACK_IMPORTED_MODULE_2__.headerCollapse)(header);\n});\n\nwindow.addEventListener(\"scroll\", () => {\n  (0,_parallax_js__WEBPACK_IMPORTED_MODULE_1__.parallaxWindowScroll)(\".parallax-item\");\n  (0,_header_js__WEBPACK_IMPORTED_MODULE_2__.headerScroll)(header);\n});\n\nwindow.addEventListener(\"mousemove\", (event) =>\n  (0,_parallax_js__WEBPACK_IMPORTED_MODULE_1__.parallaxMouseMove)(event, \".parallax-item\")\n);\n\nconst forms = document.querySelectorAll(\".form\");\nforms.forEach((form) => {\n  form.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const email = form.querySelector(\".form__input--email\");\n    const isEmailValid = (0,_formValidation_js__WEBPACK_IMPORTED_MODULE_0__.checkEmail)(email);\n    const isFormValid = isEmailValid;\n\n    if (isFormValid) {\n      /* submit to the server */\n    }\n  });\n});\n\nconst spoilers = document.querySelectorAll(\".spoiler\");\n\nspoilers.forEach((spoiler) => {\n  const spoilerBtn = spoiler.querySelector(\".spoiler__btn\");\n  spoilerBtn.addEventListener(\"click\", () => {\n    spoiler.classList.toggle(\"opened\");\n  });\n});\n\nconst year = document.querySelector(\".copyright__year\");\nconst date = new Date();\nyear.textContent = date.getFullYear();\n\nconst navLinks = document.querySelectorAll(\".nav__link\");\nnavLinks.forEach((link) => {\n  link.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    const href = link.getAttribute(\"href\");\n    if (href === \"#\") {\n      window.scrollTo({\n        top: 0,\n        behavior: \"smooth\",\n      });\n    } else if (href !== \"#\" && href.startsWith(\"#\")) {\n      const target = document.querySelector(href);\n      target.scrollIntoView({\n        behavior: \"smooth\",\n      });\n    }\n\n    if (header.classList.contains(\"collapsed\")) {\n      header.classList.remove(\"collapsed\");\n    }\n  });\n});\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/script.js?");

/***/ }),

/***/ "./src/js/themeSwitcher.js":
/*!*********************************!*\
  !*** ./src/js/themeSwitcher.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/js/localStorage.js\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ \"./src/js/constants.js\");\n\n\n\nconst themeSwitch = () => {\n  document.body.classList.toggle(\"light-mode\");\n  const isLightMode = document.body.classList.contains(\"light-mode\");\n\n  if (isLightMode) {\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setItem(_constants_js__WEBPACK_IMPORTED_MODULE_1__.themeMode, \"light-mode\");\n  } else {\n    _localStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setItem(_constants_js__WEBPACK_IMPORTED_MODULE_1__.themeMode, \"dark-mode\");\n  }\n\n  return isLightMode;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeSwitch);\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/themeSwitcher.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;