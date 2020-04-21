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
    className: "jsx-980668576" + " " + "task-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-980668576",
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
      className: "jsx-980668576" + " " + "task",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, task.name);
  }) : __jsx("span", {
    className: "jsx-980668576",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 22
    }
  }, "No tasks added yet."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "980668576",
    __self: _this
  }, ".task-panel.jsx-980668576{background-color:white;grid-area:tasks;border-radius:10px;padding:20px;}.task-panel.jsx-980668576 .task.jsx-980668576{display:inline-block;padding:5px 10px;border-radius:100px;background:slateblue;font-size:.8rem;margin-right:5px;cursor:pointer;margin-bottom:5px;}.task-panel.jsx-980668576:hover .task.jsx-980668576{opacity:.5;}.task.jsx-980668576:hover{opacity:1 !important;}h2.jsx-980668576{color:#2D2D2D;font-size:1rem;margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1Rhc2tQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3dCLEFBRzRDLEFBTUYsQUFVVixBQUdVLEFBR1AsV0FMbEIsR0FNbUIsT0FoQkUsQUFhckIsRUFuQm9CLE1BdUJHLFNBaEJDLENBTkQsU0F1QnZCLFVBdEJpQixBQU1RLGFBTHpCLFFBTW9CLGdCQUNDLGlCQUNGLGVBQ0csa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL1Rhc2tQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRUYXNrQ29sb3IgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5cbmNvbnN0IFRhc2tQYW5lbCA9IHByb3BzID0+IHtcblxuICAgIGNvbnN0IGdldFNlbGVjdGVkVGFzayA9IHRhc2tJZCA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJUYXNrcyA9IHByb3BzLnVzZXJUYXNrcztcbiAgICAgICAgbGV0IHNlbGVjdGVkVGFzayA9IG51bGw7XG4gICAgICAgIHVzZXJUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2suaWQgPT0gdGFza0lkKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUYXNrID0gdGFzaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkVGFzaztcbiAgICB9XG4gICAgY29uc3Qgc3dpdGNoU2VsZWN0ZWRUYXNrID0gbmV3VGFza0lkID0+IHtcbiAgICAgICAgbGV0IHNlbGVjdGVkVGFzayA9IGdldFNlbGVjdGVkVGFzayhuZXdUYXNrSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRhc2spO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVGFzaylcbiAgICAgICAgfSwgMTAwMClcbiAgICAgICAgcHJvcHMuc2V0U2VsZWN0ZWRUYXNrKHNlbGVjdGVkVGFzayk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRhc2stcGFuZWxcIj5cbiAgICAgICAgICAgIDxoMj5XaGF0IGFyZSB5b3Ugd29ya2luZyBvbj88L2gyPlxuICAgICAgICAgICAge3Byb3BzLnVzZXJUYXNrcyA/IFxuICAgICAgICAgICAgICAgIHByb3BzLnVzZXJUYXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YXNrXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrSWQ9e3Rhc2suaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3N3aXRjaFNlbGVjdGVkVGFzayh0YXNrLmlkKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ2V0VGFza0NvbG9yKHRhc2suY29sb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Rhc2submFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pIDogPHNwYW4+Tm8gdGFza3MgYWRkZWQgeWV0Ljwvc3Bhbj59XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnRhc2stcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiB0YXNrcztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRhc2stcGFuZWwgLnRhc2sge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2xhdGVibHVlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YXNrLXBhbmVsOmhvdmVyIC50YXNrIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50YXNrOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMkQyRDJEO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrUGFuZWw7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/TaskPanel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TaskPanel);

/***/ })

})
//# sourceMappingURL=index.js.69346e2eed96fd5410f5.hot-update.js.map