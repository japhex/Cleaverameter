const models = require('../models');
const express = require('express');
const router = express.Router();

// Middleware
const sessionObject = require('../middleware/session');

router.use(sessionObject);

/* GET home page. */
router.get('/', (req, res) => {
    models.client.findAll().then(clients => {
        req.session.clients = clients;

        res.render('index', {
            title: 'Cleaverameter',
            clients: clients
        });
    });
});

/* GET client parameters. */
router.get('/client/parameters', (req, res) => {
    if (req.session.clientId === undefined) {
        res.redirect('/');
    } else {
        models.system_parameter.findAll({where:{client_context:req.session.clientId}}).then(parameters => {
            res.render('models/system_parameter', {
                title: 'Cleaverameter | Parameters',
                parameters: parameters
            });
        });
    }
});

/* POST client context. */
router.post('/client/set-context', (req, res) => {
    let clientId = req.body.clientId;

    req.session.clientId = clientId;

    models.client.findOne({where:{id:clientId}}).then(client => {
        req.session.clientName = client.name;
        req.session.clientVersion = client.version;
        res.redirect('/');
    });
});

module.exports = router;
