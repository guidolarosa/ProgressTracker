webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_TimePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/TimePanel */ "./components/TimePanel.js");
/* harmony import */ var _components_DetailsPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/DetailsPanel */ "./components/DetailsPanel.js");
/* harmony import */ var _mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../mock_data/users_list.json */ "./mock_data/users_list.json");
var _mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../mock_data/users_list.json */ "./mock_data/users_list.json", 1);
/* harmony import */ var _mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../mock_data/users_data.json */ "./mock_data/users_data.json");
var _mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../mock_data/users_data.json */ "./mock_data/users_data.json", 1);
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
    setCurrentUserData(_mock_data_users_data_json__WEBPACK_IMPORTED_MODULE_6__[_mock_data_users_list_json__WEBPACK_IMPORTED_MODULE_5__[0].user_ID]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (currentUserData.user_tasks) {
      // console.log(currentUserData.user_tasks[0]);
      setSelectedTask(currentUserData.user_tasks[0]);
    }
  }, [currentUserData]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    userName: currentUserData.name,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx("main", {
    className: "jsx-921837091",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_components_TimePanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    userData: currentUserData,
    selectedTask: selectedTask,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx(_components_DetailsPanel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    userData: currentUserData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1144977184",
    __self: _this
  }, "*{font-family:'Gotham Rounded',sans-serif;color:white;margin:0;padding:0;box-sizing:border-box;font-weight:medium;}body{background-color:#F2523A;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ21DLEFBR2tFLEFBUWhCLHlCQUM3QixlQVJnQixZQUNILFNBQ0MsVUFDWSxzQkFDSCxtQkFDdkIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgVGltZVBhbmVsIGZyb20gJy4vLi4vY29tcG9uZW50cy9UaW1lUGFuZWwnO1xuaW1wb3J0IERldGFpbHNQYW5lbCBmcm9tICcuLy4uL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsJztcbmltcG9ydCB1c2Vyc19saXN0IGZyb20gJy4vLi4vbW9ja19kYXRhL3VzZXJzX2xpc3QuanNvbic7XG5pbXBvcnQgdXNlcnNfZGF0YSBmcm9tICcuLy4uL21vY2tfZGF0YS91c2Vyc19kYXRhLmpzb24nO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFsgY3VycmVudFVzZXJEYXRhLCBzZXRDdXJyZW50VXNlckRhdGEgXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbIHNlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrIF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFVzZXJEYXRhKHVzZXJzX2RhdGFbdXNlcnNfbGlzdFswXS51c2VyX0lEXSlcbiAgICB9LFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyRGF0YS51c2VyX3Rhc2tzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VXNlckRhdGEudXNlcl90YXNrc1swXSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2soY3VycmVudFVzZXJEYXRhLnVzZXJfdGFza3NbMF0pXG4gICAgICAgIH1cbiAgICB9LFtjdXJyZW50VXNlckRhdGFdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgdXNlck5hbWU9e2N1cnJlbnRVc2VyRGF0YS5uYW1lfS8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8VGltZVBhbmVsIFxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YT17Y3VycmVudFVzZXJEYXRhfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhc2s9e3NlbGVjdGVkVGFza31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGV0YWlsc1BhbmVsIHVzZXJEYXRhPXtjdXJyZW50VXNlckRhdGF9Lz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR290aGFtIFJvdW5kZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbWVkaXVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyNTIzQTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzAlIDMwJTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZSBkZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFza3MgZGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgICAgICByb3ctZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3870465194",
    __self: _this
  }, ".jsx-921837091{margin-top:10px;height:80vh;width:100%;display:grid;grid-template-rows:70% 30%;grid-template-columns:50% 50%;grid-template-areas: \"time details\" \"tasks details\";row-gap:10px;-webkit-column-gap:10px;column-gap:10px;}@media screen and (min-width:720px){.jsx-921837091{width:70vw;margin:20px auto 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QzRCLEFBRXFDLEFBYUQsV0FDUSxLQWJYLFlBQ0QsRUFhWCxTQVphLGFBQ2MsMkJBQ0csOEJBR1gsb0RBQ04sYUFDRyx3Q0FNcEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgVGltZVBhbmVsIGZyb20gJy4vLi4vY29tcG9uZW50cy9UaW1lUGFuZWwnO1xuaW1wb3J0IERldGFpbHNQYW5lbCBmcm9tICcuLy4uL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsJztcbmltcG9ydCB1c2Vyc19saXN0IGZyb20gJy4vLi4vbW9ja19kYXRhL3VzZXJzX2xpc3QuanNvbic7XG5pbXBvcnQgdXNlcnNfZGF0YSBmcm9tICcuLy4uL21vY2tfZGF0YS91c2Vyc19kYXRhLmpzb24nO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcblxuICAgIGNvbnN0IFsgY3VycmVudFVzZXJEYXRhLCBzZXRDdXJyZW50VXNlckRhdGEgXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbIHNlbGVjdGVkVGFzaywgc2V0U2VsZWN0ZWRUYXNrIF0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudFVzZXJEYXRhKHVzZXJzX2RhdGFbdXNlcnNfbGlzdFswXS51c2VyX0lEXSlcbiAgICB9LFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VyRGF0YS51c2VyX3Rhc2tzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VXNlckRhdGEudXNlcl90YXNrc1swXSk7XG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhc2soY3VycmVudFVzZXJEYXRhLnVzZXJfdGFza3NbMF0pXG4gICAgICAgIH1cbiAgICB9LFtjdXJyZW50VXNlckRhdGFdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgdXNlck5hbWU9e2N1cnJlbnRVc2VyRGF0YS5uYW1lfS8+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8VGltZVBhbmVsIFxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YT17Y3VycmVudFVzZXJEYXRhfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhc2s9e3NlbGVjdGVkVGFza31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8RGV0YWlsc1BhbmVsIHVzZXJEYXRhPXtjdXJyZW50VXNlckRhdGF9Lz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR290aGFtIFJvdW5kZWQnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbWVkaXVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyNTIzQTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzAlIDMwJTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZSBkZXRhaWxzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFza3MgZGV0YWlsc1wiO1xuICAgICAgICAgICAgICAgICAgICByb3ctZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.92bf97ef00a8c07f40bd.hot-update.js.map