var Router = require('express');

var usersController = require('../controllers/usersController');

var router = new Router();

router.post('/getAll', usersController.getAll);
router.post('/getUser', usersController.getUser);

module.exports = router;
