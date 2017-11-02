import React, {Component} from 'react';
import Layout from 'modules/layout/Layout';

/**
 * App is the application entry point. Use it to bootstrap router,
 * redux, etc. Keep the HTML in the layout.
 */
export default class App extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Layout />
            </Router>
        );
    }
}
