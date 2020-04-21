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

  var changeMinutes = function changeMinutes(change) {
    if (timeRemaining.minutes < 95) {
      setTimeRemaining({
        minutes: timeRemaining.minutes += change,
        seconds: timeRemaining.seconds
      });
    }
  };

  var resetTimer = function resetTimer() {
    var resetTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      minutes: 25,
      seconds: 0
    };
    setIsTimerRunning(false);
    setTimeRemaining({
      minutes: resetTime.minutes,
      seconds: resetTime.seconds
    });
  };

  var isTimeZero = function isTimeZero(timeRemaining) {
    var minutes = timeRemaining.minutes,
        seconds = timeRemaining.seconds;

    if (minutes == 0 && seconds == 0) {
      return true;
    } else {
      return false;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + ((isTimerRunning ? 'countdown timer-running' : 'countdown') || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, timeRemaining.minutes < 10 ? '0' + timeRemaining.minutes : timeRemaining.minutes, ":", timeRemaining.seconds < 10 ? '0' + timeRemaining.seconds : timeRemaining.seconds), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("span", {
    title: "Remove 5 minutes",
    onClick: function onClick() {
      return changeMinutes(-5);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + ((isTimeZero(timeRemaining) ? 'disabled change-minutes-button' : 'change-minutes-button') || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, "-5"), __jsx("span", {
    title: "Play/resume countdown",
    onClick: function onClick() {
      setIsTimerRunning(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "control-button ".concat(isTimerRunning ? "disabled" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-play.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Reset countdown",
    onClick: function onClick() {
      resetTimer();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "control-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-reset.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Pause countdown",
    onClick: function onClick() {
      setIsTimerRunning(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "control-button ".concat(!isTimerRunning ? "disabled" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-pause.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Add 5 minutes",
    onClick: function onClick() {
      return changeMinutes(5);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1385023297", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "change-minutes-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "+5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1385023297",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)],
    __self: _this
  }, "@-webkit-keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.7;}100%{opacity:1;}}@keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.7;}100%{opacity:1;}}.countdown.__jsx-style-dynamic-selector{display:inline-block;width:100%;text-align:center;font-size:6rem;font-weight:500;margin-top:20px;opacity:1;}.countdown.timer-running.__jsx-style-dynamic-selector{-webkit-animation-name:fade-in-out-__jsx-style-dynamic-selector;animation-name:fade-in-out-__jsx-style-dynamic-selector;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forward;animation-fill-mode:forward;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.countdown-controls.__jsx-style-dynamic-selector{height:50px;width:100%;border-radius:100px;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 20px;box-shadow:0px 2px 5px black;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-size:1.5rem;line-height:50px;font-weight:bold;color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6), ";cursor:pointer;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:1.5rem;position:relative;top:5px;}.control-button.__jsx-style-dynamic-selector{-webkit-transition:.2s ease-in-out opacity;transition:.2s ease-in-out opacity;}.control-button.disabled.__jsx-style-dynamic-selector{opacity:.3;pointer-events:none;}.change-minutes-button.__jsx-style-dynamic-selector{opacity:.7;-webkit-transition:.1s ease-in-out opacity;transition:.1s ease-in-out opacity;}.change-minutes-button.__jsx-style-dynamic-selector:hover{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSXdCLEFBR2lDLEFBQ0UsQUFDQSxBQUdPLEFBU00sQUFPZixBQVVLLEFBT0gsQUFLcUIsQUFHeEIsQUFJQSxBQUlELFVBdERHLEFBRUUsQUFxRG5CLENBdERtQixBQThDSyxBQUllLENBN0J4QixFQWlCTyxHQVBELElBMUJOLEVBaUJTLFFBeUJ4QixDQXpDc0IsQUFpQ1YsRUFQUyxNQVFyQixHQWpCcUIsT0FoQkYsQ0EwQm9CLFNBVHRCLEtBaEJHLGFBbUNwQixHQWxDb0IsS0F5QkQsR0FpQm5CLFFBekNjLElBeUJkLE1BeEJBLGFBRzJCLGNBV08sd0NBVlEsMkVBV3ZCLFNBVmEsTUFXQyw2QkFDakMsNkJBWHVDLDhFQUN2QyIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9Db3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi8uLi90b29scy91c2VJbnRlcnZhbCc7XG5pbXBvcnQgeyBnZXRCbGFjaywgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvdW50ZG93biA9IHByb3BzID0+IHtcbiAgICBcbiAgICBjb25zdCBbIGlzVGltZVVwLCBzZXRJc1RpbWVVcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgaXNUaW1lclJ1bm5pbmcsIHNldElzVGltZXJSdW5uaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyB0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nIF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1pbnV0ZXM6IDI1LFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVUaW1lclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1RpbWVyUnVubmluZyghaXNUaW1lclJ1bm5pbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVybk5leHRUaW1lID0gcHJldmlvdXNUaW1lID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJldmlvdXNUaW1lKVxuICAgICAgICBsZXQgbmV3TWludXRlcywgbmV3U2Vjb25kcztcbiAgICAgICAgbmV3TWludXRlcyA9IHByZXZpb3VzVGltZS5zZWNvbmRzID09PSAwID9cbiAgICAgICAgICAgIC0tcHJldmlvdXNUaW1lLm1pbnV0ZXMgOlxuICAgICAgICAgICAgcHJldmlvdXNUaW1lLm1pbnV0ZXM7XG4gICAgICAgIG5ld1NlY29uZHMgPSBwcmV2aW91c1RpbWUuc2Vjb25kcyA9PT0gMCA/XG4gICAgICAgICAgICA1OSA6XG4gICAgICAgICAgICAtLXByZXZpb3VzVGltZS5zZWNvbmRzO1xuICAgICAgICBpZiAobmV3TWludXRlcyA9PT0gMCAmJiBuZXdTZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgICBzZXRJc1RpbWVyUnVubmluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRJc1RpbWVVcCh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWludXRlczogbmV3TWludXRlcyxcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbnV0ZXM6IG5ld01pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNUaW1lVXApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaW1lIHVwIGJhYnkhJyk7XG4gICAgICAgIH1cbiAgICB9LFsgaXNUaW1lVXAgXSlcbiAgICAgICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICBpZiAoaXNUaW1lclJ1bm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lciBydW5uaW5nJyk7XG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaWNrLi4uJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZVJlbWFpbmluZyhyZXR1cm5OZXh0VGltZSh0aW1lUmVtYWluaW5nKSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lciBzdG9wcGVkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICB9LFsgaXNUaW1lclJ1bm5pbmcsIHRpbWVSZW1haW5pbmcgXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VNaW51dGVzID0gY2hhbmdlID0+IHtcbiAgICAgICAgaWYgKHRpbWVSZW1haW5pbmcubWludXRlcyA8IDk1KSB7XG4gICAgICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHtcbiAgICAgICAgICAgICAgICBtaW51dGVzOiB0aW1lUmVtYWluaW5nLm1pbnV0ZXMgKz0gY2hhbmdlLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IHRpbWVSZW1haW5pbmcuc2Vjb25kc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZXNldFRpbWVyID0gKHJlc2V0VGltZSA9IHttaW51dGVzOiAyNSwgc2Vjb25kczogMH0pID0+IHtcbiAgICAgICAgc2V0SXNUaW1lclJ1bm5pbmcoZmFsc2UpO1xuICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHtcbiAgICAgICAgICAgIG1pbnV0ZXM6IHJlc2V0VGltZS5taW51dGVzLFxuICAgICAgICAgICAgc2Vjb25kczogcmVzZXRUaW1lLnNlY29uZHNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBpc1RpbWVaZXJvID0gdGltZVJlbWFpbmluZyA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWludXRlcywgc2Vjb25kcyB9ID0gdGltZVJlbWFpbmluZztcbiAgICAgICAgaWYgKG1pbnV0ZXMgPT0gMCAmJiBzZWNvbmRzID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzVGltZXJSdW5uaW5nID9cbiAgICAgICAgICAgICAgICAgICAgJ2NvdW50ZG93biB0aW1lci1ydW5uaW5nJyA6XG4gICAgICAgICAgICAgICAgICAgICdjb3VudGRvd24nXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICB7dGltZVJlbWFpbmluZy5taW51dGVzIDwgMTAgP1xuICAgICAgICAgICAgICAgICAgICAnMCcgKyB0aW1lUmVtYWluaW5nLm1pbnV0ZXMgOlxuICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLm1pbnV0ZXNcbiAgICAgICAgICAgICAgICB9Ont0aW1lUmVtYWluaW5nLnNlY29uZHMgPCAxMCA/XG4gICAgICAgICAgICAgICAgICAgICcwJyArIHRpbWVSZW1haW5pbmcuc2Vjb25kcyA6XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZW1haW5pbmcuc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvdW50ZG93bi1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNUaW1lWmVybyh0aW1lUmVtYWluaW5nKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Rpc2FibGVkIGNoYW5nZS1taW51dGVzLWJ1dHRvbicgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJ2NoYW5nZS1taW51dGVzLWJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmUgNSBtaW51dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTWludXRlcygtNSl9Pi01PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGxheS9yZXN1bWUgY291bnRkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udHJvbC1idXR0b24gJHtpc1RpbWVyUnVubmluZyA/IGBkaXNhYmxlZGAgOiBgYH1gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0SXNUaW1lclJ1bm5pbmcodHJ1ZSl9fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb24tcGxheS5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVzZXQgY291bnRkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udHJvbC1idXR0b25gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7cmVzZXRUaW1lcigpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29uLXJlc2V0LnBuZ1wiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQYXVzZSBjb3VudGRvd25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb250cm9sLWJ1dHRvbiAkeyFpc1RpbWVyUnVubmluZyA/IGBkaXNhYmxlZGAgOiBgYH1gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c2V0SXNUaW1lclJ1bm5pbmcoZmFsc2UpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29uLXBhdXNlLnBuZ1wiLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hhbmdlLW1pbnV0ZXMtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgNSBtaW51dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTWludXRlcyg1KX0+KzU8L3NwYW4+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlLWluLW91dCB7XG4gICAgICAgICAgICAgICAgICAgIDAlIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgICAgICAgICA1MCUge29wYWNpdHk6IC43fVxuICAgICAgICAgICAgICAgICAgICAxMDAlIHtvcGFjaXR5OiAxfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnRkb3duIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3VudGRvd24udGltZXItcnVubmluZyB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnRkb3duLWNvbnRyb2xzIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKC42KX07XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyBzcGFuIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udHJvbC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRyb2wtYnV0dG9uLmRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2hhbmdlLW1pbnV0ZXMtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4xcyBlYXNlLWluLW91dCBvcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2hhbmdlLW1pbnV0ZXMtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duOyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.072c07e2cbdc5ba933ed.hot-update.js.map