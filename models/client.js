const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('client', {
        name: {type: DataTypes.STRING},
        version: {type: DataTypes.STRING}
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    Client.sync();

    return Client;
};
