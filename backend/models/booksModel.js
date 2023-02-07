const db = require('../config/database.js');

// const Get = db.query('SELECT * FROM books', (err, rows, fields) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(rows);
//     }
// });

// async function Get() {
//     db.query('SELECT * FROM books', (err, rows, fields) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(rows);
//         }
//     });
// }

const get = (result) => {
    db.query('SELECT * FROM books WHERE deleted_at IS NULL', (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            result(null, rows);
        }
    });
}

const getById = (id, result) => {
    db.query('SELECT * FROM books WHERE deleted_at IS NULL AND id = ?', [id], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            result(null, rows);
        }
    });
}

const insert = (data, result) => {
    db.query('INSERT INTO books SET ?', [data], (err, rows) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, rows);
        }
    });
}

const update = (book, id, result) => {
    db.query('UPDATE books SET ? WHERE id = ?', [book, id], (err, rows) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, rows);
        }
    });
}

const deleted = (id, result) => {
    db.query('DELETE FROM books WHERE id = ?', [id], (err, rows) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, rows);
        }
    });
}

module.exports = {get, getById, insert, update, deleted};
// module.exports = updateBook;
// module.exports = deleteBook;


(async () => {
    await db;
})();