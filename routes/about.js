const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
const { experiences } = require('../constants/experience');
const fs = require('fs');
const path = require('path');

router.get('/about', (req, res, next) => {
    let text;
    try {
        text = fs
            .readFileSync(path.resolve('./constants', 'scroll.txt'))
            .toString();
    } catch (error) {
        console.error(error);
    }
    res.render('about', {
        title: 'About',
        navLinks,
        testInScriptTag: 'About',
        testObjectScriptTag: experiences[0],
        text,
    });
});

module.exports = router;
