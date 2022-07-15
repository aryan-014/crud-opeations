const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Userschema = new Schema({
    username: String,
    password: String
})

const User = mongoose.model('User',Userschema)

module.exports = User