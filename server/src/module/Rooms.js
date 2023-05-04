const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rooms = new Schema({
    id: mongoose.ObjectId,
    roomName: { type: String, default: 'Test Ground', required: true },
    admin: {
        id: { type: String } ,
        userName: { type:String },
        firstName: {type: String, default: null},
        lastName: {type: String, default: null}, 
    },
    people: [
        {
            person: {
                id: { type: String } ,
                userName: { type:String },
                firstName: {type: String, default: null},
                lastName: {type: String, default: null}, 
            }
        }
    ],
    messages: [
        {
            userName: { type: String },
            text: { type: String }
        }
     ],
    createAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model('rooms', Rooms)