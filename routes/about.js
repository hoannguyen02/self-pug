const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
router.get('/about', (req, res, next) => {
    res.render('about', { title: 'About', navLinks });
});

module.exports = router;
