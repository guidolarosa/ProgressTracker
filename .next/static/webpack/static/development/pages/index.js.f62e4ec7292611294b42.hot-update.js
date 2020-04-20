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

  var startTimer = function startTimer(minutes, seconds) {
    var counterInterval = setInterval(function () {
      var seconds = timeRemaining.seconds,
          minutes = timeRemaining.minutes;
      setTimeRemaining({
        seconds: --seconds
      });
    }, 1000);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    onClick: startTimer(timeRemaining),
    className: "jsx-4003937642" + " " + "countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, timeRemaining.minutes, ":", timeRemaining.seconds == 0 ? '00' : timeRemaining.seconds < 10 ? '0' + timeRemaining : timeRemaining.seconds), __jsx("section", {
    className: "jsx-4003937642" + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4003937642",
    __self: _this
  }, ".jsx-4003937642{display:inline-block;width:100%;text-align:center;font-size:7rem;font-weight:500;}.countdown-controls.jsx-4003937642{height:50px;width:100%;border-radius:100px;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ3dCLEFBRXNDLEFBTUwsWUFDRCxTQU5KLEVBT2EsU0FOTixXQU9HLE9BTk4sVUFPZixLQU5nQixnQkFPcEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvdW50ZG93biA9IHByb3BzID0+IHtcblxuY29uc3QgWyB0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nIF0gPSB1c2VTdGF0ZSh7XG4gICAgbWludXRlczogMjUsXG4gICAgc2Vjb25kczogMFxufSlcbiAgICBjb25zdCBzdGFydFRpbWVyID0gKG1pbnV0ZXMsIHNlY29uZHMpID0+IHtcbiAgICAgICAgbGV0IGNvdW50ZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHNlY29uZHMsIG1pbnV0ZXMgfSA9IHRpbWVSZW1haW5pbmc7XG4gICAgICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHtcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiAtLXNlY29uZHNcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudGRvd25cIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoc3RhcnRUaW1lcih0aW1lUmVtYWluaW5nKSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RpbWVSZW1haW5pbmcubWludXRlc306e1xuICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLnNlY29uZHMgPT0gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAnMDAnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVSZW1haW5pbmcuc2Vjb25kcyA8IDEwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnMCcgKyB0aW1lUmVtYWluaW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLnNlY29uZHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY291bnRkb3duLWNvbnRyb2xzXCI+XG5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIC5jb3VudGRvd24tY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjsiXX0= */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.f62e4ec7292611294b42.hot-update.js.map