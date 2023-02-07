const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 4500;
const accountRoute = require('./routes/accountRoute.js');

// app.get('/', (req, res) => {
//     db.query('SELECT * FROM books', (err, rows, fields) => {
//         if(err) {
//             console.log(err);
//             res.send(err);
//             // req.flash('error', err);
//             // res.render('books', { data: '' });
//         } else {
//             // res.render('books', { data: rows })
//             console.log(rows);
//             console.log(fields);
//             res.send(rows);
//         }
//     });
// });
// module.exports = app;
// app.listen(port, () => { console.log('Example app listening on port ' + port) })

app.use(express.json());
app.use(fileUpload());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(accountRoute);

app.listen(port, () => console.log('Example app listening on port ' + port))
