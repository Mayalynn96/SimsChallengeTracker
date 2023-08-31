const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Career extends Model { }

Career.init({
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
    branch: {
        type: DataTypes.STRING,
        allowNull:true,
        unique:true
    },
    image: {
        type: DataTypes.STRING,
        allowNull:false
    },
}, {
    sequelize
});

module.exports = Career