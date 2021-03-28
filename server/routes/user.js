const router = require("express").Router;
const User = require("../models/User");
const { authenticateToken, generateToken } = require("../utils");

router.get('/current', authenticateToken, (req, res) => {

  res.json({})
});

router.post('/register', (req, res) => {

});

router.post('/login', (req, res) => {

});

module.exports = router;