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
        },
        {
            name: 'Cath Kidston',
            version: '6.6.9',
            schema: 'cath_kidston',
            current_release: 'CATH_10',
            fcp_label: 'FCP-6.6.2-RC.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Dunnes',
            version: '5.1',
            schema: 'dunnes',
            current_release: 'DUNNES_12',
            fcp_label: 'FCP5.1.11.11-dunnes12.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Farrow and Ball',
            version: '5.4',
            schema: 'farrow_and_ball',
            current_release: 'FAB_21',
            fcp_label: 'fcp5.4.2h.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'GLTC',
            version: '6.6.6',
            schema: 'gltc',
            current_release: 'GLTC_38',
            fcp_label: 'Webclient-6.6.6-GLTC-RC.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Jigsaw',
            version: '6.6.19',
            schema: 'jigsaw',
            current_release: 'GLTC_38',
            fcp_label: 'Webclient-6.6.19-RC.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Karen Millen AUS',
            version: '5.1',
            schema: 'karen_millen_aus',
            current_release: 'KM_AUS_7',
            fcp_label: 'fcp5.1.11.11KMAus7.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Phase Eight',
            version: '5.4',
            schema: 'phase_eight',
            current_release: 'PHE-33',
            fcp_label: 'fcp5.4.2phe32.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'Topgrade',
            version: '6.7.1',
            schema: 'get_the_label',
            current_release: 'TOPGRADE-32',
            fcp_label: 'Webclient-6.7.1-RC.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        },
        {
            name: 'WHSmith',
            version: '5.2',
            schema: 'whsmith',
            current_release: 'WHSMITH_14',
            fcp_label: 'fcp5.2.2.1.whs-14_6.cert',
            last_successful_build: '0000-00-00 00:00:00',
            last_failed_build: '0000-00-00 00:00:00',
            build_status: 'successful'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('client', null, {});
    }
};
