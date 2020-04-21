(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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
    // console.log(previousTime)
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
      // console.log('Timer running');
      timerInterval = setInterval(function () {
        // console.log('Tick...');
        setTimeRemaining(returnNextTime(timeRemaining));
      }, 1000);
    } else {// console.log('Timer stopped')
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
        seconds = timeRemaining.seconds; // console.log(minutes, seconds);

    if (minutes == 0 && seconds == 0) {
      return true;
    } else {
      return false;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + ((isTimerRunning ? 'countdown timer-running' : 'countdown') || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, timeRemaining.minutes < 10 ? '0' + timeRemaining.minutes : timeRemaining.minutes, ":", timeRemaining.seconds < 10 ? '0' + timeRemaining.seconds : timeRemaining.seconds), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "countdown-controls",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("span", {
    title: "Remove 5 minutes",
    onClick: function onClick() {
      return changeMinutes(-5);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + ((isTimeZero(timeRemaining) ? 'disabled change-minutes-button' : 'change-minutes-button') || ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, "-5"), __jsx("span", {
    title: "Play/resume countdown",
    onClick: function onClick() {
      setIsTimerRunning(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "control-button ".concat(isTimerRunning ? "disabled" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-play.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Reset countdown",
    onClick: function onClick() {
      resetTimer();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "control-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-reset.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Pause countdown",
    onClick: function onClick() {
      setIsTimerRunning(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "control-button ".concat(!isTimerRunning ? "disabled" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-pause.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Add 5 minutes",
    onClick: function onClick() {
      return changeMinutes(5);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "change-minutes-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "+5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2181854410",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)],
    __self: _this
  }, "@-webkit-keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.5;}100%{opacity:1;}}@keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.5;}100%{opacity:1;}}.countdown.__jsx-style-dynamic-selector{display:inline-block;width:100%;text-align:center;font-size:6rem;font-weight:500;margin-top:20px;opacity:1;}.countdown.timer-running.__jsx-style-dynamic-selector{-webkit-animation-name:fade-in-out-__jsx-style-dynamic-selector;animation-name:fade-in-out-__jsx-style-dynamic-selector;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forward;animation-fill-mode:forward;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.countdown-controls.__jsx-style-dynamic-selector{height:50px;width:100%;border-radius:100px;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 20px;box-shadow:0px 2px 5px black;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-size:1.5rem;line-height:50px;font-weight:bold;color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6), ";cursor:pointer;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:1.5rem;position:relative;top:5px;}.control-button.__jsx-style-dynamic-selector{-webkit-transition:.2s ease-in-out opacity;transition:.2s ease-in-out opacity;}.control-button.disabled.__jsx-style-dynamic-selector,.change-minutes-button.disabled.__jsx-style-dynamic-selector{opacity:.3;pointer-events:none;}.change-minutes-button.__jsx-style-dynamic-selector{opacity:.7;-webkit-transition:.1s ease-in-out opacity;transition:.1s ease-in-out opacity;}.change-minutes-button.__jsx-style-dynamic-selector:hover{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSXdCLEFBR2lDLEFBQ0UsQUFDQSxBQUdPLEFBU00sQUFPZixBQVVLLEFBT0gsQUFLcUIsQUFJeEIsQUFJQSxBQUlELFVBdkRHLEFBRUUsQUFzRG5CLENBdkRtQixBQStDSyxBQUllLENBOUJ4QixFQWlCTyxHQVBELElBMUJOLEVBaUJTLFFBMEJ4QixDQTFDc0IsQUFpQ1YsRUFQUyxNQVFyQixHQWpCcUIsT0FoQkYsQ0EwQm9CLFNBVHRCLEtBaEJHLGFBbUNwQixHQWxDb0IsS0F5QkQsR0FrQm5CLFFBMUNjLElBeUJkLE1BeEJBLGFBRzBCLGNBV1Esc0NBVlEsNkVBV3ZCLE9BVmEsUUFXQyw2QkFDakMsMkJBWHVDLDhFQUN2QyIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9Db3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi8uLi90b29scy91c2VJbnRlcnZhbCc7XG5pbXBvcnQgeyBnZXRCbGFjaywgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvdW50ZG93biA9IHByb3BzID0+IHtcbiAgICBcbiAgICBjb25zdCBbIGlzVGltZVVwLCBzZXRJc1RpbWVVcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgaXNUaW1lclJ1bm5pbmcsIHNldElzVGltZXJSdW5uaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyB0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nIF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1pbnV0ZXM6IDI1LFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVUaW1lclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1RpbWVyUnVubmluZyghaXNUaW1lclJ1bm5pbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVybk5leHRUaW1lID0gcHJldmlvdXNUaW1lID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJldmlvdXNUaW1lKVxuICAgICAgICBsZXQgbmV3TWludXRlcywgbmV3U2Vjb25kcztcbiAgICAgICAgbmV3TWludXRlcyA9IHByZXZpb3VzVGltZS5zZWNvbmRzID09PSAwID9cbiAgICAgICAgICAgIC0tcHJldmlvdXNUaW1lLm1pbnV0ZXMgOlxuICAgICAgICAgICAgcHJldmlvdXNUaW1lLm1pbnV0ZXM7XG4gICAgICAgIG5ld1NlY29uZHMgPSBwcmV2aW91c1RpbWUuc2Vjb25kcyA9PT0gMCA/XG4gICAgICAgICAgICA1OSA6XG4gICAgICAgICAgICAtLXByZXZpb3VzVGltZS5zZWNvbmRzO1xuICAgICAgICBpZiAobmV3TWludXRlcyA9PT0gMCAmJiBuZXdTZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgICBzZXRJc1RpbWVyUnVubmluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRJc1RpbWVVcCh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWludXRlczogbmV3TWludXRlcyxcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbnV0ZXM6IG5ld01pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNUaW1lVXApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaW1lIHVwIGJhYnkhJyk7XG4gICAgICAgIH1cbiAgICB9LFsgaXNUaW1lVXAgXSlcbiAgICAgICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICBpZiAoaXNUaW1lclJ1bm5pbmcpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaW1lciBydW5uaW5nJyk7XG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaWNrLi4uJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZVJlbWFpbmluZyhyZXR1cm5OZXh0VGltZSh0aW1lUmVtYWluaW5nKSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaW1lciBzdG9wcGVkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICB9LFsgaXNUaW1lclJ1bm5pbmcsIHRpbWVSZW1haW5pbmcgXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VNaW51dGVzID0gY2hhbmdlID0+IHtcbiAgICAgICAgaWYgKHRpbWVSZW1haW5pbmcubWludXRlcyA8IDk1KSB7XG4gICAgICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHtcbiAgICAgICAgICAgICAgICBtaW51dGVzOiB0aW1lUmVtYWluaW5nLm1pbnV0ZXMgKz0gY2hhbmdlLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IHRpbWVSZW1haW5pbmcuc2Vjb25kc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZXNldFRpbWVyID0gKHJlc2V0VGltZSA9IHttaW51dGVzOiAyNSwgc2Vjb25kczogMH0pID0+IHtcbiAgICAgICAgc2V0SXNUaW1lclJ1bm5pbmcoZmFsc2UpO1xuICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHtcbiAgICAgICAgICAgIG1pbnV0ZXM6IHJlc2V0VGltZS5taW51dGVzLFxuICAgICAgICAgICAgc2Vjb25kczogcmVzZXRUaW1lLnNlY29uZHNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBpc1RpbWVaZXJvID0gdGltZVJlbWFpbmluZyA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWludXRlcywgc2Vjb25kcyB9ID0gdGltZVJlbWFpbmluZztcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWludXRlcywgc2Vjb25kcyk7XG4gICAgICAgIGlmIChtaW51dGVzID09IDAgJiYgc2Vjb25kcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc1RpbWVyUnVubmluZyA/XG4gICAgICAgICAgICAgICAgICAgICdjb3VudGRvd24gdGltZXItcnVubmluZycgOlxuICAgICAgICAgICAgICAgICAgICAnY291bnRkb3duJ1xuICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAge3RpbWVSZW1haW5pbmcubWludXRlcyA8IDEwID9cbiAgICAgICAgICAgICAgICAgICAgJzAnICsgdGltZVJlbWFpbmluZy5taW51dGVzIDpcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlbWFpbmluZy5taW51dGVzXG4gICAgICAgICAgICAgICAgfTp7dGltZVJlbWFpbmluZy5zZWNvbmRzIDwgMTAgP1xuICAgICAgICAgICAgICAgICAgICAnMCcgKyB0aW1lUmVtYWluaW5nLnNlY29uZHMgOlxuICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLnNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzVGltZVplcm8odGltZVJlbWFpbmluZykgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXNhYmxlZCBjaGFuZ2UtbWludXRlcy1idXR0b24nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2UtbWludXRlcy1idXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIDUgbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1pbnV0ZXMoLTUpfT4tNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsYXkvcmVzdW1lIGNvdW50ZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRyb2wtYnV0dG9uICR7aXNUaW1lclJ1bm5pbmcgPyBgZGlzYWJsZWRgIDogYGB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldElzVGltZXJSdW5uaW5nKHRydWUpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29uLXBsYXkucG5nXCIvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlc2V0IGNvdW50ZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRyb2wtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3Jlc2V0VGltZXIoKX19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbi1yZXNldC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGF1c2UgY291bnRkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udHJvbC1idXR0b24gJHshaXNUaW1lclJ1bm5pbmcgPyBgZGlzYWJsZWRgIDogYGB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldElzVGltZXJSdW5uaW5nKGZhbHNlKX19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbi1wYXVzZS5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZS1taW51dGVzLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIDUgbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1pbnV0ZXMoNSl9Pis1PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbi1vdXQge1xuICAgICAgICAgICAgICAgICAgICAwJSB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgICAgICAgNTAlIHtvcGFjaXR5OiAuNX1cbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93biB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnRkb3duLnRpbWVyLXJ1bm5pbmcge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnRkb3duLWNvbnRyb2xzIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKC42KX07XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyBzcGFuIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udHJvbC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRyb2wtYnV0dG9uLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIC5jaGFuZ2UtbWludXRlcy1idXR0b24uZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMztcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jaGFuZ2UtbWludXRlcy1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjFzIGVhc2UtaW4tb3V0IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jaGFuZ2UtbWludXRlcy1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Countdown);

/***/ }),

/***/ "./components/DetailsPanel.js":
/*!************************************!*\
  !*** ./components/DetailsPanel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var DetailsPanel = function DetailsPanel(props) {
  var userData = props.userData;
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var today = new Date();

  var turnDaysIntoArray = function turnDaysIntoArray(month) {
    var days = [];
    var totalDays = daysInMonth(month, today.getFullYear());

    for (var i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  var daysInMonth = function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  };

  var formatDate = function formatDate(date) {
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var weekday = date.getDay();
    return "".concat(weekdays[weekday], " ").concat(day, " ").concat(months[month], " ").concat(year);
  };

  var isFutureMonth = function isFutureMonth(year, month, day) {
    var givenDate = new Date(year, month, day);
    var isFutureMonth = givenDate > today ? true : false;
    return isFutureMonth;
  };

  var isDayEmpty = function isDayEmpty(year, month, day) {
    var givenDate = new Date(year, month, day);
    var userTaskHistory = userData.user_history;

    if (userTaskHistory) {
      userTaskHistory.forEach(function (task) {
        var taskDate = new Date(task.date.year, task.date.month, task.date.day);

        if (taskDate.getTime() == givenDate.getTime()) {
          console.log(givenDate + ' is not empty');
          return false;
        } else {
          console.log('Is empty');
          return true;
        }
      });
    }
  };

  var FutureDay = function FutureDay() {
    return __jsx("img", {
      src: "/img/icon-day-indicator-disabled.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    });
  };

  var DayIndicator = function DayIndicator(props) {
    var completed = props.completed;
    return completed > 75 ? __jsx("img", {
      src: "/img/icon-day-indicator-100.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }) : completed == 0 ? __jsx("img", {
      src: "/img/icon-day-indicator-empty.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }) : '';
  };

  return __jsx("section", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "details-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "dropdown-title-selector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Year"), __jsx("section", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "months-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, months.map(function (month, monthIndex) {
    return __jsx("section", {
      key: monthIndex,
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + ((monthIndex > today.getMonth() ? 'month following-month' : 'month') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "month-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }, month), __jsx("section", {
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-progress-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 29
      }
    }, turnDaysIntoArray(monthIndex).map(function (day) {
      return __jsx("section", {
        title: formatDate(new Date(today.getFullYear(), monthIndex, day)),
        className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-indicator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 41
        }
      }, isFutureMonth(today.getFullYear(), monthIndex, day) ? __jsx(FutureDay, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 53
        }
      }) : !isDayEmpty(today.getFullYear(), monthIndex, day) ? __jsx(DayIndicator, {
        completed: 0,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 57
        }
      }) : __jsx(DayIndicator, {
        completed: 100,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 57
        }
      }));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4104692347",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)],
    __self: _this
  }, ".details-panel.__jsx-style-dynamic-selector{padding:20px;background:white;grid-area:details;border-radius:10px;position:relative;}.details-panel.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;background:white;height:30px;opacity:1;bottom:10px;left:0;background:linear-gradient(rgba(0,0,0,0),white);z-index:1;}.details-panel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), ";}.months-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto;height:95%;padding-right:15px;margin-top:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar{background:white;border:0;width:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background:lightgray;border-radius:10px;}.month.__jsx-style-dynamic-selector{width:47%;margin-bottom:20px;}.month.__jsx-style-dynamic-selector .month-name.__jsx-style-dynamic-selector{font-weight:500;color:").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), ";padding-bottom:3px;border-bottom:1px solid ").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1), ";margin-bottom:10px;font-size:.8rem;}.month.following-month.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{opacity:.3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySHdCLEFBR2tDLEFBT0YsQUFZd0IsQUFHdEIsQUFTSSxBQUtJLEFBSVgsQUFJTSxBQVFMLFVBWFEsQ0FqQ0QsQUE2Q3RCLEVBcERxQixHQTRDa0IsQ0FiMUIsSUFLVSxLQUpULEdBeEJDLEFBaUNmLENBeENzQixLQWtCdEIsQ0FjQSxJQXhCcUIsQUE0QnJCLFFBbkN1QixHQTJDQSxNQW5DUCxVQVBNLEVBUVIsQ0FtQzJDLElBeEJ2QixLQVZsQixNQVJoQixNQVNXLE9BQzBDLHlCQWlDOUIsbUJBQ0gsSUFqQ04sVUFDZCxFQWlDQSwrQkExQm1CLHlEQUNDLGdCQUNMLFdBQ1EsbUJBQ0osZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxhY2ssIGdldFBhbGxldGUgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5cbmNvbnN0IERldGFpbHNQYW5lbCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgICdKYW51YXJ5JyxcbiAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgICAgJ01vbmRheScsXG4gICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICdGcmlkYXknLFxuICAgICAgICAnU2F0dXJkYXknLFxuICAgICAgICAnU3VuZGF5J1xuICAgIF1cblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHR1cm5EYXlzSW50b0FycmF5ID0gKG1vbnRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY29uc3QgdG90YWxEYXlzID0gZGF5c0luTW9udGgobW9udGgsIHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbERheXM7IGkrKykge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSBkYXRlID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBgJHt3ZWVrZGF5c1t3ZWVrZGF5XX0gJHtkYXl9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGdXR1cmVNb250aCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IGlzRnV0dXJlTW9udGggPSBnaXZlbkRhdGUgPiB0b2RheSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzRnV0dXJlTW9udGg7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEYXlFbXB0eSA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IHVzZXJUYXNrSGlzdG9yeSA9IHVzZXJEYXRhLnVzZXJfaGlzdG9yeTtcbiAgICAgICAgaWYgKHVzZXJUYXNrSGlzdG9yeSkge1xuICAgICAgICAgICAgdXNlclRhc2tIaXN0b3J5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlLnllYXIsIHRhc2suZGF0ZS5tb250aCwgdGFzay5kYXRlLmRheSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tEYXRlLmdldFRpbWUoKSA9PSBnaXZlbkRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdpdmVuRGF0ZSArICcgaXMgbm90IGVtcHR5JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJcyBlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRnV0dXJlRGF5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWRpc2FibGVkLnBuZycvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgRGF5SW5kaWNhdG9yID0gKHByb3BzKSA9PiB7XG4gICAgICAgIGxldCBjb21wbGV0ZWQgPSBwcm9wcy5jb21wbGV0ZWQ7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQgPiA3NSA/XG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItMTAwLnBuZycgLz4gOlxuICAgICAgICAgICAgY29tcGxldGVkID09IDAgP1xuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWVtcHR5LnBuZycgLz4gOlxuICAgICAgICAgICAgJydcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLXBhbmVsXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdGl0bGUtc2VsZWN0b3JcIj5ZZWFyPC9oMj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vbnRocy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9udGhJbmRleCA+IHRvZGF5LmdldE1vbnRoKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGggZm9sbG93aW5nLW1vbnRoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtb250aCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttb250aEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibW9udGgtbmFtZVwiPnttb250aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRheS1wcm9ncmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R1cm5EYXlzSW50b0FycmF5KG1vbnRoSW5kZXgpLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Zm9ybWF0RGF0ZShuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aEluZGV4LCBkYXkpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5LWluZGljYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRnV0dXJlTW9udGgodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZ1dHVyZURheSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRGF5RW1wdHkodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5SW5kaWNhdG9yIGNvbXBsZXRlZD17MH0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5SW5kaWNhdG9yIGNvbXBsZXRlZD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKDAuOCl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NyU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCAubW9udGgtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKC41KX07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2dldEJsYWNrKC4xKX07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aC5mb2xsb3dpbmctbW9udGggaDMge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIC5kYXktcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgN2ZyKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcm93LWdhcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciAuZGF5LWluZGljYXRvciBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhbmVsOyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3025927470",
    __self: _this
  }, ".day-progress-container{display:grid;grid-template-columns:repeat(7,7fr);grid-template-rows:repeat(5,auto);-webkit-column-gap:3px;column-gap:3px;row-gap:5px;}.day-progress-container .day-indicator img{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTCtCLEFBR2tDLEFBT0YsV0FDZixFQVB5QyxvQ0FDRixrQ0FDcEIsc0NBQ0gsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxhY2ssIGdldFBhbGxldGUgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5cbmNvbnN0IERldGFpbHNQYW5lbCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgICdKYW51YXJ5JyxcbiAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgICAgJ01vbmRheScsXG4gICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICdGcmlkYXknLFxuICAgICAgICAnU2F0dXJkYXknLFxuICAgICAgICAnU3VuZGF5J1xuICAgIF1cblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHR1cm5EYXlzSW50b0FycmF5ID0gKG1vbnRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY29uc3QgdG90YWxEYXlzID0gZGF5c0luTW9udGgobW9udGgsIHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbERheXM7IGkrKykge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSBkYXRlID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBgJHt3ZWVrZGF5c1t3ZWVrZGF5XX0gJHtkYXl9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGdXR1cmVNb250aCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IGlzRnV0dXJlTW9udGggPSBnaXZlbkRhdGUgPiB0b2RheSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzRnV0dXJlTW9udGg7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEYXlFbXB0eSA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IHVzZXJUYXNrSGlzdG9yeSA9IHVzZXJEYXRhLnVzZXJfaGlzdG9yeTtcbiAgICAgICAgaWYgKHVzZXJUYXNrSGlzdG9yeSkge1xuICAgICAgICAgICAgdXNlclRhc2tIaXN0b3J5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlLnllYXIsIHRhc2suZGF0ZS5tb250aCwgdGFzay5kYXRlLmRheSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tEYXRlLmdldFRpbWUoKSA9PSBnaXZlbkRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdpdmVuRGF0ZSArICcgaXMgbm90IGVtcHR5JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJcyBlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRnV0dXJlRGF5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWRpc2FibGVkLnBuZycvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgRGF5SW5kaWNhdG9yID0gKHByb3BzKSA9PiB7XG4gICAgICAgIGxldCBjb21wbGV0ZWQgPSBwcm9wcy5jb21wbGV0ZWQ7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQgPiA3NSA/XG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItMTAwLnBuZycgLz4gOlxuICAgICAgICAgICAgY29tcGxldGVkID09IDAgP1xuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWVtcHR5LnBuZycgLz4gOlxuICAgICAgICAgICAgJydcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLXBhbmVsXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdGl0bGUtc2VsZWN0b3JcIj5ZZWFyPC9oMj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vbnRocy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9udGhJbmRleCA+IHRvZGF5LmdldE1vbnRoKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGggZm9sbG93aW5nLW1vbnRoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtb250aCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttb250aEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibW9udGgtbmFtZVwiPnttb250aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRheS1wcm9ncmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R1cm5EYXlzSW50b0FycmF5KG1vbnRoSW5kZXgpLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Zm9ybWF0RGF0ZShuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aEluZGV4LCBkYXkpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5LWluZGljYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRnV0dXJlTW9udGgodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZ1dHVyZURheSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRGF5RW1wdHkodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5SW5kaWNhdG9yIGNvbXBsZXRlZD17MH0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5SW5kaWNhdG9yIGNvbXBsZXRlZD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKDAuOCl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NyU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCAubW9udGgtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKC41KX07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2dldEJsYWNrKC4xKX07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aC5mb2xsb3dpbmctbW9udGggaDMge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIC5kYXktcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgN2ZyKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcm93LWdhcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciAuZGF5LWluZGljYXRvciBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhbmVsOyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsPanel);

/***/ }),

/***/ "./components/Log.js":
/*!***************************!*\
  !*** ./components/Log.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Log.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var Log = function Log(props) {
  return __jsx("section", {
    className: "jsx-1286230987" + " " + "log",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "jsx-1286230987" + " " + "log-title-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1286230987",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, "My Log"), __jsx("section", {
    className: "jsx-1286230987" + " " + "date-navigator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-1286230987" + " " + "date-navigator-arrow previous-date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, "<"), __jsx("span", {
    className: "jsx-1286230987" + " " + "current-date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, "Today"), __jsx("span", {
    className: "jsx-1286230987" + " " + "date-navigator-arrow next-date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, ">"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1286230987",
    __self: _this
  }, ".log.jsx-1286230987{margin-top:20px;}.log.jsx-1286230987 .log-title-bar.jsx-1286230987{border-bottom:1px solid rgba(255,255,255,.2);padding-bottom:3px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.log-title-bar.jsx-1286230987 h2.jsx-1286230987{font-size:.8rem;font-weight:normal;}.date-navigator.jsx-1286230987 span.jsx-1286230987{font-size:.8rem;}.date-navigator.jsx-1286230987 .current-date.jsx-1286230987{margin:0 5px;}.date-navigator.jsx-1286230987 .date-navigator-arrow.jsx-1286230987{opacity:.6;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0xvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXd0IsQUFHcUMsQUFHNkIsQUFNN0IsQUFJQSxBQUdILEFBR0YsV0FDSSxFQUhuQixHQWhCQSxBQVN1QixBQUl2QixVQU9BLFNBVkEsVUFQdUIsbUJBQ04sMEVBQ2lCLG1IQUNsQyIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9Mb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMb2cgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJsb2dcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxvZy10aXRsZS1iYXJcIj5cbiAgICAgICAgICAgICAgICA8aDI+TXkgTG9nPC9oMj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkYXRlLW5hdmlnYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlLW5hdmlnYXRvci1hcnJvdyBwcmV2aW91cy1kYXRlXCI+Jmx0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY3VycmVudC1kYXRlXCI+VG9kYXk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRhdGUtbmF2aWdhdG9yLWFycm93IG5leHQtZGF0ZVwiPiZndDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5sb2cge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9nIC5sb2ctdGl0bGUtYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsLjIpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2ctdGl0bGUtYmFyIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRhdGUtbmF2aWdhdG9yIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF0ZS1uYXZpZ2F0b3IgLmN1cnJlbnQtZGF0ZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kYXRlLW5hdmlnYXRvciAuZGF0ZS1uYXZpZ2F0b3ItYXJyb3cge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZzsiXX0= */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Log.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Log);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Navbar.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Navbar = function Navbar(props) {
  var getUserName = function getUserName(name) {
    if (name) {
      return "".concat(name.fname, " ").concat(name.lname);
    }
  };

  return __jsx("section", {
    className: "jsx-1185798982" + " " + "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "jsx-1185798982" + " " + "navbar-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-1185798982",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Progress Tracker"), __jsx("span", {
    className: "jsx-1185798982" + " " + "user-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, getUserName(props.userName))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1185798982",
    __self: _this
  }, ".navbar-container.jsx-1185798982{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:20px 15vw 10px;}.navbar-container.jsx-1185798982 *.jsx-1185798982{font-size:1.3rem;font-weight:500;}@media screen and (max-width:720px){.navbar-container.jsx-1185798982{margin:0 auto;padding:20px 30px 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL05hdmJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQndCLEFBR2tDLEFBS0ksQUFLQyxjQUNTLEdBTFgsZ0JBQ3BCLElBS0kscUNBWDhCLG1IQUNQLHVCQUMzQiIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcblxuICAgIGNvbnN0IGdldFVzZXJOYW1lID0gbmFtZSA9PiB7XG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7bmFtZS5mbmFtZX0gJHtuYW1lLmxuYW1lfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm5hdmJhci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDE+UHJvZ3Jlc3MgVHJhY2tlcjwvaDE+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlci1uYW1lXCI+e2dldFVzZXJOYW1lKHByb3BzLnVzZXJOYW1lKX08L3NwYW4+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm5hdmJhci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMTV2dyAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubmF2YmFyLWNvbnRhaW5lciAqIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/TaskPanel.js":
/*!*********************************!*\
  !*** ./components/TaskPanel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TaskPanel.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var TaskPanel = function TaskPanel(props) {
  var getSelectedTask = function getSelectedTask(taskId) {
    var userTasks = props.userTasks;
    var selectedTask = null;
    userTasks.forEach(function (task) {
      if (task.id == taskId) {
        selectedTask = task;
      }
    });
    return selectedTask;
  };

  var switchSelectedTask = function switchSelectedTask(newTaskId) {
    var selectedTask = getSelectedTask(newTaskId); // console.log(selectedTask);

    setTimeout(function () {
      console.log(selectedTask);
    }, 1000);
    props.setSelectedTask(selectedTask);
  };

  return __jsx("section", {
    className: "jsx-3974252359" + " " + "task-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3974252359",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "What are you working on?"), __jsx("section", {
    className: "jsx-3974252359" + " " + "tasks-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, props.userTasks ? props.userTasks.map(function (task, index) {
    return __jsx("span", {
      key: index,
      taskId: task.id,
      onClick: function onClick() {
        switchSelectedTask(task.id);
      },
      style: {
        background: Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(task.color)
      },
      className: "jsx-3974252359" + " " + "task",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, task.name);
  }) : __jsx("span", {
    className: "jsx-3974252359",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 26
    }
  }, "No tasks added yet.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3974252359",
    __self: _this
  }, ".task-panel.jsx-3974252359{background-color:white;grid-area:tasks;border-radius:10px;padding:20px;}.task-panel.jsx-3974252359 .task.jsx-3974252359{display:inline-block;padding:5px 10px;border-radius:100px;background:slateblue;font-size:.8rem;margin-right:5px;cursor:pointer;margin-bottom:5px;-webkit-transition:.1s ease-in-out opacity;transition:.1s ease-in-out opacity;}.tasks-container.jsx-3974252359:hover .task.jsx-3974252359{opacity:.5;}.task.task.task.jsx-3974252359:hover{opacity:1;}h2.jsx-3974252359{color:#2D2D2D;font-size:1rem;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1Rhc2tQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3dCLEFBRzRDLEFBTUYsQUFXVixBQUdELEFBR0ksVUFGbEIsQ0FIQSxHQU1tQixPQWpCRSxFQU5ELE1Bd0JHLFNBakJDLENBTkQsU0F3QnZCLFVBdkJpQixBQU1RLGFBTHpCLFFBTW9CLGdCQUNDLGlCQUNGLGVBQ0csa0JBQ2lCLDhFQUN2QyIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9UYXNrUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0VGFza0NvbG9yIH0gZnJvbSAnLi8uLi90aGVtZS9jb2xvcnMnO1xuXG5jb25zdCBUYXNrUGFuZWwgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCBnZXRTZWxlY3RlZFRhc2sgPSB0YXNrSWQgPT4ge1xuICAgICAgICBjb25zdCB1c2VyVGFza3MgPSBwcm9wcy51c2VyVGFza3M7XG4gICAgICAgIGxldCBzZWxlY3RlZFRhc2sgPSBudWxsO1xuICAgICAgICB1c2VyVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmlkID09IHRhc2tJZCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRhc2s7XG4gICAgfVxuICAgIGNvbnN0IHN3aXRjaFNlbGVjdGVkVGFzayA9IG5ld1Rhc2tJZCA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RlZFRhc2sgPSBnZXRTZWxlY3RlZFRhc2sobmV3VGFza0lkKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRUYXNrKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRhc2spXG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIHByb3BzLnNldFNlbGVjdGVkVGFzayhzZWxlY3RlZFRhc2spO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0YXNrLXBhbmVsXCI+XG4gICAgICAgICAgICA8aDI+V2hhdCBhcmUgeW91IHdvcmtpbmcgb24/PC9oMj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRhc2tzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy51c2VyVGFza3MgPyBcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMudXNlclRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhc2tcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0lkPXt0YXNrLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3dpdGNoU2VsZWN0ZWRUYXNrKHRhc2suaWQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdldFRhc2tDb2xvcih0YXNrLmNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2submFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pIDogPHNwYW4+Tm8gdGFza3MgYWRkZWQgeWV0Ljwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRhc2stcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YXNrcztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhc2stcGFuZWwgLnRhc2sge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC4xcyBlYXNlLWluLW91dCBvcGFjaXR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFza3MtY29udGFpbmVyOmhvdmVyIC50YXNrIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YXNrLnRhc2sudGFzazpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyRDJEMkQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2tQYW5lbDsiXX0= */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TaskPanel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskPanel);

/***/ }),

/***/ "./components/TimePanel.js":
/*!*********************************!*\
  !*** ./components/TimePanel.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
/* harmony import */ var _TaskPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskPanel */ "./components/TaskPanel.js");
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Countdown */ "./components/Countdown.js");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Log */ "./components/Log.js");
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TimePanel.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var TimePanel = function TimePanel(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "type-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Work"), props.selectedTask ? __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "selected-task",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, props.selectedTask.name) : ''), __jsx(_Countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(_Log__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userTasks: props.userData.user_tasks,
    selectedTask: props.selectedTask,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })), __jsx(_TaskPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userTasks: props.userData.user_tasks,
    setSelectedTask: props.setSelectedTask,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3465867692",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent'],
    __self: _this
  }, ".time-panel.__jsx-style-dynamic-selector{padding:20px;grid-area:time;background-color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), ";border-radius:10px;}.time-panel.__jsx-style-dynamic-selector .time-title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.time-panel.__jsx-style-dynamic-selector .type-title.__jsx-style-dynamic-selector{color:white;text-align:center;}.time-panel.__jsx-style-dynamic-selector .selected-task.__jsx-style-dynamic-selector{display:inline-block;padding:5px 15px;min-width:40%;max-width:60%;text-align:center;border-radius:100px;pointer-events:none;box-shadow:0px 2px 1px black;white-space:nowrap;background: ").concat(props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1RpbWVQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBR2tDLEFBTUEsQUFJRCxBQUlTLFlBSEgsQ0FWSCxRQWNFLE9BYjZCLEVBVWxELFFBSWtCLGNBQ0EsY0FDSSxRQWZDLEFBSVcsVUFZVixTQWZ4QixXQWdCd0Isb0JBQ1MsNkJBQ1YsbUJBRWEsaUJBaEJwQyx3QkFpQkEiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvVGltZVBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFRhc2tDb2xvciwgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCBUYXNrUGFuZWwgZnJvbSAnLi9UYXNrUGFuZWwnO1xuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL0NvdW50ZG93bic7XG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcblxuY29uc3QgVGltZVBhbmVsID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aW1lLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGltZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHlwZS10aXRsZVwiPldvcms8L2gyPlxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLnNlbGVjdGVkVGFzayA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RlZC10YXNrXCI+e3Byb3BzLnNlbGVjdGVkVGFzay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPENvdW50ZG93biAvPlxuICAgICAgICAgICAgICAgIDxMb2cgXG4gICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrcz17cHJvcHMudXNlckRhdGEudXNlcl90YXNrc31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYXNrPXtwcm9wcy5zZWxlY3RlZFRhc2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxUYXNrUGFuZWwgXG4gICAgICAgICAgICAgICAgdXNlclRhc2tzPXtwcm9wcy51c2VyRGF0YS51c2VyX3Rhc2tzfVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFzaz17cHJvcHMuc2V0U2VsZWN0ZWRUYXNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UGFsbGV0ZSgnY291bnRlci1iYWNrZ3JvdW5kJyl9O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGltZS1wYW5lbCAudGltZS10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwgLnR5cGUtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwgLnNlbGVjdGVkLXRhc2sge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXG4gICAgICAgICAgICAgICAgICAgICAgICAke3Byb3BzLnNlbGVjdGVkVGFzayA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRhc2tDb2xvcihwcm9wcy5zZWxlY3RlZFRhc2suY29sb3IpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVBhbmVsOyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TimePanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (TimePanel);

/***/ }),

