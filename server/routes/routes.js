const express = require('express')
const routes = express.Router()

const Model = require('../models/models')

//loading all the CRUD (create, revoke, update, remove) operations 
// Store user data
routes.post('/save_user', async (req, res) => {  
    const data = new Model({
        name: req.body.name,
        age: req.body.age,
        chronic_illness: req.body.chronic_illness,
        weight: req.body.weight,
        email: req.body.email,
        password: req.body.password
    })

    try{
        const savedData = await data.save()
        res.status(200).json({
            status: true,
            message: "User Stored successfully!",
            data: savedData
        })
    }catch(e){
        res.status(400).json({
            status: false,
            message: "Something went wrong"
        })
    }
})

// Fetch all the user documents
routes.get('/get_users', async (req, res) => {
    const output = await Model.find()
    res.status(200).json({
        status: true,
        message: "API data fetched successfully!",
        data: output
    })
})

// Load Individual Document
routes.get('/get_user/:id', async (req, res) => {
    const output = await Model.findById(req.params.id)
    res.status(200).json({
        status: true,
        message: "User data fetched successfully!",
        data: output
    })
})


// Load Individual Document
routes.delete('/delete_user/:id', async (req, res) => {
    res.status(200).json({
        status: true,
        message: "User data deleted successfully!",
        data: req.params.id
    })
})

module.exports = routes