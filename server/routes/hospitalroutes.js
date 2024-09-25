const express = require('express')
const hospitalroutes = express.Router()

const Model = require('../models/hospitalmodels')

//loading all the CRUD (create, revoke, update, remove) operations 
// Store user data
hospitalroutesroutes.post('/save_hospital', async (req, res) => {  
    const data = new Model({
        hospital_name: req.body.hospital,
        rating: req.body.rating,
        address: req.body.address
    })

    try{
        const savedData = await data.save()
        res.status(200).json({
            status: true,
            message: "hospital Stored successfully!",
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
hospitalroutes.get('/get_hospital', async (req, res) => {
    const output = await Model.find()
    res.status(200).json({
        status: true,
        message: "API data fetched successfully!",
        data: output
    })
})

// Load Individual Document
hospitalroutes.get('/get_hospital/:id', async (req, res) => {
    const output = await Model.findById(req.params.id)
    res.status(200).json({
        status: true,
        message: "hospital data fetched successfully!",
        data: output
    })
})


// Load Individual Document
hospitalroutes.delete('/delete_hospital/:id', async (req, res) => {
    res.status(200).json({
        status: true,
        message: "hospital data deleted successfully!",
        data: req.params.id
    })
})

module.exports = hospitalroutes