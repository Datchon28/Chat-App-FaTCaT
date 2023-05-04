
const Rooms = require('../module/Rooms')

class RoomsController {
    
    async detail(req, res) {
        try {
            await Rooms.find({})
            .then(data => res.send(data))
        } catch (error) {
            console.log(error);
        }
    }

    async roomChoose(req, res) {
        try {
            await Rooms.find({ _id: req.body.id })
            .then(result => {
                res.status(200).send(result)
            })
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async getRoomChoose(req,res) {
        const id = req.body.id
        try {
            await Rooms.find({ _id: req.body.id })
            .then(result => {
                // console.log(result);
                res.status(200).send(result)
            })
        } catch (error) {
            
        }
    }

    async saveMessage(req, res) {
        try {
            
            const current = await Rooms.findByIdAndUpdate( String(req.body.id) , {
                $push: {
                    messages: {
                        userName: req.body.userName,
                        text: req.body.message
                    }
                }
            })
            .then(result => {
                res.status(200).send(result);
            })

            
        } catch (error) {
            res.status(500).send(error)
        }
    }

    async addRoom(req, res) {
        const newRoom = Rooms({
            roomName: req.body.roomName,
            admin:  req.body.admin,
            people: [
                {
                    person: req.body.person
                }
            ],
            messages: [
                {
                    userName: req.body.userName,
                    text: req.body.text
                }
            ] ,
        })

        try {
            await newRoom.save()
            res.status(200).send(newRoom)
            
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

module.exports = new RoomsController