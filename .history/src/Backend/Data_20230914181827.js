const mongoose = require('mongoose')

let newData = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : String,
    email: String,
    password: String,
    imgpost:String
})
module.exports = mongoose()