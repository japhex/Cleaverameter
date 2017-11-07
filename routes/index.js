const models = require('../models');
const express = require('express');
const router = express.Router();

// Middleware
const sessionObject = require('../middleware/session');

router.use(sessionObject);

router.get('/api/clients', (req, res) => {
    models.client.findAll().then(clients => {
        req.session.clients = clients;
        res.json({clients: clients});
    });
});

/* GET home page. Route all page refresh urls to this route */
router.get('*', (req, res) => {
    res.render('index', {
        title: 'Cleaverameter'
    });
});




module.exports = router;
