const express = require('express')
const router = express.Router()

const Rooms = require('../Controller/RoomsController')

router.post('/detail', Rooms.detail)
router.post('/room_choose', Rooms.roomChoose)
router.post('/get-room-choose', Rooms.getRoomChoose)
router.put('/message', Rooms.saveMessage)
router.post('/add-room', Rooms.addRoom)

module.exports = router