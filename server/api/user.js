const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generateToken } = require('../auth');
const { isArrayEmpty } = require('../utils');

module.exports.registerUser = async ({ username, email, password }) => {

  // ADD VALIDATION

  const existingUser = await User.find({ username });

  if (!isArrayEmpty(existingUser))
    throw "User already exists"

  // gen password hash
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(user.password, salt);

  const new_user = await (new User({
    username, email, password: hash
  })).save();

  const payload = {
    id: new_user._id,
    username: new_user.username,
    joined: new_user.joined,
  };

  return {
    username: new_user.username,
    token: generateToken(payload)
  }
}

module.exports.loginUser = async (username, password) => {

  // ADD VALIDATION
  if (!username || !password)
    throw "One or more credentials field empty"

  const user = await User.findOne({ username });

  if (!user)
    throw "User not found"

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch)
    throw "Incorrect Password"

  const payload = {
    id: user._id,
    name: user.username,
    joined: user.joined
  };

  const token = generateToken(payload);

  return { username: user.username, token }
}