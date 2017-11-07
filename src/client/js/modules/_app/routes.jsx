import React from 'react';
import {Route, IndexRoute, Switch} from 'react-router';

import ClientListPage from 'modules/client/pages/ClientListPage';
import ClientParametersPage from 'modules/client/pages/ClientParametersPage';

export default (
    <div>
        <Route exact path="/" component={ClientListPage} />
        <Route exact path="/clients/:clientId" component={ClientParametersPage} />
    </div>
);
