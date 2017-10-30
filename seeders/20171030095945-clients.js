'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('client', [{
            name: 'Mint Velvet',
            version: '6.6.7',
            schema: 'mint_velvet',
            current_release: 'MINTVELVET_27',
            fcp_label: 'Webclient-6.7.0-RC.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Coast',
            version: '6.6.7',
            schema: 'coast',
            current_release: 'CST_26',
            fcp_label: 'Webclient-6.7.0-RC.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Thomas Pink',
            version: '6.6.9',
            schema: 'thomas_pink',
            current_release: 'TP_19',
            fcp_label: 'Webclient-6.7.0-RC.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('client', null, {});
    }
};
