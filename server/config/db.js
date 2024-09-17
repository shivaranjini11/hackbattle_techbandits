require('dotenv').config()
const mongoose = require('mongoose')

function establishConnection(){
    mongoose.connect(process.env.MONGO_DB_CONNECTION_URL).then(
        ()=>{console.log('Mongo DB connection successful!')}
    ).catch(
        (e)=>{
            console.log(e)
        }
    )
}

module.exports = establishConnection