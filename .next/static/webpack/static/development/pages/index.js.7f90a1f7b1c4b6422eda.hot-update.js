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
    className: "jsx-622709443" + " " + "countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, timeRemaining.minutes < 10 ? '0' + timeRemaining.minutes : timeRemaining.minutes, ":", timeRemaining.seconds < 10 ? '0' + timeRemaining.seconds : timeRemaining.seconds), __jsx("section", {
    className: "jsx-622709443" + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "jsx-622709443",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, "-5"), __jsx("span", {
    className: "jsx-622709443",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "PL"), __jsx("span", {
    className: "jsx-622709443",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, "PS"), __jsx("span", {
    className: "jsx-622709443",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, "+5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "622709443",
    __self: _this
  }, ".jsx-622709443{display:inline-block;width:100%;text-align:center;font-size:5rem;font-weight:500;}.countdown-controls.jsx-622709443{height:50px;width:100%;border-radius:100px;background:white;}.countdown-controls.jsx-622709443 span.jsx-622709443{font-size:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRXdCLEFBRXNDLEFBTUwsQUFNRyxZQUxKLEdBTWYsTUFaVyxFQU9hLFNBTk4sV0FPRyxPQU5OLFVBT2YsS0FOZ0IsZ0JBVXBCIiwiZmlsZSI6Ii9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VJbnRlcnZhbCBmcm9tICcuLy4uL3Rvb2xzL3VzZUludGVydmFsJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ291bnRkb3duID0gcHJvcHMgPT4ge1xuICAgIFxuICAgIGNvbnN0IFsgaXNUaW1lVXAsIHNldElzVGltZVVwIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyBpc1RpbWVyUnVubmluZywgc2V0SXNUaW1lclJ1bm5pbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbIHRpbWVSZW1haW5pbmcsIHNldFRpbWVSZW1haW5pbmcgXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgbWludXRlczogMjUsXG4gICAgICAgIHNlY29uZHM6IDBcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZ2dsZVRpbWVyU3RhdGUgPSAoKSA9PiB7XG4gICAgICAgIHNldElzVGltZXJSdW5uaW5nKCFpc1RpbWVyUnVubmluZyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmV0dXJuTmV4dFRpbWUgPSBwcmV2aW91c1RpbWUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcmV2aW91c1RpbWUpXG4gICAgICAgIGxldCBuZXdNaW51dGVzLCBuZXdTZWNvbmRzO1xuICAgICAgICBuZXdNaW51dGVzID0gcHJldmlvdXNUaW1lLnNlY29uZHMgPT09IDAgP1xuICAgICAgICAgICAgLS1wcmV2aW91c1RpbWUubWludXRlcyA6XG4gICAgICAgICAgICBwcmV2aW91c1RpbWUubWludXRlcztcbiAgICAgICAgbmV3U2Vjb25kcyA9IHByZXZpb3VzVGltZS5zZWNvbmRzID09PSAwID9cbiAgICAgICAgICAgIDU5IDpcbiAgICAgICAgICAgIC0tcHJldmlvdXNUaW1lLnNlY29uZHM7XG4gICAgICAgIGlmIChuZXdNaW51dGVzID09PSAwICYmIG5ld1NlY29uZHMgPT09IDApIHtcbiAgICAgICAgICAgIHNldElzVGltZXJSdW5uaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIHNldElzVGltZVVwKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBuZXdNaW51dGVzLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IG5ld1NlY29uZHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWludXRlczogbmV3TWludXRlcyxcbiAgICAgICAgICAgIHNlY29uZHM6IG5ld1NlY29uZHNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc1RpbWVVcCkge1xuICAgICAgICAgICAgYWxlcnQoJ1RpbWUgdXAgYmFieSEnKTtcbiAgICAgICAgfVxuICAgIH0sWyBpc1RpbWVVcCBdKVxuICAgICAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgdGltZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIGlmIChpc1RpbWVyUnVubmluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVyIHJ1bm5pbmcnKTtcbiAgICAgICAgICAgIHRpbWVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpY2suLi4nKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHJldHVybk5leHRUaW1lKHRpbWVSZW1haW5pbmcpKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVyIHN0b3BwZWQnKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xuICAgIH0sWyBpc1RpbWVyUnVubmluZywgdGltZVJlbWFpbmluZyBdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50ZG93blwiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVRpbWVyU3RhdGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RpbWVSZW1haW5pbmcubWludXRlcyA8IDEwID9cbiAgICAgICAgICAgICAgICAgICAgJzAnICsgdGltZVJlbWFpbmluZy5taW51dGVzIDpcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlbWFpbmluZy5taW51dGVzXG4gICAgICAgICAgICAgICAgfTp7dGltZVJlbWFpbmluZy5zZWNvbmRzIDwgMTAgP1xuICAgICAgICAgICAgICAgICAgICAnMCcgKyB0aW1lUmVtYWluaW5nLnNlY29uZHMgOlxuICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLnNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4tNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QTDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5QUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3Bhbj4rNTwvc3Bhbj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIC5jb3VudGRvd24tY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3VudGRvd24tY29udHJvbHMgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duOyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.7f90a1f7b1c4b6422eda.hot-update.js.map