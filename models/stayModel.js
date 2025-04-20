const db = require("../config/db");

const getAllStay = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM stay",
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

module.exports = {getAllStay}
