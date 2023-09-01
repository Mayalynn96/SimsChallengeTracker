const express = require('express');
const router = express.Router();

const {
    Aspiration,
    Pack
} = require('../models')


// Getting all Aspirations
router.get("/", async (req, res) => {
    try {
        const aspirationData = await Aspiration.findAll({include:Pack})
        res.json(aspirationData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all Aspirations.", error: err});
    }
})

// Adding new Aspiration
router.post("/", async (req, res) => {
    try {        
        const newAspiration = await Aspiration.create(req.body);
        res.status(201).json({message: "Aspiration creation successful", data: newAspiration});
    } catch (err) {
        res.status(500).json({ message: "Error adding Aspiration.", error: err });
    }
})

module.exports = router;