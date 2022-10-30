const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();

router.post('/login', UserController.login);
router.post('/regis', UserController.register);

module.exports = router;
