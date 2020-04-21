webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.c056e8d29a5e38db470a.hot-update.js.map