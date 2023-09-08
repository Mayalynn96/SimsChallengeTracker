require("dotenv").config();
const sequelize = require("../config/connection.js");
const { Pack, Career, Aspiration, Trait, Skill} = require('../models');
const { AspirationData } = require("./aspirations.js");
const { CareersData } = require("./careers.js");
const { PacksData } = require("./packs.js");
const { SkillData } = require("./skills.js");
const { TraitData } = require("./traits.js");

const seed = async () => {
    // Sequelizing the server
    await sequelize.sync({ force: true });

    // Seeding the DLCs
    const packs = await Pack.bulkCreate(PacksData, { validate: true });
    console.log("--------------------------------------------------------");
    console.log("Packs added");
    console.log("--------------------------------------------------------");

    // Seeding the Careers
    const Careers = await Career.bulkCreate(CareersData, { validate: true });
    console.log("--------------------------------------------------------");
    console.log("Careers added");
    console.log("--------------------------------------------------------");

    // Seeding Aspirations
    const Aspirations = await Aspiration.bulkCreate(AspirationData, { validate: true });
    console.log("--------------------------------------------------------");
    console.log("Aspirations added");
    console.log("--------------------------------------------------------");

    // Seeding Trait
    const Traits = await Trait.bulkCreate(TraitData, { validate: true });
    console.log("--------------------------------------------------------");
    console.log("Traits added");
    console.log("--------------------------------------------------------");

    // Seeding Skill
    const Skills = await Skill.bulkCreate(SkillData, { validate: true });
    console.log("--------------------------------------------------------");
    console.log("Skills added");
    console.log("--------------------------------------------------------");

    process.exit(1)
};

seed();