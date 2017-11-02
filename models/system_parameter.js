const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const SystemParameter = sequelize.define('system_parameter', {
        client_context: {type: DataTypes.STRING},
        name: {type: DataTypes.STRING},
        description: {type: DataTypes.TEXT},
        note: {type: DataTypes.TEXT},
        question: {type: DataTypes.STRING},
        type: {type: DataTypes.STRING},
        collection_type: {type: DataTypes.TEXT},
        key_type: {type: DataTypes.STRING},
        value_type: {type: DataTypes.STRING},
        value: {type: DataTypes.TEXT},
        group_id: {type: DataTypes.INTEGER},
        html_render_type: {type: DataTypes.STRING},
        validation_type: {type: DataTypes.STRING},
        min_length: {type: DataTypes.INTEGER},
        max_length: {type: DataTypes.INTEGER},
        min_no_of_answer: {type: DataTypes.INTEGER},
        max_no_of_answer: {type: DataTypes.INTEGER},
        is_editable: {type: DataTypes.STRING},
        is_visible: {type: DataTypes.STRING},
        send_email_on_change: {type: DataTypes.STRING},
        priority: {type: DataTypes.STRING},
        created_dts: {type: DataTypes.DATE},
        created_by: {type: DataTypes.STRING},
        last_updated_dts: {type: DataTypes.DATE},
        last_updated_by: {type: DataTypes.STRING}
    }, {
        timestamps: false,
        freezeTableName: true,
        underscored: true
    });

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

    SystemParameter.belongsTo(SystemParameterGroup, {foreignKey: 'group_id'});
    SystemParameterGroup.hasMany(SystemParameter, {foreignKey: 'group_id', as: 'SystemParameters'});

    SystemParameter.sync();

    return SystemParameter;
};
