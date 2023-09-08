const express = require('express');
const router = express.Router();

const {
    Skill,
    Pack
} = require('../models')


// Getting all Skills
router.get("/", async (req, res) => {
    try {
        const skillData = await Skill.findAll({include:Pack})
        res.json(skillData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all Skills.", error: err.toString()});
    }
})

// Adding new Skill
router.post("/", async (req, res) => {
    try {        
        const newSkill = await Skill.create(req.body);
        res.status(201).json({message: "Skill creation successful", data: newSkill});
    } catch (err) {
        res.status(500).json({ message: "Error adding Skill.", error: err.toString() });
    }
})

module.exports = router;