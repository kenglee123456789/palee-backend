const db = require("../config/db");
const getAllGender = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM sex",
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};
module.exports = {getAllGender};
