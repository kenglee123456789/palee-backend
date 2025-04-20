const genderModel = require('../models/genderModel');

const getGender = async (req, res) =>{
    try {
        const results = await genderModel.getAllGender();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving stay data' });
    }
}
module.exports = { getGender };