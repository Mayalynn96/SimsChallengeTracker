const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trait extends Model { }

Trait.init({
    type: {
        type: DataTypes.STRING,
        allowNull:false
    },
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

module.exports = Trait