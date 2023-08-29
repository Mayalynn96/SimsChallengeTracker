const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model{}

User.init({
    username:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type: DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            len: [8,20]
        }
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:"https://64.media.tumblr.com/3d317b0d1fd84fb7005ccf1816567b27/fa2bac1506567851-b4/s1280x1920/60dc193fa6c31070b58ddda757221185171e97b3.jpg"
    }
},{
    sequelize,
    hooks:{
        beforeCreate:userObj=>{
            userObj.password = bcrypt.hashSync(userObj.password,4);
        }
    }
});

module.exports=User