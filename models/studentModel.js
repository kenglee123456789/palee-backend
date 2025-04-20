const db = require('../config/db');
const getLastStudentID = () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT stdID FROM student ORDER BY stdID DESC LIMIT 1', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

const addStudent = (studentID, studentName, studentLastname, gender, tel, phone, school, district, stayID) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO student VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [studentID, studentName, studentLastname, gender, tel, phone, school, district, stayID];
    db.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { getLastStudentID, addStudent };
