import React, {Component} from 'react';
import {withRouter} from 'react-router';
import ClientSelectForm from 'modules/client/components/ClientSelectForm';

class ClientListPage extends Component {

    constructor(props) {
        super(props);

        this.state = {'client': null, 'selectedClient': null};
    }

    componentDidMount() {
        fetch('/api/clients', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((clients) => this.setState({'clients': clients.clients}));
    }

    handleSubmit(e) {
        e.preventDefault();
        const location = '/clients/' + this.state.selectedClient;
        this.props.history.push(location);
    }

    handleChange(e) {
        this.setState({'selectedClient': e.target.value});
    }

    render() {
        const {clients} = this.state;

        return (
            <div>
                <ClientSelectForm
                    handleSubmit={this.handleSubmit.bind(this)}
                    handleChange={this.handleChange.bind(this)}
                    clients={clients}
                />
            </div>
        );
    }
}

export default withRouter(ClientListPage);
