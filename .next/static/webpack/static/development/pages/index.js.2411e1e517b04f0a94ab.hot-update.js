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
          console.log('Date has data');
          console.log(givenDate);
          return false;
        } else {
          console.log('Date is empty');
          return true;
        }
      });
    }
  };

  var FutureDay = function FutureDay() {
    return __jsx("img", {
      src: "/img/icon-day-indicator-disabled.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    });
  };

  var DayIndicator = function DayIndicator(props) {
    var completed = props.completed;
    return completed > 75 ? __jsx("img", {
      src: "/img/icon-day-indicator-100.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }
    }) : completed = 0 ? undefined : '';
  };

  return __jsx("section", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "details-panel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "dropdown-title-selector",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Year"), __jsx("section", {
    className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "months-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, months.map(function (month, monthIndex) {
    return __jsx("section", {
      key: monthIndex,
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + ((monthIndex > today.getMonth() ? 'month following-month' : 'month') || ""),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "month-name",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 29
      }
    }, month), __jsx("section", {
      className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-progress-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 29
      }
    }, turnDaysIntoArray(monthIndex).map(function (day) {
      return __jsx("section", {
        title: formatDate(new Date(today.getFullYear(), monthIndex, day)),
        className: "jsx-3025927470 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4104692347", [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)]]]) + " " + "day-indicator",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 41
        }
      }, isFutureMonth(today.getFullYear(), monthIndex, day) ? __jsx(FutureDay, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 53
        }
      }) : !isDayEmpty(today.getFullYear(), monthIndex, day) ? __jsx(DayIndicator, {
        completed: 0,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 57
        }
      }) : __jsx(DayIndicator, {
        completed: 100,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 57
        }
      }));
    })));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4104692347",
    dynamic: [Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1)],
    __self: _this
  }, ".details-panel.__jsx-style-dynamic-selector{padding:20px;background:white;grid-area:details;border-radius:10px;position:relative;}.details-panel.__jsx-style-dynamic-selector::before{content:'';position:absolute;width:100%;background:white;height:30px;opacity:1;bottom:10px;left:0;background:linear-gradient(rgba(0,0,0,0),white);z-index:1;}.details-panel.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{color:".concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(0.8), ";}.months-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:auto;height:95%;padding-right:15px;margin-top:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar{background:white;border:0;width:5px;}.months-container.__jsx-style-dynamic-selector::-webkit-scrollbar-thumb{background:lightgray;border-radius:10px;}.month.__jsx-style-dynamic-selector{width:47%;margin-bottom:20px;}.month.__jsx-style-dynamic-selector .month-name.__jsx-style-dynamic-selector{font-weight:500;color:").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.5), ";padding-bottom:3px;border-bottom:1px solid ").concat(Object(_theme_colors__WEBPACK_IMPORTED_MODULE_2__["getBlack"])(.1), ";margin-bottom:10px;font-size:.8rem;}.month.following-month.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{opacity:.3;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SHdCLEFBR2tDLEFBT0YsQUFZd0IsQUFHdEIsQUFTSSxBQUtJLEFBSVgsQUFJTSxBQVFMLFVBWFEsQ0FqQ0QsQUE2Q3RCLEVBcERxQixHQTRDa0IsQ0FiMUIsSUFLVSxLQUpULEdBeEJDLEFBaUNmLENBeENzQixLQWtCdEIsQ0FjQSxJQXhCcUIsQUE0QnJCLFFBbkN1QixHQTJDQSxNQW5DUCxVQVBNLEVBUVIsQ0FtQzJDLElBeEJ2QixLQVZsQixNQVJoQixNQVNXLE9BQzBDLHlCQWlDOUIsbUJBQ0gsSUFqQ04sVUFDZCxFQWlDQSwrQkExQm1CLHlEQUNDLGdCQUNMLFdBQ1EsbUJBQ0osZUFDbkIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxhY2ssIGdldFBhbGxldGUgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5cbmNvbnN0IERldGFpbHNQYW5lbCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgICdKYW51YXJ5JyxcbiAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgICAgJ01vbmRheScsXG4gICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICdGcmlkYXknLFxuICAgICAgICAnU2F0dXJkYXknLFxuICAgICAgICAnU3VuZGF5J1xuICAgIF1cblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHR1cm5EYXlzSW50b0FycmF5ID0gKG1vbnRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY29uc3QgdG90YWxEYXlzID0gZGF5c0luTW9udGgobW9udGgsIHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbERheXM7IGkrKykge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSBkYXRlID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBgJHt3ZWVrZGF5c1t3ZWVrZGF5XX0gJHtkYXl9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGdXR1cmVNb250aCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IGlzRnV0dXJlTW9udGggPSBnaXZlbkRhdGUgPiB0b2RheSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzRnV0dXJlTW9udGg7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEYXlFbXB0eSA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IHVzZXJUYXNrSGlzdG9yeSA9IHVzZXJEYXRhLnVzZXJfaGlzdG9yeTtcbiAgICAgICAgaWYgKHVzZXJUYXNrSGlzdG9yeSkge1xuICAgICAgICAgICAgdXNlclRhc2tIaXN0b3J5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlLnllYXIsIHRhc2suZGF0ZS5tb250aCwgdGFzay5kYXRlLmRheSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tEYXRlLmdldFRpbWUoKSA9PSBnaXZlbkRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRlIGhhcyBkYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdpdmVuRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0ZSBpcyBlbXB0eScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBGdXR1cmVEYXkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItZGlzYWJsZWQucG5nJy8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBEYXlJbmRpY2F0b3IgPSAocHJvcHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9IHByb3BzLmNvbXBsZXRlZDtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCA+IDc1ID9cbiAgICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2ljb24tZGF5LWluZGljYXRvci0xMDAucG5nJyAvPiA6XG4gICAgICAgICAgICBjb21wbGV0ZWQgPSAwID9cbiAgICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2ljb24tZGF5LWluZGljYXRvci1lbXB0eS5wbmcnIC8+IDpcbiAgICAgICAgICAgICcnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1wYW5lbFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRpdGxlLXNlbGVjdG9yXCI+WWVhcjwvaDI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb250aHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge21vbnRocy5tYXAoKG1vbnRoLCBtb250aEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vbnRoSW5kZXggPiB0b2RheS5nZXRNb250aCgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21vbnRoIGZvbGxvd2luZy1tb250aCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW9udGhJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1vbnRoLW5hbWVcIj57bW9udGh9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkYXktcHJvZ3Jlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0dXJuRGF5c0ludG9BcnJheShtb250aEluZGV4KS5tYXAoKGRheSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Zvcm1hdERhdGUobmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRheS1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0Z1dHVyZU1vbnRoKHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGdXR1cmVEYXkgLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0RheUVtcHR5KHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheUluZGljYXRvciBjb21wbGV0ZWQ9ezB9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheUluZGljYXRvciBjb21wbGV0ZWQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZGV0YWlscztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbDo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWwgaDIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtnZXRCbGFjaygwLjgpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDclO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGggLm1vbnRoLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtnZXRCbGFjayguNSl9O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtnZXRCbGFjayguMSl9O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGguZm9sbG93aW5nLW1vbnRoIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDdmcik7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRheS1wcm9ncmVzcy1jb250YWluZXIgLmRheS1pbmRpY2F0b3IgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYW5lbDsiXX0= */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3025927470",
    __self: _this
  }, ".day-progress-container{display:grid;grid-template-columns:repeat(7,7fr);grid-template-rows:repeat(5,auto);-webkit-column-gap:3px;column-gap:3px;row-gap:5px;}.day-progress-container .day-indicator img{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ndWlkb2xhcm9zYS9Eb2N1bWVudHMvV0VCREVWL1Byb2dyZXNzVHJhY2tlci9jb21wb25lbnRzL0RldGFpbHNQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTCtCLEFBR2tDLEFBT0YsV0FDZixFQVB5QyxvQ0FDRixrQ0FDcEIsc0NBQ0gsWUFDaEIiLCJmaWxlIjoiL1VzZXJzL2d1aWRvbGFyb3NhL0RvY3VtZW50cy9XRUJERVYvUHJvZ3Jlc3NUcmFja2VyL2NvbXBvbmVudHMvRGV0YWlsc1BhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0QmxhY2ssIGdldFBhbGxldGUgfSBmcm9tICcuLy4uL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5cbmNvbnN0IERldGFpbHNQYW5lbCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IHVzZXJEYXRhIH0gPSBwcm9wcztcbiAgICBjb25zdCBtb250aHMgPSBbXG4gICAgICAgICdKYW51YXJ5JyxcbiAgICAgICAgJ0ZlYnJ1YXJ5JyxcbiAgICAgICAgJ01hcmNoJyxcbiAgICAgICAgJ0FwcmlsJyxcbiAgICAgICAgJ01heScsXG4gICAgICAgICdKdW5lJyxcbiAgICAgICAgJ0p1bHknLFxuICAgICAgICAnQXVndXN0JyxcbiAgICAgICAgJ1NlcHRlbWJlcicsXG4gICAgICAgICdPY3RvYmVyJyxcbiAgICAgICAgJ05vdmVtYmVyJyxcbiAgICAgICAgJ0RlY2VtYmVyJ1xuICAgIF07XG5cbiAgICBjb25zdCB3ZWVrZGF5cyA9IFtcbiAgICAgICAgJ01vbmRheScsXG4gICAgICAgICdUdWVzZGF5JyxcbiAgICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAgICdUaHVyc2RheScsXG4gICAgICAgICdGcmlkYXknLFxuICAgICAgICAnU2F0dXJkYXknLFxuICAgICAgICAnU3VuZGF5J1xuICAgIF1cblxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHR1cm5EYXlzSW50b0FycmF5ID0gKG1vbnRoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbXTtcbiAgICAgICAgY29uc3QgdG90YWxEYXlzID0gZGF5c0luTW9udGgobW9udGgsIHRvZGF5LmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0b3RhbERheXM7IGkrKykge1xuICAgICAgICAgICAgZGF5cy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXlzO1xuICAgIH1cblxuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gKG1vbnRoLCB5ZWFyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdERhdGUgPSBkYXRlID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBsZXQgd2Vla2RheSA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgICAgIHJldHVybiBgJHt3ZWVrZGF5c1t3ZWVrZGF5XX0gJHtkYXl9ICR7bW9udGhzW21vbnRoXX0gJHt5ZWFyfWA7XG4gICAgfVxuXG4gICAgY29uc3QgaXNGdXR1cmVNb250aCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IGlzRnV0dXJlTW9udGggPSBnaXZlbkRhdGUgPiB0b2RheSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGlzRnV0dXJlTW9udGg7XG4gICAgfVxuXG4gICAgY29uc3QgaXNEYXlFbXB0eSA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XG4gICAgICAgIGxldCBnaXZlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcbiAgICAgICAgbGV0IHVzZXJUYXNrSGlzdG9yeSA9IHVzZXJEYXRhLnVzZXJfaGlzdG9yeTtcbiAgICAgICAgaWYgKHVzZXJUYXNrSGlzdG9yeSkge1xuICAgICAgICAgICAgdXNlclRhc2tIaXN0b3J5LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlLnllYXIsIHRhc2suZGF0ZS5tb250aCwgdGFzay5kYXRlLmRheSk7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tEYXRlLmdldFRpbWUoKSA9PSBnaXZlbkRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYXRlIGhhcyBkYXRhJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdpdmVuRGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRGF0ZSBpcyBlbXB0eScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBGdXR1cmVEYXkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9pY29uLWRheS1pbmRpY2F0b3ItZGlzYWJsZWQucG5nJy8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBEYXlJbmRpY2F0b3IgPSAocHJvcHMpID0+IHtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9IHByb3BzLmNvbXBsZXRlZDtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZCA+IDc1ID9cbiAgICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2ljb24tZGF5LWluZGljYXRvci0xMDAucG5nJyAvPiA6XG4gICAgICAgICAgICBjb21wbGV0ZWQgPSAwID9cbiAgICAgICAgICAgIDxpbWcgc3JjPScvaW1nL2ljb24tZGF5LWluZGljYXRvci1lbXB0eS5wbmcnIC8+IDpcbiAgICAgICAgICAgICcnXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlscy1wYW5lbFwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRpdGxlLXNlbGVjdG9yXCI+WWVhcjwvaDI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb250aHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAge21vbnRocy5tYXAoKG1vbnRoLCBtb250aEluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e21vbnRoSW5kZXggPiB0b2RheS5nZXRNb250aCgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21vbnRoIGZvbGxvd2luZy1tb250aCcgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbW9udGgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW9udGhJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1vbnRoLW5hbWVcIj57bW9udGh9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJkYXktcHJvZ3Jlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0dXJuRGF5c0ludG9BcnJheShtb250aEluZGV4KS5tYXAoKGRheSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Zvcm1hdERhdGUobmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgbW9udGhJbmRleCwgZGF5KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRheS1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0Z1dHVyZU1vbnRoKHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGdXR1cmVEYXkgLz4gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0RheUVtcHR5KHRvZGF5LmdldEZ1bGxZZWFyKCksIG1vbnRoSW5kZXgsIGRheSkgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheUluZGljYXRvciBjb21wbGV0ZWQ9ezB9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheUluZGljYXRvciBjb21wbGV0ZWQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLXBhbmVsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZGV0YWlscztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGV0YWlscy1wYW5lbDo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMCksIHdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRldGFpbHMtcGFuZWwgaDIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtnZXRCbGFjaygwLjgpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1vbnRocy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGgge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDclO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGggLm1vbnRoLW5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtnZXRCbGFjayguNSl9O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtnZXRCbGFjayguMSl9O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubW9udGguZm9sbG93aW5nLW1vbnRoIGgzIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAuZGF5LXByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDdmcik7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIGF1dG8pO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4tZ2FwOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIHJvdy1nYXA6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRheS1wcm9ncmVzcy1jb250YWluZXIgLmRheS1pbmRpY2F0b3IgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNQYW5lbDsiXX0= */\n/*@ sourceURL=/Users/guidolarosa/Documents/WEBDEV/ProgressTracker/components/DetailsPanel.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DetailsPanel);

/***/ })

})
//# sourceMappingURL=index.js.2411e1e517b04f0a94ab.hot-update.js.map