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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "details-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "dropdown-title-selector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, "Months"), __jsx("section", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "months-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, months.map(function (month, monthIndex) {
    return __jsx("section", {
      key: monthIndex,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + ((monthIndex > today.getMonth() ? 'month following-month' : 'month') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "month-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }, month), __jsx("section", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-progress-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, turnDaysIntoArray(monthIndex).map(function (day) {
      return __jsx("section", {
        title: formatDate(new Date(today.getFullYear(), monthIndex, day)),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-indicator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 41
        }
      }, isFutureMonth(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-disabled.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 53
        }
      }) : !isDayEmpty(today.getFullYear(), monthIndex, day) ? __jsx("img", {
        src: "/img/icon-day-indicator-empty.png",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3279823287", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 53
        }
      }) : '');
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3279823287",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)],
    __self: _this
  }, ".details-panel.__jsx-style-dynamic-selector{padding:20px;background:white;grid-area:details;border-radius:10px;position:relative;}.details-panel.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;background:white;height:30px;opacity:1;bottom:10px;left:0;background:linear-gradient(rgba(0,0,0,0),white);z-index:1;}.details-panel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), ";}.months-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto;height:95%;padding-right:15px;margin-top:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar{background:white;border:0;width:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background:lightgray;border-radius:10px;}.month.__jsx-style-dynamic-selector{width:47%;margin-bottom:20px;}.month.__jsx-style-dynamic-selector .month-name.__jsx-style-dynamic-selector{font-weight:500;color:").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), ";padding-bottom:3px;border-bottom:1px solid ").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1), ";margin-bottom:10px;}.month.following-month.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{opacity:.3;}.day-progress-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(7,7fr);grid-template-rows:repeat(5,auto);-webkit-column-gap:3px;column-gap:3px;row-gap:5px;}.day-progress-container.__jsx-style-dynamic-selector .day-indicator.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR3dCLEFBR2tDLEFBT0YsQUFZd0IsQUFHdEIsQUFTSSxBQUtJLEFBSVgsQUFJTSxBQU9MLEFBR0UsQUFPRixVQXBCUSxDQWpDRCxBQTRDdEIsQUFVQSxFQTdEcUIsQUFzRG9CLEdBVkYsQ0FiMUIsSUFLVSxLQUpULEdBeEJDLEFBaUNmLENBeENzQixLQWtCdEIsQ0FjQSxJQXhCcUIsQUE0QnJCLFFBbkN1QixDQXFEZ0IsRUFWaEIsTUFuQ1AsVUFQTSxFQVFSLENBbUMyQyxJQXhCdkIsS0FWbEIsSUE0Q0csRUFwRG5CLE1BU1csT0FDMEMsdUJBMkNyQyxFQVZPLFVBV3ZCLFNBVkEsSUFqQ2MsVUFDZCxpQ0FPbUIseURBQ0MsZ0JBQ0wsV0FDUSxtQkFDSixlQUNuQiIsImZpbGUiOiIvVXNlcnMvZ3VpZG9sYXJvc2EvRG9jdW1lbnRzL1dFQkRFVi9Qcm9ncmVzc1RyYWNrZXIvY29tcG9uZW50cy9EZXRhaWxzUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRCbGFjaywgZ2V0UGFsbGV0ZSB9IGZyb20gJy4vLi4vdGhlbWUvY29sb3JzJztcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcblxuY29uc3QgRGV0YWlsc1BhbmVsID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgdXNlckRhdGEgfSA9IHByb3BzO1xuICAgIGNvbnN0IG1vbnRocyA9IFtcbiAgICAgICAgJ0phbnVhcnknLFxuICAgICAgICAnRmVicnVhcnknLFxuICAgICAgICAnTWFyY2gnLFxuICAgICAgICAnQXByaWwnLFxuICAgICAgICAnTWF5JyxcbiAgICAgICAgJ0p1bmUnLFxuICAgICAgICAnSnVseScsXG4gICAgICAgICdBdWd1c3QnLFxuICAgICAgICAnU2VwdGVtYmVyJyxcbiAgICAgICAgJ09jdG9iZXInLFxuICAgICAgICAnTm92ZW1iZXInLFxuICAgICAgICAnRGVjZW1iZXInXG4gICAgXTtcblxuICAgIGNvbnN0IHdlZWtkYXlzID0gW1xuICAgICAgICAnTW9uZGF5JyxcbiAgICAgICAgJ1R1ZXNkYXknLFxuICAgICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICAgJ1RodXJzZGF5JyxcbiAgICAgICAgJ0ZyaWRheScsXG4gICAgICAgICdTYXR1cmRheScsXG4gICAgICAgICdTdW5kYXknXG4gICAgXVxuXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgdHVybkRheXNJbnRvQXJyYXkgPSAobW9udGgpID0+IHtcbiAgICAgICAgY29uc3QgZGF5cyA9IFtdO1xuICAgICAgICBjb25zdCB0b3RhbERheXMgPSBkYXlzSW5Nb250aChtb250aCwgdG9kYXkuZ2V0RnVsbFllYXIoKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRvdGFsRGF5czsgaSsrKSB7XG4gICAgICAgICAgICBkYXlzLnB1c2goaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgfVxuXG4gICAgY29uc3QgZGF5c0luTW9udGggPSAobW9udGgsIHllYXIpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZm9ybWF0RGF0ZSA9IGRhdGUgPT4ge1xuICAgICAgICBsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCB3ZWVrZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgICAgcmV0dXJuIGAke3dlZWtkYXlzW3dlZWtkYXldfSAke2RheX0gJHttb250aHNbbW9udGhdfSAke3llYXJ9YDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0Z1dHVyZU1vbnRoID0gKHllYXIsIG1vbnRoLCBkYXkpID0+IHtcbiAgICAgICAgbGV0IGdpdmVuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgICBsZXQgaXNGdXR1cmVNb250aCA9IGdpdmVuRGF0ZSA+IHRvZGF5ID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICByZXR1cm4gaXNGdXR1cmVNb250aDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0RheUVtcHR5ID0gKHllYXIsIG1vbnRoLCBkYXkpID0+IHtcbiAgICAgICAgbGV0IGdpdmVuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuICAgICAgICBsZXQgdXNlclRhc2tIaXN0b3J5ID0gdXNlckRhdGEudXNlcl9oaXN0b3J5O1xuICAgICAgICBpZiAodXNlclRhc2tIaXN0b3J5KSB7XG4gICAgICAgICAgICB1c2VyVGFza0hpc3RvcnkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrLmRhdGUpXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnR2l2ZW4gZGF0ZTogJyArIGdpdmVuRGF0ZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rhc2sgZGF0ZTogJyArIHRhc2tEYXRlKTtcbiAgICAgICAgICAgICAgICBpZiAodGFza0RhdGUuZ2V0VGltZSgpID09IGdpdmVuRGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImRldGFpbHMtcGFuZWxcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJkcm9wZG93bi10aXRsZS1zZWxlY3RvclwiPk1vbnRoczwvaDI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb250aHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge21vbnRocy5tYXAoKG1vbnRoLCBtb250aEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vbnRoSW5kZXggPiB0b2RheS5nZXRNb250aCgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21vbnRoIGZvbGxvd2luZy1tb250aCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW9udGhJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1vbnRoLW5hbWVcIj57bW9udGh9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkYXktcHJvZ3Jlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0dXJuRGF5c0ludG9BcnJheShtb250aEluZGV4KS5tYXAoKGRheSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Zvcm1hdERhdGUobmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRheS1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0Z1dHVyZU1vbnRoKHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2ljb24tZGF5LWluZGljYXRvci1kaXNhYmxlZC5wbmcnLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0RheUVtcHR5KHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItZW1wdHkucG5nJyAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGRldGFpbHM7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDApLCB3aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Z2V0QmxhY2soMC44KX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5tb250aHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRoIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRoIC5tb250aC1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Z2V0QmxhY2soLjUpfTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Z2V0QmxhY2soLjEpfTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRoLmZvbGxvd2luZy1tb250aCBoM3tcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kYXktcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgN2ZyKTtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgcm93LWdhcDogNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciAuZGF5LWluZGljYXRvciBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYW5lbDsiXX0= */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsPanel);

/***/ })

})
//# sourceMappingURL=index.js.9ca6cddf7b09cd42f144.hot-update.js.map