var Router = require('express');

var authController = require('../controllers/authController');

var router = new Router();

router.post('/registrate', authController.registrate);
router.post('/login', authController.login);

module.exports = router;
