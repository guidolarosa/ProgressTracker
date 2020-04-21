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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1210166850", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])(''), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1210166850", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])(''), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1210166850", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])(''), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "type-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Work"), props.selectedTask ? __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1210166850", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])(''), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "selected-task",
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
    id: "1210166850",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])(''), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent'],
    __self: _this
  }, ".time-panel.__jsx-style-dynamic-selector{padding:20px;grid-area:time;background-color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])(''), ";border-radius:10px;}.time-panel.__jsx-style-dynamic-selector .time-title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.time-panel.__jsx-style-dynamic-selector .type-title.__jsx-style-dynamic-selector{color:#2D2D2D;text-align:center;}.time-panel.__jsx-style-dynamic-selector .selected-task.__jsx-style-dynamic-selector{display:inline-block;padding:5px 15px;min-width:40%;max-width:60%;text-align:center;border-radius:100px;pointer-events:none;background: ").concat(props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1RpbWVQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBR2tDLEFBTUEsQUFJQyxBQUlPLGFBYk4sQ0FVRyxPQUlELE9BYjZCLElBVWxELE1BSWtCLGNBQ0EsY0FDSSxRQWZDLEFBSVcsVUFZVixTQWZ4QixXQWdCd0Isb0JBRVkseUNBQ3BDLHdCQWZBIiwiZmlsZSI6Ii9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1RpbWVQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRUYXNrQ29sb3IsIGdldFBhbGxldGUgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgVGFza1BhbmVsIGZyb20gJy4vVGFza1BhbmVsJztcbmltcG9ydCBDb3VudGRvd24gZnJvbSAnLi9Db3VudGRvd24nO1xuaW1wb3J0IExvZyBmcm9tICcuL0xvZyc7XG5cbmNvbnN0IFRpbWVQYW5lbCA9IHByb3BzID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGltZS1wYW5lbFwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpbWUtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInR5cGUtdGl0bGVcIj5Xb3JrPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgeyBwcm9wcy5zZWxlY3RlZFRhc2sgP1xuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VsZWN0ZWQtdGFza1wiPntwcm9wcy5zZWxlY3RlZFRhc2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxDb3VudGRvd24gLz5cbiAgICAgICAgICAgICAgICA8TG9nIFxuICAgICAgICAgICAgICAgICAgICB1c2VyVGFza3M9e3Byb3BzLnVzZXJEYXRhLnVzZXJfdGFza3N9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFzaz17cHJvcHMuc2VsZWN0ZWRUYXNrfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8VGFza1BhbmVsIFxuICAgICAgICAgICAgICAgIHVzZXJUYXNrcz17cHJvcHMudXNlckRhdGEudXNlcl90YXNrc31cbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2s9e3Byb3BzLnNldFNlbGVjdGVkVGFza31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50aW1lLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0aW1lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dldFBhbGxldGUoJycpfTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwgLnRpbWUtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aW1lLXBhbmVsIC50eXBlLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyRDJEMkQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwgLnNlbGVjdGVkLXRhc2sge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvcHMuc2VsZWN0ZWRUYXNrID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGFza0NvbG9yKHByb3BzLnNlbGVjdGVkVGFzay5jb2xvcikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lUGFuZWw7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TimePanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (TimePanel);

/***/ })

})
//# sourceMappingURL=index.js.fd60269ad7b3982718bd.hot-update.js.map