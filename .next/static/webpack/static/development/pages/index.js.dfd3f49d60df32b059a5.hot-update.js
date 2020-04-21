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
  var currentUserData = props.currentUserData;
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
    var userTaskHistory = currentUserData.user_history;
    userTaskHistory.forEach(function (date) {
      console.log(date);
    });
  };

  return __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "details-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "dropdown-title-selector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Months"), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "months-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, months.map(function (month, monthIndex) {
    return __jsx("section", {
      key: monthIndex,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + ((monthIndex > today.getMonth() ? 'month following-month' : 'month') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "month-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    }, month), __jsx("section", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-progress-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, turnDaysIntoArray(monthIndex).map(function (day) {
      return __jsx("section", {
        title: formatDate(new Date(today.getFullYear(), monthIndex, day)),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-indicator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 41
        }
      }, isFutureMonth(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-disabled.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 53
        }
      }) : isDayEmpty(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-empty.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 53
        }
      }) : '');
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3279823287",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)],
    __self: _this
  }, ".details-panel.__jsx-style-dynamic-selector{padding:20px;background:white;grid-area:details;border-radius:10px;position:relative;}.details-panel.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;background:white;height:30px;opacity:1;bottom:10px;left:0;background:linear-gradient(rgba(0,0,0,0),white);z-index:1;}.details-panel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), ";}.months-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto;height:95%;padding-right:15px;margin-top:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar{background:white;border:0;width:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background:lightgray;border-radius:10px;}.month.__jsx-style-dynamic-selector{width:47%;margin-bottom:20px;}.month.__jsx-style-dynamic-selector .month-name.__jsx-style-dynamic-selector{font-weight:500;color:").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), ";padding-bottom:3px;border-bottom:1px solid ").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1), ";margin-bottom:10px;}.month.following-month.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{opacity:.3;}.day-progress-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(7,7fr);grid-template-rows:repeat(5,auto);-webkit-column-gap:3px;column-gap:3px;row-gap:5px;}.day-progress-container.__jsx-style-dynamic-selector .day-indicator.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR3dCLEFBR2tDLEFBT0YsQUFZd0IsQUFHdEIsQUFTSSxBQUtJLEFBSVgsQUFJTSxBQU9MLEFBR0UsQUFPRixVQXBCUSxDQWpDRCxBQTRDdEIsQUFVQSxFQTdEcUIsQUFzRG9CLEdBVkYsQ0FiMUIsSUFLVSxLQUpULEdBeEJDLEFBaUNmLENBeENzQixLQWtCdEIsQ0FjQSxJQXhCcUIsQUE0QnJCLFFBbkN1QixDQXFEZ0IsRUFWaEIsTUFuQ1AsVUFQTSxFQVFSLENBbUMyQyxJQXhCdkIsS0FWbEIsSUE0Q0csRUFwRG5CLE1BU1csT0FDMEMsdUJBMkNyQyxFQVZPLFVBV3ZCLFNBVkEsSUFqQ2MsVUFDZCxpQ0FPbUIseURBQ0MsZ0JBQ0wsV0FDUSxtQkFDSixlQUNuQiIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9EZXRhaWxzUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCbGFjaywgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcblxuY29uc3QgRGV0YWlsc1BhbmVsID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudFVzZXJEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgICdKYW51YXJ5JyxcbiAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgICAgJ01vbmRheScsXG4gICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICdGcmlkYXknLFxuICAgICAgICAnU2F0dXJkYXknLFxuICAgICAgICAnU3VuZGF5J1xuICAgIF1cblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHR1cm5EYXlzSW50b0FycmF5ID0gKG1vbnRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY29uc3QgdG90YWxEYXlzID0gZGF5c0luTW9udGgobW9udGgsIHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbERheXM7IGkrKykge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSBkYXRlID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBgJHt3ZWVrZGF5c1t3ZWVrZGF5XX0gJHtkYXl9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGdXR1cmVNb250aCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IGlzRnV0dXJlTW9udGggPSBnaXZlbkRhdGUgPiB0b2RheSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzRnV0dXJlTW9udGg7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEYXlFbXB0eSA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IHVzZXJUYXNrSGlzdG9yeSA9IGN1cnJlbnRVc2VyRGF0YS51c2VyX2hpc3Rvcnk7XG4gICAgICAgIHVzZXJUYXNrSGlzdG9yeS5mb3JFYWNoKGRhdGUgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1wYW5lbFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRpdGxlLXNlbGVjdG9yXCI+TW9udGhzPC9oMj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1vbnRocy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICB7bW9udGhzLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bW9udGhJbmRleCA+IHRvZGF5LmdldE1vbnRoKCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGggZm9sbG93aW5nLW1vbnRoJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtb250aCd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttb250aEluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibW9udGgtbmFtZVwiPnttb250aH08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRheS1wcm9ncmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R1cm5EYXlzSW50b0FycmF5KG1vbnRoSW5kZXgpLm1hcCgoZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17Zm9ybWF0RGF0ZShuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aEluZGV4LCBkYXkpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF5LWluZGljYXRvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRnV0dXJlTW9udGgodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWRpc2FibGVkLnBuZycvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXlFbXB0eSh0b2RheS5nZXRGdWxsWWVhcigpLCBtb250aEluZGV4LCBkYXkpID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWcvaWNvbi1kYXktaW5kaWNhdG9yLWVtcHR5LnBuZycgLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBkZXRhaWxzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwKSwgd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbCBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKDAuOCl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGhzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NyU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aCAubW9udGgtbmFtZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2dldEJsYWNrKC41KX07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2dldEJsYWNrKC4xKX07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aC5mb2xsb3dpbmctbW9udGggaDN7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC4zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDdmcik7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRheS1wcm9ncmVzcy1jb250YWluZXIgLmRheS1pbmRpY2F0b3IgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxzUGFuZWw7Il19 */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsPanel);

/***/ })

})
//# sourceMappingURL=index.js.dfd3f49d60df32b059a5.hot-update.js.map