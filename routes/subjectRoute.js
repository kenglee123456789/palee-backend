const express = require('express');
const subjectController = require('../controllers/subjectController')
const router = express.Router();

router.get('/subject',subjectController.getSubject)

module.exports = router;