/***/ "./mock_data/users_data.json":
/*!***********************************!*\
  !*** ./mock_data/users_data.json ***!
  \***********************************/
/*! exports provided: 11111, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"11111\":{\"name\":{\"fname\":\"Guido\",\"lname\":\"La Rosa\"},\"user_tasks\":[{\"name\":\"Math\",\"color\":1,\"id\":12345},{\"name\":\"Physics\",\"color\":2,\"id\":12346},{\"name\":\"Science\",\"color\":7,\"id\":12347},{\"name\":\"Engineering\",\"color\":3,\"id\":12348},{\"name\":\"Algebra\",\"color\":4,\"id\":12349},{\"name\":\"Geometry\",\"color\":5,\"id\":12340},{\"name\":\"Computer Sciences\",\"color\":6,\"id\":12341}],\"user_history\":[{\"date\":{\"year\":2020,\"month\":2,\"day\":23},\"goal_percentage\":0.23,\"tasks\":[{\"task_id\":12345,\"runs\":[{\"times\":2,\"duration\":{\"seconds\":0,\"minutes\":25}},{\"times\":3,\"duration\":{\"seconds\":0,\"minutes\":25}}]},{\"task_id\":12346,\"runs\":[{\"times\":2,\"duration\":{\"seconds\":0,\"minutes\":25}},{\"times\":3,\"duration\":{\"seconds\":0,\"minutes\":25}}]}]},{\"date\":{\"year\":2020,\"month\":2,\"day\":25},\"goal_percentage\":0.23,\"tasks\":[{\"task_id\":12345,\"runs\":[{\"times\":2,\"duration\":{\"seconds\":0,\"minutes\":25}},{\"times\":3,\"duration\":{\"seconds\":0,\"minutes\":25}}]},{\"task_id\":12346,\"runs\":[{\"times\":2,\"duration\":{\"seconds\":0,\"minutes\":25}},{\"times\":3,\"duration\":{\"seconds\":0,\"minutes\":25}}]}]}]}}");

/***/ }),

/***/ "./mock_data/users_list.json":
/*!***********************************!*\
  !*** ./mock_data/users_list.json ***!
  \***********************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"user_ID\":11111,\"user_list_position\":1}]");

/***/ }),

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var limit = function (x, min, max) {
        if ( min === void 0 ) min=0;
        if ( max === void 0 ) max=1;

        return x < min ? min : x > max ? max : x;
    };

    var clip_rgb = function (rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for (var i=0; i<=3; i++) {
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                rgb[i] = limit(rgb[i], 0, 255);
            } else if (i === 3) {
                rgb[i] = limit(rgb[i], 0, 1);
            }
        }
        return rgb;
    };

    // ported from jQuery's $.type
    var classToType = {};
    for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
        var name = list[i];

        classToType[("[object " + name + "]")] = name.toLowerCase();
    }
    var type = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };

    var unpack = function (args, keyOrder) {
        if ( keyOrder === void 0 ) keyOrder=null;

    	// if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) { return Array.prototype.slice.call(args); }
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
    	if (type(args[0]) == 'object' && keyOrder) {
    		return keyOrder.split('')
    			.filter(function (k) { return args[0][k] !== undefined; })
    			.map(function (k) { return args[0][k]; });
    	}
    	// otherwise we just return the first argument
    	// (which we suppose is an array of args)
        return args[0];
    };

    var last = function (args) {
        if (args.length < 2) { return null; }
        var l = args.length-1;
        if (type(args[l]) == 'string') { return args[l].toLowerCase(); }
        return null;
    };

    var PI = Math.PI;

    var utils = {
    	clip_rgb: clip_rgb,
    	limit: limit,
    	type: type,
    	unpack: unpack,
    	last: last,
    	PI: PI,
    	TWOPI: PI*2,
    	PITHIRD: PI/3,
    	DEG2RAD: PI / 180,
    	RAD2DEG: 180 / PI
    };

    var input = {
    	format: {},
    	autodetect: []
    };

    var last$1 = utils.last;
    var clip_rgb$1 = utils.clip_rgb;
    var type$1 = utils.type;


    var Color = function Color() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var me = this;
        if (type$1(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor) {
            // the argument is already a Color instance
            return args[0];
        }

        // last argument could be the mode
        var mode = last$1(args);
        var autodetect = false;

        if (!mode) {
            autodetect = true;
            if (!input.sorted) {
                input.autodetect = input.autodetect.sort(function (a,b) { return b.p - a.p; });
                input.sorted = true;
            }
            // auto-detect format
            for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
                var chk = list[i];

                mode = chk.test.apply(chk, args);
                if (mode) { break; }
            }
        }

        if (input.format[mode]) {
            var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
            me._rgb = clip_rgb$1(rgb);
        } else {
            throw new Error('unknown format: '+args);
        }

        // add alpha channel
        if (me._rgb.length === 3) { me._rgb.push(1); }
    };

    Color.prototype.toString = function toString () {
        if (type$1(this.hex) == 'function') { return this.hex(); }
        return ("[" + (this._rgb.join(',')) + "]");
    };

    var Color_1 = Color;

    var chroma = function () {
    	var args = [], len = arguments.length;
    	while ( len-- ) args[ len ] = arguments[ len ];

    	return new (Function.prototype.bind.apply( chroma.Color, [ null ].concat( args) ));
    };

    chroma.Color = Color_1;
    chroma.version = '2.1.0';

    var chroma_1 = chroma;

    var unpack$1 = utils.unpack;
    var max = Math.max;

    var rgb2cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$1(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max(r,max(g,b));
        var f = k < 1 ? 1 / (1-k) : 0;
        var c = (1-r-k) * f;
        var m = (1-g-k) * f;
        var y = (1-b-k) * f;
        return [c,m,y,k];
    };

    var rgb2cmyk_1 = rgb2cmyk;

    var unpack$2 = utils.unpack;

    var cmyk2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$2(args, 'cmyk');
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) { return [0,0,0,alpha]; }
        return [
            c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
            m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
            y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
            alpha
        ];
    };

    var cmyk2rgb_1 = cmyk2rgb;

    var unpack$3 = utils.unpack;
    var type$2 = utils.type;



    Color_1.prototype.cmyk = function() {
        return rgb2cmyk_1(this._rgb);
    };

    chroma_1.cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['cmyk']) ));
    };

    input.format.cmyk = cmyk2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$3(args, 'cmyk');
            if (type$2(args) === 'array' && args.length === 4) {
                return 'cmyk';
            }
        }
    });

    var unpack$4 = utils.unpack;
    var last$2 = utils.last;
    var rnd = function (a) { return Math.round(a*100)/100; };

    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */
    var hsl2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hsla = unpack$4(args, 'hsla');
        var mode = last$2(args) || 'lsa';
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1]*100) + '%';
        hsla[2] = rnd(hsla[2]*100) + '%';
        if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = 'hsla';
        } else {
            hsla.length = 3;
        }
        return (mode + "(" + (hsla.join(',')) + ")");
    };

    var hsl2css_1 = hsl2css;

    var unpack$5 = utils.unpack;

    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */
    var rgb2hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$5(args, 'rgba');
        var r = args[0];
        var g = args[1];
        var b = args[2];

        r /= 255;
        g /= 255;
        b /= 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);

        var l = (max + min) / 2;
        var s, h;

        if (max === min){
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r == max) { h = (g - b) / (max - min); }
        else if (g == max) { h = 2 + (b - r) / (max - min); }
        else if (b == max) { h = 4 + (r - g) / (max - min); }

        h *= 60;
        if (h < 0) { h += 360; }
        if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
        return [h,s,l];
    };

    var rgb2hsl_1 = rgb2hsl;

    var unpack$6 = utils.unpack;
    var last$3 = utils.last;


    var round = Math.round;

    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */
    var rgb2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$6(args, 'rgba');
        var mode = last$3(args) || 'rgb';
        if (mode.substr(0,3) == 'hsl') {
            return hsl2css_1(rgb2hsl_1(rgba), mode);
        }
        rgba[0] = round(rgba[0]);
        rgba[1] = round(rgba[1]);
        rgba[2] = round(rgba[2]);
        if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = 'rgba';
        }
        return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
    };

    var rgb2css_1 = rgb2css;

    var unpack$7 = utils.unpack;
    var round$1 = Math.round;

    var hsl2rgb = function () {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$7(args, 'hsl');
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r,g,b;
        if (s === 0) {
            r = g = b = l*255;
        } else {
            var t3 = [0,0,0];
            var c = [0,0,0];
            var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1/3;
            t3[1] = h_;
            t3[2] = h_ - 1/3;
            for (var i=0; i<3; i++) {
                if (t3[i] < 0) { t3[i] += 1; }
                if (t3[i] > 1) { t3[i] -= 1; }
                if (6 * t3[i] < 1)
                    { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                else if (2 * t3[i] < 1)
                    { c[i] = t2; }
                else if (3 * t3[i] < 2)
                    { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                else
                    { c[i] = t1; }
            }
            (assign = [round$1(c[0]*255),round$1(c[1]*255),round$1(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
        }
        if (args.length > 3) {
            // keep alpha channel
            return [r,g,b,args[3]];
        }
        return [r,g,b,1];
    };

    var hsl2rgb_1 = hsl2rgb;

    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

    var round$2 = Math.round;

    var css2rgb = function (css) {
        css = css.toLowerCase().trim();
        var m;

        if (input.format.named) {
            try {
                return input.format.named(css);
            } catch (e) {
                // eslint-disable-next-line
            }
        }

        // rgb(250,20,0)
        if ((m = css.match(RE_RGB))) {
            var rgb = m.slice(1,4);
            for (var i=0; i<3; i++) {
                rgb[i] = +rgb[i];
            }
            rgb[3] = 1;  // default alpha
            return rgb;
        }

        // rgba(250,20,0,0.4)
        if ((m = css.match(RE_RGBA))) {
            var rgb$1 = m.slice(1,5);
            for (var i$1=0; i$1<4; i$1++) {
                rgb$1[i$1] = +rgb$1[i$1];
            }
            return rgb$1;
        }

        // rgb(100%,0%,0%)
        if ((m = css.match(RE_RGB_PCT))) {
            var rgb$2 = m.slice(1,4);
            for (var i$2=0; i$2<3; i$2++) {
                rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;  // default alpha
            return rgb$2;
        }

        // rgba(100%,0%,0%,0.4)
        if ((m = css.match(RE_RGBA_PCT))) {
            var rgb$3 = m.slice(1,5);
            for (var i$3=0; i$3<3; i$3++) {
                rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }

        // hsl(0,100%,50%)
        if ((m = css.match(RE_HSL))) {
            var hsl = m.slice(1,4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb_1(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }

        // hsla(0,100%,50%,0.5)
        if ((m = css.match(RE_HSLA))) {
            var hsl$1 = m.slice(1,4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb_1(hsl$1);
            rgb$5[3] = +m[4];  // default alpha = 1
            return rgb$5;
        }
    };

    css2rgb.test = function (s) {
        return RE_RGB.test(s) ||
            RE_RGBA.test(s) ||
            RE_RGB_PCT.test(s) ||
            RE_RGBA_PCT.test(s) ||
            RE_HSL.test(s) ||
            RE_HSLA.test(s);
    };

    var css2rgb_1 = css2rgb;

    var type$3 = utils.type;




    Color_1.prototype.css = function(mode) {
        return rgb2css_1(this._rgb, mode);
    };

    chroma_1.css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['css']) ));
    };

    input.format.css = css2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                return 'css';
            }
        }
    });

    var unpack$8 = utils.unpack;

    input.format.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$8(args, 'rgba');
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };

    chroma_1.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['gl']) ));
    };

    Color_1.prototype.gl = function() {
        var rgb = this._rgb;
        return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
    };

    var unpack$9 = utils.unpack;

    var rgb2hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$9(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) {
            h = Number.NaN;
        } else {
            if (r === max) { h = (g - b) / delta; }
            if (g === max) { h = 2+(b - r) / delta; }
            if (b === max) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, c, _g];
    };

    var rgb2hcg_1 = rgb2hcg;

    var unpack$a = utils.unpack;
    var floor = Math.floor;

    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */

    var hcg2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$a(args, 'hcg');
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r,g,b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
            r = g = b = _g;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;
            var i = floor(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var hcg2rgb_1 = hcg2rgb;

    var unpack$b = utils.unpack;
    var type$4 = utils.type;






    Color_1.prototype.hcg = function() {
        return rgb2hcg_1(this._rgb);
    };

    chroma_1.hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcg']) ));
    };

    input.format.hcg = hcg2rgb_1;

    input.autodetect.push({
        p: 1,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$b(args, 'hcg');
            if (type$4(args) === 'array' && args.length === 3) {
                return 'hcg';
            }
        }
    });

    var unpack$c = utils.unpack;
    var last$4 = utils.last;
    var round$3 = Math.round;

    var rgb2hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$c(args, 'rgba');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last$4(args) || 'auto';
        if (a === undefined) { a = 1; }
        if (mode === 'auto') {
            mode = a < 1 ? 'rgba' : 'rgb';
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = '0' + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
            case 'rgba': return ("#" + str + hxa);
            case 'argb': return ("#" + hxa + str);
            default: return ("#" + str);
        }
    };

    var rgb2hex_1 = rgb2hex;

    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;

    var hex2rgb = function (hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) {
                hex = hex.substr(1);
            }
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [r,g,b,1];
        }

        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) {
                // remove optional leading #
                hex = hex.substr(1);
            }
            // expand short-notation to full eight-digit
            if (hex.length === 4) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [r$1,g$1,b$1,a];
        }

        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb

        throw new Error(("unknown hex color: " + hex));
    };

    var hex2rgb_1 = hex2rgb;

    var type$5 = utils.type;




    Color_1.prototype.hex = function(mode) {
        return rgb2hex_1(this._rgb, mode);
    };

    chroma_1.hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hex']) ));
    };

    input.format.hex = hex2rgb_1;
    input.autodetect.push({
        p: 4,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$5(h) === 'string' && [3,4,5,6,7,8,9].indexOf(h.length) >= 0) {
                return 'hex';
            }
        }
    });

    var unpack$d = utils.unpack;
    var TWOPI = utils.TWOPI;
    var min = Math.min;
    var sqrt = Math.sqrt;
    var acos = Math.acos;

    var rgb2hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */
        var ref = unpack$d(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min(r,g,b);
        var i = (r+g+b) / 3;
        var s = i > 0 ? 1 - min_/i : 0;
        if (s === 0) {
            h = NaN;
        } else {
            h = ((r-g)+(r-b)) / 2;
            h /= sqrt((r-g)*(r-g) + (r-b)*(g-b));
            h = acos(h);
            if (b > g) {
                h = TWOPI - h;
            }
            h /= TWOPI;
        }
        return [h*360,s,i];
    };

    var rgb2hsi_1 = rgb2hsi;

    var unpack$e = utils.unpack;
    var limit$1 = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos = Math.cos;

    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */
    var hsi2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */
        args = unpack$e(args, 'hsi');
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r,g,b;

        if (isNaN(h)) { h = 0; }
        if (isNaN(s)) { s = 0; }
        // normalize hue
        if (h > 360) { h -= 360; }
        if (h < 0) { h += 360; }
        h /= 360;
        if (h < 1/3) {
            b = (1-s)/3;
            r = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            g = 1 - (b+r);
        } else if (h < 2/3) {
            h -= 1/3;
            r = (1-s)/3;
            g = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            b = 1 - (r+g);
        } else {
            h -= 2/3;
            g = (1-s)/3;
            b = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            r = 1 - (g+b);
        }
        r = limit$1(i*r*3);
        g = limit$1(i*g*3);
        b = limit$1(i*b*3);
        return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
    };

    var hsi2rgb_1 = hsi2rgb;

    var unpack$f = utils.unpack;
    var type$6 = utils.type;






    Color_1.prototype.hsi = function() {
        return rgb2hsi_1(this._rgb);
    };

    chroma_1.hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsi']) ));
    };

    input.format.hsi = hsi2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$f(args, 'hsi');
            if (type$6(args) === 'array' && args.length === 3) {
                return 'hsi';
            }
        }
    });

    var unpack$g = utils.unpack;
    var type$7 = utils.type;






    Color_1.prototype.hsl = function() {
        return rgb2hsl_1(this._rgb);
    };

    chroma_1.hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsl']) ));
    };

    input.format.hsl = hsl2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$g(args, 'hsl');
            if (type$7(args) === 'array' && args.length === 3) {
                return 'hsl';
            }
        }
    });

    var unpack$h = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;

    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */
    var rgb2hsl$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$h(args, 'rgb');
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h,s,v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) { h = (g - b) / delta; }
            if (g === max_) { h = 2+(b - r) / delta; }
            if (b === max_) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, s, v]
    };

    var rgb2hsv = rgb2hsl$1;

    var unpack$i = utils.unpack;
    var floor$1 = Math.floor;

    var hsv2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$i(args, 'hsv');
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r,g,b;
        v *= 255;
        if (s === 0) {
            r = g = b = v;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;

            var i = floor$1(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r,g,b,args.length > 3?args[3]:1];
    };

    var hsv2rgb_1 = hsv2rgb;

    var unpack$j = utils.unpack;
    var type$8 = utils.type;






    Color_1.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };

    chroma_1.hsv = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsv']) ));
    };

    input.format.hsv = hsv2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$j(args, 'hsv');
            if (type$8(args) === 'array' && args.length === 3) {
                return 'hsv';
            }
        }
    });

    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,

        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,

        t0: 0.137931034,  // 4 / 29
        t1: 0.206896552,  // 6 / 29
        t2: 0.12841855,   // 3 * t1 * t1
        t3: 0.008856452,  // t1 * t1 * t1
    };

    var unpack$k = utils.unpack;
    var pow = Math.pow;

    var rgb2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$k(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r,g,b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };

    var rgb_xyz = function (r) {
        if ((r /= 255) <= 0.04045) { return r / 12.92; }
        return pow((r + 0.055) / 1.055, 2.4);
    };

    var xyz_lab = function (t) {
        if (t > labConstants.t3) { return pow(t, 1 / 3); }
        return t / labConstants.t2 + labConstants.t0;
    };

    var rgb2xyz = function (r,g,b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
        return [x,y,z];
    };

    var rgb2lab_1 = rgb2lab;

    var unpack$l = utils.unpack;
    var pow$1 = Math.pow;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var lab2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$l(args, 'lab');
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x,y,z, r,g,b_;

        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;

        y = labConstants.Yn * lab_xyz(y);
        x = labConstants.Xn * lab_xyz(x);
        z = labConstants.Zn * lab_xyz(z);

        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
        g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

        return [r,g,b_,args.length > 3 ? args[3] : 1];
    };

    var xyz_rgb = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055)
    };

    var lab_xyz = function (t) {
        return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0)
    };

    var lab2rgb_1 = lab2rgb;

    var unpack$m = utils.unpack;
    var type$9 = utils.type;






    Color_1.prototype.lab = function() {
        return rgb2lab_1(this._rgb);
    };

    chroma_1.lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lab']) ));
    };

    input.format.lab = lab2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$m(args, 'lab');
            if (type$9(args) === 'array' && args.length === 3) {
                return 'lab';
            }
        }
    });

    var unpack$n = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$1 = Math.sqrt;
    var atan2 = Math.atan2;
    var round$4 = Math.round;

    var lab2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$n(args, 'lab');
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$1(a * a + b * b);
        var h = (atan2(b, a) * RAD2DEG + 360) % 360;
        if (round$4(c*10000) === 0) { h = Number.NaN; }
        return [l, c, h];
    };

    var lab2lch_1 = lab2lch;

    var unpack$o = utils.unpack;



    var rgb2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$o(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab_1(r,g,b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch_1(l,a,b_);
    };

    var rgb2lch_1 = rgb2lch;

    var unpack$p = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin = Math.sin;
    var cos$1 = Math.cos;

    var lch2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */
        var ref = unpack$p(args, 'lch');
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) { h = 0; }
        h = h * DEG2RAD;
        return [l, cos$1(h) * c, sin(h) * c]
    };

    var lch2lab_1 = lch2lab;

    var unpack$q = utils.unpack;



    var lch2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$q(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab_1 (l,c,h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb_1 (L,a,b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var lch2rgb_1 = lch2rgb;

    var unpack$r = utils.unpack;


    var hcl2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hcl = unpack$r(args, 'hcl').reverse();
        return lch2rgb_1.apply(void 0, hcl);
    };

    var hcl2rgb_1 = hcl2rgb;

    var unpack$s = utils.unpack;
    var type$a = utils.type;






    Color_1.prototype.lch = function() { return rgb2lch_1(this._rgb); };
    Color_1.prototype.hcl = function() { return rgb2lch_1(this._rgb).reverse(); };

    chroma_1.lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lch']) ));
    };
    chroma_1.hcl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcl']) ));
    };

    input.format.lch = lch2rgb_1;
    input.format.hcl = hcl2rgb_1;

    ['lch','hcl'].forEach(function (m) { return input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$s(args, m);
            if (type$a(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    }); });

    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */

    var w3cx11 = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    var w3cx11_1 = w3cx11;

    var type$b = utils.type;





    Color_1.prototype.name = function() {
        var hex = rgb2hex_1(this._rgb, 'rgb');
        for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
            var n = list[i];

            if (w3cx11_1[n] === hex) { return n.toLowerCase(); }
        }
        return hex;
    };

    input.format.named = function (name) {
        name = name.toLowerCase();
        if (w3cx11_1[name]) { return hex2rgb_1(w3cx11_1[name]); }
        throw new Error('unknown color name: '+name);
    };

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                return 'named';
            }
        }
    });

    var unpack$t = utils.unpack;

    var rgb2num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$t(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };

    var rgb2num_1 = rgb2num;

    var type$c = utils.type;

    var num2rgb = function (num) {
        if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = (num >> 8) & 0xFF;
            var b = num & 0xFF;
            return [r,g,b,1];
        }
        throw new Error("unknown num color: "+num);
    };

    var num2rgb_1 = num2rgb;

    var type$d = utils.type;



    Color_1.prototype.num = function() {
        return rgb2num_1(this._rgb);
    };

    chroma_1.num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['num']) ));
    };

    input.format.num = num2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                return 'num';
            }
        }
    });

    var unpack$u = utils.unpack;
    var type$e = utils.type;
    var round$5 = Math.round;

    Color_1.prototype.rgb = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        if (rnd === false) { return this._rgb.slice(0,3); }
        return this._rgb.slice(0,3).map(round$5);
    };

    Color_1.prototype.rgba = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        return this._rgb.slice(0,4).map(function (v,i) {
            return i<3 ? (rnd === false ? v : round$5(v)) : v;
        });
    };

    chroma_1.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['rgb']) ));
    };

    input.format.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$u(args, 'rgba');
        if (rgba[3] === undefined) { rgba[3] = 1; }
        return rgba;
    };

    input.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$u(args, 'rgba');
            if (type$e(args) === 'array' && (args.length === 3 ||
                args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                return 'rgb';
            }
        }
    });

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */

    var log = Math.log;

    var temperature2rgb = function (kelvin) {
        var temp = kelvin / 100;
        var r,g,b;
        if (temp < 66) {
            r = 255;
            g = -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log(g);
            b = 255;
        }
        return [r,g,b,1];
    };

    var temperature2rgb_1 = temperature2rgb;

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/


    var unpack$v = utils.unpack;
    var round$6 = Math.round;

    var rgb2temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$v(args, 'rgb');
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb_1(temp);
            if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                maxTemp = temp;
            } else {
                minTemp = temp;
            }
        }
        return round$6(temp);
    };

    var rgb2temperature_1 = rgb2temperature;

    Color_1.prototype.temp =
    Color_1.prototype.kelvin =
    Color_1.prototype.temperature = function() {
        return rgb2temperature_1(this._rgb);
    };

    chroma_1.temp =
    chroma_1.kelvin =
    chroma_1.temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['temp']) ));
    };

    input.format.temp =
    input.format.kelvin =
    input.format.temperature = temperature2rgb_1;

    var type$f = utils.type;

    Color_1.prototype.alpha = function(a, mutate) {
        if ( mutate === void 0 ) mutate=false;

        if (a !== undefined && type$f(a) === 'number') {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
        }
        return this._rgb[3];
    };

    Color_1.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };

    Color_1.prototype.darken = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lab = me.lab();
    	lab[0] -= labConstants.Kn * amount;
    	return new Color_1(lab, 'lab').alpha(me.alpha(), true);
    };

    Color_1.prototype.brighten = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.darken(-amount);
    };

    Color_1.prototype.darker = Color_1.prototype.darken;
    Color_1.prototype.brighter = Color_1.prototype.brighten;

    Color_1.prototype.get = function(mc) {
        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) { return src[i]; }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var type$g = utils.type;
    var pow$2 = Math.pow;

    var EPS = 1e-7;
    var MAX_ITER = 20;

    Color_1.prototype.luminance = function(lum) {
        if (lum !== undefined && type$g(lum) === 'number') {
            if (lum === 0) {
                // return pure black
                return new Color_1([0,0,0,this._rgb[3]], 'rgb');
            }
            if (lum === 1) {
                // return pure white
                return new Color_1([255,255,255,this._rgb[3]], 'rgb');
            }
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = 'rgb';
            var max_iter = MAX_ITER;

            var test = function (low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    // close enough
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };

            var rgb = (cur_lum > lum ? test(new Color_1([0,0,0]), this) : test(this, new Color_1([255,255,255]))).rgb();
            return new Color_1(rgb.concat( [this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
    };


    var rgb2luminance = function (r,g,b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    var luminance_x = function (x) {
        x /= 255;
        return x <= 0.03928 ? x/12.92 : pow$2((x+0.055)/1.055, 2.4);
    };

    var interpolator = {};

    var type$h = utils.type;


    var mix = function (col1, col2, f) {
        if ( f === void 0 ) f=0.5;
        var rest = [], len = arguments.length - 3;
        while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

        var mode = rest[0] || 'lrgb';
        if (!interpolator[mode] && !rest.length) {
            // fall back to the first supported mode
            mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
            throw new Error(("interpolation mode " + mode + " is not defined"));
        }
        if (type$h(col1) !== 'object') { col1 = new Color_1(col1); }
        if (type$h(col2) !== 'object') { col2 = new Color_1(col2); }
        return interpolator[mode](col1, col2, f)
            .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };

    Color_1.prototype.mix =
    Color_1.prototype.interpolate = function(col2, f) {
    	if ( f === void 0 ) f=0.5;
    	var rest = [], len = arguments.length - 2;
    	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

    	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
    };

    Color_1.prototype.premultiply = function(mutate) {
    	if ( mutate === void 0 ) mutate=false;

    	var rgb = this._rgb;
    	var a = rgb[3];
    	if (mutate) {
    		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
    		return this;
    	} else {
    		return new Color_1([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
    	}
    };

    Color_1.prototype.saturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lch = me.lch();
    	lch[1] += labConstants.Kn * amount;
    	if (lch[1] < 0) { lch[1] = 0; }
    	return new Color_1(lch, 'lch').alpha(me.alpha(), true);
    };

    Color_1.prototype.desaturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.saturate(-amount);
    };

    var type$i = utils.type;

    Color_1.prototype.set = function(mc, value, mutate) {
        if ( mutate === void 0 ) mutate=false;

        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) {
                if (type$i(value) == 'string') {
                    switch(value.charAt(0)) {
                        case '+': src[i] += +value; break;
                        case '-': src[i] += +value; break;
                        case '*': src[i] *= +(value.substr(1)); break;
                        case '/': src[i] /= +(value.substr(1)); break;
                        default: src[i] = +value;
                    }
                } else if (type$i(value) === 'number') {
                    src[i] = value;
                } else {
                    throw new Error("unsupported value for Color.set");
                }
                var out = new Color_1(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var rgb$1 = function (col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'rgb'
        )
    };

    // register interpolator
    interpolator.rgb = rgb$1;

    var sqrt$2 = Math.sqrt;
    var pow$3 = Math.pow;

    var lrgb = function (col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color_1(
            sqrt$2(pow$3(x1,2) * (1-f) + pow$3(x2,2) * f),
            sqrt$2(pow$3(y1,2) * (1-f) + pow$3(y2,2) * f),
            sqrt$2(pow$3(z1,2) * (1-f) + pow$3(z2,2) * f),
            'rgb'
        )
    };

    // register interpolator
    interpolator.lrgb = lrgb;

    var lab$1 = function (col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'lab'
        )
    };

    // register interpolator
    interpolator.lab = lab$1;

    var _hsx = function (col1, col2, f, m) {
        var assign, assign$1;

        var xyz0, xyz1;
        if (m === 'hsl') {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === 'hsv') {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === 'hcg') {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === 'hsi') {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === 'lch' || m === 'hcl') {
            m = 'hcl';
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        }

        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === 'h') {
            (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
            (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
        }

        var sat, hue, lbv, dh;

        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) {
                dh = hue1-(hue0+360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                dh = hue1+360-hue0;
            } else{
                dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
        } else {
            hue = Number.NaN;
        }

        if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
        lbv = lbv0 + f * (lbv1-lbv0);
        return new Color_1([hue, sat, lbv], m);
    };

    var lch$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'lch');
    };

    // register interpolator
    interpolator.lch = lch$1;
    interpolator.hcl = lch$1;

    var num$1 = function (col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color_1(c1 + f * (c2-c1), 'num')
    };

    // register interpolator
    interpolator.num = num$1;

    var hcg$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hcg');
    };

    // register interpolator
    interpolator.hcg = hcg$1;

    var hsi$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsi');
    };

    // register interpolator
    interpolator.hsi = hsi$1;

    var hsl$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsl');
    };

    // register interpolator
    interpolator.hsl = hsl$1;

    var hsv$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsv');
    };

    // register interpolator
    interpolator.hsv = hsv$1;

    var clip_rgb$2 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$3 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$1 = Math.sin;
    var atan2$1 = Math.atan2;

    var average = function (colors, mode, weights) {
        if ( mode === void 0 ) mode='lrgb';
        if ( weights === void 0 ) weights=null;

        var l = colors.length;
        if (!weights) { weights = Array.from(new Array(l)).map(function () { return 1; }); }
        // normalize weights
        var k = l / weights.reduce(function(a, b) { return a + b; });
        weights.forEach(function (w,i) { weights[i] *= k; });
        // convert colors to Color objects
        colors = colors.map(function (c) { return new Color_1(c); });
        if (mode === 'lrgb') {
            return _average_lrgb(colors, weights)
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for (var i=0; i<xyz.length; i++) {
            xyz[i] = (xyz[i] || 0) * weights[0];
            cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
            if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A) * weights[0];
                dy += sin$1(A) * weights[0];
            }
        }

        var alpha = first.alpha() * weights[0];
        colors.forEach(function (c,ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci+1];
            for (var i=0; i<xyz.length; i++) {
                if (!isNaN(xyz2[i])) {
                    cnt[i] += weights[ci+1];
                    if (mode.charAt(i) === 'h') {
                        var A = xyz2[i] / 180 * PI$1;
                        dx += cos$2(A) * weights[ci+1];
                        dy += sin$1(A) * weights[ci+1];
                    } else {
                        xyz[i] += xyz2[i] * weights[ci+1];
                    }
                }
            }
        });

        for (var i$1=0; i$1<xyz.length; i$1++) {
            if (mode.charAt(i$1) === 'h') {
                var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                while (A$1 < 0) { A$1 += 360; }
                while (A$1 >= 360) { A$1 -= 360; }
                xyz[i$1] = A$1;
            } else {
                xyz[i$1] = xyz[i$1]/cnt[i$1];
            }
        }
        alpha /= l;
        return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };


    var _average_lrgb = function (colors, weights) {
        var l = colors.length;
        var xyz = [0,0,0,0];
        for (var i=0; i < colors.length; i++) {
            var col = colors[i];
            var f = weights[i] / l;
            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0],2) * f;
            xyz[1] += pow$4(rgb[1],2) * f;
            xyz[2] += pow$4(rgb[2],2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$3(xyz[0]);
        xyz[1] = sqrt$3(xyz[1]);
        xyz[2] = sqrt$3(xyz[2]);
        if (xyz[3] > 0.9999999) { xyz[3] = 1; }
        return new Color_1(clip_rgb$2(xyz));
    };

    // minimal multi-purpose interface

    // @requires utils color analyze


    var type$j = utils.type;

    var pow$5 = Math.pow;

    var scale = function(colors) {

        // constructor
        var _mode = 'rgb';
        var _nacol = chroma_1('#ccc');
        var _spread = 0;
        // const _fixed = false;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0,0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;

        // private methods

        var setColors = function(colors) {
            colors = colors || ['#fff', '#000'];
            if (colors && type$j(colors) === 'string' && chroma_1.brewer &&
                chroma_1.brewer[colors.toLowerCase()]) {
                colors = chroma_1.brewer[colors.toLowerCase()];
            }
            if (type$j(colors) === 'array') {
                // handle single color
                if (colors.length === 1) {
                    colors = [colors[0], colors[0]];
                }
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for (var c=0; c<colors.length; c++) {
                    colors[c] = chroma_1(colors[c]);
                }
                // auto-fill color position
                _pos.length = 0;
                for (var c$1=0; c$1<colors.length; c$1++) {
                    _pos.push(c$1/(colors.length-1));
                }
            }
            resetCache();
            return _colors = colors;
        };

        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length-1;
                var i = 0;
                while (i < n && value >= _classes[i]) {
                    i++;
                }
                return i-1;
            }
            return 0;
        };

        var tMapLightness = function (t) { return t; };
        var tMapDomain = function (t) { return t; };

        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };

        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) { bypassMap = false; }
            if (isNaN(val) || (val === null)) { return _nacol; }
            if (!bypassMap) {
                if (_classes && (_classes.length > 2)) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length-2);
                } else if (_max !== _min) {
                    // just interpolate between min/max
                    t = (val - _min) / (_max - _min);
                } else {
                    t = 1;
                }
            } else {
                t = val;
            }

            // domain map
            t = tMapDomain(t);

            if (!bypassMap) {
                t = tMapLightness(t);  // lightness correction
            }

            if (_gamma !== 1) { t = pow$5(t, _gamma); }

            t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

            t = Math.min(1, Math.max(0, t));

            var k = Math.floor(t * 10000);

            if (_useCache && _colorCache[k]) {
                col = _colorCache[k];
            } else {
                if (type$j(_colors) === 'array') {
                    //for i in [0.._pos.length-1]
                    for (var i=0; i<_pos.length; i++) {
                        var p = _pos[i];
                        if (t <= p) {
                            col = _colors[i];
                            break;
                        }
                        if ((t >= p) && (i === (_pos.length-1))) {
                            col = _colors[i];
                            break;
                        }
                        if (t > p && t < _pos[i+1]) {
                            t = (t-p)/(_pos[i+1]-p);
                            col = chroma_1.interpolate(_colors[i], _colors[i+1], t, _mode);
                            break;
                        }
                    }
                } else if (type$j(_colors) === 'function') {
                    col = _colors(t);
                }
                if (_useCache) { _colorCache[k] = col; }
            }
            return col;
        };

        var resetCache = function () { return _colorCache = {}; };

        setColors(colors);

        // public interface

        var f = function(v) {
            var c = chroma_1(getColor(v));
            if (_out && c[_out]) { return c[_out](); } else { return c; }
        };

        f.classes = function(classes) {
            if (classes != null) {
                if (type$j(classes) === 'array') {
                    _classes = classes;
                    _domain = [classes[0], classes[classes.length-1]];
                } else {
                    var d = chroma_1.analyze(_domain);
                    if (classes === 0) {
                        _classes = [d.min, d.max];
                    } else {
                        _classes = chroma_1.limits(d, 'e', classes);
                    }
                }
                return f;
            }
            return _classes;
        };


        f.domain = function(domain) {
            if (!arguments.length) {
                return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length-1];
            _pos = [];
            var k = _colors.length;
            if ((domain.length === k) && (_min !== _max)) {
                // update positions
                for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                    var d = list[i];

                  _pos.push((d-_min) / (_max-_min));
                }
            } else {
                for (var c=0; c<k; c++) {
                    _pos.push(c/(k-1));
                }
                if (domain.length > 2) {
                    // set domain map
                    var tOut = domain.map(function (d,i) { return i/(domain.length-1); });
                    var tBreaks = domain.map(function (d) { return (d - _min) / (_max - _min); });
                    if (!tBreaks.every(function (val, i) { return tOut[i] === val; })) {
                        tMapDomain = function (t) {
                            if (t <= 0 || t >= 1) { return t; }
                            var i = 0;
                            while (t >= tBreaks[i+1]) { i++; }
                            var f = (t - tBreaks[i]) / (tBreaks[i+1] - tBreaks[i]);
                            var out = tOut[i] + f * (tOut[i+1] - tOut[i]);
                            return out;
                        };
                    }

                }
            }
            _domain = [_min, _max];
            return f;
        };

        f.mode = function(_m) {
            if (!arguments.length) {
                return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
        };

        f.range = function(colors, _pos) {
            setColors(colors, _pos);
            return f;
        };

        f.out = function(_o) {
            _out = _o;
            return f;
        };

        f.spread = function(val) {
            if (!arguments.length) {
                return _spread;
            }
            _spread = val;
            return f;
        };

        f.correctLightness = function(v) {
            if (v == null) { v = true; }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
                tMapLightness = function(t) {
                    var L0 = getColor(0, true).lab()[0];
                    var L1 = getColor(1, true).lab()[0];
                    var pol = L0 > L1;
                    var L_actual = getColor(t, true).lab()[0];
                    var L_ideal = L0 + ((L1 - L0) * t);
                    var L_diff = L_actual - L_ideal;
                    var t0 = 0;
                    var t1 = 1;
                    var max_iter = 20;
                    while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                        (function() {
                            if (pol) { L_diff *= -1; }
                            if (L_diff < 0) {
                                t0 = t;
                                t += (t1 - t) * 0.5;
                            } else {
                                t1 = t;
                                t += (t0 - t) * 0.5;
                            }
                            L_actual = getColor(t, true).lab()[0];
                            return L_diff = L_actual - L_ideal;
                        })();
                    }
                    return t;
                };
            } else {
                tMapLightness = function (t) { return t; };
            }
            return f;
        };

        f.padding = function(p) {
            if (p != null) {
                if (type$j(p) === 'number') {
                    p = [p,p];
                }
                _padding = p;
                return f;
            } else {
                return _padding;
            }
        };

        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) { out = 'hex'; }
            var result = [];

            if (arguments.length === 0) {
                result = _colors.slice(0);

            } else if (numColors === 1) {
                result = [f(0.5)];

            } else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

            } else { // returns all colors based on the defined classes
                colors = [];
                var samples = [];
                if (_classes && (_classes.length > 2)) {
                    for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                        samples.push((_classes[i-1]+_classes[i])*0.5);
                    }
                } else {
                    samples = _domain;
                }
                result = samples.map(function (v) { return f(v); });
            }

            if (chroma_1[out]) {
                result = result.map(function (c) { return c[out](); });
            }
            return result;
        };

        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else {
                return _useCache;
            }
        };

        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else {
                return _gamma;
            }
        };

        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma_1(d);
                return f;
            } else {
                return _nacol;
            }
        };

        return f;
    };

    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }

    //
    // interpolates between a set of colors uzing a bezier spline
    //

    // @requires utils lab




    var bezier = function(colors) {
        var assign, assign$1, assign$2;

        var I, lab0, lab1, lab2;
        colors = colors.map(function (c) { return new Color_1(c); });
        if (colors.length === 2) {
            // linear interpolation
            (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 5) {
            var I0 = bezier(colors.slice(0, 3));
            var I1 = bezier(colors.slice(2, 5));
            I = function(t) {
                if (t < 0.5) {
                    return I0(t*2);
                } else {
                    return I1((t-0.5)*2);
                }
            };
        }
        return I;
    };

    var bezier_1 = function (colors) {
        var f = bezier(colors);
        f.scale = function () { return scale(f); };
        return f;
    };

    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */




    var blend = function (bottom, top, mode) {
        if (!blend[mode]) {
            throw new Error('unknown blend mode ' + mode);
        }
        return blend[mode](bottom, top);
    };

    var blend_f = function (f) { return function (bottom,top) {
            var c0 = chroma_1(top).rgb();
            var c1 = chroma_1(bottom).rgb();
            return chroma_1.rgb(f(c0, c1));
        }; };

    var each = function (f) { return function (c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        }; };

    var normal = function (a) { return a; };
    var multiply = function (a,b) { return a * b / 255; };
    var darken$1 = function (a,b) { return a > b ? b : a; };
    var lighten = function (a,b) { return a > b ? a : b; };
    var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
    var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
    var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
    var dodge = function (a,b) {
        if (a === 255) { return 255; }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a
    };

    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b

    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken$1));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));

    var blend_1 = blend;

    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf

    var type$k = utils.type;
    var clip_rgb$3 = utils.clip_rgb;
    var TWOPI$2 = utils.TWOPI;
    var pow$6 = Math.pow;
    var sin$2 = Math.sin;
    var cos$3 = Math.cos;


    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if ( start === void 0 ) start=300;
        if ( rotations === void 0 ) rotations=-1.5;
        if ( hue === void 0 ) hue=1;
        if ( gamma === void 0 ) gamma=1;
        if ( lightness === void 0 ) lightness=[0,1];

        var dh = 0, dl;
        if (type$k(lightness) === 'array') {
            dl = lightness[1] - lightness[0];
        } else {
            dl = 0;
            lightness = [lightness, lightness];
        }

        var f = function(fract) {
            var a = TWOPI$2 * (((start+120)/360) + (rotations * fract));
            var l = pow$6(lightness[0] + (dl * fract), gamma);
            var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
            var amp = (h * l * (1-l)) / 2;
            var cos_a = cos$3(a);
            var sin_a = sin$2(a);
            var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
            var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
            var b = l + (amp * (+1.97294 * cos_a));
            return chroma_1(clip_rgb$3([r*255,g*255,b*255,1]));
        };

        f.start = function(s) {
            if ((s == null)) { return start; }
            start = s;
            return f;
        };

        f.rotations = function(r) {
            if ((r == null)) { return rotations; }
            rotations = r;
            return f;
        };

        f.gamma = function(g) {
            if ((g == null)) { return gamma; }
            gamma = g;
            return f;
        };

        f.hue = function(h) {
            if ((h == null)) { return hue; }
            hue = h;
            if (type$k(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) { hue = hue[1]; }
            } else {
                dh = 0;
            }
            return f;
        };

        f.lightness = function(h) {
            if ((h == null)) { return lightness; }
            if (type$k(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [h,h];
                dl = 0;
            }
            return f;
        };

        f.scale = function () { return chroma_1.scale(f); };

        f.hue(hue);

        return f;
    };

    var digits = '0123456789abcdef';

    var floor$2 = Math.floor;
    var random = Math.random;

    var random_1 = function () {
        var code = '#';
        for (var i=0; i<6; i++) {
            code += digits.charAt(floor$2(random() * 16));
        }
        return new Color_1(code, 'hex');
    };

    var log$1 = Math.log;
    var pow$7 = Math.pow;
    var floor$3 = Math.floor;
    var abs = Math.abs;


    var analyze = function (data, key) {
        if ( key === void 0 ) key=null;

        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE*-1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === 'object') {
            data = Object.values(data);
        }
        data.forEach(function (val) {
            if (key && type(val) === 'object') { val = val[key]; }
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) { r.min = val; }
                if (val > r.max) { r.max = val; }
                r.count += 1;
            }
        });

        r.domain = [r.min, r.max];

        r.limits = function (mode, num) { return limits(r, mode, num); };

        return r;
    };


    var limits = function (data, mode, num) {
        if ( mode === void 0 ) mode='equal';
        if ( num === void 0 ) num=7;

        if (type(data) == 'array') {
            data = analyze(data);
        }
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function (a,b) { return a-b; });

        if (num === 1) { return [min,max]; }

        var limits = [];

        if (mode.substr(0,1) === 'c') { // continuous
            limits.push(min);
            limits.push(max);
        }

        if (mode.substr(0,1) === 'e') { // equal interval
            limits.push(min);
            for (var i=1; i<num; i++) {
                limits.push(min+((i/num)*(max-min)));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'l') { // log scale
            if (min <= 0) {
                throw new Error('Logarithmic scales are only possible for values > 0');
            }
            var min_log = Math.LOG10E * log$1(min);
            var max_log = Math.LOG10E * log$1(max);
            limits.push(min);
            for (var i$1=1; i$1<num; i$1++) {
                limits.push(pow$7(10, min_log + ((i$1/num) * (max_log - min_log))));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'q') { // quantile scale
            limits.push(min);
            for (var i$2=1; i$2<num; i$2++) {
                var p = ((values.length-1) * i$2)/num;
                var pb = floor$3(p);
                if (pb === p) {
                    limits.push(values[pb]);
                } else { // p > pb
                    var pr = p - pb;
                    limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                }
            }
            limits.push(max);

        }

        else if (mode.substr(0,1) === 'k') { // k-means clustering
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;

            // get seed values
            centroids = [];
            centroids.push(min);
            for (var i$3=1; i$3<num; i$3++) {
                centroids.push(min + ((i$3/num) * (max-min)));
            }
            centroids.push(max);

            while (repeat) {
                // assignment step
                for (var j=0; j<num; j++) {
                    clusterSizes[j] = 0;
                }
                for (var i$4=0; i$4<n; i$4++) {
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = (void 0);
                    for (var j$1=0; j$1<num; j$1++) {
                        var dist = abs(centroids[j$1]-value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }

                // update centroids step
                var newCentroids = new Array(num);
                for (var j$2=0; j$2<num; j$2++) {
                    newCentroids[j$2] = null;
                }
                for (var i$5=0; i$5<n; i$5++) {
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) {
                        newCentroids[cluster] = values[i$5];
                    } else {
                        newCentroids[cluster] += values[i$5];
                    }
                }
                for (var j$3=0; j$3<num; j$3++) {
                    newCentroids[j$3] *= 1/clusterSizes[j$3];
                }

                // check convergence
                repeat = false;
                for (var j$4=0; j$4<num; j$4++) {
                    if (newCentroids[j$4] !== centroids[j$4]) {
                        repeat = true;
                        break;
                    }
                }

                centroids = newCentroids;
                nb_iters++;

                if (nb_iters > 200) {
                    repeat = false;
                }
            }

            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for (var j$5=0; j$5<num; j$5++) {
                kClusters[j$5] = [];
            }
            for (var i$6=0; i$6<n; i$6++) {
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6=0; j$6<num; j$6++) {
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
            limits.push(tmpKMeansBreaks[0]);
            for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                    limits.push(v);
                }
            }
        }
        return limits;
    };

    var analyze_1 = {analyze: analyze, limits: limits};

    var contrast = function (a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };

    var sqrt$4 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var abs$1 = Math.abs;
    var cos$4 = Math.cos;
    var PI$2 = Math.PI;

    var deltaE = function(a, b, L, C) {
        if ( L === void 0 ) L=1;
        if ( C === void 0 ) C=1;

        // Delta E (CMC)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
        a = new Color_1(a);
        b = new Color_1(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var c1 = sqrt$4((a1 * a1) + (b1 * b1));
        var c2 = sqrt$4((a2 * a2) + (b2 * b2));
        var sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + (0.01765 * L1));
        var sc = ((0.0638 * c1) / (1.0 + (0.0131 * c1))) + 0.638;
        var h1 = c1 < 0.000001 ? 0.0 : (atan2$2(b1, a1) * 180.0) / PI$2;
        while (h1 < 0) { h1 += 360; }
        while (h1 >= 360) { h1 -= 360; }
        var t = (h1 >= 164.0) && (h1 <= 345.0) ? (0.56 + abs$1(0.2 * cos$4((PI$2 * (h1 + 168.0)) / 180.0))) : (0.36 + abs$1(0.4 * cos$4((PI$2 * (h1 + 35.0)) / 180.0)));
        var c4 = c1 * c1 * c1 * c1;
        var f = sqrt$4(c4 / (c4 + 1900.0));
        var sh = sc * (((f * t) + 1.0) - f);
        var delL = L1 - L2;
        var delC = c1 - c2;
        var delA = a1 - a2;
        var delB = b1 - b2;
        var dH2 = ((delA * delA) + (delB * delB)) - (delC * delC);
        var v1 = delL / (L * sl);
        var v2 = delC / (C * sc);
        var v3 = sh;
        return sqrt$4((v1 * v1) + (v2 * v2) + (dH2 / (v3 * v3)));
    };

    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if ( mode === void 0 ) mode='lab';

        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i in l1) {
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d*d;
        }
        return Math.sqrt(sum_sq);
    };

    var valid = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        try {
            new (Function.prototype.bind.apply( Color_1, [ null ].concat( args) ));
            return true;
        } catch (e) {
            return false;
        }
    };

    // some pre-defined color scales:




    var scales = {
    	cool: function cool() { return scale([chroma_1.hsl(180,1,.9), chroma_1.hsl(250,.7,.4)]) },
    	hot: function hot() { return scale(['#000','#f00','#ff0','#fff'], [0,.25,.75,1]).mode('rgb') }
    };

    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */

    var colorbrewer = {
        // sequential
        OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
        PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
        BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
        Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
        BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
        YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
        YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
        Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
        RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
        Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
        YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
        Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
        GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
        Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
        YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
        PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
        Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
        PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
        Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

        // diverging

        Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
        RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
        RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
        PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
        PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
        RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
        BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
        RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
        PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

        // qualitative

        Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
        Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
        Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
        Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
        Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
        Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
        Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
        Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
    };

    // add lowercase aliases for case-insensitive matches
    for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
        var key = list$1[i$1];

        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }

    var colorbrewer_1 = colorbrewer;

    // feel free to comment out anything to rollup
    // a smaller chroma.js built

    // io --> convert colors















    // operators --> modify existing Colors










    // interpolators










    // generators -- > create new colors
    chroma_1.average = average;
    chroma_1.bezier = bezier_1;
    chroma_1.blend = blend_1;
    chroma_1.cubehelix = cubehelix;
    chroma_1.mix = chroma_1.interpolate = mix;
    chroma_1.random = random_1;
    chroma_1.scale = scale;

    // other utility methods
    chroma_1.analyze = analyze_1.analyze;
    chroma_1.contrast = contrast;
    chroma_1.deltaE = deltaE;
    chroma_1.distance = distance;
    chroma_1.limits = analyze_1.limits;
    chroma_1.valid = valid;

    // scale
    chroma_1.scales = scales;

    // colors
    chroma_1.colors = w3cx11_1;
    chroma_1.brewer = colorbrewer_1;

    var chroma_js = chroma_1;

    return chroma_js;

})));


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/moment/locale/af.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/af.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var af = moment.defineLocale('af', {
        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
        meridiemParse: /vm|nm/i,
        isPM : function (input) {
            return /^nm$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'vm' : 'VM';
            } else {
                return isLower ? 'nm' : 'NM';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Vandag om] LT',
            nextDay : '[Môre om] LT',
            nextWeek : 'dddd [om] LT',
            lastDay : '[Gister om] LT',
            lastWeek : '[Laas] dddd [om] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'oor %s',
            past : '%s gelede',
            s : '\'n paar sekondes',
            ss : '%d sekondes',
            m : '\'n minuut',
            mm : '%d minute',
            h : '\'n uur',
            hh : '%d ure',
            d : '\'n dag',
            dd : '%d dae',
            M : '\'n maand',
            MM : '%d maande',
            y : '\'n jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
        },
        week : {
            dow : 1, // Maandag is die eerste dag van die week.
            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
        }
    });

    return af;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-dz.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ar-dz.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var arDz = moment.defineLocale('ar-dz', {
        months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return arDz;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-kw.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ar-kw.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var arKw = moment.defineLocale('ar-kw', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return arKw;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-ly.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ar-ly.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '0': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    var arLy = moment.defineLocale('ar-ly', {
        months : months,
        monthsShort : months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            ss : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return arLy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-ma.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ar-ma.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var arMa = moment.defineLocale('ar-ma', {
        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return arMa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-sa.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ar-sa.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    };

    var arSa = moment.defineLocale('ar-sa', {
        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'في %s',
            past : 'منذ %s',
            s : 'ثوان',
            ss : '%d ثانية',
            m : 'دقيقة',
            mm : '%d دقائق',
            h : 'ساعة',
            hh : '%d ساعات',
            d : 'يوم',
            dd : '%d أيام',
            M : 'شهر',
            MM : '%d أشهر',
            y : 'سنة',
            yy : '%d سنوات'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return arSa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar-tn.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ar-tn.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var arTn = moment.defineLocale('ar-tn', {
        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss : '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return arTn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ar.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ar.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    }, pluralForm = function (n) {
        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
    }, plurals = {
        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
    }, pluralize = function (u) {
        return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];
            if (f === 2) {
                str = str[withoutSuffix ? 0 : 1];
            }
            return str.replace(/%d/i, number);
        };
    }, months = [
        'يناير',
        'فبراير',
        'مارس',
        'أبريل',
        'مايو',
        'يونيو',
        'يوليو',
        'أغسطس',
        'سبتمبر',
        'أكتوبر',
        'نوفمبر',
        'ديسمبر'
    ];

    var ar = moment.defineLocale('ar', {
        months : months,
        monthsShort : months,
        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/\u200FM/\u200FYYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ص|م/,
        isPM : function (input) {
            return 'م' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ص';
            } else {
                return 'م';
            }
        },
        calendar : {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'بعد %s',
            past : 'منذ %s',
            s : pluralize('s'),
            ss : pluralize('s'),
            m : pluralize('m'),
            mm : pluralize('m'),
            h : pluralize('h'),
            hh : pluralize('h'),
            d : pluralize('d'),
            dd : pluralize('d'),
            M : pluralize('M'),
            MM : pluralize('M'),
            y : pluralize('y'),
            yy : pluralize('y')
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return ar;

})));


/***/ }),

/***/ "./node_modules/moment/locale/az.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/az.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var suffixes = {
        1: '-inci',
        5: '-inci',
        8: '-inci',
        70: '-inci',
        80: '-inci',
        2: '-nci',
        7: '-nci',
        20: '-nci',
        50: '-nci',
        3: '-üncü',
        4: '-üncü',
        100: '-üncü',
        6: '-ncı',
        9: '-uncu',
        10: '-uncu',
        30: '-uncu',
        60: '-ıncı',
        90: '-ıncı'
    };

    var az = moment.defineLocale('az', {
        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[sabah saat] LT',
            nextWeek : '[gələn həftə] dddd [saat] LT',
            lastDay : '[dünən] LT',
            lastWeek : '[keçən həftə] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s əvvəl',
            s : 'birneçə saniyə',
            ss : '%d saniyə',
            m : 'bir dəqiqə',
            mm : '%d dəqiqə',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir il',
            yy : '%d il'
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM : function (input) {
            return /^(gündüz|axşam)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'gecə';
            } else if (hour < 12) {
                return 'səhər';
            } else if (hour < 17) {
                return 'gündüz';
            } else {
                return 'axşam';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal : function (number) {
            if (number === 0) {  // special case for zero
                return number + '-ıncı';
            }
            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return az;

})));


/***/ }),

