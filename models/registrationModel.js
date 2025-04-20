const db = require("../config/db");

const addRegistration = (regisID, stdID, date) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO registration VALUES (?,?,?)',[regisID, stdID, date],
      (error , results)=>{
        if(error) reject(error);
        resolve(results);
    })
  });
};

 module.exports = {addRegistration}
