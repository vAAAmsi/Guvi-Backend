const mongoose = require('mongoose')

const ModelSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    age : {
        type : String
    },
    gender : {
        type : String
    },
    dob : {
        type : String
    },
    phnumber : {
        type : String
    }
})

module.exports = mongoose.model('users',ModelSchema)