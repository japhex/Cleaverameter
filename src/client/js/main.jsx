import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from 'modules/_app/App';

const history = createHistory();

ReactDOM.render(
    <App history={history} />,
    document.getElementById('root')
);
