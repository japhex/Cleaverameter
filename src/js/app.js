import * as stickyHeader from './modules/sticky-header';
import * as secureAdmin from './modules/secure-admin';

stickyHeader.stickyHeader();
secureAdmin.onSecureFunction(function () {
    document.write('<img src="/img/secure/secure.jpg" />');
});
