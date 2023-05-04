const express = require('express')
const router = express.Router()
const AccountsController = require('../Controller/AccountsController')

router.post('/', AccountsController.Login)



module.exports = router