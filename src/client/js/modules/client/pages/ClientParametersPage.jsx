import React, {Component} from 'react';
import ParameterCard from 'modules/client/components/ParameterCard';

export default class ClientParametersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {params: null};
    }

    componentDidMount() {
        const clientId = this.props.match.params.clientId;

        fetch('/client/parameters/' + clientId)
            .then((response) => response.json())
            .then((params) => this.setState({params: params}));
    }

    render() {
        const {params} = this.state;
        // TODO API and FE  error checking
        if(!params) {
            return null;
        }

        return (
            <div className="card-columns">
                {params.parameters.map((parameter, idx) => {
                    return <ParameterCard key={idx} parameter={parameter }/>
                })}
            </div>
        );
    }
}
