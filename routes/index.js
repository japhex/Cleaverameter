const models = require('../models');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    models.system_parameter.findAll().then(parameters => {
        res.render('index', {
            title: 'Express',
            parameters: parameters
        });
    });
});

module.exports = router;
