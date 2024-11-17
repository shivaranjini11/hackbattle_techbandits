require('dotenv').config()
const mongoose = require('mongoose')//loading mongoose file 

function establishConnection(){
    mongoose.connect('mongodb+srv://shivaranjinirameshkumar:4l21uRqtzd4FnlUC@hackbattle.jnlg1.mongodb.net/').then(
        ()=>{console.log('Mongo DB connection successful!')}
    ).catch(
        (e)=>{
            console.log(e)
        }
    )
}

module.exports = establishConnection