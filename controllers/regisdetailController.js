const regisdetailModel = require('../models/regisdetailModel');

const CreateRegisdetail = async (req, res) =>{
    const {regisID, subject, scholarship, Cost} = req.body;
    try {
        await regisdetailModel.addRegistdetail(regisID, subject, scholarship, Cost);
        res.status(200).send({message: 'Successfully added regisdetail'});
    } catch (error) {
        console.error('Error',error);
        res.status(500).send({message: 'Error adding regisdetail'});
    }
}
module.exports = {CreateRegisdetail}