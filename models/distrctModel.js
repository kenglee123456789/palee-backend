const db = require("../config/db");
const getAllDistrict = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM district d INNER JOIN province p ON d.provinceID = p.provinceID",
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};
module.exports = {getAllDistrict};