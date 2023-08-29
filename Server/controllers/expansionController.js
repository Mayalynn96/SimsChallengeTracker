const express = require('express');
const router = express.Router();
const fs = require("fs");

const {
    Expansion
} = require('../models')


// Getting all expansions
router.get("/", async (req, res) => {
    try {
        const expansionData = await Expansion.findAll()
        res.json(expansionData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all expansions." });
    }
})

// Adding new Expansion
router.post("/", async (req, res) => {
    try {
        const newExpansion = await Expansion.create({
            type: req.body.type,
            name: req.body.name,
            data: fs.readFileSync(__basedir + "/resources/assets/images/expansions/" + req.body.imageName
            )
        });
        res.json(newExpansion);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error adding expansion." });
    }
})

module.exports = router;