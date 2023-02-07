const {get, insert} = require('../models/accountModel.js');

const getAll = async(req, res) => {
    get((err, result) => {
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

module.exports = {getAll, createAccount};