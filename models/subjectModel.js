const db = require("../config/db");

const getAllSubject = () => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM subjectdetail sd INNER JOIN subject s ON sd.subID = s.subID INNER JOIN level l ON sd.levelID = l.levelID",
      (err, results) => {
        if (err) reject(err);
        resolve(results);
      }
    );
  });
};

module.exports = {getAllSubject}