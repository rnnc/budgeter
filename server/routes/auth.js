const router = require('express').Router();
const User = require('../api/user');
const { log } = require('../utils');

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.body);

  try {
    const new_user = await User.registerUser({ username, email, password });
    log(" [#] New User Registered \n",
      "~    id: ", new_user.id, "\n",
      "   name: ", new_user.name, "\n",
      " joined: ", new_user.joined, "\n");
    res.json({ user });
  } catch (error) {
    log(" [*] User Registration Error ");
    res.status(400);
    next(error);
  }
});

router.post('/login', async (req, res) => {
  const { password } = req.body;
  const user_name = req.body.username
  try {
    const { username, token } = await User.loginUser(user_name, password);
    log(" [#] Login Success : ", username, "\n  ", token);
    res.json({ token })
  } catch (error) {
    log(" [*] User Login Error ");
    res.status(400);
    next(error);
  }
});

module.exports = router;