/***/ "./node_modules/moment/locale/be.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/be.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': 'год_гады_гадоў'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвіліна' : 'хвіліну';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'гадзіна' : 'гадзіну';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }

    var be = moment.defineLocale('be', {
        months : {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
        },
        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
        weekdays : {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., HH:mm',
            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
        },
        calendar : {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function () {
                return '[У] dddd [ў] LT';
            },
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return '[У мінулую] dddd [ў] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[У мінулы] dddd [ў] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'праз %s',
            past : '%s таму',
            s : 'некалькі секунд',
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithPlural,
            hh : relativeTimeWithPlural,
            d : 'дзень',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM : function (input) {
            return /^(дня|вечара)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночы';
            } else if (hour < 12) {
                return 'раніцы';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечара';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
                case 'D':
                    return number + '-га';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return be;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bg.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/bg.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var bg = moment.defineLocale('bg', {
        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Днес в] LT',
            nextDay : '[Утре в] LT',
            nextWeek : 'dddd [в] LT',
            lastDay : '[Вчера в] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[В изминалата] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[В изминалия] dddd [в] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'след %s',
            past : 'преди %s',
            s : 'няколко секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дни',
            M : 'месец',
            MM : '%d месеца',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return bg;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bm.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/bm.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var bm = moment.defineLocale('bm', {
        months : 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
        monthsShort : 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
        weekdays : 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
        weekdaysShort : 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
        weekdaysMin : 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'MMMM [tile] D [san] YYYY',
            LLL : 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL : 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
        },
        calendar : {
            sameDay : '[Bi lɛrɛ] LT',
            nextDay : '[Sini lɛrɛ] LT',
            nextWeek : 'dddd [don lɛrɛ] LT',
            lastDay : '[Kunu lɛrɛ] LT',
            lastWeek : 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s kɔnɔ',
            past : 'a bɛ %s bɔ',
            s : 'sanga dama dama',
            ss : 'sekondi %d',
            m : 'miniti kelen',
            mm : 'miniti %d',
            h : 'lɛrɛ kelen',
            hh : 'lɛrɛ %d',
            d : 'tile kelen',
            dd : 'tile %d',
            M : 'kalo kelen',
            MM : 'kalo %d',
            y : 'san kelen',
            yy : 'san %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return bm;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bn.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/bn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯',
        '0': '০'
    },
    numberMap = {
        '১': '1',
        '২': '2',
        '৩': '3',
        '৪': '4',
        '৫': '5',
        '৬': '6',
        '৭': '7',
        '৮': '8',
        '৯': '9',
        '০': '0'
    };

    var bn = moment.defineLocale('bn', {
        months : 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
        monthsShort : 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
        weekdaysMin : 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
        longDateFormat : {
            LT : 'A h:mm সময়',
            LTS : 'A h:mm:ss সময়',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm সময়',
            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
        },
        calendar : {
            sameDay : '[আজ] LT',
            nextDay : '[আগামীকাল] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[গতকাল] LT',
            lastWeek : '[গত] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s পরে',
            past : '%s আগে',
            s : 'কয়েক সেকেন্ড',
            ss : '%d সেকেন্ড',
            m : 'এক মিনিট',
            mm : '%d মিনিট',
            h : 'এক ঘন্টা',
            hh : '%d ঘন্টা',
            d : 'এক দিন',
            dd : '%d দিন',
            M : 'এক মাস',
            MM : '%d মাস',
            y : 'এক বছর',
            yy : '%d বছর'
        },
        preparse: function (string) {
            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'রাত' && hour >= 4) ||
                    (meridiem === 'দুপুর' && hour < 5) ||
                    meridiem === 'বিকাল') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'রাত';
            } else if (hour < 10) {
                return 'সকাল';
            } else if (hour < 17) {
                return 'দুপুর';
            } else if (hour < 20) {
                return 'বিকাল';
            } else {
                return 'রাত';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return bn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bo.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/bo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '༡',
        '2': '༢',
        '3': '༣',
        '4': '༤',
        '5': '༥',
        '6': '༦',
        '7': '༧',
        '8': '༨',
        '9': '༩',
        '0': '༠'
    },
    numberMap = {
        '༡': '1',
        '༢': '2',
        '༣': '3',
        '༤': '4',
        '༥': '5',
        '༦': '6',
        '༧': '7',
        '༨': '8',
        '༩': '9',
        '༠': '0'
    };

    var bo = moment.defineLocale('bo', {
        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[དི་རིང] LT',
            nextDay : '[སང་ཉིན] LT',
            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay : '[ཁ་སང] LT',
            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ལ་',
            past : '%s སྔན་ལ',
            s : 'ལམ་སང',
            ss : '%d སྐར་ཆ།',
            m : 'སྐར་མ་གཅིག',
            mm : '%d སྐར་མ',
            h : 'ཆུ་ཚོད་གཅིག',
            hh : '%d ཆུ་ཚོད',
            d : 'ཉིན་གཅིག',
            dd : '%d ཉིན་',
            M : 'ཟླ་བ་གཅིག',
            MM : '%d ཟླ་བ',
            y : 'ལོ་གཅིག',
            yy : '%d ལོ'
        },
        preparse: function (string) {
            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
                    (meridiem === 'ཉིན་གུང' && hour < 5) ||
                    meridiem === 'དགོང་དག') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'མཚན་མོ';
            } else if (hour < 10) {
                return 'ཞོགས་ཀས';
            } else if (hour < 17) {
                return 'ཉིན་གུང';
            } else if (hour < 20) {
                return 'དགོང་དག';
            } else {
                return 'མཚན་མོ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return bo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/br.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/br.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function relativeTimeWithMutation(number, withoutSuffix, key) {
        var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
        };
        return number + ' ' + mutation(format[key], number);
    }
    function specialMutationForYears(number) {
        switch (lastNumber(number)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
                return number + ' bloaz';
            default:
                return number + ' vloaz';
        }
    }
    function lastNumber(number) {
        if (number > 9) {
            return lastNumber(number % 10);
        }
        return number;
    }
    function mutation(text, number) {
        if (number === 2) {
            return softMutation(text);
        }
        return text;
    }
    function softMutation(text) {
        var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
        };
        if (mutationTable[text.charAt(0)] === undefined) {
            return text;
        }
        return mutationTable[text.charAt(0)] + text.substring(1);
    }

    var br = moment.defineLocale('br', {
        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h[e]mm A',
            LTS : 'h[e]mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [a viz] MMMM YYYY',
            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
        },
        calendar : {
            sameDay : '[Hiziv da] LT',
            nextDay : '[Warc\'hoazh da] LT',
            nextWeek : 'dddd [da] LT',
            lastDay : '[Dec\'h da] LT',
            lastWeek : 'dddd [paset da] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'a-benn %s',
            past : '%s \'zo',
            s : 'un nebeud segondennoù',
            ss : '%d eilenn',
            m : 'ur vunutenn',
            mm : relativeTimeWithMutation,
            h : 'un eur',
            hh : '%d eur',
            d : 'un devezh',
            dd : relativeTimeWithMutation,
            M : 'ur miz',
            MM : relativeTimeWithMutation,
            y : 'ur bloaz',
            yy : specialMutationForYears
        },
        dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
        ordinal : function (number) {
            var output = (number === 1) ? 'añ' : 'vet';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return br;

})));


/***/ }),

