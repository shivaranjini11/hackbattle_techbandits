const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = Schema({
    doctor_name:{
        type: String,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    review:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('hospital', doctorSchema)