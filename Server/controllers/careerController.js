const express = require('express');
const router = express.Router();

const {
    Career,
    Pack
} = require('../models')


// Getting all Careers
router.get("/", async (req, res) => {
    try {
        const careerData = await Career.findAll({include:Pack})
        res.json(careerData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all Careers.", error: err.errors[0].message});
    }
})

// Adding new Career
router.post("/", async (req, res) => {
    try {
        // Getting Id of the pack associated with the career
        const careerPack = await Pack.findOne({where: {name: req.body.pack}})
        
        const newCareer = await Career.create({
            type: req.body.type,
            pack: req.body.pack,
            name: req.body.name,
            branch: req.body.branch,
            image: req.body.image,
            PackId: careerPack.id
        });
        res.status(201).json({message: "Career creation successful", data: newCareer});
    } catch (err) {
        res.status(500).json({ message: "Error adding Career.", error: err });
    }
})

module.exports = router;