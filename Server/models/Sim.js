const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Sim extends Model { }

Sim.init({
    isFounder: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    generation: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull:false
    },
    heirStatus: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            isIn: [["Current Heir", "Previous Heir", "Next Heir", "Eligible", "Ineligible"]]
        }
    },
    isAlive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    species: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "Human",
        validate: {
            isIn: [["Human", "Alien", "Vampire", "Servo", "Ghost", "Spellcaster", "Plant Sim", "Mermaid", "Werewolves"]]
        }
    },
    isAdopted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    relationToHeir: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            isIn: [["Heir", "Primary Spouse", "Spouse", "Child"]]
        }
    }
}, {
    sequelize
});

module.exports = Sim