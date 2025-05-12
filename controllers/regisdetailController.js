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
const showRegisdetail = async (req, res) => {
    try {
        const regisdetail = await regisdetailModel.getRegisdetail();
        res.status(200).send(regisdetail);
    } catch (error) {
        console.error('Error', error);
        res.status(500).send({ message: 'Error fetching regisdetail' });
    }
}
module.exports = {CreateRegisdetail, showRegisdetail}
