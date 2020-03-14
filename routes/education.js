const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
router.get('/education', (req, res, next) => {
    res.render('education', { title: 'Education', navLinks });
});

module.exports = router;
