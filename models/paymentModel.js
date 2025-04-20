const db = require('../config/db');

const addPayment =(regisID, amount, pay, pend, date)=>{
    return new Promise((resolve, reject)=>{
        db.query('INSERT INTO payment(regisID, amount, pay, pend, payDate) VALUES (?, ?, ?, ?, ?)',
            [regisID, amount, pay, pend, date],
            (err, results)=>{
            if(err) reject(err);
            resolve(results);
        })
    })
}
module.exports = {addPayment}