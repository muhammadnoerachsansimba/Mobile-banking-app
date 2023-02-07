const db = require('../config/database.js');

const get = (result) => {
    db.query('SELECT * FROM account WHERE deleted_at IS NULL', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            result(null, rows);
        }
    });
}

const insert = (data, result) => {
    db.query('INSERT INTO account SET ?', [data], (err, rows) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, rows);
        }
    });
}

module.exports = {get, insert};

(async () => {
    await db;
})();