/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/buildings.png":
/*!******************************!*\
  !*** ./assets/buildings.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "871a84146834c3ad438e9d9a9d37f0e1.png");

/***/ }),

/***/ "./assets/contact.png":
/*!****************************!*\
  !*** ./assets/contact.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "717e40c40d4001427da5f6126e5846ea.png");

/***/ }),

/***/ "./assets/cr.png":
/*!***********************!*\
  !*** ./assets/cr.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e8d2c8f9c97741ef7be390b1586cf80f.png");

/***/ }),

/***/ "./assets/creddy+controls.png":
/*!************************************!*\
  !*** ./assets/creddy+controls.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cee9c4371a0161180a878c85ea6bf740.png");

/***/ }),

/***/ "./assets/creddy.png":
/*!***************************!*\
  !*** ./assets/creddy.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "53c268fb538b73e23a14493d3e1f12ef.png");

/***/ }),

/***/ "./assets/hi-contact.png":
/*!*******************************!*\
  !*** ./assets/hi-contact.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0642c3a5c4ddf1b985d237984e9b1efd.png");

/***/ }),

/***/ "./assets/hi-palette.png":
/*!*******************************!*\
  !*** ./assets/hi-palette.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "81966746656d967abdb8f367d5bc5bf8.png");

/***/ }),

/***/ "./assets/hi-phone.png":
/*!*****************************!*\
  !*** ./assets/hi-phone.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "de57dbc0608cdc4b65165a00ab2a3c55.png");

/***/ }),

/***/ "./assets/hi-wand.png":
/*!****************************!*\
  !*** ./assets/hi-wand.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ea4a8ddfb995f44131dd9df498fbda73.png");

/***/ }),

/***/ "./assets/palette.png":
/*!****************************!*\
  !*** ./assets/palette.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bbf540491412ea1fb7f6ccef9976a2de.png");

/***/ }),

/***/ "./assets/phone.png":
/*!**************************!*\
  !*** ./assets/phone.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "451c9a27873238400b73de86ac3a72bb.png");

/***/ }),

/***/ "./assets/platform6.png":
/*!******************************!*\
  !*** ./assets/platform6.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "066906472f747fe6885fdf88ecbe1df0.png");

/***/ }),

/***/ "./assets/sky.png":
/*!************************!*\
  !*** ./assets/sky.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5154836d14c31577ee653a70857f2a28.png");

/***/ }),

/***/ "./assets/smallTall.png":
/*!******************************!*\
  !*** ./assets/smallTall.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "df454fc72641e5e1b0906b68ea550dc8.png");

/***/ }),

/***/ "./assets/trees2.png":
/*!***************************!*\
  !*** ./assets/trees2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e24a5977798c2b5bfc1448dcfa3d3a08.png");

/***/ }),

