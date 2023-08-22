/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/bideo/index.js":
/*!*************************************!*\
  !*** ./node_modules/bideo/index.js ***!
  \*************************************/
/***/ (() => {

eval("!function(t){t.Bideo=function(){this.opt=null,this.videoEl=null,this.approxLoadingRate=null,this._resize=null,this._progress=null,this.startTime=null,this.onLoadCalled=!1,this.init=function(e){this.opt=e=e||{};var i=this;i._resize=i.resize.bind(this),i.videoEl=e.videoEl,i.videoEl.addEventListener(\"loadedmetadata\",i._resize,!1),i.videoEl.addEventListener(\"canplay\",function(){i.opt.isMobile||(i.opt.onLoad&&i.opt.onLoad(),!1!==i.opt.autoplay&&i.videoEl.play())}),i.opt.resize&&t.addEventListener(\"resize\",i._resize,!1),this.startTime=(new Date).getTime(),this.opt.src.forEach(function(t,e,o){var n,a,l=document.createElement(\"source\");for(n in t)t.hasOwnProperty(n)&&(a=t[n],l.setAttribute(n,a));i.videoEl.appendChild(l)}),i.opt.isMobile&&i.opt.playButton&&(i.opt.videoEl.addEventListener(\"timeupdate\",function(){i.onLoadCalled||(i.opt.onLoad&&i.opt.onLoad(),i.onLoadCalled=!0)}),i.opt.playButton.addEventListener(\"click\",function(){i.opt.pauseButton.style.display=\"inline-block\",this.style.display=\"none\",i.videoEl.play()},!1),i.opt.pauseButton.addEventListener(\"click\",function(){this.style.display=\"none\",i.opt.playButton.style.display=\"inline-block\",i.videoEl.pause()},!1))},this.resize=function(){if(!(\"object-fit\"in document.body.style)){var e=this.videoEl.videoWidth,i=this.videoEl.videoHeight,o=(e/i).toFixed(2),n=this.opt.container,a=t.getComputedStyle(n),l=parseInt(a.getPropertyValue(\"width\")),d=parseInt(a.getPropertyValue(\"height\"));if(\"border-box\"!==a.getPropertyValue(\"box-sizing\")){var s=a.getPropertyValue(\"padding-top\"),p=a.getPropertyValue(\"padding-bottom\"),r=a.getPropertyValue(\"padding-left\"),u=a.getPropertyValue(\"padding-right\");s=parseInt(s),p=parseInt(p),l+=(r=parseInt(r))+(u=parseInt(u)),d+=s+p}if(l/e>d/i)var h=l,v=Math.ceil(h/o);else var v=d,h=Math.ceil(v*o);this.videoEl.style.width=h+\"px\",this.videoEl.style.height=v+\"px\"}}}}(window);\n\n//# sourceURL=webpack://2---webpack/./node_modules/bideo/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Bideo = __webpack_require__(/*! bideo */ \"./node_modules/bideo/index.js\");\r\n\r\nconsole.log(\"Objeto importado.\");\r\nconsole.log(Bideo);\n\n//# sourceURL=webpack://2---webpack/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;