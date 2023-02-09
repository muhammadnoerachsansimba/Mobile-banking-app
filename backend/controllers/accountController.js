const {get, getById, insert, update} = require('../models/accountModel.js');

const getAll = async(req, res) => {
    get((err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}

const getAccount = async(req, res) => {
    const id = req.params.id
    getById(id, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}

const createAccount = async(req, res) => {
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

const editAccount = async(req, res) => {
    const data = req.body
    const id = req.params.id
    update(JSON.parse(data.dataCard), id, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = {getAll, getAccount, createAccount, editAccount}