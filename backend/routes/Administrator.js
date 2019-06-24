const express = require('express');
const router = express.Router();

const AdministratorController = require('../controllers/AdministratorController');
const Auth_dataController = require('../controllers/Auth_dataController');

router.get('/', AdministratorController.findAll);

// router.get('/:id', UserController.findById);

router.post('/create', AdministratorController.create);

router.post('/auth-data/create', Auth_dataController.create);

module.exports = router;