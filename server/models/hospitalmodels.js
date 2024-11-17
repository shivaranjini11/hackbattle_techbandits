const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hospitalSchema = Schema({
    hospital_name:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('hospitalmodel', hospitalSchema)