const db = require('../config/db')

const addRegistdetail = (regisID, subject, scholarship, Cost) =>{
    return new Promise((resolve, reject)=>{
      db.query('INSERT INTO regisdetail(regisID, subDetailID, scholarship_id, cost) VALUES (?, ?, ? ,?)',[regisID, subject, scholarship, Cost],
        (error, results)=>{
          if(error) reject(error);
          resolve(results);
        }
      )
    })
  }
  module.exports = {addRegistdetail}
