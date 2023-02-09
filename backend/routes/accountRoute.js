const express = require('express');
const {getAll, getAccount, createAccount, editAccount} = require('../controllers/accountController.js');
const {getAllTransaction, getTransaction, send} = require('../controllers/transactionController.js');
const router = express.Router();

// account
router.get("/getall_account", getAll)
router.get("/get_account/:id", getAccount)
router.post("/create_account", createAccount)
router.put("/edit_account/:id", editAccount)
    
// send
router.get("/getall_transaction", getAllTransaction)
router.get("/get_transaction/:id", getTransaction)
router.post("/send", send)

module.exports = router;