(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stickyHeader = require('./modules/sticky-header');

var stickyHeader = _interopRequireWildcard(_stickyHeader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

stickyHeader.stickyHeader();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdGlja3lIZWFkZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsQUFBTzs7SUFBSyxBQUFaLEFBQThCLEFBQTlCOzs7O0FBRUEsYUFBYSxBQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0aWNreUhlYWRlciBmcm9tICcuL21vZHVsZXMvc3RpY2t5LWhlYWRlcic7XG5cbnN0aWNreUhlYWRlci5zdGlja3lIZWFkZXIoKTtcbiJdfQ==
},{"./modules/sticky-header":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var selectors = {
    $main: $('main'),
    $stickyHeader: $('.sticky-header')
};

var stickyHeader = function stickyHeader() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 89) {
            selectors.$stickyHeader.addClass('stuck');
            selectors.$main.addClass('header-stuck');
        } else {
            selectors.$stickyHeader.removeClass('stuck');
            selectors.$main.removeClass('header-stuck');
        }
    });
};

exports.stickyHeader = stickyHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0aWNreS1oZWFkZXIuanMiXSwibmFtZXMiOlsic2VsZWN0b3JzIiwiJG1haW4iLCIkIiwiJHN0aWNreUhlYWRlciIsInN0aWNreUhlYWRlciIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSTtXQUNPLEVBREssQUFDTCxBQUFFLEFBQ1Q7bUJBQWUsRUFGbkIsQUFBZ0IsQUFFRyxBQUFFO0FBRkwsQUFDWjs7QUFJSixJQUFJLGVBQWUsU0FBZixBQUFlLGVBQU0sQUFDckI7TUFBQSxBQUFFLFFBQUYsQUFBVSxPQUFPLFlBQU0sQUFDbkI7WUFBSSxFQUFBLEFBQUUsUUFBRixBQUFVLGVBQWQsQUFBNkIsSUFBRyxBQUM1QjtzQkFBQSxBQUFVLGNBQVYsQUFBd0IsU0FBeEIsQUFBaUMsQUFDakM7c0JBQUEsQUFBVSxNQUFWLEFBQWdCLFNBQWhCLEFBQXlCLEFBQzVCO0FBSEQsZUFHTyxBQUNIO3NCQUFBLEFBQVUsY0FBVixBQUF3QixZQUF4QixBQUFvQyxBQUNwQztzQkFBQSxBQUFVLE1BQVYsQUFBZ0IsWUFBaEIsQUFBNEIsQUFDL0I7QUFDSjtBQVJELEFBU0g7QUFWRCxBQVlBOztRQUFBLEFBQVMiLCJmaWxlIjoic3RpY2t5LWhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzZWxlY3RvcnMgPSB7XG4gICAgJG1haW46ICQoJ21haW4nKSxcbiAgICAkc3RpY2t5SGVhZGVyOiAkKCcuc3RpY2t5LWhlYWRlcicpXG59O1xuXG52YXIgc3RpY2t5SGVhZGVyID0gKCkgPT4ge1xuICAgICQod2luZG93KS5zY3JvbGwoKCkgPT4ge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49IDg5KXtcbiAgICAgICAgICAgIHNlbGVjdG9ycy4kc3RpY2t5SGVhZGVyLmFkZENsYXNzKCdzdHVjaycpO1xuICAgICAgICAgICAgc2VsZWN0b3JzLiRtYWluLmFkZENsYXNzKCdoZWFkZXItc3R1Y2snKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9ycy4kc3RpY2t5SGVhZGVyLnJlbW92ZUNsYXNzKCdzdHVjaycpO1xuICAgICAgICAgICAgc2VsZWN0b3JzLiRtYWluLnJlbW92ZUNsYXNzKCdoZWFkZXItc3R1Y2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgeyBzdGlja3lIZWFkZXIgfVxuIl19
},{}]},{},[1])