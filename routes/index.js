const models = require('../models');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.locals.clientId = req.session.clientId;

    models.client.findAll().then(clients => {
        res.render('index', {
            title: 'Express',
            clients: clients
        });
    });
});

/* POST client context. */
router.post('/client/set-context', (req, res) => {
    var clientId = req.body.clientId;

    req.session.clientId = clientId;
    res.locals.clientId = req.session.clientId;

    res.redirect('/');
});

module.exports = router;
