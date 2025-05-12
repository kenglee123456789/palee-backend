const db = require('../config/db')

const addRegistdetail = (regisID, subject, scholarship, Cost) =>{
    return new Promise((resolve, reject)=>{
      db.query('INSERT INTO regisdetail(regisID, subDetailID, scholarship_id, Cost) VALUES (?, ?, ? ,?)',[regisID, subject, scholarship, Cost],
        (error, results)=>{
          if(error) reject(error);
          resolve(results);
        }
      )
    })
  }
const getRegisdetail =()=>{
    return new Promise((resolve, reject) => {
        db.query('SELECT rd.regisID, std.stdName,std.Lastname, s.subName, l.level FROM regisdetail rd INNER JOIN registration r ON rd.regisID = r.regisID INNER JOIN student std ON r.stdID = std.stdID INNER JOIN subjectdetail subdt ON rd.subDetailID = subdt.subDetailID INNER JOIN subject s ON subdt.subID = s.subID INNER JOIN level l ON subdt.levelID = l.levelID',
            (error, results) => {
                if (error) reject(error);
                resolve(results);
            });
    });
}
  module.exports = {addRegistdetail, getRegisdetail}
