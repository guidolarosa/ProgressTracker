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
    className: "jsx-1588244042" + " " + "task-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1588244042",
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
      className: "jsx-1588244042" + " " + "task",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, task.name);
  }) : __jsx("span", {
    className: "jsx-1588244042",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  }, "No tasks added yet."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1588244042",
    __self: _this
  }, ".task-panel.jsx-1588244042{background-color:white;grid-area:tasks;border-radius:10px;padding:20px;}.task-panel.jsx-1588244042 .task.jsx-1588244042{display:inline-block;padding:5px 10px;border-radius:100px;background:slateblue;font-size:.8rem;margin-right:5px;cursor:pointer;margin-bottom:5px;}.task-panel.jsx-1588244042:hover .task.jsx-1588244042{opacity:.5;-webkit-transition:.1s ease-in-out opacity;transition:.1s ease-in-out opacity;}.task.task.task.jsx-1588244042:hover{opacity:1;}h2.jsx-1588244042{color:#2D2D2D;font-size:1rem;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1Rhc2tQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3dCLEFBRzRDLEFBTUYsQUFVVixBQUlELEFBR0ksVUFGbEIsQ0FKdUMsR0FPcEIsT0FqQkUsRUFORCxNQXdCRyxTQWpCQyxDQU5ELFNBd0J2QixVQXZCaUIsQUFNUSxhQUx6QixRQU1vQixVQVFwQixNQVBxQixpQkFDRixlQUNHLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9UYXNrUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0VGFza0NvbG9yIH0gZnJvbSAnLi8uLi90aGVtZS9jb2xvcnMnO1xuXG5jb25zdCBUYXNrUGFuZWwgPSBwcm9wcyA9PiB7XG5cbiAgICBjb25zdCBnZXRTZWxlY3RlZFRhc2sgPSB0YXNrSWQgPT4ge1xuICAgICAgICBjb25zdCB1c2VyVGFza3MgPSBwcm9wcy51c2VyVGFza3M7XG4gICAgICAgIGxldCBzZWxlY3RlZFRhc2sgPSBudWxsO1xuICAgICAgICB1c2VyVGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmlkID09IHRhc2tJZCkge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFzayA9IHRhc2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzZWxlY3RlZFRhc2s7XG4gICAgfVxuICAgIGNvbnN0IHN3aXRjaFNlbGVjdGVkVGFzayA9IG5ld1Rhc2tJZCA9PiB7XG4gICAgICAgIGxldCBzZWxlY3RlZFRhc2sgPSBnZXRTZWxlY3RlZFRhc2sobmV3VGFza0lkKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRUYXNrKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRhc2spXG4gICAgICAgIH0sIDEwMDApXG4gICAgICAgIHByb3BzLnNldFNlbGVjdGVkVGFzayhzZWxlY3RlZFRhc2spO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0YXNrLXBhbmVsXCI+XG4gICAgICAgICAgICA8aDI+V2hhdCBhcmUgeW91IHdvcmtpbmcgb24/PC9oMj5cbiAgICAgICAgICAgIHtwcm9wcy51c2VyVGFza3MgPyBcbiAgICAgICAgICAgICAgICBwcm9wcy51c2VyVGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFza1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0lkPXt0YXNrLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzd2l0Y2hTZWxlY3RlZFRhc2sodGFzay5pZCl9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdldFRhc2tDb2xvcih0YXNrLmNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YXNrLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSA6IDxzcGFuPk5vIHRhc2tzIGFkZGVkIHlldC48L3NwYW4+fVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC50YXNrLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGFza3M7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YXNrLXBhbmVsIC50YXNrIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNsYXRlYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudGFzay1wYW5lbDpob3ZlciAudGFzayB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC41O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbi1vdXQgb3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhc2sudGFzay50YXNrOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzJEMkQyRDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza1BhbmVsOyJdfQ== */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TaskPanel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskPanel);

/***/ })

})
//# sourceMappingURL=index.js.200296aec98e90a967db.hot-update.js.map