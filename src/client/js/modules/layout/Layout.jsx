import React from 'react';
import Header from 'modules/layout/components/Header';
import Footer from 'modules/layout/components/Footer';


import {Route, Switch} from 'react-router';

// TODO Should be passed in as children!
import routes from 'modules/_app/routes';

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                {routes}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