/***/ "./node_modules/moment/locale/bs.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/bs.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    var bs = moment.defineLocale('bs', {
        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate,
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return bs;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ca.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ca.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ca = moment.defineLocale('ca', {
        months : {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
            format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
            isFormat: /D[oD]?(\s)+MMMM/
        },
        monthsShort : 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
        weekdaysMin : 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [de] YYYY',
            ll : 'D MMM YYYY',
            LLL : 'D MMMM [de] YYYY [a les] H:mm',
            lll : 'D MMM YYYY, H:mm',
            LLLL : 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll : 'ddd D MMM YYYY, H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextDay : function () {
                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastDay : function () {
                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'd\'aquí %s',
            past : 'fa %s',
            s : 'uns segons',
            ss : '%d segons',
            m : 'un minut',
            mm : '%d minuts',
            h : 'una hora',
            hh : '%d hores',
            d : 'un dia',
            dd : '%d dies',
            M : 'un mes',
            MM : '%d mesos',
            y : 'un any',
            yy : '%d anys'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal : function (number, period) {
            var output = (number === 1) ? 'r' :
                (number === 2) ? 'n' :
                (number === 3) ? 'r' :
                (number === 4) ? 't' : 'è';
            if (period === 'w' || period === 'W') {
                output = 'a';
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ca;

})));


/***/ }),

/***/ "./node_modules/moment/locale/cs.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/cs.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

    var monthsParse = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i];
    // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
    // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
    var monthsRegex = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

    function plural(n) {
        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'sekundy' : 'sekund');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'minuty' : 'minut');
                } else {
                    return result + 'minutami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'hodiny' : 'hodin');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'dny' : 'dní');
                } else {
                    return result + 'dny';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'měsíce' : 'měsíců');
                } else {
                    return result + 'měsíci';
                }
                break;
            case 'y':  // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
            case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'roky' : 'let');
                } else {
                    return result + 'lety';
                }
                break;
        }
    }

    var cs = moment.defineLocale('cs', {
        months : months,
        monthsShort : monthsShort,
        monthsRegex : monthsRegex,
        monthsShortRegex : monthsRegex,
        // NOTE: 'červen' is substring of 'červenec'; therefore 'červenec' must precede 'červen' in the regex to be fully matched.
        // Otherwise parser matches '1. červenec' as '1. červen' + 'ec'.
        monthsStrictRegex : /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
        monthsShortStrictRegex : /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm',
            l : 'D. M. YYYY'
        },
        calendar : {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v neděli v] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [v] LT';
                    case 3:
                        return '[ve středu v] LT';
                    case 4:
                        return '[ve čtvrtek v] LT';
                    case 5:
                        return '[v pátek v] LT';
                    case 6:
                        return '[v sobotu v] LT';
                }
            },
            lastDay: '[včera v] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulou neděli v] LT';
                    case 1:
                    case 2:
                        return '[minulé] dddd [v] LT';
                    case 3:
                        return '[minulou středu v] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [v] LT';
                    case 6:
                        return '[minulou sobotu v] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'před %s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse : /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return cs;

})));


/***/ }),

/***/ "./node_modules/moment/locale/cv.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/cv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var cv = moment.defineLocale('cv', {
        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
        },
        calendar : {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L'
        },
        relativeTime : {
            future : function (output) {
                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
                return output + affix;
            },
            past : '%s каялла',
            s : 'пӗр-ик ҫеккунт',
            ss : '%d ҫеккунт',
            m : 'пӗр минут',
            mm : '%d минут',
            h : 'пӗр сехет',
            hh : '%d сехет',
            d : 'пӗр кун',
            dd : '%d кун',
            M : 'пӗр уйӑх',
            MM : '%d уйӑх',
            y : 'пӗр ҫул',
            yy : '%d ҫул'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
        ordinal : '%d-мӗш',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return cv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/cy.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/cy.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var cy = moment.defineLocale('cy', {
        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
        weekdaysParseExact : true,
        // time formats are the same as en-gb
        longDateFormat: {
            LT: 'HH:mm',
            LTS : 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
        ordinal: function (number) {
            var b = number,
                output = '',
                lookup = [
                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
                ];
            if (b > 20) {
                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                    output = 'fed'; // not 30ain, 70ain or 90ain
                } else {
                    output = 'ain';
                }
            } else if (b > 0) {
                output = lookup[b];
            }
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return cy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/da.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/da.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var da = moment.defineLocale('da', {
        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay : '[i dag kl.] LT',
            nextDay : '[i morgen kl.] LT',
            nextWeek : 'på dddd [kl.] LT',
            lastDay : '[i går kl.] LT',
            lastWeek : '[i] dddd[s kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'få sekunder',
            ss : '%d sekunder',
            m : 'et minut',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dage',
            M : 'en måned',
            MM : '%d måneder',
            y : 'et år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return da;

})));


/***/ }),

/***/ "./node_modules/moment/locale/de-at.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/de-at.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var deAt = moment.defineLocale('de-at', {
        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return deAt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/de-ch.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/de-ch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var deCh = moment.defineLocale('de-ch', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return deCh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/de.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/de.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var de = moment.defineLocale('de', {
        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort : 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY HH:mm',
            LLLL : 'dddd, D. MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
        },
        relativeTime : {
            future : 'in %s',
            past : 'vor %s',
            s : 'ein paar Sekunden',
            ss : '%d Sekunden',
            m : processRelativeTime,
            mm : '%d Minuten',
            h : processRelativeTime,
            hh : '%d Stunden',
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return de;

})));


/***/ }),

/***/ "./node_modules/moment/locale/dv.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/dv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var months = [
        'ޖެނުއަރީ',
        'ފެބްރުއަރީ',
        'މާރިޗު',
        'އޭޕްރީލު',
        'މޭ',
        'ޖޫން',
        'ޖުލައި',
        'އޯގަސްޓު',
        'ސެޕްޓެމްބަރު',
        'އޮކްޓޯބަރު',
        'ނޮވެމްބަރު',
        'ޑިސެމްބަރު'
    ], weekdays = [
        'އާދިއްތަ',
        'ހޯމަ',
        'އަންގާރަ',
        'ބުދަ',
        'ބުރާސްފަތި',
        'ހުކުރު',
        'ހޮނިހިރު'
    ];

    var dv = moment.defineLocale('dv', {
        months : months,
        monthsShort : months,
        weekdays : weekdays,
        weekdaysShort : weekdays,
        weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
        longDateFormat : {

            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'D/M/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /މކ|މފ/,
        isPM : function (input) {
            return 'މފ' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'މކ';
            } else {
                return 'މފ';
            }
        },
        calendar : {
            sameDay : '[މިއަދު] LT',
            nextDay : '[މާދަމާ] LT',
            nextWeek : 'dddd LT',
            lastDay : '[އިއްޔެ] LT',
            lastWeek : '[ފާއިތުވި] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ތެރޭގައި %s',
            past : 'ކުރިން %s',
            s : 'ސިކުންތުކޮޅެއް',
            ss : 'd% ސިކުންތު',
            m : 'މިނިޓެއް',
            mm : 'މިނިޓު %d',
            h : 'ގަޑިއިރެއް',
            hh : 'ގަޑިއިރު %d',
            d : 'ދުވަހެއް',
            dd : 'ދުވަސް %d',
            M : 'މަހެއް',
            MM : 'މަސް %d',
            y : 'އަހަރެއް',
            yy : 'އަހަރު %d'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 7,  // Sunday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return dv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/el.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/el.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }


    var el = moment.defineLocale('el', {
        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return this._monthsNominativeEl;
            } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
                return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
                return this._monthsNominativeEl[momentToFormat.month()];
            }
        },
        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'μμ' : 'ΜΜ';
            } else {
                return isLower ? 'πμ' : 'ΠΜ';
            }
        },
        isPM : function (input) {
            return ((input + '').toLowerCase()[0] === 'μ');
        },
        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendarEl : {
            sameDay : '[Σήμερα {}] LT',
            nextDay : '[Αύριο {}] LT',
            nextWeek : 'dddd [{}] LT',
            lastDay : '[Χθες {}] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 6:
                        return '[το προηγούμενο] dddd [{}] LT';
                    default:
                        return '[την προηγούμενη] dddd [{}] LT';
                }
            },
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();
            if (isFunction(output)) {
                output = output.apply(mom);
            }
            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
        },
        relativeTime : {
            future : 'σε %s',
            past : '%s πριν',
            s : 'λίγα δευτερόλεπτα',
            ss : '%d δευτερόλεπτα',
            m : 'ένα λεπτό',
            mm : '%d λεπτά',
            h : 'μία ώρα',
            hh : '%d ώρες',
            d : 'μία μέρα',
            dd : '%d μέρες',
            M : 'ένας μήνας',
            MM : '%d μήνες',
            y : 'ένας χρόνος',
            yy : '%d χρόνια'
        },
        dayOfMonthOrdinalParse: /\d{1,2}η/,
        ordinal: '%dη',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4st is the first week of the year.
        }
    });

    return el;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-SG.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-SG.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enSG = moment.defineLocale('en-SG', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enSG;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-au.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-au.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enAu = moment.defineLocale('en-au', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enAu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-ca.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-ca.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enCa = moment.defineLocale('en-ca', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'YYYY-MM-DD',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY h:mm A',
            LLLL : 'dddd, MMMM D, YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    return enCa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-gb.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-gb.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enGb = moment.defineLocale('en-gb', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enGb;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-ie.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-ie.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enIe = moment.defineLocale('en-ie', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enIe;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-il.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-il.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enIl = moment.defineLocale('en-il', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    return enIl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/en-nz.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/en-nz.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var enNz = moment.defineLocale('en-nz', {
        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'in %s',
            past : '%s ago',
            s : 'a few seconds',
            ss : '%d seconds',
            m : 'a minute',
            mm : '%d minutes',
            h : 'an hour',
            hh : '%d hours',
            d : 'a day',
            dd : '%d days',
            M : 'a month',
            MM : '%d months',
            y : 'a year',
            yy : '%d years'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return enNz;

})));


/***/ }),

/***/ "./node_modules/moment/locale/eo.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/eo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var eo = moment.defineLocale('eo', {
        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
        weekdays : 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
        weekdaysShort : 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
        weekdaysMin : 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D[-a de] MMMM, YYYY',
            LLL : 'D[-a de] MMMM, YYYY HH:mm',
            LLLL : 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function (input) {
            return input.charAt(0).toLowerCase() === 'p';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
                return isLower ? 'a.t.m.' : 'A.T.M.';
            }
        },
        calendar : {
            sameDay : '[Hodiaŭ je] LT',
            nextDay : '[Morgaŭ je] LT',
            nextWeek : 'dddd [je] LT',
            lastDay : '[Hieraŭ je] LT',
            lastWeek : '[pasinta] dddd [je] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'post %s',
            past : 'antaŭ %s',
            s : 'sekundoj',
            ss : '%d sekundoj',
            m : 'minuto',
            mm : '%d minutoj',
            h : 'horo',
            hh : '%d horoj',
            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
            dd : '%d tagoj',
            M : 'monato',
            MM : '%d monatoj',
            y : 'jaro',
            yy : '%d jaroj'
        },
        dayOfMonthOrdinalParse: /\d{1,2}a/,
        ordinal : '%da',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return eo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/es-do.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/es-do.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var esDo = moment.defineLocale('es-do', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return esDo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/es-us.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/es-us.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var esUs = moment.defineLocale('es-us', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'MM/DD/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY h:mm A',
            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return esUs;

})));


/***/ }),

/***/ "./node_modules/moment/locale/es.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/es.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

    var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
    var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;

    var es = moment.defineLocale('es', {
        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
                return monthsShort[m.month()];
            } else {
                return monthsShortDot[m.month()];
            }
        },
        monthsRegex : monthsRegex,
        monthsShortRegex : monthsRegex,
        monthsStrictRegex : /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex : /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,
        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextDay : function () {
                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastDay : function () {
                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            lastWeek : function () {
                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'en %s',
            past : 'hace %s',
            s : 'unos segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'una hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un año',
            yy : '%d años'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return es;

})));


/***/ }),

/***/ "./node_modules/moment/locale/et.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/et.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            'ss': [number + 'sekundi', number + 'sekundit'],
            'm' : ['ühe minuti', 'üks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd' : ['ühe päeva', 'üks päev'],
            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
        };
        if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
        }
        return isFuture ? format[key][0] : format[key][1];
    }

    var et = moment.defineLocale('et', {
        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
        longDateFormat : {
            LT   : 'H:mm',
            LTS : 'H:mm:ss',
            L    : 'DD.MM.YYYY',
            LL   : 'D. MMMM YYYY',
            LLL  : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[Täna,] LT',
            nextDay  : '[Homme,] LT',
            nextWeek : '[Järgmine] dddd LT',
            lastDay  : '[Eile,] LT',
            lastWeek : '[Eelmine] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s pärast',
            past   : '%s tagasi',
            s      : processRelativeTime,
            ss     : processRelativeTime,
            m      : processRelativeTime,
            mm     : processRelativeTime,
            h      : processRelativeTime,
            hh     : processRelativeTime,
            d      : processRelativeTime,
            dd     : '%d päeva',
            M      : processRelativeTime,
            MM     : processRelativeTime,
            y      : processRelativeTime,
            yy     : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return et;

})));


/***/ }),

/***/ "./node_modules/moment/locale/eu.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/eu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var eu = moment.defineLocale('eu', {
        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
        monthsParseExact : true,
        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY[ko] MMMM[ren] D[a]',
            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l : 'YYYY-M-D',
            ll : 'YYYY[ko] MMM D[a]',
            lll : 'YYYY[ko] MMM D[a] HH:mm',
            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
        },
        calendar : {
            sameDay : '[gaur] LT[etan]',
            nextDay : '[bihar] LT[etan]',
            nextWeek : 'dddd LT[etan]',
            lastDay : '[atzo] LT[etan]',
            lastWeek : '[aurreko] dddd LT[etan]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s barru',
            past : 'duela %s',
            s : 'segundo batzuk',
            ss : '%d segundo',
            m : 'minutu bat',
            mm : '%d minutu',
            h : 'ordu bat',
            hh : '%d ordu',
            d : 'egun bat',
            dd : '%d egun',
            M : 'hilabete bat',
            MM : '%d hilabete',
            y : 'urte bat',
            yy : '%d urte'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return eu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fa.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/fa.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    }, numberMap = {
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
        '۰': '0'
    };

    var fa = moment.defineLocale('fa', {
        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function (input) {
            return /بعد از ظهر/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'قبل از ظهر';
            } else {
                return 'بعد از ظهر';
            }
        },
        calendar : {
            sameDay : '[امروز ساعت] LT',
            nextDay : '[فردا ساعت] LT',
            nextWeek : 'dddd [ساعت] LT',
            lastDay : '[دیروز ساعت] LT',
            lastWeek : 'dddd [پیش] [ساعت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'در %s',
            past : '%s پیش',
            s : 'چند ثانیه',
            ss : 'ثانیه d%',
            m : 'یک دقیقه',
            mm : '%d دقیقه',
            h : 'یک ساعت',
            hh : '%d ساعت',
            d : 'یک روز',
            dd : '%d روز',
            M : 'یک ماه',
            MM : '%d ماه',
            y : 'یک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/[۰-۹]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        dayOfMonthOrdinalParse: /\d{1,2}م/,
        ordinal : '%dم',
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    return fa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fi.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/fi.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
        numbersFuture = [
            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
            numbersPast[7], numbersPast[8], numbersPast[9]
        ];
    function translate(number, withoutSuffix, key, isFuture) {
        var result = '';
        switch (key) {
            case 's':
                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
            case 'ss':
                return isFuture ? 'sekunnin' : 'sekuntia';
            case 'm':
                return isFuture ? 'minuutin' : 'minuutti';
            case 'mm':
                result = isFuture ? 'minuutin' : 'minuuttia';
                break;
            case 'h':
                return isFuture ? 'tunnin' : 'tunti';
            case 'hh':
                result = isFuture ? 'tunnin' : 'tuntia';
                break;
            case 'd':
                return isFuture ? 'päivän' : 'päivä';
            case 'dd':
                result = isFuture ? 'päivän' : 'päivää';
                break;
            case 'M':
                return isFuture ? 'kuukauden' : 'kuukausi';
            case 'MM':
                result = isFuture ? 'kuukauden' : 'kuukautta';
                break;
            case 'y':
                return isFuture ? 'vuoden' : 'vuosi';
            case 'yy':
                result = isFuture ? 'vuoden' : 'vuotta';
                break;
        }
        result = verbalNumber(number, isFuture) + ' ' + result;
        return result;
    }
    function verbalNumber(number, isFuture) {
        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
    }

    var fi = moment.defineLocale('fi', {
        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'Do MMMM[ta] YYYY',
            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l : 'D.M.YYYY',
            ll : 'Do MMM YYYY',
            lll : 'Do MMM YYYY, [klo] HH.mm',
            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
        },
        calendar : {
            sameDay : '[tänään] [klo] LT',
            nextDay : '[huomenna] [klo] LT',
            nextWeek : 'dddd [klo] LT',
            lastDay : '[eilen] [klo] LT',
            lastWeek : '[viime] dddd[na] [klo] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s päästä',
            past : '%s sitten',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fo.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/fo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var fo = moment.defineLocale('fo', {
        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D. MMMM, YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Í dag kl.] LT',
            nextDay : '[Í morgin kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[Í gjár kl.] LT',
            lastWeek : '[síðstu] dddd [kl] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'um %s',
            past : '%s síðani',
            s : 'fá sekund',
            ss : '%d sekundir',
            m : 'ein minuttur',
            mm : '%d minuttir',
            h : 'ein tími',
            hh : '%d tímar',
            d : 'ein dagur',
            dd : '%d dagar',
            M : 'ein mánaður',
            MM : '%d mánaðir',
            y : 'eitt ár',
            yy : '%d ár'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fr-ca.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/fr-ca.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var frCa = moment.defineLocale('fr-ca', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        }
    });

    return frCa;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fr-ch.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/fr-ch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var frCh = moment.defineLocale('fr-ch', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal : function (number, period) {
            switch (period) {
                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'D':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return frCh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fr.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/fr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var fr = moment.defineLocale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        monthsParseExact : true,
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin : 'di_lu_ma_me_je_ve_sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Aujourd’hui à] LT',
            nextDay : '[Demain à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[Hier à] LT',
            lastWeek : 'dddd [dernier à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            ss : '%d secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal : function (number, period) {
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return number + (number === 1 ? 'er' : '');

                // Words with masculine grammatical gender: mois, trimestre, jour
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/fy.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/fy.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

    var fy = moment.defineLocale('fy', {
        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },
        monthsParseExact : true,
        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'oer %s',
            past : '%s lyn',
            s : 'in pear sekonden',
            ss : '%d sekonden',
            m : 'ien minút',
            mm : '%d minuten',
            h : 'ien oere',
            hh : '%d oeren',
            d : 'ien dei',
            dd : '%d dagen',
            M : 'ien moanne',
            MM : '%d moannen',
            y : 'ien jier',
            yy : '%d jierren'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return fy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ga.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ga.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';



    var months = [
        'Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Méitheamh', 'Iúil', 'Lúnasa', 'Meán Fómhair', 'Deaireadh Fómhair', 'Samhain', 'Nollaig'
    ];

    var monthsShort = ['Eaná', 'Feab', 'Márt', 'Aibr', 'Beal', 'Méit', 'Iúil', 'Lúna', 'Meán', 'Deai', 'Samh', 'Noll'];

    var weekdays = ['Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Satharn'];

    var weekdaysShort = ['Dom', 'Lua', 'Mái', 'Céa', 'Déa', 'hAo', 'Sat'];

    var weekdaysMin = ['Do', 'Lu', 'Má', 'Ce', 'Dé', 'hA', 'Sa'];

    var ga = moment.defineLocale('ga', {
        months: months,
        monthsShort: monthsShort,
        monthsParseExact: true,
        weekdays: weekdays,
        weekdaysShort: weekdaysShort,
        weekdaysMin: weekdaysMin,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[Inniu ag] LT',
            nextDay: '[Amárach ag] LT',
            nextWeek: 'dddd [ag] LT',
            lastDay: '[Inné aig] LT',
            lastWeek: 'dddd [seo caite] [ag] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i %s',
            past: '%s ó shin',
            s: 'cúpla soicind',
            ss: '%d soicind',
            m: 'nóiméad',
            mm: '%d nóiméad',
            h: 'uair an chloig',
            hh: '%d uair an chloig',
            d: 'lá',
            dd: '%d lá',
            M: 'mí',
            MM: '%d mí',
            y: 'bliain',
            yy: '%d bliain'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ga;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gd.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/gd.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var months = [
        'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
    ];

    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

    var gd = moment.defineLocale('gd', {
        months : months,
        monthsShort : monthsShort,
        monthsParseExact : true,
        weekdays : weekdays,
        weekdaysShort : weekdaysShort,
        weekdaysMin : weekdaysMin,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[An-diugh aig] LT',
            nextDay : '[A-màireach aig] LT',
            nextWeek : 'dddd [aig] LT',
            lastDay : '[An-dè aig] LT',
            lastWeek : 'dddd [seo chaidh] [aig] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ann an %s',
            past : 'bho chionn %s',
            s : 'beagan diogan',
            ss : '%d diogan',
            m : 'mionaid',
            mm : '%d mionaidean',
            h : 'uair',
            hh : '%d uairean',
            d : 'latha',
            dd : '%d latha',
            M : 'mìos',
            MM : '%d mìosan',
            y : 'bliadhna',
            yy : '%d bliadhna'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(d|na|mh)/,
        ordinal : function (number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return gd;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gl.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/gl.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var gl = moment.defineLocale('gl', {
        months : 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
        monthsShort : 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
        weekdaysShort : 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
        weekdaysMin : 'do_lu_ma_mé_xo_ve_sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY H:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
        },
        calendar : {
            sameDay : function () {
                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextDay : function () {
                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
            },
            nextWeek : function () {
                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            lastDay : function () {
                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
            },
            lastWeek : function () {
                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : function (str) {
                if (str.indexOf('un') === 0) {
                    return 'n' + str;
                }
                return 'en ' + str;
            },
            past : 'hai %s',
            s : 'uns segundos',
            ss : '%d segundos',
            m : 'un minuto',
            mm : '%d minutos',
            h : 'unha hora',
            hh : '%d horas',
            d : 'un día',
            dd : '%d días',
            M : 'un mes',
            MM : '%d meses',
            y : 'un ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return gl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gom-latn.js":
/*!************************************************!*\
  !*** ./node_modules/moment/locale/gom-latn.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['thodde secondanim', 'thodde second'],
            'ss': [number + ' secondanim', number + ' second'],
            'm': ['eka mintan', 'ek minute'],
            'mm': [number + ' mintanim', number + ' mintam'],
            'h': ['eka voran', 'ek vor'],
            'hh': [number + ' voranim', number + ' voram'],
            'd': ['eka disan', 'ek dis'],
            'dd': [number + ' disanim', number + ' dis'],
            'M': ['eka mhoinean', 'ek mhoino'],
            'MM': [number + ' mhoineanim', number + ' mhoine'],
            'y': ['eka vorsan', 'ek voros'],
            'yy': [number + ' vorsanim', number + ' vorsam']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }

    var gomLatn = moment.defineLocale('gom-latn', {
        months : 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
        monthsShort : 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays : 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
        weekdaysShort : 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
        weekdaysMin : 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'A h:mm [vazta]',
            LTS : 'A h:mm:ss [vazta]',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY A h:mm [vazta]',
            LLLL : 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
        },
        calendar : {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s',
            past : '%s adim',
            s : processRelativeTime,
            ss : processRelativeTime,
            m : processRelativeTime,
            mm : processRelativeTime,
            h : processRelativeTime,
            hh : processRelativeTime,
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse : /\d{1,2}(er)/,
        ordinal : function (number, period) {
            switch (period) {
                // the ordinal 'er' only applies to day of the month
                case 'D':
                    return number + 'er';
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                case 'w':
                case 'W':
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        },
        meridiemParse: /rati|sokalli|donparam|sanje/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'rati') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'sokalli') {
                return hour;
            } else if (meridiem === 'donparam') {
                return hour > 12 ? hour : hour + 12;
            } else if (meridiem === 'sanje') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'rati';
            } else if (hour < 12) {
                return 'sokalli';
            } else if (hour < 16) {
                return 'donparam';
            } else if (hour < 20) {
                return 'sanje';
            } else {
                return 'rati';
            }
        }
    });

    return gomLatn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/gu.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/gu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
            '1': '૧',
            '2': '૨',
            '3': '૩',
            '4': '૪',
            '5': '૫',
            '6': '૬',
            '7': '૭',
            '8': '૮',
            '9': '૯',
            '0': '૦'
        },
        numberMap = {
            '૧': '1',
            '૨': '2',
            '૩': '3',
            '૪': '4',
            '૫': '5',
            '૬': '6',
            '૭': '7',
            '૮': '8',
            '૯': '9',
            '૦': '0'
        };

    var gu = moment.defineLocale('gu', {
        months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
        monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
        monthsParseExact: true,
        weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
        weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
        weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
        longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
        },
        calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ'
        },
        preparse: function (string) {
            return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
        meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'રાત') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'સવાર') {
                return hour;
            } else if (meridiem === 'બપોર') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'સાંજ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'રાત';
            } else if (hour < 10) {
                return 'સવાર';
            } else if (hour < 17) {
                return 'બપોર';
            } else if (hour < 20) {
                return 'સાંજ';
            } else {
                return 'રાત';
            }
        },
        week: {
            dow: 0, // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.
        }
    });

    return gu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/he.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/he.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var he = moment.defineLocale('he', {
        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [ב]MMMM YYYY',
            LLL : 'D [ב]MMMM YYYY HH:mm',
            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
            l : 'D/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[היום ב־]LT',
            nextDay : '[מחר ב־]LT',
            nextWeek : 'dddd [בשעה] LT',
            lastDay : '[אתמול ב־]LT',
            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'בעוד %s',
            past : 'לפני %s',
            s : 'מספר שניות',
            ss : '%d שניות',
            m : 'דקה',
            mm : '%d דקות',
            h : 'שעה',
            hh : function (number) {
                if (number === 2) {
                    return 'שעתיים';
                }
                return number + ' שעות';
            },
            d : 'יום',
            dd : function (number) {
                if (number === 2) {
                    return 'יומיים';
                }
                return number + ' ימים';
            },
            M : 'חודש',
            MM : function (number) {
                if (number === 2) {
                    return 'חודשיים';
                }
                return number + ' חודשים';
            },
            y : 'שנה',
            yy : function (number) {
                if (number === 2) {
                    return 'שנתיים';
                } else if (number % 10 === 0 && number !== 10) {
                    return number + ' שנה';
                }
                return number + ' שנים';
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM : function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 5) {
                return 'לפנות בוקר';
            } else if (hour < 10) {
                return 'בבוקר';
            } else if (hour < 12) {
                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            } else if (hour < 18) {
                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            } else {
                return 'בערב';
            }
        }
    });

    return he;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hi.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/hi.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var hi = moment.defineLocale('hi', {
        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
        monthsParseExact: true,
        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm बजे',
            LTS : 'A h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[कल] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[कल] LT',
            lastWeek : '[पिछले] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s में',
            past : '%s पहले',
            s : 'कुछ ही क्षण',
            ss : '%d सेकंड',
            m : 'एक मिनट',
            mm : '%d मिनट',
            h : 'एक घंटा',
            hh : '%d घंटे',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महीने',
            MM : '%d महीने',
            y : 'एक वर्ष',
            yy : '%d वर्ष'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सुबह') {
                return hour;
            } else if (meridiem === 'दोपहर') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'शाम') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात';
            } else if (hour < 10) {
                return 'सुबह';
            } else if (hour < 17) {
                return 'दोपहर';
            } else if (hour < 20) {
                return 'शाम';
            } else {
                return 'रात';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return hi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hr.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/hr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                if (number === 1) {
                    result += 'sekunda';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sekunde';
                } else {
                    result += 'sekundi';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
            case 'mm':
                if (number === 1) {
                    result += 'minuta';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'minute';
                } else {
                    result += 'minuta';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'jedan sat' : 'jednog sata';
            case 'hh':
                if (number === 1) {
                    result += 'sat';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'sata';
                } else {
                    result += 'sati';
                }
                return result;
            case 'dd':
                if (number === 1) {
                    result += 'dan';
                } else {
                    result += 'dana';
                }
                return result;
            case 'MM':
                if (number === 1) {
                    result += 'mjesec';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'mjeseca';
                } else {
                    result += 'mjeseci';
                }
                return result;
            case 'yy':
                if (number === 1) {
                    result += 'godina';
                } else if (number === 2 || number === 3 || number === 4) {
                    result += 'godine';
                } else {
                    result += 'godina';
                }
                return result;
        }
    }

    var hr = moment.defineLocale('hr', {
        months : {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
        },
        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danas u] LT',
            nextDay  : '[sutra u] LT',
            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[jučer u] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                        return '[prošlu] dddd [u] LT';
                    case 6:
                        return '[prošle] [subote] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prošli] dddd [u] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'par sekundi',
            ss     : translate,
            m      : translate,
            mm     : translate,
            h      : translate,
            hh     : translate,
            d      : 'dan',
            dd     : translate,
            M      : 'mjesec',
            MM     : translate,
            y      : 'godinu',
            yy     : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return hr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hu.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/hu.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
    function translate(number, withoutSuffix, key, isFuture) {
        var num = number;
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
            case 'ss':
                return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';
            case 'm':
                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
            case 'h':
                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
            case 'd':
                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
            case 'M':
                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
            case 'y':
                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
        }
        return '';
    }
    function week(isFuture) {
        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
    }

    var hu = moment.defineLocale('hu', {
        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY. MMMM D.',
            LLL : 'YYYY. MMMM D. H:mm',
            LLLL : 'YYYY. MMMM D., dddd H:mm'
        },
        meridiemParse: /de|du/i,
        isPM: function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower === true ? 'de' : 'DE';
            } else {
                return isLower === true ? 'du' : 'DU';
            }
        },
        calendar : {
            sameDay : '[ma] LT[-kor]',
            nextDay : '[holnap] LT[-kor]',
            nextWeek : function () {
                return week.call(this, true);
            },
            lastDay : '[tegnap] LT[-kor]',
            lastWeek : function () {
                return week.call(this, false);
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s múlva',
            past : '%s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return hu;

})));


/***/ }),

/***/ "./node_modules/moment/locale/hy-am.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/hy-am.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var hyAm = moment.defineLocale('hy-am', {
        months : {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
        },
        monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
        weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY թ.',
            LLL : 'D MMMM YYYY թ., HH:mm',
            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
        },
        calendar : {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function () {
                return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function () {
                return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s հետո',
            past : '%s առաջ',
            s : 'մի քանի վայրկյան',
            ss : '%d վայրկյան',
            m : 'րոպե',
            mm : '%d րոպե',
            h : 'ժամ',
            hh : '%d ժամ',
            d : 'օր',
            dd : '%d օր',
            M : 'ամիս',
            MM : '%d ամիս',
            y : 'տարի',
            yy : '%d տարի'
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function (input) {
            return /^(ցերեկվա|երեկոյան)$/.test(input);
        },
        meridiem : function (hour) {
            if (hour < 4) {
                return 'գիշերվա';
            } else if (hour < 12) {
                return 'առավոտվա';
            } else if (hour < 17) {
                return 'ցերեկվա';
            } else {
                return 'երեկոյան';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'DDD':
                case 'w':
                case 'W':
                case 'DDDo':
                    if (number === 1) {
                        return number + '-ին';
                    }
                    return number + '-րդ';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return hyAm;

})));


/***/ }),

/***/ "./node_modules/moment/locale/id.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/id.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var id = moment.defineLocale('id', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'siang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'siang';
            } else if (hours < 19) {
                return 'sore';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Besok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kemarin pukul] LT',
            lastWeek : 'dddd [lalu pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lalu',
            s : 'beberapa detik',
            ss : '%d detik',
            m : 'semenit',
            mm : '%d menit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return id;

})));


/***/ }),

/***/ "./node_modules/moment/locale/is.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/is.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function plural(n) {
        if (n % 100 === 11) {
            return true;
        } else if (n % 10 === 1) {
            return false;
        }
        return true;
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
            case 'ss':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
                }
                return result + 'sekúnda';
            case 'm':
                return withoutSuffix ? 'mínúta' : 'mínútu';
            case 'mm':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
                } else if (withoutSuffix) {
                    return result + 'mínúta';
                }
                return result + 'mínútu';
            case 'hh':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
                }
                return result + 'klukkustund';
            case 'd':
                if (withoutSuffix) {
                    return 'dagur';
                }
                return isFuture ? 'dag' : 'degi';
            case 'dd':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'dagar';
                    }
                    return result + (isFuture ? 'daga' : 'dögum');
                } else if (withoutSuffix) {
                    return result + 'dagur';
                }
                return result + (isFuture ? 'dag' : 'degi');
            case 'M':
                if (withoutSuffix) {
                    return 'mánuður';
                }
                return isFuture ? 'mánuð' : 'mánuði';
            case 'MM':
                if (plural(number)) {
                    if (withoutSuffix) {
                        return result + 'mánuðir';
                    }
                    return result + (isFuture ? 'mánuði' : 'mánuðum');
                } else if (withoutSuffix) {
                    return result + 'mánuður';
                }
                return result + (isFuture ? 'mánuð' : 'mánuði');
            case 'y':
                return withoutSuffix || isFuture ? 'ár' : 'ári';
            case 'yy':
                if (plural(number)) {
                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
                }
                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
        }
    }

    var is = moment.defineLocale('is', {
        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
        },
        calendar : {
            sameDay : '[í dag kl.] LT',
            nextDay : '[á morgun kl.] LT',
            nextWeek : 'dddd [kl.] LT',
            lastDay : '[í gær kl.] LT',
            lastWeek : '[síðasta] dddd [kl.] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'eftir %s',
            past : 'fyrir %s síðan',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : 'klukkustund',
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return is;

})));


