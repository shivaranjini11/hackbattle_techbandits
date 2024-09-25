const express = require('express')
const doctorroutes = express.Router()

const Model = require('../models/doctormodels')

//loading all the CRUD (create, revoke, update, remove) operations 
// Store user data
routes.post('/save_doctor', async (req, res) => {  
    const data = new Model({
        doctor_name: req.body.doctor_namename,
        service: req.body.service,
        phone: req.body.phone,
        gender: req.body.gender,
        review: req.body.review

    })

    try{
        const savedData = await data.save()
        res.status(200).json({
            status: true,
            message: "doctor Stored successfully!",
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
routes.get('/get_doctor', async (req, res) => {
    const output = await Model.find()
    res.status(200).json({
        status: true,
        message: "API data fetched successfully!",
        data: output
    })
})

// Load Individual Document
routes.get('/get_doctor/:id', async (req, res) => {
    const output = await Model.findById(req.params.id)
    res.status(200).json({
        status: true,
        message: "doctor data fetched successfully!",
        data: output
    })
})


// Load Individual Document
routes.delete('/delete_doctor/:id', async (req, res) => {
    res.status(200).json({
        status: true,
        message: "doctor data deleted successfully!",
        data: req.params.id
    })
})

module.exports = doctorroutes