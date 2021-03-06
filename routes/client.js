const models = require('../models');
const express = require('express');
const router = express.Router();

// Middleware
const sessionObject = require('../middleware/session');

router.use(sessionObject);

/*
    MAIN CLIENT VIEWS
*/

/* GET client parameters. */

// Need 2 inputs, 'name' and 'value', 'name' will do a LIKE search on 'name' and 'description', 'value' will do a LIKE search on 'value'.

router.get('/parameters', (req, res) => {
    if (req.session.clientId === undefined) {
        res.redirect('/');
    } else {
        var systemParameterGroup = req.query.parameterGroup,
            searchTerm = req.query.searchTerm,
            whereClause = {
                client_context:req.session.clientId
            };

        if (systemParameterGroup !== undefined) {
            whereClause.group_id = systemParameterGroup;
        }

        if (searchTerm !== undefined) {
            whereClause.$or = [{name:{$like:'%' + searchTerm + '%'},description:{$like:'%' + searchTerm + '%'}}];
        }

        models.system_parameter.findAll({where:whereClause, include: [{ all: true, nested: true }], limit:100}).then(parameters => {
            res.render('models/system_parameter', {
                title: 'Cleaverameter | Parameters',
                parameters: parameters
            });
        });
    }
});

/* POST parameters search */
router.get('/parameters/search', (req, res) => {
    var isAjaxRequest = req.xhr,
        nameSearch = req.body.name,
        valueSearch = req.body.value,
        whereClause;

    if (nameSearch !== undefined) {
        whereClause = {$or: [{name:{$like:'%' + searchTerm + '%'},description:{$like:'%' + searchTerm + '%'}}]};
    } else if (valueSearch !== undefined) {
        whereClause = {value:{$like:'%' + searchTerm + '%'}};
    }

    models.system_parameter.findAll({where:whereClause}, limit:100}).then(parameters => {
        if (!isAjaxRequest) {
            res.render('models/system_parameter', {
                title: 'Cleaverameter | Parameters',
                parameters: parameters
            });
        } else {
            res.json({parameters:parameters, count: parameters.length});
        }
    });
});

router.get('/parameters/:clientId', (req, res) => {
    const clientId = req.params.clientId;
    const systemParameterGroup = req.query.parameterGroup;
    const searchTerm = req.query.searchTerm;
    const whereClause = {
        client_context: clientId
    };

    if (systemParameterGroup !== undefined) {
        whereClause.group_id = systemParameterGroup;
    }

    if (searchTerm !== undefined) {
        whereClause.$or = [{name:{$like:'%' + searchTerm + '%'},description:{$like:'%' + searchTerm + '%'}}];
    }

    models.system_parameter.findAll({where:whereClause, include: [{ all: true, nested: true }], limit:100}).then(parameters => {
        return res.json({parameters: parameters});
    });
});

/*
    CLIENT UTILITIES
*/

/* POST client context. */
router.post('/set-context', (req, res) => {
    let clientId = req.body.clientId;

    req.session.clientId = clientId;

    models.client.findOne({where:{id:clientId}}).then(client => {
        req.session.clientName = client.name;
        req.session.clientVersion = client.version;
        req.session.currentRelease = client.current_release;
        req.session.fcpLabel = client.fcp_label;
        req.session.buildStatus = client.build_status;
        res.redirect('/client/parameters');
    });
});

module.exports = router;
