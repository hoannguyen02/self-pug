const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
router.get('/charity', (req, res, next) => {
    res.render('charity', { title: 'Charity', navLinks });
});

module.exports = router;
