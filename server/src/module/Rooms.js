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
            text: { type: String },
            reaction: { type: String, default: null },
            createAt: {
                minutes: {type: String , default:null},
                hour: {type: String , default:null} ,
                date: {type: String , default:null} ,
                month: {type: String , default:null} ,
                year: {type: String , default:null} 
            }
        }
     ],
    createAt: { type: Date, default: Date.now }

})

module.exports = mongoose.model('rooms', Rooms)