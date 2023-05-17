const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Accounts = new Schema({
    id:  mongoose.ObjectId ,
    userName: { type: String, required: true },
    password: { type:String, required: true},
    firstName: {type: String, default: null},
    lastName: {type: String, default: null}, 
    email: {type: String, required: true},
    phoneNumber: {type: String, default: null},
    createAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('accounts', Accounts)