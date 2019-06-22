const express = require('express');
const router = express.Router();

const AdministratorController = require('../controllers/AdministratorController');

router.get('/', AdministratorController.findAll);

// router.get('/:id', UserController.findById);

router.post('/create', AdministratorController.create);

module.exports = router;