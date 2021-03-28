const router = require('express').Router;
const Expense = require('../models/Expense');
const { authenticateToken } = require('../utils');

router.get("/get", authenticateToken, (req, res) => {

});

router.post('/add', autheticateToken, (req, res) => {

});

router.delete('/remove', authenticateToken, (req, res) => {

});

module.exports = router;