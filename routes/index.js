const express = require('express');
const router = express.Router();
const articleRouter = require('./article');
const userRoutes = require('./user');

router.use('/article', articleRouter);
router.use('/user', userRoutes);

module.exports = router;
