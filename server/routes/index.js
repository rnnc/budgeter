const router = require('express').Router();
const { requireAdminAuthentication, authenticateToken } = require('../auth');

router.get('/', (req, res) => {
  res.status(403).send('TEMP INVALID ENDPOINT');
});

router.get('/test', (req, res) => {
  res.json({
    success: true,
    msg: req.query.msg || req.body.msg,
    pong: true
  });
  console.log('PING ~ ', req.ip);
});

router.all('/api/*', authenticateToken);
router.all('/admin/*', requireAdminAuthentication);

router.use('/auth', require('./auth'));
router.use('/api/user', require('./user'));
router.use('/api/expense', require('./expense'));
router.use('/api/budget', require('./budget'));

module.exports = router;