/***/ }),

/***/ "./node_modules/moment/locale/it-ch.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/it-ch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var itCh = moment.defineLocale('it-ch', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            ss : '%d secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return itCh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/it.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/it.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var it = moment.defineLocale('it', {
        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
        weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
        weekdaysShort : 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin : 'do_lu_ma_me_gi_ve_sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[la scorsa] dddd [alle] LT';
                    default:
                        return '[lo scorso] dddd [alle] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : function (s) {
                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past : '%s fa',
            s : 'alcuni secondi',
            ss : '%d secondi',
            m : 'un minuto',
            mm : '%d minuti',
            h : 'un\'ora',
            hh : '%d ore',
            d : 'un giorno',
            dd : '%d giorni',
            M : 'un mese',
            MM : '%d mesi',
            y : 'un anno',
            yy : '%d anni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return it;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ja.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ja.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ja = moment.defineLocale('ja', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日 dddd HH:mm',
            l : 'YYYY/MM/DD',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日(ddd) HH:mm'
        },
        meridiemParse: /午前|午後/i,
        isPM : function (input) {
            return input === '午後';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return '午前';
            } else {
                return '午後';
            }
        },
        calendar : {
            sameDay : '[今日] LT',
            nextDay : '[明日] LT',
            nextWeek : function (now) {
                if (now.week() < this.week()) {
                    return '[来週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            lastDay : '[昨日] LT',
            lastWeek : function (now) {
                if (this.week() < now.week()) {
                    return '[先週]dddd LT';
                } else {
                    return 'dddd LT';
                }
            },
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse : /\d{1,2}日/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%s後',
            past : '%s前',
            s : '数秒',
            ss : '%d秒',
            m : '1分',
            mm : '%d分',
            h : '1時間',
            hh : '%d時間',
            d : '1日',
            dd : '%d日',
            M : '1ヶ月',
            MM : '%dヶ月',
            y : '1年',
            yy : '%d年'
        }
    });

    return ja;

})));


/***/ }),

/***/ "./node_modules/moment/locale/jv.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/jv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var jv = moment.defineLocale('jv', {
        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'enjing') {
                return hour;
            } else if (meridiem === 'siyang') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'enjing';
            } else if (hours < 15) {
                return 'siyang';
            } else if (hours < 19) {
                return 'sonten';
            } else {
                return 'ndalu';
            }
        },
        calendar : {
            sameDay : '[Dinten puniko pukul] LT',
            nextDay : '[Mbenjang pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kala wingi pukul] LT',
            lastWeek : 'dddd [kepengker pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'wonten ing %s',
            past : '%s ingkang kepengker',
            s : 'sawetawis detik',
            ss : '%d detik',
            m : 'setunggal menit',
            mm : '%d menit',
            h : 'setunggal jam',
            hh : '%d jam',
            d : 'sedinten',
            dd : '%d dinten',
            M : 'sewulan',
            MM : '%d wulan',
            y : 'setaun',
            yy : '%d taun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return jv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ka.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ka.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ka = moment.defineLocale('ka', {
        months : {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
        },
        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
        weekdays : {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[დღეს] LT[-ზე]',
            nextDay : '[ხვალ] LT[-ზე]',
            lastDay : '[გუშინ] LT[-ზე]',
            nextWeek : '[შემდეგ] dddd LT[-ზე]',
            lastWeek : '[წინა] dddd LT-ზე',
            sameElse : 'L'
        },
        relativeTime : {
            future : function (s) {
                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
                    s.replace(/ი$/, 'ში') :
                    s + 'ში';
            },
            past : function (s) {
                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
                    return s.replace(/(ი|ე)$/, 'ის წინ');
                }
                if ((/წელი/).test(s)) {
                    return s.replace(/წელი$/, 'წლის წინ');
                }
            },
            s : 'რამდენიმე წამი',
            ss : '%d წამი',
            m : 'წუთი',
            mm : '%d წუთი',
            h : 'საათი',
            hh : '%d საათი',
            d : 'დღე',
            dd : '%d დღე',
            M : 'თვე',
            MM : '%d თვე',
            y : 'წელი',
            yy : '%d წელი'
        },
        dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal : function (number) {
            if (number === 0) {
                return number;
            }
            if (number === 1) {
                return number + '-ლი';
            }
            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
                return 'მე-' + number;
            }
            return number + '-ე';
        },
        week : {
            dow : 1,
            doy : 7
        }
    });

    return ka;

})));


/***/ }),

/***/ "./node_modules/moment/locale/kk.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/kk.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-ші',
        1: '-ші',
        2: '-ші',
        3: '-ші',
        4: '-ші',
        5: '-ші',
        6: '-шы',
        7: '-ші',
        8: '-ші',
        9: '-шы',
        10: '-шы',
        20: '-шы',
        30: '-шы',
        40: '-шы',
        50: '-ші',
        60: '-шы',
        70: '-ші',
        80: '-ші',
        90: '-шы',
        100: '-ші'
    };

    var kk = moment.defineLocale('kk', {
        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
        weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
        weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгін сағат] LT',
            nextDay : '[Ертең сағат] LT',
            nextWeek : 'dddd [сағат] LT',
            lastDay : '[Кеше сағат] LT',
            lastWeek : '[Өткен аптаның] dddd [сағат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ішінде',
            past : '%s бұрын',
            s : 'бірнеше секунд',
            ss : '%d секунд',
            m : 'бір минут',
            mm : '%d минут',
            h : 'бір сағат',
            hh : '%d сағат',
            d : 'бір күн',
            dd : '%d күн',
            M : 'бір ай',
            MM : '%d ай',
            y : 'бір жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return kk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/km.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/km.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '១',
        '2': '២',
        '3': '៣',
        '4': '៤',
        '5': '៥',
        '6': '៦',
        '7': '៧',
        '8': '៨',
        '9': '៩',
        '0': '០'
    }, numberMap = {
        '១': '1',
        '២': '2',
        '៣': '3',
        '៤': '4',
        '៥': '5',
        '៦': '6',
        '៧': '7',
        '៨': '8',
        '៩': '9',
        '០': '0'
    };

    var km = moment.defineLocale('km', {
        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split(
            '_'
        ),
        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
        weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ព្រឹក|ល្ងាច/,
        isPM: function (input) {
            return input === 'ល្ងាច';
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ព្រឹក';
            } else {
                return 'ល្ងាច';
            }
        },
        calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ'
        },
        dayOfMonthOrdinalParse : /ទី\d{1,2}/,
        ordinal : 'ទី%d',
        preparse: function (string) {
            return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return km;

})));


/***/ }),

/***/ "./node_modules/moment/locale/kn.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/kn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '೧',
        '2': '೨',
        '3': '೩',
        '4': '೪',
        '5': '೫',
        '6': '೬',
        '7': '೭',
        '8': '೮',
        '9': '೯',
        '0': '೦'
    },
    numberMap = {
        '೧': '1',
        '೨': '2',
        '೩': '3',
        '೪': '4',
        '೫': '5',
        '೬': '6',
        '೭': '7',
        '೮': '8',
        '೯': '9',
        '೦': '0'
    };

    var kn = moment.defineLocale('kn', {
        months : 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
        monthsShort : 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
        monthsParseExact: true,
        weekdays : 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
        weekdaysShort : 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
        weekdaysMin : 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[ಇಂದು] LT',
            nextDay : '[ನಾಳೆ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ನಿನ್ನೆ] LT',
            lastWeek : '[ಕೊನೆಯ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ನಂತರ',
            past : '%s ಹಿಂದೆ',
            s : 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss : '%d ಸೆಕೆಂಡುಗಳು',
            m : 'ಒಂದು ನಿಮಿಷ',
            mm : '%d ನಿಮಿಷ',
            h : 'ಒಂದು ಗಂಟೆ',
            hh : '%d ಗಂಟೆ',
            d : 'ಒಂದು ದಿನ',
            dd : '%d ದಿನ',
            M : 'ಒಂದು ತಿಂಗಳು',
            MM : '%d ತಿಂಗಳು',
            y : 'ಒಂದು ವರ್ಷ',
            yy : '%d ವರ್ಷ'
        },
        preparse: function (string) {
            return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ರಾತ್ರಿ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
                return hour;
            } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ಸಂಜೆ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ರಾತ್ರಿ';
            } else if (hour < 10) {
                return 'ಬೆಳಿಗ್ಗೆ';
            } else if (hour < 17) {
                return 'ಮಧ್ಯಾಹ್ನ';
            } else if (hour < 20) {
                return 'ಸಂಜೆ';
            } else {
                return 'ರಾತ್ರಿ';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
        ordinal : function (number) {
            return number + 'ನೇ';
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return kn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ko.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ko.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ko = moment.defineLocale('ko', {
        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'YYYY.MM.DD.',
            LL : 'YYYY년 MMMM D일',
            LLL : 'YYYY년 MMMM D일 A h:mm',
            LLLL : 'YYYY년 MMMM D일 dddd A h:mm',
            l : 'YYYY.MM.DD.',
            ll : 'YYYY년 MMMM D일',
            lll : 'YYYY년 MMMM D일 A h:mm',
            llll : 'YYYY년 MMMM D일 dddd A h:mm'
        },
        calendar : {
            sameDay : '오늘 LT',
            nextDay : '내일 LT',
            nextWeek : 'dddd LT',
            lastDay : '어제 LT',
            lastWeek : '지난주 dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s 후',
            past : '%s 전',
            s : '몇 초',
            ss : '%d초',
            m : '1분',
            mm : '%d분',
            h : '한 시간',
            hh : '%d시간',
            d : '하루',
            dd : '%d일',
            M : '한 달',
            MM : '%d달',
            y : '일 년',
            yy : '%d년'
        },
        dayOfMonthOrdinalParse : /\d{1,2}(일|월|주)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '일';
                case 'M':
                    return number + '월';
                case 'w':
                case 'W':
                    return number + '주';
                default:
                    return number;
            }
        },
        meridiemParse : /오전|오후/,
        isPM : function (token) {
            return token === '오후';
        },
        meridiem : function (hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
        }
    });

    return ko;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ku.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ku.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '١',
        '2': '٢',
        '3': '٣',
        '4': '٤',
        '5': '٥',
        '6': '٦',
        '7': '٧',
        '8': '٨',
        '9': '٩',
        '0': '٠'
    }, numberMap = {
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',
        '٠': '0'
    },
    months = [
        'کانونی دووەم',
        'شوبات',
        'ئازار',
        'نیسان',
        'ئایار',
        'حوزەیران',
        'تەمموز',
        'ئاب',
        'ئەیلوول',
        'تشرینی یەكەم',
        'تشرینی دووەم',
        'كانونی یەکەم'
    ];


    var ku = moment.defineLocale('ku', {
        months : months,
        monthsShort : months,
        weekdays : 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysShort : 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
        weekdaysMin : 'ی_د_س_چ_پ_ه_ش'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        meridiemParse: /ئێواره‌|به‌یانی/,
        isPM: function (input) {
            return /ئێواره‌/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'به‌یانی';
            } else {
                return 'ئێواره‌';
            }
        },
        calendar : {
            sameDay : '[ئه‌مرۆ كاتژمێر] LT',
            nextDay : '[به‌یانی كاتژمێر] LT',
            nextWeek : 'dddd [كاتژمێر] LT',
            lastDay : '[دوێنێ كاتژمێر] LT',
            lastWeek : 'dddd [كاتژمێر] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'له‌ %s',
            past : '%s',
            s : 'چه‌ند چركه‌یه‌ك',
            ss : 'چركه‌ %d',
            m : 'یه‌ك خوله‌ك',
            mm : '%d خوله‌ك',
            h : 'یه‌ك كاتژمێر',
            hh : '%d كاتژمێر',
            d : 'یه‌ك ڕۆژ',
            dd : '%d ڕۆژ',
            M : 'یه‌ك مانگ',
            MM : '%d مانگ',
            y : 'یه‌ك ساڵ',
            yy : '%d ساڵ'
        },
        preparse: function (string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            }).replace(/,/g, '،');
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12 // The week that contains Jan 12th is the first week of the year.
        }
    });

    return ku;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ky.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ky.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-чү',
        1: '-чи',
        2: '-чи',
        3: '-чү',
        4: '-чү',
        5: '-чи',
        6: '-чы',
        7: '-чи',
        8: '-чи',
        9: '-чу',
        10: '-чу',
        20: '-чы',
        30: '-чу',
        40: '-чы',
        50: '-чү',
        60: '-чы',
        70: '-чи',
        80: '-чи',
        90: '-чу',
        100: '-чү'
    };

    var ky = moment.defineLocale('ky', {
        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
        weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
        weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Бүгүн саат] LT',
            nextDay : '[Эртең саат] LT',
            nextWeek : 'dddd [саат] LT',
            lastDay : '[Кечээ саат] LT',
            lastWeek : '[Өткөн аптанын] dddd [күнү] [саат] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ичинде',
            past : '%s мурун',
            s : 'бирнече секунд',
            ss : '%d секунд',
            m : 'бир мүнөт',
            mm : '%d мүнөт',
            h : 'бир саат',
            hh : '%d саат',
            d : 'бир күн',
            dd : '%d күн',
            M : 'бир ай',
            MM : '%d ай',
            y : 'бир жыл',
            yy : '%d жыл'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal : function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return ky;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lb.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/lb.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
        };
        return withoutSuffix ? format[key][0] : format[key][1];
    }
    function processFutureTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
        }
        return 'an ' + string;
    }
    function processPastTime(string) {
        var number = string.substr(0, string.indexOf(' '));
        if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
        }
        return 'virun ' + string;
    }
    /**
     * Returns true if the word before the given number loses the '-n' ending.
     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
     *
     * @param number {integer}
     * @returns {boolean}
     */
    function eifelerRegelAppliesToNumber(number) {
        number = parseInt(number, 10);
        if (isNaN(number)) {
            return false;
        }
        if (number < 0) {
            // Negative Number --> always true
            return true;
        } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
                return true;
            }
            return false;
        } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10, firstDigit = number / 10;
            if (lastDigit === 0) {
                return eifelerRegelAppliesToNumber(firstDigit);
            }
            return eifelerRegelAppliesToNumber(lastDigit);
        } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
                number = number / 10;
            }
            return eifelerRegelAppliesToNumber(number);
        } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
        }
    }

    var lb = moment.defineLocale('lb', {
        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
        monthsParseExact : true,
        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
        },
        calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function () {
                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
                switch (this.day()) {
                    case 2:
                    case 4:
                        return '[Leschten] dddd [um] LT';
                    default:
                        return '[Leschte] dddd [um] LT';
                }
            }
        },
        relativeTime : {
            future : processFutureTime,
            past : processPastTime,
            s : 'e puer Sekonnen',
            ss : '%d Sekonnen',
            m : processRelativeTime,
            mm : '%d Minutten',
            h : processRelativeTime,
            hh : '%d Stonnen',
            d : processRelativeTime,
            dd : '%d Deeg',
            M : processRelativeTime,
            MM : '%d Méint',
            y : processRelativeTime,
            yy : '%d Joer'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: '%d.',
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lb;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lo.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/lo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var lo = moment.defineLocale('lo', {
        months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
        weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
        weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function (input) {
            return input === 'ຕອນແລງ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ຕອນເຊົ້າ';
            } else {
                return 'ຕອນແລງ';
            }
        },
        calendar : {
            sameDay : '[ມື້ນີ້ເວລາ] LT',
            nextDay : '[ມື້ອື່ນເວລາ] LT',
            nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay : '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ອີກ %s',
            past : '%sຜ່ານມາ',
            s : 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss : '%d ວິນາທີ' ,
            m : '1 ນາທີ',
            mm : '%d ນາທີ',
            h : '1 ຊົ່ວໂມງ',
            hh : '%d ຊົ່ວໂມງ',
            d : '1 ມື້',
            dd : '%d ມື້',
            M : '1 ເດືອນ',
            MM : '%d ເດືອນ',
            y : '1 ປີ',
            yy : '%d ປີ'
        },
        dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
        ordinal : function (number) {
            return 'ທີ່' + number;
        }
    });

    return lo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lt.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/lt.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var units = {
        'ss' : 'sekundė_sekundžių_sekundes',
        'm' : 'minutė_minutės_minutę',
        'mm': 'minutės_minučių_minutes',
        'h' : 'valanda_valandos_valandą',
        'hh': 'valandos_valandų_valandas',
        'd' : 'diena_dienos_dieną',
        'dd': 'dienos_dienų_dienas',
        'M' : 'mėnuo_mėnesio_mėnesį',
        'MM': 'mėnesiai_mėnesių_mėnesius',
        'y' : 'metai_metų_metus',
        'yy': 'metai_metų_metus'
    };
    function translateSeconds(number, withoutSuffix, key, isFuture) {
        if (withoutSuffix) {
            return 'kelios sekundės';
        } else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
        }
    }
    function translateSingular(number, withoutSuffix, key, isFuture) {
        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
    }
    function special(number) {
        return number % 10 === 0 || (number > 10 && number < 20);
    }
    function forms(key) {
        return units[key].split('_');
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
        } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
        } else {
            if (isFuture) {
                return result + forms(key)[1];
            } else {
                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
        }
    }
    var lt = moment.defineLocale('lt', {
        months : {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
        weekdays : {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY [m.] MMMM D [d.]',
            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l : 'YYYY-MM-DD',
            ll : 'YYYY [m.] MMMM D [d.]',
            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
        },
        calendar : {
            sameDay : '[Šiandien] LT',
            nextDay : '[Rytoj] LT',
            nextWeek : 'dddd LT',
            lastDay : '[Vakar] LT',
            lastWeek : '[Praėjusį] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'po %s',
            past : 'prieš %s',
            s : translateSeconds,
            ss : translate,
            m : translateSingular,
            mm : translate,
            h : translateSingular,
            hh : translate,
            d : translateSingular,
            dd : translate,
            M : translateSingular,
            MM : translate,
            y : translateSingular,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}-oji/,
        ordinal : function (number) {
            return number + '-oji';
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/lv.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/lv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var units = {
        'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
        'h': 'stundas_stundām_stunda_stundas'.split('_'),
        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
        'd': 'dienas_dienām_diena_dienas'.split('_'),
        'dd': 'dienas_dienām_diena_dienas'.split('_'),
        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
        'y': 'gada_gadiem_gads_gadi'.split('_'),
        'yy': 'gada_gadiem_gads_gadi'.split('_')
    };
    /**
     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
     */
    function format(forms, number, withoutSuffix) {
        if (withoutSuffix) {
            // E.g. "21 minūte", "3 minūtes".
            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
        } else {
            // E.g. "21 minūtes" as in "pēc 21 minūtes".
            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
        }
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        return number + ' ' + format(units[key], number, withoutSuffix);
    }
    function relativeTimeWithSingular(number, withoutSuffix, key) {
        return format(units[key], number, withoutSuffix);
    }
    function relativeSeconds(number, withoutSuffix) {
        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
    }

    var lv = moment.defineLocale('lv', {
        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY.',
            LL : 'YYYY. [gada] D. MMMM',
            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
        },
        calendar : {
            sameDay : '[Šodien pulksten] LT',
            nextDay : '[Rīt pulksten] LT',
            nextWeek : 'dddd [pulksten] LT',
            lastDay : '[Vakar pulksten] LT',
            lastWeek : '[Pagājušā] dddd [pulksten] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'pēc %s',
            past : 'pirms %s',
            s : relativeSeconds,
            ss : relativeTimeWithPlural,
            m : relativeTimeWithSingular,
            mm : relativeTimeWithPlural,
            h : relativeTimeWithSingular,
            hh : relativeTimeWithPlural,
            d : relativeTimeWithSingular,
            dd : relativeTimeWithPlural,
            M : relativeTimeWithSingular,
            MM : relativeTimeWithPlural,
            y : relativeTimeWithSingular,
            yy : relativeTimeWithPlural
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return lv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/me.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/me.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['sekund', 'sekunda', 'sekundi'],
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var me = moment.defineLocale('me', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact : true,
        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',

            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedjelju] [u] LT';
                    case 3:
                        return '[u] [srijedu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedjelje] [u] LT',
                    '[prošlog] [ponedjeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srijede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'prije %s',
            s      : 'nekoliko sekundi',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mjesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return me;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mi.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/mi.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var mi = moment.defineLocale('mi', {
        months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
        monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
        weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
        },
        calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return mi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mk.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/mk.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var mk = moment.defineLocale('mk', {
        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'D.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay : '[Денес во] LT',
            nextDay : '[Утре во] LT',
            nextWeek : '[Во] dddd [во] LT',
            lastDay : '[Вчера во] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[Изминатата] dddd [во] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[Изминатиот] dddd [во] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'после %s',
            past : 'пред %s',
            s : 'неколку секунди',
            ss : '%d секунди',
            m : 'минута',
            mm : '%d минути',
            h : 'час',
            hh : '%d часа',
            d : 'ден',
            dd : '%d дена',
            M : 'месец',
            MM : '%d месеци',
            y : 'година',
            yy : '%d години'
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal : function (number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;
            if (number === 0) {
                return number + '-ев';
            } else if (last2Digits === 0) {
                return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
                return number + '-ти';
            } else if (lastDigit === 1) {
                return number + '-ви';
            } else if (lastDigit === 2) {
                return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
                return number + '-ми';
            } else {
                return number + '-ти';
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return mk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ml.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ml.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ml = moment.defineLocale('ml', {
        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
        monthsParseExact : true,
        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm -നു',
            LTS : 'A h:mm:ss -നു',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm -നു',
            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
        },
        calendar : {
            sameDay : '[ഇന്ന്] LT',
            nextDay : '[നാളെ] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[ഇന്നലെ] LT',
            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s കഴിഞ്ഞ്',
            past : '%s മുൻപ്',
            s : 'അൽപ നിമിഷങ്ങൾ',
            ss : '%d സെക്കൻഡ്',
            m : 'ഒരു മിനിറ്റ്',
            mm : '%d മിനിറ്റ്',
            h : 'ഒരു മണിക്കൂർ',
            hh : '%d മണിക്കൂർ',
            d : 'ഒരു ദിവസം',
            dd : '%d ദിവസം',
            M : 'ഒരു മാസം',
            MM : '%d മാസം',
            y : 'ഒരു വർഷം',
            yy : '%d വർഷം'
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if ((meridiem === 'രാത്രി' && hour >= 4) ||
                    meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
                    meridiem === 'വൈകുന്നേരം') {
                return hour + 12;
            } else {
                return hour;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'രാത്രി';
            } else if (hour < 12) {
                return 'രാവിലെ';
            } else if (hour < 17) {
                return 'ഉച്ച കഴിഞ്ഞ്';
            } else if (hour < 20) {
                return 'വൈകുന്നേരം';
            } else {
                return 'രാത്രി';
            }
        }
    });

    return ml;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mn.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/mn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function translate(number, withoutSuffix, key, isFuture) {
        switch (key) {
            case 's':
                return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
            case 'ss':
                return number + (withoutSuffix ? ' секунд' : ' секундын');
            case 'm':
            case 'mm':
                return number + (withoutSuffix ? ' минут' : ' минутын');
            case 'h':
            case 'hh':
                return number + (withoutSuffix ? ' цаг' : ' цагийн');
            case 'd':
            case 'dd':
                return number + (withoutSuffix ? ' өдөр' : ' өдрийн');
            case 'M':
            case 'MM':
                return number + (withoutSuffix ? ' сар' : ' сарын');
            case 'y':
            case 'yy':
                return number + (withoutSuffix ? ' жил' : ' жилийн');
            default:
                return number;
        }
    }

    var mn = moment.defineLocale('mn', {
        months : 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
        monthsShort : '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
        monthsParseExact : true,
        weekdays : 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
        weekdaysShort : 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
        weekdaysMin : 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'YYYY оны MMMMын D',
            LLL : 'YYYY оны MMMMын D HH:mm',
            LLLL : 'dddd, YYYY оны MMMMын D HH:mm'
        },
        meridiemParse: /ҮӨ|ҮХ/i,
        isPM : function (input) {
            return input === 'ҮХ';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ҮӨ';
            } else {
                return 'ҮХ';
            }
        },
        calendar : {
            sameDay : '[Өнөөдөр] LT',
            nextDay : '[Маргааш] LT',
            nextWeek : '[Ирэх] dddd LT',
            lastDay : '[Өчигдөр] LT',
            lastWeek : '[Өнгөрсөн] dddd LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s дараа',
            past : '%s өмнө',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + ' өдөр';
                default:
                    return number;
            }
        }
    });

    return mn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mr.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/mr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    function relativeTimeMr(number, withoutSuffix, string, isFuture)
    {
        var output = '';
        if (withoutSuffix) {
            switch (string) {
                case 's': output = 'काही सेकंद'; break;
                case 'ss': output = '%d सेकंद'; break;
                case 'm': output = 'एक मिनिट'; break;
                case 'mm': output = '%d मिनिटे'; break;
                case 'h': output = 'एक तास'; break;
                case 'hh': output = '%d तास'; break;
                case 'd': output = 'एक दिवस'; break;
                case 'dd': output = '%d दिवस'; break;
                case 'M': output = 'एक महिना'; break;
                case 'MM': output = '%d महिने'; break;
                case 'y': output = 'एक वर्ष'; break;
                case 'yy': output = '%d वर्षे'; break;
            }
        }
        else {
            switch (string) {
                case 's': output = 'काही सेकंदां'; break;
                case 'ss': output = '%d सेकंदां'; break;
                case 'm': output = 'एका मिनिटा'; break;
                case 'mm': output = '%d मिनिटां'; break;
                case 'h': output = 'एका तासा'; break;
                case 'hh': output = '%d तासां'; break;
                case 'd': output = 'एका दिवसा'; break;
                case 'dd': output = '%d दिवसां'; break;
                case 'M': output = 'एका महिन्या'; break;
                case 'MM': output = '%d महिन्यां'; break;
                case 'y': output = 'एका वर्षा'; break;
                case 'yy': output = '%d वर्षां'; break;
            }
        }
        return output.replace(/%d/i, number);
    }

    var mr = moment.defineLocale('mr', {
        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
        monthsParseExact : true,
        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
        longDateFormat : {
            LT : 'A h:mm वाजता',
            LTS : 'A h:mm:ss वाजता',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm वाजता',
            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[उद्या] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: relativeTimeMr,
            ss: relativeTimeMr,
            m: relativeTimeMr,
            mm: relativeTimeMr,
            h: relativeTimeMr,
            hh: relativeTimeMr,
            d: relativeTimeMr,
            dd: relativeTimeMr,
            M: relativeTimeMr,
            MM: relativeTimeMr,
            y: relativeTimeMr,
            yy: relativeTimeMr
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'रात्री') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सकाळी') {
                return hour;
            } else if (meridiem === 'दुपारी') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'सायंकाळी') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'रात्री';
            } else if (hour < 10) {
                return 'सकाळी';
            } else if (hour < 17) {
                return 'दुपारी';
            } else if (hour < 20) {
                return 'सायंकाळी';
            } else {
                return 'रात्री';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return mr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ms-my.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ms-my.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var msMy = moment.defineLocale('ms-my', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return msMy;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ms.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ms.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ms = moment.defineLocale('ms', {
        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [pukul] HH.mm',
            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'pagi') {
                return hour;
            } else if (meridiem === 'tengahari') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
                return hour + 12;
            }
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'pagi';
            } else if (hours < 15) {
                return 'tengahari';
            } else if (hours < 19) {
                return 'petang';
            } else {
                return 'malam';
            }
        },
        calendar : {
            sameDay : '[Hari ini pukul] LT',
            nextDay : '[Esok pukul] LT',
            nextWeek : 'dddd [pukul] LT',
            lastDay : '[Kelmarin pukul] LT',
            lastWeek : 'dddd [lepas pukul] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'dalam %s',
            past : '%s yang lepas',
            s : 'beberapa saat',
            ss : '%d saat',
            m : 'seminit',
            mm : '%d minit',
            h : 'sejam',
            hh : '%d jam',
            d : 'sehari',
            dd : '%d hari',
            M : 'sebulan',
            MM : '%d bulan',
            y : 'setahun',
            yy : '%d tahun'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return ms;

})));


/***/ }),

/***/ "./node_modules/moment/locale/mt.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/mt.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var mt = moment.defineLocale('mt', {
        months : 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
        monthsShort : 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
        weekdays : 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
        weekdaysShort : 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
        weekdaysMin : 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Illum fil-]LT',
            nextDay : '[Għada fil-]LT',
            nextWeek : 'dddd [fil-]LT',
            lastDay : '[Il-bieraħ fil-]LT',
            lastWeek : 'dddd [li għadda] [fil-]LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'f’ %s',
            past : '%s ilu',
            s : 'ftit sekondi',
            ss : '%d sekondi',
            m : 'minuta',
            mm : '%d minuti',
            h : 'siegħa',
            hh : '%d siegħat',
            d : 'ġurnata',
            dd : '%d ġranet',
            M : 'xahar',
            MM : '%d xhur',
            y : 'sena',
            yy : '%d sni'
        },
        dayOfMonthOrdinalParse : /\d{1,2}º/,
        ordinal: '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return mt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/my.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/my.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '၁',
        '2': '၂',
        '3': '၃',
        '4': '၄',
        '5': '၅',
        '6': '၆',
        '7': '၇',
        '8': '၈',
        '9': '၉',
        '0': '၀'
    }, numberMap = {
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        '၀': '0'
    };

    var my = moment.defineLocale('my', {
        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L'
        },
        relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss : '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်'
        },
        preparse: function (string) {
            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return my;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nb.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/nb.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var nb = moment.defineLocale('nb', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
        monthsParseExact : true,
        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
        weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s siden',
            s : 'noen sekunder',
            ss : '%d sekunder',
            m : 'ett minutt',
            mm : '%d minutter',
            h : 'en time',
            hh : '%d timer',
            d : 'en dag',
            dd : '%d dager',
            M : 'en måned',
            MM : '%d måneder',
            y : 'ett år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nb;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ne.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ne.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '१',
        '2': '२',
        '3': '३',
        '4': '४',
        '5': '५',
        '6': '६',
        '7': '७',
        '8': '८',
        '9': '९',
        '0': '०'
    },
    numberMap = {
        '१': '1',
        '२': '2',
        '३': '3',
        '४': '4',
        '५': '5',
        '६': '6',
        '७': '7',
        '८': '8',
        '९': '9',
        '०': '0'
    };

    var ne = moment.defineLocale('ne', {
        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
        monthsParseExact : true,
        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
        weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'Aको h:mm बजे',
            LTS : 'Aको h:mm:ss बजे',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, Aको h:mm बजे',
            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
        },
        preparse: function (string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'राति') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'बिहान') {
                return hour;
            } else if (meridiem === 'दिउँसो') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'साँझ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 3) {
                return 'राति';
            } else if (hour < 12) {
                return 'बिहान';
            } else if (hour < 16) {
                return 'दिउँसो';
            } else if (hour < 20) {
                return 'साँझ';
            } else {
                return 'राति';
            }
        },
        calendar : {
            sameDay : '[आज] LT',
            nextDay : '[भोलि] LT',
            nextWeek : '[आउँदो] dddd[,] LT',
            lastDay : '[हिजो] LT',
            lastWeek : '[गएको] dddd[,] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sमा',
            past : '%s अगाडि',
            s : 'केही क्षण',
            ss : '%d सेकेण्ड',
            m : 'एक मिनेट',
            mm : '%d मिनेट',
            h : 'एक घण्टा',
            hh : '%d घण्टा',
            d : 'एक दिन',
            dd : '%d दिन',
            M : 'एक महिना',
            MM : '%d महिना',
            y : 'एक बर्ष',
            yy : '%d बर्ष'
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return ne;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nl-be.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/nl-be.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    var nlBe = moment.defineLocale('nl-be', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },

        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nlBe;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nl.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/nl.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

    var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
    var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;

    var nl = moment.defineLocale('nl', {
        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
        monthsShort : function (m, format) {
            if (!m) {
                return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
                return monthsShortWithoutDots[m.month()];
            } else {
                return monthsShortWithDots[m.month()];
            }
        },

        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,

        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin : 'zo_ma_di_wo_do_vr_za'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD-MM-YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'over %s',
            past : '%s geleden',
            s : 'een paar seconden',
            ss : '%d seconden',
            m : 'één minuut',
            mm : '%d minuten',
            h : 'één uur',
            hh : '%d uur',
            d : 'één dag',
            dd : '%d dagen',
            M : 'één maand',
            MM : '%d maanden',
            y : 'één jaar',
            yy : '%d jaar'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal : function (number) {
            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/nn.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/nn.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var nn = moment.defineLocale('nn', {
        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY [kl.] H:mm',
            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
        },
        calendar : {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : '%s sidan',
            s : 'nokre sekund',
            ss : '%d sekund',
            m : 'eit minutt',
            mm : '%d minutt',
            h : 'ein time',
            hh : '%d timar',
            d : 'ein dag',
            dd : '%d dagar',
            M : 'ein månad',
            MM : '%d månader',
            y : 'eit år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return nn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pa-in.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/pa-in.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '੧',
        '2': '੨',
        '3': '੩',
        '4': '੪',
        '5': '੫',
        '6': '੬',
        '7': '੭',
        '8': '੮',
        '9': '੯',
        '0': '੦'
    },
    numberMap = {
        '੧': '1',
        '੨': '2',
        '੩': '3',
        '੪': '4',
        '੫': '5',
        '੬': '6',
        '੭': '7',
        '੮': '8',
        '੯': '9',
        '੦': '0'
    };

    var paIn = moment.defineLocale('pa-in', {
        // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
        months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
        weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
        weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm ਵਜੇ',
            LTS : 'A h:mm:ss ਵਜੇ',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
        },
        calendar : {
            sameDay : '[ਅਜ] LT',
            nextDay : '[ਕਲ] LT',
            nextWeek : '[ਅਗਲਾ] dddd, LT',
            lastDay : '[ਕਲ] LT',
            lastWeek : '[ਪਿਛਲੇ] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s ਵਿੱਚ',
            past : '%s ਪਿਛਲੇ',
            s : 'ਕੁਝ ਸਕਿੰਟ',
            ss : '%d ਸਕਿੰਟ',
            m : 'ਇਕ ਮਿੰਟ',
            mm : '%d ਮਿੰਟ',
            h : 'ਇੱਕ ਘੰਟਾ',
            hh : '%d ਘੰਟੇ',
            d : 'ਇੱਕ ਦਿਨ',
            dd : '%d ਦਿਨ',
            M : 'ਇੱਕ ਮਹੀਨਾ',
            MM : '%d ਮਹੀਨੇ',
            y : 'ਇੱਕ ਸਾਲ',
            yy : '%d ਸਾਲ'
        },
        preparse: function (string) {
            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ਰਾਤ') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ਸਵੇਰ') {
                return hour;
            } else if (meridiem === 'ਦੁਪਹਿਰ') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ਸ਼ਾਮ') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ਰਾਤ';
            } else if (hour < 10) {
                return 'ਸਵੇਰ';
            } else if (hour < 17) {
                return 'ਦੁਪਹਿਰ';
            } else if (hour < 20) {
                return 'ਸ਼ਾਮ';
            } else {
                return 'ਰਾਤ';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return paIn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pl.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/pl.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
    function plural(n) {
        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
    }
    function translate(number, withoutSuffix, key) {
        var result = number + ' ';
        switch (key) {
            case 'ss':
                return result + (plural(number) ? 'sekundy' : 'sekund');
            case 'm':
                return withoutSuffix ? 'minuta' : 'minutę';
            case 'mm':
                return result + (plural(number) ? 'minuty' : 'minut');
            case 'h':
                return withoutSuffix  ? 'godzina'  : 'godzinę';
            case 'hh':
                return result + (plural(number) ? 'godziny' : 'godzin');
            case 'MM':
                return result + (plural(number) ? 'miesiące' : 'miesięcy');
            case 'yy':
                return result + (plural(number) ? 'lata' : 'lat');
        }
    }

    var pl = moment.defineLocale('pl', {
        months : function (momentToFormat, format) {
            if (!momentToFormat) {
                return monthsNominative;
            } else if (format === '') {
                // Hack: if format empty we know this is used to generate
                // RegExp by moment. Give then back both valid forms of months
                // in RegExp ready format.
                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
                return monthsSubjective[momentToFormat.month()];
            } else {
                return monthsNominative[momentToFormat.month()];
            }
        },
        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort : 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
        weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W niedzielę o] LT';

                    case 2:
                        return '[We wtorek o] LT';

                    case 3:
                        return '[W środę o] LT';

                    case 6:
                        return '[W sobotę o] LT';

                    default:
                        return '[W] dddd [o] LT';
                }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[W zeszłą niedzielę o] LT';
                    case 3:
                        return '[W zeszłą środę o] LT';
                    case 6:
                        return '[W zeszłą sobotę o] LT';
                    default:
                        return '[W zeszły] dddd [o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : '%s temu',
            s : 'kilka sekund',
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : '1 dzień',
            dd : '%d dni',
            M : 'miesiąc',
            MM : translate,
            y : 'rok',
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return pl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pt-br.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/pt-br.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ptBr = moment.defineLocale('pt-br', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'poucos segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº'
    });

    return ptBr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/pt.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/pt.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var pt = moment.defineLocale('pt', {
        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
        weekdaysMin : 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D [de] MMMM [de] YYYY',
            LLL : 'D [de] MMMM [de] YYYY HH:mm',
            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function () {
                return (this.day() === 0 || this.day() === 6) ?
                    '[Último] dddd [às] LT' : // Saturday + Sunday
                    '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'em %s',
            past : 'há %s',
            s : 'segundos',
            ss : '%d segundos',
            m : 'um minuto',
            mm : '%d minutos',
            h : 'uma hora',
            hh : '%d horas',
            d : 'um dia',
            dd : '%d dias',
            M : 'um mês',
            MM : '%d meses',
            y : 'um ano',
            yy : '%d anos'
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal : '%dº',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return pt;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ro.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ro.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
                'ss': 'secunde',
                'mm': 'minute',
                'hh': 'ore',
                'dd': 'zile',
                'MM': 'luni',
                'yy': 'ani'
            },
            separator = ' ';
        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
            separator = ' de ';
        }
        return number + separator + format[key];
    }

    var ro = moment.defineLocale('ro', {
        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY H:mm',
            LLLL : 'dddd, D MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'peste %s',
            past : '%s în urmă',
            s : 'câteva secunde',
            ss : relativeTimeWithPlural,
            m : 'un minut',
            mm : relativeTimeWithPlural,
            h : 'o oră',
            hh : relativeTimeWithPlural,
            d : 'o zi',
            dd : relativeTimeWithPlural,
            M : 'o lună',
            MM : relativeTimeWithPlural,
            y : 'un an',
            yy : relativeTimeWithPlural
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return ro;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ru.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ru.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            'hh': 'час_часа_часов',
            'dd': 'день_дня_дней',
            'MM': 'месяц_месяца_месяцев',
            'yy': 'год_года_лет'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

    // http://new.gramota.ru/spravka/rules/139-prop : § 103
    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
    var ru = moment.defineLocale('ru', {
        months : {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
        },
        monthsShort : {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
        },
        weekdays : {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        monthsParse : monthsParse,
        longMonthsParse : monthsParse,
        shortMonthsParse : monthsParse,

        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // копия предыдущего
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

        // полные названия с падежами
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

        // Выражение, которое соотвествует только сокращённым формам
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY г.',
            LLL : 'D MMMM YYYY г., H:mm',
            LLLL : 'dddd, D MMMM YYYY г., H:mm'
        },
        calendar : {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В следующее] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В следующий] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В следующую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return '[В прошлое] dddd, [в] LT';
                        case 1:
                        case 2:
                        case 4:
                            return '[В прошлый] dddd, [в] LT';
                        case 3:
                        case 5:
                        case 6:
                            return '[В прошлую] dddd, [в] LT';
                    }
                } else {
                    if (this.day() === 2) {
                        return '[Во] dddd, [в] LT';
                    } else {
                        return '[В] dddd, [в] LT';
                    }
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'через %s',
            past : '%s назад',
            s : 'несколько секунд',
            ss : relativeTimeWithPlural,
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : 'час',
            hh : relativeTimeWithPlural,
            d : 'день',
            dd : relativeTimeWithPlural,
            M : 'месяц',
            MM : relativeTimeWithPlural,
            y : 'год',
            yy : relativeTimeWithPlural
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM : function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночи';
            } else if (hour < 12) {
                return 'утра';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечера';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                case 'w':
                case 'W':
                    return number + '-я';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ru;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sd.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sd.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var months = [
        'جنوري',
        'فيبروري',
        'مارچ',
        'اپريل',
        'مئي',
        'جون',
        'جولاءِ',
        'آگسٽ',
        'سيپٽمبر',
        'آڪٽوبر',
        'نومبر',
        'ڊسمبر'
    ];
    var days = [
        'آچر',
        'سومر',
        'اڱارو',
        'اربع',
        'خميس',
        'جمع',
        'ڇنڇر'
    ];

    var sd = moment.defineLocale('sd', {
        months : months,
        monthsShort : months,
        weekdays : days,
        weekdaysShort : days,
        weekdaysMin : days,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM : function (input) {
            return 'شام' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'صبح';
            }
            return 'شام';
        },
        calendar : {
            sameDay : '[اڄ] LT',
            nextDay : '[سڀاڻي] LT',
            nextWeek : 'dddd [اڳين هفتي تي] LT',
            lastDay : '[ڪالهه] LT',
            lastWeek : '[گزريل هفتي] dddd [تي] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s پوء',
            past : '%s اڳ',
            s : 'چند سيڪنڊ',
            ss : '%d سيڪنڊ',
            m : 'هڪ منٽ',
            mm : '%d منٽ',
            h : 'هڪ ڪلاڪ',
            hh : '%d ڪلاڪ',
            d : 'هڪ ڏينهن',
            dd : '%d ڏينهن',
            M : 'هڪ مهينو',
            MM : '%d مهينا',
            y : 'هڪ سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sd;

})));


/***/ }),

/***/ "./node_modules/moment/locale/se.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/se.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var se = moment.defineLocale('se', {
        months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
        monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
        weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
        weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'MMMM D. [b.] YYYY',
            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
        },
        calendar : {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s geažes',
            past : 'maŋit %s',
            s : 'moadde sekunddat',
            ss: '%d sekunddat',
            m : 'okta minuhta',
            mm : '%d minuhtat',
            h : 'okta diimmu',
            hh : '%d diimmut',
            d : 'okta beaivi',
            dd : '%d beaivvit',
            M : 'okta mánnu',
            MM : '%d mánut',
            y : 'okta jahki',
            yy : '%d jagit'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return se;

})));


