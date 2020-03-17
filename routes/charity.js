const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
const { experiences } = require('../constants/experience');
router.get('/charity', (req, res, next) => {
    res.render('charity', {
        title: 'Charity',
        navLinks,
        testInScriptTag: 'Charity',
        testObjectScriptTag: experiences[0],
    });
});

module.exports = router;
