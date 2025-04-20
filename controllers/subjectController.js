const subjectModel = require('../models/subjectModel');

const getSubject = async (req, res) =>{
    try {
        const results = await subjectModel.getAllSubject();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving subject data' });
    }
}
module.exports = { getSubject };