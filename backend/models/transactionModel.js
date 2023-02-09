const db = require('../config/database.js');

const get = (result) => {
    db.query('SELECT * FROM transaction WHERE deleted_at IS NULL', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            result(null, rows);
        }
    });
}

const getById = (id, result) => {
    db.query('SELECT * FROM transaction WHERE deleted_at IS NULL AND id = ?', [id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            result(null, rows);
        }
    });
}

const insert = (data, result) => {
    db.query('INSERT INTO transaction SET ?', [data], (err, rows) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, rows);
        }
    });
}

module.exports = {get, getById, insert};

(async () => {
    await db;
})();