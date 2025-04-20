const db = require('../config/db');

const getLastBillID = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT regisID FROM registration ORDER BY regisID DESC LIMIT 1', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};
module.exports = {getLastBillID};