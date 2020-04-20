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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isTimerRunning = _useState[0],
      setIsTimerRunning = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    minutes: 25,
    seconds: 0
  }),
      timeRemaining = _useState2[0],
      setTimeRemaining = _useState2[1];

  var toggleTimerState = function toggleTimerState() {
    setIsTimerRunning(!isTimerRunning);
  };

  var timerInterval = null;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(isTimerRunning);

    if (isTimerRunning) {
      timerInterval = setInterval(function () {
        console.log('tick');
      }, 1000);
      console.log('running');
    } else {
      clearInterval(timerInterval);
      console.log('stoppd');
    }
  }, [isTimerRunning]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    onClick: toggleTimerState,
    className: "jsx-3372631114" + " " + "countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, timeRemaining.minutes, ":", timeRemaining.seconds), __jsx("section", {
    className: "jsx-3372631114" + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3372631114",
    __self: _this
  }, ".jsx-3372631114{display:inline-block;width:100%;text-align:center;font-size:6rem;font-weight:500;}.countdown-controls.jsx-3372631114{height:50px;width:100%;border-radius:100px;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3dCLEFBRXNDLEFBTUwsWUFDRCxTQU5KLEVBT2EsU0FOTixXQU9HLE9BTk4sVUFPZixLQU5nQixnQkFPcEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBDb3VudGRvd24gPSBwcm9wcyA9PiB7XG4gICAgXG4gICAgY29uc3QgWyBpc1RpbWVyUnVubmluZywgc2V0SXNUaW1lclJ1bm5pbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbIHRpbWVSZW1haW5pbmcsIHNldFRpbWVSZW1haW5pbmcgXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWludXRlczogMjUsXG4gICAgICAgIHNlY29uZHM6IDBcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZ2dsZVRpbWVyU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzVGltZXJSdW5uaW5nKCFpc1RpbWVyUnVubmluZyk7XG4gICAgfVxuICAgIFxuICAgIGxldCB0aW1lckludGVydmFsID0gbnVsbDtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhpc1RpbWVyUnVubmluZyk7XG4gICAgICAgIGlmIChpc1RpbWVyUnVubmluZykge1xuICAgICAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGljaycpXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3J1bm5pbmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RvcHBkJyk7XG4gICAgICAgIH1cbiAgICB9LFsgaXNUaW1lclJ1bm5pbmcgXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudGRvd25cIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVUaW1lclN0YXRlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aW1lUmVtYWluaW5nLm1pbnV0ZXN9Ont0aW1lUmVtYWluaW5nLnNlY29uZHN9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udHJvbHNcIj5cblxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duOyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.8d7206b4d326381764df.hot-update.js.map