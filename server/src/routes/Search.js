const express = require('express')
const router = express.Router()

const SearchController = require('../Controller/SearchController')

router.get('/', SearchController.user)

module.exports = router

