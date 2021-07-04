const router = require('express').Router();
const User = require('../api/user');
const { log } = require('../utils');

router.get('/current', (req, res) => {
  const user = req.user;
  if (user) {
    //debug, remove
    log(user);
    res.json(user);
  }
  const error = new Error("not signed in / not authenticated")
  res.status(400);
  next(error);
});

module.exports = router;