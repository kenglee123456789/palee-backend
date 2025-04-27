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
const countMaleInStay2 = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT COUNT(*) as count FROM student WHERE (sexID = ? OR sexID = ?) AND stay_id = ?';
        const values = [1, 3, 2];
        db.query(query, values, (err, results) => {
            if (err) reject(err);
            resolve(results[0].count);
        });
    });
};
const countFeMaleInStay2 = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT COUNT(*) as count FROM student WHERE sexID = ? AND stay_id = ?';
        const values = [2,  2];
        db.query(query, values, (err, results) => {
            if (err) reject(err);
            resolve(results[0].count);
        });
    });
};

module.exports = { getLastStudentID, addStudent, countMaleInStay2, countFeMaleInStay2 };
