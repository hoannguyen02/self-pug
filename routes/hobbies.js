const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
const { experiences } = require('../constants/experience');
router.get('/hobbies', (req, res, next) => {
    res.render('hobbies', {
        title: 'Hobbies',
        navLinks,
        testInScriptTag: 'Hobbies',
        testObjectScriptTag: experiences[0],
    });
});

module.exports = router;
