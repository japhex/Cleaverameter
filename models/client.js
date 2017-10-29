const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('client', {
        name: {type: DataTypes.STRING},
        version: {type: DataTypes.STRING},
        schema: {type: DataTypes.STRING},
        current_release: {type: DataTypes.STRING},
        fcp_label: {type: DataTypes.STRING},
        last_successful_build: {type: DataTypes.DATE},
        last_failed_build: {type: DataTypes.DATE},
        build_status: {type: DataTypes.STRING}
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    Client.sync();

    return Client;
};