/***/ "./assets/wand.png":
/*!*************************!*\
  !*** ./assets/wand.png ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "42574dade7d5ca800ddc15ed37bc7674.png");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\nbody {\n  margin: 0;\n  background-color:white;\n  display:flex; \n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n\n  \n}\n#canvas {\n\n    /* position: relative; */\n    /* z-index: 1; */\n\n  }\n\n  .title{\n    color:#282828;\n    font-family: 'Plus Jakarta Sans', sans-serif;\n    font-size: 5rem;\n    font-weight: 800;\n\n  }\n .start-page{\n    background-color:white;\n    border: 2px solid #282828;\n    display:none;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    width: 1024px;\n    flex-direction: column;\n    height: 576px;\n    border-radius: 6px ;\n  }\n.btn{\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid #282828;\n  background-color: white;\n  border-radius: 6px ;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n}\n\n.page{\n  display: none;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  display: none; \n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #282828;\n  font-size: 1rem;\n  width: 1024px;\n  border-radius: 6px ;\n  font-weight: 600;\n  height: 576px;\n\n}\n\n.btn1{\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid #282828;\n  background-color: white;\n  border-radius: 6px ;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  margin-top: 3rem;\n}\n\np{\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  padding-left: 10rem;\n  padding-right: 10rem;\n}\n\n.img-next{\n  display: flex;\n\n}\n\n#img{\n  padding-left: 10rem;\n}\n#container {\n  position: relative;\n  height:576px;\n  width:1024px;\n  display: block\n}\n#container canvas, #overlay {\n  position: absolute;\n  height:576px;\n   width:1024px;\n   z-index:9999;\n   background-color: rgba(40, 40, 40, 0.50);\n\n}\n\n.small-overlay{\nheight: 288px;\nwidth: 512px;\nborder: 4px solid #282828;\nborder-radius: 10px;\nbackground-color: white;\nalign-items: center;\n\ndisplay:flex;\nflex-direction: column;\n\n}\n\n.small-overlay p{\n  padding-right: 4rem;\n  padding-left: 4rem;\n}\n\n.small-overlay input{\n  margin-right: 4rem;\n  margin-left: 4rem;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 4px solid #282828;\n  text-align: center; \n\n}\n\n.small-overlay button{\nmargin-top: 2rem;\nheight: 2rem;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n    border-bottom: 4px solid #85A0FA;\n}\n\n.username-div{\n  width: fit-content;\n  display: flex;\n  height: 30px;\n  background-color: white;\n  border: 4px solid #282828;\n  border-radius:10px;\n  align-items: center;\n\n}\n\n#cr-logo{\n  width: 20px;\n  height: 20px;\n  padding-left: 0.5rem;\n\n}\n\n.username{\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n\n}\n\n.center{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height:576px;\n  width:1024px;\n  \n}\n\n.right{\n  display: flex;\n  justify-content: flex-end;\n  padding: 1rem;\n  display: none;\n}\n\n.bottom{\n  display: none;\n  height:495px;\n  width:1024px;\n  align-items: flex-end;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n.caption{\n  font-family: 'Source Code Pro', monospace;\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;EACE,SAAS;EACT,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;EACb,YAAY;;;AAGd;AACA;;IAEI,wBAAwB;IACxB,gBAAgB;;EAElB;;EAEA;IACE,aAAa;IACb,4CAA4C;IAC5C,eAAe;IACf,gBAAgB;;EAElB;CACD;IACG,sBAAsB;IACtB,yBAAyB;IACzB,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;EACrB;AACF;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,4CAA4C;EAC5C,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;;AAEf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,4CAA4C;EAC5C,gBAAgB;AAClB;;AAEA;EACE,4CAA4C;EAC5C,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,aAAa;;AAEf;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ;AACF;AACA;EACE,kBAAkB;EAClB,YAAY;GACX,YAAY;GACZ,YAAY;GACZ,wCAAwC;;AAE3C;;AAEA;AACA,aAAa;AACb,YAAY;AACZ,yBAAyB;AACzB,mBAAmB;AACnB,uBAAuB;AACvB,mBAAmB;;AAEnB,YAAY;AACZ,sBAAsB;;AAEtB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,4CAA4C;EAC5C,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,gCAAgC;EAChC,kBAAkB;;AAEpB;;AAEA;AACA,gBAAgB;AAChB,YAAY;AACZ;;AAEA;;;;IAII,aAAa;IACb,gCAAgC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;;AAErB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;;AAEtB;;AAEA;EACE,4CAA4C;EAC5C,oBAAoB;EACpB,qBAAqB;;AAEvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;;AAEd;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,yCAAyC;EACzC,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;AACvB","sourcesContent":["\nbody {\n  margin: 0;\n  background-color:white;\n  display:flex; \n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  width: 100vw;\n\n  \n}\n#canvas {\n\n    /* position: relative; */\n    /* z-index: 1; */\n\n  }\n\n  .title{\n    color:#282828;\n    font-family: 'Plus Jakarta Sans', sans-serif;\n    font-size: 5rem;\n    font-weight: 800;\n\n  }\n .start-page{\n    background-color:white;\n    border: 2px solid #282828;\n    display:none;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    z-index: 10;\n    width: 1024px;\n    flex-direction: column;\n    height: 576px;\n    border-radius: 6px ;\n  }\n.btn{\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid #282828;\n  background-color: white;\n  border-radius: 6px ;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n}\n\n.page{\n  display: none;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  display: none; \n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px solid #282828;\n  font-size: 1rem;\n  width: 1024px;\n  border-radius: 6px ;\n  font-weight: 600;\n  height: 576px;\n\n}\n\n.btn1{\n  width: 5rem;\n  height: 3rem;\n  border: 2px solid #282828;\n  background-color: white;\n  border-radius: 6px ;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  margin-top: 3rem;\n}\n\np{\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  padding-left: 10rem;\n  padding-right: 10rem;\n}\n\n.img-next{\n  display: flex;\n\n}\n\n#img{\n  padding-left: 10rem;\n}\n#container {\n  position: relative;\n  height:576px;\n  width:1024px;\n  display: block\n}\n#container canvas, #overlay {\n  position: absolute;\n  height:576px;\n   width:1024px;\n   z-index:9999;\n   background-color: rgba(40, 40, 40, 0.50);\n\n}\n\n.small-overlay{\nheight: 288px;\nwidth: 512px;\nborder: 4px solid #282828;\nborder-radius: 10px;\nbackground-color: white;\nalign-items: center;\n\ndisplay:flex;\nflex-direction: column;\n\n}\n\n.small-overlay p{\n  padding-right: 4rem;\n  padding-left: 4rem;\n}\n\n.small-overlay input{\n  margin-right: 4rem;\n  margin-left: 4rem;\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-bottom: 4px solid #282828;\n  text-align: center; \n\n}\n\n.small-overlay button{\nmargin-top: 2rem;\nheight: 2rem;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n    border-bottom: 4px solid #85A0FA;\n}\n\n.username-div{\n  width: fit-content;\n  display: flex;\n  height: 30px;\n  background-color: white;\n  border: 4px solid #282828;\n  border-radius:10px;\n  align-items: center;\n\n}\n\n#cr-logo{\n  width: 20px;\n  height: 20px;\n  padding-left: 0.5rem;\n\n}\n\n.username{\n  font-family: 'Plus Jakarta Sans', sans-serif;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n\n}\n\n.center{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height:576px;\n  width:1024px;\n  \n}\n\n.right{\n  display: flex;\n  justify-content: flex-end;\n  padding: 1rem;\n  display: none;\n}\n\n.bottom{\n  display: none;\n  height:495px;\n  width:1024px;\n  align-items: flex-end;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n.caption{\n  font-family: 'Source Code Pro', monospace;\n  font-weight: 600;\n  font-size: 0.75rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_buildings_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/buildings.png */ "./assets/buildings.png");
/* harmony import */ var _assets_contact_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/contact.png */ "./assets/contact.png");
/* harmony import */ var _assets_creddy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/creddy.png */ "./assets/creddy.png");
/* harmony import */ var _assets_hi_contact_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/hi-contact.png */ "./assets/hi-contact.png");
/* harmony import */ var _assets_hi_palette_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/hi-palette.png */ "./assets/hi-palette.png");
/* harmony import */ var _assets_hi_phone_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/hi-phone.png */ "./assets/hi-phone.png");
/* harmony import */ var _assets_hi_wand_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/hi-wand.png */ "./assets/hi-wand.png");
/* harmony import */ var _assets_palette_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/palette.png */ "./assets/palette.png");
/* harmony import */ var _assets_phone_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/phone.png */ "./assets/phone.png");
/* harmony import */ var _assets_platform6_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/platform6.png */ "./assets/platform6.png");
/* harmony import */ var _assets_sky_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/sky.png */ "./assets/sky.png");
/* harmony import */ var _assets_smallTall_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/smallTall.png */ "./assets/smallTall.png");
/* harmony import */ var _assets_trees2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/trees2.png */ "./assets/trees2.png");
/* harmony import */ var _assets_wand_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/wand.png */ "./assets/wand.png");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _intro_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./intro.js */ "./src/js/intro.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

















