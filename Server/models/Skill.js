const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Skill extends Model { }

Skill.init({
    pack: {
        type: DataTypes.STRING,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    image: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
}, {
    sequelize
});

module.exports = Skill