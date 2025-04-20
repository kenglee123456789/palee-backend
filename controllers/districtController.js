const districtModel = require('../models/distrctModel');

const getDistrict= async (req, res) =>{
    try {
        const results = await districtModel.getAllDistrict();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving district data' });
    }
}
module.exports = {getDistrict}