const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: false
    },
    weight:{
        type: Number,
        required: true
    },
    chronic_illness:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('users', userSchema)