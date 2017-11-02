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

module.exports = router;
