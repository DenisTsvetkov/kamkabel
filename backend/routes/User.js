const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const UserAvatarController = require('../controllers/UserAvatarController');
const MessageController = require('../controllers/MessageController');
const ProfileController = require('../controllers/ProfileController');

router.get('/', UserController.findAll);

// router.get('/:id', UserController.findById);

router.post('/create', UserController.create);

router.post('/avatar/create', UserAvatarController.create);

router.post('/profile/create', ProfileController.create);

router.post('/send-message', MessageController.sendMessage);

module.exports = router;