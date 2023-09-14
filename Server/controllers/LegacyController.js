const express = require('express');
const router = express.Router();

const {
    Legacy,
    Sim
} = require('../models')

const jwt = require("jsonwebtoken");

// Getting all Legacies
router.get("/", async (req, res) => {
    try {
        const legacyData = await Legacy.findAll({include: Sim})
        res.json(legacyData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all Legacys.", error: err});
    }
})

// Get Legacies by current User with limit
router.get("/userLegacies", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to get user Legacies." });
    } try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        const userLegacyData = await Legacy.findAll({
            where: {UserId: tokenData.id},
            include: Sim,
            limit: +req.query.limit
        })
        res.json(userLegacyData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting user Legacies.", error: err});
    }
})

// Get all Legacies by current User
router.get("/allUserLegacies", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to get all user Legacies." });
    } try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        const userLegacyData = await Legacy.findAll({
            where: {UserId: tokenData.id},
            include: Sim
        })
        res.json(userLegacyData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all user Legacies.", error: err});
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