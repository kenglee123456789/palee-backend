
const express = require('express');
const genderController = require('../controllers/genderController')
const router = express.Router();

router.get('/gender',genderController.getGender)

module.exports = router;
