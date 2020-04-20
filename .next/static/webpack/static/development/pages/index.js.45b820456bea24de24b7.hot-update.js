webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Countdown.js":
/*!*********************************!*\
  !*** ./components/Countdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Countdown = function Countdown(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    minutes: 25,
    seconds: 0
  }),
      timeRemaining = _useState[0],
      setTimeRemaining = _useState[1];

  var startTimer = function startTimer() {
    var counterInterval = setInterval(function () {
      var seconds = timeRemaining.seconds,
          minutes = timeRemaining.minutes;
      console.log(seconds); // console.log('counting')

      if (seconds == 0) {
        setTimeRemaining({
          seconds: 59,
          minutes: minutes
        });
      } else {
        setTimeRemaining({
          seconds: --seconds,
          minutes: minutes
        });
      }
    }, 1000);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    onClick: startTimer,
    className: "jsx-67026020" + " " + "countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, timeRemaining.minutes, ":", timeRemaining.seconds), __jsx("section", {
    className: "jsx-67026020" + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "67026020",
    __self: _this
  }, ".jsx-67026020{display:inline-block;width:100%;text-align:center;font-size:6.5rem;font-weight:500;}.countdown-controls.jsx-67026020{height:50px;width:100%;border-radius:100px;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3dCLEFBRXNDLEFBTUwsWUFDRCxTQU5KLEVBT2EsU0FOTixXQU9HLE9BTkosVUFPakIsT0FOZ0IsZ0JBT3BCIiwiZmlsZSI6Ii9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb3VudGRvd24gPSBwcm9wcyA9PiB7XG5cbmNvbnN0IFsgdGltZVJlbWFpbmluZywgc2V0VGltZVJlbWFpbmluZyBdID0gdXNlU3RhdGUoe1xuICAgIG1pbnV0ZXM6IDI1LFxuICAgIHNlY29uZHM6IDBcbn0pXG4gICAgY29uc3Qgc3RhcnRUaW1lciA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvdW50ZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHNlY29uZHMsIG1pbnV0ZXMgfSA9IHRpbWVSZW1haW5pbmc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWNvbmRzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudGluZycpXG4gICAgICAgICAgICBpZiAoc2Vjb25kcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZVJlbWFpbmluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHM6IDU5LFxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBtaW51dGVzXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZVJlbWFpbmluZyh7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHM6IC0tc2Vjb25kcyxcbiAgICAgICAgICAgICAgICAgICAgbWludXRlczogbWludXRlc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudGRvd25cIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzdGFydFRpbWVyfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aW1lUmVtYWluaW5nLm1pbnV0ZXN9Ont0aW1lUmVtYWluaW5nLnNlY29uZHN9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udHJvbHNcIj5cblxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2LjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAuY291bnRkb3duLWNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.45b820456bea24de24b7.hot-update.js.map