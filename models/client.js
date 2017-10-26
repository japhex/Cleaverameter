const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('client', {
        name: {type: DataTypes.STRING},
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

    // force: true will drop the table if it already exists
    Client.sync();

    return Client;
};
