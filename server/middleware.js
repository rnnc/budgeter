const { log, seperator } = require('./utils')

module.exports.logError = (err, req, res, next) => {
  log(err);
  res.status(500).json({ error: err });

}

module.exports.logDate = (req, res, next) => {
  const date_now = new Date();
  console.log(date_now.toISOString(), "\n");
}

module.exports.seperator = (req, res, next) => {
  seperator();
}