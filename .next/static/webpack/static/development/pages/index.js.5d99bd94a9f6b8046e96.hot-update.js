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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(isTimerRunning);
    var timerInterval;

    if (isTimerRunning) {
      timerInterval = setInterval(function () {
        console.log('Counter is running!');
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }
  }, [isTimerRunning]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    onClick: toggleTimerState,
    className: "jsx-3372631114" + " " + "countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, timeRemaining.minutes, ":", timeRemaining.seconds), __jsx("section", {
    className: "jsx-3372631114" + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3372631114",
    __self: _this
  }, ".jsx-3372631114{display:inline-block;width:100%;text-align:center;font-size:6rem;font-weight:500;}.countdown-controls.jsx-3372631114{height:50px;width:100%;border-radius:100px;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3dCLEFBRXNDLEFBTUwsWUFDRCxTQU5KLEVBT2EsU0FOTixXQU9HLE9BTk4sVUFPZixLQU5nQixnQkFPcEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ291bnRkb3duID0gcHJvcHMgPT4ge1xuXG4gICAgY29uc3QgWyBpc1RpbWVyUnVubmluZywgc2V0SXNUaW1lclJ1bm5pbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbIHRpbWVSZW1haW5pbmcsIHNldFRpbWVSZW1haW5pbmcgXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWludXRlczogMjUsXG4gICAgICAgIHNlY29uZHM6IDBcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZ2dsZVRpbWVyU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzVGltZXJSdW5uaW5nKCFpc1RpbWVyUnVubmluZyk7XG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlzVGltZXJSdW5uaW5nKVxuICAgICAgICBsZXQgdGltZXJJbnRlcnZhbDtcbiAgICAgICAgaWYgKGlzVGltZXJSdW5uaW5nKSB7XG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb3VudGVyIGlzIHJ1bm5pbmchJyk7XG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKVxuICAgICAgICB9XG4gICAgfSxbaXNUaW1lclJ1bm5pbmddKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50ZG93blwiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRpbWVyU3RhdGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RpbWVSZW1haW5pbmcubWludXRlc306e3RpbWVSZW1haW5pbmcuc2Vjb25kc31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvdW50ZG93bi1jb250cm9sc1wiPlxuXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAuY291bnRkb3duLWNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.5d99bd94a9f6b8046e96.hot-update.js.map