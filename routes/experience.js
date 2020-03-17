const express = require('express');
const { navLinks } = require('../constants/nav-links');
const { experiences } = require('../constants/experience');
const router = express.Router();
router.get('/experience', (req, res, next) => {
    res.render('experience', {
        title: 'Experience',
        navLinks,
        experiences,
        testInScriptTag: 'Experience',
        testObjectScriptTag: experiences[0],
    });
});

module.exports = router;
