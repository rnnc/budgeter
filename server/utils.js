const jwt = require("jsonwebtoken");

module.exports.seperator = () => {
  console.log("___________\n")
}

module.exports.log = (...string_arr) => {
  // env param for logging, do later
  if (1) {
    if (string_arr.arr === 1)
      console.log(string_arr[0])
    else
      console.log(...string_arr)
  }
}

module.exports.isArrayEmpty = (arr) => {

  if (!Array.isArray(arr))
    throw "isArrayEmpty: Invalid Input, not an Array"

  if (!(arr && arr.length))
    return true;
  return false;

}

module.exports.authenticateToken = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  })
}

module.exports.generateToken = ({ _id, name, email }) => {
  const data = { _id, name, email };
  const signature = process.env.ACCESS_TOKEN_SECRET;
  const expiration = '30d';

  return jwt.sign({ data, }, signature, { expiresIn: expiration });
}