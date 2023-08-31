const express = require('express');
const router = express.Router();

const {
    Pack
} = require('../models')


// Getting all packs
router.get("/", async (req, res) => {
    try {
        const packData = await Pack.findAll()
        res.json(packData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all packs.", error: err.errors[0].message});
    }
})

// Adding new Pack
router.post("/", async (req, res) => {
    try {
        const newPack = await Pack.create(req.body);
        res.status(201).json({message: "Pack creation successful", data: newPack});
    } catch (err) {
        res.status(500).json({ message: "Error adding pack.", error: err.errors[0].message });
    }
})

module.exports = router;