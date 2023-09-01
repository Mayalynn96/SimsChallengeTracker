const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Aspiration extends Model { }

Aspiration.init({
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
    typeImage: {
        type: DataTypes.STRING,
        allowNull:false
    },
    aspirationImage: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
}, {
    sequelize
});

module.exports = Aspiration