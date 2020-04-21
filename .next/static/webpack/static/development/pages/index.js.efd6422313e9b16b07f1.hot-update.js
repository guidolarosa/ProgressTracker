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
        var taskDate = new Date(task.date.year, task.date.month, task.date.day);

        if (taskDate.getTime() == givenDate.getTime()) {
          return false;
        } else {
          return true;
        }
      });
    }
  };

  return __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "details-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "dropdown-title-selector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "Year"), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "months-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, months.map(function (month, monthIndex) {
    return __jsx("section", {
      key: monthIndex,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + ((monthIndex > today.getMonth() ? 'month following-month' : 'month') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "month-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, month), __jsx("section", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-progress-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, turnDaysIntoArray(monthIndex).map(function (day) {
      return __jsx("section", {
        title: formatDate(new Date(today.getFullYear(), monthIndex, day)),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-indicator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 41
        }
      }, isFutureMonth(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-disabled.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 53
        }
      }) : isDayEmpty(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-empty.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 53
        }
      }) : __jsx("img", {
        src: "/img/icon-day-indicator-100.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2266183015", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 53
        }
      }));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2266183015",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)],
    __self: _this
  }, ".details-panel.__jsx-style-dynamic-selector{padding:20px;background:white;grid-area:details;border-radius:10px;position:relative;}.details-panel.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;background:white;height:30px;opacity:1;bottom:10px;left:0;background:linear-gradient(rgba(0,0,0,0),white);z-index:1;}.details-panel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), ";}.months-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto;height:95%;padding-right:15px;margin-top:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar{background:white;border:0;width:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background:lightgray;border-radius:10px;}.month.__jsx-style-dynamic-selector{width:47%;margin-bottom:20px;}.month.__jsx-style-dynamic-selector .month-name.__jsx-style-dynamic-selector{font-weight:500;color:").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), ";padding-bottom:3px;border-bottom:1px solid ").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1), ";margin-bottom:10px;font-size:.8rem;}.month.following-month.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{opacity:.3;}.day-progress-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(7,7fr);grid-template-rows:repeat(5,auto);-webkit-column-gap:3px;column-gap:3px;row-gap:5px;}.day-progress-container.__jsx-style-dynamic-selector .day-indicator.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5R3dCLEFBR2tDLEFBT0YsQUFZd0IsQUFHdEIsQUFTSSxBQUtJLEFBSVgsQUFJTSxBQVFMLEFBR0UsQUFPRixVQXJCUSxDQWpDRCxBQTZDdEIsQUFVQSxFQTlEcUIsQUF1RG9CLEdBWEYsQ0FiMUIsSUFLVSxLQUpULEdBeEJDLEFBaUNmLENBeENzQixLQWtCdEIsQ0FjQSxJQXhCcUIsQUE0QnJCLFFBbkN1QixDQXNEZ0IsRUFYaEIsTUFuQ1AsVUFQTSxFQVFSLENBbUMyQyxJQXhCdkIsS0FWbEIsSUE2Q0csRUFyRG5CLE1BU1csT0FDMEMsdUJBNENyQyxFQVhPLFVBWXZCLFNBWG9CLElBakNOLFVBQ2QsRUFpQ0EsK0JBMUJtQix5REFDQyxnQkFDTCxXQUNRLG1CQUNKLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEJsYWNrLCBnZXRQYWxsZXRlIH0gZnJvbSAnLi8uLi90aGVtZS9jb2xvcnMnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuXG5jb25zdCBEZXRhaWxzUGFuZWwgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyB1c2VyRGF0YSB9ID0gcHJvcHM7XG4gICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgICAnSmFudWFyeScsXG4gICAgICAgICdGZWJydWFyeScsXG4gICAgICAgICdNYXJjaCcsXG4gICAgICAgICdBcHJpbCcsXG4gICAgICAgICdNYXknLFxuICAgICAgICAnSnVuZScsXG4gICAgICAgICdKdWx5JyxcbiAgICAgICAgJ0F1Z3VzdCcsXG4gICAgICAgICdTZXB0ZW1iZXInLFxuICAgICAgICAnT2N0b2JlcicsXG4gICAgICAgICdOb3ZlbWJlcicsXG4gICAgICAgICdEZWNlbWJlcidcbiAgICBdO1xuXG4gICAgY29uc3Qgd2Vla2RheXMgPSBbXG4gICAgICAgICdNb25kYXknLFxuICAgICAgICAnVHVlc2RheScsXG4gICAgICAgICdXZWRuZXNkYXknLFxuICAgICAgICAnVGh1cnNkYXknLFxuICAgICAgICAnRnJpZGF5JyxcbiAgICAgICAgJ1NhdHVyZGF5JyxcbiAgICAgICAgJ1N1bmRheSdcbiAgICBdXG5cbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0dXJuRGF5c0ludG9BcnJheSA9IChtb250aCkgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gW107XG4gICAgICAgIGNvbnN0IHRvdGFsRGF5cyA9IGRheXNJbk1vbnRoKG1vbnRoLCB0b2RheS5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gdG90YWxEYXlzOyBpKyspIHtcbiAgICAgICAgICAgIGRheXMucHVzaChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IChtb250aCwgeWVhcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGgsIDApLmdldERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXREYXRlID0gZGF0ZSA9PiB7XG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IHdlZWtkYXkgPSBkYXRlLmdldERheSgpO1xuICAgICAgICByZXR1cm4gYCR7d2Vla2RheXNbd2Vla2RheV19ICR7ZGF5fSAke21vbnRoc1ttb250aF19ICR7eWVhcn1gO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRnV0dXJlTW9udGggPSAoeWVhciwgbW9udGgsIGRheSkgPT4ge1xuICAgICAgICBsZXQgZ2l2ZW5EYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICAgIGxldCBpc0Z1dHVyZU1vbnRoID0gZ2l2ZW5EYXRlID4gdG9kYXkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHJldHVybiBpc0Z1dHVyZU1vbnRoO1xuICAgIH1cblxuICAgIGNvbnN0IGlzRGF5RW1wdHkgPSAoeWVhciwgbW9udGgsIGRheSkgPT4ge1xuICAgICAgICBsZXQgZ2l2ZW5EYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG4gICAgICAgIGxldCB1c2VyVGFza0hpc3RvcnkgPSB1c2VyRGF0YS51c2VyX2hpc3Rvcnk7XG4gICAgICAgIGlmICh1c2VyVGFza0hpc3RvcnkpIHtcbiAgICAgICAgICAgIHVzZXJUYXNrSGlzdG9yeS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHRhc2suZGF0ZS55ZWFyLCB0YXNrLmRhdGUubW9udGgsIHRhc2suZGF0ZS5kYXkpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrRGF0ZS5nZXRUaW1lKCkgPT0gZ2l2ZW5EYXRlLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbHMtcGFuZWxcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkcm9wZG93bi10aXRsZS1zZWxlY3RvclwiPlllYXI8L2gyPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9udGhzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIHttb250aHMubWFwKChtb250aCwgbW9udGhJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXttb250aEluZGV4ID4gdG9kYXkuZ2V0TW9udGgoKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtb250aCBmb2xsb3dpbmctbW9udGgnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21vbnRoJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21vbnRoSW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtb250aC1uYW1lXCI+e21vbnRofTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGF5LXByb2dyZXNzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHVybkRheXNJbnRvQXJyYXkobW9udGhJbmRleCkubWFwKChkYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtmb3JtYXREYXRlKG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkYXktaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNGdXR1cmVNb250aCh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aEluZGV4LCBkYXkpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItZGlzYWJsZWQucG5nJy8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0RheUVtcHR5KHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItZW1wdHkucG5nJyAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL2ljb24tZGF5LWluZGljYXRvci0xMDAucG5nXCIgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRldGFpbHM7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCB3aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Z2V0QmxhY2soMC44KX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRoIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRoIC5tb250aC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Z2V0QmxhY2soLjUpfTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Z2V0QmxhY2soLjEpfTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRoLmZvbGxvd2luZy1tb250aCBoMyB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDdmcik7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRheS1wcm9ncmVzcy1jb250YWluZXIgLmRheS1pbmRpY2F0b3IgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUGFuZWw7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsPanel);

/***/ })

})
//# sourceMappingURL=index.js.efd6422313e9b16b07f1.hot-update.js.map