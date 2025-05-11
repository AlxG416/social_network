var Router = require('express');

var authRouter = require('./authRouter');
var postsRouter = require('./postsRouter');
var usersRouter = require('./usersRouter');

var router = new Router();

router.use('/auth', authRouter);
router.use('/posts', postsRouter);
router.use('/users', usersRouter);

module.exports = router;
