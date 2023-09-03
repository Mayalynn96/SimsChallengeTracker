const express = require('express');
const router = express.Router();

const {
    Legacy
} = require('../models')

const jwt = require("jsonwebtoken");

// Getting all Legacies
router.get("/", async (req, res) => {
    try {
        const legacyData = await Legacy.findAll()
        res.json(legacyData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all Legacys.", error: err});
    }
})

// Adding new Legacy
router.post("/", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to add a Legacy" });
    }
    try {  
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        const newLegacy = await Legacy.create({
            name: req.body.name,
            extremeStart: req.body.extremeStart,
            ultraExtremeStart: req.body.ultraExtremeStart,
            lotValue: req.body.lotValue,
            genderLaw: req.body.genderLaw,
            bloodlineLaw: req.body.bloodlineLaw,
            heirLaw: req.body.heirLaw,
            speciesLaw: req.body.speciesLaw,
            UserId: tokenData.id
        });

        res.status(201).json({message: "Legacy creation successful", data: newLegacy});
    } catch (err) {
        res.status(500).json({ message: "Error adding Legacy.", error: err });
    }
})

module.exports = router;