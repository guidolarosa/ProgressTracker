module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Countdown.js":
/*!*********************************!*\
  !*** ./components/Countdown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tools_useInterval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../tools/useInterval */ "./tools/useInterval.js");
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
var _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Countdown = props => {
  const {
    0: isTimeUp,
    1: setIsTimeUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isTimerRunning,
    1: setIsTimerRunning
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: timeRemaining,
    1: setTimeRemaining
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    minutes: 25,
    seconds: 0
  });

  const toggleTimerState = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const returnNextTime = previousTime => {
    // console.log(previousTime)
    let newMinutes, newSeconds;
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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isTimeUp) {
      alert('Time up baby!');
    }
  }, [isTimeUp]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let timerInterval = null;

    if (isTimerRunning) {
      // console.log('Timer running');
      timerInterval = setInterval(() => {
        // console.log('Tick...');
        setTimeRemaining(returnNextTime(timeRemaining));
      }, 1000);
    } else {// console.log('Timer stopped')
    }

    return () => clearInterval(timerInterval);
  }, [isTimerRunning, timeRemaining]);

  const changeMinutes = change => {
    if (timeRemaining.minutes < 95) {
      setTimeRemaining({
        minutes: timeRemaining.minutes += change,
        seconds: timeRemaining.seconds
      });
    }
  };

  const resetTimer = (resetTime = {
    minutes: 25,
    seconds: 0
  }) => {
    setIsTimerRunning(false);
    setTimeRemaining({
      minutes: resetTime.minutes,
      seconds: resetTime.seconds
    });
  };

  const isTimeZero = timeRemaining => {
    const {
      minutes,
      seconds
    } = timeRemaining; // console.log(minutes, seconds);

    if (minutes == 0 && seconds == 0) {
      return true;
    } else {
      return false;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + ((isTimerRunning ? 'countdown timer-running' : 'countdown') || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, timeRemaining.minutes < 10 ? '0' + timeRemaining.minutes : timeRemaining.minutes, ":", timeRemaining.seconds < 10 ? '0' + timeRemaining.seconds : timeRemaining.seconds), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "countdown-controls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx("span", {
    title: "Remove 5 minutes",
    onClick: () => changeMinutes(-5),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + ((isTimeZero(timeRemaining) ? 'disabled change-minutes-button' : 'change-minutes-button') || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, "-5"), __jsx("span", {
    title: "Play/resume countdown",
    onClick: () => {
      setIsTimerRunning(true);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + `control-button ${isTimerRunning ? `disabled` : ``}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-play.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Reset countdown",
    onClick: () => {
      resetTimer();
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + `control-button`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-reset.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Pause countdown",
    onClick: () => {
      setIsTimerRunning(false);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + `control-button ${!isTimerRunning ? `disabled` : ``}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/img/icon-pause.png",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 21
    }
  })), __jsx("span", {
    title: "Add 5 minutes",
    onClick: () => changeMinutes(5),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2181854410", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)]]]) + " " + "change-minutes-button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "+5")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2181854410",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)],
    __self: undefined
  }, `@-webkit-keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.5;}100%{opacity:1;}}@keyframes fade-in-out-__jsx-style-dynamic-selector{0%{opacity:1;}50%{opacity:.5;}100%{opacity:1;}}.countdown.__jsx-style-dynamic-selector{display:inline-block;width:100%;text-align:center;font-size:6rem;font-weight:500;margin-top:20px;opacity:1;}.countdown.timer-running.__jsx-style-dynamic-selector{-webkit-animation-name:fade-in-out-__jsx-style-dynamic-selector;animation-name:fade-in-out-__jsx-style-dynamic-selector;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-fill-mode:forward;animation-fill-mode:forward;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.countdown-controls.__jsx-style-dynamic-selector{height:50px;width:100%;border-radius:100px;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0 20px;box-shadow:0px 2px 5px black;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{font-size:1.5rem;line-height:50px;font-weight:bold;color:${Object(_theme_colors__WEBPACK_IMPORTED_MODULE_3__["getBlack"])(.6)};cursor:pointer;}.countdown-controls.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:1.5rem;position:relative;top:5px;}.control-button.__jsx-style-dynamic-selector{-webkit-transition:.2s ease-in-out opacity;transition:.2s ease-in-out opacity;}.control-button.disabled.__jsx-style-dynamic-selector,.change-minutes-button.disabled.__jsx-style-dynamic-selector{opacity:.3;pointer-events:none;}.change-minutes-button.__jsx-style-dynamic-selector{opacity:.7;-webkit-transition:.1s ease-in-out opacity;transition:.1s ease-in-out opacity;}.change-minutes-button.__jsx-style-dynamic-selector:hover{opacity:1;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0NvdW50ZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSXdCLEFBR2lDLEFBQ0UsQUFDQSxBQUdPLEFBU00sQUFPZixBQVVLLEFBT0gsQUFLcUIsQUFJeEIsQUFJQSxBQUlELFVBdkRHLEFBRUUsQUFzRG5CLENBdkRtQixBQStDSyxBQUllLENBOUJ4QixFQWlCTyxHQVBELElBMUJOLEVBaUJTLFFBMEJ4QixDQTFDc0IsQUFpQ1YsRUFQUyxNQVFyQixHQWpCcUIsT0FoQkYsQ0EwQm9CLFNBVHRCLEtBaEJHLGFBbUNwQixHQWxDb0IsS0F5QkQsR0FrQm5CLFFBMUNjLElBeUJkLE1BeEJBLGFBRzBCLGNBV1Esc0NBVlEsNkVBV3ZCLE9BVmEsUUFXQyw2QkFDakMsMkJBWHVDLDhFQUN2QyIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9Db3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi8uLi90b29scy91c2VJbnRlcnZhbCc7XG5pbXBvcnQgeyBnZXRCbGFjaywgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IENvdW50ZG93biA9IHByb3BzID0+IHtcbiAgICBcbiAgICBjb25zdCBbIGlzVGltZVVwLCBzZXRJc1RpbWVVcCBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFsgaXNUaW1lclJ1bm5pbmcsIHNldElzVGltZXJSdW5uaW5nIF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgWyB0aW1lUmVtYWluaW5nLCBzZXRUaW1lUmVtYWluaW5nIF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIG1pbnV0ZXM6IDI1LFxuICAgICAgICBzZWNvbmRzOiAwXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2dnbGVUaW1lclN0YXRlID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1RpbWVyUnVubmluZyghaXNUaW1lclJ1bm5pbmcpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVybk5leHRUaW1lID0gcHJldmlvdXNUaW1lID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJldmlvdXNUaW1lKVxuICAgICAgICBsZXQgbmV3TWludXRlcywgbmV3U2Vjb25kcztcbiAgICAgICAgbmV3TWludXRlcyA9IHByZXZpb3VzVGltZS5zZWNvbmRzID09PSAwID9cbiAgICAgICAgICAgIC0tcHJldmlvdXNUaW1lLm1pbnV0ZXMgOlxuICAgICAgICAgICAgcHJldmlvdXNUaW1lLm1pbnV0ZXM7XG4gICAgICAgIG5ld1NlY29uZHMgPSBwcmV2aW91c1RpbWUuc2Vjb25kcyA9PT0gMCA/XG4gICAgICAgICAgICA1OSA6XG4gICAgICAgICAgICAtLXByZXZpb3VzVGltZS5zZWNvbmRzO1xuICAgICAgICBpZiAobmV3TWludXRlcyA9PT0gMCAmJiBuZXdTZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgICBzZXRJc1RpbWVyUnVubmluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRJc1RpbWVVcCh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWludXRlczogbmV3TWludXRlcyxcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1pbnV0ZXM6IG5ld01pbnV0ZXMsXG4gICAgICAgICAgICBzZWNvbmRzOiBuZXdTZWNvbmRzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNUaW1lVXApIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaW1lIHVwIGJhYnkhJyk7XG4gICAgICAgIH1cbiAgICB9LFsgaXNUaW1lVXAgXSlcbiAgICAgICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICBpZiAoaXNUaW1lclJ1bm5pbmcpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaW1lciBydW5uaW5nJyk7XG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaWNrLi4uJyk7XG4gICAgICAgICAgICAgICAgc2V0VGltZVJlbWFpbmluZyhyZXR1cm5OZXh0VGltZSh0aW1lUmVtYWluaW5nKSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaW1lciBzdG9wcGVkJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcbiAgICB9LFsgaXNUaW1lclJ1bm5pbmcsIHRpbWVSZW1haW5pbmcgXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VNaW51dGVzID0gY2hhbmdlID0+IHtcbiAgICAgICAgaWYgKHRpbWVSZW1haW5pbmcubWludXRlcyA8IDk1KSB7XG4gICAgICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHtcbiAgICAgICAgICAgICAgICBtaW51dGVzOiB0aW1lUmVtYWluaW5nLm1pbnV0ZXMgKz0gY2hhbmdlLFxuICAgICAgICAgICAgICAgIHNlY29uZHM6IHRpbWVSZW1haW5pbmcuc2Vjb25kc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZXNldFRpbWVyID0gKHJlc2V0VGltZSA9IHttaW51dGVzOiAyNSwgc2Vjb25kczogMH0pID0+IHtcbiAgICAgICAgc2V0SXNUaW1lclJ1bm5pbmcoZmFsc2UpO1xuICAgICAgICBzZXRUaW1lUmVtYWluaW5nKHtcbiAgICAgICAgICAgIG1pbnV0ZXM6IHJlc2V0VGltZS5taW51dGVzLFxuICAgICAgICAgICAgc2Vjb25kczogcmVzZXRUaW1lLnNlY29uZHNcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBpc1RpbWVaZXJvID0gdGltZVJlbWFpbmluZyA9PiB7XG4gICAgICAgIGNvbnN0IHsgbWludXRlcywgc2Vjb25kcyB9ID0gdGltZVJlbWFpbmluZztcbiAgICAgICAgLy8gY29uc29sZS5sb2cobWludXRlcywgc2Vjb25kcyk7XG4gICAgICAgIGlmIChtaW51dGVzID09IDAgJiYgc2Vjb25kcyA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpc1RpbWVyUnVubmluZyA/XG4gICAgICAgICAgICAgICAgICAgICdjb3VudGRvd24gdGltZXItcnVubmluZycgOlxuICAgICAgICAgICAgICAgICAgICAnY291bnRkb3duJ1xuICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAge3RpbWVSZW1haW5pbmcubWludXRlcyA8IDEwID9cbiAgICAgICAgICAgICAgICAgICAgJzAnICsgdGltZVJlbWFpbmluZy5taW51dGVzIDpcbiAgICAgICAgICAgICAgICAgICAgdGltZVJlbWFpbmluZy5taW51dGVzXG4gICAgICAgICAgICAgICAgfTp7dGltZVJlbWFpbmluZy5zZWNvbmRzIDwgMTAgP1xuICAgICAgICAgICAgICAgICAgICAnMCcgKyB0aW1lUmVtYWluaW5nLnNlY29uZHMgOlxuICAgICAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nLnNlY29uZHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzVGltZVplcm8odGltZVJlbWFpbmluZykgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXNhYmxlZCBjaGFuZ2UtbWludXRlcy1idXR0b24nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICdjaGFuZ2UtbWludXRlcy1idXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIDUgbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1pbnV0ZXMoLTUpfT4tNTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBsYXkvcmVzdW1lIGNvdW50ZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRyb2wtYnV0dG9uICR7aXNUaW1lclJ1bm5pbmcgPyBgZGlzYWJsZWRgIDogYGB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldElzVGltZXJSdW5uaW5nKHRydWUpfX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9pY29uLXBsYXkucG5nXCIvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlc2V0IGNvdW50ZG93blwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRyb2wtYnV0dG9uYH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3Jlc2V0VGltZXIoKX19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbi1yZXNldC5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUGF1c2UgY291bnRkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29udHJvbC1idXR0b24gJHshaXNUaW1lclJ1bm5pbmcgPyBgZGlzYWJsZWRgIDogYGB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldElzVGltZXJSdW5uaW5nKGZhbHNlKX19PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWNvbi1wYXVzZS5wbmdcIi8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoYW5nZS1taW51dGVzLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIDUgbWludXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1pbnV0ZXMoNSl9Pis1PC9zcGFuPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZS1pbi1vdXQge1xuICAgICAgICAgICAgICAgICAgICAwJSB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgICAgICAgNTAlIHtvcGFjaXR5OiAuNX1cbiAgICAgICAgICAgICAgICAgICAgMTAwJSB7b3BhY2l0eTogMX1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93biB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnRkb3duLnRpbWVyLXJ1bm5pbmcge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IGJsYWNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY291bnRkb3duLWNvbnRyb2xzIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKC42KX07XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdW50ZG93bi1jb250cm9scyBzcGFuIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udHJvbC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbnRyb2wtYnV0dG9uLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIC5jaGFuZ2UtbWludXRlcy1idXR0b24uZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMztcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jaGFuZ2UtbWludXRlcy1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjFzIGVhc2UtaW4tb3V0IG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jaGFuZ2UtbWludXRlcy1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247Il19 */
/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Countdown.js */`));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "react-moment");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const DetailsPanel = props => {
  const {
    userData
  } = props;
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const today = new Date();

  const turnDaysIntoArray = month => {
    const days = [];
    const totalDays = daysInMonth(month, today.getFullYear());

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const formatDate = date => {
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let weekday = date.getDay();
    return `${weekdays[weekday]} ${day} ${months[month]} ${year}`;
  };

  const isFutureMonth = (year, month, day) => {
    let givenDate = new Date(year, month, day);
    let isFutureMonth = givenDate > today ? true : false;
    return isFutureMonth;
  };

  const isDayEmpty = (year, month, day) => {
    let givenDate = new Date(year, month, day);
    let userTaskHistory = userData.user_history;

    if (userTaskHistory) {
      userTaskHistory.forEach(task => {
        let taskDate = new Date(task.date.year, task.date.month, task.date.day);

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

  const FutureDay = () => {
    return __jsx("img", {
      src: "/img/icon-day-indicator-disabled.png",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    });
  };

  const DayIndicator = props => {
    let completed = props.completed;
    return completed > 75 ? __jsx("img", {
      src: "/img/icon-day-indicator-100.png",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 13
      }
    }) : completed == 0 ? __jsx("img", {
      src: "/img/icon-day-indicator-empty.png",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }) : '';
  };

  return __jsx("section", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "details-panel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "dropdown-title-selector",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, "Year"), __jsx("section", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "months-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, months.map((month, monthIndex) => {
    return __jsx("section", {
      key: monthIndex,
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + ((monthIndex > today.getMonth() ? 'month following-month' : 'month') || ""),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "month-name",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }, month), __jsx("section", {
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-progress-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 29
      }
    }, turnDaysIntoArray(monthIndex).map(day => {
      return __jsx("section", {
        title: formatDate(new Date(today.getFullYear(), monthIndex, day)),
        className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-indicator",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 41
        }
      }, isFutureMonth(today.getFullYear(), monthIndex, day) ? __jsx(FutureDay, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 53
        }
      }) : !isDayEmpty(today.getFullYear(), monthIndex, day) ? __jsx(DayIndicator, {
        completed: 0,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 57
        }
      }) : __jsx(DayIndicator, {
        completed: 100,
        __self: undefined,
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
    __self: undefined
  }, `.details-panel.__jsx-style-dynamic-selector{padding:20px;background:white;grid-area:details;border-radius:10px;position:relative;}.details-panel.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;background:white;height:30px;opacity:1;bottom:10px;left:0;background:linear-gradient(rgba(0,0,0,0),white);z-index:1;}.details-panel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:${Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8)};}.months-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto;height:95%;padding-right:15px;margin-top:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar{background:white;border:0;width:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background:lightgray;border-radius:10px;}.month.__jsx-style-dynamic-selector{width:47%;margin-bottom:20px;}.month.__jsx-style-dynamic-selector .month-name.__jsx-style-dynamic-selector{font-weight:500;color:${Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5)};padding-bottom:3px;border-bottom:1px solid ${Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)};margin-bottom:10px;font-size:.8rem;}.month.following-month.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{opacity:.3;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySHdCLEFBR2tDLEFBT0YsQUFZd0IsQUFHdEIsQUFTSSxBQUtJLEFBSVgsQUFJTSxBQVFMLFVBWFEsQ0FqQ0QsQUE2Q3RCLEVBcERxQixHQTRDa0IsQ0FiMUIsSUFLVSxLQUpULEdBeEJDLEFBaUNmLENBeENzQixLQWtCdEIsQ0FjQSxJQXhCcUIsQUE0QnJCLFFBbkN1QixHQTJDQSxNQW5DUCxVQVBNLEVBUVIsQ0FtQzJDLElBeEJ2QixLQVZsQixNQVJoQixNQVNXLE9BQzBDLHlCQWlDOUIsbUJBQ0gsSUFqQ04sVUFDZCxFQWlDQSwrQkExQm1CLHlEQUNDLGdCQUNMLFdBQ1EsbUJBQ0osZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxhY2ssIGdldFBhbGxldGUgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5cbmNvbnN0IERldGFpbHNQYW5lbCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgICdKYW51YXJ5JyxcbiAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgICAgJ01vbmRheScsXG4gICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICdGcmlkYXknLFxuICAgICAgICAnU2F0dXJkYXknLFxuICAgICAgICAnU3VuZGF5J1xuICAgIF1cblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHR1cm5EYXlzSW50b0FycmF5ID0gKG1vbnRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY29uc3QgdG90YWxEYXlzID0gZGF5c0luTW9udGgobW9udGgsIHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbERheXM7IGkrKykge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSBkYXRlID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBgJHt3ZWVrZGF5c1t3ZWVrZGF5XX0gJHtkYXl9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGdXR1cmVNb250aCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IGlzRnV0dXJlTW9udGggPSBnaXZlbkRhdGUgPiB0b2RheSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzRnV0dXJlTW9udGg7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEYXlFbXB0eSA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IHVzZXJUYXNrSGlzdG9yeSA9IHVzZXJEYXRhLnVzZXJfaGlzdG9yeTtcbiAgICAgICAgaWYgKHVzZXJUYXNrSGlzdG9yeSkge1xuICAgICAgICAgICAgdXNlclRhc2tIaXN0b3J5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlLnllYXIsIHRhc2suZGF0ZS5tb250aCwgdGFzay5kYXRlLmRheSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tEYXRlLmdldFRpbWUoKSA9PSBnaXZlbkRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdpdmVuRGF0ZSArICcgaXMgbm90IGVtcHR5JylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJcyBlbXB0eScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgRnV0dXJlRGF5ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWRpc2FibGVkLnBuZycvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgRGF5SW5kaWNhdG9yID0gKHByb3BzKSA9PiB7XG4gICAgICAgIGxldCBjb21wbGV0ZWQgPSBwcm9wcy5jb21wbGV0ZWQ7XG4gICAgICAgIHJldHVybiBjb21wbGV0ZWQgPiA3NSA/XG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItMTAwLnBuZycgLz4gOlxuICAgICAgICAgICAgY29tcGxldGVkID09IDAgP1xuICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWVtcHR5LnBuZycgLz4gOlxuICAgICAgICAgICAgJydcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkZXRhaWxzLXBhbmVsXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZHJvcGRvd24tdGl0bGUtc2VsZWN0b3JcIj5ZZWFyPC9oMj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vbnRocy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9udGhJbmRleCA+IHRvZGF5LmdldE1vbnRoKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGggZm9sbG93aW5nLW1vbnRoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtb250aCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttb250aEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibW9udGgtbmFtZVwiPnttb250aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRheS1wcm9ncmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R1cm5EYXlzSW50b0FycmF5KG1vbnRoSW5kZXgpLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Zm9ybWF0RGF0ZShuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aEluZGV4LCBkYXkpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5LWluZGljYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRnV0dXJlTW9udGgodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZ1dHVyZURheSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRGF5RW1wdHkodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5SW5kaWNhdG9yIGNvbXBsZXRlZD17MH0gLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF5SW5kaWNhdG9yIGNvbXBsZXRlZD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKDAuOCl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NyU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCAubW9udGgtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKC41KX07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2dldEJsYWNrKC4xKX07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aC5mb2xsb3dpbmctbW9udGggaDMge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIC5kYXktcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgN2ZyKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcm93LWdhcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciAuZGF5LWluZGljYXRvciBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsc1BhbmVsOyJdfQ== */
/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3025927470",
    __self: undefined
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Log.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Log = props => {
  return __jsx("section", {
    className: "jsx-1286230987" + " " + "log",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "jsx-1286230987" + " " + "log-title-bar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1286230987",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, "My Log"), __jsx("section", {
    className: "jsx-1286230987" + " " + "date-navigator",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "jsx-1286230987" + " " + "date-navigator-arrow previous-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }
  }, "<"), __jsx("span", {
    className: "jsx-1286230987" + " " + "current-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, "Today"), __jsx("span", {
    className: "jsx-1286230987" + " " + "date-navigator-arrow next-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, ">"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1286230987",
    __self: undefined
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Navbar = props => {
  const getUserName = name => {
    if (name) {
      return `${name.fname} ${name.lname}`;
    }
  };

  return __jsx("section", {
    className: "jsx-1185798982" + " " + "navbar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "jsx-1185798982" + " " + "navbar-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-1185798982",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Progress Tracker"), __jsx("span", {
    className: "jsx-1185798982" + " " + "user-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, getUserName(props.userName))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1185798982",
    __self: undefined
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
var _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TaskPanel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const TaskPanel = props => {
  const getSelectedTask = taskId => {
    const userTasks = props.userTasks;
    let selectedTask = null;
    userTasks.forEach(task => {
      if (task.id == taskId) {
        selectedTask = task;
      }
    });
    return selectedTask;
  };

  const switchSelectedTask = newTaskId => {
    let selectedTask = getSelectedTask(newTaskId); // console.log(selectedTask);

    setTimeout(() => {
      console.log(selectedTask);
    }, 1000);
    props.setSelectedTask(selectedTask);
  };

  return __jsx("section", {
    className: "jsx-3974252359" + " " + "task-panel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3974252359",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "What are you working on?"), __jsx("section", {
    className: "jsx-3974252359" + " " + "tasks-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, props.userTasks ? props.userTasks.map((task, index) => {
    return __jsx("span", {
      key: index,
      taskId: task.id,
      onClick: () => {
        switchSelectedTask(task.id);
      },
      style: {
        background: Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(task.color)
      },
      className: "jsx-3974252359" + " " + "task",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, task.name);
  }) : __jsx("span", {
    className: "jsx-3974252359",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 26
    }
  }, "No tasks added yet.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3974252359",
    __self: undefined
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
/* harmony import */ var _TaskPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskPanel */ "./components/TaskPanel.js");
/* harmony import */ var _Countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Countdown */ "./components/Countdown.js");
/* harmony import */ var _Log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Log */ "./components/Log.js");
var _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TimePanel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const TimePanel = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-panel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "type-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Work"), props.selectedTask ? __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3465867692", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "selected-task",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, props.selectedTask.name) : ''), __jsx(_Countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(_Log__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userTasks: props.userData.user_tasks,
    selectedTask: props.selectedTask,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  })), __jsx(_TaskPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userTasks: props.userData.user_tasks,
    setSelectedTask: props.setSelectedTask,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3465867692",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent'],
    __self: undefined
  }, `.time-panel.__jsx-style-dynamic-selector{padding:20px;grid-area:time;background-color:${Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background')};border-radius:10px;}.time-panel.__jsx-style-dynamic-selector .time-title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.time-panel.__jsx-style-dynamic-selector .type-title.__jsx-style-dynamic-selector{color:white;text-align:center;}.time-panel.__jsx-style-dynamic-selector .selected-task.__jsx-style-dynamic-selector{display:inline-block;padding:5px 15px;min-width:40%;max-width:60%;text-align:center;border-radius:100px;pointer-events:none;box-shadow:0px 2px 1px black;white-space:nowrap;background: ${props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent'};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1RpbWVQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBR2tDLEFBTUEsQUFJRCxBQUlTLFlBSEgsQ0FWSCxRQWNFLE9BYjZCLEVBVWxELFFBSWtCLGNBQ0EsY0FDSSxRQWZDLEFBSVcsVUFZVixTQWZ4QixXQWdCd0Isb0JBQ1MsNkJBQ1YsbUJBRWEsaUJBaEJwQyx3QkFpQkEiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvVGltZVBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFRhc2tDb2xvciwgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCBUYXNrUGFuZWwgZnJvbSAnLi9UYXNrUGFuZWwnO1xuaW1wb3J0IENvdW50ZG93biBmcm9tICcuL0NvdW50ZG93bic7XG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nJztcblxuY29uc3QgVGltZVBhbmVsID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aW1lLXBhbmVsXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGltZS10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidHlwZS10aXRsZVwiPldvcms8L2gyPlxuICAgICAgICAgICAgICAgICAgICB7IHByb3BzLnNlbGVjdGVkVGFzayA/XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxlY3RlZC10YXNrXCI+e3Byb3BzLnNlbGVjdGVkVGFzay5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPENvdW50ZG93biAvPlxuICAgICAgICAgICAgICAgIDxMb2cgXG4gICAgICAgICAgICAgICAgICAgIHVzZXJUYXNrcz17cHJvcHMudXNlckRhdGEudXNlcl90YXNrc31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYXNrPXtwcm9wcy5zZWxlY3RlZFRhc2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxUYXNrUGFuZWwgXG4gICAgICAgICAgICAgICAgdXNlclRhc2tzPXtwcm9wcy51c2VyRGF0YS51c2VyX3Rhc2tzfVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGFzaz17cHJvcHMuc2V0U2VsZWN0ZWRUYXNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UGFsbGV0ZSgnY291bnRlci1iYWNrZ3JvdW5kJyl9O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGltZS1wYW5lbCAudGltZS10aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwgLnR5cGUtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwgLnNlbGVjdGVkLXRhc2sge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXG4gICAgICAgICAgICAgICAgICAgICAgICAke3Byb3BzLnNlbGVjdGVkVGFzayA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldFRhc2tDb2xvcihwcm9wcy5zZWxlY3RlZFRhc2suY29sb3IpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndHJhbnNwYXJlbnQnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVBhbmVsOyJdfQ== */
/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TimePanel.js */`));
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_TimePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/TimePanel */ "./components/TimePanel.js");
/* harmony import */ var _components_DetailsPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/DetailsPanel */ "./components/DetailsPanel.js");
/* harmony import */ var _mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../mock_data/users_list.json */ "./mock_data/users_list.json");
var _mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../mock_data/users_list.json */ "./mock_data/users_list.json", 1);
/* harmony import */ var _mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../mock_data/users_data.json */ "./mock_data/users_data.json");
var _mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../mock_data/users_data.json */ "./mock_data/users_data.json", 1);
var _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const Index = () => {
  const {
    0: currentUserData,
    1: setCurrentUserData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  const {
    0: selectedTask,
    1: setSelectedTask
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setCurrentUserData(_mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_7__[_mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_6__[0].user_ID]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (currentUserData.user_tasks) {
      // console.log(currentUserData.user_tasks[0]);
      setSelectedTask(currentUserData.user_tasks[0]);
    }
  }, [currentUserData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userName: currentUserData.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("main", {
    className: "jsx-2051910776 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3150840559", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('main-background')]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_components_TimePanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userData: currentUserData,
    selectedTask: selectedTask,
    setSelectedTask: setSelectedTask,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), __jsx(_components_DetailsPanel__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userData: currentUserData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3150840559",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('main-background')],
    __self: undefined
  }, `*{font-family:'Gotham Rounded',sans-serif;color:white;margin:0;padding:0;box-sizing:border-box;font-weight:medium;}body{background-color:${Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('main-background')};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ21DLEFBR2tFLEFBUUssd0NBUGxDLE1BUWhCLE1BUGEsU0FDQyxVQUNZLHNCQUNILG1CQUN2QiIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgVGltZVBhbmVsIGZyb20gJy4vLi4vY29tcG9uZW50cy9UaW1lUGFuZWwnO1xuaW1wb3J0IERldGFpbHNQYW5lbCBmcm9tICcuLy4uL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsJztcbmltcG9ydCB1c2Vyc19saXN0IGZyb20gJy4vLi4vbW9ja19kYXRhL3VzZXJzX2xpc3QuanNvbic7XG5pbXBvcnQgdXNlcnNfZGF0YSBmcm9tICcuLy4uL21vY2tfZGF0YS91c2Vyc19kYXRhLmpzb24nO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFsgY3VycmVudFVzZXJEYXRhLCBzZXRDdXJyZW50VXNlckRhdGEgXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbIHNlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrIF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFVzZXJEYXRhKHVzZXJzX2RhdGFbdXNlcnNfbGlzdFswXS51c2VyX0lEXSlcbiAgICB9LFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyRGF0YS51c2VyX3Rhc2tzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VXNlckRhdGEudXNlcl90YXNrc1swXSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2soY3VycmVudFVzZXJEYXRhLnVzZXJfdGFza3NbMF0pXG4gICAgICAgIH1cbiAgICB9LFtjdXJyZW50VXNlckRhdGFdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgdXNlck5hbWU9e2N1cnJlbnRVc2VyRGF0YS5uYW1lfS8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8VGltZVBhbmVsIFxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YT17Y3VycmVudFVzZXJEYXRhfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhc2s9e3NlbGVjdGVkVGFza31cbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYXNrPXtzZXRTZWxlY3RlZFRhc2t9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERldGFpbHNQYW5lbCB1c2VyRGF0YT17Y3VycmVudFVzZXJEYXRhfS8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0dvdGhhbSBSb3VuZGVkJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG1lZGl1bTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Z2V0UGFsbGV0ZSgnbWFpbi1iYWNrZ3JvdW5kJyl9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MCUgMzAlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aW1lIGRldGFpbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YXNrcyBkZXRhaWxzXCI7XG4gICAgICAgICAgICAgICAgICAgIHJvdy1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */
/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2051910776",
    __self: undefined
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
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "chroma-js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);

const getTaskColor = colorNumber => {
  const colors = {
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
const getBlack = intensity => {
  return chroma_js__WEBPACK_IMPORTED_MODULE_0___default()('black').alpha(intensity);
};
const getPallete = colorName => {
  const colors = {
    'main-background': getBlack(.8),
    'counter-background': getBlack(.3),
    'green': '#3EC94B'
  };
  const tomatoTheme = {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useInterval = (callback, delay) => {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Remember the latest callback.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInterval);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "chroma-js":
/*!****************************!*\
  !*** external "chroma-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("chroma-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-moment":
/*!*******************************!*\
  !*** external "react-moment" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-moment");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map