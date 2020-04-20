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
/* harmony import */ var _tools_useInterval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../tools/useInterval */ "./tools/useInterval.js");
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Countdown = function Countdown(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isTimeUp = _useState[0],
      setIsTimeUp = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isTimerRunning = _useState2[0],
      setIsTimerRunning = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    minutes: 25,
    seconds: 0
  }),
      timeRemaining = _useState3[0],
      setTimeRemaining = _useState3[1];

  var toggleTimerState = function toggleTimerState() {
    setIsTimerRunning(!isTimerRunning);
  };

  var returnNextTime = function returnNextTime(previousTime) {
    console.log(previousTime);
    var newMinutes, newSeconds;
    newMinutes = previousTime.seconds === 0 ? --previousTime.minutes : previousTime.minutes;
    newSeconds = previousTime.seconds === 0 ? 59 : --previousTime.seconds;

    if (newMinutes === 0 && newSeconds === 0) {
      setIsTimerRunning(false);
      setIsTimeUp(true);
      return {
        minutes: newMinutes,
        seconds: newSeconds
      };
    }

    return {
      minutes: newMinutes,
      seconds: newSeconds
    };
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (isTimeUp) {
      alert('Time up baby!');
    }
  }, [isTimeUp]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timerInterval = null;

    if (isTimerRunning) {
      console.log('Timer running');
      timerInterval = setInterval(function () {
        console.log('Tick...');
        setTimeRemaining(returnNextTime(timeRemaining));
      }, 1000);
    } else {
      console.log('Timer stopped');
    }

    return function () {
      return clearInterval(timerInterval);
    };
  }, [isTimerRunning, timeRemaining]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    onClick: toggleTimerState,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3388169519", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8)]]]) + " " + "countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, timeRemaining.minutes < 10 ? '0' + timeRemaining.minutes : timeRemaining.minutes, ":", timeRemaining.seconds < 10 ? '0' + timeRemaining.seconds : timeRemaining.seconds), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3388169519", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8)]]]) + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3388169519", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "-5"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3388169519", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "PL"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3388169519", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "PS"), __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3388169519", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "+5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3388169519",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8)],
    __self: _this
  }, ".countdown.__jsx-style-dynamic-selector{display:inline-block;width:100%;text-align:center;font-size:5rem;font-weight:500;}.countdown-controls.__jsx-style-dynamic-selector{height:50px;width:100%;border-radius:100px;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 20px;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-size:1.5rem;line-height:50px;font-weight:bold;color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.8), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRndCLEFBRzBDLEFBT1QsQUFTSyxZQVJOLEtBU00sSUFoQk4sRUFRUyxTQVBGLEVBZ0JELFNBUkEsT0FQRixDQWlCcEIsU0FUa0IsS0FQRyxnQkFDcEIsS0FlQSxnREFSa0MsbUhBQ2YsZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUludGVydmFsIGZyb20gJy4vLi4vdG9vbHMvdXNlSW50ZXJ2YWwnO1xuaW1wb3J0IHsgZ2V0QmxhY2sgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDb3VudGRvd24gPSBwcm9wcyA9PiB7XG4gICAgXG4gICAgY29uc3QgWyBpc1RpbWVVcCwgc2V0SXNUaW1lVXAgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbIGlzVGltZXJSdW5uaW5nLCBzZXRJc1RpbWVyUnVubmluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgdGltZVJlbWFpbmluZywgc2V0VGltZVJlbWFpbmluZyBdID0gdXNlU3RhdGUoe1xuICAgICAgICBtaW51dGVzOiAyNSxcbiAgICAgICAgc2Vjb25kczogMFxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlVGltZXJTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNUaW1lclJ1bm5pbmcoIWlzVGltZXJSdW5uaW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXR1cm5OZXh0VGltZSA9IHByZXZpb3VzVGltZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByZXZpb3VzVGltZSlcbiAgICAgICAgbGV0IG5ld01pbnV0ZXMsIG5ld1NlY29uZHM7XG4gICAgICAgIG5ld01pbnV0ZXMgPSBwcmV2aW91c1RpbWUuc2Vjb25kcyA9PT0gMCA/XG4gICAgICAgICAgICAtLXByZXZpb3VzVGltZS5taW51dGVzIDpcbiAgICAgICAgICAgIHByZXZpb3VzVGltZS5taW51dGVzO1xuICAgICAgICBuZXdTZWNvbmRzID0gcHJldmlvdXNUaW1lLnNlY29uZHMgPT09IDAgP1xuICAgICAgICAgICAgNTkgOlxuICAgICAgICAgICAgLS1wcmV2aW91c1RpbWUuc2Vjb25kcztcbiAgICAgICAgaWYgKG5ld01pbnV0ZXMgPT09IDAgJiYgbmV3U2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgICAgc2V0SXNUaW1lclJ1bm5pbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0SXNUaW1lVXAodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IG5ld01pbnV0ZXMsXG4gICAgICAgICAgICAgICAgc2Vjb25kczogbmV3U2Vjb25kc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW51dGVzOiBuZXdNaW51dGVzLFxuICAgICAgICAgICAgc2Vjb25kczogbmV3U2Vjb25kc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzVGltZVVwKSB7XG4gICAgICAgICAgICBhbGVydCgnVGltZSB1cCBiYWJ5IScpO1xuICAgICAgICB9XG4gICAgfSxbIGlzVGltZVVwIF0pXG4gICAgICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCB0aW1lckludGVydmFsID0gbnVsbDtcbiAgICAgICAgaWYgKGlzVGltZXJSdW5uaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXIgcnVubmluZycpO1xuICAgICAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGljay4uLicpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVSZW1haW5pbmcocmV0dXJuTmV4dFRpbWUodGltZVJlbWFpbmluZykpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGltZXIgc3RvcHBlZCcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXJJbnRlcnZhbCk7XG4gICAgfSxbIGlzVGltZXJSdW5uaW5nLCB0aW1lUmVtYWluaW5nIF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY291bnRkb3duXCIgXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlVGltZXJTdGF0ZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGltZVJlbWFpbmluZy5taW51dGVzIDwgMTAgP1xuICAgICAgICAgICAgICAgICAgICAnMCcgKyB0aW1lUmVtYWluaW5nLm1pbnV0ZXMgOlxuICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLm1pbnV0ZXNcbiAgICAgICAgICAgICAgICB9Ont0aW1lUmVtYWluaW5nLnNlY29uZHMgPCAxMCA/XG4gICAgICAgICAgICAgICAgICAgICcwJyArIHRpbWVSZW1haW5pbmcuc2Vjb25kcyA6XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZW1haW5pbmcuc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvdW50ZG93bi1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuPi01PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlBMPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlBTPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPis1PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jb3VudGRvd24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3VudGRvd24tY29udHJvbHMgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICBcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Z2V0QmxhY2soLjgpfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.4472197af1583be7c5d2.hot-update.js.map