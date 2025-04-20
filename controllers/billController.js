const billModel = require('../models/billModel')

const getNextBillID = async (req, res) => {
  try {
    const results = await billModel.getLastBillID();
    let nextID = 'B0001';
    if (results.length > 0) {
      let lastBillID = results[0].regisID;
      let currentNum = parseInt(lastBillID.replace('B', ''));
      currentNum++;
      nextID = 'B' + currentNum.toString().padStart(4, '0');
    }
    res.json({ nextBillID: nextID });
  } catch (err) {
    res.status(500).send({ message: 'Error retrieving bills data' });
  }
};

module.exports = {getNextBillID}