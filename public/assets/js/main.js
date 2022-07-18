/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/assets/js/controller.js":
/*!****************************************!*\
  !*** ./public/assets/js/controller.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\r\n\r\n\r\n$(document).on('click', '.btn_categorias', function(e){\r\ne.preventDefault()\r\n\r\nvar categoria = $(this).data('categoria')\r\n\r\n\r\n$.ajax({\r\n    url : \"categorias\",\r\n    type : 'GET',\r\n    data : {\r\n         categoria : categoria,\r\n    },\r\n    beforeSend : function(){\r\n        // AQUI O VAI SER ESTAR SENDO ENVIADO\r\n    }\r\n})\r\n.done(function(msg){\r\n\r\n    $(\".page-home\").html(msg);\r\n})\r\n.fail(function(jqXHR, textStatus, msg){\r\n    // ERRO MSG\r\n});\r\n})\r\n\r\n\r\n\r\n$(document).on('scroll', function(e){\r\n    e.preventDefault()\r\n\r\n\r\n    var top = document.body.scrollTop;\r\n    var maxTop = (document.body.scrollHeight - document.body.clientHeight) - 400;\r\n\r\n    \r\n    if (parseInt(top) > maxTop) {\r\n      $(\".produtos_categorias\").append($(\".produtos_categorias\").html());\r\n    }\r\n\r\n})\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvYXNzZXRzL2pzL2NvbnRyb2xsZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FuYWx1YS13ZWIvLi9wdWJsaWMvYXNzZXRzL2pzL2NvbnRyb2xsZXIuanM/MzMxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5idG5fY2F0ZWdvcmlhcycsIGZ1bmN0aW9uKGUpe1xyXG5lLnByZXZlbnREZWZhdWx0KClcclxuXHJcbnZhciBjYXRlZ29yaWEgPSAkKHRoaXMpLmRhdGEoJ2NhdGVnb3JpYScpXHJcblxyXG5cclxuJC5hamF4KHtcclxuICAgIHVybCA6IFwiY2F0ZWdvcmlhc1wiLFxyXG4gICAgdHlwZSA6ICdHRVQnLFxyXG4gICAgZGF0YSA6IHtcclxuICAgICAgICAgY2F0ZWdvcmlhIDogY2F0ZWdvcmlhLFxyXG4gICAgfSxcclxuICAgIGJlZm9yZVNlbmQgOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIEFRVUkgTyBWQUkgU0VSIEVTVEFSIFNFTkRPIEVOVklBRE9cclxuICAgIH1cclxufSlcclxuLmRvbmUoZnVuY3Rpb24obXNnKXtcclxuXHJcbiAgICAkKFwiLnBhZ2UtaG9tZVwiKS5odG1sKG1zZyk7XHJcbn0pXHJcbi5mYWlsKGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBtc2cpe1xyXG4gICAgLy8gRVJSTyBNU0dcclxufSk7XHJcbn0pXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG5cclxuXHJcbiAgICB2YXIgdG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICB2YXIgbWF4VG9wID0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpIC0gNDAwO1xyXG5cclxuICAgIFxyXG4gICAgaWYgKHBhcnNlSW50KHRvcCkgPiBtYXhUb3ApIHtcclxuICAgICAgJChcIi5wcm9kdXRvc19jYXRlZ29yaWFzXCIpLmFwcGVuZCgkKFwiLnByb2R1dG9zX2NhdGVnb3JpYXNcIikuaHRtbCgpKTtcclxuICAgIH1cclxuXHJcbn0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/assets/js/controller.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/assets/js/controller.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;