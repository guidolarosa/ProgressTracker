webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/DetailsPanel.js":
/*!************************************!*\
  !*** ./components/DetailsPanel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../theme/colors */ "./theme/colors.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var DetailsPanel = function DetailsPanel(props) {
  var userData = props.userData;
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  var today = new Date();

  var turnDaysIntoArray = function turnDaysIntoArray(month) {
    var days = [];
    var totalDays = daysInMonth(month, today.getFullYear());

    for (var i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    return days;
  };

  var daysInMonth = function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  };

  var formatDate = function formatDate(date) {
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var weekday = date.getDay();
    return "".concat(weekdays[weekday], " ").concat(day, " ").concat(months[month], " ").concat(year);
  };

  var isFutureMonth = function isFutureMonth(year, month, day) {
    var givenDate = new Date(year, month, day);
    var isFutureMonth = givenDate > today ? true : false;
    return isFutureMonth;
  };

  var isDayEmpty = function isDayEmpty(year, month, day) {
    var givenDate = new Date(year, month, day);
    var userTaskHistory = userData.user_history;

    if (userTaskHistory) {
      userTaskHistory.forEach(function (task) {
        // console.log(task.date)
        var taskDate = new Date(task.date); // console.log('Given date: ' + givenDate);

        console.log('Task date: ' + taskDate);

        if (taskDate.getTime() == givenDate.getTime()) {
          console.log(givenDate.getTime());
        }
      });
    }
  };

  return __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "details-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "dropdown-title-selector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Months"), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "months-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, months.map(function (month, monthIndex) {
    return __jsx("section", {
      key: monthIndex,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + ((monthIndex > today.getMonth() ? 'month following-month' : 'month') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "month-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, month), __jsx("section", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-progress-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, turnDaysIntoArray(monthIndex).map(function (day) {
      return __jsx("section", {
        title: formatDate(new Date(today.getFullYear(), monthIndex, day)),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-indicator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 41
        }
      }, isFutureMonth(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-disabled.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 53
        }
      }) : !isDayEmpty(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-empty.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1203662528", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 53
        }
      }) : '');
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1203662528",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)],
    __self: _this
  }, ".details-panel.__jsx-style-dynamic-selector{padding:20px;background:white;grid-area:details;border-radius:10px;position:relative;}.details-panel.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;background:white;height:30px;opacity:1;bottom:10px;left:0;background:linear-gradient(rgba(0,0,0,0),white);z-index:1;}.details-panel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), ";}.months-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto;height:95%;padding-right:15px;margin-top:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar{background:white;border:0;width:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background:lightgray;border-radius:10px;}.month.__jsx-style-dynamic-selector{width:47%;margin-bottom:20px;}.month.__jsx-style-dynamic-selector .month-name.__jsx-style-dynamic-selector{font-weight:500;color:").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), ";padding-bottom:3px;border-bottom:1px solid ").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1), ";margin-bottom:10px;font-size:.7rem;}.month.following-month.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{opacity:.3;}.day-progress-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(7,7fr);grid-template-rows:repeat(5,auto);-webkit-column-gap:3px;column-gap:3px;row-gap:5px;}.day-progress-container.__jsx-style-dynamic-selector .day-indicator.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR3dCLEFBR2tDLEFBT0YsQUFZd0IsQUFHdEIsQUFTSSxBQUtJLEFBSVgsQUFJTSxBQVFMLEFBR0UsQUFPRixVQXJCUSxDQWpDRCxBQTZDdEIsQUFVQSxFQTlEcUIsQUF1RG9CLEdBWEYsQ0FiMUIsSUFLVSxLQUpULEdBeEJDLEFBaUNmLENBeENzQixLQWtCdEIsQ0FjQSxJQXhCcUIsQUE0QnJCLFFBbkN1QixDQXNEZ0IsRUFYaEIsTUFuQ1AsVUFQTSxFQVFSLENBbUMyQyxJQXhCdkIsS0FWbEIsSUE2Q0csRUFyRG5CLE1BU1csT0FDMEMsdUJBNENyQyxFQVhPLFVBWXZCLFNBWG9CLElBakNOLFVBQ2QsRUFpQ0EsK0JBMUJtQix5REFDQyxnQkFDTCxXQUNRLG1CQUNKLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEJsYWNrLCBnZXRQYWxsZXRlIH0gZnJvbSAnLi8uLi90aGVtZS9jb2xvcnMnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuXG5jb25zdCBEZXRhaWxzUGFuZWwgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyB1c2VyRGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgICAnSmFudWFyeScsXG4gICAgICAgICdGZWJydWFyeScsXG4gICAgICAgICdNYXJjaCcsXG4gICAgICAgICdBcHJpbCcsXG4gICAgICAgICdNYXknLFxuICAgICAgICAnSnVuZScsXG4gICAgICAgICdKdWx5JyxcbiAgICAgICAgJ0F1Z3VzdCcsXG4gICAgICAgICdTZXB0ZW1iZXInLFxuICAgICAgICAnT2N0b2JlcicsXG4gICAgICAgICdOb3ZlbWJlcicsXG4gICAgICAgICdEZWNlbWJlcidcbiAgICBdO1xuXG4gICAgY29uc3Qgd2Vla2RheXMgPSBbXG4gICAgICAgICdNb25kYXknLFxuICAgICAgICAnVHVlc2RheScsXG4gICAgICAgICdXZWRuZXNkYXknLFxuICAgICAgICAnVGh1cnNkYXknLFxuICAgICAgICAnRnJpZGF5JyxcbiAgICAgICAgJ1NhdHVyZGF5JyxcbiAgICAgICAgJ1N1bmRheSdcbiAgICBdXG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0dXJuRGF5c0ludG9BcnJheSA9IChtb250aCkgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgIGNvbnN0IHRvdGFsRGF5cyA9IGRheXNJbk1vbnRoKG1vbnRoLCB0b2RheS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdG90YWxEYXlzOyBpKyspIHtcbiAgICAgICAgICAgIGRheXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IChtb250aCwgeWVhcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgICByZXR1cm4gYCR7d2Vla2RheXNbd2Vla2RheV19ICR7ZGF5fSAke21vbnRoc1ttb250aF19ICR7eWVhcn1gO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRnV0dXJlTW9udGggPSAoeWVhciwgbW9udGgsIGRheSkgPT4ge1xuICAgICAgICBsZXQgZ2l2ZW5EYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICAgIGxldCBpc0Z1dHVyZU1vbnRoID0gZ2l2ZW5EYXRlID4gdG9kYXkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHJldHVybiBpc0Z1dHVyZU1vbnRoO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRGF5RW1wdHkgPSAoeWVhciwgbW9udGgsIGRheSkgPT4ge1xuICAgICAgICBsZXQgZ2l2ZW5EYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICAgIGxldCB1c2VyVGFza0hpc3RvcnkgPSB1c2VyRGF0YS51c2VyX2hpc3Rvcnk7XG4gICAgICAgIGlmICh1c2VyVGFza0hpc3RvcnkpIHtcbiAgICAgICAgICAgIHVzZXJUYXNrSGlzdG9yeS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2suZGF0ZSlcbiAgICAgICAgICAgICAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrLmRhdGUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdHaXZlbiBkYXRlOiAnICsgZ2l2ZW5EYXRlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGFzayBkYXRlOiAnICsgdGFza0RhdGUpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0ZS5nZXRUaW1lKCkgPT0gZ2l2ZW5EYXRlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnaXZlbkRhdGUuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1wYW5lbFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRpdGxlLXNlbGVjdG9yXCI+TW9udGhzPC9oMj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vbnRocy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9udGhJbmRleCA+IHRvZGF5LmdldE1vbnRoKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGggZm9sbG93aW5nLW1vbnRoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtb250aCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttb250aEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibW9udGgtbmFtZVwiPnttb250aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRheS1wcm9ncmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R1cm5EYXlzSW50b0FycmF5KG1vbnRoSW5kZXgpLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Zm9ybWF0RGF0ZShuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aEluZGV4LCBkYXkpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5LWluZGljYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRnV0dXJlTW9udGgodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWRpc2FibGVkLnBuZycvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzRGF5RW1wdHkodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2ljb24tZGF5LWluZGljYXRvci1lbXB0eS5wbmcnIC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZGV0YWlscztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbDo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWwgaDIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtnZXRCbGFjaygwLjgpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDclO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGggLm1vbnRoLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtnZXRCbGFjayguNSl9O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtnZXRCbGFjayguMSl9O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGguZm9sbG93aW5nLW1vbnRoIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kYXktcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgN2ZyKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcm93LWdhcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciAuZGF5LWluZGljYXRvciBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYW5lbDsiXX0= */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsPanel);

/***/ })

})
//# sourceMappingURL=index.js.1a848814a556109a7f4c.hot-update.js.map