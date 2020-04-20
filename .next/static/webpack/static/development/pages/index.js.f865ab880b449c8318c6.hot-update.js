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

      if (seconds == 0) {
        setTimeRemaining(function () {
          return {
            seconds: 59,
            minutes: --minutes
          };
        });
      } else if (seconds == 0 && minutes == 0) {
        console.log('Time\'s up!');
      } else {
        setTimeRemaining(function () {
          return {
            seconds: --seconds,
            minutes: minutes
          };
        });
      }
    }, 1000);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(timeRemaining);
  }, [timeRemaining]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    onClick: startTimer,
    className: "jsx-3372631114" + " " + "countdown",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, timeRemaining.minutes, ":", timeRemaining.seconds), __jsx("section", {
    className: "jsx-3372631114" + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3372631114",
    __self: _this
  }, ".jsx-3372631114{display:inline-block;width:100%;text-align:center;font-size:6rem;font-weight:500;}.countdown-controls.jsx-3372631114{height:50px;width:100%;border-radius:100px;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ3dCLEFBRXNDLEFBTUwsWUFDRCxTQU5KLEVBT2EsU0FOTixXQU9HLE9BTk4sVUFPZixLQU5nQixnQkFPcEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvQ291bnRkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ291bnRkb3duID0gcHJvcHMgPT4ge1xuXG4gICAgY29uc3QgWyB0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nIF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1pbnV0ZXM6IDI1LFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGFydFRpbWVyID0gKCkgPT4ge1xuICAgICAgICBsZXQgY291bnRlckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgc2Vjb25kcywgbWludXRlcyB9ID0gdGltZVJlbWFpbmluZztcbiAgICAgICAgICAgIGlmIChzZWNvbmRzID09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lUmVtYWluaW5nKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHM6IDU5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlczogLS1taW51dGVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZWNvbmRzID09IDAgJiYgbWludXRlcyA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVcXCdzIHVwIScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lUmVtYWluaW5nKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHM6IC0tc2Vjb25kcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXM6IG1pbnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG4gICAgfTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRpbWVSZW1haW5pbmcpO1xuICAgIH0sW3RpbWVSZW1haW5pbmddKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvdW50ZG93blwiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0VGltZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RpbWVSZW1haW5pbmcubWludXRlc306e3RpbWVSZW1haW5pbmcuc2Vjb25kc31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvdW50ZG93bi1jb250cm9sc1wiPlxuXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAuY291bnRkb3duLWNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.f865ab880b449c8318c6.hot-update.js.map