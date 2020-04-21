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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3900553281", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3900553281", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "time-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3900553281", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "type-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Work"), props.selectedTask ? __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3900553281", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent']]]) + " " + "selected-task",
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
    id: "3900553281",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent'],
    __self: _this
  }, ".time-panel.__jsx-style-dynamic-selector{padding:20px;grid-area:time;background-color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getPallete"])('counter-background'), ";border-radius:10px;}.time-panel.__jsx-style-dynamic-selector .time-title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:white;}.time-panel.__jsx-style-dynamic-selector .type-title.__jsx-style-dynamic-selector{color:#2D2D2D;text-align:center;}.time-panel.__jsx-style-dynamic-selector .selected-task.__jsx-style-dynamic-selector{display:inline-block;padding:5px 15px;min-width:40%;max-width:60%;text-align:center;border-radius:100px;pointer-events:none;background: ").concat(props.selectedTask ? Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(props.selectedTask.color) : 'transparent', ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1RpbWVQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBR2tDLEFBTUEsQUFLQyxBQUlPLGFBZE4sQ0FXRyxPQUlELE9BZDZCLElBV2xELE1BSWtCLGNBQ0EsY0FDSSxRQWhCQyxBQUlXLFVBYVYsU0FoQnhCLFdBaUJ3QixvQkFFWSx5Q0FDcEMsd0JBaEJnQixZQUNoQiIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9UaW1lUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0VGFza0NvbG9yLCBnZXRQYWxsZXRlIH0gZnJvbSAnLi8uLi90aGVtZS9jb2xvcnMnO1xuaW1wb3J0IFRhc2tQYW5lbCBmcm9tICcuL1Rhc2tQYW5lbCc7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gJy4vQ291bnRkb3duJztcbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cnO1xuXG5jb25zdCBUaW1lUGFuZWwgPSBwcm9wcyA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRpbWUtcGFuZWxcIj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0aW1lLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0eXBlLXRpdGxlXCI+V29yazwvaDI+XG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuc2VsZWN0ZWRUYXNrID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlbGVjdGVkLXRhc2tcIj57cHJvcHMuc2VsZWN0ZWRUYXNrLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8Q291bnRkb3duIC8+XG4gICAgICAgICAgICAgICAgPExvZyBcbiAgICAgICAgICAgICAgICAgICAgdXNlclRhc2tzPXtwcm9wcy51c2VyRGF0YS51c2VyX3Rhc2tzfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhc2s9e3Byb3BzLnNlbGVjdGVkVGFza31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPFRhc2tQYW5lbCBcbiAgICAgICAgICAgICAgICB1c2VyVGFza3M9e3Byb3BzLnVzZXJEYXRhLnVzZXJfdGFza3N9XG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYXNrPXtwcm9wcy5zZXRTZWxlY3RlZFRhc2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudGltZS1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGltZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtnZXRQYWxsZXRlKCdjb3VudGVyLWJhY2tncm91bmQnKX07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aW1lLXBhbmVsIC50aW1lLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50aW1lLXBhbmVsIC50eXBlLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyRDJEMkQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRpbWUtcGFuZWwgLnNlbGVjdGVkLXRhc2sge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7cHJvcHMuc2VsZWN0ZWRUYXNrID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0VGFza0NvbG9yKHByb3BzLnNlbGVjdGVkVGFzay5jb2xvcikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0cmFuc3BhcmVudCd9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lUGFuZWw7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TimePanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (TimePanel);

/***/ })

})
//# sourceMappingURL=index.js.7cd66a89e8b22bc5b44c.hot-update.js.map