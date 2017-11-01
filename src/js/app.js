import * as stickyHeader from './modules/sticky-header';
import * as secureAdmin from './modules/secure-admin';
import * as tooltips from './utils/tooltips';

stickyHeader.stickyHeader();
tooltips.tooltips();
secureAdmin.onSecureFunction(function () {
    document.write('<img src="/img/secure/secure.jpg" />');
});
