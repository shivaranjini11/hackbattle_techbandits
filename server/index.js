const express = require('express')
// const cors = require('cors')
require('dotenv').config()
const app = express()

// LOAD CORS
const cors = require('cors')

app.use(cors({
    origin:'*',
    // ['facebook.com']
    credentials: true,
    allowedHeaders: ['Content-Type', 'Origin', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']    
}))


// Load Mongo DB connection object
const connect = require('./config/db')
connect()
const connect = require('./config/hospitaldb')
connect()

// loading routes.js file
const routes = require('./routes/routes')
const hospitalroutes = require('./routes/hospitalroutes')


app.use(express.json())

app.use('/api', routes)
app.use('/hosapi', hospitalroutes)

// TO execute the backend server connecting to port 
const port = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     res.send('API data collected successfully!')
// })

// app.get('/show_data', (req, res) => {
//     res.json({
//         status: true,
//         message: "API data fetched successfully!"
//     })
// })

// TO execute the backend server connecting to port 
app.listen(port, () => {
    if (process.env.port == 3200) {
        console.log(`Backend Node server is running ${port}`)
    } else {
        console.log(`Backend Node server is running ${port}`)
    }
})