const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const UserAvatarController = require('../controllers/UserAvatarController');

router.get('/', UserController.findAll);

// router.get('/:id', UserController.findById);

router.post('/create', UserController.create);

router.post('/avatar/create', UserAvatarController.create);

module.exports = router;