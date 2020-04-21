webpackHotUpdate("static/development/pages/index.js",{

/***/ "./theme/colors.js":
/*!*************************!*\
  !*** ./theme/colors.js ***!
  \*************************/
/*! exports provided: getTaskColor, getBlack, getPallete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskColor", function() { return getTaskColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlack", function() { return getBlack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPallete", function() { return getPallete; });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);

var getTaskColor = function getTaskColor(colorNumber) {
  var colors = {
    1: '#456BFF',
    2: '#FFD345',
    3: '#FF4745',
    4: '#A145FF',
    5: '#3EC94B',
    6: '#463EC9',
    7: '#DC2FD9'
  };
  return colors[colorNumber];
};
var getBlack = function getBlack(intensity) {
  return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()('black').alpha(intensity);
};
var getPallete = function getPallete(colorName) {
  var colors = {
    'main-background': getBlack(.8),
    'counter-background': getBlack(.3),
    'green': '#3EC94B'
  };
  var tomatoTheme = {
    'main-background': '#F2523A',
    'counter-background': '#DA523E'
  };
  return colors[colorName];
};

/***/ })

})
//# sourceMappingURL=index.js.a6b1840952a7aa816ca4.hot-update.js.map