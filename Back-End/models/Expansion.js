const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Expansion extends Model { }

Expansion.init({
    type: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    data: {
        type: DataTypes.BLOB("long"),
    },
}, {
    sequelize
});

module.exports = Expansion