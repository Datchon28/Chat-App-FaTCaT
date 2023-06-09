
const Rooms = require('../module/Rooms')

class RoomsController {
    
    async detail(req, res, next) {
        try {
            await Rooms.find({ $or: [ {"admin.id": req.query.admin} , {people: { $elemMatch: { "person.userName": req.query.person } }} ] })
            .then(data => {
                res.status(200).send(data)
            })
        } catch (error) {
            res.status(500).send(error);
            next()
        }
    }

    async roomChoose(req, res, next) {
        try {
            await Rooms.find({ _id: req.query.id })
            .then(result => {
                res.status(200).send(result)
            })
        } catch (error) {
            res.status(500).send(error)
            next()
        }
    }
    
    async saveMessage(req, res, next) {
        try {
            
            const current = await Rooms.findByIdAndUpdate( String(req.body.id) , {
                $push: {
                    messages: {
                        userName: req.body.userName,
                        text: req.body.message,
                        createAt: req.body.createAt
                    }
                }
            })
            .then(result => {
                res.status(200).send(result);
            })

            
        } catch (error) {
            res.status(500).send(error)
            next()
        }
    }

    async addRoom(req, res, next) {
        const newRoom = Rooms({
            roomName: req.body.roomName,
            admin:  req.body.admin,
            people: req.body.person,
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
            next()
        }
    }
}

module.exports = new RoomsController