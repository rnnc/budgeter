const router = require('express').Router;

router.get('/', (req, res) => {
  res.send('TEMP INVALID ENDPOINT');
});

router.get('/test', (req, res) => {
  res.json({
    success: true,
    msg: req.query.msg || req.body.msg,
    pong: true
  });
  console.log('PING ~ ', req.ip);
});

router.use('/api/expense', require('./expense'));
//router.use('/api/budget', require('./budget'));

module.exports = router;