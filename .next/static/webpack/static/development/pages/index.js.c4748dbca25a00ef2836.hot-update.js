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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]) + " " + ((isTimerRunning ? 'countdown timer-running' : 'countdown') || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, timeRemaining.minutes < 10 ? '0' + timeRemaining.minutes : timeRemaining.minutes, ":", timeRemaining.seconds < 10 ? '0' + timeRemaining.seconds : timeRemaining.seconds), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]) + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, __jsx("span", {
    title: "Remove 5 minutes",
    onClick: function onClick() {
      return changeMinutes(-5);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "-5"), __jsx("span", {
    title: "Play/resume countdown",
    onClick: function onClick() {
      setIsTimerRunning(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]) + " " + "control-button ".concat(isTimerRunning ? "disabled" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-play.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Reset countdown",
    onClick: function onClick() {
      resetTimer();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]) + " " + "control-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-reset.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Pause countdown",
    onClick: function onClick() {
      setIsTimerRunning(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]) + " " + "control-button ".concat(!isTimerRunning ? "disabled" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-pause.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Add 5 minutes",
    onClick: function onClick() {
      return changeMinutes(5);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3357865614", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  }, "+5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3357865614",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4)],
    __self: _this
  }, "@-webkit-keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.7;}100%{opacity:1;}}@keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.7;}100%{opacity:1;}}.countdown.__jsx-style-dynamic-selector{display:inline-block;width:100%;text-align:center;font-size:6rem;font-weight:500;margin-top:20px;opacity:1;}.countdown.timer-running.__jsx-style-dynamic-selector{-webkit-animation-name:fade-in-out-__jsx-style-dynamic-selector;animation-name:fade-in-out-__jsx-style-dynamic-selector;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forward;animation-fill-mode:forward;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.countdown-controls.__jsx-style-dynamic-selector{height:50px;width:100%;border-radius:100px;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 20px;box-shadow:0px 2px 5px black;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-size:1.5rem;line-height:50px;font-weight:bold;color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.4), ";cursor:pointer;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:1.5rem;position:relative;top:5px;}.control-button.__jsx-style-dynamic-selector{-webkit-transition:.2s ease-in-out opacity;transition:.2s ease-in-out opacity;}.control-button.disabled.__jsx-style-dynamic-selector{opacity:.5;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSHdCLEFBR2lDLEFBQ0UsQUFDQSxBQUdPLEFBU00sQUFPZixBQVVLLEFBT0gsQUFLcUIsQUFHeEIsVUE5Q0UsQUFFRSxDQURBLEFBOENuQixDQXpCZSxFQWlCTyxHQVBELElBMUJOLEVBaUJTLFNBaEJGLEFBaUNWLEVBUFMsTUFRckIsR0FqQnFCLE9BaEJGLENBMEJvQixTQVR0QixLQWhCRyxhQW1DcEIsR0FsQ29CLEtBeUJELFdBeEJMLElBeUJkLE1BeEJBLGFBRzJCLGNBV08sd0NBVlEsMkVBV3ZCLFNBVmEsTUFXQyw2QkFDakMsNkJBWHVDLDhFQUN2QyIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9Db3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi8uLi90b29scy91c2VJbnRlcnZhbCc7XG5pbXBvcnQgeyBnZXRCbGFjaywgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvdW50ZG93biA9IHByb3BzID0+IHtcbiAgICBcbiAgICBjb25zdCBbIGlzVGltZVVwLCBzZXRJc1RpbWVVcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgaXNUaW1lclJ1bm5pbmcsIHNldElzVGltZXJSdW5uaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyB0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nIF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1pbnV0ZXM6IDI1LFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVUaW1lclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1RpbWVyUnVubmluZyghaXNUaW1lclJ1bm5pbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVybk5leHRUaW1lID0gcHJldmlvdXNUaW1lID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJldmlvdXNUaW1lKVxuICAgICAgICBsZXQgbmV3TWludXRlcywgbmV3U2Vjb25kcztcbiAgICAgICAgbmV3TWludXRlcyA9IHByZXZpb3VzVGltZS5zZWNvbmRzID09PSAwID9cbiAgICAgICAgICAgIC0tcHJldmlvdXNUaW1lLm1pbnV0ZXMgOlxuICAgICAgICAgICAgcHJldmlvdXNUaW1lLm1pbnV0ZXM7XG4gICAgICAgIG5ld1NlY29uZHMgPSBwcmV2aW91c1RpbWUuc2Vjb25kcyA9PT0gMCA/XG4gICAgICAgICAgICA1OSA6XG4gICAgICAgICAgICAtLXByZXZpb3VzVGltZS5zZWNvbmRzO1xuICAgICAgICBpZiAobmV3TWludXRlcyA9PT0gMCAmJiBuZXdTZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgICBzZXRJc1RpbWVyUnVubmluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRJc1RpbWVVcCh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWludXRlczogbmV3TWludXRlcyxcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbnV0ZXM6IG5ld01pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNUaW1lVXApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaW1lIHVwIGJhYnkhJyk7XG4gICAgICAgIH1cbiAgICB9LFsgaXNUaW1lVXAgXSlcbiAgICAgICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICBpZiAoaXNUaW1lclJ1bm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lciBydW5uaW5nJyk7XG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaWNrLi4uJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZVJlbWFpbmluZyhyZXR1cm5OZXh0VGltZSh0aW1lUmVtYWluaW5nKSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaW1lciBzdG9wcGVkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICB9LFsgaXNUaW1lclJ1bm5pbmcsIHRpbWVSZW1haW5pbmcgXSlcblxuICAgIGNvbnN0IGNoYW5nZU1pbnV0ZXMgPSBjaGFuZ2UgPT4ge1xuICAgICAgICBpZiAodGltZVJlbWFpbmluZy5taW51dGVzIDwgOTUpIHtcbiAgICAgICAgICAgIHNldFRpbWVSZW1haW5pbmcoe1xuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IHRpbWVSZW1haW5pbmcubWludXRlcyArPSBjaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2Vjb25kczogdGltZVJlbWFpbmluZy5zZWNvbmRzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0VGltZXIgPSAocmVzZXRUaW1lID0ge21pbnV0ZXM6IDI1LCBzZWNvbmRzOiAwfSkgPT4ge1xuICAgICAgICBzZXRJc1RpbWVyUnVubmluZyhmYWxzZSk7XG4gICAgICAgIHNldFRpbWVSZW1haW5pbmcoe1xuICAgICAgICAgICAgbWludXRlczogcmVzZXRUaW1lLm1pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiByZXNldFRpbWUuc2Vjb25kc1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2lzVGltZXJSdW5uaW5nID9cbiAgICAgICAgICAgICAgICAgICAgJ2NvdW50ZG93biB0aW1lci1ydW5uaW5nJyA6XG4gICAgICAgICAgICAgICAgICAgICdjb3VudGRvd24nXG4gICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICB7dGltZVJlbWFpbmluZy5taW51dGVzIDwgMTAgP1xuICAgICAgICAgICAgICAgICAgICAnMCcgKyB0aW1lUmVtYWluaW5nLm1pbnV0ZXMgOlxuICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLm1pbnV0ZXNcbiAgICAgICAgICAgICAgICB9Ont0aW1lUmVtYWluaW5nLnNlY29uZHMgPCAxMCA/XG4gICAgICAgICAgICAgICAgICAgICcwJyArIHRpbWVSZW1haW5pbmcuc2Vjb25kcyA6XG4gICAgICAgICAgICAgICAgICAgIHRpbWVSZW1haW5pbmcuc2Vjb25kc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvdW50ZG93bi1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIDUgbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1pbnV0ZXMoLTUpfT4tNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsYXkvcmVzdW1lIGNvdW50ZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRyb2wtYnV0dG9uICR7aXNUaW1lclJ1bm5pbmcgPyBgZGlzYWJsZWRgIDogYGB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldElzVGltZXJSdW5uaW5nKHRydWUpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29uLXBsYXkucG5nXCIvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlc2V0IGNvdW50ZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRyb2wtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3Jlc2V0VGltZXIoKX19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbi1yZXNldC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGF1c2UgY291bnRkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udHJvbC1idXR0b24gJHshaXNUaW1lclJ1bm5pbmcgPyBgZGlzYWJsZWRgIDogYGB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldElzVGltZXJSdW5uaW5nKGZhbHNlKX19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbi1wYXVzZS5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIDUgbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1pbnV0ZXMoNSl9Pis1PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbi1vdXQge1xuICAgICAgICAgICAgICAgICAgICAwJSB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgICAgICAgNTAlIHtvcGFjaXR5OiAuN31cbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93biB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnRkb3duLnRpbWVyLXJ1bm5pbmcge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjVzO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZDtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3VudGRvd24tY29udHJvbHMge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDVweCBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgIFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtnZXRCbGFjayguNCl9O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3VudGRvd24tY29udHJvbHMgc3BhbiBpbWcge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRyb2wtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb250cm9sLWJ1dHRvbi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ })

})
//# sourceMappingURL=index.js.c4748dbca25a00ef2836.hot-update.js.map