var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var pause = true;
var phoneSelected = false;
var wandSelected = false;
var contactSelected = false;
var paletteSelected = false;
c.imageSmoothingEnabled = false;
var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.speed = 5;
    this.width = 63;
    this.height = 66;
    this.image = createImage(_assets_creddy_png__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {}
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObject;
}();

var ClickableObject = /*#__PURE__*/function () {
  function ClickableObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image,
        hiImage = _ref3.hiImage,
        original = _ref3.original;

    _classCallCheck(this, ClickableObject);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.hiImage = hiImage;
    this.original = original;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(ClickableObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return ClickableObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  image.style.height = "125px";
  image.style.width = "525px";
  return image;
}

var platformImage = createImage(_assets_platform6_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
var player = new Player();
var platforms = [];
var clickableObjects1 = [];
var clickableObjects2 = [];
var clickableObjects3 = [];
var clickableObjects4 = [];
var genericObjects = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  },
  enter: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platformImage = createImage(_assets_platform6_png__WEBPACK_IMPORTED_MODULE_9__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: platformImage.width * 4 + 573,
    y: 295,
    image: createImage(_assets_smallTall_png__WEBPACK_IMPORTED_MODULE_11__["default"])
  }), new Platform({
    x: -12,
    y: 510,
    image: platformImage
  }), new Platform({
    x: 662,
    y: 510,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 2 + 100,
    y: 510,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 3 + 200,
    y: 510,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 4 + 299,
    y: 510,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 5 + 450,
    y: 510,
    image: platformImage
  }), new Platform({
    x: platformImage.width * 6 + 400,
    y: 510,
    image: platformImage
  })];
  genericObjects = [new GenericObject({
    x: -10,
    y: -150,
    image: createImage(_assets_sky_png__WEBPACK_IMPORTED_MODULE_10__["default"])
  }), new GenericObject({
    x: 0,
    y: -30,
    image: createImage(_assets_buildings_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new GenericObject({
    x: 0,
    y: 200,
    image: createImage(_assets_trees2_png__WEBPACK_IMPORTED_MODULE_12__["default"])
  })];
  clickableObjects1 = [new ClickableObject({
    x: 800,
    y: 430,
    image: createImage(_assets_phone_png__WEBPACK_IMPORTED_MODULE_8__["default"]),
    hiImage: createImage(_assets_hi_phone_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
    original: createImage(_assets_phone_png__WEBPACK_IMPORTED_MODULE_8__["default"])
  })];
  clickableObjects2 = [new ClickableObject({
    x: 1400,
    y: 430,
    image: createImage(_assets_wand_png__WEBPACK_IMPORTED_MODULE_13__["default"]),
    hiImage: createImage(_assets_hi_wand_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
    original: createImage(_assets_wand_png__WEBPACK_IMPORTED_MODULE_13__["default"])
  })];
  clickableObjects3 = [new ClickableObject({
    x: 2300,
    y: 430,
    image: createImage(_assets_contact_png__WEBPACK_IMPORTED_MODULE_1__["default"]),
    hiImage: createImage(_assets_hi_contact_png__WEBPACK_IMPORTED_MODULE_3__["default"]),
    original: createImage(_assets_contact_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  clickableObjects4 = [new ClickableObject({
    x: 3400,
    y: 430,
    image: createImage(_assets_palette_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
    hiImage: createImage(_assets_hi_palette_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
    original: createImage(_assets_palette_png__WEBPACK_IMPORTED_MODULE_7__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "#FFFAF0";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObjects) {
    genericObjects.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  clickableObjects1.forEach(function (clickableObject) {
    clickableObject.draw();
  });
  clickableObjects2.forEach(function (clickableObject) {
    clickableObject.draw();
  });
  clickableObjects3.forEach(function (clickableObject) {
    clickableObject.draw();
  });
  clickableObjects4.forEach(function (clickableObject) {
    clickableObject.draw();
  });

  if (!pause) {
    player.update();

    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;
    } else if (keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
      player.velocity.x = -player.speed;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += player.speed;
        platforms.forEach(function (platform) {
          platform.position.x -= player.speed;
        });
        clickableObjects1.forEach(function (clickableObject) {
          clickableObject.position.x -= player.speed;
        });
        clickableObjects2.forEach(function (clickableObject) {
          clickableObject.position.x -= player.speed;
        });
        clickableObjects3.forEach(function (clickableObject) {
          clickableObject.position.x -= player.speed;
        });
        clickableObjects4.forEach(function (clickableObject) {
          clickableObject.position.x -= player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x -= player.speed * 0.66;
        });
      } else if (keys.left.pressed && scrollOffset > 0) {
        scrollOffset -= player.speed;
        platforms.forEach(function (platform) {
          platform.position.x += player.speed;
        });
        clickableObjects1.forEach(function (clickableObject) {
          clickableObject.position.x += player.speed;
        });
        clickableObjects2.forEach(function (clickableObject) {
          clickableObject.position.x += player.speed;
        });
        clickableObjects3.forEach(function (clickableObject) {
          clickableObject.position.x += player.speed;
        });
        clickableObjects4.forEach(function (clickableObject) {
          clickableObject.position.x += player.speed;
        });
        genericObjects.forEach(function (genericObject) {
          genericObject.position.x += player.speed;
        });
      }
    }

    platforms.forEach(function (platform) {
      if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x + player.width <= platform.position.x + platform.width) {
        player.velocity.y = 0;
      }
    });
    clickableObjects1.forEach(function (clickableObject, index) {
      if (player.position.x >= clickableObject.position.x - 100 && player.position.x <= clickableObject.position.x + clickableObject.width + 100) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;
        document.getElementById("caption1").innerHTML = "Press Enter";
        phoneSelected = true;
      } else if (player.position.x > clickableObject.position.x + clickableObject.width + 100 || player.position.x < clickableObject.position.x - 100) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;

        if (phoneSelected) {
          document.getElementById("caption1").style.display = "none";
        }
      }
    });
    clickableObjects2.forEach(function (clickableObject, index) {
      if (player.position.x >= clickableObject.position.x - 100 && player.position.x <= clickableObject.position.x + clickableObject.width + 100) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;
        document.getElementById("caption1").innerHTML = "Press Enter";
        wandSelected = true;
      } else if (player.position.x > clickableObject.position.x + clickableObject.width + 100 || player.position.x < clickableObject.position.x - 100) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;

        if (wandSelected) {
          document.getElementById("caption1").style.display = "none";
        }
      }
    });
    clickableObjects3.forEach(function (clickableObject, index) {
      if (player.position.x >= clickableObject.position.x - 100 && player.position.x <= clickableObject.position.x + clickableObject.width + 100) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;
        document.getElementById("caption1").innerHTML = "Press Enter";
        contactSelected = true;
      } else if (player.position.x > clickableObject.position.x + clickableObject.width + 100 || player.position.x < clickableObject.position.x - 100) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;

        if (contactSelected) {
          document.getElementById("caption1").style.display = "none";
        }
      }
    });
    clickableObjects4.forEach(function (clickableObject, index) {
      if (player.position.x >= clickableObject.position.x - 100 && player.position.x <= clickableObject.position.x + clickableObject.width + 100) {
        document.getElementById("caption1").style.display = "flex";
        console.log("allo");
        clickableObject.image = clickableObject.hiImage;
        clickableObject.position.y = 410;
        document.getElementById("caption1").innerHTML = "Press Enter";
        paletteSelected = true;
      } else if (player.position.x > clickableObject.position.x + clickableObject.width + 100 || player.position.x < clickableObject.position.x - 100) {
        clickableObject.image = clickableObject.original;
        clickableObject.position.y = 430;

        if (paletteSelected) {
          document.getElementById("caption1").style.display = "none";
        }
      }
    }); //win condition

    if (scrollOffset > 2000) {
      console.log("you win");
    } //lose condition


    if (player.position.y > canvas.height) {
      console.log("you lose");
      init();
    }
  }
}

init();
animate(); //EVENT LISTENERS

window.addEventListener("keydown", function (_ref4) {
  var keyCode = _ref4.keyCode;

  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      break;

    case 40:
      break;

    case 39:
      keys.right.pressed = true;
      break;

    case 38:
      player.velocity.y -= 25;
      break;

    case 13:
      keys.enter.pressed = true;
      console.log("space");
      break;
  }
});
window.addEventListener("keyup", function (_ref5) {
  var keyCode = _ref5.keyCode;

  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      break;

    case 40:
      break;

    case 39:
      keys.right.pressed = false;
      break;

    case 38:
      break;

    case 13:
      keys.enter.pressed = false;
      break;
  }
}); //UI

function getUserName() {
  var nameField = document.getElementById("nameField").value;
  var result = document.getElementById("username");

  if (nameField.length > 0) {
    result.textContent = nameField;
    document.querySelector("#right").style.display = "flex";
    document.querySelector("#bottom").style.display = "flex";
    document.querySelector("#small-overlay").style.display = "none";
    document.querySelector("#overlay").style.backgroundColor = "transparent";
    pause = false;
  } else {
    document.getElementById("nameField").style.borderBottom = "4px solid #E66363";
  }
}

var subButton = document.getElementById("cr-btn");
subButton.addEventListener("click", getUserName, false);

/***/ }),

/***/ "./src/js/intro.js":
/*!*************************!*\
  !*** ./src/js/intro.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_cr_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/cr.png */ "./assets/cr.png");
/* harmony import */ var _assets_creddy_controls_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/creddy+controls.png */ "./assets/creddy+controls.png");


document.querySelector("#start-btn").addEventListener("click", function () {
  document.querySelector("#page-1").style.display = "flex";
  document.querySelector("#start-page").style.display = "none";
});
document.querySelector("#page1-btn").addEventListener("click", function () {
  document.querySelector("#page-2").style.display = "flex";
  document.querySelector("#page-1").style.display = "none";
});
document.querySelector("#page2-btn").addEventListener("click", function () {
  document.querySelector("#page-3").style.display = "flex";
  document.querySelector("#page-2").style.display = "none";
});
document.querySelector("#page3-btn").addEventListener("click", function () {
  document.querySelector("#container").style.display = "block";
  document.querySelector("#page-3").style.display = "none";
});
document.querySelector("#img").src = _assets_creddy_controls_png__WEBPACK_IMPORTED_MODULE_1__["default"];
document.querySelector("#cr-logo").src = _assets_cr_png__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map