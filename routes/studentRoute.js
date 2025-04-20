
const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.get('/students', studentController.getNextStudentID);
router.post('/add-student', studentController.addStudent);

module.exports = router;
