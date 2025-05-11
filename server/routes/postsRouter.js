var Router = require('express');

var postsController = require('../controllers/postsController');

var router = new Router();

router.post('/create', postsController.create);
router.post('/delete', postsController.delete);
router.post('/getAll', postsController.getAll);
router.get('/getSome', postsController.getSome);
router.put('/change', postsController.change);

module.exports = router;