/***/ }),

/***/ "./node_modules/moment/locale/si.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/si.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    /*jshint -W100*/
    var si = moment.defineLocale('si', {
        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'a h:mm',
            LTS : 'a h:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY MMMM D',
            LLL : 'YYYY MMMM D, a h:mm',
            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
        },
        calendar : {
            sameDay : '[අද] LT[ට]',
            nextDay : '[හෙට] LT[ට]',
            nextWeek : 'dddd LT[ට]',
            lastDay : '[ඊයේ] LT[ට]',
            lastWeek : '[පසුගිය] dddd LT[ට]',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%sකින්',
            past : '%sකට පෙර',
            s : 'තත්පර කිහිපය',
            ss : 'තත්පර %d',
            m : 'මිනිත්තුව',
            mm : 'මිනිත්තු %d',
            h : 'පැය',
            hh : 'පැය %d',
            d : 'දිනය',
            dd : 'දින %d',
            M : 'මාසය',
            MM : 'මාස %d',
            y : 'වසර',
            yy : 'වසර %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
        ordinal : function (number) {
            return number + ' වැනි';
        },
        meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM : function (input) {
            return input === 'ප.ව.' || input === 'පස් වරු';
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'ප.ව.' : 'පස් වරු';
            } else {
                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
            }
        }
    });

    return si;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sk.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sk.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
    function plural(n) {
        return (n > 1) && (n < 5);
    }
    function translate(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':  // a few seconds / in a few seconds / a few seconds ago
                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
            case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'sekundy' : 'sekúnd');
                } else {
                    return result + 'sekundami';
                }
                break;
            case 'm':  // a minute / in a minute / a minute ago
                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'minúty' : 'minút');
                } else {
                    return result + 'minútami';
                }
                break;
            case 'h':  // an hour / in an hour / an hour ago
                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
            case 'hh': // 9 hours / in 9 hours / 9 hours ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'hodiny' : 'hodín');
                } else {
                    return result + 'hodinami';
                }
                break;
            case 'd':  // a day / in a day / a day ago
                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
            case 'dd': // 9 days / in 9 days / 9 days ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'dni' : 'dní');
                } else {
                    return result + 'dňami';
                }
                break;
            case 'M':  // a month / in a month / a month ago
                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
            case 'MM': // 9 months / in 9 months / 9 months ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
                } else {
                    return result + 'mesiacmi';
                }
                break;
            case 'y':  // a year / in a year / a year ago
                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
            case 'yy': // 9 years / in 9 years / 9 years ago
                if (withoutSuffix || isFuture) {
                    return result + (plural(number) ? 'roky' : 'rokov');
                } else {
                    return result + 'rokmi';
                }
                break;
        }
    }

    var sk = moment.defineLocale('sk', {
        months : months,
        monthsShort : monthsShort,
        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
        longDateFormat : {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[v nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[v] dddd [o] LT';
                    case 3:
                        return '[v stredu o] LT';
                    case 4:
                        return '[vo štvrtok o] LT';
                    case 5:
                        return '[v piatok o] LT';
                    case 6:
                        return '[v sobotu o] LT';
                }
            },
            lastDay: '[včera o] LT',
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[minulú nedeľu o] LT';
                    case 1:
                    case 2:
                        return '[minulý] dddd [o] LT';
                    case 3:
                        return '[minulú stredu o] LT';
                    case 4:
                    case 5:
                        return '[minulý] dddd [o] LT';
                    case 6:
                        return '[minulú sobotu o] LT';
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'za %s',
            past : 'pred %s',
            s : translate,
            ss : translate,
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : translate,
            dd : translate,
            M : translate,
            MM : translate,
            y : translate,
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sl.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sl.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var result = number + ' ';
        switch (key) {
            case 's':
                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
            case 'ss':
                if (number === 1) {
                    result += withoutSuffix ? 'sekundo' : 'sekundi';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
                } else {
                    result += 'sekund';
                }
                return result;
            case 'm':
                return withoutSuffix ? 'ena minuta' : 'eno minuto';
            case 'mm':
                if (number === 1) {
                    result += withoutSuffix ? 'minuta' : 'minuto';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
                } else {
                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
                }
                return result;
            case 'h':
                return withoutSuffix ? 'ena ura' : 'eno uro';
            case 'hh':
                if (number === 1) {
                    result += withoutSuffix ? 'ura' : 'uro';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
                } else {
                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
                }
                return result;
            case 'd':
                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
            case 'dd':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
                } else {
                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
                }
                return result;
            case 'M':
                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
            case 'MM':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
                } else {
                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
                }
                return result;
            case 'y':
                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
            case 'yy':
                if (number === 1) {
                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
                } else if (number === 2) {
                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
                } else if (number < 5) {
                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
                } else {
                    result += withoutSuffix || isFuture ? 'let' : 'leti';
                }
                return result;
        }
    }

    var sl = moment.defineLocale('sl', {
        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM YYYY',
            LLL : 'D. MMMM YYYY H:mm',
            LLLL : 'dddd, D. MMMM YYYY H:mm'
        },
        calendar : {
            sameDay  : '[danes ob] LT',
            nextDay  : '[jutri ob] LT',

            nextWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[v] [nedeljo] [ob] LT';
                    case 3:
                        return '[v] [sredo] [ob] LT';
                    case 6:
                        return '[v] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[v] dddd [ob] LT';
                }
            },
            lastDay  : '[včeraj ob] LT',
            lastWeek : function () {
                switch (this.day()) {
                    case 0:
                        return '[prejšnjo] [nedeljo] [ob] LT';
                    case 3:
                        return '[prejšnjo] [sredo] [ob] LT';
                    case 6:
                        return '[prejšnjo] [soboto] [ob] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[prejšnji] dddd [ob] LT';
                }
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'čez %s',
            past   : 'pred %s',
            s      : processRelativeTime,
            ss     : processRelativeTime,
            m      : processRelativeTime,
            mm     : processRelativeTime,
            h      : processRelativeTime,
            hh     : processRelativeTime,
            d      : processRelativeTime,
            dd     : processRelativeTime,
            M      : processRelativeTime,
            MM     : processRelativeTime,
            y      : processRelativeTime,
            yy     : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return sl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sq.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var sq = moment.defineLocale('sq', {
        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /PD|MD/,
        isPM: function (input) {
            return input.charAt(0) === 'M';
        },
        meridiem : function (hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Sot në] LT',
            nextDay : '[Nesër në] LT',
            nextWeek : 'dddd [në] LT',
            lastDay : '[Dje në] LT',
            lastWeek : 'dddd [e kaluar në] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'në %s',
            past : '%s më parë',
            s : 'disa sekonda',
            ss : '%d sekonda',
            m : 'një minutë',
            mm : '%d minuta',
            h : 'një orë',
            hh : '%d orë',
            d : 'një ditë',
            dd : '%d ditë',
            M : 'një muaj',
            MM : '%d muaj',
            y : 'një vit',
            yy : '%d vite'
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sq;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sr-cyrl.js":
/*!***********************************************!*\
  !*** ./node_modules/moment/locale/sr-cyrl.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['секунда', 'секунде', 'секунди'],
            m: ['један минут', 'једне минуте'],
            mm: ['минут', 'минуте', 'минута'],
            h: ['један сат', 'једног сата'],
            hh: ['сат', 'сата', 'сати'],
            dd: ['дан', 'дана', 'дана'],
            MM: ['месец', 'месеца', 'месеци'],
            yy: ['година', 'године', 'година']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var srCyrl = moment.defineLocale('sr-cyrl', {
        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
        monthsParseExact: true,
        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[у] [недељу] [у] LT';
                    case 3:
                        return '[у] [среду] [у] LT';
                    case 6:
                        return '[у] [суботу] [у] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[у] dddd [у] LT';
                }
            },
            lastDay  : '[јуче у] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[прошле] [недеље] [у] LT',
                    '[прошлог] [понедељка] [у] LT',
                    '[прошлог] [уторка] [у] LT',
                    '[прошле] [среде] [у] LT',
                    '[прошлог] [четвртка] [у] LT',
                    '[прошлог] [петка] [у] LT',
                    '[прошле] [суботе] [у] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'за %s',
            past   : 'пре %s',
            s      : 'неколико секунди',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'дан',
            dd     : translator.translate,
            M      : 'месец',
            MM     : translator.translate,
            y      : 'годину',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return srCyrl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sr.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var translator = {
        words: { //Different grammatical cases
            ss: ['sekunda', 'sekunde', 'sekundi'],
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina']
        },
        correctGrammaticalCase: function (number, wordKey) {
            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
        },
        translate: function (number, withoutSuffix, key) {
            var wordKey = translator.words[key];
            if (key.length === 1) {
                return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
        }
    };

    var sr = moment.defineLocale('sr', {
        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
        monthsParseExact: true,
        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
        weekdaysParseExact : true,
        longDateFormat: {
            LT: 'H:mm',
            LTS : 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
        },
        calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function () {
                switch (this.day()) {
                    case 0:
                        return '[u] [nedelju] [u] LT';
                    case 3:
                        return '[u] [sredu] [u] LT';
                    case 6:
                        return '[u] [subotu] [u] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[u] dddd [u] LT';
                }
            },
            lastDay  : '[juče u] LT',
            lastWeek : function () {
                var lastWeekDays = [
                    '[prošle] [nedelje] [u] LT',
                    '[prošlog] [ponedeljka] [u] LT',
                    '[prošlog] [utorka] [u] LT',
                    '[prošle] [srede] [u] LT',
                    '[prošlog] [četvrtka] [u] LT',
                    '[prošlog] [petka] [u] LT',
                    '[prošle] [subote] [u] LT'
                ];
                return lastWeekDays[this.day()];
            },
            sameElse : 'L'
        },
        relativeTime : {
            future : 'za %s',
            past   : 'pre %s',
            s      : 'nekoliko sekundi',
            ss     : translator.translate,
            m      : translator.translate,
            mm     : translator.translate,
            h      : translator.translate,
            hh     : translator.translate,
            d      : 'dan',
            dd     : translator.translate,
            M      : 'mesec',
            MM     : translator.translate,
            y      : 'godinu',
            yy     : translator.translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return sr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ss.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ss.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ss = moment.defineLocale('ss', {
        months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
        monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
        weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
        weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
        weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Namuhla nga] LT',
            nextDay : '[Kusasa nga] LT',
            nextWeek : 'dddd [nga] LT',
            lastDay : '[Itolo nga] LT',
            lastWeek : 'dddd [leliphelile] [nga] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'nga %s',
            past : 'wenteka nga %s',
            s : 'emizuzwana lomcane',
            ss : '%d mzuzwana',
            m : 'umzuzu',
            mm : '%d emizuzu',
            h : 'lihora',
            hh : '%d emahora',
            d : 'lilanga',
            dd : '%d emalanga',
            M : 'inyanga',
            MM : '%d tinyanga',
            y : 'umnyaka',
            yy : '%d iminyaka'
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem : function (hours, minutes, isLower) {
            if (hours < 11) {
                return 'ekuseni';
            } else if (hours < 15) {
                return 'emini';
            } else if (hours < 19) {
                return 'entsambama';
            } else {
                return 'ebusuku';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'ekuseni') {
                return hour;
            } else if (meridiem === 'emini') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
                if (hour === 0) {
                    return 0;
                }
                return hour + 12;
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : '%d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ss;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sv.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sv.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var sv = moment.defineLocale('sv', {
        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY-MM-DD',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY [kl.] HH:mm',
            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'om %s',
            past : 'för %s sedan',
            s : 'några sekunder',
            ss : '%d sekunder',
            m : 'en minut',
            mm : '%d minuter',
            h : 'en timme',
            hh : '%d timmar',
            d : 'en dag',
            dd : '%d dagar',
            M : 'en månad',
            MM : '%d månader',
            y : 'ett år',
            yy : '%d år'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'e' :
                (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                (b === 3) ? 'e' : 'e';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return sv;

})));


/***/ }),

/***/ "./node_modules/moment/locale/sw.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/sw.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var sw = moment.defineLocale('sw', {
        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[leo saa] LT',
            nextDay : '[kesho saa] LT',
            nextWeek : '[wiki ijayo] dddd [saat] LT',
            lastDay : '[jana] LT',
            lastWeek : '[wiki iliyopita] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s baadaye',
            past : 'tokea %s',
            s : 'hivi punde',
            ss : 'sekunde %d',
            m : 'dakika moja',
            mm : 'dakika %d',
            h : 'saa limoja',
            hh : 'masaa %d',
            d : 'siku moja',
            dd : 'masiku %d',
            M : 'mwezi mmoja',
            MM : 'miezi %d',
            y : 'mwaka mmoja',
            yy : 'miaka %d'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return sw;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ta.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ta.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var symbolMap = {
        '1': '௧',
        '2': '௨',
        '3': '௩',
        '4': '௪',
        '5': '௫',
        '6': '௬',
        '7': '௭',
        '8': '௮',
        '9': '௯',
        '0': '௦'
    }, numberMap = {
        '௧': '1',
        '௨': '2',
        '௩': '3',
        '௪': '4',
        '௫': '5',
        '௬': '6',
        '௭': '7',
        '௮': '8',
        '௯': '9',
        '௦': '0'
    };

    var ta = moment.defineLocale('ta', {
        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, HH:mm',
            LLLL : 'dddd, D MMMM YYYY, HH:mm'
        },
        calendar : {
            sameDay : '[இன்று] LT',
            nextDay : '[நாளை] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[நேற்று] LT',
            lastWeek : '[கடந்த வாரம்] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s இல்',
            past : '%s முன்',
            s : 'ஒரு சில விநாடிகள்',
            ss : '%d விநாடிகள்',
            m : 'ஒரு நிமிடம்',
            mm : '%d நிமிடங்கள்',
            h : 'ஒரு மணி நேரம்',
            hh : '%d மணி நேரம்',
            d : 'ஒரு நாள்',
            dd : '%d நாட்கள்',
            M : 'ஒரு மாதம்',
            MM : '%d மாதங்கள்',
            y : 'ஒரு வருடம்',
            yy : '%d ஆண்டுகள்'
        },
        dayOfMonthOrdinalParse: /\d{1,2}வது/,
        ordinal : function (number) {
            return number + 'வது';
        },
        preparse: function (string) {
            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
                return numberMap[match];
            });
        },
        postformat: function (string) {
            return string.replace(/\d/g, function (match) {
                return symbolMap[match];
            });
        },
        // refer http://ta.wikipedia.org/s/1er1
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem : function (hour, minute, isLower) {
            if (hour < 2) {
                return ' யாமம்';
            } else if (hour < 6) {
                return ' வைகறை';  // வைகறை
            } else if (hour < 10) {
                return ' காலை'; // காலை
            } else if (hour < 14) {
                return ' நண்பகல்'; // நண்பகல்
            } else if (hour < 18) {
                return ' எற்பாடு'; // எற்பாடு
            } else if (hour < 22) {
                return ' மாலை'; // மாலை
            } else {
                return ' யாமம்';
            }
        },
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'யாமம்') {
                return hour < 2 ? hour : hour + 12;
            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
                return hour;
            } else if (meridiem === 'நண்பகல்') {
                return hour >= 10 ? hour : hour + 12;
            } else {
                return hour + 12;
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return ta;

})));


