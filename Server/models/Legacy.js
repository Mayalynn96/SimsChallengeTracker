const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Legacy extends Model { }

Legacy.init({
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    generation: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1
    },
    extremeStart: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    ultraExtremeStart: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    householdFunds: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1800
    },
    lotValue: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 5000
    },
    businessFunds: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 0
    },
    veterinaryFunds: {
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 0
    },
    genderLaw: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "Equality",
        validate: {
            isIn: [["Equality", "Matriarchy", "Strict Matriarchy", "Patriarchy", "Strict Patriarchy", "Strict Equality"]]
        }
    },
    bloodlineLaw: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "Modern",
        validate: {
            isIn: [["Strict Traditional", "Traditional", "Modern", "Foster", "Strict Foster"]]
        }
    },
    heirLaw: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "First Born",
        validate: {
            isIn: [["First Born", "Last Born", "Living Will", "Merit", "Merit", "Random", "Exemplar", "Democracy", "Magical Bloodline", "Magical Strength"]]
        }
    },
    speciesLaw: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "Tolerant",
        validate: {
            isIn: [["Xenoarchy", "Xenophobic", "Brood", "Tolerant"]]
        }
    }
}, {
    sequelize
});

module.exports = Legacy