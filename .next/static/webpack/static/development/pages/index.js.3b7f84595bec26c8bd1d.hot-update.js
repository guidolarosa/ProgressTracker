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

/***/ })

})
//# sourceMappingURL=index.js.3b7f84595bec26c8bd1d.hot-update.js.map