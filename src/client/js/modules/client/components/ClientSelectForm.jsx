import React from 'react';

const ClientSelectForm = ({clients, handleChange, handleSubmit}) => {
    if(!clients) {
        return null;
    }

    return (
        <form onSubmit={handleSubmit}>
            <select defaultValue={clients[0].id} className="form-control" onChange={handleChange}>
                <option value="">--------------</option>
                {clients.map((client) => {
                    return <option key={client.id} value={client.id}>{client.name}</option>
                })}
            </select>
            <button className="form-control btn btn-light">Set client</button>
        </form>
    );
};

export default ClientSelectForm;
