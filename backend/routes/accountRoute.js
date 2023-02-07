const express = require('express');
const {getAll, createAccount} = require('../controllers/accountController.js');
const router = express.Router();

// account
router.get("/getall_account", getAll)
router.post("/create_account", createAccount)
    

module.exports = router;