const express = require('express');
const { navLinks } = require('../constants/nav-links');
const router = express.Router();
router.get('/hobbies', (req, res, next) => {
    res.render('hobbies', { title: 'Hobbies', navLinks });
});

module.exports = router;
