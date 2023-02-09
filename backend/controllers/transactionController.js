const {get, getById, insert} = require('../models/transactionModel.js');

const getAllTransaction = async(req, res) => {
    get((err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}

const getTransaction = async(req, res) => {
    const id = req.params.id
    getById(id, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}

const send = async(req, res) => {
    const data = req.body;
    insert(JSON.parse(data.data), (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
    console.log(data);
}

module.exports = {getAllTransaction, getTransaction, send};