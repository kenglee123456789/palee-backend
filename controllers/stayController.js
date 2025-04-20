const stayModel = require('../models/stayModel');

const getStay = async (req, res) =>{
    try {
        const results = await stayModel.getAllStay();
        res.status(200).json(results);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving stay data' });
    }
}
module.exports = { getStay };