const registrationModel = require('../models/registrationModel');

const CreateRegistration = async (req, res) =>{
    const {regisID, stdID, date} = req.body;
    try {
        await registrationModel.addRegistration(regisID, stdID, date);
        res.status(200).send({message: 'Successfully added registration'});
    } catch (error) {
        console.error('Error',error);
        res.status(500).send({message: 'Error adding registration'});
    }
}

module.exports = {CreateRegistration}