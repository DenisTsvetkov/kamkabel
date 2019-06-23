const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

router.post('/send-message', UserController.sendMessage);

//router.post('/avatar/create', UserAvatarController.create);

module.exports = router;