const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Pack extends Model { }

Pack.init({
    type: {
        type: DataTypes.STRING,
        allowNull:false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    image: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
}, {
    sequelize
});

module.exports = Pack