/***/ }),

/***/ "./node_modules/moment/locale/te.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/te.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var te = moment.defineLocale('te', {
        months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
        monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
        monthsParseExact : true,
        weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
        weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
        weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
        longDateFormat : {
            LT : 'A h:mm',
            LTS : 'A h:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY, A h:mm',
            LLLL : 'dddd, D MMMM YYYY, A h:mm'
        },
        calendar : {
            sameDay : '[నేడు] LT',
            nextDay : '[రేపు] LT',
            nextWeek : 'dddd, LT',
            lastDay : '[నిన్న] LT',
            lastWeek : '[గత] dddd, LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s లో',
            past : '%s క్రితం',
            s : 'కొన్ని క్షణాలు',
            ss : '%d సెకన్లు',
            m : 'ఒక నిమిషం',
            mm : '%d నిమిషాలు',
            h : 'ఒక గంట',
            hh : '%d గంటలు',
            d : 'ఒక రోజు',
            dd : '%d రోజులు',
            M : 'ఒక నెల',
            MM : '%d నెలలు',
            y : 'ఒక సంవత్సరం',
            yy : '%d సంవత్సరాలు'
        },
        dayOfMonthOrdinalParse : /\d{1,2}వ/,
        ordinal : '%dవ',
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'రాత్రి') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ఉదయం') {
                return hour;
            } else if (meridiem === 'మధ్యాహ్నం') {
                return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'సాయంత్రం') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'రాత్రి';
            } else if (hour < 10) {
                return 'ఉదయం';
            } else if (hour < 17) {
                return 'మధ్యాహ్నం';
            } else if (hour < 20) {
                return 'సాయంత్రం';
            } else {
                return 'రాత్రి';
            }
        },
        week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 6th is the first week of the year.
        }
    });

    return te;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tet.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/locale/tet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var tet = moment.defineLocale('tet', {
        months : 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
        weekdays : 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
        weekdaysShort : 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
        weekdaysMin : 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Ohin iha] LT',
            nextDay: '[Aban iha] LT',
            nextWeek: 'dddd [iha] LT',
            lastDay: '[Horiseik iha] LT',
            lastWeek: 'dddd [semana kotuk] [iha] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'iha %s',
            past : '%s liuba',
            s : 'minutu balun',
            ss : 'minutu %d',
            m : 'minutu ida',
            mm : 'minutu %d',
            h : 'oras ida',
            hh : 'oras %d',
            d : 'loron ida',
            dd : 'loron %d',
            M : 'fulan ida',
            MM : 'fulan %d',
            y : 'tinan ida',
            yy : 'tinan %d'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tet;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tg.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/tg.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var suffixes = {
        0: '-ум',
        1: '-ум',
        2: '-юм',
        3: '-юм',
        4: '-ум',
        5: '-ум',
        6: '-ум',
        7: '-ум',
        8: '-ум',
        9: '-ум',
        10: '-ум',
        12: '-ум',
        13: '-ум',
        20: '-ум',
        30: '-юм',
        40: '-ум',
        50: '-ум',
        60: '-ум',
        70: '-ум',
        80: '-ум',
        90: '-ум',
        100: '-ум'
    };

    var tg = moment.defineLocale('tg', {
        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
        weekdaysShort : 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
        weekdaysMin : 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[Имрӯз соати] LT',
            nextDay : '[Пагоҳ соати] LT',
            lastDay : '[Дирӯз соати] LT',
            nextWeek : 'dddd[и] [ҳафтаи оянда соати] LT',
            lastWeek : 'dddd[и] [ҳафтаи гузашта соати] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'баъди %s',
            past : '%s пеш',
            s : 'якчанд сония',
            m : 'як дақиқа',
            mm : '%d дақиқа',
            h : 'як соат',
            hh : '%d соат',
            d : 'як рӯз',
            dd : '%d рӯз',
            M : 'як моҳ',
            MM : '%d моҳ',
            y : 'як сол',
            yy : '%d сол'
        },
        meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === 'шаб') {
                return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'субҳ') {
                return hour;
            } else if (meridiem === 'рӯз') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'бегоҳ') {
                return hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return 'шаб';
            } else if (hour < 11) {
                return 'субҳ';
            } else if (hour < 16) {
                return 'рӯз';
            } else if (hour < 19) {
                return 'бегоҳ';
            } else {
                return 'шаб';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
        ordinal: function (number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 1th is the first week of the year.
        }
    });

    return tg;

})));


/***/ }),

/***/ "./node_modules/moment/locale/th.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/th.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var th = moment.defineLocale('th', {
        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
        monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
        monthsParseExact: true,
        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'H:mm',
            LTS : 'H:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY เวลา H:mm',
            LLLL : 'วันddddที่ D MMMM YYYY เวลา H:mm'
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'ก่อนเที่ยง';
            } else {
                return 'หลังเที่ยง';
            }
        },
        calendar : {
            sameDay : '[วันนี้ เวลา] LT',
            nextDay : '[พรุ่งนี้ เวลา] LT',
            nextWeek : 'dddd[หน้า เวลา] LT',
            lastDay : '[เมื่อวานนี้ เวลา] LT',
            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'อีก %s',
            past : '%sที่แล้ว',
            s : 'ไม่กี่วินาที',
            ss : '%d วินาที',
            m : '1 นาที',
            mm : '%d นาที',
            h : '1 ชั่วโมง',
            hh : '%d ชั่วโมง',
            d : '1 วัน',
            dd : '%d วัน',
            M : '1 เดือน',
            MM : '%d เดือน',
            y : '1 ปี',
            yy : '%d ปี'
        }
    });

    return th;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tl-ph.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/tl-ph.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var tlPh = moment.defineLocale('tl-ph', {
        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'MM/D/YYYY',
            LL : 'MMMM D, YYYY',
            LLL : 'MMMM D, YYYY HH:mm',
            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
        },
        calendar : {
            sameDay: 'LT [ngayong araw]',
            nextDay: '[Bukas ng] LT',
            nextWeek: 'LT [sa susunod na] dddd',
            lastDay: 'LT [kahapon]',
            lastWeek: 'LT [noong nakaraang] dddd',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'sa loob ng %s',
            past : '%s ang nakalipas',
            s : 'ilang segundo',
            ss : '%d segundo',
            m : 'isang minuto',
            mm : '%d minuto',
            h : 'isang oras',
            hh : '%d oras',
            d : 'isang araw',
            dd : '%d araw',
            M : 'isang buwan',
            MM : '%d buwan',
            y : 'isang taon',
            yy : '%d taon'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tlPh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tlh.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/locale/tlh.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

    function translateFuture(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
        time.slice(0, -3) + 'leS' :
        (output.indexOf('jar') !== -1) ?
        time.slice(0, -3) + 'waQ' :
        (output.indexOf('DIS') !== -1) ?
        time.slice(0, -3) + 'nem' :
        time + ' pIq';
        return time;
    }

    function translatePast(output) {
        var time = output;
        time = (output.indexOf('jaj') !== -1) ?
        time.slice(0, -3) + 'Hu’' :
        (output.indexOf('jar') !== -1) ?
        time.slice(0, -3) + 'wen' :
        (output.indexOf('DIS') !== -1) ?
        time.slice(0, -3) + 'ben' :
        time + ' ret';
        return time;
    }

    function translate(number, withoutSuffix, string, isFuture) {
        var numberNoun = numberAsNoun(number);
        switch (string) {
            case 'ss':
                return numberNoun + ' lup';
            case 'mm':
                return numberNoun + ' tup';
            case 'hh':
                return numberNoun + ' rep';
            case 'dd':
                return numberNoun + ' jaj';
            case 'MM':
                return numberNoun + ' jar';
            case 'yy':
                return numberNoun + ' DIS';
        }
    }

    function numberAsNoun(number) {
        var hundred = Math.floor((number % 1000) / 100),
        ten = Math.floor((number % 100) / 10),
        one = number % 10,
        word = '';
        if (hundred > 0) {
            word += numbersNouns[hundred] + 'vatlh';
        }
        if (ten > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
        }
        if (one > 0) {
            word += ((word !== '') ? ' ' : '') + numbersNouns[one];
        }
        return (word === '') ? 'pagh' : word;
    }

    var tlh = moment.defineLocale('tlh', {
        months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
        monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
        monthsParseExact : true,
        weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa’leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa’Hu’] LT',
            lastWeek: 'LLL',
            sameElse: 'L'
        },
        relativeTime : {
            future : translateFuture,
            past : translatePast,
            s : 'puS lup',
            ss : translate,
            m : 'wa’ tup',
            mm : translate,
            h : 'wa’ rep',
            hh : translate,
            d : 'wa’ jaj',
            dd : translate,
            M : 'wa’ jar',
            MM : translate,
            y : 'wa’ DIS',
            yy : translate
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return tlh;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tr.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/tr.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';

    var suffixes = {
        1: '\'inci',
        5: '\'inci',
        8: '\'inci',
        70: '\'inci',
        80: '\'inci',
        2: '\'nci',
        7: '\'nci',
        20: '\'nci',
        50: '\'nci',
        3: '\'üncü',
        4: '\'üncü',
        100: '\'üncü',
        6: '\'ncı',
        9: '\'uncu',
        10: '\'uncu',
        30: '\'uncu',
        60: '\'ıncı',
        90: '\'ıncı'
    };

    var tr = moment.defineLocale('tr', {
        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[bugün saat] LT',
            nextDay : '[yarın saat] LT',
            nextWeek : '[gelecek] dddd [saat] LT',
            lastDay : '[dün] LT',
            lastWeek : '[geçen] dddd [saat] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s sonra',
            past : '%s önce',
            s : 'birkaç saniye',
            ss : '%d saniye',
            m : 'bir dakika',
            mm : '%d dakika',
            h : 'bir saat',
            hh : '%d saat',
            d : 'bir gün',
            dd : '%d gün',
            M : 'bir ay',
            MM : '%d ay',
            y : 'bir yıl',
            yy : '%d yıl'
        },
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'Do':
                case 'DD':
                    return number;
                default:
                    if (number === 0) {  // special case for zero
                        return number + '\'ıncı';
                    }
                    var a = number % 10,
                        b = number % 100 - a,
                        c = number >= 100 ? 100 : null;
                    return number + (suffixes[a] || suffixes[b] || suffixes[c]);
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return tr;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tzl.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/locale/tzl.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
    // This is currently too difficult (maybe even impossible) to add.
    var tzl = moment.defineLocale('tzl', {
        months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
        monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
        weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
        weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
        weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
        longDateFormat : {
            LT : 'HH.mm',
            LTS : 'HH.mm.ss',
            L : 'DD.MM.YYYY',
            LL : 'D. MMMM [dallas] YYYY',
            LLL : 'D. MMMM [dallas] YYYY HH.mm',
            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM : function (input) {
            return 'd\'o' === input.toLowerCase();
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'd\'o' : 'D\'O';
            } else {
                return isLower ? 'd\'a' : 'D\'A';
            }
        },
        calendar : {
            sameDay : '[oxhi à] LT',
            nextDay : '[demà à] LT',
            nextWeek : 'dddd [à] LT',
            lastDay : '[ieiri à] LT',
            lastWeek : '[sür el] dddd [lasteu à] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'osprei %s',
            past : 'ja%s',
            s : processRelativeTime,
            ss : processRelativeTime,
            m : processRelativeTime,
            mm : processRelativeTime,
            h : processRelativeTime,
            hh : processRelativeTime,
            d : processRelativeTime,
            dd : processRelativeTime,
            M : processRelativeTime,
            MM : processRelativeTime,
            y : processRelativeTime,
            yy : processRelativeTime
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal : '%d.',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    function processRelativeTime(number, withoutSuffix, key, isFuture) {
        var format = {
            's': ['viensas secunds', '\'iensas secunds'],
            'ss': [number + ' secunds', '' + number + ' secunds'],
            'm': ['\'n míut', '\'iens míut'],
            'mm': [number + ' míuts', '' + number + ' míuts'],
            'h': ['\'n þora', '\'iensa þora'],
            'hh': [number + ' þoras', '' + number + ' þoras'],
            'd': ['\'n ziua', '\'iensa ziua'],
            'dd': [number + ' ziuas', '' + number + ' ziuas'],
            'M': ['\'n mes', '\'iens mes'],
            'MM': [number + ' mesen', '' + number + ' mesen'],
            'y': ['\'n ar', '\'iens ar'],
            'yy': [number + ' ars', '' + number + ' ars']
        };
        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
    }

    return tzl;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tzm-latn.js":
/*!************************************************!*\
  !*** ./node_modules/moment/locale/tzm-latn.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var tzmLatn = moment.defineLocale('tzm-latn', {
        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'dadkh s yan %s',
            past : 'yan %s',
            s : 'imik',
            ss : '%d imik',
            m : 'minuḍ',
            mm : '%d minuḍ',
            h : 'saɛa',
            hh : '%d tassaɛin',
            d : 'ass',
            dd : '%d ossan',
            M : 'ayowr',
            MM : '%d iyyirn',
            y : 'asgas',
            yy : '%d isgasn'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return tzmLatn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/tzm.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/locale/tzm.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var tzm = moment.defineLocale('tzm', {
        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS: 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past : 'ⵢⴰⵏ %s',
            s : 'ⵉⵎⵉⴽ',
            ss : '%d ⵉⵎⵉⴽ',
            m : 'ⵎⵉⵏⵓⴺ',
            mm : '%d ⵎⵉⵏⵓⴺ',
            h : 'ⵙⴰⵄⴰ',
            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d : 'ⴰⵙⵙ',
            dd : '%d oⵙⵙⴰⵏ',
            M : 'ⴰⵢoⵓⵔ',
            MM : '%d ⵉⵢⵢⵉⵔⵏ',
            y : 'ⴰⵙⴳⴰⵙ',
            yy : '%d ⵉⵙⴳⴰⵙⵏ'
        },
        week : {
            dow : 6, // Saturday is the first day of the week.
            doy : 12  // The week that contains Jan 12th is the first week of the year.
        }
    });

    return tzm;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ug-cn.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/ug-cn.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js language configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var ugCn = moment.defineLocale('ug-cn', {
        months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
        ),
        monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split(
            '_'
        ),
        weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split(
            '_'
        ),
        weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
            LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
        },
        meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (
                meridiem === 'يېرىم كېچە' ||
                meridiem === 'سەھەر' ||
                meridiem === 'چۈشتىن بۇرۇن'
            ) {
                return hour;
            } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
                return hour + 12;
            } else {
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem: function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return 'يېرىم كېچە';
            } else if (hm < 900) {
                return 'سەھەر';
            } else if (hm < 1130) {
                return 'چۈشتىن بۇرۇن';
            } else if (hm < 1230) {
                return 'چۈش';
            } else if (hm < 1800) {
                return 'چۈشتىن كېيىن';
            } else {
                return 'كەچ';
            }
        },
        calendar: {
            sameDay: '[بۈگۈن سائەت] LT',
            nextDay: '[ئەتە سائەت] LT',
            nextWeek: '[كېلەركى] dddd [سائەت] LT',
            lastDay: '[تۆنۈگۈن] LT',
            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
            sameElse: 'L'
        },
        relativeTime: {
            future: '%s كېيىن',
            past: '%s بۇرۇن',
            s: 'نەچچە سېكونت',
            ss: '%d سېكونت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل'
        },

        dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '-كۈنى';
                case 'w':
                case 'W':
                    return number + '-ھەپتە';
                default:
                    return number;
            }
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1, // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.
        }
    });

    return ugCn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/uk.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/uk.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    function plural(word, num) {
        var forms = word.split('_');
        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
    }
    function relativeTimeWithPlural(number, withoutSuffix, key) {
        var format = {
            'ss': withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
            'dd': 'день_дні_днів',
            'MM': 'місяць_місяці_місяців',
            'yy': 'рік_роки_років'
        };
        if (key === 'm') {
            return withoutSuffix ? 'хвилина' : 'хвилину';
        }
        else if (key === 'h') {
            return withoutSuffix ? 'година' : 'годину';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    }
    function weekdaysCaseReplace(m, format) {
        var weekdays = {
            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
        };

        if (m === true) {
            return weekdays['nominative'].slice(1, 7).concat(weekdays['nominative'].slice(0, 1));
        }
        if (!m) {
            return weekdays['nominative'];
        }

        var nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
            'accusative' :
            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
                'genitive' :
                'nominative');
        return weekdays[nounCase][m.day()];
    }
    function processHoursFunction(str) {
        return function () {
            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
        };
    }

    var uk = moment.defineLocale('uk', {
        months : {
            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
        },
        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
        weekdays : weekdaysCaseReplace,
        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD.MM.YYYY',
            LL : 'D MMMM YYYY р.',
            LLL : 'D MMMM YYYY р., HH:mm',
            LLLL : 'dddd, D MMMM YYYY р., HH:mm'
        },
        calendar : {
            sameDay: processHoursFunction('[Сьогодні '),
            nextDay: processHoursFunction('[Завтра '),
            lastDay: processHoursFunction('[Вчора '),
            nextWeek: processHoursFunction('[У] dddd ['),
            lastWeek: function () {
                switch (this.day()) {
                    case 0:
                    case 3:
                    case 5:
                    case 6:
                        return processHoursFunction('[Минулої] dddd [').call(this);
                    case 1:
                    case 2:
                    case 4:
                        return processHoursFunction('[Минулого] dddd [').call(this);
                }
            },
            sameElse: 'L'
        },
        relativeTime : {
            future : 'за %s',
            past : '%s тому',
            s : 'декілька секунд',
            ss : relativeTimeWithPlural,
            m : relativeTimeWithPlural,
            mm : relativeTimeWithPlural,
            h : 'годину',
            hh : relativeTimeWithPlural,
            d : 'день',
            dd : relativeTimeWithPlural,
            M : 'місяць',
            MM : relativeTimeWithPlural,
            y : 'рік',
            yy : relativeTimeWithPlural
        },
        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function (input) {
            return /^(дня|вечора)$/.test(input);
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 4) {
                return 'ночі';
            } else if (hour < 12) {
                return 'ранку';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечора';
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function (number, period) {
            switch (period) {
                case 'M':
                case 'd':
                case 'DDD':
                case 'w':
                case 'W':
                    return number + '-й';
                case 'D':
                    return number + '-го';
                default:
                    return number;
            }
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return uk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/ur.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/ur.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var months = [
        'جنوری',
        'فروری',
        'مارچ',
        'اپریل',
        'مئی',
        'جون',
        'جولائی',
        'اگست',
        'ستمبر',
        'اکتوبر',
        'نومبر',
        'دسمبر'
    ];
    var days = [
        'اتوار',
        'پیر',
        'منگل',
        'بدھ',
        'جمعرات',
        'جمعہ',
        'ہفتہ'
    ];

    var ur = moment.defineLocale('ur', {
        months : months,
        monthsShort : months,
        weekdays : days,
        weekdaysShort : days,
        weekdaysMin : days,
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd، D MMMM YYYY HH:mm'
        },
        meridiemParse: /صبح|شام/,
        isPM : function (input) {
            return 'شام' === input;
        },
        meridiem : function (hour, minute, isLower) {
            if (hour < 12) {
                return 'صبح';
            }
            return 'شام';
        },
        calendar : {
            sameDay : '[آج بوقت] LT',
            nextDay : '[کل بوقت] LT',
            nextWeek : 'dddd [بوقت] LT',
            lastDay : '[گذشتہ روز بوقت] LT',
            lastWeek : '[گذشتہ] dddd [بوقت] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : '%s بعد',
            past : '%s قبل',
            s : 'چند سیکنڈ',
            ss : '%d سیکنڈ',
            m : 'ایک منٹ',
            mm : '%d منٹ',
            h : 'ایک گھنٹہ',
            hh : '%d گھنٹے',
            d : 'ایک دن',
            dd : '%d دن',
            M : 'ایک ماہ',
            MM : '%d ماہ',
            y : 'ایک سال',
            yy : '%d سال'
        },
        preparse: function (string) {
            return string.replace(/،/g, ',');
        },
        postformat: function (string) {
            return string.replace(/,/g, '،');
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return ur;

})));


/***/ }),

/***/ "./node_modules/moment/locale/uz-latn.js":
/*!***********************************************!*\
  !*** ./node_modules/moment/locale/uz-latn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var uzLatn = moment.defineLocale('uz-latn', {
        months : 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
        monthsShort : 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
        weekdays : 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
        weekdaysShort : 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
        weekdaysMin : 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Bugun soat] LT [da]',
            nextDay : '[Ertaga] LT [da]',
            nextWeek : 'dddd [kuni soat] LT [da]',
            lastDay : '[Kecha soat] LT [da]',
            lastWeek : '[O\'tgan] dddd [kuni soat] LT [da]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Yaqin %s ichida',
            past : 'Bir necha %s oldin',
            s : 'soniya',
            ss : '%d soniya',
            m : 'bir daqiqa',
            mm : '%d daqiqa',
            h : 'bir soat',
            hh : '%d soat',
            d : 'bir kun',
            dd : '%d kun',
            M : 'bir oy',
            MM : '%d oy',
            y : 'bir yil',
            yy : '%d yil'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 7th is the first week of the year.
        }
    });

    return uzLatn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/uz.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/uz.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var uz = moment.defineLocale('uz', {
        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'D MMMM YYYY, dddd HH:mm'
        },
        calendar : {
            sameDay : '[Бугун соат] LT [да]',
            nextDay : '[Эртага] LT [да]',
            nextWeek : 'dddd [куни соат] LT [да]',
            lastDay : '[Кеча соат] LT [да]',
            lastWeek : '[Утган] dddd [куни соат] LT [да]',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'Якин %s ичида',
            past : 'Бир неча %s олдин',
            s : 'фурсат',
            ss : '%d фурсат',
            m : 'бир дакика',
            mm : '%d дакика',
            h : 'бир соат',
            hh : '%d соат',
            d : 'бир кун',
            dd : '%d кун',
            M : 'бир ой',
            MM : '%d ой',
            y : 'бир йил',
            yy : '%d йил'
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 7  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return uz;

})));


/***/ }),

/***/ "./node_modules/moment/locale/vi.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/vi.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var vi = moment.defineLocale('vi', {
        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
        monthsParseExact : true,
        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
        weekdaysParseExact : true,
        meridiemParse: /sa|ch/i,
        isPM : function (input) {
            return /^ch$/i.test(input);
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours < 12) {
                return isLower ? 'sa' : 'SA';
            } else {
                return isLower ? 'ch' : 'CH';
            }
        },
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM [năm] YYYY',
            LLL : 'D MMMM [năm] YYYY HH:mm',
            LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
            l : 'DD/M/YYYY',
            ll : 'D MMM YYYY',
            lll : 'D MMM YYYY HH:mm',
            llll : 'ddd, D MMM YYYY HH:mm'
        },
        calendar : {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : '%s tới',
            past : '%s trước',
            s : 'vài giây',
            ss : '%d giây' ,
            m : 'một phút',
            mm : '%d phút',
            h : 'một giờ',
            hh : '%d giờ',
            d : 'một ngày',
            dd : '%d ngày',
            M : 'một tháng',
            MM : '%d tháng',
            y : 'một năm',
            yy : '%d năm'
        },
        dayOfMonthOrdinalParse: /\d{1,2}/,
        ordinal : function (number) {
            return number;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return vi;

})));


/***/ }),

/***/ "./node_modules/moment/locale/x-pseudo.js":
/*!************************************************!*\
  !*** ./node_modules/moment/locale/x-pseudo.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var xPseudo = moment.defineLocale('x-pseudo', {
        months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
        monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
        monthsParseExact : true,
        weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
        weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
        weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
        weekdaysParseExact : true,
        longDateFormat : {
            LT : 'HH:mm',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY HH:mm',
            LLLL : 'dddd, D MMMM YYYY HH:mm'
        },
        calendar : {
            sameDay : '[T~ódá~ý át] LT',
            nextDay : '[T~ómó~rró~w át] LT',
            nextWeek : 'dddd [át] LT',
            lastDay : '[Ý~ést~érdá~ý át] LT',
            lastWeek : '[L~ást] dddd [át] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'í~ñ %s',
            past : '%s á~gó',
            s : 'á ~féw ~sécó~ñds',
            ss : '%d s~écóñ~ds',
            m : 'á ~míñ~úté',
            mm : '%d m~íñú~tés',
            h : 'á~ñ hó~úr',
            hh : '%d h~óúrs',
            d : 'á ~dáý',
            dd : '%d d~áýs',
            M : 'á ~móñ~th',
            MM : '%d m~óñt~hs',
            y : 'á ~ýéár',
            yy : '%d ý~éárs'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        },
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return xPseudo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/yo.js":
/*!******************************************!*\
  !*** ./node_modules/moment/locale/yo.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var yo = moment.defineLocale('yo', {
        months : 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
        monthsShort : 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
        weekdays : 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
        weekdaysShort : 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
        weekdaysMin : 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
        longDateFormat : {
            LT : 'h:mm A',
            LTS : 'h:mm:ss A',
            L : 'DD/MM/YYYY',
            LL : 'D MMMM YYYY',
            LLL : 'D MMMM YYYY h:mm A',
            LLLL : 'dddd, D MMMM YYYY h:mm A'
        },
        calendar : {
            sameDay : '[Ònì ni] LT',
            nextDay : '[Ọ̀la ni] LT',
            nextWeek : 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
            lastDay : '[Àna ni] LT',
            lastWeek : 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : 'ní %s',
            past : '%s kọjá',
            s : 'ìsẹjú aayá die',
            ss :'aayá %d',
            m : 'ìsẹjú kan',
            mm : 'ìsẹjú %d',
            h : 'wákati kan',
            hh : 'wákati %d',
            d : 'ọjọ́ kan',
            dd : 'ọjọ́ %d',
            M : 'osù kan',
            MM : 'osù %d',
            y : 'ọdún kan',
            yy : 'ọdún %d'
        },
        dayOfMonthOrdinalParse : /ọjọ́\s\d{1,2}/,
        ordinal : 'ọjọ́ %d',
        week : {
            dow : 1, // Monday is the first day of the week.
            doy : 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    return yo;

})));


/***/ }),

/***/ "./node_modules/moment/locale/zh-cn.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/zh-cn.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var zhCn = moment.defineLocale('zh-cn', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日Ah点mm分',
            LLLL : 'YYYY年M月D日ddddAh点mm分',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' ||
                    meridiem === '上午') {
                return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            } else {
                // '中午'
                return hour >= 11 ? hour : hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天]LT',
            nextDay : '[明天]LT',
            nextWeek : '[下]ddddLT',
            lastDay : '[昨天]LT',
            lastWeek : '[上]ddddLT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return number + '日';
                case 'M':
                    return number + '月';
                case 'w':
                case 'W':
                    return number + '周';
                default:
                    return number;
            }
        },
        relativeTime : {
            future : '%s内',
            past : '%s前',
            s : '几秒',
            ss : '%d 秒',
            m : '1 分钟',
            mm : '%d 分钟',
            h : '1 小时',
            hh : '%d 小时',
            d : '1 天',
            dd : '%d 天',
            M : '1 个月',
            MM : '%d 个月',
            y : '1 年',
            yy : '%d 年'
        },
        week : {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow : 1, // Monday is the first day of the week.
            doy : 4  // The week that contains Jan 4th is the first week of the year.
        }
    });

    return zhCn;

})));


/***/ }),

/***/ "./node_modules/moment/locale/zh-hk.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/zh-hk.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var zhHk = moment.defineLocale('zh-hk', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日dddd HH:mm',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天]LT',
            nextDay : '[明天]LT',
            nextWeek : '[下]ddddLT',
            lastDay : '[昨天]LT',
            lastWeek : '[上]ddddLT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd' :
                case 'D' :
                case 'DDD' :
                    return number + '日';
                case 'M' :
                    return number + '月';
                case 'w' :
                case 'W' :
                    return number + '週';
                default :
                    return number;
            }
        },
        relativeTime : {
            future : '%s內',
            past : '%s前',
            s : '幾秒',
            ss : '%d 秒',
            m : '1 分鐘',
            mm : '%d 分鐘',
            h : '1 小時',
            hh : '%d 小時',
            d : '1 天',
            dd : '%d 天',
            M : '1 個月',
            MM : '%d 個月',
            y : '1 年',
            yy : '%d 年'
        }
    });

    return zhHk;

})));


/***/ }),

