require("dotenv").config();
const sequelize = require("../config/connection.js");
const {Pack, Career} = require('../models');
const { CareersData } = require("./careers.js");
const { PacksData } = require("./packs.js");

const seed = async () => {
    // Sequelizing the server
    await sequelize.sync({ force: true });

    // Seeding the DLCs
    const packs = await Pack.bulkCreate(PacksData, { validate: true });
    console.log("--------------------------------------------------------");
    console.log("Packs added");

    // Seeding the Careers
    const Careers = await Career.bulkCreate(CareersData, { validate: true });
    console.log("--------------------------------------------------------");
    console.log("Careers added");

    process.exit(1)
};

seed();