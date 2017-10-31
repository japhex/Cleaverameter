(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stickyHeader = require('./modules/sticky-header');

var stickyHeader = _interopRequireWildcard(_stickyHeader);

var _secureAdmin = require('./modules/secure-admin');

var secureAdmin = _interopRequireWildcard(_secureAdmin);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

stickyHeader.stickyHeader();
secureAdmin.onSecureFunction(function () {
    document.write('<img src="/img/secure.jpg" />');
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdGlja3lIZWFkZXIiLCJzZWN1cmVBZG1pbiIsIm9uU2VjdXJlRnVuY3Rpb24iLCJkb2N1bWVudCIsIndyaXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBLEFBQU87O0lBQUssQUFBWixBQUE4QixBQUE5Qjs7QUFDQSxBQUFPOztJQUFLLEFBQVosQUFBNkIsQUFBN0I7Ozs7QUFFQSxhQUFhLEFBQWI7QUFDQSxZQUFZLEFBQVosaUJBQTZCLFlBQVksQUFDckM7YUFBUyxBQUFULE1BQWUsQUFBZixBQUNIO0FBRkQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3RpY2t5SGVhZGVyIGZyb20gJy4vbW9kdWxlcy9zdGlja3ktaGVhZGVyJztcbmltcG9ydCAqIGFzIHNlY3VyZUFkbWluIGZyb20gJy4vbW9kdWxlcy9zZWN1cmUtYWRtaW4nO1xuXG5zdGlja3lIZWFkZXIuc3RpY2t5SGVhZGVyKCk7XG5zZWN1cmVBZG1pbi5vblNlY3VyZUZ1bmN0aW9uKGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC53cml0ZSgnPGltZyBzcmM9XCIvaW1nL3NlY3VyZS5qcGdcIiAvPicpO1xufSk7XG4iXX0=
},{"./modules/secure-admin":2,"./modules/sticky-header":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var onSecureFunction = function onSecureFunction(cb) {
    var input = '';
    var key = '38384040373937396665';

    document.addEventListener('keydown', function (e) {
        input += "" + e.keyCode;

        if (input === key) {
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = "" + e.keyCode;
    });
};

exports.onSecureFunction = onSecureFunction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyZS1hZG1pbi5qcyJdLCJuYW1lcyI6WyJvblNlY3VyZUZ1bmN0aW9uIiwiY2IiLCJpbnB1dCIsImtleSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLG1CQUFtQixTQUFuQixBQUFtQixpQkFBQyxBQUFELElBQVEsQUFDM0I7UUFBSSxRQUFRLEFBQVosQUFDQTtRQUFJLE1BQU0sQUFBVixBQUVBOzthQUFTLEFBQVQsaUJBQTBCLEFBQTFCLFdBQXFDLFVBQVUsQUFBVixHQUFhLEFBQ2xEO2lCQUFVLEtBQUssRUFBRSxBQUFqQixBQUVBOztZQUFJLFVBQVUsQUFBZCxLQUFtQixBQUNqQjttQkFBTyxBQUFQLEFBQ0Q7QUFDRDtZQUFJLENBQUMsSUFBSSxBQUFKLFFBQVksQUFBWixBQUFMLFFBQXlCLEFBQ3JCO2dCQUFTLEtBQUssRUFBRSxBQUFoQixBQUNIO0FBUkQsQUFTSDtBQWJELEFBZUE7O1FBQVMsQUFBVCIsImZpbGUiOiJzZWN1cmUtYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb25TZWN1cmVGdW5jdGlvbiA9IChjYikgPT4ge1xuICAgIHZhciBpbnB1dCA9ICcnO1xuICAgIHZhciBrZXkgPSAnMzgzODQwNDAzNzM5MzczOTY2NjUnO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaW5wdXQgKz0gKFwiXCIgKyBlLmtleUNvZGUpO1xuXG4gICAgaWYgKGlucHV0ID09PSBrZXkpIHtcbiAgICAgIHJldHVybiBjYigpO1xuICAgIH1cbiAgICBpZiAoIWtleS5pbmRleE9mKGlucHV0KSkgcmV0dXJuO1xuICAgICAgICBpbnB1dCA9IChcIlwiICsgZS5rZXlDb2RlKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgb25TZWN1cmVGdW5jdGlvbiB9XG4iXX0=
},{}],3:[function(require,module,exports){
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