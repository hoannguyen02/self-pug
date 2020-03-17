const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
const { experiences } = require('../constants/experience');
router.get('/about', (req, res, next) => {
    res.render('about', {
        title: 'About',
        navLinks,
        testInScriptTag: 'About',
        testObjectScriptTag: experiences[0],
    });
});

module.exports = router;
