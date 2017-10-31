const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const SystemParameterGroup = sequelize.define('system_parameter_group', {
        name: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING},
        created_dts: {type: DataTypes.DATE},
        created_by: {type: DataTypes.STRING},
        last_updated_dts: {type: DataTypes.DATE},
        last_updated_by: {type: DataTypes.STRING},
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    SystemParameterGroup.sync();

    return SystemParameterGroup;
};
