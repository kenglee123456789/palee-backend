const paymentModel = require('../models/paymentModel');

const createPayment = async (req, res) =>{
    const {regisID, amount, pay, pend, date} = req.body;
    try {
        await paymentModel.addPayment(regisID, amount, pay, pend, date);
        res.status(200).send({message: 'Create payment successful'})
    } catch (error) {
        console.error('Error', error);
        res.status(500).send({message: 'Create payment failed'});
    }
}

module.exports = {createPayment}