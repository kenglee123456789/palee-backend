const express = require('express');
const registrationController = require('../controllers/registrationController')
const router = express.Router();

router.post('/registration', registrationController.CreateRegistration);
module.exports = router;