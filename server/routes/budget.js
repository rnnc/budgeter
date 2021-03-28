const router = require("express").Router;
const Budget = require("../models/Budget");
const { authenticateToken } = require("../utils");

router.get('/getall', authenticateToken, (req, res) => {

});

router.post('/get', (req, res) => {

});

module.exports = router;