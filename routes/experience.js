const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
router.get('/experience', (req, res, next) => {
    res.render('experience', { title: 'Experience', navLinks });
});

module.exports = router;