/***/ "./node_modules/moment/locale/zh-tw.js":
/*!*********************************************!*\
  !*** ./node_modules/moment/locale/zh-tw.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//! moment.js locale configuration

;(function (global, factory) {
    true ? factory(__webpack_require__(/*! ../moment */ "./node_modules/moment/moment.js")) :
   undefined
}(this, (function (moment) { 'use strict';


    var zhTw = moment.defineLocale('zh-tw', {
        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
        longDateFormat : {
            LT : 'HH:mm',
            LTS : 'HH:mm:ss',
            L : 'YYYY/MM/DD',
            LL : 'YYYY年M月D日',
            LLL : 'YYYY年M月D日 HH:mm',
            LLLL : 'YYYY年M月D日dddd HH:mm',
            l : 'YYYY/M/D',
            ll : 'YYYY年M月D日',
            lll : 'YYYY年M月D日 HH:mm',
            llll : 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour : function (hour, meridiem) {
            if (hour === 12) {
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            } else if (meridiem === '中午') {
                return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
        },
        meridiem : function (hour, minute, isLower) {
            var hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            } else if (hm < 900) {
                return '早上';
            } else if (hm < 1130) {
                return '上午';
            } else if (hm < 1230) {
                return '中午';
            } else if (hm < 1800) {
                return '下午';
            } else {
                return '晚上';
            }
        },
        calendar : {
            sameDay : '[今天] LT',
            nextDay : '[明天] LT',
            nextWeek : '[下]dddd LT',
            lastDay : '[昨天] LT',
            lastWeek : '[上]dddd LT',
            sameElse : 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
        ordinal : function (number, period) {
            switch (period) {
                case 'd' :
                case 'D' :
                case 'DDD' :
                    return number + '日';
                case 'M' :
                    return number + '月';
                case 'w' :
                case 'W' :
                    return number + '週';
                default :
                    return number;
            }
        },
        relativeTime : {
            future : '%s內',
            past : '%s前',
            s : '幾秒',
            ss : '%d 秒',
            m : '1 分鐘',
            mm : '%d 分鐘',
            h : '1 小時',
            hh : '%d 小時',
            d : '1 天',
            dd : '%d 天',
            M : '1 個月',
            MM : '%d 個月',
            y : '1 年',
            yy : '%d 年'
        }
    });

    return zhTw;

})));


/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    undefined
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                __webpack_require__("./node_modules/moment/locale sync recursive ^\\.\\/.*$")("./" + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fguidolarosa%2FDocuments%2FWEBDEV%2FProgressTracker%2Fpages%2Findex.js!./":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fguidolarosa%2FDocuments%2FWEBDEV%2FProgressTracker%2Fpages%2Findex.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-moment/dist/index.js":
/*!*************************************************!*\
  !*** ./node_modules/react-moment/dist/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"),__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=n(3)()},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";var r=n(4);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r,o,i,a,l;
/*! Moment Duration Format v2.2.2
 *  https://github.com/jsmreese/moment-duration-format
 *  Date: 2018-02-16
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2018 John Madhavan-Reese
 *  Released under the MIT license
 */
/*! Moment Duration Format v2.2.2
 *  https://github.com/jsmreese/moment-duration-format
 *  Date: 2018-02-16
 *
 *  Duration format plugin function for the Moment.js library
 *  http://momentjs.com/
 *
 *  Copyright 2018 John Madhavan-Reese
 *  Released under the MIT license
 */
a=this,l=function(e){var t=!1,n=!1,r="escape years months weeks days hours minutes seconds milliseconds general".split(" "),o=[{type:"seconds",targets:[{type:"minutes",value:60},{type:"hours",value:3600},{type:"days",value:86400},{type:"weeks",value:604800},{type:"months",value:2678400},{type:"years",value:31536e3}]},{type:"minutes",targets:[{type:"hours",value:60},{type:"days",value:1440},{type:"weeks",value:10080},{type:"months",value:44640},{type:"years",value:525600}]},{type:"hours",targets:[{type:"days",value:24},{type:"weeks",value:168},{type:"months",value:744},{type:"years",value:8760}]},{type:"days",targets:[{type:"weeks",value:7},{type:"months",value:31},{type:"years",value:365}]},{type:"months",targets:[{type:"years",value:12}]}];function i(e,t){return!(t.length>e.length)&&-1!==e.indexOf(t)}function a(e){for(var t="";e;)t+="0",e-=1;return t}function l(e,t,r){var o,i,u,s=t.useToLocaleString,c=t.useGrouping,m=c&&t.grouping.slice(),f=t.maximumSignificantDigits,p=t.minimumIntegerDigits||1,g=t.fractionDigits||0,y=t.groupingSeparator,h=t.decimalSeparator;if(s&&r){var d={minimumIntegerDigits:p,useGrouping:c};if(g&&(d.maximumFractionDigits=g,d.minimumFractionDigits=g),f&&e>0&&(d.maximumSignificantDigits=f),!n){var v=w({},t);v.useGrouping=!1,v.decimalSeparator=".",e=parseFloat(l(e,v),10)}return e.toLocaleString(r,d)}var b=(f?e.toPrecision(f+1):e.toFixed(g+1)).split("e");u=b[1]||"",i=(b=b[0].split("."))[1]||"";var S=(o=b[0]||"").length,T=i.length,_=S+T,x=o+i;(f&&_===f+1||!f&&T===g+1)&&((x=function(e){for(var t=e.split("").reverse(),n=0,r=!0;r&&n<t.length;)n?"9"===t[n]?t[n]="0":(t[n]=(parseInt(t[n],10)+1).toString(),r=!1):(parseInt(t[n],10)<5&&(r=!1),t[n]="0"),n+=1;return r&&t.push("1"),t.reverse().join("")}(x)).length===_+1&&(S+=1),T&&(x=x.slice(0,-1)),o=x.slice(0,S),i=x.slice(S)),f&&(i=i.replace(/0*$/,""));var O=parseInt(u,10);O>0?i.length<=O?(o+=i+=a(O-i.length),i=""):(o+=i.slice(0,O),i=i.slice(O)):O<0&&(i=a(Math.abs(O)-o.length)+o+i,o="0"),f||((i=i.slice(0,g)).length<g&&(i+=a(g-i.length)),o.length<p&&(o=a(p-o.length)+o));var V,D="";if(c)for(b=o;b.length;)m.length&&(V=m.shift()),D&&(D=y+D),D=b.slice(-V)+D,b=b.slice(0,-V);else D=o;return i&&(D=D+h+i),D}function u(e,t){return e.label.length>t.label.length?-1:e.label.length<t.label.length?1:0}var s,c={durationLabelsStandard:{S:"millisecond",SS:"milliseconds",s:"second",ss:"seconds",m:"minute",mm:"minutes",h:"hour",hh:"hours",d:"day",dd:"days",w:"week",ww:"weeks",M:"month",MM:"months",y:"year",yy:"years"},durationLabelsShort:{S:"msec",SS:"msecs",s:"sec",ss:"secs",m:"min",mm:"mins",h:"hr",hh:"hrs",d:"dy",dd:"dys",w:"wk",ww:"wks",M:"mo",MM:"mos",y:"yr",yy:"yrs"},durationTimeTemplates:{HMS:"h:mm:ss",HM:"h:mm",MS:"m:ss"},durationLabelTypes:[{type:"standard",string:"__"},{type:"short",string:"_"}],durationPluralKey:function(e,t,n){return 1===t&&null===n?e:e+e}};function m(e){return"[object Array]"===Object.prototype.toString.call(e)}function f(e){return"[object Object]"===Object.prototype.toString.call(e)}function p(e,t){var n,r=0,o=e&&e.length||0;for("function"!=typeof t&&(n=t,t=function(e){return e===n});r<o;){if(t(e[r]))return e[r];r+=1}}function g(e,t){var n=0,r=e.length;if(e&&r)for(;n<r;){if(!1===t(e[n],n))return;n+=1}}function y(e,t){var n=0,r=e.length,o=[];if(!e||!r)return o;for(;n<r;)o[n]=t(e[n],n),n+=1;return o}function h(e,t){return y(e,function(e){return e[t]})}function d(e){var t=[];return g(e,function(e){e&&t.push(e)}),t}function v(e){var t=[];return g(e,function(e){p(t,e)||t.push(e)}),t}function b(e,t){var n=[];return g(e,function(e){g(t,function(t){e===t&&n.push(e)})}),v(n)}function S(e,t){var n=[];return g(e,function(r,o){if(!t(r))return n=e.slice(o),!1}),n}function w(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function T(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t}function _(e,t){var n=0,r=e.length;if(!e||!r)return!1;for(;n<r;){if(!0===t(e[n],n))return!0;n+=1}return!1}function x(){var e,t=[].slice.call(arguments),n={};if(g(t,function(t,r){if(!r){if(!m(t))throw"Expected array as the first argument to durationsFormat.";e=t}"string"!=typeof t&&"function"!=typeof t?"number"!=typeof t?f(t)&&w(n,t):n.precision=t:n.template=t}),!e||!e.length)return[];n.returnMomentTypes=!0;var o,i=y(e,function(e){return e.format(n)}),a=b(r,v(h((o=[],g(i,function(e){o=o.concat(e)}),o),"type"))),l=n.largest;return l&&(a=a.slice(0,l)),n.returnMomentTypes=!1,n.outputTypes=a,y(e,function(e){return e.format(n)})}function O(){var n=[].slice.call(arguments),a=w({},this.format.defaults),s=this.asMilliseconds(),x=this.asMonths();"function"==typeof this.isValid&&!1===this.isValid()&&(s=0,x=0);var O=s<0,V=e.duration(Math.abs(s),"milliseconds"),D=e.duration(Math.abs(x),"months");g(n,function(e){"string"!=typeof e&&"function"!=typeof e?"number"!=typeof e?f(e)&&w(a,e):a.precision=e:a.template=e});var L={years:"y",months:"M",weeks:"w",days:"d",hours:"h",minutes:"m",seconds:"s",milliseconds:"S"},j={escape:/\[(.+?)\]/,years:/\*?[Yy]+/,months:/\*?M+/,weeks:/\*?[Ww]+/,days:/\*?[Dd]+/,hours:/\*?[Hh]+/,minutes:/\*?m+/,seconds:/\*?s+/,milliseconds:/\*?S+/,general:/.+?/};a.types=r;var M=function(e){return p(r,function(t){return j[t].test(e)})},k=new RegExp(y(r,function(e){return j[e].source}).join("|"),"g");a.duration=this;var P="function"==typeof a.template?a.template.apply(a):a.template,E=a.outputTypes,F=a.returnMomentTypes,I=a.largest,C=[];E||(m(a.stopTrim)&&(a.stopTrim=a.stopTrim.join("")),a.stopTrim&&g(a.stopTrim.match(k),function(e){var t=M(e);"escape"!==t&&"general"!==t&&C.push(t)}));var N=e.localeData();N||(N={}),g(T(c),function(e){"function"!=typeof c[e]?N["_"+e]||(N["_"+e]=c[e]):N[e]||(N[e]=c[e])}),g(T(N._durationTimeTemplates),function(e){P=P.replace("_"+e+"_",N._durationTimeTemplates[e])});var G=a.userLocale||e.locale(),R=a.useLeftUnits,U=a.usePlural,q=a.precision,z=a.forceLength,H=a.useGrouping,W=a.trunc,$=a.useSignificantDigits&&q>0,A=$?a.precision:0,B=A,K=a.minValue,Y=!1,J=a.maxValue,Q=!1,X=a.useToLocaleString,Z=a.groupingSeparator,ee=a.decimalSeparator,te=a.grouping;X=X&&t;var ne=a.trim;m(ne)&&(ne=ne.join(" ")),null===ne&&(I||J||$)&&(ne="all"),null!==ne&&!0!==ne&&"left"!==ne&&"right"!==ne||(ne="large"),!1===ne&&(ne="");var re=function(e){return e.test(ne)},oe=/both/,ie=/^all|[^sm]all/,ae=I>0||_([/large/,oe,ie],re),le=_([/small/,oe,ie],re),ue=_([/mid/,ie],re),se=_([/final/,ie],re),ce=y(P.match(k),function(e,t){var n=M(e);return"*"===e.slice(0,1)&&(e=e.slice(1),"escape"!==n&&"general"!==n&&C.push(n)),{index:t,length:e.length,text:"",token:"escape"===n?e.replace(j.escape,"$1"):e,type:"escape"===n||"general"===n?null:n}}),me={index:0,length:0,token:"",text:"",type:null},fe=[];R&&ce.reverse(),g(ce,function(e){if(e.type)return(me.type||me.text)&&fe.push(me),void(me=e);R?me.text=e.token+me.text:me.text+=e.token}),(me.type||me.text)&&fe.push(me),R&&fe.reverse();var pe=b(r,v(d(h(fe,"type"))));if(!pe.length)return h(fe,"text").join("");pe=y(pe,function(e,t){var n,r=t+1===pe.length,o=!t;n="years"===e||"months"===e?D.as(e):V.as(e);var i=Math.floor(n),l=n-i,u=p(fe,function(t){return e===t.type});return o&&J&&n>J&&(Q=!0),r&&K&&Math.abs(a.duration.as(e))<K&&(Y=!0),o&&null===z&&u.length>1&&(z=!0),V.subtract(i,e),D.subtract(i,e),{rawValue:n,wholeValue:i,decimalValue:r?l:0,isSmallest:r,isLargest:o,type:e,tokenLength:u.length}});var ge,ye=W?Math.floor:Math.round,he=function(e,t){var n=Math.pow(10,t);return ye(e*n)/n},de=!1,ve=!1,be=function(e,t){var n={useGrouping:H,groupingSeparator:Z,decimalSeparator:ee,grouping:te,useToLocaleString:X};return $&&(A<=0?(e.rawValue=0,e.wholeValue=0,e.decimalValue=0):(n.maximumSignificantDigits=A,e.significantDigits=A)),Q&&!ve&&(e.isLargest?(e.wholeValue=J,e.decimalValue=0):(e.wholeValue=0,e.decimalValue=0)),Y&&!ve&&(e.isSmallest?(e.wholeValue=K,e.decimalValue=0):(e.wholeValue=0,e.decimalValue=0)),e.isSmallest||e.significantDigits&&e.significantDigits-e.wholeValue.toString().length<=0?q<0?e.value=he(e.wholeValue,q):0===q?e.value=ye(e.wholeValue+e.decimalValue):$?(e.value=W?he(e.rawValue,A-e.wholeValue.toString().length):e.rawValue,e.wholeValue&&(A-=e.wholeValue.toString().length)):(n.fractionDigits=q,e.value=W?e.wholeValue+he(e.decimalValue,q):e.wholeValue+e.decimalValue):$&&e.wholeValue?(e.value=Math.round(he(e.wholeValue,e.significantDigits-e.wholeValue.toString().length)),A-=e.wholeValue.toString().length):e.value=e.wholeValue,e.tokenLength>1&&(z||de)&&(n.minimumIntegerDigits=e.tokenLength,ve&&n.maximumSignificantDigits<e.tokenLength&&delete n.maximumSignificantDigits),!de&&(e.value>0||""===ne||p(C,e.type)||p(E,e.type))&&(de=!0),e.formattedValue=l(e.value,n,G),n.useGrouping=!1,n.decimalSeparator=".",e.formattedValueEn=l(e.value,n,"en"),2===e.tokenLength&&"milliseconds"===e.type&&(e.formattedValueMS=l(e.value,{minimumIntegerDigits:3,useGrouping:!1},"en").slice(0,2)),e};if((pe=d(pe=y(pe,be))).length>1){var Se=function(e){return p(pe,function(t){return t.type===e})};g(o,function(e){var t=Se(e.type);t&&g(e.targets,function(e){var n=Se(e.type);n&&parseInt(t.formattedValueEn,10)===e.value&&(t.rawValue=0,t.wholeValue=0,t.decimalValue=0,n.rawValue+=1,n.wholeValue+=1,n.decimalValue=0,n.formattedValueEn=n.wholeValue.toString(),ve=!0)})})}return ve&&(de=!1,A=B,pe=d(pe=y(pe,be))),!E||Q&&!a.trim?(ae&&(pe=S(pe,function(e){return!e.isSmallest&&!e.wholeValue&&!p(C,e.type)})),I&&pe.length&&(pe=pe.slice(0,I)),le&&pe.length>1&&(ge=function(e){return!e.wholeValue&&!p(C,e.type)&&!e.isLargest},pe=S(pe.slice().reverse(),ge).reverse()),ue&&(pe=d(pe=y(pe,function(e,t){return t>0&&t<pe.length-1&&!e.wholeValue?null:e}))),!se||1!==pe.length||pe[0].wholeValue||!W&&pe[0].isSmallest&&pe[0].rawValue<K||(pe=[])):pe=d(pe=y(pe,function(e){return p(E,function(t){return e.type===t})?e:null})),F?pe:(g(fe,function(e){var t=L[e.type],n=p(pe,function(t){return t.type===e.type});if(t&&n){var r=n.formattedValueEn.split(".");r[0]=parseInt(r[0],10),r[1]?r[1]=parseFloat("0."+r[1],10):r[1]=null;var o=N.durationPluralKey(t,r[0],r[1]),a=function(e,t){var n=[];return g(T(t),function(r){if("_durationLabels"===r.slice(0,15)){var o=r.slice(15).toLowerCase();g(T(t[r]),function(i){i.slice(0,1)===e&&n.push({type:o,key:i,label:t[r][i]})})}}),n}(t,N),l=!1,s={};g(N._durationLabelTypes,function(t){var n=p(a,function(e){return e.type===t.type&&e.key===o});n&&(s[n.type]=n.label,i(e.text,t.string)&&(e.text=e.text.replace(t.string,n.label),l=!0))}),U&&!l&&(a.sort(u),g(a,function(t){return s[t.type]===t.label?!i(e.text,t.label)&&void 0:i(e.text,t.label)?(e.text=e.text.replace(t.label,s[t.type]),!1):void 0}))}}),(fe=y(fe,function(e){if(!e.type)return e.text;var t=p(pe,function(t){return t.type===e.type});if(!t)return"";var n="";return R&&(n+=e.text),(O&&Q||!O&&Y)&&(n+="< ",Q=!1,Y=!1),(O&&Y||!O&&Q)&&(n+="> ",Q=!1,Y=!1),O&&(t.value>0||""===ne||p(C,t.type)||p(E,t.type))&&(n+="-",O=!1),"milliseconds"===e.type&&t.formattedValueMS?n+=t.formattedValueMS:n+=t.formattedValue,R||(n+=e.text),n})).join("").replace(/(,| |:|\.)*$/,"").replace(/^(,| |:|\.)*/,""))}function V(){var e=this.duration,t=function(t){return e._data[t]},n=p(this.types,t),r=function(e,t){for(var n=e.length;n-=1;)if(t(e[n]))return e[n]}(this.types,t);switch(n){case"milliseconds":return"S __";case"seconds":case"minutes":return"*_MS_";case"hours":return"_HMS_";case"days":if(n===r)return"d __";case"weeks":return n===r?"w __":(null===this.trim&&(this.trim="both"),"w __, d __, h __");case"months":if(n===r)return"M __";case"years":return n===r?"y __":(null===this.trim&&(this.trim="both"),"y __, M __, d __");default:return null===this.trim&&(this.trim="both"),"y __, d __, h __, m __, s __"}}function D(e){if(!e)throw"Moment Duration Format init cannot find moment instance.";e.duration.format=x,e.duration.fn.format=O,e.duration.fn.format.defaults={trim:null,stopTrim:null,largest:null,maxValue:null,minValue:null,precision:0,trunc:!1,forceLength:null,userLocale:null,usePlural:!0,useLeftUnits:!1,useGrouping:!0,useSignificantDigits:!1,template:V,useToLocaleString:!0,groupingSeparator:",",decimalSeparator:".",grouping:[3]},e.updateLocale("en",c)}return t=!!((s=(s=!0)&&function(){try{(0).toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}())&&(s=(s=(s=s&&"1"===1..toLocaleString("en",{minimumIntegerDigits:1}))&&"01"===1..toLocaleString("en",{minimumIntegerDigits:2}))&&"001"===1..toLocaleString("en",{minimumIntegerDigits:3}))&&(s=(s=(s=(s=s&&"100"===99.99.toLocaleString("en",{maximumFractionDigits:0,minimumFractionDigits:0}))&&"100.0"===99.99.toLocaleString("en",{maximumFractionDigits:1,minimumFractionDigits:1}))&&"99.99"===99.99.toLocaleString("en",{maximumFractionDigits:2,minimumFractionDigits:2}))&&"99.990"===99.99.toLocaleString("en",{maximumFractionDigits:3,minimumFractionDigits:3}))&&(s=(s=(s=(s=(s=s&&"100"===99.99.toLocaleString("en",{maximumSignificantDigits:1}))&&"100"===99.99.toLocaleString("en",{maximumSignificantDigits:2}))&&"100"===99.99.toLocaleString("en",{maximumSignificantDigits:3}))&&"99.99"===99.99.toLocaleString("en",{maximumSignificantDigits:4}))&&"99.99"===99.99.toLocaleString("en",{maximumSignificantDigits:5}))&&(s=(s=s&&"1,000"===1e3.toLocaleString("en",{useGrouping:!0}))&&"1000"===1e3.toLocaleString("en",{useGrouping:!1}))),n=t&&"3.6"===3.55.toLocaleString("en",{useGrouping:!1,minimumIntegerDigits:1,minimumFractionDigits:1,maximumFractionDigits:1}),D(e),D},o=[n(1)],void 0===(i="function"==typeof(r=l)?r.apply(t,o):r)||(e.exports=i),a&&(a.momentDurationFormatSetup=a.moment?l(a.moment):l)},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),i=n(0),a=n.n(i),l=n(1),u=n.n(l);n(5);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",function(){return S});var d=[a.a.string,a.a.number,a.a.array,a.a.object],v=[a.a.string,a.a.array],b=[a.a.object,a.a.bool],S=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=m(t).call(this,e),n=!o||"object"!==s(o)&&"function"!=typeof o?f(r):o,h(f(n),"setTimer",function(){var e=n.props.interval;n.clearTimer(),t.pooledTimer||0===e||(n.timer=setInterval(function(){n.update(n.props)},e))}),h(f(n),"getTitle",function(){var e=n.props.titleFormat,r=t.getDatetime(n.props),o=e||t.globalFormat;return r.format(o)}),h(f(n),"clearTimer",function(){!t.pooledTimer&&n.timer&&(clearInterval(n.timer),n.timer=null),t.pooledTimer&&!n.timer&&t.removePooledElement(f(n))}),t.globalMoment||(t.globalMoment=u.a),n.state={content:""},n.timer=null,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),g(t,null,[{key:"startPooledTimer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e4;t.clearPooledTimer(),t.pooledTimer=setInterval(function(){t.pooledElements.forEach(function(e){0!==e.props.interval&&e.update()})},e)}},{key:"clearPooledTimer",value:function(){t.pooledTimer&&(clearInterval(t.pooledTimer),t.pooledTimer=null,t.pooledElements=[])}},{key:"pushPooledElement",value:function(e){e instanceof t?-1===t.pooledElements.indexOf(e)&&t.pooledElements.push(e):console.error("Element not an instance of Moment.")}},{key:"removePooledElement",value:function(e){var n=t.pooledElements.indexOf(e);-1!==n&&t.pooledElements.splice(n,1)}},{key:"getDatetime",value:function(e){var n=e.utc,r=e.unix,o=e.date,i=e.locale,a=e.parse,l=e.tz,u=e.local;o=o||e.children,a=a||t.globalParse,u=u||t.globalLocal,l=l||t.globalTimezone,i=t.globalLocale?t.globalLocale:i||t.globalMoment.locale();var s=null;return s=n?t.globalMoment.utc(o,a,i):r?t.globalMoment(1e3*o,a,i):t.globalMoment(o,a,i),l?s=s.tz(l):u&&(s=s.local()),s}},{key:"getContent",value:function(e){var n=e.fromNow,r=e.fromNowDuring,o=e.from,i=e.add,a=e.subtract,l=e.toNow,s=e.to,c=e.ago,m=e.calendar,f=e.diff,p=e.duration,g=e.durationFromNow,y=e.unit,h=e.decimal,d=e.format;d=d||t.globalFormat;var v=t.getDatetime(e);i&&v.add(i),a&&v.subtract(a);var b=Boolean(r)&&-v.diff(u()())<r,S="";return S=d&&!b?v.format(d):o?v.from(o,c):n||b?v.fromNow(c):s?v.to(s,c):l?v.toNow(c):m?v.calendar(null,m):f?v.diff(f,y,h):p?v.diff(p):g?u()().diff(v):v.toString(),(p||g)&&(S=(S=u.a.duration(S)).format(d)),S=(t.globalFilter||e.filter)(S)}}]),g(t,[{key:"componentDidMount",value:function(){this.setTimer(),t.pooledTimer&&t.pushPooledElement(this)}},{key:"componentDidUpdate",value:function(e){var t=this.props.interval;e.interval!==t&&this.setTimer()}},{key:"componentWillUnmount",value:function(){this.clearTimer()}},{key:"update",value:function(e){var n=e||this.props,r=n.onChange,o=t.getContent(n);this.setState({content:o},function(){r(o)})}},{key:"render",value:function(){var e,n,r,i,a=this.props,l=a.withTitle,u=a.element,s=c(a,["withTitle","element"]),m=this.state.content,f=(e=s,n=t.propTypes,r=Object.keys(n),i=Object.assign({},e),Object.keys(i).filter(function(e){return-1!==r.indexOf(e)}).forEach(function(e){return delete i[e]}),i);return l&&(f.title=this.getTitle()),o.a.createElement(u||t.globalElement,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({dateTime:t.getDatetime(this.props)},f),m)}}],[{key:"getDerivedStateFromProps",value:function(e){return{content:t.getContent(e)}}}]),t}();h(S,"propTypes",{element:a.a.any,date:a.a.oneOfType(d),parse:a.a.oneOfType(v),format:a.a.string,add:a.a.object,subtract:a.a.object,ago:a.a.bool,fromNow:a.a.bool,fromNowDuring:a.a.number,from:a.a.oneOfType(d),toNow:a.a.bool,to:a.a.oneOfType(d),calendar:a.a.oneOfType(b),unix:a.a.bool,utc:a.a.bool,local:a.a.bool,tz:a.a.string,withTitle:a.a.bool,titleFormat:a.a.string,locale:a.a.string,interval:a.a.number,diff:a.a.oneOfType(d),duration:a.a.oneOfType(d),durationFromNow:a.a.bool,unit:a.a.string,decimal:a.a.bool,filter:a.a.func,onChange:a.a.func}),h(S,"defaultProps",{element:null,fromNow:!1,toNow:!1,calendar:!1,ago:!1,unix:!1,utc:!1,local:!1,unit:null,withTitle:!1,decimal:!1,titleFormat:"",interval:6e4,filter:function(e){return e},onChange:function(){}}),h(S,"globalMoment",null),h(S,"globalLocale",null),h(S,"globalLocal",null),h(S,"globalFormat",null),h(S,"globalParse",null),h(S,"globalFilter",null),h(S,"globalElement","time"),h(S,"globalTimezone",null),h(S,"pooledElements",[]),h(S,"pooledTimer",null)}])});

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_TimePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/TimePanel */ "./components/TimePanel.js");
/* harmony import */ var _components_DetailsPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/DetailsPanel */ "./components/DetailsPanel.js");
/* harmony import */ var _mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../mock_data/users_list.json */ "./mock_data/users_list.json");
var _mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../mock_data/users_list.json */ "./mock_data/users_list.json", 1);
/* harmony import */ var _mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../mock_data/users_data.json */ "./mock_data/users_data.json");
var _mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../mock_data/users_data.json */ "./mock_data/users_data.json", 1);
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      currentUserData = _useState[0],
      setCurrentUserData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      selectedTask = _useState2[0],
      setSelectedTask = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setCurrentUserData(_mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_7__[_mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_6__[0].user_ID]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (currentUserData.user_tasks) {
      // console.log(currentUserData.user_tasks[0]);
      setSelectedTask(currentUserData.user_tasks[0]);
    }
  }, [currentUserData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userName: currentUserData.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("main", {
    className: "jsx-2051910776 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3150840559", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('main-background')]]]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_components_TimePanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userData: currentUserData,
    selectedTask: selectedTask,
    setSelectedTask: setSelectedTask,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_components_DetailsPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userData: currentUserData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3150840559",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('main-background')],
    __self: _this
  }, "*{font-family:'Gotham Rounded',sans-serif;color:white;margin:0;padding:0;box-sizing:border-box;font-weight:medium;}body{background-color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('main-background'), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ21DLEFBR2tFLEFBUUssd0NBUGxDLE1BUWhCLE1BUGEsU0FDQyxVQUNZLHNCQUNILG1CQUN2QiIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgVGltZVBhbmVsIGZyb20gJy4vLi4vY29tcG9uZW50cy9UaW1lUGFuZWwnO1xuaW1wb3J0IERldGFpbHNQYW5lbCBmcm9tICcuLy4uL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsJztcbmltcG9ydCB1c2Vyc19saXN0IGZyb20gJy4vLi4vbW9ja19kYXRhL3VzZXJzX2xpc3QuanNvbic7XG5pbXBvcnQgdXNlcnNfZGF0YSBmcm9tICcuLy4uL21vY2tfZGF0YS91c2Vyc19kYXRhLmpzb24nO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFsgY3VycmVudFVzZXJEYXRhLCBzZXRDdXJyZW50VXNlckRhdGEgXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbIHNlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrIF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFVzZXJEYXRhKHVzZXJzX2RhdGFbdXNlcnNfbGlzdFswXS51c2VyX0lEXSlcbiAgICB9LFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyRGF0YS51c2VyX3Rhc2tzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VXNlckRhdGEudXNlcl90YXNrc1swXSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2soY3VycmVudFVzZXJEYXRhLnVzZXJfdGFza3NbMF0pXG4gICAgICAgIH1cbiAgICB9LFtjdXJyZW50VXNlckRhdGFdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgdXNlck5hbWU9e2N1cnJlbnRVc2VyRGF0YS5uYW1lfS8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8VGltZVBhbmVsIFxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YT17Y3VycmVudFVzZXJEYXRhfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhc2s9e3NlbGVjdGVkVGFza31cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYXNrPXtzZXRTZWxlY3RlZFRhc2t9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERldGFpbHNQYW5lbCB1c2VyRGF0YT17Y3VycmVudFVzZXJEYXRhfS8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dvdGhhbSBSb3VuZGVkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UGFsbGV0ZSgnbWFpbi1iYWNrZ3JvdW5kJyl9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MCUgMzAlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lIGRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YXNrcyBkZXRhaWxzXCI7XG4gICAgICAgICAgICAgICAgICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2051910776",
    __self: _this
  }, ".jsx-2051910776{margin-top:10px;height:80vh;width:100%;display:grid;grid-template-rows:70% 30%;grid-template-columns:50% 50%;grid-template-areas: \"time details\" \"tasks details\";row-gap:10px;-webkit-column-gap:10px;column-gap:10px;}@media screen and (min-width:720px){.jsx-2051910776{width:70vw;margin:20px auto 0;}}@media screen and (max-width:720px){.jsx-2051910776{padding:0 30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRDRCLEFBRXFDLEFBYUQsQUFLSSxXQUpJLElBS3ZCLENBbEJZLFlBQ0QsRUFhWCxTQVphLGFBQ2MsMkJBQ0csOEJBR1gsb0RBQ04sYUFDRyx3Q0FVcEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFBhbGxldGUgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFRpbWVQYW5lbCBmcm9tICcuLy4uL2NvbXBvbmVudHMvVGltZVBhbmVsJztcbmltcG9ydCBEZXRhaWxzUGFuZWwgZnJvbSAnLi8uLi9jb21wb25lbnRzL0RldGFpbHNQYW5lbCc7XG5pbXBvcnQgdXNlcnNfbGlzdCBmcm9tICcuLy4uL21vY2tfZGF0YS91c2Vyc19saXN0Lmpzb24nO1xuaW1wb3J0IHVzZXJzX2RhdGEgZnJvbSAnLi8uLi9tb2NrX2RhdGEvdXNlcnNfZGF0YS5qc29uJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbIGN1cnJlbnRVc2VyRGF0YSwgc2V0Q3VycmVudFVzZXJEYXRhIF0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgWyBzZWxlY3RlZFRhc2ssIHNldFNlbGVjdGVkVGFzayBdID0gdXNlU3RhdGUoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEN1cnJlbnRVc2VyRGF0YSh1c2Vyc19kYXRhW3VzZXJzX2xpc3RbMF0udXNlcl9JRF0pXG4gICAgfSxbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50VXNlckRhdGEudXNlcl90YXNrcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY3VycmVudFVzZXJEYXRhLnVzZXJfdGFza3NbMF0pO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYXNrKGN1cnJlbnRVc2VyRGF0YS51c2VyX3Rhc2tzWzBdKVxuICAgICAgICB9XG4gICAgfSxbY3VycmVudFVzZXJEYXRhXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmF2YmFyIHVzZXJOYW1lPXtjdXJyZW50VXNlckRhdGEubmFtZX0vPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPFRpbWVQYW5lbCBcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGE9e2N1cnJlbnRVc2VyRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYXNrPXtzZWxlY3RlZFRhc2t9XG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFzaz17c2V0U2VsZWN0ZWRUYXNrfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEZXRhaWxzUGFuZWwgdXNlckRhdGE9e2N1cnJlbnRVc2VyRGF0YX0vPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHb3RoYW0gUm91bmRlZCcsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBtZWRpdW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dldFBhbGxldGUoJ21haW4tYmFja2dyb3VuZCcpfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzAlIDMwJTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZSBkZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFza3MgZGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgICAgICByb3ctZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

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
    2: '#ff8a00',
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

/***/ }),

/***/ "./tools/useInterval.js":
/*!******************************!*\
  !*** ./tools/useInterval.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useInterval = function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Remember the latest callback.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInterval);

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fguidolarosa%2FDocuments%2FWEBDEV%2FProgressTracker%2Fpages%2Findex.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fguidolarosa%2FDocuments%2FWEBDEV%2FProgressTracker%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fguidolarosa%2FDocuments%2FWEBDEV%2FProgressTracker%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map