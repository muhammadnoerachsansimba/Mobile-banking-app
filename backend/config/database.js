const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mobile_banking'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = db;