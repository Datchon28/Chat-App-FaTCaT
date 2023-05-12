const express = require('express')
const router = express.Router()

const Rooms = require('../Controller/RoomsController')

router.get('/detail', Rooms.detail)
router.get('/room_choose', Rooms.roomChoose)
router.put('/message', Rooms.saveMessage)
router.post('/add-room', Rooms.addRoom)

module.exports = router