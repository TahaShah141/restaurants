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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction populate() {\n    const container = document.getElementById(\"content\");\n    container.classList.add(\"home\");\n    container.innerHTML = '<div class=\"welcome\"><h1>Welcome</h1><p>The people at Pizza Shah welcome you to not only just a great meal, but also a great experience. We cater to the most prestigious of customers and serve the best pizza in town. But you don\\'t have to take our word for it, come on up and find out !</p><hr><p class=\"sub\">For more information, please visit the contact tab on top. <br>To look at our menu and the variety of choices we offer, you have the menu tab.</p></div>'\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({populate});\n\n//# sourceURL=webpack://restaurants/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nconst tabs = document.querySelectorAll(\".tab\");\ntabs.forEach(tab => tab.addEventListener(\"click\", openTab));\n\nfunction clearContent() {\n    const container = document.getElementById(\"content\");\n    container.innerHTML = \"\";\n    container.classList.remove(\"home\");\n    container.classList.remove(\"menu\");\n\n    tabs.forEach(tab => tab.classList.remove(\"selected\"));\n}\n\nfunction openTab() {\n    let id = this.id;\n    clearContent();\n    this.classList.add(\"selected\");\n\n    if (id === \"home\") _home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].populate();\n    if (id === \"menu\") _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"].populate();\n}\n\n_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"].populate();\n\n//# sourceURL=webpack://restaurants/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuItems = [];\nconst titles = [\"Pepperoni\", \"Tikka\", \"Fajita\", \"B-B-Q\", \"Cheese Lover\", \"Veggie\"];\nconst prices = [1000, 1100, 1100, 1200, 1000, 900];\nconst descriptions = [\n    \"Layered with our special pizza sauce and topped with cheese and pepperonis, this pizza is a go-to for those looking for a snack or those seeking consistency.\",\n    \"Adding a desi touch to pizza, the chicken is marinated in tikka masala and cooked over the grill till perfection. It's a must try.\",\n    \"Who doesn't love some extra veggies along with grilled chicken on their pizza. For those that prefer a little more crunch to their bites.\",\n    \"The BBQ pizza is our specialty, with pieces of chicken roasted on top of blazing hot coal, you'll be sure to feel the taste of cooked perfection in your mouth.\",\n    \"Some folks out there don't consider it a pizza without the cheese dripping down each slice. Well, look no further...with double the cheese, you won't be disappointed.\",\n    \"The name suggests what's inside, this pizza is a simple one, topped with vegetables and cheese.<br> *No chicken included\"];\n\nclass Item {\n    constructor(title, description, price) {\n        this.title = title;\n        this.description = description;\n        this.price = price;\n    }\n}\n\nfunction populate() {\n    const container = document.getElementById(\"content\");\n    container.classList.add(\"menu\")\n\n    for (let i = 0; i < 6; i++) {\n        let menuItem = document.createElement(\"div\");\n        menuItem.classList.add(\"item\");\n        \n        let title = document.createElement(\"p\");\n        title.classList.add(\"title\");\n        title.textContent = titles[i];\n        menuItem.appendChild(title);\n\n        let desc = document.createElement(\"p\");\n        desc.classList.add(\"desc\");\n        desc.innerHTML = descriptions[i];\n        menuItem.appendChild(desc);\n\n        let price = document.createElement(\"p\");\n        price.classList.add(\"price\");\n        price.textContent = `Rs. ${prices[i]}`;\n        menuItem.appendChild(price);\n\n        container.appendChild(menuItem);\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({populate});\n\n//# sourceURL=webpack://restaurants/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;