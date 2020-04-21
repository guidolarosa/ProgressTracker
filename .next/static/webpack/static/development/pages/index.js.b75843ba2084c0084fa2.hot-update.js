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

/***/ })

})
//# sourceMappingURL=index.js.b75843ba2084c0084fa2.hot-update.js.map