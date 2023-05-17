const express = require('express')
const router = express.Router()
const AccountsController = require('../Controller/AccountsController')

router.put('/', AccountsController.EditAccount)

module.exports = router