const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
const { experiences } = require('../constants/experience');
router.get('/education', (req, res, next) => {
    res.render('education', {
        title: 'Education',
        navLinks,
        testInScriptTag: 'Education',
        testObjectScriptTag: experiences[0],
    });
});

module.exports = router;
