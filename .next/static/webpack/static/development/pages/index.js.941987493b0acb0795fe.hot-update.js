webpackHotUpdate("static/development/pages/index.js",{

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
    var selectedTask = getSelectedTask(newTaskId);
    console.log(selectedTask);
    setTimeout(function () {
      console.log(selectedTask);
    }, 1000);
    props.setSelectedTask(selectedTask);
  };

  return __jsx("section", {
    className: "jsx-1450250488" + " " + "task-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1450250488",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "What are you working on?"), props.userTasks ? props.userTasks.map(function (task, index) {
    return __jsx("span", {
      key: index,
      taskId: task.id,
      onClick: function onClick() {
        switchSelectedTask(task.id);
      },
      style: {
        background: Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getTaskColor"])(task.color)
      },
      className: "jsx-1450250488" + " " + "task",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, task.name);
  }) : __jsx("span", {
    className: "jsx-1450250488",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  }, "No tasks added yet."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1450250488",
    __self: _this
  }, ".task-panel.jsx-1450250488{background-color:white;grid-area:tasks;border-radius:10px;padding:20px;}.task-panel.jsx-1450250488 .task.jsx-1450250488{display:inline-block;padding:5px 10px;border-radius:100px;background:slateblue;font-size:.8rem;margin-right:5px;cursor:pointer;margin-bottom:5px;}.task-panel.jsx-1450250488:hover .task.jsx-1450250488{opacity:.5;}h2.jsx-1450250488{color:#2D2D2D;font-size:1rem;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1Rhc2tQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3dCLEFBRzRDLEFBTUYsQUFXMUIsQUFFbUIsV0FGbEIsR0FHbUIsT0FiRSxFQU5ELE1Bb0JHLFNBYkMsQ0FORCxTQW9CdkIsVUFuQmlCLEFBTVEsYUFMekIsUUFNb0IsZ0JBQ0MsaUJBQ0YsZUFDRyxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvVGFza1BhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFRhc2tDb2xvciB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcblxuY29uc3QgVGFza1BhbmVsID0gcHJvcHMgPT4ge1xuXG4gICAgY29uc3QgZ2V0U2VsZWN0ZWRUYXNrID0gdGFza0lkID0+IHtcbiAgICAgICAgY29uc3QgdXNlclRhc2tzID0gcHJvcHMudXNlclRhc2tzO1xuICAgICAgICBsZXQgc2VsZWN0ZWRUYXNrID0gbnVsbDtcbiAgICAgICAgdXNlclRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5pZCA9PSB0YXNrSWQpIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc2VsZWN0ZWRUYXNrO1xuICAgIH1cbiAgICBjb25zdCBzd2l0Y2hTZWxlY3RlZFRhc2sgPSBuZXdUYXNrSWQgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0ZWRUYXNrID0gZ2V0U2VsZWN0ZWRUYXNrKG5ld1Rhc2tJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVGFzayk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRUYXNrKVxuICAgICAgICB9LCAxMDAwKVxuICAgICAgICBwcm9wcy5zZXRTZWxlY3RlZFRhc2soc2VsZWN0ZWRUYXNrKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGFzay1wYW5lbFwiPlxuICAgICAgICAgICAgPGgyPldoYXQgYXJlIHlvdSB3b3JraW5nIG9uPzwvaDI+XG4gICAgICAgICAgICB7cHJvcHMudXNlclRhc2tzID8gXG4gICAgICAgICAgICAgICAgcHJvcHMudXNlclRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhc2tcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tJZD17dGFzay5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7c3dpdGNoU2VsZWN0ZWRUYXNrKHRhc2suaWQpfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBnZXRUYXNrQ29sb3IodGFzay5jb2xvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFzay5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSkgOiA8c3Bhbj5ObyB0YXNrcyBhZGRlZCB5ZXQuPC9zcGFuPn1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudGFzay1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRhc2tzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFzay1wYW5lbCAudGFzayB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzbGF0ZWJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhc2stcGFuZWw6aG92ZXIgLnRhc2sge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkQyRDJEO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrUGFuZWw7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TaskPanel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskPanel);

/***/ })

})
//# sourceMappingURL=index.js.941987493b0acb0795fe.hot-update.js.map