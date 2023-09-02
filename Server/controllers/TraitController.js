const express = require('express');
const router = express.Router();

const {
    Trait,
    Pack
} = require('../models')


// Getting all Traits
router.get("/", async (req, res) => {
    try {
        const traitData = await Trait.findAll({include:Pack})
        res.json(traitData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all Traits.", error: err});
    }
})

// Adding new Trait
router.post("/", async (req, res) => {
    try {        
        const newTrait = await Trait.create(req.body);
        res.status(201).json({message: "Trait creation successful", data: newTrait});
    } catch (err) {
        res.status(500).json({ message: "Error adding Trait.", error: err });
    }
})

module.exports = router;