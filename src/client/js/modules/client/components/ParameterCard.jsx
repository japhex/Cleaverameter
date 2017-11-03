import React from 'react';

const ParameterCard = ({parameter}) => (
    <div className="card border-secondary mb-3">
        <div className="card-header">
            <h2 className="card-header__name">{parameter.name}</h2>
            <span className="card-header__value-type badge badge-warning">
                {parameter && parameter.type.split('.')[2]}
            </span>
            <span className="card-header__value-type badge badge-secondary">
                <a href="?parameterGroup= parameters[i].group_id">parameterGroup</a>
            </span>
            <div className="card-header__info clearfix">
                <i className="material-icons" data-toggle="tooltip" data-placement="left" title="parameterBusinessQuestion">help_outline</i>
            </div>
        </div>
        <div className="card-body text-secondary">
            <h4 className="card-title">
                <code>
                    {parameter.value}
                </code>
            </h4>
            <p className="card-text">{parameter.description}</p>
        </div>
        <div className="card-footer">
            <small>last updated {parameter.last_updated_dts} by <strong>{parameter.last_updated_by}</strong></small>
        </div>
    </div>
);

export default ParameterCard;
