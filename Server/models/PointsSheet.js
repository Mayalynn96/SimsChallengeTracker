const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class PointsSheet extends Model { }

PointsSheet.init({
    family: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    creative: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    fortune: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    love: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    knowledge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    athletic: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    nature: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    food: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    popularity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    deviance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    penalties: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    bonus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    sequelize
});

module.exports = PointsSheet