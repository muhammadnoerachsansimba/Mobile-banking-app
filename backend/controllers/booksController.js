const {get, getById, insert, update} = require('../models/booksModel.js');
// const insertBook = require('../models/booksModel.js');
// const updateBook = require('../models/booksModel.js');
// const deleteBook = require('../models/booksModel.js');

// const getBooks = async (req, res) => {
//     try {
//         console.log(Get._rows[0]);
//         // const response = Get;
//         res.status(200).json(Get._rows[0]);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//         // console.log(error.message);
//     }
// }

const getBooks = async (req, res) => {
    get((err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

const getBooksById = async (req, res) => {
    const id = req.params.id
    getById(id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

const createBook = async (req, res) => {
    const data = req.body;
    // insert(data, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.json(result);
    //     }
    // });
    console.log(data);
}

const updatedBook = async (req, res) => {
    const book = req.body;
    const id = req.params.id;
    update(book, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

const deleteBook = async (req, res) => {
    const book = req.body;
    const id = req.params.id;
    update(book, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
}

module.exports = {getBooks, getBooksById, createBook, updatedBook, deleteBook};