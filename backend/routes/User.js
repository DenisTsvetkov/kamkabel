const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const UserController = require('../controllers/UserController');

router.get('/', UserController.findAll);

router.get('/:id', UserController.findById);

router.post('/create', UserController.create);

module.exports = router;