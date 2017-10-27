'use strict';

var _stickyHeader = require('/modules/sticky-header');

var stickyHeader = _interopRequireWildcard(_stickyHeader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

stickyHeader.stickyHeader();