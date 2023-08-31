require("dotenv").config();
const sequelize = require("../config/connection.js");
const {Pack} = require('../models')
const { PacksData } = require("./packs.js");

const seed = async () => {
    await sequelize.sync({ force: true });
    const packs = await Pack.bulkCreate(PacksData, {
        validate: true
    })
    process.exit(1)
};

seed();