const express = require('express');
const router = express.Router();

const {
    Sim,
    Legacy
} = require('../models')

const jwt = require("jsonwebtoken");

// Getting all Sims
router.get("/", async (req, res) => {
    try {
        const simData = await Sim.findAll()
        res.json(simData)
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error getting all sims.", error: err });
    }
})

// Adding new Sim
router.post("/", async (req, res) => {
    const token = req.headers?.authorization?.split(" ")[1];
    if (!token) {
        return res.status(403).json({ msg: "you must be logged in to add a Sim" });
    }
    try {
        const tokenData = jwt.verify(token, process.env.JWT_SECRET);

        const legacyData = await Legacy.findByPk(req.body.LegacyId, {include: Sim});

        if (!legacyData) {
            return res.status(404).json({ message: "Legacy not found" });
        } else if (legacyData.UserId != tokenData.id) {
            return res.status(403).json({ message: "Legacy does not belong to current user" });
        }

        var isFounder = false;

        if (legacyData.Sims.length < 1){
            isFounder = true
        }

        const newSimBody = {
            isFounder: isFounder,
            generation: req.body.generation,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            // heir Status needs to be calculated based on eligibility
            heirStatus: req.body.heirStatus,
            species: req.body.species,
            isAdopted: req.body.isAdopted,
            // relation to heir needs to be be validated (only one heir and primary spouse for each generation)
            relationToHeir: req.body.relationToHeir,
            LegacyId: legacyData.id
        }

        const newSim = await Sim.create(newSimBody);

        res.status(201).json({ message: "Sim creation successful", data: newSim });
    } catch (err) {
        res.status(500).json({ message: "Error adding Sim.", error: err.toString() });
    }
})

module.exports = router;