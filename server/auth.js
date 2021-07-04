const jwt = require('jsonwebtoken');
const User = require('./models/User');

module.exports.authenticateToken = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    // pass the execution off to whatever request the client intended
    next();
  })
}

module.exports.requireAdminAuthentication = (req, res, next) => {

  
  next();
}

module.exports.generateToken = (payload) => {
  const signature = process.env.JWT_SECRET;
  const expiration = '30d';

  return jwt.sign({ payload, }, signature, { expiresIn: expiration });
}

module.exports.authenticateUser = async (jwt_payload) => {
  const user = await User.findById(jwt_payload.id);

  if (user)
    return { auth: true, user };
  return { auth: false, user: null };
}